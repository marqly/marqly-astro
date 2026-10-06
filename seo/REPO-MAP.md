# REPO-MAP — marqly marketing site (Astro)

Phase 0 deliverable. All facts VERIFIED 2026-10-05 by direct read; line refs are current HEAD (`d219896` + 2 uncommitted files: `public/_redirects`, `src/pages/teams.astro`).

Framework: **Astro 7.2.1** (`package.json:32`) — note: project CLAUDE.md still says "v5". Static prerender, `build.format:'file'` (`astro.config.mjs:125`) → URLs carry **no trailing slash**, output is `dist/client/<path>.html` (1,915 HTML files in last build). Hosted as Cloudflare **Worker** `marqly-astro` (`wrangler.json`, `@astrojs/cloudflare` `astro.config.mjs:161-164`). **No CI** — deploy = `git push marqly-astro <branch>:main` (auto-build). This is PROD, not staging.

## 1. Content collections — `src/content.config.ts` (6 collections, all `glob()`)

| Collection | Schema | Counts (src files) | Renders at |
|---|---|---|---|
| `blog` | :11-38 | **536** = 47 EN (flat) + 489 in 11 lang subdirs (`de/` id prefix; `lang` default `'en'` :36) | `src/pages/blog/[slug].astro` (EN only, :6-7) + 11 × `src/pages/<lang>/blog/[slug].astro` → `BlogPostLayout` |
| `faq` | :44-56 | **63** (EN only) | `src/pages/faq/[slug].astro` + index |
| `usecases` | :62-79 | **42** (EN only; kind persona/jtbd/platform :68) | root catch-all `src/pages/[usecase].astro:10-13` → `/for-teachers`, `/bookmark-manager-for-chrome` etc. |
| `verdicts` | :86-97 | **111** (third-party X-vs-Y) | `src/pages/compare/[pair].astro:14-30` (merges 26 marqly-vs-X from competitors JSON + 111 verdicts = 137 built) |
| `prompts` | :104-142 | **400** (EN only, 10-category enum :110-121) | `src/pages/prompt-gallery/{index,[slug]}.astro` + `category/{index,[slug]}.astro` |
| `localePages` | :150-173 | **623** (11 langs × ~57; `lang` :153, `path` = full URL :155, localized chrome :163-169) | `src/pages/<lang>/[...slug].astro` × 11 → `src/components/seo/LocaleLander.astro` |

Key fields everywhere: `title, description, seoTitle?, updatedDate?, draft?` (draft = **unpublishes**, not noindex — every getStaticPaths filters `!data.draft`). No `author` field in any schema. No `noindex`/`robots` field anywhere.

Not collections: `/migrate/*` = 6 static pages + `index.astro`; registry `MIGRATIONS` `src/lib/compare-content.ts:48-56` + `MIGRATION_SLUGS:56` (single source). `/tools/*` = 20 static `.astro` + 10 `prerender=false` API routes in `src/pages/api/*.ts`. `/Pricing`,`/extension`,`/`,`/teams` = `LandingV2` pages (only 4 consumers).

## 2. Layouts & metadata

`src/layouts/` has exactly **3** files (`BaseLayout.astro` deleted — zero importers, confirmed).

**`LandingLayout.astro`** (73 importers — every SEO-engine page):
- title :74 · description :75 · canonical :76 (`.html`-strip fallback :60-63) · hreflang loop :77-79 · **robots :80 = hardcoded `max-image-preview:large`; NO noindex prop** · og :82-87 · twitter :88-92 · JSON-LD emit :99-103.

**`LandingV2.astro`** (home/pricing/extension/teams):
- title :59 · desc :60 · canonical :61 · hreflang :62-64 · **`noindex` prop exists here only** (:30, :46, :65 emits `noindex, follow`) · og :67-72 (og:type fixed `website`) · JSON-LD :100.

