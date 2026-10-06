---
title: "How to Export Safari Bookmarks in 2026 (File → Export Bookmarks, Step by Step)"
seoTitle: "Export Safari Bookmarks in 2026 — Marqly"
description: "Safari exports bookmarks as one portable HTML file via File → Export Bookmarks — Mac only, and the Reading List is never included. Steps inside."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export safari bookmarks"
tags:
  - "export safari bookmarks"
  - "safari bookmarks html"
  - "safari reading list export"
  - "backup safari bookmarks"
  - "netscape bookmark file"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "Does exporting Safari bookmarks include my Reading List?"
    a: "No. The File menu's Export Bookmarks command writes your bookmark tree only. Safari's Reading List is tracked as a separate feature in Apple's documentation, so treat it as its own store of links. Apple does not provide any export command for Reading List items — to rescue them, open each item and copy its link out by hand."
  - q: "Can I export Safari bookmarks from my iPhone or iPad?"
    a: "There is no documented file export in Safari on iOS — Apple's Safari guides describe adding, finding, and editing bookmarks, not exporting them to a file. Because bookmarks sync through iCloud when turned on, the standard workaround is to open Safari on a Mac signed in to the same Apple Account, let the bookmarks sync, and export from there."
  - q: "What format is the Safari bookmark export?"
    a: "A single HTML file in the Netscape bookmark format — the same structure every browser and bookmark manager can read. Links live in <DT><A> entries, folders nest via <DL>, and each link carries an ADD_DATE timestamp. [Marqly imports this exact format](https://app.marqly.com), so no conversion step is needed."
  - q: "Where do my Safari folders go when I import the HTML file into another tool?"
    a: "Most managers, including Marqly, read the folder structure from the file and map your folders to tags or collections so the grouping carries across. What you lose either way is date information inside the new tool — an importer re-stamps items with the import date, not the day you originally saved the link in Safari."
  - q: "Is iCloud sync enough instead of exporting?"
    a: "Sync and export solve different problems. iCloud keeps the same live bookmark set on your Apple devices, but it is not a backup you can hand to another program: it only reaches devices with Safari sync turned on, and it is not a file you can import anywhere else. Make the HTML export before you switch browsers or change ecosystems."
---

