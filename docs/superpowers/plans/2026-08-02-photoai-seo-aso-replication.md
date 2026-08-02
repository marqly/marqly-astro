# PhotoAI SEO/ASO Playbook → Marqly Replication Plan

**Date:** 2026-08-02
**Status:** Approved for phased execution (not started)
**Evidence:** live teardown of photoai.com captured 2026-08-02 (`active/tmp/photoai/` — homepage, sitemap, robots, 4 template samples)

---

## Part 1 — Teardown: what photoai.com actually does

Hard numbers from their live sitemap (10,591 URLs) and page source:

| Engine | URLs | Pattern | Purpose |
|---|---|---|---|
| UGC photo pages | 8,375 | `/photos/<descriptive-slug>-<id>` | Every generated photo = an indexable page. Long-tail infinity. |
| Use-case landers | ~230 | `/tinder`, `/startup-headshots`, `/wedding`, `/passport-photos` | One page per persona / job-to-be-done / platform, at root level. |
| UGC profiles | ~600 | `/@username` | Public user galleries — second UGC layer. |
| Compare | 466 | `/compare/photoai-vs-X` **and** `/compare/X-vs-Y` | Not just "us vs them" — they generate **every pair among ~31 competitors** (31×30/2 ≈ 465). They own the SERP even when the searcher isn't comparing them. |
| Ideas hubs | 204 | `/ideas/instagram`, `/ideas/bumble` | Curated topical hubs that link down to photo pages. |
| FAQ pages | 59 | `/faq/<question-slug>` | **Every FAQ is its own indexable page** with QAPage schema. Includes brand-defense intents: cancel, refund, coupons, "is it free", founder. |
| Alternatives | 31 | `/alternatives/midjourney` | "Best X Alternatives (2026)" ranked lists where they're #1–2. |
| Free tools | ~12 | `/watermark-remover`, `/upscale-image`, `/heic-to-jpg`, `/image-compressor` | Utility pages capturing massive tool-intent volume, funneling to paid. |
| Seasonal | ~25 | `/christmas`, `/valentines-day`, `/ramadan`, `/diwali` | Evergreen seasonal spikes. |

**The internal-link machine (the "massive footer" you noticed):**
- Homepage carries **891 links**. Every template page carries **550–600 internal links**.
- It's technically NOT the `<footer>` (that has 18 links) — it's a **pre-footer link hub** rendered on *every* page: ~300 use-case links, 60 compare links, 28 alternatives links, 89–93 FAQ links, grouped under headings ("Photo packs", compare list, alternatives list, FAQ list).
- Effect: 2-click crawl depth across 10k pages, PageRank spread evenly, every page reinforces every other page's anchor text.

**Schema saturation:**
- Homepage: 59× QAPage/Question/Answer (whole FAQ inlined), Product + Offer + AggregateRating, 11× Review/Rating/Person (testimonials), Organization, WebSite.
- Compare & Alternatives pages: FAQPage (5 Q&As each) + BreadcrumbList + ItemList.
- Title formulas: `Photo AI vs Midjourney: Which Is Better? (2026)` / `Best Midjourney Alternatives (2026) | Photo AI` / `AI Tinder Photo Generator - Get 10x More Matches`.

