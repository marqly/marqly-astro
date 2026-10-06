---
title: "How to Export Raindrop.io Bookmarks (HTML, CSV or TXT) in 2026"
seoTitle: "Export Raindrop.io Bookmarks (HTML/CSV) — Marqly"
description: "The full backup lives under Settings → Backups, not the toolbar. Here's each export route, what HTML vs CSV actually carry, and how to keep notes, tags and highlights on the way out."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export raindrop bookmarks"
tags:
  - "export raindrop"
  - "raindrop backup"
  - "raindrop html export"
  - "raindrop csv export"
  - "migrate from raindrop"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "Where is the export option in Raindrop?"
    a: "For the whole account: Settings → Backups → Create new — Raindrop emails you a download link when the archive is ready. For part of it: open a collection and use the Export button in the toolbar, or tick individual items and export the selection. Both routes offer HTML, CSV and TXT."
  - q: "Which export format should I choose?"
    a: "HTML, unless you want to analyze the data. Raindrop's own docs recommend it: HTML is the Netscape bookmark format, so every browser and virtually every bookmark manager can import it back. CSV is better when you want the data in a spreadsheet — URL, name, tags, created-at and so on as columns. TXT is a bare list of links, useful as a reading queue, not as a backup."
  - q: "What does the HTML export actually carry?"
    a: "The folder tree, URLs, titles, tags, notes and descriptions. Highlights and other Raindrop-native objects are not part of that file — they exist inside the whole-account backup, but a plain HTML import into another tool carries the bookmark fields, not the annotation layer."
  - q: "Is the automatic daily backup free?"
    a: "No — scheduled daily backups with up to 30 restore points and cloud destinations (Dropbox, Google Drive, OneDrive) are a Pro feature. Free accounts can still create a manual backup from Settings → Backups whenever they want; there's no scheduled safety net without Pro."
  - q: "Can I export from the mobile app?"
    a: "Collection export exists in the iOS app (select items → Actions → Share). Android collection export is not available — open app.raindrop.io in the mobile browser instead, where Settings → Backups works the same as on desktop."
  - q: "Why does my exported collection lose the nested folders when I import it elsewhere?"
    a: "Because the destination flattens what it can't express: Raindrop supports deep nesting, and a tool that models one level of collection will re-root the rest. Marqly, for instance, maps the first two folder levels to boards and keeps deeper paths in the bookmark title, so names like Work/Clients/Acme become Work and Clients with the suffix in the title. Expect the tree to simplify, not to vanish."
---

Raindrop gives you more than a bookmarks file — collections, tags, notes, highlights — which also means its export has more than one route and more than one choice to get wrong. The paths below are current as of October 2026, per Raindrop's own help docs.

## The two export routes (they're not the same thing)

**Whole-account backup — the one people mean.** Open **Settings → Backups** in the web app and click **Create new**. Raindrop builds the archive in the background and emails a download link when it's ready. This is the route that covers everything — bookmarks, collections, tags, highlights, notes — and it is the route to run before any migration, cancellation or "just in case." The one exclusion worth knowing: files you uploaded (PDFs, images) are stored apart from the bookmark data; Raindrop's docs send you to **All bookmarks → Export → ZIP** to pull those originals separately.

**Selective export.** Inside a single collection, the **Export** button writes just that collection. Selecting individual items (checkboxes on web, or per-item tick) narrows it further. Same formats, smaller scope — the route for "I only need the Work folder" without dragging the whole account.

Both routes offer **HTML, CSV and TXT**. Pick accordingly:

- **HTML** — the Netscape bookmark file. Universal: every browser imports it, and so do most bookmark managers, including [Marqly](https://app.marqly.com). Raindrop's own documentation says it plainly: choose HTML unless you have a reason not to.
- **CSV** — structured rows. Better when you want to *look* at your data: sort by created-at, filter tags, count per collection. Raindrop's CSV keeps URL, name, excerpt, tags and creation dates as columns.
- **TXT** — a bare list of links. Fine as a reading queue; poor as a backup.

## What survives the round trip

HTML is the conservative choice for a reason, but know exactly what it carries and what it can't:

| What you saved | In the HTML export | Notes |
|---|---|---|
| URL, title, folder tree | ✅ | Nesting is preserved; the destination may flatten it |
| Tags | ✅ | Comma-separated on the bookmark line |
| Description / note per bookmark | ✅ | Lands in the destination's notes/description field |
| Highlights | ⚠️ partial | In the whole-account backup, not as first-class fields in the HTML |
| Files (uploaded PDFs/images) | ❌ in HTML | Separate **Export → ZIP** from All bookmarks |
| Nested folders beyond the destination's depth | ⚠️ | The importing tool's model decides how deep the tree survives |

The flatten behavior is the usual surprise. Raindrop's tree can go arbitrarily deep; a tool whose data model is "collections of bookmarks" maps the first level and folds the rest — Marqly, for example, keeps the first two levels as boards and deeper paths appear in the title, so a save in `Work/Clients/Acme` imports under board `Work` as item `Clients/Acme …`. The link and tags are intact; the *shape* simplifies. If your Raindrop tree is shallow, you'll never notice.

## The safety-net question

If you're on **Raindrop Pro**, Settings → Backups also does scheduled daily snapshots — up to 30 restore points, with optional delivery to Dropbox, Google Drive or OneDrive — so "I deleted a collection last Tuesday" is a restore, not an archaeology project. Free accounts have no scheduler; the manual backup is the only path, which makes "export before anything risky" a rule, not a suggestion.

And if the real reason you're exporting is that you'd rather find things by meaning than by folder — semantic search and AI tagging on import are exactly the [Marqly migration](/migrate/raindrop) covers; the [Raindrop Export Analyzer](/tools/raindrop-export-analyzer) previews what your file actually holds before any of it moves. Honest limits, per our own measurements: import your Raindrop **HTML** (its JSON export isn't the format our importer reads) and note that imports take the import date, not the original `created_at`.

## The short version

Settings → Backups for everything; collection Export for part of it; HTML unless you want a spreadsheet. Uploaded files need the separate ZIP. Pro schedules the safety net — on free, you are the scheduler.
