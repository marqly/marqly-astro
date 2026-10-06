---
title: "How to Export Your Pinterest Boards in 2026 (Request Your Data, Step by Step)"
seoTitle: "Export Pinterest Boards in 2026 — Marqly"
description: "Pinterest has no board export or CSV. Request your data in Settings, get the HTML archive 48 hours later, and turn boards into searchable links."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export pinterest boards"
tags:
  - "export pinterest boards"
  - "pinterest data download"
  - "pinterest pins backup"
  - "export pinterest pins"
  - "pinterest export csv"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "Is there a way to export a Pinterest board?"
    a: "Not on the board itself. There is no export button, no share-as-file option, and no CSV of a board's pins. The only official bulk route is the account-wide data request under Settings, which returns an archive covering your boards and pins rather than one file per board."
  - q: "What format is Pinterest's data download?"
    a: "Pinterest emails you a link to download your data after you request it under Privacy and data; the request can take up to 48 hours to prepare. The archive presents your content as pages you can browse, not a clean spreadsheet — plan on some conversion work if you want a machine-readable list."
  - q: "Does the export include the images themselves?"
    a: "A pin is fundamentally a link to someone else's page, so the export centers on your pins and boards and their destinations. Do not assume you are getting full-resolution image files of every pin; check what your archive actually contains before treating it as a media backup."
  - q: "Why does my Pinterest email link stop working?"
    a: "The download link in Pinterest's email is time-limited, so grab the archive as soon as it arrives instead of leaving it in your inbox. If the link lapses you have to file a fresh request and wait out the processing window again."
  - q: "Can I import my Pinterest export into Marqly?"
    a: "Not directly. Pinterest's archive is not a bookmarks file, and Marqly imports browser bookmark HTML, Pocket exports, and generic CSV — not arbitrary platform exports. Convert the pins you care about into a CSV with a URL column (or re-save them through the browser), and note that imports take the import date rather than your original save dates."
---

Pinterest lets you save thousands of pins and gives you one way out: an account-wide data request buried in privacy settings. Boards have no export button, there is no official CSV, and the archive you get back is a browse-your-content export, not a database dump. Here is the exact request path, what lands in the archive, and how to turn boards into links you can actually search.

## Why boards need an escape hatch

A Pinterest account accumulates faster than any other saves surface — saving is the entire interface. The failure modes:

- **Boards are grids of links you cannot query.** No text search across a board's destinations, no sorting by anything useful. Ten years of "wallpaper" and "workflow" boards age into archives nobody opens.
- **The pin is a pointer.** Behind almost every pin is a URL on someone else's site. When that site dies or restructures, the pin still shows you a thumbnail of a page that no longer exists. A backup that preserves the image but loses the working link is half a backup.
- **It does not travel.** Pinterest keeps its own copy of everything you know; nothing about your boards shows up alongside your [Pocket migrations](/migrate/pocket), your browser bookmarks, or your reading queue. The same platform-silo problem as [Reddit saved posts](/blog/export-reddit-saved-posts), with more thumbnails.

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
      <td>Settings → Privacy and data → Request your data</td>
      <td>Archive of your account content, boards and pins inside it</td>
      <td>Downloadable archive via emailed link</td>
      <td>Up to 48 hours to prepare; link expires</td>
      <td>Not a CSV; per-board structure not guaranteed</td>
    </tr>
    <tr>
      <td>Per-pin: copy link while browsing a board</td>
      <td>The destination URL of one pin</td>
      <td>Text</td>
      <td>Manual, one at a time</td>
      <td>Only realistic for small, high-value boards</td>
    </tr>
    <tr>
      <td>Unofficial board-export tools and extensions</td>
      <td>Usually a scraped CSV or image dump</td>
      <td>Varies</td>
      <td>None documented by Pinterest</td>
      <td>Unofficial, break often, and can endanger your account</td>
    </tr>
    <tr>
      <td>Print-style screenshot of a board</td>
      <td>Visual snapshot</td>
      <td>Image</td>
      <td>Manual</td>
      <td>Zero links, zero search; moodboard reference only</td>
    </tr>
  </tbody>
</table>

## Step 1: file the data request

