---
a: wallabag
b: karakeep
verdict: "Karakeep for AI-powered organization on your own hardware; Wallabag for a proven reading queue with the cheapest official hosting anywhere. Both are open source — the split is AI ambition versus thirteen years of stability."
updatedDate: 2026-08-02
faqs:
  - q: "Does Wallabag have any AI features?"
    a: "No — none at all. Wallabag offers no AI summaries, no semantic search, and no smart tagging; its automatic tagging is rule-based, filing saves according to conditions you define. Karakeep provides all three AI capabilities, but you supply the engine: an OpenAI-compatible API key or a local Ollama model running on your own hardware."
  - q: "Which is easier to run on your own server?"
    a: "Both demand real effort, just different kinds. Wallabag is a PHP application with a database and ongoing update maintenance. Karakeep is a Docker install, plus API keys or a local model if you want the AI features. If you'd rather not host at all, Wallabag's €11/year wallabag.it is far more established than Karakeep's beta Cloud."
  - q: "Which preserves saved pages more completely?"
    a: "Karakeep. It performs full-page archiving — a page copy, a screenshot, a PDF, and even video downloads through yt-dlp — so saves survive link rot in multiple formats. Wallabag stores a parsed, readable version of the article text, which is ideal for reading but can render poorly when its parser meets complex, script-heavy sites."
---

This is two generations of self-hosted saving. Wallabag has been shipping since 2013: a mature PHP application that turns saved pages into a clean reading queue, with rule-based tagging, ePub export, and official mobile apps. Karakeep launched as Hoarder and took its current name in early 2025, and it's AI-native by design — automatic tagging and summaries run through any OpenAI-compatible API or a fully local Ollama model, and Meilisearch-backed search gained semantic and hybrid modes in 2026. Where Wallabag preserves an article's text, Karakeep hoards everything: page copies, screenshots, PDFs, even video downloads via yt-dlp.

**Choose Wallabag if:**

- You want a reading workflow — queue, offline apps, annotations — rather than a media vault.
- You'd rather pay €11/year at wallabag.it than run Docker; it's a stable, long-established hosted option.
- E-reader export to ePub and PDF matters to you.

**Choose Karakeep if:**

- You want AI filing without a cloud dependency — tagging and summaries can run entirely on local Ollama.
- Search quality is the priority: full-text plus semantic and hybrid modes beats keyword matching.
- You like plumbing — REST API, webhooks, a CLI, and an MCP server for wiring in AI agents, plus a Safari extension Wallabag lacks.

The hosted stories diverge sharply. Wallabag.it is boring in the best way: all features on every plan, a 14-day trial, and pricing that funds the project. Karakeep Cloud is still a public beta whose free tier caps at 10 bookmarks, with a $4/month Pro tier. Self-hosting Karakeep means Docker plus bring-your-own AI keys — real setup work, though no worse than maintaining a PHP stack. If you want software that will feel the same in five years, take Wallabag. If you want your bookmarks to organize themselves, Karakeep is the most capable open-source way to get there.
