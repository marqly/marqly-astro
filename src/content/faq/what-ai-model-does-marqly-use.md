---
question: "What AI model does Marqly use?"
description: "Marqly runs on state-of-the-art large language models, chosen per task rather than pinned to one vendor — so models get swapped as better ones become available."
category: company
updatedDate: 2026-08-02
related:
  - how-does-ai-auto-tagging-work
  - what-is-semantic-search
  - how-accurate-are-ai-summaries
---

Marqly runs on state-of-the-art large language models, chosen per task — the model behind summaries isn't necessarily the one behind auto-tagging or chat. The product isn't pinned to a single vendor, and we don't publish a specific model name, because the underlying models get swapped whenever better ones become available. What stays constant is the job: tag every save, summarize what you saved, and answer searches by meaning.

## Why we don't name a model

Two reasons, both practical. First, the model landscape turns over every few months; any name printed here would be stale by the time you read it, and quietly wrong after the next upgrade. Second, naming a model turns an implementation detail into a commitment. Staying vendor-neutral means each task — tagging, summarizing, search, chat — can run on whatever model currently does that job best, and can move the day something better ships.

## What this means for you

Nothing to configure and nothing to keep track of. There's no model picker in Marqly, no prompt engineering, no decision about which engine to point at your library. Features keep working the same way across model upgrades — the summaries and search just get better underneath you. If you're the kind of person who benchmarks models for fun, Marqly will be boring in exactly the right way.

## Judge the output, not the label

The model name was never the question that matters. The questions that matter are: does [auto-tagging](/faq/how-does-ai-auto-tagging-work) file your saves sensibly, does [semantic search](/faq/what-is-semantic-search) find the article you half-remember, and are the summaries [accurate enough to triage with](/faq/how-accurate-are-ai-summaries)? Those you can verify yourself in an afternoon — the free tier at [app.marqly.com](https://app.marqly.com) needs no card, so the honest benchmark is your own library.
