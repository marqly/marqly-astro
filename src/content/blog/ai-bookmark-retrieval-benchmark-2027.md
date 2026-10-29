---
title: "AI Bookmark Retrieval Benchmark 2027: The Test Protocol (and What Each Tool Documents)"
seoTitle: "AI Bookmark Retrieval Benchmark 2027: Test Protocol"
description: "A reproducible 20-query protocol for testing AI bookmark search on your own library, plus what Marqly, mymind, Readwise Reader, Karakeep and Raindrop document."
pubDate: 2026-09-12
updatedDate: 2026-10-29
category: "Research"
targetKeyword: "ai bookmark retrieval benchmark"
tags:
  - "ai bookmark manager"
  - "semantic bookmark search"
  - "bookmark retrieval test"
  - "readwise reader ai"
  - "benchmark protocol"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
heroImage: ../../assets/blog/ai-bookmark-managers-semantic-search-compared.png
heroAlt: "AI Bookmark Retrieval Benchmark 2027 — test protocol diagram"
ogImage: "https://www.marqly.com/og/ai-bookmark-retrieval-benchmark-2027.png"
faqs:
  - q: "What is an AI bookmark retrieval benchmark?"
    a: "An empirical test measuring how effectively bookmark managers retrieve saved content when you search by natural-language concept or partial memory rather than exact title keywords. A fair benchmark needs a real library, defined query types, and recorded results. The protocol on this page supplies all three, and you can run a useful version of it on your own library in about thirty minutes."
  - q: "Why doesn't this page publish accuracy scores for each tool?"
    a: "Because we have not completed the controlled run, and we will not publish numbers we have not measured. This page carries the test protocol and each tool's officially documented retrieval capabilities, clearly labelled as a documentation reading rather than a test result. An earlier version of this article did present fabricated per-tool percentages; they were retracted on 2026-09-23 and the page was rewritten as the protocol you are reading now."
  - q: "Did the benchmark get finished?"
    a: "No. We set a target of mid-October 2026 for the full controlled run and missed it. Rather than leave a stale promise on the page or quietly publish partial numbers, we are stating it plainly: the fixture, the recordings and the scored rows do not exist yet, so no results are published. The protocol below is complete and usable today, and the one measured study we have actually run — on import fidelity, not retrieval — is published separately with its data and method."
  - q: "What is zero-filing organization?"
    a: "Zero-filing is an organization workflow where the user performs no manual folder sorting or tag creation upon saving. Instead, AI auto-tags, generates summaries, and creates semantic embeddings automatically. Marqly, mymind and Karakeep document zero-filing; Readwise Reader and Raindrop.io expect some manual triage. In Marqly, auto-tagging is a Pro feature, so zero-filing is not available on its free plan."
  - q: "How do I test whether a bookmark search is actually semantic?"
    a: "Search for a concept using words that do not appear in the item's title. If you remember an article about 'cortisol and sleep architecture' but the title was 'Why You Wake Up at 3 AM', a keyword engine returns nothing and a semantic engine returns the save. Run it at least 24 hours after importing, because testing immediately mostly measures indexing queues rather than the search engine. The 20-query protocol below formalizes this."
---

**This page contains no benchmark scores, and that is deliberate.** It carries a reproducible test protocol you can run on your own library today, and a capability matrix built from what each vendor officially documents — labelled as documentation, not measurement.

An earlier version of this article, published 2026-09-12, presented a 1,000-item lab run with per-tool percentages. Those numbers were generated rather than measured. No fixture, query set, recording or scoring evidence existed for them, and they were retracted on 2026-09-23 along with corrections to the eight pages that had cited them. What follows is the replacement: the protocol we would have to run to earn a score, published so anyone can run it themselves or hold us to it.

**A status note, because the last version of this page owed one.** We targeted completing the full controlled run by mid-October 2026 and missed that date. The fixture, the per-tool recordings and the 100 scored rows do not exist, so there are no results to publish. We would rather say that plainly than leave a stale target on the page or dress up partial data. The one study we have genuinely run and measured is about import fidelity rather than retrieval, and it is published with its corpus and method at [Bookmark Import Failures](/research/bookmark-import-fidelity).

