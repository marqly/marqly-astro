---
title: "AI Bookmark Retrieval Benchmark 2026: The Test Protocol (and What Each Tool Documents)"
seoTitle: "AI Bookmark Retrieval Benchmark 2026 — Run the Test on Your Own Library"
description: "A reproducible 20-query protocol for testing AI bookmark search on your own library, plus what Marqly, mymind, Readwise Reader, Karakeep, and Raindrop officially document about retrieval. No fabricated scores: the full lab run publishes when complete."
pubDate: 2026-09-12
updatedDate: 2026-09-23
category: "Research"
targetKeyword: "ai bookmark retrieval benchmark"
tags:
  - "ai bookmark manager"
  - "semantic bookmark search"
  - "marqly vs mymind"
  - "readwise reader ai"
  - "benchmark"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
heroImage: ../../assets/blog/ai-bookmark-managers-semantic-search-compared.png
heroAlt: "AI Bookmark Retrieval Benchmark 2026 — test protocol diagram"
ogImage: "https://www.marqly.com/og/ai-bookmark-retrieval-benchmark-2026.png"
faqs:
  - q: "What is an AI bookmark retrieval benchmark?"
    a: "An empirical test measuring how effectively bookmark managers retrieve saved content when you search by natural-language concept or partial memory rather than exact title keywords. A fair benchmark needs a real library, defined query types, and recorded results — the protocol on this page supplies all three."
  - q: "Why doesn't this page publish accuracy scores for each tool?"
    a: "Because we have not yet completed the full controlled run, and we will not publish numbers we haven't measured. This page carries the test protocol and each tool's officially documented retrieval capabilities. When the complete run finishes, results get their own dated section or article."
  - q: "What is zero-filing organization?"
    a: "Zero-filing is an organization workflow where the user performs no manual folder sorting or tag creation upon saving. Instead, AI auto-tags, generates summaries, and creates semantic embeddings automatically. Marqly, mymind, and Karakeep document zero-filing; Readwise Reader and Raindrop expect some manual triage."
  - q: "How do I test whether a bookmark search is actually semantic?"
    a: "Search for a concept using words that do not appear in the item's title. If you remember an article about 'cortisol and sleep architecture' but the title was 'Why You Wake Up at 3 AM', a keyword engine returns nothing — a semantic engine returns the save. The 20-query protocol below formalizes this."
---

Most bookmark managers are great at saving things and terrible at finding them later.

When you save 10 articles a week, within a year you have 500 links. Within three years, you have thousands. Unless you spend hours every Sunday maintaining nested folders and tags, your library turns into an unsearchable digital attic.

The promise of the new wave of **AI bookmark managers** is simple: **save instantly, do zero manual filing, and find anything later by describing what you remember in natural language.**

This page exists to let you verify that promise.

> **A note on honesty.** An earlier draft of this article presented a "1,000-save benchmark" with precise per-tool accuracy scores. That run was never executed, so on September 23, 2026 we removed every number from it. We will not publish scores we did not measure. What follows is (1) the exact protocol we are running, (2) how each tool claims retrieval works per its official documentation, clearly labeled claims-as-claims, and (3) the same test run you can do on your own library in 30 minutes — which is the only benchmark that predicts your experience anyway.

---

## Why off-the-shelf benchmark numbers shouldn't be trusted

Retrieval quality is personal. A tool that aces queries about *design screenshots* can fail completely on *academic PDFs*; a library of 500 items behaves differently from 50,000. Aggregate scores from a stranger's 1,000-item fixture mostly measure how well that fixture matched that stranger's recall style.

Three problems with most published tool comparisons:

1. **Fixtures hide themselves.** Without the query set and item set, results can't be reproduced or checked.
2. **Features move.** AI search in bookmark tools shipped and changed several times in 2025–2026; a score is stale the week it posts (our own [AI bookmark managers compared](/blog/ai-bookmark-managers-semantic-search-compared) analysis is documentation-based for the same reason — it says so on the page).
3. **The job differs.** Readwise Reader optimizes triage of material you're *currently* reading; Marqly optimizes *finding something years later*. A single "retrieval score" flattens that.

The alternative is a protocol you can run yourself in the time it takes to drink a coffee — and one we are running in full, in the open.

---

## The protocol (what we're running, and you can too)

### Step 1 — The library

Import a fixed, real test set of **300 items**:

- 150 long-form web articles & essays (tech, economics, health, science, design)
- 60 YouTube videos (tutorials, talks, interviews)
- 40 documentation pages & GitHub repos
- 30 PDFs/academic pages
- 20 image/visual saves

Use the same import file for every tool where the tool accepts bulk import. Where it doesn't (mymind is the documented outlier — no bulk browser-bookmark import), record that itself as a migration finding, don't paper over it.

