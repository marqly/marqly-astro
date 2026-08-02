---
a: omnivore
b: karakeep
verdict: "Karakeep wins: Omnivore shut down in November 2024, while Karakeep is an actively developed, self-hosted alternative that even imports Omnivore exports. For open-source savers, this one isn't close — the only living option is also the more capable one."
updatedDate: 2026-08-02
faqs:
  - q: "Can Karakeep import my old Omnivore data?"
    a: "Yes — Karakeep's importers explicitly cover Omnivore exports, alongside Pocket, Instapaper, Linkwarden, mymind, and browser bookmark HTML. That only helps if you exported before Omnivore's November 30, 2024 deadline, after which hosted data was permanently deleted. If you have that export, Karakeep is one of the smoothest landing spots for it."
  - q: "How does self-hosting Karakeep compare to self-hosting an Omnivore fork?"
    a: "Karakeep is far more practical. It ships as a straightforward Docker install with active maintenance, 28,000+ GitHub stars, and steady releases — version 0.33 arrived in August 2026. Omnivore's original stack needs PostgreSQL, Elasticsearch, and multiple microservices, and its forks are volunteer-run with uncertain futures. Both are free; only one is sustainable to operate."
  - q: "Does Karakeep have features Omnivore lacked?"
    a: "Several. AI auto-tagging and summaries via any OpenAI-compatible API or local Ollama, semantic search added in 2026, full-page archiving including screenshots, PDFs, and yt-dlp video downloads, public shareable lists with RSS, plus webhooks, a CLI, and an MCP server. Omnivore countered with a reading queue, newsletters, and text-to-speech — consumption features Karakeep doesn't chase."
---

Only one of these projects is alive, and it happens to be the more ambitious one. Omnivore's hosted service closed in November 2024 when its team was acqui-hired by ElevenLabs; users had until November 30 to export before deletion, and while the AGPL code persists on GitHub, self-hosting the original PostgreSQL-Elasticsearch-microservices stack is a serious undertaking maintained by volunteers. Karakeep — launched as Hoarder, renamed in early 2025 — is the self-hosted bookmark-everything app in rude health: a Docker install with AI auto-tagging and summaries through any OpenAI-compatible API or local Ollama, Meilisearch full-text plus semantic search, full-page archiving down to yt-dlp video downloads, and rare-for-self-hosted iOS, Android, and Safari support.

**Choose Karakeep if:**

- You want an open-source, self-hosted home for your saves that's actually maintained — free forever on your own hardware
- AI organization appeals: automatic tags, summaries, and semantic search, kept private via local models
- You still have an Omnivore export sitting around — Karakeep imports it directly

**Choose an Omnivore fork only if:**

- You specifically want Omnivore's reading-queue experience — newsletters, text-to-speech, its search syntax — and accept the heavy operations
- Running a volunteer-maintained stack with no guarantees genuinely doesn't bother you

Bottom line: there's a fair caveat. Karakeep is a bookmark manager, not a reader — no text-to-speech, no chat with saves, no newsletter inbox — so it replaces Omnivore's library rather than its reading flow. But as a place for an open-source enthusiast's saves to live and be found again, Karakeep is better than Omnivore ever was, and unlike Omnivore, it will still be running next month.