## Why off-the-shelf benchmark numbers shouldn't be trusted

Retrieval quality is personal. A tool that aces queries about *design screenshots* can fail completely on *academic PDFs*; a library of 500 items behaves differently from 50,000. Aggregate scores from a stranger's 1,000-item fixture mostly measure how well that fixture matched that stranger's recall style — which is precisely why the fabricated numbers this page used to carry were so easy to swallow and so worthless.

Three problems with most published tool comparisons:

1. **Fixtures hide themselves.** Without the query set and the item set, results cannot be reproduced or checked. A score with no fixture is an opinion with a decimal point.
2. **Features move.** AI search in bookmark tools shipped and changed repeatedly through 2025 and 2026, and pricing moved with it — Glasp raised prices about 20–25% in May 2026 alone. A score is stale the week it posts, which is why our [AI bookmark managers compared](/blog/ai-bookmark-managers-semantic-search-compared) analysis is documentation-based and says so on the page.
3. **The job differs.** Readwise Reader optimises triage of material you are *currently* reading; Marqly optimises *finding something years later*. A single "retrieval score" flattens a real difference into noise.

The alternative is a protocol you can run yourself in the time it takes to drink a coffee — and one we are still obliged to run in full, in the open, before publishing any number.

## The protocol (what we're running, and you can too)

### Step 1 — The library

Import a fixed, real test set of **300 items**:

- 150 long-form web articles and essays (tech, economics, health, science, design)
- 60 YouTube videos (tutorials, talks, interviews)
- 40 documentation pages and GitHub repos
- 30 PDFs and academic pages
- 20 image/visual saves

Use the same import file for every tool that accepts bulk import. Where a tool does not, record that itself as a migration finding rather than papering over it — mymind is the documented outlier here, since it has no bulk import by design and cannot ingest a browser or Pocket export at all.

### Step 2 — The zero-filing phase

Save everything **without assigning a single folder or tag**. A tool that requires manual filing to stay retrievable is answering a different product promise, and that is a result rather than a setup detail. Note that this phase is plan-gated in some tools: Marqly's auto-tagging is Pro, so a free account is not zero-filing by choice but by tier. Record which.

### Step 3 — The 20 retrieval queries

Each query targets one specific saved item using only information a human plausibly remembers:

| Type | Example shape | What it tests |
| :--- | :--- | :--- |
| Concept paraphrase | "how dopamine works in habit loops" (title: *The Molecule of More*) | embeddings over body text |
| Indirect reference | "the video with sourdough bulk fermentation in a glass bowl" | transcript/video indexing |
| Technical fragment | "postgres query for slow connections by database" | code/body text coverage |
| Vague visual memory | "orange and black brutalist poster" | image understanding |
| Exact-title control | the literal title | baseline sanity check |

Score each answer: **Top-1**, **Top-3**, or **miss**. Run queries at least 24 hours after import so indexing has completed — testing immediately after import mainly measures queues, not engines.

### Step 4 — The friction record

For each tool, log actions-per-save, time-to-first-result, and what happened on failure paths (empty results, mislabelled items, silent truncation of a long library).

### What publication would require

The complete run would land on this page dated, with the fixture file, the query list, per-tool recordings and screenshots, and all 20×5 rows scored — and with anything we could not verify left unpublished rather than estimated. Until that exists, treat every percentage on the internet for these tools, including the ones that used to be on this very page, as decoration.

## What each tool officially documents about retrieval (verified 2026-09-23, prices re-checked October 2026)

