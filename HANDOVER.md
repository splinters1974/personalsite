# Handover: martynsheridan.com

Read this first. It explains what this project is, what has been decided, and what is left to do. The full brief and risk analysis are in `docs/PHASE1-DISCOVERY.md`.

## What it is

Personal site for Martyn Sheridan (Commercial & Sales Director, Ameresco UK), plus a planned private project hub. Audience: senior, boardroom-level contacts. Tone: commercial, confident, direct. UK spelling. No em dashes. Plain language, no buzzwords.

## Stack

- Astro 5 (static output), TypeScript, hand-written CSS. No CSS framework.
- Fonts self-hosted via Fontsource: Archivo (variable width; headlines use `font-stretch: 125%`) and IBM Plex Mono (labels).
- Hosting: Netlify. Settings live in `netlify.toml`, including security headers and a strict Content-Security-Policy (`script-src 'self'`, no inline scripts or inline `style` attributes).
- Node 22.

## Commands

```bash
npm install
npm run dev          # local dev server, http://localhost:4321
npm run build        # LIVE build into dist/ (what Netlify runs)
npm run build:proto  # PROTOTYPE build: shows review aids and mock pages
npm run check        # type check
```

## Two build modes (important)

- **Live** (`npm run build`): anything still marked `[[like this]]` in the content is hidden. Also hidden: the prototype bar, photo placeholders and unconfirmed projects. `scripts/prune-mock-pages.mjs` deletes the mock `/admin`, `/access`, `/private` and `/review` pages from `dist/`.
- **Prototype** (`PUBLIC_PROTOTYPE=true`): shows all of the above, with placeholders highlighted, for review.

The switch is `PROTO` and `live()` in `src/data/text.ts`.

## Where things are

| Path | What |
|---|---|
| `src/data/site.ts` | All content: homepage, about, experience, projects. Drafted from Martyn's 2026 CV. |
| `src/data/text.ts` | Placeholder handling (`[[...]]`), `PROTO` flag, `live()` helper |
| `src/styles/tokens.css` | Colours (navy and red, light and dark themes), type scale, spacing |
| `src/styles/global.css` | Base styles, buttons, labels |
| `src/components/Header.astro` | Header and full-screen menu (accessible: Escape closes, focus returns) |
| `src/components/LoadProfile.astro` | Signature hero chart: illustrative half-hourly demand, before and after solar plus battery |
| `src/pages/index.astro` | Homepage: hero, figures band, sector ticker, capability tabs, statement band, deal stages, projects, about |
| `src/pages/admin/`, `access/`, `private/` | Static mock-ups only. Not secure. Removed from live builds. |
| `public/theme.js` | Dark/light toggle and the prototype's "hide marks" switch |

## Rules to keep

- Never invent career facts, figures, testimonials or project details. Use only what Martyn supplies.
- Never publish personal details from the CV: date of birth, home address, phone number, family.
- Keep Martyn's independent projects clearly separate from Ameresco. The footer disclaimer stays.
- No stock photography. Real photos of Martyn and his work only.
- Keep the strict CSP working: no inline scripts or inline styles. Astro is set to emit scripts as files (`assetsInlineLimit: 0` in `astro.config.mjs`).
- Support both themes, keyboard use and `prefers-reduced-motion`.

## Still open (need Martyn)

1. Two Ameresco results (1GW grid-scale pipeline; 300MW battery project closed): clear with Ameresco before publishing.
2. The statement line on the homepage (currently a draft).
3. Project details for UK Solar Calculator, HH Insights and Hospital Energy Insights: description, status, URL, and public or private.
4. Photography: portrait plus on-site shots.
5. A cleaned CV PDF (no personal details) for the private CV page.

## Not built yet (from the brief)

The backend phases, per `docs/PHASE1-DISCOVERY.md`:

- Supabase Auth with MFA for `/admin`
- per-project passwords and invitation links
- Cloudflare R2 private file storage with signed URLs
- the protected CV download
- automated backups via GitHub Actions
- the admin dashboard with full create, edit and delete for projects

The brief requires design sign-off before this starts. The target is close to £0 a month on free tiers, with no paid services without Martyn's approval.

## Git

- Repo: `splinters1974/personalsite`. `main` is what deploys.
- Working branch: `claude/epic-volta-1jsih2`. It holds the live/prototype build split, which is not yet merged into `main`.
