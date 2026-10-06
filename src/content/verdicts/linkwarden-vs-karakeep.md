---
a: linkwarden
b: karakeep
verdict: "The two strongest open-source bookmark managers, split cleanly: Linkwarden for collaboration and a stable, cheap managed cloud; Karakeep for deeper AI — summaries and semantic search — if Docker doesn't scare you."
updatedDate: 2026-10-06
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

**Sources checked** (October 6, 2026): [Linkwarden on GitHub](https://github.com/linkwarden/linkwarden) for product scope, licence and release cadence; [docs.karakeep.app](https://docs.karakeep.app) and [the Karakeep repository](https://github.com/karakeep-app/karakeep) for the AI stack, search modes and the rename from Hoarder. Pricing lines above match what those pages and each project's cloud sign-up state on that date; prices move — check the source before committing.

**Migrating between them (or toward a hosted tool):** both are open archives by design — Linkwarden's UI exports its collections and Karakeep's settings export the library — and both accept the browser-style bookmark HTML that most tools produce, so the reliable cross-tool path is bookmark HTML or CSV with a URL column rather than a vendor-locked JSON. What survives any move: URLs, titles, folders (flattened one level or two) and tags. What does not, anywhere: original save dates — the import stamps the destination date, so keep the export file if chronology matters. If the reason you are moving is retrieval rather than custody, that is the one axis where a hosted AI manager is ahead of both (see [Marqly vs Linkwarden](/compare/marqly-vs-linkwarden) and [Marqly vs Karakeep](/compare/marqly-vs-karakeep)) — and see what we measured about import fidelity in [the bookmark-export study](/research/bookmark-import-fidelity).
