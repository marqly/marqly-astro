# Changelog — 2026-08-03

## PhotoAI-playbook SEO build-out + sitewide UI/token repair

Two commits, both deployed to production (www.marqly.com). Commit `513d8a1`
(landed late 2026-08-02) executed the full PhotoAI replication plan: the site
grew from 43 to 313 pages across five new SEO engines, all rendered from a
verified competitor data layer, plus a sitewide pre-footer link hub and an ASO
kit. Commit `923fbbb` (2026-08-03) fixed what the first wave exposed: the CSS
token system had silent holes that made new pages AND the existing blog render
half-styled, every internal link paid a 307 redirect, and two of the new free
tools didn't actually work against 2026 YouTube/Workers-AI reality.

---

### 1. SEO engines — 270 new URLs from one data layer

**File(s)**: `src/data/competitors/*.json` (25), `src/lib/{competitors,features,compare-content,schema}.ts`, `src/pages/{faq,compare,alternatives,tools}/`, `src/pages/[usecase].astro`, `src/content/{faq,usecases,verdicts}/`, `src/components/seo/`

**Problem**: marqly.com had ~43 URLs and no programmatic SEO surface; organic traffic was flat. The teardown of photoai.com (10,591 URLs; sitemap + page-source evidence in the plan doc) showed the model: FAQ pages as standalone URLs, every competitor pair as a compare page, alternatives pages, use-case landers, free tools, and a massive on-every-page link hub.

**Fix**: One JSON file per competitor (web-verified pricing, 20-boolean feature matrix, `lastVerified` stamp) renders every comparison surface: 24 `marqly-vs-X` + 105 third-party `X-vs-Y` compare pages (verdict prose in `src/content/verdicts/`), 24 alternatives guides, plus 60 QAPage FAQ pages, 40 root-level landers, and 8 working tools. Facts live in exactly one place so pricing rot is a one-file edit. `LinkHub.astro` renders on every page and is collection-driven — links only appear once target pages exist (54,966 internal hrefs, 0 broken, verified by `active/scripts/check-links.mjs`).

---

### 2. tokens.css — undefined CSS variables silently broke styling sitewide

**File(s)**: `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/BlogPostLayout.astro`, all `src/components/seo/*` and engine templates

**Problem**: User-visible breakage ("pages look disconnected, bullets missing, code text looks off"). Two independent causes. (a) `BlogPostLayout` was written against a `--color-*` token family that never existed in `tokens.css` — every declaration using it was silently dropped, so all 43 blog posts had no blockquote borders, transparent code chips, borderless tables, for months. The new SEO templates repeated the pattern with 9 more nonexistent tokens (`--fs-3xl`, `--radius-md`, `--space-14`, …). CSS gives no error for this. (b) The global reset sets `ul, ol { list-style: none }` and no prose container ever restored it — bullets missing everywhere.

**Fix**: Compat alias block in `tokens.css` mapping the `--color-*` family onto canonical tokens (chosen over rewriting BlogPostLayout to minimize diff on a proven layout), new `--shadow-*` scale, real-token replacements in all new templates, and a global `.prose` ruleset (list-style, code, pre, blockquote with left border, tables, hr). Verified in-browser via Playwright before redeploy.

---

### 3. Trailing-slash 307 tax removed

**File(s)**: `astro.config.mjs`, `src/layouts/{LandingLayout,BaseLayout}.astro`, `src/components/seo/ToolShell.astro`

**Problem**: Pages built as `dir/index.html`, so Workers assets 307-redirected every no-slash request to its slashed twin. All internal links are slash-less → every crawl hop paid a *temporary* redirect (~54k link edges).

**Fix**: `build.format: 'file'` emits `route.html` served at the no-slash URL (also restores parity with the original Framer URLs). Caveat discovered: in file mode `Astro.url.pathname` includes `.html`, which leaked into canonicals — both layouts now normalize (`.replace(/\.html$/,'')`). Old slashed URLs redirect back to no-slash.

---

### 4. Free tools — two were genuinely broken against 2026 platform reality

**File(s)**: `src/pages/api/{youtube-transcript,summarize,check-links}.ts`, `src/pages/tools/*`, `wrangler.json`

**Problem**: (a) The transcript endpoint scraped caption URLs from the watch page; YouTube's proof-of-origin lockdown makes those URLs return HTTP 200 with an **empty body**, so the tool always failed. (b) The summarizer used `@cf/meta/llama-3.1-8b-instruct`, deprecated 2026-05-30 — runtime error 5028, invisible at build time.