This matrix is our *documentation reading*, not testing. Each row reflects what the vendor publicly describes, from our date-verified competitor dataset (see the individual [compare](/compare) pages for each tool's verification date). Where we do not know, it says so.

| Capability | Marqly | mymind | Readwise Reader | Karakeep | Raindrop.io |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Search across saved body text | ✅ documented | per docs, search is tag/visual-led | ✅ in-document search; global search documented as keyword-based | ✅ full-text via Meilisearch | ✅ full-text search is a Pro feature |
| Semantic / meaning-based search | ✅ documented (Pro plan only) | ✅ documented (paid tiers) | ❌ not as library search — Ghostreader answers per-document | ✅ optional, when you connect an LLM | ❌ not offered |
| YouTube transcript indexing | ✅ documented (transcript attached on save) | ❌ not offered | ✅ documents saving video content | ✅ downloads media with yt-dlp (self-hosted config) | ❌ not offered |
| Zero-filing on save | ✅ on Pro only | ✅ core philosophy — saves land unfiled | ⚠️ triage queues by design | ✅ when LLM tagging is on | ⚠️ folders expected |
| Bulk import of browser bookmark HTML | ✅ documented | ❌ no bulk import by design | ✅ Pocket export; browser HTML not documented | ✅ browser HTML + API | ✅ browser HTML |
| Importing a Pocket archive | ⚠️ the `list.csv` inside the archive, not the HTML preview file | ❌ none | ✅ documented | ⚠️ via standard import | ✅ documented |
| Search cost | Free plan: keyword search across the whole library, up to 100 bookmarks; all AI on Pro ($72/yr, standing first-year offer $49) | Free guest plan (100 cards, free forever); AI tagging from $79/yr, summaries from $129/yr | $119.88/yr Full plan (30-day trial, no permanent free tier) | Free self-hosted (+ your model/hardware); Cloud Pro $4/mo | Free unlimited saves; Pro $28/yr adds full-text search + AI save suggestions |

Honest notes from the reading. **mymind's visual-first architecture is genuinely distinctive** — if your library is screenshots and design reference, its documented approach fits you better than text-embedding tools, and its refusal to support bulk import is a philosophical position rather than an oversight. **Reader is the strongest at the job it chose** (active reading and triage, with offline that the others mostly lack). **Karakeep gives real AI search free to anyone who will run a server**, which makes it the only genuinely private AI option here. **Raindrop.io remains the best cheap all-rounder if keyword search is enough for you.** And Marqly's documented bet is the retrieval case the others treat as secondary — years-old saves found by describing them — which is exactly what the lab run would test, pass or fail.

One correction worth flagging because it is easy to get wrong: the import rows above separate **browser bookmark HTML** from **a Pocket archive**. Marqly reads browser HTML and Raindrop HTML, but for Pocket it reads the `list.csv` inside the export archive, not the HTML preview file — we measured that HTML file at **0 of 261 items parsed**, because it is a `<ul><li>` layout rather than the Netscape bookmark format. The full measurement is in the [import-fidelity study](/research/bookmark-import-fidelity).

## Run the 30-minute version on your own library today

You do not need 300 items. You need the five you *lost*.

1. Pick five things you saved months ago in your current tool and could not find this week.
2. For each, write down what you would type if you could describe the memory rather than the title — "the piece about waking at 3 AM and blood sugar".
3. Import a test batch of 50–100 of your actual browser bookmarks into a free Marqly account. Start with the [Bookmark File Viewer](/tools/bookmark-file-viewer), which previews a browser's HTML export (Chrome, Firefox, Edge, Safari and Diigo-style exports) before you move anything, and the [Duplicate Bookmark Finder](/tools/duplicate-bookmark-finder) if the file is old.
4. Turn on the AI layer, run your five memory-queries, then try the same five in your current tool.
5. Keep whichever one finds your lost five — and if neither does, the honest review is that nobody solves this perfectly yet, ourselves included.

Two caveats so the test is fair. On Marqly the free plan has **no AI at all**, so step 4 requires Pro — testing semantic search on a free account will return nothing and tell you nothing. And a free account stores up to 100 bookmarks, which is enough for this test but not for a full library.

If two tools tie under your own queries, that is a coin-flip decided by everything else — pick via the [2027 Bookmark Manager Index](/best-bookmark-manager), the [AI bookmark manager guide](/blog/best-ai-bookmark-manager-2027), or the [Migration Center](/migrate) once you have chosen. We will publish our own run under these rules when it exists, and you will be able to check every row. Until then, this page has no scores, and that is the point.

---

*Capability matrix verified against vendor documentation on 2026-09-23; prices re-checked against our dated competitor dataset in October 2026. No retrieval scores are published because the controlled run has not been completed — the mid-October 2026 target was missed. The only measured study we publish is the [import-fidelity study](/research/bookmark-import-fidelity), whose corpus and method are on that page.*
