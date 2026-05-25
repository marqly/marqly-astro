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

## Deploy (IMPORTANT — read before deploying)

- Target is a Cloudflare **Worker** named `marqly-astro`, NOT Pages.
- The Worker auto-builds from GitHub repo **`marqly/marqly-astro`** branch `main` (build `npm run build`, then deploy `npm run deploy` = `wrangler deploy`).
- Our code lives locally with `origin` = `marqly/marketing_site`; the **deploy remote is `marqly-astro`**. To deploy: `git push marqly-astro <branch>:main`.
- Staging URL (safe, not the live domain): https://marqly-astro.trymarqly.workers.dev — **LIVE with our site as of 2026-05-25**.
- Setup: `@astrojs/cloudflare` adapter + `wrangler.json` (assets→`dist`, main→`dist/_worker.js/index.js`) + `public/.assetsignore` (so wrangler skips `_worker.js`/`_routes.json`). `.nvmrc`=22.
- DNS cutover (marqly.com → this Worker) is the final, user-gated step — not done.
- Known: routes 307-redirect to trailing-slash (`/Pricing`→`/Pricing/`). Fix with Astro `build.format:'file'` for no-slash URL parity with the live Framer site (pending).

## Migration status (2026-05-25)

- Done: scaffold, full 24-page capture, diff harness, tokens/fonts, shell (BaseLayout/Header/Footer), pages: Home, Pricing, Extension, Terms, Privacy, vs/raindrop (first-pass clones). **DEPLOYED live to the Worker staging URL.**
- First-pass diff scores ~10–27% (structurally faithful; pixel-polish pending). Pricing best (~11%).
- Pending: trailing-slash fix, blog (template + 17 MDX posts, dedupe 3 junk slugs), vs/raindrop build-out, pixel-polish iteration, SEO/redirects finalize, DNS cutover.
- `/T&C` → `/terms` 301 (ampersand URL normalized); other URLs preserved 1:1.

## Lab Notes: What Not To Do

- 2026-05-25: Astro 5.18 + npm 11 throw EBADENGINE on Node 20.10 (need ≥20.19) → build still works locally but is unsupported → `.nvmrc=22` for Cloudflare; recommend bumping local Node to 22 LTS.
- 2026-05-25: `/vs/raindrop` is a near-empty stub on the LIVE site (only H1+subhead even after JS hydration) → not a capture failure, the page is unfinished in production → clone matches; ask user whether to build it out or drop it.
- 2026-05-25: capture.mjs uses `waitUntil:'load'` which is fine for Framer's SSR'd pages → fully client-rendered pages would need `networkidle`+wait, but only vs/raindrop was JS-only and it's just a stub.
- 2026-05-25: Cloudflare Worker deploy failed twice → (1) missing `deploy` npm script (Worker runs `npm run deploy`), (2) wrangler refused to upload `dist/_worker.js` as a public asset → add `"deploy":"wrangler deploy"` AND `public/.assetsignore` containing `_worker.js`+`_routes.json`. Validate locally with `npx wrangler deploy --dry-run` before pushing.
- 2026-05-25: the deploy-connected repo is `marqly/marqly-astro` (NOT `marketing_site`, which is just `origin`) → push to `marqly-astro main` to deploy.