Open Safari on a Mac, choose **File → Export Bookmarks…**, and save the HTML file Apple writes. That is the only official Safari bookmark export — there is no equivalent command on iPhone or iPad, and it never includes your Reading List. The good news: the file uses the Netscape bookmark format, which is exactly the format [Marqly imports](https://app.marqly.com), plus every other bookmark tool and browser. Here are the exact steps, what ends up inside the file, and the Apple-specific caveats to know before you rely on the export.

## Your export routes from Safari

| Route | What you get | File format | Limits and costs | Gotcha |
|---|---|---|---|---|
| File → Export Bookmarks… (Safari on Mac) | Every bookmark plus your folder tree | Netscape-format HTML, one file, named something like `bookmarks.html` | Free, instant, built in | Mac only — no equivalent on iPhone or iPad |
| iCloud sync (Safari toggle in iCloud Settings) | The same live bookmarks across your Apple devices — Apple lists Safari among the data iCloud keeps in sync as of Oct 5, 2026, per [https://support.apple.com/guide/icloud/what-you-can-do-with-icloud-and-safari-mm9b8da4f328/icloud](https://support.apple.com/guide/icloud/what-you-can-do-with-icloud-and-safari-mm9b8da4f328/icloud) | No file at all | Free with iCloud storage | Not a backup or portable export — other tools cannot import it |
| Manual copy from the sidebar | Individual links, one at a time | Plain URLs in whatever you paste them into | Slow | The fallback when you are stuck on iOS with no Mac nearby |
| Reading List | Nothing official | No export command exists | — | Reading List items are saved separately from bookmarks and are not in the HTML file |

## Step by step: exporting from Safari on Mac

1. **Open the Safari app on your Mac.** The export command lives in the menu bar, so any Mac signed into your Apple Account works — bookmarks sync through iCloud, so the Mac shows the same set your iPhone shows, provided Safari sync is on.
2. **Choose File → Export Bookmarks…** from the menu bar at the top of the screen. If you do not see a File menu, Safari is not the frontmost app — click inside the Safari window first.
3. **Name the file and pick a location.** Safari writes a single HTML file. Keep the default name rather than changing the extension — the `.html` is what tells other programs how to read it.
4. **Open the file to confirm it worked.** Double-click it or open it in a browser: you should see a plain page listing your bookmarks as links, grouped under a heading per folder. Apple's current Safari guide covers managing this same bookmark tree; as of Oct 5, 2026, per [https://support.apple.com/en-us/guide/safari/ibrw1039/mac](https://support.apple.com/en-us/guide/safari/ibrw1039/mac), folders are how Safari organizes bookmarks — the export mirrors that structure.
5. **Store the file somewhere durable.** A dated copy in your cloud drive or a [bookmark manager you trust](/bookmark-manager-for-chrome) beats a file named `bookmarks.html` at the bottom of Downloads. If you keep several exports over time, include the date in the filename so you always know which snapshot is newest.
6. **Use it.** Import the HTML into a new browser's bookmark manager, or upload it to a bookmark tool for search and archiving — see the import section below.

<!-- VERIFY: Apple removed the dedicated "Import and export bookmarks" page (topic bk19369) from the current Safari User Guide for macOS 26/27 — it now redirects to the guide's welcome page. Confirm the File → Export Bookmarks… menu item still exists in current Safari on Mac before publishing. -->

## What the file actually contains

Safari writes the **Netscape bookmark file format** — the industry-standard HTML every other browser and tool understands. Open the file in a text editor and you will recognize the structure:

- `<!DOCTYPE NETSCAPE-Bookmark-file-1>` at the top — the signature every importer looks for.
- `<DL><p>` and `</DL>` blocks: nested lists that reproduce your **folder tree**. Each folder is an `<H3>` followed by its own `<DL>`. Anything under "Favorites" and the "Bookmarks Menu" in Safari maps into this nesting.
- `<DT><A HREF="https://…">Title</A>` lines: one per bookmark, with the URL, the stored title, and an `ADD_DATE` attribute holding a Unix epoch number — the date you added the bookmark. There is also usually a `LAST_MODIFIED` and an `ICON` (the favicon, encoded as data).

Two things the file does **not** contain:

1. **Your Reading List.** Apple documents the Reading List as its own feature, distinct from bookmarks — as of Oct 5, 2026, per [https://support.apple.com/en-us/guide/safari/keep-a-reading-list-sfri35905/27.0/mac/27](https://support.apple.com/en-us/guide/safari/keep-a-reading-list-sfri35905/27.0/mac/27). "Export Bookmarks" exports bookmarks. Reading List items, including any pages Safari saved for offline reading, are not in the file, and there is no export button for them.
2. **The page contents.** Like every browser export, this is a list of links — titles, URLs, dates, folders — not copies of the articles. Safari's Reading List does cache offline copies, but those copies stay inside Safari.

<!-- VERIFY: the claim that Reading List items are excluded is inferred from the command's scope and Apple's separate documentation of the two features — re-check against a live Safari export. -->

The `ADD_DATE` values survive *in the file* no matter what you do next — that is what makes the export a true historical record. What happens to them once you import is covered below.

## What to do with the export: the Marqly bridge

This HTML file is precisely what Marqly accepts. Marqly's importer takes browser bookmark HTML from Chrome, Edge, Firefox, and Safari — your exported `.html` goes in with no conversion. The limits, stated plainly: files up to 10 MB on the free plan and 30 MB on Pro, 10,000 bookmarks per file, extensions `.html`, `.htm`, or `.csv`.

Before importing anything, it is worth knowing that Safari bookmarks behave like any browser's: the stored titles are often the first 30–60 characters of a headline, and nothing about the page itself travels in the file. Once imported into a [read-it-later style library](/read-it-later), Marqly reads each live page and adds its own summaries and tags.

Honest limits of the import, from Marqly's own documentation:

- **Original save dates are not preserved.** Imported items take the date of the import. Your `bookmarks.html` remains the record of when you actually saved things — keep it.
- **Auto-tagging of imported links is a Pro feature.** On the free plan, imports keep the tags that came in the file; Safari never had tags, so on free your imported Safari set arrives folder-mapped but untagged, and you can lean on semantic search to find things by description instead.
- **Folders carry over, tags mostly do not exist here.** The importer reads your folder structure; Safari users have no tag feature to lose, unlike [Firefox, whose tags do export](/blog/export-firefox-bookmarks).

If you are consolidating Safari with bookmarks from other browsers, the pillar guide to [backing up all your browser bookmarks into one file](/blog/backup-all-browser-bookmarks) covers the merge and its dedupe trap. For the Chrome side of the same format, see [how to import Chrome bookmarks into an AI manager](/blog/how-to-import-chrome-bookmarks-to-ai); you can preview your exported file first with the free [Bookmark File Viewer](/tools/bookmark-file-viewer).

## When NOT to use Marqly for this

Be clear-eyed about when the export is all you need:

- **You are staying in the Apple ecosystem.** iCloud sync keeps Safari bookmarks identical across your devices. An export plus a new tool adds steps without adding findability you lack.
- **You need the Reading List itself.** No tool imports what Apple will not export. Rescue those links by hand or leave them in Safari.
- **You only need a one-time handoff to another browser** (say, Safari to Edge or Chrome): import the HTML directly into the new browser and skip a third service entirely.
- **You need an offline archive with full text.** The export is links only, and re-importing does not magically produce page copies. A dedicated reader is the right tool for that.

Marqly earns its place when the pile outgrows Safari's sidebar search — when you want the links you saved years ago to be findable by describing them, as [how to organize bookmarks](/blog/how-to-organize-bookmarks) goes into in more detail. Students keeping research links across Safari and Chrome will recognize the problem from the [for-students guide](/for-students).

## Recap and next action

1. Mac Safari → **File → Export Bookmarks…** → save the `.html`.
2. Open the file to confirm folders and links are all there; know that Reading List items are not.
3. Archive the file (it holds your true save dates), then import it into your next system — Marqly takes this exact format within the 10 MB / 10,000-bookmark limits.
4. Import, let the tool read the pages, and search for three things you remember by description only. If they surface, your Safari pile is finally useful again.

## FAQs

**Does exporting Safari bookmarks include my Reading List?**
No. The export command writes bookmarks only; the Reading List is a separate feature with no export path in Apple's documentation. Rescue those links one at a time if you need them elsewhere.

**Can I export Safari bookmarks from my iPhone or iPad?**
Not to a file — iOS Safari documents adding and editing bookmarks, not exporting them. Sync your bookmarks to iCloud, open Safari on a Mac, and export there.

**What format is the Safari bookmark export?**
The Netscape bookmark HTML format: `<DT><A>` link entries with `ADD_DATE` timestamps, folders nested in `<DL>` blocks. It is the same format Chrome, Edge, and Firefox export and that Marqly imports directly.

**Will my folders survive the import?**
Folder structure is read from the file and mapped to tags or collections by most importers, including Marqly. Items imported into Marqly take the import date, though — the HTML file stays your only record of the original dates.

**Is iCloud sync enough instead of exporting?**
For living across Apple devices, yes. As a portable backup or a way to move to another tool, no — sync is not a file. Export before any browser or ecosystem switch, and keep dated copies.
