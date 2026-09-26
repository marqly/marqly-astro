---
question: "How do I import my Pocket saves into Marqly?"
description: "Pocket shut down in July 2025, but your export ZIP still works: Marqly imports list.csv — titles, URLs and tags carry over. (ril_export.html is a different layout and does not import.) On Pro, AI re-tags the backlog."
category: getting-started
updatedDate: 2026-09-26
related:
  - is-marqly-a-pocket-replacement
  - how-do-i-import-from-instapaper
  - how-do-i-import-from-raindrop
---

Marqly imports Pocket's CSV export. If you downloaded the export before Pocket shut down in July 2025, unzip it and import `list.csv` — your saved articles come across with their titles, links, and the tags you already had, so the backlog is immediately searchable. Years of Pocket saves don't have to end up as a dead file on your hard drive.

## If you have your Pocket export

1. Locate the ZIP you downloaded from Pocket before the shutdown and unzip it: you want `list.csv`.
2. Sign in at [app.marqly.com](https://app.marqly.com) — free, no credit card required.
3. Import `list.csv`.

**About the HTML file:** `ril_export.html` looks like a bookmark export but is a plain `<ul>` list, a layout the importer does not read — a real 261-item export parses to zero saves and the import says so. The [Pocket export converter](/tools/pocket-export-converter) turns the CSV into a standard bookmarks HTML if you want to feed a browser instead.

Once the import finishes, your Pocket tags come with you — they become Marqly tags, and no manual re-filing is needed for what you already organized. Two expectations to set honestly: **original save dates and read status don't carry over** (the CSV's `time_added` and `status` columns are dropped); imported items are dated the day you import. If **Pro** is your plan, AI tagging then runs over everything and semantic search works across the whole library, so "that longread about the history of containers" finds the article even if you never tagged it in Pocket; on Free, keyword search covers your whole imported library either way.

For a detailed walkthrough of the export format and the migration, see [how to export and migrate your Pocket data](/blog/how-to-export-migrate-pocket-data).

## If you never exported

Pocket's shutdown means the service itself is no longer available, and Marqly can only import from an export file — there's no way to pull saves from a service that's gone. If you're not sure whether you exported, it's worth searching your downloads and email for a Pocket export before assuming it's lost.

## Marqly as the post-Pocket home

If you're weighing where to land after Pocket, the honest comparison is in [Pocket vs Marqly](/compare/marqly-vs-pocket), and the direct question gets a direct answer in [is Marqly a Pocket replacement](/faq/is-marqly-a-pocket-replacement). The short version: Marqly covers the save-it-now-read-it-later core, and adds what Pocket never had — AI auto-tagging on every save, AI summaries for triaging a backlog, and search by meaning instead of exact keywords, all on Pro.

Migrating from Instapaper or Raindrop instead? See [how do I import from Instapaper](/faq/how-do-i-import-from-instapaper) and [how do I import from Raindrop](/faq/how-do-i-import-from-raindrop).
