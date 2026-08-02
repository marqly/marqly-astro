---
a: omnivore
b: obsidian-web-clipper
verdict: "Obsidian Web Clipper — and not just because Omnivore shut down in November 2024. Clips saved as local Markdown files can never be deleted by a company going away, which is exactly the lesson Omnivore taught."
updatedDate: 2026-08-02
faqs:
  - q: "Did Omnivore integrate with Obsidian?"
    a: "Yes — one of Omnivore's best-loved features was a plugin that synced highlights and notes into Obsidian and Logseq vaults. That pipeline died with the hosted service in November 2024. Obsidian Web Clipper replaces the pattern by capturing pages and highlights directly into the vault as Markdown, with no intermediate service to shut down."
  - q: "Is Obsidian Web Clipper free like Omnivore was?"
    a: "Yes, and more durably. The clipper is free and open source, and Obsidian itself has been free for all use, including commercial, since February 2025. The only optional costs are Obsidian Sync from $4/month for cross-device sync and Publish at $8/month — and the Interpreter's AI can run free on a local Ollama model."
  - q: "Can my clips disappear the way Omnivore data did?"
    a: "No. Omnivore's data lived on servers that were switched off, and anything unexported by November 30, 2024 was deleted. Obsidian clips are plain Markdown files in a folder on your own disk — readable by any text editor, portable to any notes tool, and entirely outside any company's power to delete."
---

The verdict starts with a shutdown: Omnivore's hosted service ended in November 2024 after its team joined ElevenLabs, with a hard November 30 export deadline. But this pairing carries extra poignancy, because the two tools were friends — Omnivore's plugin synced highlights and notes into Obsidian, and many Omnivore users already keep a vault. Obsidian Web Clipper closes the loop: instead of highlights flowing from a hosted reader into your vault, capture happens directly into it, as plain Markdown files on your own disk.

**Choose an Omnivore fork if:**

- You specifically want a hosted-style reading experience — a queue, a web library, labels and filters — and can self-host the heavyweight PostgreSQL/Elasticsearch stack a fork requires.
- You accept volunteer maintenance and an uncertain future in exchange for free, open-source reading software.

**Choose Obsidian Web Clipper if:**

- You never want to lose a library to a shutdown again — clips live as local files no service can take away.
- You highlight as you read: highlighter mode captures the passages you mark, not just whole pages.
- You want capture automation — per-site templates auto-title, tag, and file clips, and the Interpreter can summarize or extract at clip time using your own API key or a free local Ollama model.

Be clear-eyed about the differences. The clipper is not a read-it-later service: there's no queue, no text-to-speech, and cross-device access means paying $4/month for Obsidian Sync or wiring up your own workaround. Organizing and finding clips is manual work that Omnivore's search syntax used to do for you. But both the clipper and Obsidian itself are entirely free — the same price Omnivore charged, attached to a business model that actually sustains it. For most former Omnivore users, that trade is easy to take.