**`BlogPostLayout.astro`** (all 12 blog routes):
- Wraps LandingLayout :119-130 (ogType article, alternates, showLinkHub en-only :128-129).
- Inline BlogPosting JSON-LD :44-61 — **author = Organization "Marqly" :52**; dateModified = `updatedDate ?? pubDate` :51; breadcrumb :63-76; softwareApp :94-114; faqPage :78-88.
- Visible byline "Marqly Team" :140 (`src/i18n/ui.ts:27` et al.); pubDate :142; **"Updated {date}" :143-148**.

JSON-LD builders: `src/lib/schema.ts` — `organization:12, webSite:35, softwareApplication:45, breadcrumbList:88, faqPage:101, qaPage:114, itemList:127, freeWebApplication:145, howTo:177`. Only **2** `<script ld+json>` emit sites (the two landing layouts). `schema.ts:74-79` documents removal of a previously fabricated aggregateRating (precedent: no self-serving ratings).

Collection `updatedDate` (faq/usecases/verdicts/prompts/localePages) is **never displayed** — feeds sitemap lastmod only (`astro.config.mjs:64,73,95`).

## 3. i18n / hreflang

`src/i18n/routes.ts` (1,451 lines): `LOCALES:15` (12 codes; duplicated in `astro.config.mjs:137`). `HREFLANG:19-32` — **source of the redundancy**: pt→`[pt-BR,pt]`, ja→`[ja,ja-JP]`, zh→`[zh,zh-Hans,zh-CN]`, ko/nl/pl/tr→base+region; all tags share one href (`:1442,:1446`; verified in `dist/client/zh/tools/youtube-summarize.html`). `TRANSLATIONS:53` = EN-path→locale-path map, **104 clusters** — the ONLY EN↔translation pairing mechanism (no `source` frontmatter field exists). `alternatesForPath:1424-1451` (forward by EN key, reverse scan for locale pages, x-default = EN :1449; returns `[]` if unlisted → no hreflang). Locale roots are files (`dist/client/es.html`). `OG_LOCALE:35-48`, `LOCALE_HOMES:1400-1413`.

Sitemap i18n intentionally OFF (`astro.config.mjs:126-129` comment); Astro `i18n` config :130-138 is routing-guard only.

## 4. noindex / sitemap exclusion — GAP ANALYSIS

1. `noindex` prop: **LandingV2 only**; sole user `teams.astro:188` gated by `TEAMS_PUBLIC` (true since launch, `src/components/landing/data.ts:354`) → **zero pages currently noindexed**.
2. LandingLayout (≈1,800 pages incl. all blog/faq/compare/tools/prompts/locale landers): **no noindex mechanism** — must be added for Phase 1 pruning.
3. Sitemap (`astro.config.mjs:143-154`, @astrojs/sitemap 3.7.3): `filter` only excludes dark `/teams` (:145); `serialize` adds real lastmod via `buildLastmod()` :47-100. Integration **does not honor robots noindex** (v3.7.3 takes routes + built pages; only 404/500 auto-excluded) → noindex + sitemap membership are decoupled; any exclusion needs the filter extended.
4. Canonical override prop exists both layouts (`LandingLayout:21,63`, `LandingV2:22,51`) — 14 explicit passings.
5. `public/robots.txt`: Allow-all incl. GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended etc.; sitemap + llms.txt pointers.
6. `llms.txt` is generated: `src/pages/llms.txt.ts` from `src/data/llms-base.txt` (116 lines; Product/Guides/Comparisons/Alternatives/FAQ/Tools/Prompt-gallery/Use-cases/Languages sections).

## 5. Redirects — `public/_redirects` (139 lines, 86 rules, all 301, first-match-wins)

:5-7 `/T&C`+`/T%26C`→`/terms` · :9-11 privacy aliases · :13-15 `/sitemap.xml`→index · :17-19 `/Pricing`→`/pricing` · :21-25 `/discover`,`/explore`→app (only external) · :27-31 `/features`→`/extension`, **`/about`→`/`** (repoint when Phase 1 builds /about) · :33-41 embed aliases · :43-49 `/Extension`→`/extension` · :51-57 `/vs/{raindrop,pocket,pinterest}`→`/compare/*` · :59-70 5 "X vs Marqly" blog→`/compare/` · :72-89 migration/blog consolidations · :91-107 alternative aliases + 3 junk chrome-extension slugs :105-107 · :109-111 cannibalization merge · :113-125 GSC-404 cleanup · :127-129 DE post · **:131-139 trailing-slash catch-all `/*/ → /:splat 301` — MUST STAY LAST**.
Apex→www is NOT here (path-matched only) — Cloudflare zone **Redirect Rule** (order 1, preserve query string) per CLAUDE.md 2026-08-05.

