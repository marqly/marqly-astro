---
title: "How to Export Your Reddit Saved Posts in 2026 (Data Request, Step by Step)"
seoTitle: "How to Export Reddit Saved Posts in 2026 — Marqly"
description: "Export Reddit saved posts via the official data request: exact steps, what the CSV contains, the 1,000-save limit, and how to make your saves usable again."
pubDate: 2026-08-02
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Guides"
targetKeyword: "export reddit saved posts"
tags:
  - "export reddit saved posts"
  - "reddit data request"
  - "reddit saved posts limit"
  - "backup reddit saves"
  - "reddit gdpr export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
faqs:
  - q: "How do I export my saved posts from Reddit?"
    a: "Go to reddit.com/settings/data-request in a desktop browser, sign in, choose your full account history, and submit. Reddit prepares a ZIP of CSV files — including saved_posts.csv and saved_comments.csv — and sends a download link to your Reddit inbox and verified email. It's the only official export Reddit offers."
  - q: "How long does a Reddit data request take?"
    a: "Reddit states up to 30 days, but most requests finish much faster — often within hours to a few days. You can only submit one request every 30 days, so choose the full account history option rather than a narrow date range the first time."
  - q: "What's actually inside saved_posts.csv?"
    a: "Just two columns per row: a post ID and a permalink. No titles, no post text, no subreddit names, no save dates. To turn those bare links into anything browsable you need a second step — an open-source script that fetches the details, or importing the links into a bookmark manager that fetches titles and tags for you."
  - q: "Does the Reddit export include saves beyond the 1,000 limit?"
    a: "Usually, yes. Reddit's app and API only surface roughly your most recent 1,000 saves, but the data request is built from Reddit's stored records rather than the live feed, and users regularly report their full saved history in the export. It's your best — and effectively only — shot at older saves, so don't wait to request it."
---

The only official way to export your Reddit saved posts is a data request: go to **reddit.com/settings/data-request**, choose your full account history, and Reddit sends you a ZIP of CSV files — including `saved_posts.csv` — within 30 days (usually much faster). The catch: the CSV contains bare links with no titles or content, and Reddit's interface only shows your most recent ~1,000 saves. Here's the full process, the limits nobody mentions, and how to turn the export into something you can actually use.

## Why bother exporting at all

Reddit's saved list is a one-way street by design. There's no export button, no search within saves for most of the apps' history, and — the part that surprises everyone — **the interface and API only surface roughly your most recent 1,000 saved items.** Save number 1,001 doesn't delete anything, but your oldest save quietly falls off the visible list. Most long-time Redditors have years of saves they can no longer scroll back to.

The data request is the exception: it's generated from Reddit's stored records under privacy laws like GDPR and CCPA, not from the live feed, so it can reach saves the app no longer shows you. That makes it less "nice backup" and more "only remaining copy." The [Pocket shutdown](/blog/how-to-export-migrate-pocket-data) made the same point the hard way: saves that live inside a platform are only as durable as the platform's interest in keeping them.

## Step 1: Submit the data request

1. Open **reddit.com/settings/data-request** in a desktop browser and sign in. (The old-Reddit path is Settings → Privacy → Request your data.)
2. Under date range, choose the **full account history** option — not a custom range. This is what pulls in old saves, and since you only get one request per 30 days, don't waste it on a slice.
3. Select the data you want (everything is the safe default) and submit.

Anyone can request, not just EU residents — Reddit extends the mechanism to all accounts. You'll see a confirmation that the request is queued.

## Step 2: Wait, then download the ZIP

Reddit's official line is "up to 30 days." In practice most exports arrive within hours to a few days. When it's ready:

1. A message lands in your **Reddit inbox** (and your verified email, if you have one) with a download link.
2. Download the ZIP promptly and store a copy somewhere safe — treat it like the backup it is.

Remember the rate limit: **one request per 30 days.** If you realize you picked a narrow date range, you're waiting a month to fix it.

If nothing shows up after a couple of weeks, check that your account has a verified email (Settings → Account), look in your email's spam folder for a reddit.com sender, and re-check your Reddit inbox's messages tab rather than notifications. Past the 30-day mark with nothing delivered, submit the request again — the cooldown has reset by then.

## Step 3: Understand what you actually got

Unzip the file and you'll find a stack of CSVs: your posts, comments, votes, chat history — and the two you came for, `saved_posts.csv` and `saved_comments.csv`.

