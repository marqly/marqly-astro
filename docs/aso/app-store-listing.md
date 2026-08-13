# iOS App Store Listing — ready-to-paste (2026-08-02)

App: `Marqly: AI Bookmark Manager` (id6758905385). Apply in App Store Connect.

## Metadata

- **Title (30 chars):** `Marqly: AI Bookmark Manager` (27 ✓ — keep)
- **Subtitle (30 chars):** `Save, Highlight & Summarize` (27 ✓)
- **Keyword field (100 chars, comma-separated, no spaces, never repeat title/subtitle words):**
  `pocket,read later,raindrop,web clipper,highlighter,youtube,transcript,second brain,links,tags`
  (95 chars — "pocket" and "read later" are the money terms post-Pocket-shutdown)

## Promotional text (170 chars, updatable without review)

`Pocket shut down — Marqly imports your export in one tap. AI tags every save and semantic search finds anything by how you describe it. Free to start.`

## Description opening (first 3 lines decide the tap)

```
Save it once. Find it forever.

Marqly saves articles, videos, and links from anywhere, tags them with AI, and finds them again when you just describe what you remember — no folders, no exact titles.

• AI auto-tagging and summaries for every save
• Semantic search — "that video about sourdough starters" just works
• Highlights and notes, synced from the browser extension
• YouTube videos saved with their transcripts
• Boards you can share as public pages
• Imports from Pocket, Raindrop, and browser bookmarks

Free to start, no card required. Pro: $70/year (≈$5.83/month) or $7/month, 3-day free trial.
Syncs with the Marqly extension for Chrome, Edge, Firefox & Safari, and the web app.
```

## Screenshots

6.7" + 6.1" sets, first 3 do the selling: (1) library with AI tags, (2) semantic
search query → hit, (3) a saved YouTube video with transcript, (4) highlights,
(5) boards/share. Caption text ON the images (App Store crops descriptions).

## Ratings engine

- `SKStoreReviewController.requestReview` after the 5th successful save OR the
  first successful semantic-search tap-through — whichever comes first, never
  on launch, max once per version per Apple's rules.
- Respond to reviews in App Store Connect; indexed and visible.

## Cadence

Ship at least monthly. Update the promotional text seasonally (back-to-school,
new-year declutter) without needing app review.
