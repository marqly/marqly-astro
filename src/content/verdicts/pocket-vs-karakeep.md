---
a: pocket
b: karakeep
verdict: "Karakeep — Mozilla closed Pocket in July 2025, and Karakeep (formerly Hoarder) is the most feature-complete self-hosted successor: AI tagging, summaries, semantic search, and full-page archiving, free forever on your own Docker server."
updatedDate: 2026-08-02
faqs:
  - q: "Can Karakeep import a Pocket export?"
    a: "Yes. Karakeep's importers cover Pocket exports alongside browser bookmark HTML, Omnivore, Instapaper, Linkwarden, and mymind files — one of the broadest import lists anywhere. You need the ZIP you downloaded before October 8, 2025, since Pocket itself deleted everything after that date. Imported saves get AI tags, summaries, and full-page archives automatically."
  - q: "Is Karakeep free?"
    a: "The self-hosted app is completely free, fully featured, and open source; you supply a Docker server plus, for AI tagging and summaries, your own OpenAI-compatible API key or a local Ollama model. The hosted Karakeep Cloud, still in public beta, offers a free tier capped at 10 bookmarks and a Pro tier at $4/month."
  - q: "How hard is Karakeep to set up compared with Pocket?"
    a: "Meaningfully harder — that's the price of ownership. Pocket was install-and-go; Karakeep expects a Docker deployment and bring-your-own AI keys, though it rewards the effort with iOS and Android apps, Chrome, Firefox, and Safari extensions, offline reading, and Meilisearch-backed search with semantic and hybrid modes added in 2026."
---

Pocket asked nothing of you — install, save, read, free. Karakeep asks for a Docker server and an API key, and pays you back with a feature set Pocket never approached: AI tagging and summaries through any OpenAI-compatible service or a fully local Ollama model, Meilisearch full-text search with semantic and hybrid modes added in 2026, and full-page archiving that captures a copy, screenshot, and PDF of everything — even downloading videos via yt-dlp. Mozilla closed Pocket in July 2025; Karakeep, formerly Hoarder, is what a successor looks like when the ceiling is removed.

**Choose Pocket if**

- You genuinely can't — the shutdown completed in 2025 and nothing survives past the October export deadline.
- No hosted revival or official successor exists.

**Choose Karakeep if**

- You're comfortable self-hosting: everything is free, open source, and fully featured on your own hardware, with mobile apps and three browser extensions — unusual completeness for a self-hosted tool.
- You want the AI to do the filing: automatic tags, summaries, and search that understands meaning rather than exact keywords.
- You wire tools together — REST API, webhooks, a CLI, and an MCP server for AI agents are all included.

The honest trade is maintenance for immortality. Setup is real work, AI features need your own keys or local models, and the hosted Karakeep Cloud is still in public beta with a free tier capped at ten bookmarks and a $4/month Pro tier. But the project is thriving — past 28,000 GitHub stars with a steady release cadence — and its importers handle Pocket exports cleanly along with Omnivore, Instapaper, Linkwarden, and browser HTML. Ex-Pocket users who felt burned by a corporate shutdown and already run a homelab know exactly which way this verdict points.
