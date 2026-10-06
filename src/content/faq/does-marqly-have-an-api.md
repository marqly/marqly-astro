---
question: "Does Marqly have an API?"
description: "No — Marqly has no public API today. If an API would unlock your workflow, email support@marqly.com with the use case; real requests shape what gets built."
category: company
updatedDate: 2026-10-05
related:
  - can-i-export-my-data
  - how-do-i-contact-support
  - whats-on-the-roadmap
---

No — Marqly has no public API today. There's no documented endpoint for creating saves, reading your library, or wiring Marqly into automation tools, and there's no self-hosted option either. If an API matters for your workflow, email support@marqly.com and describe what you'd build — concrete use cases from real users are exactly what shapes priorities.

## The integration that does exist: connected apps via MCP

If "does it have an API" really means "can my tools talk to Marqly," there's a genuine answer today: **connected apps over MCP**. In the app, open **Settings → Connected apps** and connect an MCP-capable client — Claude, ChatGPT, Cursor, or VS Code — to the server at `https://mcp.marqly.com/ai/mcp`. Through that connection, your assistant can work with your Marqly library.

Two defaults are worth knowing before you connect anything:

- **Read-only by default.** A connected app sees your library; it doesn't change it.
- **Writes are an explicit opt-in.** There's an allow-write toggle in connected-app settings — you flip it on deliberately, you never discover it was already on.

## What that does not cover

An MCP connection is built for agents that speak MCP — not for a cron job, a shell script, or a Zapier-style automation. If your use case is "push a save in from a script on my server," the honest answer is still no, which is why the email exists. "API" means something different to everyone: pull your library into another tool, trigger an action when something is saved, bulk-import from a source we don't handle. Which of those ships first — if any — depends on which ones people actually ask for.

## Getting data in — and out — without one

For most "get my stuff into Marqly" cases, an API isn't actually required. Marqly imports the standard bookmark HTML file that Chrome, Firefox, Edge, and Safari export, Raindrop.io exports (see [how do I import from Raindrop](/faq/how-do-i-import-from-raindrop)), and Pocket's CSV `list.csv` — the HTML file in a Pocket archive does not import, as [how do I import from Pocket](/faq/how-do-i-import-from-pocket) explains. Day to day, the browser extension is the capture path: one-click save with tags, and a tab saver that captures every open tab at once. Getting data out works the same way — [can I export my data](/faq/can-i-export-my-data) covers what leaving with your library looks like.

## Will there be a public API later?

Maybe — but we don't promise features or dates we might not hit, and an API commitment made in a FAQ is exactly that kind of promise. The honest status lives on [what's on the roadmap](/faq/whats-on-the-roadmap), and [how to reach us](/faq/how-do-i-contact-support) has the details if you want to argue your case.
