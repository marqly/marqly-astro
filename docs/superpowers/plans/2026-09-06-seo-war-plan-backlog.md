# Marqly SEO War Plan: Prioritized Implementation Backlog (2026-09-06)

This document tracks execution of the Marqly SEO War Plan to capture organic search share and bridge the authority deficit with Raindrop.io.

---

## Completed Releases

### PR 1 — Trust & Crawl Hygiene (SHIPPED & DEPLOYED)
- [x] **Homepage H1 Typo:** Added whitespace between `actually ` and `<br />` in `src/components/landing/HeroSection.astro` to prevent `actuallyfind` string concatenation in DOM text extraction.
- [x] **Canonical `/pricing` Page:** Built standalone, fully indexable `src/pages/pricing.astro` with `AggregateOffer` ($0–$72) and `FAQPage` schema.
- [x] **Redirects & 404 Leaks:**
  - `www.marqly.com/discover` & `/discover/` → 301 to `https://app.marqly.com/explore`
  - `www.marqly.com/explore` & `/explore/` → 301 to `https://app.marqly.com/explore`
  - `/Pricing` & `/Pricing/` → 301 to canonical `/pricing`
  - `/features` & `/features/` → 301 to `/extension`
  - `/about` & `/about/` → 301 to `/`
- [x] **Pricing & Free-Tier Reconciliation:**
  - Following the removal of the 100-bookmark read-wall, updated `src/data/competitors/marqly.json`, `public/llms.txt`, all pricing FAQs, and blog roundups to reflect the canonical product truth: **Free tier stores up to 2,000 bookmarks with whole-library search**.
  - Standardized Pro pricing ($72/yr, $39 first-year with `STANDING39`, $9/mo, $48 student discount, 7-day trial).

---

## Active & Upcoming Releases

### PR 2 — Public Boards & Embed Flywheel (UGC SEO Foundation)
**Goal:** Build the viral backlink engine that drove Raindrop's 3.1M backlinks.
1. **Embed Documentation Page (`/embed` or `/help/embed-board`):**
   - Developer/blogger guide explaining how to embed public Marqly boards into Ghost, WordPress, Notion, and personal blogs.
   - Code snippet generator with canonical dofollow attribution: `<a href="https://www.marqly.com/?utm_source=embed" rel="dofollow">Curated with Marqly AI Bookmark Manager</a>`.
2. **UGC Quality Gates & Canonical Mapping (Coordinate with app team):**
   - Thin-content guard: index only boards with $\ge 5$ saves, human-readable slug, and description $\ge 80$ characters.
   - Serve or proxy public boards onto `www.marqly.com/discover/[slug]` per `docs/aso/discover-ugc-spec.md`.

### PR 3 — Switching & Migration Conquest Pages
**Goal:** Capture high-intent defecting searchers from Raindrop and Pocket.
1. **Dedicated Migration Landers:**
   - `/migrate/raindrop` — Step-by-step Raindrop migration guide with `HowTo` JSON-LD schema (Google rich snippet eligible).
   - `/migrate/pocket` — Complete Pocket rescue and import walkthrough with `HowTo` schema and Pocket export converter tool cross-links.
2. **Competitor Landers Refresh:**
   - Deepen `/compare/marqly-vs-raindrop` and `/alternatives/raindrop` with the 2026 verified feature matrix.
   - Cross-link comparison and alternatives pages into the new `/pricing` and `/migrate/*` pages.

### PR 4 — Free Engineering-as-Marketing Tools as Link Magnets
**Goal:** Turn top utility tools into high-converting organic search funnels.
1. Polish top 4 utilities:
   - `/tools/youtube-transcript` (High-volume query target)
   - `/tools/dead-link-checker` (Bookmark maintenance utility)
   - `/tools/pocket-export-converter` (Defection magnet)
   - `/tools/duplicate-bookmark-finder`
2. Add FAQ schema, one-click extension install CTAs, and ensure zero duplicate content across locales.

### PR 5 — Content Engine & Prompt Gallery HCU Guard
**Goal:** Prevent topical dilution under Google's Helpful Content System.
1. Ring-fence or prune the 400 prompt gallery pages; add 1-click "Save Prompt to Marqly" to re-anchor topical relevance to bookmarking & knowledge management.
2. Verify FAQ (63) and compare (131) pages against cannibalization.

### PR 6 — Developer Ecosystem Backlink Injection
**Goal:** Capture high-DR developer backlinks (DR 80–96).
1. Official open-source `@marqly/mcp-server` (Model Context Protocol for Claude Desktop, Cursor, Antigravity).
2. Developer lander: `/integrations/mcp`.
3. Submit to Smithery.ai, PulseMCP, and GitHub Awesome-MCP lists.
