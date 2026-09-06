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

### PR 4 — Free Engineering-as-Marketing Tools as Link Magnets (SHIPPED & VERIFIED)
- [x] **Schema Coverage 100%:** Added missing Schema.org `freeWebApplication` to all 6 tools (`dead-link-checker`, `pocket-export-converter`, `duplicate-bookmark-finder`, `bookmark-file-viewer`, `reading-time`, `url-cleaner`). Now 18/18 tools have valid `WebApplication` + `FAQPage` + `BreadcrumbList` markup.
- [x] **High-Intent Cross-Linking:**
  - `pocket-export-converter.astro`: Direct links and callout to `/migrate/pocket` step-by-step rescue guide.
  - `dead-link-checker.astro`: Linked to `/compare/marqly-vs-raindrop` and `/extension`.
  - `duplicate-bookmark-finder.astro`: Reconciled 2,000 saves free-tier pricing and linked to `/pricing` + `/faq/how-do-i-import-chrome-bookmarks`.

### PR 5 — Content Engine & Prompt Gallery HCU Guard (SHIPPED & VERIFIED)
- [x] **Re-anchored Topical Relevance:**
  - Added sticky "Save & Run Prompts in Marqly" sidebar card across all 400+ prompt gallery pages (`src/pages/prompt-gallery/[slug].astro`), fixing an empty 360px grid gap and connecting prompt readers to the Marqly browser extension (`/extension`) and web app.
  - Added "Save to Marqly" action button in the prompt card toolbar alongside "Copy", allowing users to save prompt snippets to their library.
  - Added contextual "Organize your AI prompt library with Marqly" banner in the prompt card.
  - In `src/pages/prompt-gallery/index.astro`, injected the Prompt Hub hero banner linking to extension and web app.
- [x] **Topical Authority Defense:** Fully prevents topical dilution under Google's Helpful Content System (HCU) by grounding prompt search volume into Marqly's core bookmarking, tagging, and snippet-management entity.

### PR 6 — Developer Ecosystem Backlink Injection
**Goal:** Capture high-DR developer backlinks (DR 80–96).
1. Official open-source `@marqly/mcp-server` (Model Context Protocol for Claude Desktop, Cursor, Antigravity).
2. Developer lander: `/integrations/mcp`.
3. Submit to Smithery.ai, PulseMCP, and GitHub Awesome-MCP lists.
