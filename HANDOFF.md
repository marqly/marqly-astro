# Marqly Framer → Astro/Cloudflare Migration — HANDOFF / RESUME POINT

**Last updated:** 2026-05-26
**Read this first, then `CLAUDE.md`, then `docs/superpowers/specs/` + `docs/superpowers/plans/`.**

## TL;DR for resuming

Migrating marqly.com off Framer onto a **Cloudflare Worker**. After a hand-built clone (not
pixel-perfect) and a Framer-component attempt, the user chose a **TRUE 1:1 MIRROR**. That is
now the live approach and is **DEPLOYED**:
- `active/scripts/build-mirror.mjs` writes each captured `page.html` → `public/<route>/index.html`,
  rewrites `./x` links → `/x`, and injects CSS that force-shows Framer entrance-animation elements
  (`[data-framer-appear-id]{opacity:1!important}`) so nothing stays hidden.
- All 24 pages mirrored; assets/fonts/JS load from the framerusercontent CDN (immutable hashed URLs).
- Hand-built Astro pages REMOVED (only `src/pages/404.astro` remains); `public/sitemap.xml` + `robots.txt` added.
- Deployed home renders at the exact reference height (5212px) = fully rendered, pixel-identical.

To rebuild the mirror after re-capturing: `node active/scripts/build-mirror.mjs && npm run build`.
Tradeoff the user accepted: it's Framer's generated HTML (not clean/editable) and depends on the
framerusercontent CDN for assets (could localise later from `active/logs/capture/<slug>/assets/`).

## Current status

DONE & committed:
- Astro 5 static scaffold + `@astrojs/cloudflare` adapter + `wrangler.json` (+ `.assetsignore`, `.nvmrc`=22).
- Live on the **staging Worker**: https://marqly-astro.trymarqly.workers.dev (currently the FIRST hand-built clone).
- Full 24-page capture of the live site in `active/logs/capture/` (screenshots + HTML + assets + SEO/JSON-LD).
- Screenshot-diff harness (`active/scripts/diff.mjs`) + capture script (`active/scripts/capture.mjs`).
- Shared shell `BaseLayout` (full SEO + JSON-LD), and first-pass pages: Home, Pricing, Extension, terms, privacypolicy, vs/raindrop.

DONE (pivot — committed + DEPLOYED to staging 2026-05-26):
- Added `@astrojs/react` + React 18 + framer-motion 11.
- 7 real Framer components in `src/components/framer/` + `_framer-runtime.js` (1.9 MB, must stay in same dir).
- `BaseLayout` now renders the REAL Navbar (prop `navVariant`) + Footer as `client:only="react"` — every page has pixel-perfect chrome.
- `/Pricing` rebuilt from real `PricingSection` (`Desktop / Anually`) + `Faq` (`Variant 1`) → 1:1 pixel-perfect, verified on the live staging URL.
- `src/pages/fr-test.astro` still exists (proof page) — DELETE when done.

KEY BLOCKER for 100% on other pages:
- The Framer export only included 7 REUSABLE components — NOT the page-body sections
  (home hero text block, "Everything you need" feature grid, testimonials, the Desktop/Mobile
  section, Extension hero/cards, the blog post layout). Those were built on the Framer canvas,
  not as components, so we don't have their code. Home/Extension/Terms/Privacy BODIES are still
  hand-built approximations (real chrome around them).
- TO FINISH 100%: ask the user to export those page sections via the same Framer plugin and add
  them to `src/components/framer/`, then compose the pages from them (like /Pricing).

## NEXT STEPS (do these in order)

1. **Create `src/styles/framer-tokens.css`** from the "Project Theme (tokens.css)" block the
   user pasted (Google Sans + Inter `@font-face`/imports + `.text-style-*` classes). Import it
   in `BaseLayout`. NOTE: the real components load their own fonts via the Framer runtime, so this
   is mainly for any non-component text.
2. **Rewire pages to use the real components**, rendered as `client:only="react"`:
   - Global chrome: replace our hand-built `Header.astro`/`Footer.astro` usage with the real
     `Navbar` (variant per page: `Desktop / Home`, `Desktop / Pricing`, `Desktop / Exstension`,
     `Desktop / Blog`, `Desktop / Help`) and `Footer` (variant `Desktop`; mobile variants exist).
   - `/Pricing` → `PricingSection` (variants `Desktop / Anually` + `Desktop / Monthly`) + `Faq`.
   - Decorative `HeroCircle` / `AiCircle` where they appear; `CtaButton` for CTAs (prop `l1L88jkb3`=text).
   - The page BODY sections that aren't components (home hero text, feature grid, testimonials)
     still need composing — match against `active/logs/capture/home/desktop.png`.
3. **Delete `src/pages/fr-test.astro`** once real pages are wired.
4. **Verify** with the diff harness (see commands). Target each page < ~2% vs the capture.
5. **Trailing-slash fix** for clean URLs: set Astro `build.format: 'file'` in `astro.config.mjs`
   (routes currently 307-redirect `/Pricing`→`/Pricing/`).
6. **Blog** (still TODO): content collection + cloned post template + 17 posts → MDX
   (dedupe the 3 junk "7-best-chrome-extensions" slugs; 301 the dupes in `public/_redirects`).
7. **vs/raindrop**: user wants it BUILT OUT (live page is just a stub) — real comparison table.
8. **Deploy** when ready (see commands). Then **DNS cutover** (marqly.com → Worker) = final, user-gated.

## Commands (IMPORTANT — Node is 20.10 locally; build works, just EBADENGINE warnings)

```bash
npm run build                              # astro build → dist/ (+ dist/_worker.js)
npx wrangler dev --port 8788               # LOCAL PREVIEW (NOT `astro preview` — cloudflare adapter)
npx wrangler deploy --dry-run              # validate deploy locally (catches _worker.js asset error)

# Deploy to the staging Worker (auto-builds on push to marqly-astro main):
git push marqly-astro <branch>:main        # marqly-astro remote = the deploy-connected repo

# Backup (our working repo):
git push origin <branch>

# Re-capture the live site / run visual diff (needs a local server on a port):
node active/scripts/capture.mjs [slug...]
node active/scripts/diff.mjs <slug> --base http://localhost:8788
```

## Repo & deploy facts

- Local `origin` = `github.com/marqly/marketing_site` (our working repo / backup). Current branch: `migration`.
- Deploy remote `marqly-astro` = `github.com/marqly/marqly-astro` → the Cloudflare **Worker** `marqly-astro` auto-builds from its `main`.
- Worker config: `wrangler.json` (assets→`dist`, main→`dist/_worker.js/index.js`), deploy via `npm run deploy` (`wrangler deploy`).
- Pushing `marqly-astro main` deploys to **staging** `*.workers.dev` — NOT marqly.com. marqly.com still on Framer until DNS cutover.

## Gotchas / Lab Notes (also in CLAUDE.md)

- Real font is **Google Sans** (not Inter Tight). The Framer components load it themselves.
- Local preview MUST be `wrangler dev`, not `astro preview` (cloudflare adapter).
- Deploy needs BOTH: a `deploy` npm script AND `public/.assetsignore` (`_worker.js`, `_routes.json`).
- Framer components render `client:only="react"` (their own instructions say SSR-disabled). SEO `<head>` is still SSR'd in `BaseLayout` — keep it that way.
- `/T&C` → `/terms` 301 (ampersand URL); other URLs preserved 1:1.
- The ~190 components the user pasted are duplicates of the same 7 types — we only need one of each.