**Fix**: (a) Rewritten on the InnerTube `youtubei/v1/player` API with the ANDROID client, parsing timedtext-XML (the format that route actually serves). (b) Model swapped to `@cf/meta/llama-3.3-70b-instruct-fp8-fast`. Both verified live in production, plus functional Playwright tests of all six client-side tools (fixture uploads: bookmark HTML parse 6/6, UTM/fragment dupe detection, quoted-CSV Pocket parse).

**Also**: `wrangler.json` gained the `ai` binding and a pinned `account_id` — with two Cloudflare accounts in the keyring, the AI binding's remote dev proxy fails non-interactively without it.

---

### 5. Content migration — 5 blog posts 301'd into /compare/

**File(s)**: `public/_redirects`, deleted `src/content/blog/{pocket,raindrop,obsidian,pinterest,readwise-reader}-vs-marqly.md`

**Problem**: New `/compare/marqly-vs-X` pages would cannibalize the existing "X vs Marqly" blog posts (same intent, two URLs).

**Fix**: One canonical URL per matchup: blog posts deleted, 301s added, older redirect chains (`/vs/raindrop` → blog → compare) collapsed to point straight at `/compare/`, and all internal references rewritten via sed. Alternatives-roundup posts were deliberately KEPT alongside `/alternatives/` pages (richer editorial; watch GSC for cannibalization).

---

### 6. Smaller traffic/UX wave

**File(s)**: `src/pages/rss.xml.ts`, `src/pages/404.astro`, `src/layouts/BlogPostLayout.astro`, `src/components/seo/ComparisonTable.astro`, `src/pages/index.astro`, `public/llms.txt`, `docs/aso/*`

- RSS feed + autodiscovery `<link>`s; `twitter:site` meta.
- Related-posts block (4 cluster links) on every blog post.
- 404 rebuilt on LandingLayout with recovery links (was a bare inline-styled page).
- Comparison tables: tool columns centered (headers, ✓/—, prices); feature names left.
- Homepage FAQ 6 → 15 questions, each linking its standalone `/faq/` page; SoftwareApplication schema now carries CWS rating + installUrl; `tiers[]` strict-null fixes.
- Use-case/tool heroes rebuilt (eyebrow, `--fs-h1`, surface band, trust row, panel straddle).
- `llms.txt` extended with compare/alternatives/FAQ/tools/use-case sections.
- `docs/aso/`: ready-to-paste CWS + App Store listing copy, third-party listings checklist, review-prompt spec, Discover-UGC spec (manual dashboard work — not yet applied).

---

### Root Cause Chain (the "broken pages" report)

    Templates + BlogPostLayout written against token names that were never defined
      └─ CSS silently drops invalid var() declarations (no build/runtime error)
           └─ headings, radii, blockquote borders, code chips, table borders vanish
                └─ pages read as "disconnected/off" — worst on landers & long-form posts
    (compounded by) global reset strips list-style, prose scopes never restored it
      └─ every bullet list rendered as bare text lines

---

### Files Modified (summary — 600+ files across two commits)

| Area | Change |
|---|---|
| `src/data/competitors/*.json` ×25 | verified competitor data layer (single source for all comparison surfaces) |
| `src/content/{faq,usecases,verdicts}/` ×205 | FAQ (60), landers (40), pair verdicts (105) |
| `src/content/blog/` | +15 posts (reviews/roundups/guides), −5 migrated vs-posts |
| `src/pages/{faq,compare,alternatives,tools,[usecase],api}/` | engine templates + 3 on-demand API routes |
| `src/components/seo/` ×7 | LinkHub, ComparisonTable, FaqAccordion, Breadcrumbs, CtaBox, ToolShell |
| `src/styles/{tokens,global}.css` | compat aliases, shadow scale, global `.prose` |
| `src/layouts/*` | LinkHub mount, canonical normalization, RSS/twitter meta, related posts, blog list-style |
| `astro.config.mjs`, `wrangler.json` | `build.format:'file'`; AI binding + pinned account_id |
| `public/{_redirects,llms.txt,og/**}` | 301 migration, AEO sections, 265+58 OG cards |
| `docs/aso/*`, `docs/superpowers/*` | ASO kit, plan + product-facts sheet |
| `active/scripts/{gen-og-seo,check-links}.mjs` | OG generation + link-integrity gate |
