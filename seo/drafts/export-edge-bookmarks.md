---
title: "How to Export Edge Favorites to an HTML File in 2026 (Step by Step)"
seoTitle: "Export Edge Favorites to HTML in 2026 — Marqly"
description: "Export Edge favorites from the favorites manager menu to the same HTML Chrome uses. The exact click path, sync-vs-backup truth, and import limits inside."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export edge favorites"
tags:
  - "export edge favorites"
  - "microsoft edge bookmarks"
  - "edge favorites html"
  - "backup edge favorites"
  - "netscape bookmark file"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "Where is the export favorites option in Microsoft Edge?"
    a: "Open the favorites manager by typing edge://favorites in the address bar, or click the star-with-ribbon icon in the toolbar. At the top of that page, the three-dot (more options) menu contains Export favorites. Edge then asks where to save an HTML file containing every favorite and folder. Microsoft's own import documentation refers to 'the file you created when you exported favorites from another browser', confirming the feature by name."
  - q: "What is the difference between the favorites bar, Other favorites, and folders in Edge?"
    a: "The favorites bar is what shows in the bar under the toolbar; anything not placed there lives in the 'Other favorites' folder, and you can nest folders inside either. The HTML export captures all of them — bar items, Other favorites, and every nested folder — so nothing is left behind based on where it sits."
  - q: "Does exporting Edge favorites back them up if I have sync turned on?"
    a: "No — sync is not a backup. Microsoft account sync keeps the same favorites live across your signed-in devices; as of Oct 5, 2026, per https://support.microsoft.com/en-us/edge/sync-favorites-and-reading-list-in-microsoft-edge, favorites sync is a convenience feature, not a file you can restore from or hand to another program. Export the HTML if you want a copy that survives a reset, a profile deletion, or leaving Edge."
  - q: "Can I import the Edge HTML file into another tool?"
    a: "Yes. Edge exports the Netscape bookmark HTML format, identical to Chrome's, and Edge itself calls that same format 'Favorites or bookmarks HTML file' when importing. [Marqly](https://app.marqly.com) accepts browser bookmark HTML directly — the file imports as-is, up to 10 MB on the free plan and 30 MB on Pro, 10,000 bookmarks per file."
  - q: "Does Edge export include tabs from my Edge tabs or workspaces?"
    a: "No. The export covers favorites only. Open tabs, tab groups, and workspaces are separate surfaces with no HTML export, so if something matters long-term, save it as a favorite first, then export."
---