## 6. Data layer & helpers

`src/data/competitors/*.json` — **27 files** (26 tools + marqly). Shape: `name,slug,aka,category,status,shutdownNote,website,tagline,pricing{free,paid,trial,notes},platforms,features{20 bools},pros,cons,bestFor,verdict,overview,faqs,lastVerified` (marqly `trial:null`, `lastVerified:"2026-09-26"`).
- `src/lib/competitors.ts` — `Competitor:3-28`, glob load :30, `marqly:35`, `getCompetitor:37`, `PAIR_TIER:46`, `thirdPartyPairs():67`.
- `src/lib/features.ts` — 20-key matrix `FEATURE_LABELS:6-27`, `HEADLINE_FEATURES:32`.
- `src/lib/compare-content.ts` — compare copy generators (:13-143) + MIGRATIONS.
- `src/lib/free-tools.ts` (`FreeTool:4-11`), `src/lib/ai-tools.ts`, `src/lib/api-utils.ts` (origin allowlist :4-10).
- `LinkHub.astro` / `LocaleLinkHub` — collection-driven pre-footer hub.

## 7. Gates & deploy plumbing

- `npm run seo:check` → `active/scripts/seo-check.mjs` (357 lines, **10 gates**: 1 no fabricated AggregateRating :73 · 2 retired/false product claims :194 incl MARQLY_TRIAL_FWD/REV :119-120 · 3 metadata×6 :222-229 · 4 JSON-LD parses :238 · 5 sitemap built+no-noindex+lastmod :248-263 · 6 hreflang targets exist :282 · 7 no dead internal links :305 · 8 localized hubs no-English-headings :323 · 9 localized pages have hub :330 · 10 TOKENS-IMPORT-ORDER :340).
- **Gate 5 (:253) asserts sitemap contains NO noindex pages** — Phase 1 pruning must keep these consistent (noindex ⇒ drop from sitemap ⇒ strip from hreflang clusters).
- Build: `NODE_OPTIONS=--max-old-space-size=8192 astro build`; `wrangler.json` has `ai:{binding:"AI"}` (Workers AI for `/api/summarize`; breaks `astro dev` per Lab Notes) + `account_id` pinned.
- Product truth: `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`; evidence ledger `.seo/truth-ledger.md`; prior workspace `.seo/` (baseline.json, site-inventory.json = 1,868-URL crawl 2026-09-12, search-opportunities.md).

## 8. Program-critical gaps (what the repo does NOT have yet)

| Gap | Where it must go | Needed by |
|---|---|---|
| Per-page `noindex` in LandingLayout + sitemap filter + hreflang-cluster removal | LandingLayout props + astro.config filter + routes.ts | Phase 1.1/1.2 |
| Parity gate (locale word-count vs EN source) | new build-time check + seo-check gate | Phase 1.1 |
| `author` field (blog schema) + Person schema + `/authors/*` + `/about` + `/how-we-test` | content.config.ts:16-37, BlogPostLayout:52 | Phase 1.6 |
| ~~Visible "Last updated" for non-blog collections~~ **DONE 2026-10-05** | `UpdatedDate.astro` wired into faq/usecase/prompt (schema `dateModified` matched on FAQ; locale landers intentionally NOT — localized-chrome rule) | Phase 1.6 |
| IndexNow ping | build/deploy hook | Phase 1.8 |
| Title/desc templates enforcing ≤60/140-155 | per-route generators + seo-check gate | Phase 1.7 |
| Canonical-intent consolidation (Pocket/Raindrop clusters) | `_redirects` + TRANSLATIONS + internal anchors | Phase 1.5 |
