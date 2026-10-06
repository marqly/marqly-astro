# ADR-003: On-strategy vs off-strategy tools

- **Status:** accepted
- **Date:** 2026-10-05
- **Phase:** 2.4

## Decision
**On-strategy** tools (drive our ICP — bookmarks/YouTube/export): keep investing.
`youtube-thumbnail-downloader, bookmarklet-maker, youtube-chapter-generator, reading-time,
bookmark-file-viewer, duplicate-bookmark-finder, dead-link-checker, pocket-export-converter,
raindrop-export-analyzer, youtube-transcript, youtube-summarize, youtube-timestamp-link`.
All 20 already ship `WebApplication` schema (VERIFIED). The 6 highest-impression ones were
expanded to 1,100–1,680 words this session (how-it-works, tables, edge cases, privacy accurate to
local-vs-API, FAQs matching visible copy, bridge CTAs).

**Off-strategy** tools (no ICP link, confirmed by owner snapshot §2.5: redirect-checker 8,733 imp
/ pos 41.8 / 1 click; url-cleaner 2,818 imp / pos 27 / 1 click):
`redirect-checker, url-cleaner, url-encoder, utm-builder, open-graph-checker, html-to-markdown,
rss-feed-finder`. Keep LIVE, top thin copy to ≥400 words for basic quality, but **freeze** — no further
content/link/schema investment. They are not the reason the domain ranks.

## Consequence
Tool content budget goes only to the on-strategy list. Off-strategy pages are excluded from the
internal-link-priority and outreach lists.
