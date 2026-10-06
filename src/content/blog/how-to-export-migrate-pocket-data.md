---
title: "How to Export and Migrate Your Pocket Data in 2026 (Step-by-Step)"
seoTitle: "How to Export & Migrate Your Pocket Data (2026 Guide) — Marqly"
description: "Pocket shut down and your saves are at risk. Here's exactly how to export your Pocket data and migrate it to a new app in minutes — step by step."
updatedDate: 2026-10-06
pubDate: 2026-05-08
category: "Guides"
targetKeyword: "export pocket data"
tags:
  - "migrate from pocket"
  - "pocket export"
  - "import pocket bookmarks"
  - "pocket shutdown what to do"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Get started free"
faqs:
  - q: "Can I still export data directly from Pocket today?"
    a: "No. Pocket officially shut down on July 8, 2025, and Mozilla closed the export window on November 12, 2025, with remaining data queued for deletion. This guide helps users who downloaded their export archive containing list.csv migrate their saves into Marqly, or recover saves synced to browser bookmarks."
  - q: "Will I lose my tags when I migrate from Pocket?"
    a: "No. The Pocket export includes tags, and good importers preserve them. Marqly maps them automatically, so your saves appear with titles and tags intact. Import time depends on file size and processing; keep your original archive and check the imported save count."
  - q: "Do I need a credit card to migrate my Pocket library?"
    a: "Not with tools that offer a free tier or a no-card trial. Marqly offers a free account for up to 100 saves with keyword search. Semantic search, summaries and automatic tagging on import require Pro; check your library size and plan before importing."
  - q: "What if I missed the Pocket export deadline?"
    a: "If you missed the November 12, 2025 deadline, Mozilla's servers can no longer generate an export. However, if you had Pocket synced with Firefox or exported browser bookmarks previously, you can import that browser HTML file directly into Marqly."
heroImage: ../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "How to Export and Migrate Your Pocket Data in 2026 (Step-by-Step) — illustration"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
---

Mozilla officially shut down Pocket on July 8, 2025, and closed its export window on November 12, 2025. If you downloaded your export file before the servers went offline, your saves are safe — you just need a modern home for them. This guide walks you through migrating your Pocket archive into Marqly, with keyword search on Free and semantic search on Pro.

## Step 1: Locate your Pocket export archive

Because Mozilla's export endpoint is closed, you will use the backup file you previously downloaded:

1. Look in your **Downloads** or **Documents** folder for `ril_export.html`, `pocket-export.html`, or a `pocket-export.zip` archive.
2. If you have a ZIP archive, unzip it — inside you will find your Pocket saves in HTML or CSV format.
3. If you never downloaded your Pocket archive before November 12, 2025, check if your Pocket saves were synced to your browser bookmarks (e.g., Firefox). You can export your browser bookmarks as an HTML file and import that instead.

> **Privacy note:** Your Pocket file is processed securely. You can also inspect or convert it offline using our free browser utility: the [Pocket Export Converter](/tools/pocket-export-converter).

Pocket’s historical HTML preview is a plain list rather than browser bookmark HTML. Use list.csv for Marqly, or convert the preview before using a browser HTML importer. If you're curious exactly [what's inside the Pocket export file](/blog/what-is-in-your-pocket-export-file) — and what it leaves behind — it's worth a quick read before you import.

## Step 2: Choose where to migrate

Your export is portable, so the real question is *where* it should live. The three most common destinations for Pocket refugees in 2026:

- **Marqly** — if you want your library to become searchable by meaning (Pro AI search), with Pro auto-tagging and summaries. Imports your Pocket file with tags intact. (See exactly how it stacks up in [Pocket vs Marqly](/compare/marqly-vs-pocket).)
- **Raindrop.io** — if you want a free, general-purpose bookmark manager.
- **Instapaper** — if you simply want [a read-it-later app](/blog/best-read-it-later-apps-2026) with minimalist, no-frills reading.

(For a full breakdown, see [The 8 Best Pocket Alternatives in 2026](/blog/best-pocket-alternatives-2026).)

## Step 3: Import your library

A note on formats, because it trips people up: Pocket's `ril_export.html` is a plain `<ul>` list, not the standard browser-bookmark format, so most importers — **Marqly included** — cannot read it. The reliable file is `list.csv` inside the export archive — we [measured a genuine 261-item Pocket HTML export against our importer and it parses to zero saves](/research/bookmark-import-fidelity). If you grabbed a CSV (or the ZIP), you're set; if all you have is the HTML, convert or inspect it first with our free [Pocket Export Converter](/tools/pocket-export-converter) and [Bookmark File Viewer](/tools/bookmark-file-viewer). For a detailed walkthrough with troubleshooting, follow our [Pocket to Marqly Migration Guide](/migrate/pocket) or visit our [Migration Center](/migrate).

In **Marqly**, for example:

1. Create a free account.
2. During onboarding (or in Settings → Import), choose **Import bookmarks**.
3. Open the Pocket export ZIP and drag the `list.csv` file into the importer (not the `.html` preview — Marqly reads the CSV).
4. Your saves appear — titles and tags preserved — with keyword search on Free and semantic search on Pro. (Auto-tagging on import is a Pro feature; on the free plan your links still import with any tags the file carries.)

Import time depends on file size and processing; keep your original archive and check the imported save count.

## Step 4: Reconnect your saving habit

The export gets your *history* across. Now rebuild the *habit*:

- **Install the browser extension** so saving is one click, like Pocket's button.
- **Add the mobile app** so you can save from your phone's share sheet.
- **Set up any integrations** (some tools support Raycast, iOS Shortcuts, etc.).

Within a day, saving feels exactly like it did with Pocket — except now everything is searchable.

## The upgrade most people miss

Migrating is a chance to fix the thing Pocket never solved: **most of us save far more than we ever find again.** Folders and keyword search don't scale past a few hundred items.

When you move your library, consider landing it somewhere with **semantic search** — where you can type what you *remember* ("the piece about remote work and trust") and get the article back even if you've forgotten its title. That's the core of what [Marqly](https://app.marqly.com/lp/replace-pocket) does: import your Pocket history, then actually find any of it again. See our full [Pocket vs Marqly comparison](/compare/marqly-vs-pocket) for the side-by-side details. Get started free with up to 100 saves; semantic search requires Pro.

---

*Tip: whichever tool you pick, keep your original Pocket export archive, including `list.csv`, backed up. It's your portable, vendor-independent copy — the whole point of the Pocket lesson.*

Source: [Mozilla’s Pocket closure notice](https://support.mozilla.org/en-US/kb/future-of-pocket), checked October 6, 2026. Export access ended November 12, 2025; Mozilla says deletion began then.