Open `saved_posts.csv` and temper your expectations. Each row holds exactly two things:

- a **post ID**
- a **permalink**

That's it. **No titles. No post text. No subreddit names. No dates.** Rows are ordered by post ID, not by when you saved them. Reddit's export satisfies the legal requirement — here is a record of what you saved — without being remotely browsable. A thousand rows of `https://www.reddit.com/r/.../comments/...` links tells you nothing about which one was the brilliant sourdough troubleshooting thread.

While you're in the ZIP, a few neighbors are worth keeping too: `saved_comments.csv` (same bare format, for saved comments), plus your own `posts.csv` and `comments.csv` — the only backup of things *you* wrote that exists outside Reddit. Archive the whole ZIP, not just the saves.

So the export alone isn't the finish line. You need step 4.

## Step 4: Turn bare links into a usable library

Two workable paths, depending on how technical you are:

### Option A: open-source scripts (technical)

Tools like **export-saved-reddit** and **reddit-saved-to-csv** on GitHub fetch your saves via the Reddit API and enrich them with titles, subreddits, and URLs; export-saved-reddit even outputs a standard **bookmarks HTML file** that any bookmark manager can import. Two honest caveats:

- API-based tools hit the same **~1,000-item pagination cap** as the app — they can't see your older saves. For those, the data request export is the source of truth.
- They require creating a Reddit API credential and running Python locally. Fine for developers, a wall for everyone else.

Some scripts (like reddit-stash-style tools) work the other way: they take your GDPR export's ID list and fetch details for each link, which gets you past the 1,000 cap. More setup, fuller result.

### Option B: import into a bookmark manager (everyone else)

If a script gave you a bookmarks HTML file, import it directly into a bookmark manager — Marqly ingests standard bookmark HTML the same way it handles [Chrome bookmark exports](/blog/how-to-import-chrome-bookmarks-to-ai), then fetches each page and lets AI tag and index it. Your anonymous permalinks come back to life as titled, tagged, searchable entries.

To be straight about limits: Marqly doesn't parse Reddit's raw `saved_posts.csv` directly — the bridge is a bookmarks HTML file, or saving the links you care about individually. And no importer can resurrect a save whose underlying post was deleted; a dead link is a dead link in any tool.

### Option C: the manual pass (small collections)

If your saved list is a few dozen items, skip the tooling entirely. Open your saved posts in the browser, walk the list, and one-click-save the keepers straight into your bookmark manager with its extension. Twenty minutes, no scripts, no CSV archaeology — and since you're touching each item anyway, the pruning happens for free. This is also the right fallback while you wait the days for the official export to arrive.

## Step 5: Triage, don't hoard

Before or after import, run a fast pass over the list. Years of saves means years of "I might need this" that never happened. A practical filter: if you can't remember why you saved it and the title doesn't spark anything, let it go. What survives triage is your actual reference library — usually 20–30% of the raw list — and a smaller, deliberate library beats a complete but unusable archive. (More on making a library findable in [how to organize bookmarks](/blog/how-to-organize-bookmarks).)

## Fix the habit, not just the backlog

The export solves the past. The same problem starts rebuilding the moment you hit Save on the next thread, because Reddit's save button will still be an unsearchable, capped, export-hostile list next year.

The durable pattern is two tiers:

- **Keep using Reddit's save button** as a fast inbox while you scroll.
- **Save the keepers out** the moment you recognize them. With a bookmark manager extension it's one click on the thread: Marqly saves the link, auto-tags it, and makes it findable later by describing what you remember — "that thread where a plumber explained water heater anodes" — no title, subreddit, or username required. That's semantic search doing what Reddit's saved list never could, and it's the backbone of a [second brain that actually retrieves things](/blog/how-to-build-a-second-brain).

Reddit stays your discovery feed. Your library lives somewhere with an export button.

## Quick recap

1. **reddit.com/settings/data-request** → full account history → submit.
2. **Download the ZIP** from your inbox link (up to 30 days; usually far less).
3. **Expect bare links** — `saved_posts.csv` is IDs and permalinks only.
4. **Enrich and import**: open-source script → bookmarks HTML → into a manager like [Marqly](https://app.marqly.com).
5. **Change the habit**: Reddit saves as inbox, one-click save to your own library for keepers.

Request the export today even if you won't process it this week — it's the only copy of your pre-1,000 saves that exists, and it costs you two minutes.
