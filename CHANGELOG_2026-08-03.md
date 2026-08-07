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

---

# Changelog — 2026-08-03 (session 2)

## Comparison-table overflow, SSRF hardening, and cross-domain crawl control

Five commits on `marqly-astro` plus one in the app repo, all deployed to
production. Started as a single CSS bug report ("the second column is massive
and overflows") which turned out to affect most of the 129 compare/alternatives
pages. While shipping it, background security review found three separate SSRF
bypasses in the URL-fetching tool endpoints that had been pushed earlier the
same day. Finished with an external SEO audit whose headline recommendation was
wrong for this architecture and was deliberately not followed as written.

**Secondary repo**: `/Users/megamoon/DEV/marqly_2026_prod` (Next.js app serving
app.marqly.com) — commit `1da3498`, deployed via Cloud Build `fa0ec0d0`.

---

### 1. ComparisonTable — a free-text price field blew out the table

**File(s)**: `src/components/seo/ComparisonTable.astro`

**Problem**: `<table class="cmp">` used the browser default `table-layout: auto`,
so every column sized itself to its widest cell. `pricing.paid` in the competitor
JSON is free-form prose — LINER's is 131 characters — and `.price` carried
`white-space: nowrap`, making it one unbreakable run. Measured on
`/compare/marqly-vs-liner`: the LINER column rendered **1025px** wide, pushing the
table to **1505px** inside an 850px container. 18 of 25 competitors have price
strings over 40 characters, so most `/compare/*` and `/alternatives/*` pages
shipped with a horizontal scrollbar by default.

**Fix**: `table-layout: fixed` plus a `<colgroup>` that sizes *only* the feature
column (38%, or 30% when three tools are shown). Under fixed layout the remaining
columns split the rest evenly regardless of content, so no cell can widen its
column again.

Two consequences had to be handled: under fixed layout a `white-space: nowrap`
becomes a *spill* bug rather than a widening one, so it was removed from both
`.price` and the tool headers (long names like "Evernote Web Clipper" would
otherwise overflow their cell), with `overflow-wrap: break-word` as the backstop.
And below 40rem a tick-width column is too narrow for price prose — it hard-broke
tokens mid-string ("$17.99/mont h"). Below that breakpoint the price row is
`display: none` and a full-width `<dl class="price-stack">` takes over, which cut
that block from 335px to 146px on a 390px viewport.

**Rejected alternative**: abbreviating `pricing.paid` to fit. It is verified data
under `lastVerified`, and the obvious heuristic (split on `;`, take the first
clause) mangles real entries mid-parenthetical — wallabag becomes
"€11/year on wallabag.it (official hosting" and raindrop becomes
"$28/year or $3/month (Pro". The prose is reproduced verbatim in both layouts.

**Verification**: new harness `active/scripts/check-table-overflow.mjs` — 6 pages
× 8 viewport widths (360–1512px), asserting no page overflow, no container
overflow, and no cell whose `scrollWidth` exceeds its `clientWidth`. 48/48 clean,
run against both localhost and production.

---

### 2. Free tools, extension page, and two new API routes

**File(s)**: `src/pages/extension.astro`, `src/pages/tools/*.astro` (8),
`src/pages/api/{meta-check,redirect-check}.ts`, `src/lib/free-tools.ts`,
`src/content/faq/` (3 new), `src/pages/index.astro`, `src/components/seo/LinkHub.astro`

Work carried over from the preceding session and committed here as `9e076bc`:
the `/extension` lander, eight free tools (UTM builder, URL encoder, YouTube
thumbnail downloader, YouTube timestamp link, bookmarklet maker, HTML-to-Markdown,
Open Graph checker, redirect checker), three FAQ entries, homepage feature cards,
and the tool directory. Two of the tools need a server, so `/api/meta-check` and
`/api/redirect-check` run with `prerender = false` behind the shared same-origin
and URL guards in `src/lib/api-utils.ts`. Added `turndown` + `turndown-plugin-gfm`
for the Markdown converter (both verified against the npm registry before install
— `turndown` resolves to `mixmark-io/turndown`, the canonical repo).

---

### 3. SSRF — three bypasses in the URL-fetching guard

**File(s)**: `src/lib/api-utils.ts`, `active/scripts/test-url-guard.mjs`

The tools above accept an arbitrary user-supplied URL and fetch it server-side.
The original guard string-matched the hostname. Three separate holes, found by
background review across two commits:

**3a. DNS-based bypass** (`df2a0b2`). The check inspected the literal hostname
only, so it blocked `127.0.0.1` and `10.0.0.0/8` but let through any *name* that
resolves into private space. Confirmed live: `http://localtest.me` — a real public
hostname whose A record is `127.0.0.1` — passed validation and was fetched.
Fixed by resolving A and AAAA over DNS-over-HTTPS (`cloudflare-dns.com`) before
fetching and rejecting if any answer is private. Applied to the initial URL *and*
every redirect hop, so a redirect can't pivot into private space. Fails closed —
an unresolvable name, or a resolver we can't reach, counts as blocked.

**3b. IPv6 tunnel bypass** (`2c129b3`). The IPv6 branch treated all of `2000::/3`
as globally routable. But 6to4 (`2002::/16`) and Teredo (`2001:0::/32`) *embed an
IPv4 address inside that range*, so `2002:7f00:0001::` — which is 127.0.0.1 —
was ALLOWED. Replaced the regex with a real parser that expands an address to its
8 hextets and decodes the embedded v4 for 6to4, Teredo, NAT64 (`64:ff9b::/96`),
and IPv4-mapped/compatible forms. Note this hole predated 3a; it was in the
original inline check too.

**3c. Rebinding TOCTOU** — acknowledged, not closed. The design is
resolve-then-fetch, so an attacker could return a public IP to our resolver and a
private one to the subsequent fetch. Closing it requires pinning the fetch to the
resolved IP, which the Workers runtime cannot express. Documented in-code as
defence-in-depth: Worker egress goes through Cloudflare and has no route to
loopback/RFC1918 regardless, so the platform is the real guarantee here.

**Verification**: `active/scripts/test-url-guard.mjs` — 40 hostname cases
(RFC1918, CGNAT, metadata IP, ULA, link-local, multicast, all four tunnel
encodings, plus positive cases that must stay allowed). Transpiles
`api-utils.ts` with the actual TypeScript compiler so it tests the shipped module
rather than a copy. 40/40 pass.

---

### 4. External SEO audit — remediation

**File(s)**: `public/_redirects`, `public/_headers`, `public/apple-touch-icon.png`
(+192/512), `src/layouts/{BaseLayout,LandingLayout,BlogPostLayout}.astro`,
`src/lib/schema.ts`, `src/pages/index.astro`, `active/scripts/gen-app-icons.mjs`

All claims were verified against production before acting; all six checked out.

- **`/sitemap.xml` 404** — we only emit `sitemap-index.xml`, but audit tools and
  older parsers probe the root path first. Added a 301 alias.
- **`apple-touch-icon.png` 404** — generated 180/192/512 PNGs from the vector
  brand mark (sourced from the app repo; the only local raster was 64×64 and
  would have upscaled blurry). Flattened onto the brand colour `#2E363C` because
  iOS applies its own rounded-rect mask — a transparent-cornered circle would
  render as a circle floating inside a rounded square.
- **Organization schema** was declared in *three* places with *three different*
  `sameAs` arrays (homepage: twitter+x; `schema.ts`: twitter+linkedin+producthunt;
  BlogPostLayout: twitter+x). Consolidated all three onto `schema.ts
  organization()` and added the Facebook page that was already linked in the footer.
- **Testimonial avatars** were `alt=""` (marked decorative) despite being real
  people whose faces support E-E-A-T. Now `alt="{name}, {role}"`, driven off the
  existing data rather than hardcoded.
- **`_headers`** added: charset on exact text paths, `nosniff`,
  `Referrer-Policy`, `X-Frame-Options`. Also caught an unrelated perf miss —
  fingerprinted `/_astro/*` was being served `max-age=0, must-revalidate`, so
  every visit revalidated every asset; now `immutable`.

**Deliberately not done — the audit's `Content-Type: text/html; charset=utf-8`
recommendation.** Applying that under a `/*` glob would relabel *every* asset.
Verified against production first: the asset server already sends correct
per-file types (`text/css`, `image/png`, `application/xml`, `text/plain`) and is
missing only the charset parameter. A glob rule would have broken all of them for
a cosmetic gain the audit itself concedes Google handles correctly. Charset is
set on exact non-HTML paths only; HTML keeps its in-document `<meta charset>`.
Confirmed post-deploy that `/favicon.png` and `/apple-touch-icon.png` still
return `image/png`.

---

### 5. app.marqly.com — index bloat, without deindexing the public boards

**File(s)**: `apps/web/app/robots.ts`, `apps/web/next.config.js`
(repo: `marqly_2026_prod`)

**Problem**: the app subdomain served `User-agent: * / Allow: /` with no noindex
anywhere, so signin, onboarding, auth callbacks and per-user deep links were all
crawlable and indexable — real crawl-budget waste on an unbounded thin-URL space.

**Fix, and why not the obvious one**: the audit prescribed `Disallow: /`. That
would have been wrong here. Route enumeration showed this subdomain is a *mixed*
surface — `/explore`, `/discover` and `/s/*` are deliberately public, the app's
own `sitemap.ts` submits them, and `/explore` already sets `robots: {index:true}`.
A blanket block would have deindexed the Discover boards directory. Shipped a
targeted disallow list instead, with `/explore`, `/discover` and `/s/` explicitly
allowed.

For the noindex half, page-level `metadata` was not an option: the private pages
are `"use client"` components, and Next.js client components cannot export
`metadata` at all. Used `X-Robots-Tag` via `next.config.js headers()` instead —
one reviewable place, works regardless of component type, covering both the bare
and `/:locale`-prefixed form of each route (24 rules).

**Sequencing note that matters**: `/signin` and `/onboarding` were deliberately
left OUT of the disallow list. A disallowed URL is never fetched, so Google would
never see the noindex header, and anything already indexed would be frozen in the
index permanently. They stay crawlable until they drop out, then they can be
disallowed. Pairing noindex with disallow on the same URL is self-defeating.

**Known contradiction, left alone**: `/s/[slug]` sets `robots: {index:false}`
while `sitemap.ts` actively submits those URLs — this will surface as "Submitted
URL marked noindex" in Search Console, and means shared boards are not indexable
today. Whether they *should* be is a product decision (UGC spam exposure), so it
was flagged rather than changed.

---

### 6. Cloudflare zone configuration (no code)

Zone `marqly.com`, account `Trymarqly@gmail.com's` (free plan). Audited via the
dashboard because edge-level bot rules can silently defeat everything above.

Almost everything was already correct: Bot Fight Mode **off**, AI Labyrinth
**off**, Browser Integrity Check **off**, AI bot policies Search/Agent/Training
all **Allow**, legacy "Block AI bots" **off** — consistent with the `llms.txt`
AEO strategy. Security Level is now Cloudflare-automated with no manual control.

**One change made**: **Crawler Hints enabled** (was off). It pushes IndexNow-style
change notifications so crawlers time their fetches to actual content changes
instead of polling — directly relevant to the crawl-budget concern. Enabling it
entails accepting Cloudflare's Supplemental Terms for the beta feature.

Verified empirically rather than by reading toggles: `curl -A` with Googlebot,
Bingbot, GPTBot, ClaudeBot, PerplexityBot and Applebot user agents returns **200
on both www.marqly.com and app.marqly.com**.

---

### Root Cause Chains

Comparison table:

    pricing.paid is free-form prose (LINER: 131 chars)
      └─ .price sets white-space:nowrap → one unbreakable run
           └─ default table-layout:auto sizes the column to its widest cell
                └─ LINER column = 1025px, table = 1505px in an 850px container
                     └─ horizontal scrollbar by default on ~129 compare/alternatives pages

SSRF:

    Guard validates the hostname STRING only
      ├─ a public name with a private A record (localtest.me → 127.0.0.1) passes
      │    └─ server fetches loopback on the user's behalf
      └─ IPv6 branch allows all of 2000::/3 as "routable"
           └─ 6to4/Teredo embed IPv4 inside that range
                └─ 2002:7f00:0001:: (= 127.0.0.1) passes

---

### Files Modified

| File | Change |
|---|---|
| `src/components/seo/ComparisonTable.astro` | fixed layout + colgroup; mobile price stack; nowrap removed |
| `src/lib/api-utils.ts` | DoH resolution guard, IPv6 parser, 6to4/Teredo/NAT64 decoding |
| `src/pages/api/{meta-check,redirect-check}.ts` | new on-demand endpoints behind the guard |
| `src/pages/extension.astro`, `src/pages/tools/*.astro` ×8 | extension lander + free tools |
| `src/lib/{free-tools,schema}.ts` | tool registry; consolidated Organization + Facebook `sameAs` |
| `src/layouts/{Base,Landing}Layout.astro` | apple-touch-icon + png favicon links |
| `src/layouts/BlogPostLayout.astro` | use shared `organization()` instead of a local copy |
| `src/pages/index.astro` | feature cards; avatar alt text; shared org schema |
| `public/_headers` | **new** — charset on exact paths, security headers, immutable `/_astro/*` |
| `public/_redirects` | `/sitemap.xml` → `/sitemap-index.xml` 301 |
| `public/{apple-touch-icon,icon-192,icon-512}.png` | **new** — rendered from the vector mark |
| `src/content/faq/*.md` | 3 new entries + refreshed browser-support answers |
| `active/scripts/check-table-overflow.mjs` | **new** — 6 pages × 8 widths overflow harness |
| `active/scripts/test-url-guard.mjs` | **new** — 40-case SSRF guard suite |
| `active/scripts/gen-app-icons.mjs` | **new** — touch-icon generation from SVG |
| `CLAUDE.md` | Lab Notes: table layout, app-subdomain crawl, Cloudflare state, `_headers` |
| `apps/web/app/robots.ts` *(app repo)* | targeted disallow; `/explore`,`/discover`,`/s/` allowed |
| `apps/web/next.config.js` *(app repo)* | `X-Robots-Tag: noindex` on 24 private route patterns |

---

### Deployment notes

| Target | Result |
|---|---|
| www.marqly.com | Worker version `38fda23d`, 100% traffic |
| app.marqly.com | Cloud Build `fa0ec0d0` SUCCESS (~23 min) |
| Gates | build clean · `astro check` 0 errors · 325 pages / 65,651 hrefs / 0 broken · 48/48 overflow · 40/40 URL guard |

**The GitHub → Worker auto-build never fired.** `CLAUDE.md` states the Worker
auto-builds from `marqly/marqly-astro` on push to `main`. Pushing produced no new
deployment after ~16 minutes of polling, and every historical deployment shows
`Author: trymarqly@gmail.com, Source: Unknown (deployment)` — the signature of a
manual `wrangler deploy`, not a git-triggered build. All deploys this session were
done with `npm run deploy`. That integration may never have worked; worth
confirming before relying on a push alone to ship.
