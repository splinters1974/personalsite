# martynsheridan.com

Personal site and private project hub for Martyn Sheridan. Built with Astro, deployed on Netlify.

**Status: Phase 2 prototype, awaiting design approval.** No backend yet. Admin and private-access pages are static mock-ups with sample data. Do not deploy this branch to the live domain.

- Brief decisions, architecture, free-tier limits, risks: [`docs/PHASE1-DISCOVERY.md`](docs/PHASE1-DISCOVERY.md)
- Placeholder content is wrapped in `[[double brackets]]` in `src/data/site.ts` and shows highlighted on the page.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run check      # type check
```

## Where things live

| Path | What |
|---|---|
| `src/styles/tokens.css` | Colours, type scale, spacing. Change design here. |
| `src/data/site.ts` | All prototype content (moves to Supabase in Phase 3) |
| `src/pages/` | One file per route |
| `src/pages/admin/` | Admin concept (mock) |
| `netlify.toml` | Build settings and security headers |
