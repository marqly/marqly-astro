---
title: "How to Back Up Bookmarks from Every Browser into One File (2026)"
seoTitle: "Back Up All Browser Bookmarks in One File — Marqly"
description: "Export bookmarks from Chrome, Edge, Firefox, and Safari, then merge them into one set. A decision table per browser, plus the dedupe and date gotchas."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "backup all browser bookmarks"
tags:
  - "backup browser bookmarks"
  - "merge bookmarks"
  - "netscape bookmark file"
  - "export bookmarks"
  - "duplicate bookmarks"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "Can I combine bookmarks from Chrome, Edge, Firefox, and Safari into one file?"
    a: "Yes, and there are two clean ways. Import the separate HTML exports one after another into a single destination — a browser's bookmark manager or a tool like Marqly — which merges them for you. Or concatenate the files by hand: keep one DOCTYPE and header, drop the repeated headers from the others, and nest their <DL> blocks under one root. Both work because all four browsers export the same Netscape HTML format."
  - q: "Does merging bookmark files remove duplicates?"
    a: "No — nothing dedupes automatically, not browsers' importers and not Marqly. The same URL saved in Chrome, Edge, and Safari comes across as three separate entries, and re-running an import doubles everything a second time. Plan on a dedupe pass afterward: use a duplicate-bookmark tool or a diff of the sorted URL lists before you trust the merged collection."
  - q: "Which browser file format should I standardize on?"
    a: "Netscape bookmark HTML — every browser exports and imports it, and it is the format [Marqly](https://app.marqly.com) accepts for browser bookmarks. One warning: Firefox's Backup… option writes a JSON file instead, which only Firefox can restore. Always choose Firefox's 'Export Bookmarks to HTML…' for anything portable."
  - q: "Will the merged collection keep the original save dates?"
    a: "Inside the HTML files, yes — every link keeps its ADD_DATE value forever. Inside most destinations, no: importers commonly re-stamp items with the import date, and Marqly is honest that its import does this. Keep the dated per-browser exports as your archive of chronology, and treat the merged collection as the working library."
  - q: "How often should I run an all-browser bookmark backup?"
    a: "A practical rhythm is quarterly for active savers and twice a year otherwise, plus one forced run before any risky event: a new laptop, a browser re-install, an OS wipe, or leaving a job's managed machine. Name each snapshot with the date and keep one folder per run so a restore never mixes generations."
  - q: "Is this the same as exporting for a Pocket or Raindrop migration?"
    a: "Partly. Read-it-later apps like Pocket and Raindrop keep their own libraries that live beside your browser bookmarks, and their exports differ (Raindrop's JSON, for instance, is not Marqly-importable — its HTML is). If your saves are scattered across apps too, run the app exports alongside the browser ones before merging."
---

Every desktop browser — Chrome, Edge, Firefox, Safari — can export its bookmarks as the same portable **Netscape HTML file**, so backing everything up means four short exports and one merge. Chrome and Edge use a three-dot menu in their bookmark manager, Firefox uses Library → Import and Backup → Export Bookmarks to HTML, and Safari uses File → Export Bookmarks on a Mac. The two traps: nothing dedupes when you combine the files, and most tools lose the original save dates on import. This is the pillar guide for the whole export cluster — the decision table for each browser, three ways to merge into one set, and what honestly survives.

## Why one master export beats four browser silos

Browser bookmarks are designed to live inside their browser. The problems compound exactly the way you would guess:

- **You have more than one browser.** A work Edge profile, a personal Chrome, a Firefox for the privacy-curious sites, Safari out of habit on the Mac. The same "read later" article ends up saved in three places, each partial.
- **Per-browser silos are per-browser loss.** A sync glitch, a corrupted profile, or a managed laptop that gets wiped takes that browser's slice of your research with it.
- **No destination reads four files happily.** Whoever you move to — a new browser, a bookmark manager, a [read-it-later](/read-it-later) setup — wants one clean import, not a folder of overlapping snapshots.

The fix is mechanical and boring, which is why it works: export each browser to its own HTML file on a schedule, then merge into one place that searches better than any browser does.

## The decision table: every browser's export path

