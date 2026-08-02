---
title: "What's Actually Inside Your Pocket Export File (and How to Use It)"
seoTitle: "What's in a Pocket Export File? ZIP/CSV Explained — Marqly"
description: "Opened your Pocket export file and found a CSV? Here's exactly what's inside — URLs, titles, tags, timestamps — what's missing, and how to import it cleanly."
pubDate: 2026-06-23
category: "Guides"
targetKeyword: "pocket export file"
tags:
  - "pocket export file"
  - "pocket export csv"
  - "open pocket export"
  - "pocket data export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
faqs:
  - q: "What's actually inside a Pocket export file?"
    a: "A Pocket export contains your list of saved links plus metadata — the URL, title, tags, the time you added each item, and whether it was unread or archived. It does not contain the full article text. It's a record of what you saved, not a copy of what you read, so import it while the original pages are still online."
  - q: "What format is a Pocket export file?"
    a: "Pocket's later export is a CSV file, sometimes delivered inside a ZIP. Large libraries can be split into multiple CSVs of around ten thousand rows each. Older exports were a single HTML bookmarks file instead. Either way it's plain text you can open in any spreadsheet app or text editor."
  - q: "How do I open a Pocket export CSV?"
    a: "Open the CSV in any spreadsheet app — Excel, Google Sheets, Numbers, or LibreOffice — or in a plain text editor. If it arrived as a ZIP, unzip it first. You'll see one row per saved item with columns for the URL, title, tags, time added, and status. Don't edit and re-save it before importing, since that can corrupt the formatting."
  - q: "Does the Pocket export include the article text or my highlights?"
    a: "No. The export carries links and metadata, not the cached article text Pocket showed you in its reader. Highlights and annotations are limited or absent in the standard export. To keep the reading view, import into a tool that re-fetches each page from the live web while the original URLs still work."
  - q: "Why does my Pocket export have multiple files?"
    a: "For large libraries, Pocket split the export into several CSV files of roughly ten thousand rows each to keep each file manageable. That's normal — none of your data is missing. When you import, add every file, since each one holds a different chunk of your saves."
  - q: "Can I still get a Pocket export file in 2026?"
    a: "No. Mozilla shut Pocket down on July 8, 2025 and permanently deleted user data on November 12, 2025. There's no way to generate a new export now. If you saved your export file before then, it still works — that file is the only copy of your library that exists."
heroImage: ../../assets/blog/what-is-in-your-pocket-export-file.png
heroAlt: "What's Actually Inside Your Pocket Export File — illustration"
ogImage: "https://www.marqly.com/og/what-is-in-your-pocket-export-file.png"
---

**A Pocket export file is your list of saved links plus their metadata — URLs, titles, tags, the time each item was added, and whether it was unread or archived.** It is not a copy of the articles themselves. It's usually a CSV (sometimes zipped, and split into several files for large libraries), and the practical takeaway is to import it while the original pages are still live, because the article text was never in the file.

If you exported your library before Mozilla pulled the plug, you're now staring at a file — maybe `pocket-export.csv`, maybe a ZIP, maybe a folder of numbered CSVs — and wondering what's actually in it and whether it's safe to trust. This guide opens the box. We'll decode every column, explain the format and its quirks, flag the gotchas that trip up importers, and show you how to turn that file back into a working, searchable library. If you just want the broader "where do I move?" picture, the [best Pocket alternatives in 2026](/blog/best-pocket-alternatives-2026) covers the destinations; this post is about the file itself.

## What does a Pocket export file contain?

A Pocket export contains a row for every item you ever saved, and each row carries the same handful of fields: the link, a title, your tags, a timestamp for when you added it, and its read status. That's the whole payload — a structured list of *what* you saved and *when*, not the content of the pages. Think of it as a detailed index of your library rather than the library's contents.

Here's what each field means in plain terms:

- **URL** — the web address you saved. This is the load-bearing column; everything else is metadata hanging off it. If the URL still resolves, the save can be rebuilt; if it 404s, the link is a dead end.
- **Title** — the page title Pocket grabbed at save time. Usually the article headline, occasionally a generic site name if Pocket couldn't parse a cleaner one.
- **Tags** — any tags you applied, packed into a single field and separated by a delimiter (often a pipe `|` or comma). Untagged items simply have an empty tags field.
- **Time added** — when you saved the item, stored as a Unix timestamp (a long number like `1709251200`, counting seconds since 1970) rather than a human-readable date. Spreadsheets show it as a big integer until you convert it.
- **Status** — whether the item was unread or archived. Pocket's export typically separates "unread" saves from "archive" saves, so you can tell your active queue from things you'd already filed away.

What's *not* in there matters just as much. The full article text — the clean, reformatted reading view Pocket cached for you — is absent. Highlights and annotations are limited or handled separately and often don't survive a plain export at all. So the file is a faithful record of your saving history, but it is not an offline copy of everything you saved to read.

## What format is a Pocket export file?

Pocket's later export is a **CSV** (comma-separated values) file — plain text, one row per save, columns separated by commas — and for large libraries it may arrive **zipped** and **split across multiple CSV files**. Older Pocket exports were a single **HTML bookmarks file** instead, the same format browsers use for their bookmark backups. Both are plain text and both are portable; the CSV is just easier to read in a spreadsheet.

A few format details worth knowing before you open it:

1. **ZIP wrapper.** If you downloaded a `.zip`, unzip it first. Inside you'll typically find one or more `.csv` files, sometimes separated into unread and archived sets.
2. **Split files for big libraries.** To keep individual files manageable, large exports get chunked — commonly into files of roughly **ten thousand rows each**. If you see `part_1`, `part_2`, or similarly numbered CSVs, nothing is missing; your saves are just spread across them. You'll import every file, not just the first.
3. **Delimited tags.** Tags for a single item live in one cell, joined by a separator character. That's normal CSV practice for "many values in one field," but it's also where importers most often stumble (more on that below).
4. **Unix timestamps.** The "time added" values are seconds-since-1970 integers, not dates. A good importer converts them automatically; a spreadsheet shows them raw until you apply a date formula.

The reason the format matters is that it determines how cleanly the file lands in your next tool. A CSV is universally readable, which is good — but "universally readable" and "universally interpreted the same way" are not the same thing, which is exactly where the gotchas come from.

## What are the common gotchas when importing a Pocket export?

The three things that most often go sideways are **tag formatting, unexpected or extra columns, and the missing article text** — and all three are predictable once you know the file's shape. None of them mean your export is broken; they mean different importers read the same file differently. Here's what to watch for, framed as facts about the export rather than promises about any specific tool.

- **Tags are packed into one field.** Because all of an item's tags share a single cell joined by a delimiter, an importer that doesn't split on that exact character may read `productivity|focus|deep-work` as one giant tag instead of three. The data is intact; whether it lands as separate tags depends entirely on how the receiving tool parses that field.
- **Extra or odd columns.** Pocket exports can include columns some importers don't expect, and column order or naming has varied across export versions. A stricter importer keyed to specific headers can choke on an unfamiliar column or quietly ignore it. Opening the CSV first to see the actual header row tells you what you're working with.
- **Timestamps look wrong until converted.** Raw Unix timestamps can show up as either huge numbers or the wrong date if a tool misreads the unit (seconds vs milliseconds). Your "time added" data is correct; it just needs interpreting.
- **No article text means dead links don't render.** Since the export is links, not content, any tool that rebuilds the reading view has to re-fetch the page from the live web. For URLs that have since gone offline, there's nothing to fetch — the save survives as a link, but the readable article may not come back.
- **Don't edit and re-save before importing.** Opening the CSV in a spreadsheet and re-saving it can silently change the encoding, mangle commas inside titles, or reformat the timestamps. If you want to inspect it, look — then import the original untouched file.

The honest summary: a Pocket export is a clean, well-structured file, but it's a *list*, and the quirks above all stem from that. Knowing them up front means you read a half-imported library as "that's the tags delimiter" instead of "the importer is broken."

## How do you actually use a Pocket export file?

The right move is to **import the file into a read-it-later or bookmark tool that re-saves each link and rebuilds the reading view from the live page — and to do it while the articles are still online.** Because the export carries URLs rather than cached content, the value you recover depends on those URLs still resolving. Every month you wait, more of them rot. So the practical sequence is short:

1. **Locate every file.** Check your Downloads folder and old emails for the export. If it's a ZIP, unzip it; if it's split into numbered CSVs, gather all of them. Pocket's data was permanently deleted on November 12, 2025, so this file is the only copy that exists — back it up before you do anything else.
2. **Peek inside (optional).** Open one CSV in a spreadsheet to confirm the columns and see roughly how many rows you're dealing with. Close it without saving.
3. **Pick a destination and import.** Open your new tool's import screen and add the file — every part, if it's split. The tool reads your list of links and re-saves them; it then fetches each page from the live web to rebuild a readable view. This is also the step that turns delimited tags and Unix timestamps into something usable, depending on the tool.
4. **Spot-check and re-save the survivors.** Confirm a sample of saves came across. Any link that 404s is gone from the live web, not just your library — if it mattered, hunt down an archived copy and re-save it now.

The full step-by-step, including choosing where to land and rebuilding your saving habit, lives in [how to export and migrate your Pocket data](/blog/how-to-export-migrate-pocket-data). If you're still deciding between destinations, it's worth weighing [the best read-it-later apps overall](/blog/best-read-it-later-apps-2026) and, if Instapaper is on your shortlist, the [Instapaper alternatives](/blog/instapaper-alternatives-2026) roundup.

## What's in the export vs what's NOT?

When you set expectations correctly, an import never disappoints you. Here's the clean line between what the file carries and what it leaves behind:

| In the export | Not in the export |
|---|---|
| Saved URLs (your links) | Full article text / Pocket's cached reading view |
| Page titles | Reliable highlights and annotations |
| Tags (delimited in one field) | Folder/visual layout from the Pocket app |
| Time added (Unix timestamp) | Live, working copies of pages that have since gone offline |
| Read/archive status | Anything you saved *after* the export was taken |

The column on the left is genuinely the part worth keeping — it's the map of everything you cared enough to save. The column on the right is the reason you import sooner rather than later: the readable content isn't *in* the file, so it has to be rebuilt from URLs that are still aging out on the live web.

## Turn the file back into a searchable library

Decoding the export is step one; the bigger opportunity is fixing the thing Pocket never solved. Most people saved far more than they ever found again, because keyword search and folders don't scale past a few hundred items — and a CSV of links does nothing to change that on its own.

That's the angle [Marqly](https://app.marqly.com) is built on. Import your saved links and it re-saves them into a library you can search **by meaning** — you describe what you remember ("the piece about deep work dying") and it surfaces the save even if you've forgotten the title. It runs on web, iOS, and Chrome, so saving stays one tap once your history is in. (For a closer look at how it compares to Pocket specifically, see [Pocket vs Marqly](/compare/marqly-vs-pocket).)

A realistic expectation, since this whole guide is about setting them: no tool can resurrect the article text that was never in your export, and how cleanly tags and dates land depends on the file and the importer. What you're recovering is the *list* of what you saved — and with semantic search on top, that list finally becomes something you can actually use.

[Try Marqly free →](https://app.marqly.com)
