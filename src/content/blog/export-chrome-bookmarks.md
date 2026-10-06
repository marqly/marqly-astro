---
title: "How to Export Your Chrome Bookmarks in 2026 (One HTML File, Step by Step)"
seoTitle: "Export Chrome Bookmarks in 2026 — Marqly"
description: "The full export is three clicks in Chrome's bookmark manager. Here's what lands in the HTML file, what doesn't, and how to make those bookmarks findable afterward."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export chrome bookmarks"
tags:
  - "export chrome bookmarks"
  - "chrome bookmark manager"
  - "bookmarks.html"
  - "backup chrome bookmarks"
  - "chrome bookmarks sync"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "Where is the export button in Chrome?"
    a: "Open the Bookmark Manager at chrome://bookmarks (or Ctrl+Shift+O / Cmd+Option+B), click the three-dot ⋮ menu at the top-right of the page — not the browser's main menu — and choose Export bookmarks. Chrome writes a single HTML file wherever you point the save dialog."
  - q: "What format does Chrome export in?"
    a: "The Netscape bookmark file format: an HTML document of `<DL>` lists with an `<H3>` per folder and `<A HREF>` lines carrying each URL, its title, and an ADD_DATE timestamp. It is the one format virtually every bookmark manager and browser can import, which is why exporting from Chrome is the standard way to move bookmarks anywhere."
  - q: "Does the export include my sync data or other devices?"
    a: "It includes the bookmarks currently in your profile, which — if you sync — includes what other devices have contributed, because Chrome keeps one synced tree. Export is just a snapshot of that moment, though: bookmarks added elsewhere after the sync lands won't be in the file. If the sync itself is broken, fix that first; the export will faithfully capture whatever your profile currently shows."
  - q: "Can I open the exported file to check it?"
    a: "Yes — it is plain HTML; drag it into a browser tab to see the folder tree as links, or drop it into our free Bookmark File Viewer to get a sortable table with folder paths and dates decoded, without uploading anything."
  - q: "Why do my bookmarks have no tags after exporting?"
    a: "Chrome's bookmark system has folders but no tags, and the HTML export carries exactly what exists: titles, URLs, folder nesting, and add-dates. Nothing is lost in the export; there simply was nothing tag-shaped to carry. Tags come later, when the import destination can add them."
  - q: "How often should I export?"
    a: "Before anything risky — a Chrome reinstall, a profile reset, a browser switch, or handing the machine to someone. An export is a few seconds; a lost profile is not recoverable if you never synced and never backed up. Keeping a dated file in your drive is the whole backup strategy."
---

Chrome has never needed an extension for this: the entire bookmark tree — folders, links, and the date each was added — comes out in three clicks as a single portable HTML file. This guide covers the clicks, what actually ends up inside the file, and what to do next so the export becomes more than a snapshot.

## The export, step by step

1. **Open the Bookmark Manager.** Type `chrome://bookmarks` into the address bar and hit Enter — or press **Ctrl+Shift+O** on Windows/Linux, **Cmd+Option+B** on Mac. You can also get there via the browser's ⋮ menu → **Bookmarks and lists** → **Bookmark manager**.
2. **Open the manager's own ⋮ menu.** This is the click people miss: the three-dot menu is at the **top-right of the Bookmark Manager page itself**, not in Chrome's main toolbar menu.
3. **Choose Export bookmarks.** A save dialog opens. Chrome proposes a filename like `bookmarks_2026_10_5.html` — keep it (the date in the name is your restore point) and drop it somewhere durable: your drive, a backups folder, a USB stick.

Done. One file, every bookmark. Import it into any browser, any manager, or keep it as the restore point it is.

## What Chrome actually puts in the file

The export uses the **Netscape bookmark format** — the same shape Firefox, Safari and Edge write — so it opens as a plain HTML page of nested lists. Inside, each entry is an `<A HREF>` line with four pieces of data:

- **The URL**, exactly as Chrome resolved it (redirects like `google.com/url?...` can show up if you saved those pages rather than the destination).
- **The title** Chrome stored, which for saved pages is usually the page's `<title>` at save time — sometimes years stale.
- **`ADD_DATE`** — the moment you bookmarked it, as a Unix epoch number.
- **`LAST_MODIFIED`**, where Chrome recorded edits.

Folders come through as `<H3>` headings with their own nested `<DL>` blocks, so the tree structure — the part people actually care about — survives intact. What you won't find: notes (Chrome has none), tags (also none), favicons beyond a data reference, or the page contents themselves. An exported bookmark is a pointer to the live web; if the destination page moves or dies, the line in your file still points where it always did.

A quick open-and-check takes ten seconds: drag the file into a browser tab and you should see your folders as headings and your links as a page of anchors. If it opens empty, something went wrong (you exported a different profile — Chrome's export follows the *currently selected profile*, so check `chrome://settings/people` if you run several).

## Before you export: the thing to fix first

The one state where "export your bookmarks" produces the wrong file is a **broken sync**. If your desktop and phone show different bookmark sets, exporting now just snapshots the divergence. Before backing up, confirm Chrome has the full picture:

1. `chrome://settings/people` → your account → make sure **Sync** is on and **Bookmarks** is checked in "Manage what you sync".
2. Open `chrome://sync-internals` and check the status — a recent successful sync means the tree you're about to export is the shared one.
3. If things look missing, our [Chrome bookmarks not syncing fix](/blog/chrome-bookmarks-not-syncing-fix) walks the recovery paths, including the local `Bookmarks` file every Chrome profile keeps on disk regardless of sync state.

If syncing is fine, none of this matters — export and move on.

## What to do with the file

Three honest options:

**Keep it cold.** A dated `bookmarks_*.html` in a drive folder is a complete restore point. This is what most people need it for, and it costs nothing.

**Move it.** Import the same file into [Edge](/blog/export-edge-bookmarks), [Firefox](/blog/export-firefox-bookmarks), [Safari](/blog/export-safari-bookmarks) or Brave — they all speak the format. The [browser-bookmarks migration guide](/migrate/browser-bookmarks) covers the destination side of the move, and [backup all your browser bookmarks](/blog/backup-all-browser-bookmarks) covers exporting several browsers at once.

**Make it findable.** Exporting solves "don't lose it." It doesn't solve "find the article about X from three years ago" — Chrome's own search matches title text, folder by folder, and that's it. If the bookmarks accumulate faster than you find them again, that's the problem an AI bookmark manager exists for: [Marqly imports this exact HTML file](/migrate/browser-bookmarks) (free plan; browser HTML, Raindrop HTML and Pocket's `list.csv` all work), and on Pro every import is auto-tagged and summarized, then searchable by describing what you remember — "the pricing post about web clipper tools" finds it without the title. Honest limits, stated plainly: imported items take the *import* date rather than the original `ADD_DATE`, and the auto-tagging layer is Pro, not free. Preview your file first with the [Bookmark File Viewer](/tools/bookmark-file-viewer) to see exactly what will come through.

## The short version

`chrome://bookmarks` → ⋮ → **Export bookmarks** → save the HTML. Folders and dates come with it; notes and tags never existed to carry. Keep the file as your restore point, and if the reason you're exporting is that you can't *find* anything in there, the next step is search that understands you — not another folder tree.