Type `edge://favorites`, open the three-dot menu at the top, and pick **Export favorites** — Edge writes one HTML file holding every favorite and folder you have. Edge calls bookmarks "favorites," but the file is the same Netscape HTML Chrome produces, which means anything that reads one reads the other, [Marqly](https://app.marqly.com) included. The gotchas are Edge-specific naming, where favorites actually live, and the myth that sync equals backup. Here is the full path, what the file holds, and how to put it to use.

## Your export routes from Edge

| Route | What you get | File format | Limits and costs | Gotcha |
|---|---|---|---|---|
| edge://favorites → ⋮ → **Export favorites** | All favorites: favorites bar, Other favorites, every folder, mobile favorites synced from your phone | Netscape bookmark HTML (one file, typically `bookmarks_YYYY-MM-DD.html`… style naming) | Free, instant, built in | Exports the current profile only — other Edge profiles keep their own favorites |
| Microsoft account favorites **sync** | Live copies across your signed-in devices | No file | Free | Not an export or backup; cannot be imported anywhere else |
| **Import from another browser** (edge://settings/profiles/import) | The reverse direction: brings others' bookmarks into Edge | Reads HTML, does not write it | Free | If you are "switching," remember Edge is also the destination for other browsers' exports |
| Copying links by hand | A few URLs | Paste text | Slow | Only sensible for a handful of daily-driver links |

<!-- VERIFY: the exact menu label and position in current Edge (three-dot "more options" at the top of edge://favorites → "Export favorites"). Microsoft removed or renamed its dedicated export help article — the old support.microsoft.com URL for it 404s as of Oct 5, 2026 — so confirm against a live Edge build before publishing. -->

## Step by step: exporting favorites from Edge

1. **Open the favorites manager.** Type `edge://favorites` in the address bar and hit Enter. The toolbar's star-with-a-ribbon icon opens the same page; clicking the plain star only bookmarks the current tab.
2. **Check you are in the right profile.** Edge keeps favorites per profile. If you juggle a work and a personal profile, the export only covers the one you are signed into right now — switch profiles and export again if you need both.
3. **Open the menu and export.** Click the three-dot (more options) menu at the top of the favorites page and choose **Export favorites**. A save dialog appears.
4. **Save the HTML file.** Keep the suggested name — it is already dated — and put it somewhere durable rather than Downloads. This file is the record of what your favorites were on this date.
5. **Verify by opening it.** Double-click the file: a plain page lists every favorite grouped under folder headings. Microsoft's current favorites documentation — as of Oct 5, 2026, per [https://support.microsoft.com/en-us/edge/organize-favorites-in-microsoft-edge](https://support.microsoft.com/en-us/edge/organize-favorites-in-microsoft-edge) — covers how those folders are arranged, and the export mirrors that tree exactly.
6. **Optional sanity check.** Drop the file into the free [Bookmark File Viewer](/tools/bookmark-file-viewer) to count links and inspect folders before importing anywhere.

To confirm the terminology: Microsoft's own import guide — as of Oct 5, 2026, per [https://support.microsoft.com/en-us/edge/import-your-favorites-and-passwords-in-microsoft-edge](https://support.microsoft.com/en-us/edge/import-your-favorites-and-passwords-in-microsoft-edge) — has you select "Favorites or bookmarks HTML file" and points at "the file you created when you exported favorites from another browser." Same format in both directions.

## What the file actually contains

The export is a **Netscape bookmark HTML file** — the same structure Chrome, Brave, Firefox, and Safari emit:

- A `<!DOCTYPE NETSCAPE-Bookmark-file-1>` header.
- Nested `<DL>` lists: each of your folders becomes an `<H3>` heading followed by a `<DL>` of its contents. Your favorites-bar entries and everything under "Other favorites" appear in their respective top-level sections.
- One `<DT><A HREF="…">Title</A>` per favorite, carrying the URL, the stored title, an `ADD_DATE` (Unix epoch — when you saved it), usually a `LAST_MODIFIED`, and an `ICON` with the favicon as encoded data.
- **No tags.** Edge has no bookmark-tags feature, so the `TAGS` attribute stays empty — unlike [Firefox, which does export tags](/blog/export-firefox-bookmarks) into the same file.
- **No page content.** Titles and links only — not the articles behind them.

The `ADD_DATE` fields survive in the file permanently, which is exactly why the export doubles as your history record. Whether they survive *into the next tool* is the bridge topic below — and the honest answer for Marqly is no: imports take the import date.

## What to do with the export: the Marqly bridge

That HTML file is precisely Marqly's bread and butter: the importer accepts browser bookmark HTML from Chrome, Edge, Firefox, and Safari directly — no conversion, no CSV detour. The verified limits: 10 MB per file on the free plan, 30 MB on Pro, 10,000 bookmarks per file, `.html`/`.htm`/`.csv` accepted.

The straight path:

1. Create a free account at [app.marqly.com](https://app.marqly.com) — the free plan covers everyday saving.
2. Open the import screen and upload the file you exported in the steps above.
3. Let Marqly read each page after import — that is where summaries and tags come from, since the file itself only carries links and titles.

State the limits honestly: **original save dates do not carry over** (imported items take the import date — keep the HTML if the dates matter); **auto-tagging imported items is a Pro feature** (free-plan imports keep only tags present in the file, and Edge files have none); **there is no dedupe at import** — if the same URL sits in two Edge folders, both come across, and re-importing the same file twice duplicates everything. The [Duplicate Bookmark Finder](/tools/duplicate-bookmark-finder) exists for exactly this after the fact.

If Edge is one browser among several, skip the piecemeal approach and read [how to back up all your browser bookmarks into one file](/blog/backup-all-browser-bookmarks) — it covers merging Edge exports with Chrome, Firefox, and Safari sets. And if favorites were standing in for a read-later pile, the [read-it-later setup](/read-it-later) is the follow-on article.

## When NOT to use Marqly for this

- **You are moving Edge → Chrome (or vice versa).** Import the HTML straight into the other browser's favorites manager. A middle service adds nothing to a simple transfer.
- **You live and die by Edge workspaces, collections, or PDF tools.** Those are product features tied to Edge; no bookmarks export touches them, and no bookmark manager replaces them.
- **Your favorites are under ~50 and mostly daily links.** A favorites bar is a perfectly good bar. The payoff from a searchable library starts when the pile outgrows the bar and folders stop working — the failure mode [how to organize bookmarks](/blog/how-to-organize-bookmarks) breaks down.
- **You only need insurance against losing the set.** A monthly HTML export into a folder is a complete backup by itself. Marqly is about making the links findable, not just safe.

## FAQs

**Where is the export favorites option in Microsoft Edge?**
On the `edge://favorites` page — open the three-dot menu at the top and choose Export favorites. Edge saves one HTML file with all favorites and folders. The label wording has shifted across Edge versions, so if you see "Export bookmarks" instead, you are in the right place; the output is the same file.

**What is the difference between the favorites bar and Other favorites?**
The favorites bar is what displays under your toolbar; Other favorites is the catch-all folder for anything else. The export includes both plus every nested folder — placement never affects what comes out.

**Does sync make an export unnecessary?**
No. Sync mirrors your favorites across signed-in devices; it produces no file, survives no profile wipe on its own, and imports into nothing else. Treat sync as convenience and the HTML as the actual backup — see the [pillar backup guide](/blog/backup-all-browser-bookmarks) for a routine that covers every browser at once.

**Can I import the Edge HTML file into another tool?**
Yes — it is the universal Netscape format. Marqly imports browser bookmark HTML as-is (10 MB free / 30 MB Pro, 10,000 bookmarks per file). If you are evaluating managers rather than defaulting to ours, the [Raindrop alternative breakdown](/alternatives/raindrop) is honest about who wins where.

**Will Edge delete my favorites after exporting?**
No. Export is a read-only snapshot: your favorites, folders, and sync all continue untouched. That also means you can keep saving in Edge while trying an import into a new tool — nothing about the export commits you.

## Recap

1. `edge://favorites` → three-dot menu → **Export favorites** → keep the dated `.html`.
2. Check the profile you exported from; export other profiles separately.
3. The file holds links, titles, folder structure, and original `ADD_DATE`s — no tags, no page text, no tabs or workspaces.
4. Archive the file, then import it wherever links should be searchable: [Marqly](https://app.marqly.com) takes this exact format.