### Step 2 — The zero-filing phase

Save everything **without assigning a single folder or tag**. A tool that requires manual filing to stay retrievable is answering a different product promise — that's a result, not a setup detail.

### Step 3 — The 20 retrieval queries

Each query targets one specific saved item using only information a human plausibly remembers:

| Type | Example shape | What it tests |
| :--- | :--- | :--- |
| Concept paraphrase | "how dopamine works in habit loops" (title: *The Molecule of More*) | embeddings over body text |
| Indirect reference | "the video with sourdough bulk fermentation in a glass bowl" | transcript/video indexing |
| Technical fragment | "postgres query for slow connections by database" | code/body text coverage |
| Vague visual memory | "orange and black brutalist poster" | image understanding |
| Exact-title control | the literal title | baseline sanity check |

Score each answer: **Top-1**, **Top-3**, or **miss**. Run queries at 24h+ after import so indexing has completed — testing immediately after import mainly measures queues, not engines.

### Step 4 — The friction record

For each tool, log actions-per-save, time-to-first-result, and what happened on failure paths (empty results, mislabeled items).

### Results publication

The complete run — fixture file, query list, per-tool recordings and screenshots, all 20×5 rows scored — lands on this page dated, with anything we couldn't verify left unpublished. **Target: complete by mid-October 2026.** Until then, treat every percentage on the internet for these tools, including old drafts on this very page, as decoration.

---

## What each tool officially documents about retrieval (verified 2026-09-23)

This matrix is our *documentation reading*, not testing. Each row reflects what the vendor publicly describes, from our date-verified competitor dataset (see the individual [compare](/compare) pages for each tool's verification date). Where we don't know, it says so.

| Capability | Marqly | mymind | Readwise Reader | Karakeep | Raindrop.io |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Search across saved body text | ✅ documented | per docs, search is tag/visual-led | ✅ in-document search; global search documented as keyword-based | ✅ full-text via Meilisearch | ✅ full-text search is a Pro feature |
| Semantic / meaning-based search | ✅ documented (Pro plan) | ✅ documented | ❌ not as library search — Ghostreader answers per-document | ✅ optional, when you connect an LLM | ❌ not offered |
| YouTube transcript indexing | ✅ documented (transcript attached on save) | ❌ not offered | ✅ documents saving video content | ✅ downloads media with yt-dlp (self-hosted config) | ❌ not offered |
| Zero-filing on save | ✅ | ✅ core philosophy — saves land unfiled | ⚠️ triage queues by design | ✅ when LLM tagging is on | ⚠️ folders expected |
| Bulk import of bookmark HTML | ✅ documented (Pocket/Raindrop/browser formats) | ❌ browser/bookmark exports not supported | ✅ Pocket export, not browser HTML | ✅ browser HTML + API | ✅ browser HTML |
| Search cost | Free plan: whole-library search; semantic/AI on Pro ($72/yr, standing first-year offer $49) | Free guest plan (100 cards); $72–$129/yr with AI tiers | $119.88/yr (Full plan; 30-day trial, no free tier) | Free self-hosted (+ your model/hardware); Cloud Pro $4/mo | Free unlimited saves; Pro $28/yr adds full-text search + AI save suggestions |

Honest notes from the reading: **mymind's visual-first architecture is genuinely distinctive** — if your library is screenshots and design reference, its documented approach fits you better than text-embedding tools. **Reader is the strongest at the job it chose** (active reading + triage, with offline that the others mostly lack). **Karakeep gives real AI search free to anyone who runs a server.** **Raindrop remains the best cheap all-rounder if keyword search is enough for you.** Marqly's documented bet is the retrieval case the others treat as secondary: years-old saves, found by describing them — which is exactly what the lab run will test, pass or fail.

---

## Run the 30-minute version on your own library today

You don't need 300 items. You need the five you *lost*.

1. Pick 5 things you saved months ago in your current tool and could not find this week.
2. For each, write down what you'd type if you could describe the memory, not the title ("the piece about waking at 3 AM and blood sugar").
3. Import a test batch of 50–100 of your actual browser bookmarks into a free Marqly account — start with [Bookmark File Viewer](/tools/bookmark-file-viewer), which previews a browser's HTML export (Chrome, Firefox, Edge, Safari, and Diigo-style exports) before you move anything.
4. Turn on the AI layer, run your five memory-queries, and try the same five in your current tool.
5. Keep whichever one finds your lost five — and if neither does, the honest review is that nobody solves this perfectly yet, ourselves included.

If two tools tie under your own queries, that's a coin-flip decided by everything else — pick via the [2026 Bookmark Manager Index](/best-bookmark-manager) or the [Migration Center](/migrate) once you've chosen. We'll publish ours under these rules, and you'll be able to check every row.
