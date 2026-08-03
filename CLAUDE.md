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

## SEO engines (2026-08-02, PhotoAI-playbook build-out — NOT yet deployed)

- Plan: `docs/superpowers/plans/2026-08-02-photoai-seo-aso-replication.md`. Product truth for ALL marketing claims: `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`.
- Data layer: `src/data/competitors/*.json` (24 tools + marqly, verified pricing, 20-boolean feature matrix, `lastVerified`). ALL compare/alternatives pages + LinkHub render from it — edit the JSON, never page copy. Helpers: `src/lib/competitors.ts`, `features.ts`, `compare-content.ts`, `schema.ts`.
- Engines: `/faq/*` (60, QAPage), `/compare/marqly-vs-*` (24) + `/compare/x-vs-y` (105 from `src/content/verdicts/`), `/alternatives/*` (24), 40 root-level use-case landers (`src/content/usecases/` via `src/pages/[usecase].astro`), `/tools/*` (8; YouTube transcript/summarize + dead-link checker use `prerender=false` API routes in `src/pages/api/` — summarize needs the Workers AI binding in wrangler.json).
- `LinkHub.astro` = sitewide pre-footer link hub (photoai pattern), fully collection-driven — links appear only when target pages exist.
- "X vs Marqly" blog posts were 301'd into `/compare/` (see `public/_redirects`); don't recreate them as posts.
- OG cards: `node active/scripts/gen-og-cards.mjs` (blog) + `gen-og-seo.mjs` (all SEO namespaces) after adding content. Link integrity: `node active/scripts/check-links.mjs` after build.
- ASO copy + specs (CWS/App Store/AlternativeTo/review-prompt/Discover-UGC): `docs/aso/`.

## Lab Notes: What Not To Do

