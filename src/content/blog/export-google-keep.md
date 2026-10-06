---
title: "How to Export Your Google Keep Notes in 2026 (Google Takeout, Step by Step)"
seoTitle: "Export Google Keep Notes in 2026 (Takeout) — Marqly"
description: "Google Keep exports via Takeout as text, HTML, or CSV. Here is the request path, what each format contains, and how to turn notes into importable links."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export google keep notes"
tags:
  - "export google keep notes"
  - "google takeout keep"
  - "keep notes csv"
  - "backup google keep"
  - "keep to bookmarks"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "How do I export all my Google Keep notes?"
    a: "There is no export button inside Keep itself. You use Google Takeout (takeout.google.com): sign in, deselect everything, enable only Google Keep, and create the export. Google's Keep help article confirms the download includes your note content, attachments, colors, pinned and archived state, collaborators, and your label list."
  - q: "What file format does Takeout produce for Keep?"
    a: "Takeout builds a ZIP (or TGZ) archive, and its interface offers format choices per product. For Keep, exports have historically produced per-note text and HTML files plus label data, with CSV offered among the options — check the format selection next to Google Keep when you build the archive. Google's own guidance says HTML opens in any browser and CSV opens in standard text and spreadsheet tools."
  - q: "Does the Keep export include images and voice recordings?"
    a: "Yes. Google's help page lists note attachments — voice recordings, drawings, and images — as part of the download, alongside text and list items. They come as files inside the archive referenced by your notes, not inside a flat text version of the note."
  - q: "How long do I have to download the Takeout archive?"
    a: "Google says the archive expires in about 7 days and can be downloaded at most 5 times, and re-requesting is the remedy after expiry. Preparation itself ranges from a few minutes to a few days depending on account size — most people get the link the same day."
  - q: "Can I import Google Keep notes into a bookmark manager?"
    a: "Not directly — Keep exports notes, not bookmarks, and Marqly imports browser bookmark HTML, Raindrop HTML and Pocket’s list.csv, and generic CSV. The workable bridge is extracting the URLs your notes contain into a CSV with a URL column (or a bookmarks HTML file) and importing that; note that imports do not preserve original dates and that auto-tagging imports is a Pro feature."
---

Google Keep exports only through **Google Takeout**: sign in at takeout.google.com, select just Google Keep, and Google builds a ZIP of your notes. Keep's official help page confirms the archive includes note text and list items, attachments, colors, pinned and archived state, collaborators, and your labels (as of Oct 5, 2026, per https://support.google.com/keep/answer/10017039). What it does not give you is a bookmarks file — most people's Keep is a pile of links in disguise, and getting them out and searchable takes one more step. This guide covers the request, the formats, and the conversion.

## Why Keep exports are worth doing early

Keep is the world's most forgiving scratchpad, which is exactly the problem:

- **It accumulates everything.** Links from the [Keep Chrome extension](https://support.google.com/keep/answer/3003125), half-finished shopping lists, a URL pasted mid-meeting three years ago. None of it is organized because it never had to be.
- **Search is keyword-bound.** Keep searches text you wrote, not meaning you remember. (For contrast: in Marqly you can [describe what you forgot](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) and it matches on content — the difference becomes obvious once you own a five-year Keep archive.)
- **Notes are not bookmarks.** A note containing `https://example.com/great-article` is one person's memory of a link. A bookmark is a link with a title, fetched while the page is alive. Your Takeout has the first kind; you want the second.

## Your export routes at a glance

<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>What you get</th>
      <th>File format</th>
      <th>Limits</th>
      <th>Gotcha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Google Takeout → Google Keep (single-product export)</td>
      <td>All notes, lists, attachments, labels, colors, pinned/archived state</td>
      <td>ZIP archive; per-note text/HTML files, with format options including CSV</td>
      <td>Link expires ~7 days, 5 downloads max; archives split at your chosen size cap</td>
      <td>Not a bookmarks file; links live inside note bodies as plain text</td>
    </tr>
    <tr>
      <td>Takeout scheduled export</td>
      <td>Same archive, refreshed every 2 months for a year</td>
      <td>Same</td>
      <td>First archive immediately</td>
      <td>Good habit for Keep-as-inbox people; still needs conversion to be usable</td>
    </tr>
    <tr>
      <td>Per-note: Send to another app / copy link</td>
      <td>One note's content into Docs, Gmail, or wherever</td>
      <td>Depends on destination</td>
      <td>Manual, one note at a time</td>
      <td>Official Keep feature; fine for a handful, hopeless for thousands</td>
    </tr>
    <tr>
      <td>Re-save the keepers with your browser instead</td>
      <td>Live, titled bookmarks</td>
      <td>Your manager's format</td>
      <td>Curation speed</td>
      <td>Best long-term habit; see the bridge section below</td>
    </tr>
  </tbody>
</table>

## Step 1: build the export

Google's canonical Takeout instructions: "How to download your Google data" (as of Oct 5, 2026, per https://support.google.com/accounts/answer/3024190).

1. Go to **https://takeout.google.com** and sign in.
2. Click **Deselect all**, then scroll and enable **only Google Keep**.
3. If Keep shows an **All data included** button, open it and keep everything (labels travel with the archive — Keep's help confirms the label list is part of the download).
4. Click **Next step**.
5. Choose a **delivery method** — email link, or straight to Drive, Dropbox, OneDrive, or Box.
6. Pick **Export type** (one-time, or scheduled every 2 months for a year), file type (**ZIP** is the safe default), and an archive-size split limit.
7. **Create export**, then download from the emailed link. Two numbers to remember from Google's own doc: the archive **expires in about 7 days**, and it can be downloaded **at most 5 times**.

Advanced-Protection accounts get the archive on a two-day delay; work/school accounts may have admin-restricted downloads. Expect same-day links for a Keep-only export.

## Step 2: open the archive and see what you actually got

Inside the ZIP you will find a **Google Keep** folder, typically organized as one file per note in plain text and/or HTML, plus your attachments as media files. Google's help page is explicit about coverage (as of Oct 5, 2026, per https://support.google.com/keep/answer/10017039):

- note content — **text and list items** (checkboxes come through as lines)
- **attachments** — voice recordings, drawings, images
- note **color**
- note **state** — pinned and archived
- note **collaborators**
- the user's **list of note labels**

The archive root also carries an `archive_browser.html` entry point — Google recommends it for orienting yourself, and notes that HTML opens in any browser while CSV/JSON open in standard text tools (as of Oct 5, 2026, per https://support.google.com/accounts/answer/3024190).

What the archive is *not*: structured link data. URLs live inside note bodies as loose text, titles are whatever you typed, and the whole thing is shaped like a notebook, not a library. Deleted notes are excluded (Google removes deleted data from archives), so — as with every export in this cluster — request sooner; the archive reflects what still exists.

## Step 3: turn notes into importable links

The goal is a file Marqly can ingest: browser bookmark HTML or a **generic CSV with a URL column**. Two routes:

**Bulk conversion (most archives).** Give a script — or an AI assistant pasted with the folder contents — one job: extract every URL from your notes, one row per link, carrying the note title as the bookmark title and, if you want, the note's labels as a tags column. Then import: Marqly accepts browser bookmark HTML (Chrome/Edge/Firefox/Safari), Pocket’s list.csv, Raindrop **HTML** (its JSON is not accepted), and generic CSV — `.html`, `.htm`, or `.csv`, up to 10 MB on the free plan, 30 MB on Pro, 10,000 bookmarks per file. Imported links are fetched and indexed, so titles and content come from the live pages. Say the limits honestly: **Keep note timestamps do not survive the import** — items land stamped with the import date (and Takeout itself doesn't hand you a clean per-note date column — keep the original ZIP if chronology matters) — and **auto-tagging of imports is a Pro feature**; on the free plan, your notes' labels only carry over if your converter writes them into the file. Preview the converted CSV/HTML with the [bookmark file viewer](/tools/bookmark-file-viewer) before the real import, and skim the [Pocket export guide](/blog/what-is-in-your-pocket-export-file) for what a well-formed link file looks like.

**Curated re-save (small archives).** If your Keep is under a hundred notes with links, skip conversion: open the archive, and when a keeper surfaces, save the page properly with the [Marqly web clipper in Chrome](/bookmark-manager-for-chrome) — one click, with a tag and a note about why. Curation is the value here; you are not migrating, you are harvesting.

Then stop feeding both systems the same way. Keep stays the scratchpad — bullets, shopping lists, the note you dictate on the sidewalk (it is excellent at that, and Marqly is not trying to replace it). Anything that is *a page you want back* goes to the link library instead, where [searching by meaning](/blog/how-to-search-bookmarks-with-ai) works years later. For a [student's](/for-students) pile of "read this later" pastes or a [researcher's](/for-researchers) source links, that split is the difference between a notebook and a corpus.

## When NOT to use Marqly

- **Your Keep is genuinely notes, not links.** Prose journals, recipes you typed yourself, checklist trees — those belong in a notes tool (Keep included). Marqly is a link library; a linkless import gains nothing.
- **You want full-offline copies.** Import indexes live pages; if a URL must survive site death, keep the Takeout archive (or an archived copy of the page) as the primary and the bookmark as the pointer.
- **Collaboration and reminders matter.** Note collaborators, sharing, and reminders are Keep features; none of them migrate into a bookmark manager. Stay in Google for the parts that are actually notebooks.

## FAQ

**How do I export all my Google Keep notes?**
Takeout: takeout.google.com → Deselect all → enable Google Keep → create export. Keep's help page lists exactly what ships: text, list items, attachments, colors, pinned/archived state, collaborators, labels (as of Oct 5, 2026, per https://support.google.com/keep/answer/10017039).

**What format do I get?**
A ZIP of per-note files (text and HTML historically, with format options — verify the CSV offering in the current UI). Archive links expire in ~7 days with a 5-download cap (as of Oct 5, 2026, per https://support.google.com/accounts/answer/3024190).

**Are images and voice notes included?**
Yes — Keep's official export includes attachments: voice recordings, drawings, images — as files referenced by your notes.

**How do I get just the links out?**
Regex-extract every URL from the note files (a script or an AI assistant does it in one pass), keep note titles, write a CSV with a URL column, import. Single notes can also go app-to-app via Keep's own [Send to another app](https://support.google.com/keep/answer/6320648) feature.

**Will imported Keep links keep their labels and dates?**
Neither, by default: import stamps items with the import date, labels only survive if your conversion writes them in, and auto-tagging imports is a Pro feature. The free plan keeps the tags you bring.

## Quick recap

1. **takeout.google.com → only Google Keep → create export**; download within ~7 days, max 5 times.
2. The ZIP is a **notebook** — per-note text/HTML, attachments, labels — not a bookmarks file.
3. **Extract URLs → CSV (URL + title)** → import into Marqly (10 MB free / 30 MB Pro, 10k links per file), accepting no-date-preservation and Pro-only auto-tagging up front.
4. Split going forward: Keep for notes, a searchable link library — like [Marqly](https://app.marqly.com) — for pages.