Pinterest documents both paths on its help article, "Download your Pinterest data" (as of Oct 5, 2026, per https://help.pinterest.com/en/article/download-your-pinterest-data).

On the web:

1. Log in at pinterest.com.
2. Click the **more-options icon** at the bottom left of the screen.
3. Select **Settings**, then **Privacy and data**.
4. Under **Request your data**, click **Start request**.

In the mobile app:

1. Tap your **profile picture** (bottom right), then tap your profile photo again (top left) to reach settings. Business accounts use the **ellipsis icon** at top right instead, then Settings.
2. Tap **Privacy and data**, then **Request your data**.
3. Tap **Start request**.

Pinterest states the download link arrives by email within **up to 48 hours**, delivered through its third-party provider SendSafely. The article frames this as your access right: only the verified account holder can receive the data.

## Step 2: download the archive immediately

The emailed link is time-limited — download the file the day it lands and store it somewhere permanent. A lapsed link means a new request and another processing window. If nothing arrives after two days, search your mailbox for the sender before re-filing; spam filters eat transactional mail.

## Step 3: find your boards inside

Unzip and open the archive's index in a browser. Your content is organized around your account's activity — expect pages or files covering your boards and your saved pins rather than one clean file per board.

<!-- VERIFY: the exact file names and structure inside a current Pinterest data download (historically things like boards and pins pages, format and naming have shifted). Confirm against a fresh archive before publication, and adjust Step 3's wording to name real files if you can get one. -->

Pinterest's own privacy policy describes the underlying right — you can "request access to the information we collect and hold about you in a portable format," with mechanics pointing at the help article above (as of Oct 5, 2026, per https://policy.pinterest.com/en/privacy-policy). What "portable" means in practice: pages and lists you can open, not a spreadsheet you can pipe anywhere. For the general shape of these platform archives, the [Pinterest help center](https://help.pinterest.com/en) links the same request from several settings paths.

## What the file actually contains

The useful core of a Pinterest export is a mapping: your boards, the pins attached to them, and — critically — the **destination URL behind each pin**. A pin's destination is the thing worth keeping: the recipe page, the product, the tutorial. What you generally do not get in clean form:

- **Original media at full resolution.** Pins reference other people's images on other people's sites.
- **Your notes.** Pinterest does not have a field for why you saved something, because the save flow never asked.
- **A guaranteed per-board file.** Organizing by board after the fact means parsing what you got.

And the rot rule: destination links age. The archive freezes URLs as of request day; sites move, shops delist, blogs go dark. An export ordered the year you started worrying is worth more than one ordered the year the link matters.

## Turn pins into a library

**The conversion path (technical).** A script or an AI assistant shown the archive can flatten boards + pin titles + destination URLs into a simple CSV with a URL column. Marqly accepts generic CSV imports alongside browser bookmark HTML (Chrome/Edge/Firefox/Safari), Raindrop HTML, and Pocket exports — `.html`, `.htm`, or `.csv` files up to 10 MB on the free plan, 30 MB on Pro, 10,000 bookmarks per file. On import, pages are fetched and indexed, so pins whose destinations still resolve come back as titled, searchable entries. Raindrop users migrating over can export **HTML** (its JSON export is not accepted) — see the [Raindrop alternative page](/alternatives/raindrop) for the wider trade-off. Two plain limits: your Pinterest save dates are not carried through import — everything takes the import date — and auto-tagging imported items is a Pro feature; the free plan keeps the tags you write into the file yourself. Sanity-check a converted file in the [bookmark file viewer](/tools/bookmark-file-viewer) before a big import.

**The triage path (most people).** Board histories are 80% decorative duplicates. Open the archive board by board, and re-save the handful of destinations you would miss through the browser with the [Marqly extension](/bookmark-manager-for-chrome) — one click per keeper, with a tag and a sentence of context. Slower per item, better per life. This is the same advice as for [Instagram saves](/blog/export-instagram-saved-posts), and it doubles as the cleanup.

**The moodboard path.** If your boards are visual — interiors, outfits, colorways — links alone will not do the job. The export becomes a checklist, and the rebuild goes into a [swipe file](/swipe-file) where each reference carries the source link plus your own note. For annotation on the pages you land on from old pins, the [web highlighter](/web-highlighter) keeps the highlight with the link.

## When NOT to use Marqly

- **You want the images, not the links.** If a board's value is the picture grid itself (moodboards, inspiration sets), a visual reference tool or plain folders of files suit better; Marqly is a links-and-pages library.
- **Everything stays inside Pinterest's discovery loop.** Boards feed Pinterest's own recommendations — pinning, related pins, the home feed. Exporting to a neutral manager leaves that flywheel. If discovery is the point, keep working in-app and export only for safekeeping.
- **You need archival fidelity.** For a legal-grade or complete personal record, Pinterest's raw archive is the artifact; a converted, triaged library is a different object with different strengths.

## FAQ

**Is there a way to export a Pinterest board?**
No per-board export button and no CSV. The only official bulk route is Settings → Privacy and data → Request your data, which covers the whole account (as of Oct 5, 2026, per https://help.pinterest.com/en/article/download-your-pinterest-data).

**What format is Pinterest's data download?**
An archive delivered through an emailed link, prepared in up to 48 hours via SendSafely. Treat it as input for conversion, not as a spreadsheet.

**Does the export include the images themselves?**
Pins are links to other sites' content; the archive centers on your boards and pins and their destinations. Do not assume full-resolution media; check your actual archive before calling it a media backup.

**Why does my download link stop working?**
It expires by design. Download the day it arrives; a lapsed link means re-requesting and re-waiting.

**Can I import the Pinterest export into Marqly?**
Only after conversion or curation: Marqly ingests browser bookmark HTML, Pocket exports, Raindrop HTML, and generic CSV — not Pinterest's archive as-is. Imports take the import date rather than your save dates, and auto-tagging imports is Pro.

## Quick recap

1. **Settings → Privacy and data → Request your data → Start request** (web or app; business accounts reach settings via the ellipsis).
2. **Download within the emailed window** — up to 48 hours to arrive, and the link itself expires.
3. The archive gives you **boards, pins, and destination URLs** — not a CSV, not guaranteed media files.
4. **Convert or triage**: flatten keepers to a URL list and build a searchable library — like [Marqly](https://app.marqly.com) — where old pins describe themselves on recall instead of hiding behind thumbnails.

File the request now even if processing waits. Every month of dead destination links is a month of boards quietly shrinking.
