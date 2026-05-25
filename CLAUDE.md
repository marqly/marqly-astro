# Marqly Marketing Site — Project CLAUDE.md

Compressed project context for Claude Code. Global rules from
`~/.claude/CLAUDE.md` still apply. Detailed design/system notes live in
`./docs/superpowers/` (spec + plan) and the auto-memory file.

## Architecture (compressed)

Pixel-perfect rebuild of the Framer-hosted marqly.com marketing site as an
**Astro v5 static site** deployed to **Cloudflare Pages**. The legacy site
(Framer) is the visual reference; we capture it with a headless browser and
clone it with clean, hand-written Astro components + scoped CSS + design tokens.
Blog posts are Astro Content Collections (MDX). No backend — auth/product live
separately on app.marqly.com.

## Stack

- **Language / framework**: Astro v5 (static output), TypeScript, MDX
- **Styling**: scoped component CSS + design tokens (`src/styles/tokens.css`)
- **Backend**: none (marketing only; app is external)
- **Build / run**: `npm run dev` (local), `npm run build` → `dist/`, `npm run preview`
- **Test**: visual regression via `node active/scripts/diff.mjs` (pixelmatch vs live reference) + `astro build` success
- **Host**: Cloudflare Pages (build `npm run build`, output `dist/`)

## Key entry points

- `astro.config.mjs` — site URL, static output, mdx + sitemap integrations
- `src/layouts/BaseLayout.astro` — `<head>`/SEO, global CSS, fonts, Header/Footer
- `src/layouts/BlogPostLayout.astro` — cloned blog post template
- `src/content/config.ts` — blog collection zod schema
- `src/styles/tokens.css` — design tokens extracted from the live site
- `active/scripts/capture.mjs` / `diff.mjs` — live-site capture + screenshot-diff harness

## Migration info

- Spec: `docs/superpowers/specs/2026-05-25-framer-to-astro-migration-design.md`
- Plan: `docs/superpowers/plans/2026-05-25-framer-to-astro-migration.md`
- Canonical domain: `https://www.marqly.com` (www, per sitemap)
- **URL preservation:** live URLs kept 1:1 (incl. `/Pricing`, `/T&C`, dotted slugs). Only the 3 junk/duplicate blog slugs get 301s in `public/_redirects`.
- **SEO is critical:** titles/descriptions/canonical/OG/JSON-LD captured and replicated; do not let them drift.

## Sandbox rule (hard)

Never dump generated files into this project root. Use `./active/tmp/` for
ephemeral work and `./active/logs/` for research outputs (incl. capture
artifacts and diff scores). The root stays clean.

## Deploy

- GitHub repo `marqly/marketing_site` is connected to Cloudflare Pages (auto-build on push to `main`).
- Cloudflare build settings should be: build `npm run build`, output `dist`. No adapter (static).
- `.nvmrc` pins Node 22 for the Pages build (Astro 5.18 needs Node ≥20.19).
- A push to `main` triggers a **production** build — do not push a half-finished state without the user's OK.

## Migration status (2026-05-25)

- Done: scaffold, full 24-page capture, diff harness, tokens/fonts, shell (BaseLayout/Header/Footer), pages: Home, Pricing, Extension, Terms, Privacy, vs/raindrop (first-pass clones).
- First-pass diff scores ~10–27% (structurally faithful; pixel-polish pending). Pricing best (~11%).
- Pending: pixel-polish iteration, blog (template + 17 MDX posts, dedupe 3 junk slugs), SEO/redirects finalize, deploy verify on *.pages.dev, DNS cutover.
- `/T&C` → `/terms` 301 (ampersand URL normalized); other URLs preserved 1:1.

## Lab Notes: What Not To Do

- 2026-05-25: Astro 5.18 + npm 11 throw EBADENGINE on Node 20.10 (need ≥20.19) → build still works locally but is unsupported → `.nvmrc=22` for Cloudflare; recommend bumping local Node to 22 LTS.
- 2026-05-25: `/vs/raindrop` is a near-empty stub on the LIVE site (only H1+subhead even after JS hydration) → not a capture failure, the page is unfinished in production → clone matches; ask user whether to build it out or drop it.
- 2026-05-25: capture.mjs uses `waitUntil:'load'` which is fine for Framer's SSR'd pages → fully client-rendered pages would need `networkidle`+wait, but only vs/raindrop was JS-only and it's just a stub.
