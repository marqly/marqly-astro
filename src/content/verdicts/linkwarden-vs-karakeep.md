---
a: linkwarden
b: karakeep
verdict: "The two strongest open-source bookmark managers, split cleanly: Linkwarden for collaboration and a stable, cheap managed cloud; Karakeep for deeper AI — summaries and semantic search — if Docker doesn't scare you."
updatedDate: 2026-08-02
faqs:
  - q: "Which has better search, Linkwarden or Karakeep?"
    a: "Karakeep. Its Meilisearch-backed engine covers full text and added semantic and hybrid modes in 2026, so you can find saves by meaning as well as keywords. Linkwarden's search is keyword and full-text only — thorough across archived page content, but with no semantic layer, no summaries, and no chat."
  - q: "How do their cloud plans compare?"
    a: "Linkwarden Cloud is the mature option: $3/month per user billed yearly or $4 monthly, a 14-day trial, and support for up to 30,000 links per user — but no permanent free tier. Karakeep Cloud is still in public beta with a free tier capped at 10 bookmarks and a Pro plan at $4/month."
  - q: "Do both need my own AI keys for tagging?"
    a: "Self-hosted, yes in Karakeep's case: AI tagging and summaries require an OpenAI-compatible API key or a local Ollama model you run yourself. Linkwarden's AI tagging is optional and also supports local models, keeping auto-organization private. Either way the AI is opt-in — both work fine as plain archiving bookmark managers without it."
---

This is the closest matchup in self-hosted bookmarking. Both are open source with free, fully featured self-hosting. Both archive saved pages against link rot. Both offer AI tagging that can run on local models, browser extensions, mobile apps, and REST APIs. The differences live at the edges — and the edges are where you'll spend your time. Linkwarden leans social and stable: nested collections with per-user permissions, public sharing, and a mature Cloud at $3/month. Karakeep (formerly Hoarder, renamed in early 2025) leans intelligent and tinkerable: AI summaries, semantic and hybrid search via Meilisearch, webhooks, a CLI, and an MCP server for AI agents.

**Choose Linkwarden if:**

- You share libraries — collaborative collections with permissions are its distinctive feature.
- You want managed hosting that isn't a beta: $3/month per user billed yearly, 14-day trial, up to 30,000 links.
- Preservation is the goal — every link stored as screenshot, PDF, and readable copy, with Wayback Machine push.

**Choose Karakeep if:**

- You want the fuller AI stack: auto-tagging plus summaries plus semantic search, all runnable on a private Ollama model.
- You automate — webhooks, CLI, MCP server, and yt-dlp video archiving reward the tinkerer.
- Safari matters: Karakeep has an extension for it; Linkwarden covers Chrome, Firefox, and Edge.

The hosted comparison is lopsided for now. Linkwarden Cloud is an established product; Karakeep Cloud remains a public beta whose free tier allows just 10 bookmarks, with Pro at $4/month. Both projects shipped mobile apps recently — Linkwarden's arrived in late 2025 and are still catching up to the web experience, while Karakeep added offline reading in 2026. Neither offers AI Q&A over your saves. Teams and anyone wanting a dependable hosted service should take Linkwarden today; solo self-hosters who want their bookmarks to file and summarize themselves should take Karakeep.
