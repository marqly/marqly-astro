---
title: "How to Export Firefox Bookmarks to HTML in 2026 (and Why the JSON Backup Won't Work)"
seoTitle: "Export Firefox Bookmarks to HTML in 2026 — Marqly"
description: "Firefox saves bookmarks two ways: a JSON backup only Firefox reads, and the portable HTML export every tool takes. Choose Export Bookmarks to HTML."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export firefox bookmarks"
tags:
  - "export firefox bookmarks"
  - "firefox bookmarks html"
  - "firefox json backup"
  - "import and backup firefox"
  - "netscape bookmark file"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "What is the difference between Firefox's 'Backup…' and 'Export Bookmarks to HTML…'?"
    a: "Backup… writes a JSON file that is a restorable snapshot for Firefox itself — you use it with Restore to put bookmarks back into Firefox exactly as they were. Export Bookmarks to HTML writes the portable Netscape format every other browser and bookmark manager can read. If the goal is moving bookmarks out of Firefox, only the HTML export does the job; the JSON is Firefox-only."
  - q: "Can Marqly import a Firefox JSON backup?"
    a: "No. Marqly's importer accepts browser bookmark HTML (Chrome, Edge, Firefox, Safari), Raindrop HTML and Pocket’s list.csv, and generic CSV — a Firefox `backup.json` is not one of them. Always choose 'Export Bookmarks to HTML…' from the Import and Backup menu; no conversion tool can reliably turn Firefox's backup JSON into a meaningful import anywhere else, because it is a browser-internal format."
  - q: "Do Firefox bookmarks have tags, and does the export keep them?"
    a: "Yes — Firefox is the only mainstream browser with real bookmark tags, stored as special 'Smart Bookmarks' folders. The HTML export carries them in the TAGS attribute on each link, comma-separated. That makes a Firefox export richer than Chrome or Edge exports, and any importer that understands the standard format can see your tags."
  - q: "Where do I find the Import and Backup menu in Firefox?"
    a: "Open the Library window with Ctrl+Shift+B (Cmd+Shift+B on Mac) — or the hamburger menu → Bookmarks → Manage Bookmarks. The 'Import and Backup' button sits in the Library toolbar; its dropdown contains Backup…, Restore, Import Bookmarks from HTML…, Export Bookmarks to HTML…, and the browser-data import entry. Those exact labels are Firefox's own UI strings."
  - q: "Does the export include my saved logins, history, or open tabs?"
    a: "No. The export is bookmarks only: URLs, titles, folder structure, tags, and timestamps. Passwords, browsing history, and session data are separate stores in Firefox with their own tools. Saved-to-Firefox reading-list-style items are not part of the bookmark tree unless you actually bookmarked them."
---