| Browser | Open this | Menu path | File you get | Limits | The gotcha |
|---|---|---|---|---|---|
| Chrome | `chrome://bookmarks` | ⋮ (top-right) → **Export bookmarks** | Netscape HTML | ~60-second job | Per profile — work and personal profiles export separately |
| Edge | `edge://favorites` | ⋮ (top-right) → **Export favorites** | Same Netscape HTML (it is Chromium — Microsoft's own import doc calls the input "Favorites or bookmarks HTML file") | Per profile | Microsoft has no dedicated export help page as of Oct 5, 2026, per [https://support.microsoft.com/en-us/edge/import-your-favorites-and-passwords-in-microsoft-edge](https://support.microsoft.com/en-us/edge/import-your-favorites-and-passwords-in-microsoft-edge) — the label is the only drift risk |
| Firefox | Library: `Ctrl/Cmd+Shift+B` | **Import and Backup → Export Bookmarks to HTML…** | Netscape HTML **plus your tags** in a TAGS field | Free, instant | Never use Backup… for this — its JSON is Firefox-only and [Marqly](https://app.marqly.com) cannot read it, as of Oct 5, 2026, per [https://support.mozilla.org/en-US/kb/export-firefox-bookmarks-to-backup-or-move](https://support.mozilla.org/en-US/kb/export-firefox-bookmarks-to-backup-or-move) |
| Safari (Mac) | Menu bar, in Safari | **File → Export Bookmarks…** | Netscape HTML | Mac only — no iPhone/iPad file export | The Reading List is *not* in the file, as of Oct 5, 2026, per [https://support.apple.com/en-us/guide/safari/keep-a-reading-list-sfri35905/27.0/mac/27](https://support.apple.com/en-us/guide/safari/keep-a-reading-list-sfri35905/27.0/mac/27) |
| Brave (if in your mix) | `brave://bookmarks` | ⋮ → **Export** | Identical Chrome-format HTML | Per profile | Brave Sync is mirroring, not backup, per [https://support.brave.app/hc/en-us/articles/360019782291-How-do-I-import-or-export-browsing-data](https://support.brave.app/hc/en-us/articles/360019782291-How-do-I-import-or-export-browsing-data) |

Detailed steps for each are in the cluster siblings: [export Safari bookmarks](/blog/export-safari-bookmarks), [export Edge favorites](/blog/export-edge-bookmarks), [export Firefox bookmarks to HTML](/blog/export-firefox-bookmarks), and [export Brave bookmarks](/blog/export-brave-bookmarks); the Chrome walkthrough lives in [how to import Chrome bookmarks into an AI manager](/blog/how-to-import-chrome-bookmarks-to-ai).

## Step by step: the four exports

1. **Chrome.** Visit `chrome://bookmarks` → three-dot menu → Export bookmarks → save. Repeat inside each Chrome profile.
2. **Edge.** Visit `edge://favorites` → three-dot menu → Export favorites → save. Per profile, same as Chrome.
3. **Firefox.** Open the Library (`Ctrl+Shift+B` / `Cmd+Shift+B`) → Import and Backup → **Export Bookmarks to HTML…** (not Backup…) → save. Firefox exports its tags into the file's TAGS attributes — the one browser where organization survives the trip.
4. **Safari.** On a Mac signed into your Apple Account: File → Export Bookmarks… → save. Your phone's bookmarks arrive here via iCloud sync first; the Reading List does not appear at all.
5. **Name and date everything.** `chrome-2026-10-05.html`, `firefox-2026-10-05.html`, and so on, all in one dated folder. Five minutes now prevents the "which file is current" archaeology later.

## Merging the files into one set

Three honest routes, in order of practicality for most people:

### Route A — sequential import into one destination (least clever, works)

Pick a single landing spot — a browser's bookmark manager or a bookmark tool — and import file after file. The destination appends each set under its own folder. Nothing merges or dedupes; you get one *place* containing duplicates. Fine if you will search instead of browse, which is the point of moving to a manager anyway. Plan a dedupe pass (below) either way.

### Route B — hand-merge into one HTML file (for the purists)

Netscape HTML is just nested markup, so you can concatenate: keep the first file's DOCTYPE and header, remove the same header lines from the others, and nest their `<DL>` blocks under the root `<DL>`, each wrapped in an `<H3>` labeled per browser. Validate the result by opening it in a browser and by counting links before and after — the free [Bookmark File Viewer](/tools/bookmark-file-viewer) shows both. Then import the single merged file wherever you like. Fragile if you fumble the tags, so keep the originals until the merged file verifies.

### Route C — import everything into Marqly and clean up inside

Upload each browser's HTML (Marqly reads browser bookmark HTML as-is, `.html`/`.htm`/`.csv`, up to 10,000 bookmarks per file, 10 MB free / 30 MB Pro). You get one searchable library spanning all browsers without touching markup. The merge is honest about what it does not do: see the limits section next. Afterward, run the [Duplicate Bookmark Finder](/tools/duplicate-bookmark-finder) over the collection and prune.

## What the merged file (and import) actually preserves

Whatever route you pick, understand the payload:

- **The format is the same in all four exports:** `<!DOCTYPE NETSCAPE-Bookmark-file-1>`, folders as `<H3>` + nested `<DL>`, links as `<DT><A HREF="…" ADD_DATE="…">Title</A>`, optional `LAST_MODIFIED`, `ICON`, and `TAGS`. That shared skeleton is *why* this cross-browser trick works at all — the browser-specific step-by-step guides in this cluster each explain the same file from their corner.
- **Titles:** kept as the browser last stored them, which is often a truncated headline.
- **Folders:** travel as real nesting; importers usually map them to tags or collections rather than a literal tree.
- **Tags:** only Firefox produces meaningful TAGS values — Chrome/Edge/Brave never had tags and Safari has none, so expect empties from three of four files.
- **Dates:** the honest catch. `ADD_DATE` survives forever *in the file*, but import destinations commonly re-stamp with the import date. Marqly explicitly does not preserve original save dates on import — the per-browser exports remain your only chronological record. Keep them. (We measured this across real exports in [the bookmark-import fidelity study](/research/bookmark-import-fidelity).)
- **Page contents:** never in any of this. A bookmark export is links, titles, and organization. Full text, summaries, and tags of the pages themselves are what a reading tool generates *after* import by fetching each live page — which also means a link whose page has since died imports as a dead link, permanently.

## The Marqly bridge — limits stated plainly

If the goal of consolidating is a library you can actually search, that is the pitch: [get started free](https://app.marqly.com), import each browser's HTML, and let Marqly read the pages so you can find a save by describing it instead of guessing its title — the retrieval argument in [how to organize bookmarks](/blog/how-to-organize-bookmarks) and [can AI organize my bookmarks automatically](/blog/can-ai-organize-my-bookmarks-automatically). What you must budget for, no spin:

- **No dedupe at import.** Four browsers saying "yes, that article" means four copies. Dedupe after, or accept noise that semantic search will surface four times.
- **Dates reset on import** (see above). Archive the exports.
- **Auto-tagging imported pages is Pro.** On the free plan imports keep only the tags already in the file — for most people, Firefox's tags plus nothing else.
- **File-size ceilings:** 10 MB free / 30 MB Pro and 10,000 bookmarks per file. Route B's merged mega-file is where people hit this; importing files separately sidesteps it.
- **Firefox JSON is not accepted** — HTML only for the Firefox leg.

## When NOT to use Marqly for this

- **You are staying fully in one browser.** Sync plus occasional exports is a complete answer; a manager is a second place to keep things.
- **You need one perfect merged file today.** Hand-merge (Route B) and keep it in a drive — no third-party import needed.
- **Your saves live in read-it-later apps as much as browsers.** Run Pocket/Raindrop exports too (Marqly takes Pocket’s list.csv and Raindrop HTML — not Raindrop JSON); or if an app already does reading for you, compare honestly — [Pocket alternatives](/alternatives/pocket) and the [Raindrop comparison](/alternatives/raindrop) both say where each wins.
- **You only need two daily links backed up.** The whole apparatus is overkill; your browser already has them.

Researchers, students, and teachers accumulating across machines are the natural fit — see [for-researchers](/for-researchers), [for-students](/for-students), and [for-teachers](/for-teachers) for workflows that assume a merged, searchable pile rather than four silos.

## A backup routine that survives real life

1. **Quarterly:** run all four exports into a dated folder. Five minutes total.
2. **Before any risky event** (new laptop, OS wipe, leaving a managed machine): forced extra run; the Safari leg requires a Mac.
3. **Once a year or on tool-change:** import the set into your destination of choice, dedupe, and spot-check five links you remember saving years ago by *description*, not title.
4. **Never delete the raw exports** after merging — they are the only artifact holding original dates, and they re-import cleanly into anything invented next year.

## FAQs

**Can I combine all my browsers' bookmarks into one file?**
Yes — all four export the same Netscape HTML, so you either import them sequentially into one destination, concatenate the markup by hand, or upload them together into a manager like Marqly. Sibling guides cover each browser's exact menu path.

**Does merging remove duplicates automatically?**
No. Nothing dedupes — not browser importers, not Marqly. Expect the same URL from multiple browsers to arrive multiple times and plan a cleanup pass with a [duplicate finder](/tools/duplicate-bookmark-finder).

**Which format should I standardize on?**
Netscape bookmark HTML. Universal in, universal out. Firefox's Backup… JSON is the exception that only Firefox reads — always pick the HTML export there.

**Do original save dates survive the merge?**
In the files, yes — every `ADD_DATE` stays intact. In the destination, usually no: Marqly, for one, stamps imports with the import date. Keep dated exports as the archive.

**What about passwords and history?**
Out of scope, deliberately — bookmark exports contain links, titles, folders, and dates only. Never route password exports into any third-party library; use your browser's or OS's dedicated password-manager export.

**Is this worth it if I use sync everywhere?**
Sync keeps copies consistent; it does not give you a file, a merge, or a searchable cross-browser view — and a sync glitch that deletes a bookmark deletes it everywhere. The export set is your undo button for events sync cannot reverse.

## Recap

1. Export per browser: Chrome/Edge/Brave managers → ⋮ → Export; Firefox Library → Import and Backup → **Export Bookmarks to HTML…**; Safari (Mac) → File → Export Bookmarks…. Reading List and JSON backups are not part of the plan.
2. Merge by sequential import, hand-concatenation, or uploading every file into [Marqly](https://app.marqly.com).
3. Budget honestly for: no automatic dedupe, import dates replacing original dates, tags surviving only from Firefox, and 10 MB / 10,000-bookmark ceilings.
4. Keep the raw dated exports forever — the merged library is for working; the files are the record.