**What we should NOT copy** (they get away with it on raw domain authority + Pieter Levels' audience; a sandboxed new domain will not):
1. Duplicating a 17k-word homepage body onto every use-case page (their `/tinder` page is 117 H2s of recycled content). On our domain this is doorway/duplicate-content risk. We share the **link hub**, not the body copy.
2. 8,375 near-duplicate UGC pages dumped at once. Thin-content risk; we phase our UGC layer and noindex thin entries.
3. NSFW-adjacent seasonal pages — irrelevant to us.
4. They have no `llms.txt` (404s). We already do — keep our AEO lead.

---

## Part 2 — Translation map: PhotoAI engine → Marqly equivalent

| PhotoAI | Marqly equivalent | Target count |
|---|---|---|
| Pre-footer link hub on every page | `LinkHub.astro` pre-footer on every page | 150–250 links |
| `/faq/*` (59) | `/faq/*` standalone QAPage pages | 60 |
| `/compare/photoai-vs-X` + X-vs-Y pairs | `/compare/marqly-vs-X` + X-vs-Y pairs | 24 + ~105 (phased) |
| `/alternatives/X` | `/alternatives/pocket` etc. | 24 |
| Use-case landers (`/tinder`) | Persona + JTBD + platform landers | ~40 |
| Free tools (`/watermark-remover`) | YouTube transcript tool, bookmark-file tools, etc. | 8 |
| `/ideas/*` hubs | `/collections/*` curated link hubs | 20 (later) |
| `/photos/*` + `/@user` UGC | Public Discover boards surfaced on www | app-side, Phase 4 |
| Seasonal pages | Back-to-school, new-year declutter, etc. | 6 (later) |

Total end-state: **~380–450 URLs** (from today's ~40). Rolled out over ~4–6 months, quality-gated.

---

## Part 3 — The build, engine by engine

### 3.0 Foundation: data model + shared components (build FIRST — everything hangs off this)

**`src/data/competitors/*.yaml`** — one file per competitor is the leverage point: 24 files auto-generate 24 compare + 24 alternatives + up to 105 pair pages + the link hub columns.

Schema per competitor file:
```yaml
name: Raindrop.io
slug: raindrop
category: bookmark-manager        # bookmark-manager | read-it-later | highlighter | tab-manager | notes
status: active                    # active | shutdown (Pocket, Omnivore!)
pricing: { free: true, paid: "$28/yr", trial: false }
platforms: [chrome, firefox, safari, edge, ios, android, web]
features:                         # booleans against OUR feature matrix
  ai_auto_tagging: false
  semantic_search: false
  ai_summaries: false
  youtube_ai: false
  highlights: true
  save_pdf: false
  chat_with_saves: false
  tab_saver: false
  public_boards: true
  import_pocket: true
pros: [...]
cons: [...]
verdict_one_liner: "..."
faqs: [ {q, a}, ... ]             # 5 per competitor, pair-specific ones generated
last_verified: 2026-08-02
```

Competitor roster (24): **Pocket** (shut down 2025 — highest-value target), **Raindrop.io, Instapaper, Readwise Reader, Matter, Omnivore** (shut down), **Wallabag, Linkwarden, Karakeep** (ex-Hoarder), **mymind, Evernote Web Clipper, Notion Web Clipper, Obsidian Web Clipper, Pinboard, Diigo, GoodLinks, Anybox, Toby, OneTab, Workona, Glasp, LINER, Weava, Pinterest**.

**Shared components** (`src/components/seo/`):
- `LinkHub.astro` — the mega pre-footer (see 3.1)
- `FaqAccordion.astro` — renders Q&As + emits FAQPage JSON-LD
- `ComparisonTable.astro` — feature matrix from two competitor objects (Marqly is a competitor file too: `marqly.yaml`)
- `Breadcrumbs.astro` — visible breadcrumbs + BreadcrumbList JSON-LD
- `SchemaOrg.astro` — Organization / WebSite / SoftwareApplication blocks (SoftwareApplication should cite the Chrome Web Store rating as `aggregateRating` once ≥ threshold, and link `installUrl` to the CWS listing)

**Content collections:** add `faq`, `usecases`, `collections` collections in `src/content.config.ts`; compare/alternatives are generated from YAML via `getStaticPaths`, not hand-written pages.

### 3.1 The mega link hub (the footer you asked for)

`LinkHub.astro`, rendered above the existing small `Footer.astro` on **every page** (BaseLayout + LandingLayout + BlogPostLayout). Columns:

1. **Product** — Features anchor, Pricing anchor, Chrome / Edge / Firefox / Safari / iOS install links, Help center, Discover, Blog
2. **Use cases — who it's for** (~18 persona landers)
3. **Use cases — what it does** (~20 JTBD landers)
4. **Compare** — all `marqly-vs-X` links (24)
5. **Alternatives** — all `/alternatives/X` links (24)
6. **Free tools** — all 8
7. **FAQ** — top ~20 questions + "All FAQs →"
8. **From the blog** — the 4 pillar posts + latest

Rules:
- **Only link pages that exist.** The hub grows as engines ship — never dead links. Drive it from the collections/data so it's automatic.
- Plain semantic HTML (`<nav aria-label="...">`, `<h4>` per column, `<ul>`), minimal CSS, no JS. At ~250 links this is ~30–40KB of HTML — irrelevant to CWV if kept flat.
- Anchor text = target keyword of destination page ("Pocket alternative", not "click here").
- Collapse to accordions on mobile (CSS-only `<details>`) so it doesn't destroy mobile UX.

### 3.2 FAQ engine — `/faq/` index + 60 standalone pages

Each page: H1 = the question, 250–600 word answer, screenshots where relevant, QAPage JSON-LD, Breadcrumbs, "Related questions" block (6 links), LinkHub, CTA. Homepage gets a 15-question FAQ section (FAQPage schema) linking to the full pages.

The 60 slugs, grouped:

**Pricing/billing (brand-defense — these protect the brand SERP like photoai's cancel/refund/coupon pages):**
`is-marqly-free` · `how-much-does-marqly-cost` · `whats-in-marqly-free-vs-pro` · `how-do-i-cancel-my-subscription` · `can-i-get-a-refund` · `marqly-coupons-and-discounts` · `is-there-a-student-discount` · `is-there-a-lifetime-deal` · `what-happens-when-my-trial-ends` · `what-happens-to-my-bookmarks-if-i-cancel`

**Trust/data:**
`is-marqly-safe` · `where-is-my-data-stored` · `does-marqly-sell-my-data` · `can-i-export-my-data` · `how-do-i-delete-my-account` · `does-marqly-work-offline` · `who-made-marqly`

**Getting started / imports:**
`how-do-i-install-the-chrome-extension` · `does-marqly-work-on-edge` · `does-marqly-work-on-firefox` · `does-marqly-work-on-safari` · `is-there-an-ios-app` · `is-there-an-android-app` · `how-do-i-import-chrome-bookmarks` · `how-do-i-import-from-pocket` · `how-do-i-import-from-raindrop` · `how-do-i-import-from-instapaper` · `can-i-sync-across-devices`

**Core features (one per feature — these double as long-tail how-to landers):**
`how-does-ai-auto-tagging-work` · `what-is-semantic-search` · `how-do-i-search-my-bookmarks-by-meaning` · `how-do-i-summarize-a-youtube-video` · `how-do-i-get-a-youtube-transcript` · `how-do-i-chat-with-a-youtube-video` · `how-do-i-save-a-youtube-video-with-its-transcript` · `how-do-i-highlight-text-on-a-website` · `do-highlights-stay-on-the-page` · `how-do-i-add-notes-to-highlights` · `how-do-i-save-a-page-as-pdf` · `how-do-i-save-all-my-open-tabs` · `what-are-boards` · `how-do-i-share-a-board-publicly` · `how-do-i-use-the-side-panel` · `does-marqly-detect-duplicate-bookmarks` · `what-keyboard-shortcuts-are-there` · `what-languages-does-marqly-support` · `how-do-i-chat-with-my-saved-articles` · `how-accurate-are-ai-summaries` · `what-ai-model-does-marqly-use` · `can-i-turn-off-ai-features`

**Comparisons-lite / category:**
`what-is-an-ai-bookmark-manager` · `what-is-a-second-brain-app` · `what-is-a-read-it-later-app` · `is-marqly-a-pocket-replacement` · `how-is-marqly-different-from-browser-bookmarks` · `can-marqly-replace-notion-web-clipper`

**Misc:** `does-marqly-have-an-api` · `is-there-an-affiliate-program` · `how-do-i-contact-support` · `how-do-i-report-a-bug` · `whats-on-the-roadmap`

### 3.3 Compare engine — `/compare/` index + pair pages

Template (mirrors photoai's exactly): H1 `Marqly vs Raindrop.io: Which Is Better? (2026)` → verdict box (2-sentence answer, for featured snippets + AI answers) → feature `ComparisonTable` → pricing table → "when to choose X" / "when to choose Marqly" prose (unique per pair, 400+ words) → 5-question FAQ (FAQPage schema) → "Compare Marqly with other tools" + "Compare Raindrop with other tools" cross-link blocks → CTA → LinkHub. BreadcrumbList + ItemList schema.

- **Phase A (24 pages):** `marqly-vs-<each competitor>`.
- **Phase B (~105 pages):** third-party pairs among the top 15 competitors (`pocket-vs-raindrop`, `instapaper-vs-readwise-reader`…). This is photoai's cleverest move — capturing comparison searches that don't mention them, with Marqly presented as "the option both sides are missing". Generated from the same YAML; each needs a unique 300-word verdict written (batchable).
- **Migration decision:** the 6 existing blog vs-posts (`pocket-vs-marqly` etc.) move to `/compare/marqly-vs-pocket` with 301s in `public/_redirects`, reusing their prose as the "when to choose" sections. One canonical URL per pair — no cannibalization. (Alternative if we want zero URL churn: keep blog URLs canonical and skip those 6 pairs in `/compare/` — but the namespace consistency is worth the 301s while the domain is still young.)

### 3.4 Alternatives engine — `/alternatives/` index + 24 pages

Template: H1 `Best Pocket Alternatives (2026)` → ranked top-6 list (Marqly #1 with honest justification; include real competitors — credibility is what makes these rank) → feature table → per-alternative 150-word blurbs → migration guide teaser (link to import FAQ/blog) → 5-question FAQ → "Explore more alternatives" cross-links → LinkHub.

Priority order: **Pocket** (dead product, orphaned search volume — our single biggest opportunity, we already rank content here), **Omnivore** (also dead), Instapaper, Raindrop, Readwise Reader, Matter, Evernote, OneTab, Toby, mymind, then the rest.

### 3.5 Use-case landers — ~40 root-level pages

Root-level slugs like photoai (`/for-students`, not `/use-cases/students` — shorter, keyword-exact). Each: unique 800–1,200 words, persona-specific hero, 3 feature sections mapped to the persona's workflow, testimonial if available, mini-FAQ (3 Qs, schema), CTA, LinkHub. **No recycled mega-body** (the photoai anti-pattern we're skipping).

**Personas (18):** `for-students` · `for-researchers` · `for-phd-students` · `for-developers` · `for-designers` · `for-writers` · `for-journalists` · `for-marketers` · `for-product-managers` · `for-ux-researchers` · `for-recruiters` · `for-lawyers` · `for-teachers` · `for-content-creators` · `for-consultants` · `for-founders` · `for-sales` · `for-real-estate`

**Jobs-to-be-done (16):** `chrome-bookmark-manager` · `bookmark-organizer` · `read-it-later` · `watch-later` · `web-highlighter` · `youtube-summarizer` · `youtube-transcript` · `save-page-as-pdf` · `tab-manager` · `research-organizer` · `second-brain` · `content-curation` · `swipe-file` · `recipe-organizer` · `job-search-organizer` · `travel-planning`

**Platform (6):** `bookmark-manager-for-chrome` · `-for-edge` · `-for-firefox` · `-for-safari` · `-for-iphone` · `bookmark-sync`

### 3.6 Free tools — `/tools` hub + 8 tool pages (photoai's `/watermark-remover` move)

Highest-leverage translation: tool-intent queries have huge volume and every tool funnels to the extension. We're already on a Cloudflare Worker, so server-assisted tools are cheap to add.

| Tool | Slug | Implementation | Funnel hook |
|---|---|---|---|
| YouTube Transcript Viewer | `/tools/youtube-transcript` | Worker endpoint fetches transcript; paste URL → full transcript, copy/download | "Get transcripts on every video automatically → extension" |
| YouTube Video Summarizer | `/tools/youtube-summarize` | Worker + LLM, rate-limited (e.g. 3/day per IP) | "Unlimited summaries on the watch page → Pro" |
| Bookmark File Viewer | `/tools/bookmark-file-viewer` | 100% client-side: parse Chrome/Firefox HTML export, browse/search/export CSV | "Import these into Marqly in one click" |
| Duplicate Bookmark Finder | `/tools/duplicate-bookmark-finder` | client-side, same parser | same |
| Pocket Export Converter | `/tools/pocket-export-converter` | client-side: Pocket ZIP/CSV → HTML/CSV/JSON | "Or import your Pocket file straight into Marqly" |
| Dead Link Checker | `/tools/dead-link-checker` | Worker proxy HEAD requests, rate-limited | "Marqly flags dead saves automatically" |
| URL Cleaner | `/tools/url-cleaner` | client-side: strip UTM/tracking params | soft |
| Reading Time Calculator | `/tools/reading-time` | client-side | soft |

Each tool page: the working tool above the fold, then 500+ words of how-to/FAQ content below (that's what ranks), HowTo/FAQPage schema, LinkHub.

### 3.7 Collections hub — `/collections/*` (photoai's `/ideas/*`) — Phase 4

20 curated "best saves about X" hub pages (`/collections/productivity`, `/collections/ai-tools`, `/collections/learning-to-code`…) seeded manually or from Discover data. Each links down to public boards → becomes the bridge to the UGC layer.

### 3.8 UGC layer — public Discover boards (photoai's `/photos/*` + `/@user`) — Phase 4, app-side

PhotoAI's 8,375 UGC pages are their compounding moat. Ours is `app.marqly.com/discover` — currently on the app subdomain where it builds no equity for www. Requirements (needs app work, scope separately):
- Public boards get SSR'd, crawlable pages with real `<title>`/meta/OG (either mirrored at `www.marqly.com/discover/<board-slug>` via the Worker, or `discover.marqly.com` — **www path strongly preferred** for equity consolidation).
- Sitemap feed of public boards, auto-updating; quality gate (≥5 items, has description) — below threshold = noindex.
- Public profile pages `/@username` listing a user's public boards (photoai's exact `/@user` move).
- This ships **last** — only after templates above prove indexation health in GSC.

### 3.9 Blog — 15 new posts feeding the new engines

Keep all 33 posts; add internal links from each to the relevant new template pages (compare/alternatives/tools). New posts:

Reviews cluster (feeds `/alternatives/` credibility): `raindrop-review-2026` · `instapaper-review-2026` · `readwise-reader-review-2026` · `karakeep-review-2026` · `linkwarden-review-2026` · `mymind-review-2026`
Roundups: `best-web-highlighters-2026` · `best-youtube-summarizers-2026` · `best-tab-managers-2026` · `best-free-bookmark-managers-2026`
JTBD long-tail: `export-twitter-x-bookmarks` · `export-reddit-saved-posts` · `chrome-bookmarks-not-syncing-fix` · `para-method-for-bookmarks`
Seasonal: `digital-declutter-new-year` (publish December)

### 3.10 Schema rollout (site-wide)

| Surface | Schema |
|---|---|
| All pages | Organization, WebSite (once, in BaseLayout head) |
| Homepage | + SoftwareApplication (with CWS `aggregateRating` + `installUrl`), FAQPage (15 Qs), Review×N (real testimonials) |
| `/faq/*` | QAPage + BreadcrumbList |
| `/compare/*`, `/alternatives/*` | FAQPage + BreadcrumbList + ItemList |
| Use-case landers | FAQPage (3 Qs) + BreadcrumbList |
| `/tools/*` | HowTo + FAQPage + SoftwareApplication |
| Blog | Article (verify exists) + FAQPage (frontmatter `faqs` already there — confirm it emits JSON-LD) |

### 3.11 ASO — the store-listing half

**Chrome Web Store (primary):**
- **Name:** CWS search weights the name heavily. Target ≤75 chars, front-load category keywords: `Marqly: AI Bookmark Manager – Highlights, YouTube Summary & Read Later`. (Check current listing; avoid spammy repetition — CWS enforces.)
- **Description:** first ~132 chars = the search snippet; must contain "bookmark manager", "highlighter", "read it later", "Pocket alternative", "YouTube summary" naturally across the full text.
- **Assets:** 5 screenshots (1280×800) each captioned with a keyword-feature ("Semantic search — find saves by meaning"), promo tile, 30s demo video.
- **Ratings velocity:** in-extension review prompt after the Nth successful save / first successful semantic-search hit (happy moment). CWS rating feeds our SoftwareApplication schema → stars in Google SERPs.
- **Localization:** localize the listing (not the product) into ES, PT, DE, FR, JA — near-free install volume.
- **Update cadence:** regular version pushes; CWS favors actively-maintained.
- **Cross-list everywhere** (each store = a DA-90+ backlink + install channel + its own search engine): **Edge Add-ons** (far less competition, Bing surfaces it), **Firefox AMO**, **Safari** (already have iOS; verify Mac Safari extension listing).

**iOS App Store:**
- Title (30 chars): `Marqly: AI Bookmark Manager` · Subtitle (30): `Save, Highlight, Summarize` · Keyword field (100 chars, no spaces after commas, don't repeat title words): `pocket,read later,raindrop,web clipper,highlighter,youtube,transcript,second brain,save,links`
- Screenshots with benefit captions; review prompt at the same happy moments.

**Third-party "stores" that rank for our money terms** (this attacks the off-page gap from the June audit): claim/complete **AlternativeTo** (ranks top-3 for nearly every "X alternative" query — get listed as Pocket/Raindrop/Instapaper alternative, drive early users to like it), **Product Hunt** (refresh), **G2 + Capterra** (they rank for "X vs Y" and "X alternatives"), **Slant**, **ToolFinder**, plus the Pocket-shutdown roundup articles (pitch inclusion — dozens exist and update regularly).

### 3.12 Technical checklist

- `@astrojs/sitemap` already emits `sitemap-index.xml` — verify all new namespaces appear; keep `lastmod` accurate.
- `public/_redirects`: add the 6 blog→compare 301s; keep the existing map intact.
- Trailing-slash: confirm `build.format` handling before shipping new namespaces (open item from migration notes) so `/compare/x` doesn't 307.
- OG images: one template design per engine (compare/alternatives/faq/tools), generated at build (satori) or 5 static variants — every page needs a non-generic OG.
- `llms.txt`: extend with new sections (Compare, Alternatives, FAQ, Tools) as each engine ships; consider `llms-full.txt`.
- Perf: LinkHub is static HTML — keep zero-JS; audit CWV after Phase 1 (Lighthouse CLI loop per the auto-research pattern).
- GSC: submit each new sitemap section; monitor Indexed/Crawled-not-indexed per namespace weekly — **this is the rollout throttle** (see risks).

---

## Part 4 — Phased roadmap

**Phase 0 — Foundation (1 sprint):**
Competitor YAML schema + `marqly.yaml` + first 10 competitor files (research + `last_verified` each) · `LinkHub.astro`, `FaqAccordion.astro`, `ComparisonTable.astro`, `Breadcrumbs.astro`, `SchemaOrg.astro` · content collections config · trailing-slash fix · OG template.
*Exit: LinkHub live on all existing pages (with only existing links), schema validating in Rich Results test.*

**Phase 1 — FAQ engine + homepage (1–2 sprints):**
60 FAQ pages (batch-write from product truth; verify the 2 open product facts + Stripe pricing parity first) · `/faq` index · homepage FAQ section (15 Qs, FAQPage schema) · homepage SoftwareApplication schema · LinkHub gains FAQ column.
*Exit: 60 pages live, QAPage rich results validating, GSC sitemap submitted.*

**Phase 2 — Compare + Alternatives (2 sprints):**
Remaining 14 competitor YAMLs · `/compare/marqly-vs-X` ×24 + index · `/alternatives/X` ×24 + index · 301 the 6 blog vs-posts · blog reviews cluster (6 posts) · AlternativeTo/G2/Capterra listings submitted.
*Exit: 54 new pages, 301s verified, cross-link blocks live.*

**Phase 3 — Use-case landers + free tools (2–3 sprints):**
40 landers (write in batches of 8, unique content each — no template stamping of body copy) · `/tools` hub + 8 tools (client-side ones first, Worker-backed transcript/summarizer second) · CWS listing overhaul + Edge/Firefox cross-listing + review prompts shipped in extension.
*Exit: ~90 more pages; tools measurably converting installs (GA4 events).*

**Phase 4 — Scale + UGC (ongoing):**
X-vs-Y pairs ~105 (release 15–20/week, each with unique verdict copy) · `/collections/` ×20 · Discover UGC surfacing on www (app-side project) · seasonal pages · listing localization.

**Ongoing cadence:** 1–2 blog posts/week · monthly `last_verified` sweep of competitor YAMLs (auto-flag stale) · weekly GSC indexation review · quarterly CWS/ASO iteration.

---

## Part 5 — Risks & guardrails

1. **Doorway-page penalty risk** — our #1 risk, photoai's model tolerated only because of their authority. Guardrails: every page ≥ 500 unique words (landers ≥ 800); no cloned body copy across pages; rollout throttled to ~20–30 new URLs/week; **pause rule:** if GSC "Crawled — currently not indexed" exceeds ~30% of a namespace for 3+ weeks, stop expanding that namespace and improve existing pages instead.
2. **New-domain sandbox** (known from June audit): expect 3–6 months lag on programmatic pages. The off-page work (3.11 third-party listings, Pocket-roundup pitches) is not optional — it's what shortens the sandbox.
3. **Honesty in comparisons:** ranked lists must be genuinely useful (real pros/cons, competitors sometimes win categories) or they won't earn links/AI citations — photoai's do this surprisingly well.
4. **Facts drift:** pricing/claims in 450 pages will rot. That's why everything renders from the YAML data layer — one edit propagates. Never hand-write a feature claim in a template body.
5. **CWS policy:** keyword-stuffed names get rejected; keep the name formula natural.

## Part 6 — Success metrics

- Indexed pages (GSC, per namespace) — target 80%+ indexation per shipped namespace within 8 weeks.
- Non-brand clicks/week (GSC) — baseline now, review monthly.
- Ranking targets: top-10 for "pocket alternative(s)" within 4 months of Phase 2; top-10 for 10+ `X vs Y` pairs within 6 months.
- CWS: impressions→installs conversion, rating count (target: enough for schema stars), keyword rank for "bookmark manager" in CWS search.
- AI-answer citations (Perplexity/ChatGPT spot-checks monthly — we're already optimizing AEO).
