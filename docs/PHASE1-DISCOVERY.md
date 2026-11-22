# Phase 1 discovery and Phase 2 prototype

Version 0.1, 22 November 2026. For Martyn's review. Nothing in the backend has been built yet. The brief asks for a stop here until the design is approved.

## What you need to decide

1. **Approve the design direction** (or tell me what to change). The prototype is clickable on desktop and mobile.
2. **Backup destination for files.** Recommendation: a second, independent free bucket (see Backups). Otherwise off-site file backup is a launch blocker under section 10 of the brief.
3. **Email verification for email-locked invitations.** This needs an email-sending service. Recommendation: Resend's free tier, sending from a subdomain. It's a new account, so it needs your approval.
4. **Content.** I need your LinkedIn URL, a photograph, confirmed career entries and project descriptions. Everything highlighted yellow in the prototype is a placeholder.
5. **Previous sites.** I have not seen UK Solar Calculator, HH Insights or Tiger. Send screenshots or URLs so I can check the new site doesn't repeat their patterns.

## Design direction

An editorial layout rather than a landing page. The idea is a well-set printed CV crossed with a magazine contents page.

- **Type.** Newsreader (a serif with optical sizing, made for reading on screen) for headings and the large name. Hanken Grotesk (a plain, legible sans) for body text and interface. Both are open licence and served from the site itself, so there are no Google Fonts calls and no third-party cookies.
- **Colour.** Warm white paper (#FAF8F4), near-black ink (#17191D), one navy accent (#1F3A5F). No gradients, no glow, no icons. All text pairs pass WCAG AA contrast.
- **Structure.** Thin rules and ledgers instead of cards. The homepage uses a definition list ("In brief") and a numbered project index. Projects are a table on desktop and stacked records on mobile.
- **Variation.** Project pages have two layouts, chosen per project in admin. *Feature* has a large screenshot with facts beside the text. *Notes* is narrow and long-form, with facts across the top. This stops every detail page looking identical.
- **Photo.** Small and on About only, plus a small version in the homepage About section. No hero portrait.
- **Mobile.** The navigation stays visible as a row (no hamburger menu). Ledgers collapse to label-over-value. Tables become records.
- **Motion.** Colour and underline transitions only, and only when the visitor hasn't asked for reduced motion.
- **Employer separation.** A footer line on every page says independent projects are not affiliated with or endorsed by Ameresco.

References borrowed in principle only: the restraint and big type of gabrielvaldivia.com, the mix of project kinds on vanschneider.com, the clear sorting of perell.com.

## Sitemap

| Route | Visibility | How it is built |
|---|---|---|
| `/` | Public | Static, rebuilt when content changes |
| `/about/` | Public | Static |
| `/experience/` | Public | Static |
| `/projects/` | Public | Static, public projects only |
| `/projects/[slug]/` | Public | Static, public projects only |
| `/contact/` | Public | Static, mailto link (no form) |
| `/access/[id]/` | Private | Server-rendered. Uses an opaque ID, not the project name |
| `/p/[id]/...` | Private | Server-rendered private project pages and files |
| `/i/[token]` | Private | Invitation link handler, server only |
| `/private/cv/` | Private | Server-rendered, PDF via short-lived signed link |
| `/admin/...` | Admin only | Server-rendered, Supabase Auth with MFA |
| `/sitemap.xml` | Public | Public pages only |

Private and draft projects are never part of the static build. Nothing about them can leak into public HTML or JavaScript. This is enforced in `src/pages/projects/[slug].astro`.

## Architecture

```
                Visitor / Martyn (browser)
                         |
                         v
        +----------------------------------------+
        |  Netlify                               |
        |   Static Astro pages (public site)     |
        |   Netlify Functions (Astro SSR routes) |
        |     /admin  /access  /i  /p  /api      |
        +----------------------------------------+
             |  service keys live here only
     +-------+------------------+
     v                          v
+-----------------+     +---------------------+
| Supabase (free) |     | Cloudflare R2       |
|  Auth + MFA     |     |  private bucket     |
|  Postgres + RLS |     |  signed URLs only   |
+-----------------+     +---------------------+
     ^                          ^
     |  nightly                 |  nightly
+-----------------------------------------------+
| GitHub Actions (scheduled)                    |
|   pg_dump  -> backup bucket (7 kept)          |
|   R2 sync  -> independent backup bucket       |
|   writes backup_runs row, alerts on failure   |
+-----------------------------------------------+
```

**Why this stack (as briefed).** Astro produces plain HTML for public pages, so almost no JavaScript ships to visitors. Admin and private routes run as Netlify Functions through the Astro Netlify adapter. Supabase handles admin sign-in with TOTP two-factor and the database. R2 holds private files with no egress fees. I am not proposing any changes to the stack.

**Security model, briefly.**
- Project passwords are hashed with Argon2id and checked only on the server. Failed attempts are rate limited per IP and per project. Errors are generic.
- A successful check sets an HttpOnly, Secure, SameSite=Lax cookie scoped to one project ID. Sessions are short-lived (proposed 12 hours) and carry a credential version. Changing or turning off the password bumps the version, which ends every existing session.
- Invitation tokens are 32 random bytes. Only a SHA-256 hash is stored. A token is exchanged once for a session cookie and removed from the URL by redirect, so it doesn't sit in browser history or analytics.
- Files are served by a function that checks the session, then redirects to an R2 signed URL valid for 5 minutes. Uploads use signed PUT URLs straight to R2, so large files never pass through a function.
- Row Level Security is on for every table. The browser never holds the Supabase service key or the R2 keys.
- Every admin action and access grant is written to `audit_events`.

## Free-tier limits (checked 22 November 2026)

| Service | Free allowance | What it means for this site |
|---|---|---|
| Netlify | 300 credits a month. Bandwidth costs 20 credits per GB. Projects **pause** when credits run out. Accounts created before 4 September 2025 stay on legacy limits. | Serve files from R2, not Netlify. A light personal site should sit well inside the allowance, but build and deploy counts also use credits, so check the account's actual rates. Hard cap, so no surprise bills. |
| Supabase | 2 active projects, 500 MB database, **no automatic backups**, paused after about a week of low activity. | 500 MB is plenty for metadata. The missing backups and the pausing both need dealing with (below). |
| Cloudflare R2 | 10 GB-month storage, 1M Class A (writes) and 10M Class B (reads) operations a month. Egress free. | Covers the 1 to 10 GB requirement. Above 10 GB it costs $0.015 per GB-month, roughly £1.20 a month per extra 100 GB. ⚠ I believe Cloudflare asks for a payment card to enable R2 even on the free tier. Check this before signing up. |
| GitHub | Private repos get a monthly allowance of free Actions minutes. | Nightly backups take a few minutes. ⚠ Check the current minutes figure on GitHub's billing page. |

Sources: [Netlify credit-based plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/), [Netlify how credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/), [Supabase pricing](https://supabase.com/pricing), [Supabase project pausing](https://supabase.com/docs/guides/platform/free-plan-pausing), [Cloudflare R2 pricing](https://developers.cloudflare.com/r2/pricing/).

## Backups and recovery

Supabase Free has no backups, so we build our own.

- **Database.** A nightly GitHub Action runs `pg_dump`, encrypts the dump and uploads it to a backup bucket. It keeps 7 daily copies and records the run in `backup_runs`. The admin overview shows a red banner if the last success is more than 36 hours old. A side benefit is that the nightly connection keeps the Supabase project from pausing.
- **Files.** The same job copies new and changed R2 objects to a **second, independent bucket**. Deletes are soft for 7 days. My recommendation is a separate free provider for that bucket, so one account problem can't take out both copies. Which provider is your decision (see above). I'll confirm current free allowances before proposing one by name.
- **Code.** GitHub, plus Netlify's deploy history for one-click rollback.
- **Proof.** Phase 6 includes a tested restore of a deleted record, a deleted file and an old deploy, with the evidence written into the handover.

## Delivery plan

| Phase | Output | Gate |
|---|---|---|
| 1 Discovery | This document | You read it |
| 2 Prototype | Clickable site, admin and access concepts (this branch) | **Your design approval: I stop here** |
| 3 Public site | Real content, Supabase-backed content, Netlify preview | Content sign-off |
| 4 Private infrastructure | Auth with MFA, sessions, passwords, invitations, R2, protected CV | Security tests pass |
| 5 Administration | Project CRUD, uploads, sharing, content editing | You run through it |
| 6 Validation | Backups and restore tests, security, accessibility and performance checks | Zero critical defects |
| 7 Launch | DNS, email forwarding, HTTPS, handover guides | Your go-ahead to change DNS |

## Risks and trade-offs

1. **Email-locked invitations need outgoing email.** Proving someone owns an email address means sending them a code. Supabase's built-in mailer is heavily rate limited and isn't meant for production. A free sending service (Resend, for example) fits, but it's a new account and needs your approval. Without one, email-locked invitations can't be delivered securely.
2. **File backups to a second provider** are needed for genuinely independent recovery. Otherwise this is a launch blocker under the brief.
3. **External projects stay reachable.** If UK Solar Calculator or HH Insights run on their own Netlify sites, hiding them here does not protect them. Admin labels these "portal-controlled discovery only" unless the host itself checks access. True end-to-end protection for those would mean moving them behind this site's gateway or adding auth on their hosts.
4. **Shared passwords don't identify people.** The admin says so. Use invitations when you need to know who opened something.
5. **Netlify pauses at the credit cap.** A traffic spike could take the site offline until the month resets. Serving all downloads from R2 keeps this unlikely. The admin will show monthly usage.
6. **Supabase pause.** The nightly backup job keeps the project active, but if the job fails for a week the project pauses. The failure alert covers this.
7. **Prototype admin pages are static mock-ups.** They show sample data only and will be replaced by server-protected routes in Phase 4. The prototype must not be deployed to the live domain as it stands.

## Open questions for Martyn

1. Your LinkedIn profile URL.
2. A photograph you're happy to use (natural, not a studio headshot, is best for this style).
3. Career entries: employers, roles, years and one line each, plus any qualifications.
4. For each project: one-line description, why you built it, who it's for, status, and whether it's public or private at launch.
5. Screenshots or links for UK Solar Calculator, HH Insights and Tiger.
6. Which inbox martyn@martynsheridan.com should forward to. Has the domain been bought, and with which registrar?
7. Approval for a second backup provider and an email-sending service (both free tiers).