Firefox gives you two ways to save your bookmarks, and picking the wrong one is the classic mistake: **Backup… produces a JSON file only Firefox can restore**, while **Export Bookmarks to HTML… produces the portable Netscape file everything else reads**. To move bookmarks out of Firefox — into Chrome, another manager, or [Marqly](https://app.marqly.com), which imports exactly that HTML — always take the HTML route. Open the Library (Ctrl+Shift+B / Cmd+Shift+B), click **Import and Backup**, choose **Export Bookmarks to HTML…**, save the file. Here is what each option really does, what the file contains (Firefox's export is richer than most — your tags ride along), and the honest limits when you import it somewhere new.

## Your export routes from Firefox

| Route | What you get | File format | Limits and costs | Gotcha |
|---|---|---|---|---|
| Library → Import and Backup → **Export Bookmarks to HTML…** | Bookmarks, folders, and tags | Netscape bookmark HTML (`bookmarks.html`) | Free, instant | None for portability — this is the route you want |
| Library → Import and Backup → **Backup…** | A snapshot for restoring into Firefox | JSON (`bookmarks-<date>_<n>.json`) | Free | Firefox-only; other tools and managers cannot import it |
| Restore (from a previous backup) | Rolls your Firefox bookmarks back in time | Reads Firefox JSON | Free | Not an export direction at all — commonly confused with one |
| Import Bookmarks from HTML… | The reverse: pulls others' bookmarks into Firefox | Reads HTML | Free | Confirms HTML is the interchange format both ways |
| Firefox Sync | Live mirroring to your other Firefox installs | No file | Free | Sync is not backup and not export — different jobs |

## Step by step: exporting bookmarks to HTML from Firefox

1. **Open the Library window.** Press `Ctrl+Shift+B` on Windows/Linux or `Cmd+Shift+B` on Mac. (From the menu bar instead: ☰ → Bookmarks → Manage Bookmarks.) As of Oct 5, 2026, per [https://support.mozilla.org/en-US/kb/bookmarks-library-firefox](https://support.mozilla.org/en-US/kb/bookmarks-library-firefox), the Library is Firefox's full bookmarks manager window.
2. **Click "Import and Backup"** in the Library's toolbar. The menu labels come straight from Firefox's own interface strings — the dropdown reads Backup…, Restore, Import Bookmarks from HTML…, Export Bookmarks to HTML…, and Import Data from Another Browser… (verified against Mozilla's official UI string source, [https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/locales/en-US/browser/places.ftl](https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/locales/en-US/browser/places.ftl), as of Oct 5, 2026).
3. **Choose "Export Bookmarks to HTML…" — not "Backup…".** This is the fork in the road. Backup… writes the Firefox-only JSON; the export option writes the portable HTML.
4. **Save the file.** Firefox defaults the name to something like `bookmarks.html`. Keep the `.html` extension.
5. **Open it to confirm.** Double-click: you should see every bookmark as a link under folder headings. Or paste it into the [Bookmark File Viewer](/tools/bookmark-file-viewer) to count entries and check folders and tags before importing anywhere.
6. **Keep a dated copy** even after you import elsewhere — it is your snapshot record, and unlike a JSON backup it stays useful no matter which tool you use next. Pair it with the [Duplicate Bookmark Finder](/tools/duplicate-bookmark-finder) if years of saving have left the same URL in three places.

## What the file actually contains

A Firefox HTML export is a **Netscape bookmark file** — same skeleton as Chrome, Edge, or Safari exports — but Firefox fills in one column the others leave blank:

- `<!DOCTYPE NETSCAPE-Bookmark-file-1>` header.
- `<DL>` nesting that reproduces your bookmark tree: the **Bookmarks Menu**, **Bookmarks Toolbar**, and **Other Bookmarks** (the desktop-folder equivalents of what Firefox calls its root containers) each become an `<H3>` with a nested `<DL>` of contents.
- `<DT><A HREF="…" ADD_DATE="…" LAST_MODIFIED="…">Title</A>` per bookmark. `ADD_DATE` is a Unix epoch number — the moment you starred it.
- **`TAGS="climate, src-a"` on tagged links.** Firefox's tags are stored as Smart Bookmark folders, and the exporter flattens them into this comma-separated attribute. Chrome, Edge, and Safari files almost never have TAGS content; a Firefox export usually does. This matters downstream: it is the one piece of Firefox organization that survives into any tag-aware importer.
- **No page contents, passwords, or history** — links, titles, folder positions, tags, dates. That is the format's scope in every browser, per Mozilla's own documentation of the bookmarks tools — as of Oct 5, 2026, per [https://support.mozilla.org/en-US/kb/import-bookmarks-html-file](https://support.mozilla.org/en-US/kb/import-bookmarks-html-file), HTML is the interchange format Firefox itself uses for cross-browser bookmark moves.

The JSON backup, by contrast, stores Firefox's internal places data — including tag containers and last-modified metadata — in a shape designed only for Restore. Outside Firefox, nothing reads it. That is why every "migrate your bookmarks" guide, ours included, insists on the HTML option.

## What to do with the export: the Marqly bridge

Your `bookmarks.html` drops straight into Marqly — no conversion — because browser bookmark HTML is the first format the importer accepts (alongside Raindrop HTML (not JSON), Pocket’s list.csv, and generic CSV; **Raindrop JSON and Firefox JSON are both not accepted**). The verified envelope: 10 MB free / 30 MB Pro per file, 10,000 bookmarks per file, `.html`/`.htm`/`.csv`.

The honest trade list on import:

- **Original dates do not carry over.** Every imported item takes the import date, even though your HTML file still holds the real `ADD_DATE` per link. Keep the file as the historical record.
- **Your tags do have a home.** Free-plan imports keep the tags that came in the file — which for Firefox is the actual win: a years-long tagged library arrives already tagged. Auto-tagging *newly imported pages* with AI is a Pro feature, so free-plan Firefox users get their own tags plus search, but not machine-added ones.
- **No dedupe at import.** Firefox's own backup-before-you-move advice exists because bookmark sets collect duplicates over the years; an importer that doesn't dedupe will bring all of them across. The [duplicate finder tool](/tools/duplicate-bookmark-finder) cleans up after.

If Firefox is one corner of a scattered collection, this is the same first half of [backing up all your browser bookmarks into one file](/blog/backup-all-browser-bookmarks). Coming from the Chrome side, see [importing Chrome bookmarks into an AI manager](/blog/how-to-import-chrome-bookmarks-to-ai); researching across many small sources, the [for-researchers guide](/for-researchers) covers the retrieval workflow the pile enables.

## When NOT to use Marqly for this

- **You are just moving Firefox → Thunderbird or Firefox → Chrome.** Import the HTML directly into the target browser. No third tool needed for a straight transfer.
- **You want a byte-perfect undo button.** Firefox's JSON backup + Restore is exactly that; an HTML export loses tag-adjacent metadata Firefox keeps internally. Keep the JSON routine for disaster recovery and use the HTML for portability — they are complements, not substitutes.
- **Your bookmark count is small and filing works.** If twenty bookmarks live happily on the toolbar, a new library is overhead. The switch pays when folders stop being findable.
- **You need full-text archives of everything today.** The export and any import move links, not article copies. Reading tools that cache page text are the right job for that.

## FAQs

**What is the difference between Backup… and Export Bookmarks to HTML…?**
Backup… writes a Firefox-only JSON snapshot used by Restore. Export to HTML writes the universal Netscape format that every browser and bookmark manager can import. Moving bookmarks out means choosing the HTML option every time.

**Can Marqly import a Firefox JSON backup?**
No — Marqly accepts browser bookmark HTML (plus Raindrop HTML (not JSON) and Pocket’s list.csv, and CSV), not Firefox's JSON. Export to HTML first.

**Do my Firefox tags survive the export?**
Yes — tags ride in the TAGS attribute of the HTML file, which is one of Firefox's genuine advantages over other browsers' exports. They arrive with the file on import; what does not arrive anywhere is the original save date, since importers (Marqly included) stamp items with the import date.

**Where exactly is the Import and Backup menu?**
In the Library window (Ctrl+Shift+B / Cmd+Shift+B, or ☰ → Bookmarks → Manage Bookmarks), in the toolbar. Its dropdown is where Export Bookmarks to HTML… lives.

**Does the export include open tabs or history?**
Bookmarks only. Tabs, history, and logins are separate stores in Firefox. If a tab matters permanently, bookmark it before exporting.
