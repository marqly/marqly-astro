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

### PR 2 — Public Boards & Embed Flywheel (SHIPPED & VERIFIED)
- [x] **Embed Documentation & Snippet Generator Page (`/embed`):**
  - Created standalone `/embed` interactive generator supporting Card Grid, Compact List, and Minimal views with Light, Dark, and Auto themes.
  - Generates embed iframe code with canonical dofollow attribution: `<a href="https://www.marqly.com/?utm_source=embed&utm_medium=referral&utm_campaign=board_embed" rel="noopener">Curated with Marqly AI Bookmark Manager</a>`.
  - Step-by-step platform integration guides for Notion (`/embed`), WordPress (Gutenberg Custom HTML), Ghost CMS (HTML card), Substack, and Webflow.
  - Structured data implemented: `HowTo`, `WebApplication`, `BreadcrumbList`, `FAQPage`.
- [x] **Redirects & Aliases:** Added 301 redirects for `/embed-board`, `/embeds`, `/help/embed`, `/help/embed-board` to `/embed`.
- [x] **Site-wide Discovery:** Linked in `FooterV2.astro` (Product column) and `LinkHub.astro` (What it does column).
- [x] **UGC Architecture Spec:** Created `docs/seo/public-boards-spec.md` establishing the thin-content quality gates ($\ge 5$ bookmarks, $\ge 80$ char description, human slug) for app team coordination.

### PR 3 — Switching & Migration Conquest Pages (SHIPPED & DEPLOYED)
- [x] **Dedicated Migration Landers:**
  - `/migrate/raindrop` — Step-by-step Raindrop migration guide with `HowTo` JSON-LD schema (Google rich snippet eligible).
  - `/migrate/pocket` — Complete Pocket rescue and import walkthrough with `HowTo` schema and Pocket export converter tool cross-links.
- [x] **Internal Link Mesh & Pre-Footer LinkHub:** Cross-linked `/compare/[pair].astro` (injected migration guide links in the switch box), `/alternatives/[slug].astro` (deep link in feature table row), and `src/components/seo/LinkHub.astro` (added `Migrate from Raindrop →` and `Migrate from Pocket →` to Compare column).
- [x] **Convenience Aliases (`public/_redirects`):** Pointed old Framer post `/blog/how-to-migrate-from-raindrop.io-to-marqly-complete-guide` to `/migrate/raindrop` (301); added `/migrate-from-raindrop`, `/migrate-from-pocket`, `/import-raindrop`, `/import-pocket`.

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