- 2026-05-25: Astro 5.18 + npm 11 throw EBADENGINE on Node 20.10 (need ≥20.19) → build still works locally but is unsupported → `.nvmrc=22` for Cloudflare; recommend bumping local Node to 22 LTS.
- 2026-05-25: `/vs/raindrop` is a near-empty stub on the LIVE site (only H1+subhead even after JS hydration) → not a capture failure, the page is unfinished in production → clone matches; ask user whether to build it out or drop it.
- 2026-05-25: capture.mjs uses `waitUntil:'load'` which is fine for Framer's SSR'd pages → fully client-rendered pages would need `networkidle`+wait, but only vs/raindrop was JS-only and it's just a stub.
- 2026-05-25: Cloudflare Worker deploy failed twice → (1) missing `deploy` npm script (Worker runs `npm run deploy`), (2) wrangler refused to upload `dist/_worker.js` as a public asset → add `"deploy":"wrangler deploy"` AND `public/.assetsignore` containing `_worker.js`+`_routes.json`. Validate locally with `npx wrangler deploy --dry-run` before pushing.
- 2026-05-25: the deploy-connected repo is `marqly/marqly-astro` (NOT `marketing_site`, which is just `origin`) → push to `marqly-astro main` to deploy.
- 2026-06-10: `git push marqly-astro` returned 403 ("denied to amrogrey") → gh keyring has two accounts and the active one lacks repo access → `gh auth switch -u marqly`, push, then `gh auth switch -u amrogrey`.
- 2026-06-10: DNS cutover already happened — www.marqly.com serves the Worker; "staging" pushes are PROD. Legal pages rebuilt as Astro (`/terms`, `/privacypolicy`); GA4 typo (`googletemanager`) fixed in LandingLayout; favicon.ico shipped.
- 2026-08-03: scoped styles referenced CSS vars that don't exist in tokens.css (`--fs-3xl`, `--radius-md`, the whole `--color-*` family in BlogPostLayout) → browsers silently DROP those declarations → "broken/off" pages with no error anywhere → tokens.css now carries compat aliases; before styling, verify var names: `grep -o '^\s*--[a-z0-9-]*:' src/styles/tokens.css`. Also: global reset strips `list-style` — any new rich-text container needs `.prose` (global) or explicit list-style.
- 2026-08-03: Workers AI model `@cf/meta/llama-3.1-8b-instruct` was deprecated 2026-05-30 (error 5028 at runtime, not build) → summarize endpoint uses `@cf/meta/llama-3.3-70b-instruct-fp8-fast`; if summaries 502, check model deprecations first.
- 2026-08-03: YouTube watch-page caption URLs return EMPTY bodies (proof-of-origin lockdown) → transcript endpoint must use InnerTube `youtubei/v1/player` with ANDROID client + parse timedtext XML (see src/pages/api/youtube-transcript.ts).
- 2026-08-03: `build.format:'file'` makes `Astro.url.pathname` include `.html` during prerender → canonicals must strip it (layouts do); with two CF accounts in the keyring, dev/deploy needs `account_id` pinned in wrangler.json (AI binding forces a remote proxy session in dev).
- 2026-08-02: `npx astro check` crashes node (OOM) with the enlarged content graph (250+ content files) → run with `NODE_OPTIONS=--max-old-space-size=8192 npx astro check`; `astro build` is the real gate and doesn't need the bump.
- 2026-06-21: `npm run preview` (astro preview) fails — "@astrojs/cloudflare adapter does not support the preview command" → use `npm run dev` (astro dev, http://localhost:4321) for local browser verification, or `wrangler dev` against `dist/`. Note Pricing/Extension use Framer Navbar/Footer mounted `client:only="react"`, so their markup is NOT in the built HTML — grep the `dist/_astro/Responsive*.js` bundles (or render in a browser) to verify, not `dist/**/*.html`.
- 2026-08-03: SEO audit claimed app.marqly.com needed `Disallow: /`. WRONG — that subdomain is a MIXED surface: `/explore`, `/discover` and `/s/*` are deliberately public (its own sitemap lists them, `/explore` already sets `index:true`). Blanket-blocking would deindex the Discover boards. Fix shipped in `marqly_2026_prod` = targeted disallow + `X-Robots-Tag` via `next.config.js headers()` (the private pages are `"use client"`, which CANNOT export Next `metadata`). Also: do NOT disallow a URL you are trying to deindex — a disallowed URL is never fetched, so Google never sees the noindex and anything already indexed is frozen there; leave it crawlable until it drops out. Note `/s/[slug]` is `noindex` while the sitemap advertises it — unresolved contradiction, ask before changing.
- 2026-08-03: Cloudflare zone `marqly.com` (account `Trymarqly@gmail.com's`, id 2fa95a5b576a96bc48924ab9cfa8ffd3, FREE plan) was already fully crawler-friendly — Bot Fight Mode OFF, AI Labyrinth OFF, Browser Integrity Check OFF, AI bot policies Search/Agent/Training all "Allow", legacy Block-AI-bots off; Security Level is now Cloudflare-automated with no manual control. Only Crawler Hints was off → enabled it (implies accepting CF's Supplemental Terms). Don't go hunting for edge-level crawler blocks again: verify empirically instead with `curl -A "<bot UA>"` for Googlebot/Bingbot/GPTBot/ClaudeBot/PerplexityBot/Applebot — all returned 200 on both www and app.
- 2026-08-03: `public/_headers` — NEVER put `Content-Type` under a `/*` glob on Cloudflare assets. The asset server already sends correct per-file types (text/css, image/png, application/xml); a glob rule relabels every one of them. Only set Content-Type on exact known-text paths. Fingerprinted `/_astro/*` was being served `max-age=0, must-revalidate` until this file added immutable caching.
- 2026-08-03: ComparisonTable used default `table-layout:auto`, so a tool column sized itself to its longest cell — `pricing.paid` is free-form prose (LINER's is 131 chars) and `.price{white-space:nowrap}` made it unbreakable → one column ballooned to 1025px and the 850px table scrolled horizontally on EVERY compare/alternatives page (18 of 25 competitors have >40-char price strings) → `table-layout:fixed` + a `<colgroup>` sizing only the feature column (tool columns then split the rest evenly). With fixed layout a cell can no longer widen its column, so anything unbreakable must be given `overflow-wrap` or moved out — `white-space:nowrap` on a header or price is now a spill bug, not a widening one. Below 40rem the price row is `display:none` and a full-width `<dl class="price-stack">` takes over (a tick-width column hard-breaks "$17.99/mont h"). Never abbreviate `pricing.paid` to make it fit — it's verified data and a naive `;` split mangles wallabag/raindrop mid-parenthetical; re-lay it out instead. Regression harness: `node active/scripts/check-table-overflow.mjs` (needs `npx playwright install chromium` once).
