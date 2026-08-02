# Chrome Web Store Listing — ready-to-paste overhaul (2026-08-02)

Apply in the CWS Developer Dashboard. CWS search weighs the NAME heavily, then
the description text. Keep it natural — keyword-stuffed names get rejected.

## Name (≤75 chars — pick 1)

**Recommended:**
`Marqly: AI Bookmark Manager — Highlighter & YouTube Summary`

Alternates:
- `Marqly — AI Bookmark Manager, Read It Later & Web Highlighter`
- `Marqly: AI Bookmarks, Highlights & YouTube Summaries`

Covers the four highest-volume CWS queries we can honestly claim: "bookmark
manager", "highlighter", "youtube summary", plus brand.

## Short description (132 chars max — this is the search-results snippet)

`Save any page, let AI tag & summarize it, find it again by describing it. Highlighter, YouTube summaries & transcripts included.`
(128 chars)

## Detailed description (paste as-is, edit freely)

```
Marqly is the bookmark manager that finds things FOR you.

Save any page in one click. AI tags and summarizes it automatically. Later, just describe what you remember — "that video about sourdough starters" — and semantic search surfaces it, even if the title never said it.

WHAT YOU GET
• One-click save + save all open tabs at once
• AI auto-tagging — no folders, no filing
• Semantic search — find saves by meaning, not keywords
• AI summaries of saved articles
• YouTube AI card on every watch page: streaming summary, key sections, playback-synced transcript (one-click copy), and chat that answers from the transcript
• Web highlighter — 6 colors + notes that persist on the page and sync to your library
• Save any page as a clean PDF, processed locally in your browser
• Boards — group links & highlights, share as a public page (viewers need no account)
• Side panel — browse and search your library without leaving the page

SWITCHING IS EASY
Import your Pocket export, Raindrop.io collections, or the bookmarks HTML file from Chrome, Edge, Firefox, or Safari. Everything gets AI-tagged on the way in. Pocket shut down — Marqly is where its users land. 

FREE TO START
Free plan, no card required. Pro ($48/year ≈ $4/month, or $8/month) adds chat with your saves and YouTube video chat. 7-day free trial.

Also available: Edge add-on, Firefox add-on, Safari extension, iOS app, and the web app at app.marqly.com — your library syncs everywhere.

Questions? https://www.marqly.com/faq · support@marqly.com
```

## Category & assets

- Category: **Productivity** (primary). 
- Screenshots (1280×800, 5): each captioned with a keyword-benefit:
  1. "Semantic search — find saves by describing them"
  2. "AI tags every save automatically"
  3. "YouTube summary, transcript & chat on the watch page"
  4. "Highlight any website in 6 colors — highlights persist"
  5. "Save all open tabs in one click"
- Small promo tile 440×280 + marquee 1400×560: dark background, product shot,
  five words max ("The AI bookmark manager").
- 30s demo video (screen capture: save → auto-tag → semantic search hit → YouTube card). YouTube-hosted, linked in listing.

## Localization (near-free install volume)

Localize name + short + detailed description (product can stay English) via the
dashboard for: **es, pt-BR, de, fr, ja**. Translate honestly, keep feature names
in English where the UI is English.

## Hygiene & cadence

- Push a version at least monthly (actively-maintained signal).
- Reply to every review, especially negative — replies are public and indexed.
- The site's SoftwareApplication schema now cites the CWS rating (4.8) — keep
  the ratingCount in `src/lib/schema.ts` and `src/pages/index.astro` in sync
  with reality every month or two.
- Cross-listings (each store is its own search engine + a DA-90+ backlink):
  Edge Add-ons and Firefox AMO listings exist — refresh their copy to match
  this listing after applying it on CWS.
