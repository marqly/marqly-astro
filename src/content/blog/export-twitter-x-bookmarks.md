---
title: "How to Export Your X (Twitter) Bookmarks in 2026 (Every Route That Works)"
seoTitle: "How to Export X (Twitter) Bookmarks in 2026 — Marqly"
description: "X's official data archive doesn't include bookmarks. Here's how to actually export your X (Twitter) bookmarks in 2026 — and how to keep future saves findable."
pubDate: 2026-08-02
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
category: "Guides"
targetKeyword: "export twitter bookmarks"
tags:
  - "export twitter bookmarks"
  - "x bookmarks"
  - "twitter bookmark limit"
  - "backup twitter bookmarks"
  - "twitter data archive"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
faqs:
  - q: "Does the X (Twitter) data archive include bookmarks?"
    a: "No. The official archive you request from Settings → Your account → Download an archive of your data contains your posts, likes, DMs, and follower lists — but not your bookmarks. That's a deliberate product decision, not a bug. To export bookmarks you need a browser-based exporter tool or the paid X API."
  - q: "How many bookmarks can I actually see on X?"
    a: "In practice, roughly your most recent 800–1,000. X doesn't publish an official cap, but the bookmarks page stops loading older items around that point, and the API paginates out at a similar number. Older bookmarks aren't shown anywhere in the interface, which is exactly why exporting the ones you can still reach matters."
  - q: "Are X bookmark folders and bookmark search free?"
    a: "No. Creating bookmark folders and searching within your bookmarks both require an X Premium subscription. Free accounts get a single reverse-chronological list with no search — your only option is scrolling. Neither feature lifts the practical display ceiling on older bookmarks."
  - q: "What's the best way to keep X bookmarks searchable long-term?"
    a: "Save the ones worth keeping outside X at the moment you bookmark them. A bookmark manager like Marqly saves the link in one click from your browser, auto-tags it, and makes it findable by meaning later — so 'that thread about pricing psychology' surfaces even when you've forgotten who posted it. X stays your inbox; your library lives somewhere you control."
---

Here's the uncomfortable truth up front: **X's official data archive does not include your bookmarks.** You can download your posts, likes, DMs, and follower lists — but the bookmarks you've been piling up for years are deliberately left out. To export them in 2026, you need a browser-based exporter tool, the paid X API, or manual triage. This guide covers each route, its limits, and the one change that stops this problem from recurring.

## Why exporting X bookmarks is harder than it should be

Three platform decisions stack against you:

- **The data archive skips bookmarks.** Every other major data type is in the official export. Bookmarks aren't, and never have been.
- **There's a practical ceiling of roughly 800–1,000 visible bookmarks.** X doesn't document an official cap, but the bookmarks page stops loading older items around that point, and the API paginates out at a similar number. Bookmarks older than that are effectively unreachable — no tool can export what the platform no longer serves.
- **Folders and bookmark search are Premium-only.** Free accounts get one long reverse-chronological list with no search. Premium adds folders and a search bar, but neither brings back items that have aged past the ceiling.

The practical takeaway: export what you can still reach, and stop treating X bookmarks as long-term storage. If the Pocket shutdown taught bookmarkers anything, it's that [saves living inside someone else's platform are always at risk](/blog/how-to-export-migrate-pocket-data).

## Step 1: Request your official archive anyway (for everything except bookmarks)

Even though it won't contain bookmarks, the archive is worth having — it's the only official backup of your posts, likes, and DMs.

1. On x.com, open **Settings and privacy → Your account → Download an archive of your data**.
2. Verify your password (and 2FA if enabled).
3. Click **Request archive**. X says preparation can take 24 hours or longer; you'll get a notification and email when it's ready.
4. Download the ZIP from the same settings page. The link doesn't stay live indefinitely, so grab it promptly.

Inside you'll find your posts, likes, direct messages, follower/following lists, and ad data as JSON — and no `bookmarks.js`. That's expected. Now for the routes that actually get your bookmarks out.

## Step 2: Export with a browser extension (the route most people use)

Because there's no official export, a small ecosystem of exporter extensions exists. They all work the same way: you open your bookmarks page while logged in, the extension scrolls through it in your own browser session, and it writes what it finds to a file — usually CSV, JSON, Markdown, or a bookmarks HTML file.

The generic flow:

1. **Install an exporter extension** from the Chrome Web Store (search "export X bookmarks" — several free and paid options exist).
2. **Open x.com/i/bookmarks** in that browser, logged in to your account.
3. **Start the export** from the extension. It auto-scrolls the page, collecting each bookmarked post as it loads. A large library takes a few minutes.
4. **Download the file** and store a copy somewhere safe — this is your insurance copy.

Honest caveats before you pick one:

- **These tools scrape the page, so they break when X changes its markup.** Check the extension's last-updated date and recent reviews before trusting it.
- **They can only export what X still displays** — the ~800–1,000 most recent items. Nothing recovers bookmarks that have already aged off the list.
- **Read the permissions.** An exporter needs access to x.com; it does not need access to every site you visit. Be picky.
- **Export the text, not the experience.** You get each post's text, author, and link. Threads, images, and videos are usually just links back to X — if the post gets deleted, the link dies with it.

There are also X-specific bookmark manager services (Dewey and Tweetsmash are the established names) that sync your bookmarks continuously and offer CSV or Markdown export. They're solid if X bookmarks are your main library, but they're paid, and they inherit the same visibility ceiling as everyone else.

### Which export format should you pick?

If the tool offers a choice, grab **two formats**: a **bookmarks HTML file** if it's offered (that's the one bookmark managers import directly — it's the same standard format browsers export), and **CSV or JSON** as your raw archive, since they preserve the most fields (post text, author, date, link). Markdown is pleasant for pasting into notes apps but the worst starting point for importing anywhere. Disk space is free; export once in both and you never have to redo the scroll.

## Step 3: The X API route (developers only)

X's API v2 has a bookmarks endpoint, but it sits behind the paid developer tiers, and pagination runs dry at roughly 800 bookmarks per user. Unless you already have paid API access and enjoy writing pagination loops, this route costs more effort and money than an extension for the same result. It exists; you almost certainly don't need it.

## Step 4: Manual triage (small libraries only)

If you have fewer than ~100 bookmarks, skip the tooling. Open x.com/i/bookmarks, scroll, and save the keepers directly into whatever manager you use going forward — one click each with a browser extension. Tedious past a hundred items, but it doubles as a purge: most people find half their bookmarks no longer matter.

## Doesn't X Premium fix this?

Partially, and only inside the walls. Premium adds bookmark **folders** and a **search bar** on the bookmarks page — genuinely useful for the saves you can still see. But it changes nothing about the underlying problem: the display ceiling stays, folders don't restore items that already aged off, and there's still no export button at any subscription tier. Premium reorganizes your recent bookmarks; it doesn't give you ownership of them. Paying for organization inside a platform that won't let the data out is treating the symptom.

## Step 5: Put the export somewhere useful

A CSV in your Downloads folder is a backup, not a library. You won't open it, and you can't search it from your browser. Two options:

- **Keep the raw file as an archive.** Fine as insurance — the same logic as keeping your Pocket export file.
- **Import it into a real bookmark manager.** If your exporter can output a standard bookmarks **HTML** file, tools like Marqly import it directly — the same importer that handles [Chrome bookmark exports](/blog/how-to-import-chrome-bookmarks-to-ai). Your saved posts become searchable entries with AI-generated tags instead of rows in a spreadsheet.

One honesty note: Marqly doesn't have a native "connect your X account" import. The bridge is a bookmarks HTML file from your exporter, or saving links individually. Which brings us to the fix that actually matters.

## The durable fix: stop letting X hold your only copy

Every export route above is a workaround for the same design: X bookmarks are built for scrolling back to something from last week, not for keeping a reference library. The ceiling, the missing export, the Premium-gated search — none of that is changing in your favor.

The pattern that works long-term is a two-tier system:

1. **Keep bookmarking on X freely.** It's the fastest way to flag something mid-scroll. Treat it as an inbox.
2. **Save the keepers out immediately.** When a thread is genuinely worth keeping, save its link to your bookmark manager in the same moment — with Marqly's extension that's one click on the page, no filing decision required. AI tags it automatically, and semantic search finds it later by meaning: type "that thread about pricing psychology" and it surfaces, even though you've long forgotten who posted it. That retrieval-by-description approach is the core of why [folder-based organizing doesn't survive contact with real saving volume](/blog/stop-organizing-bookmarks-folders-obsolete).

The inbox stays disposable; the library becomes permanent, searchable, and platform-independent. If X changes its limits again — and its bookmark policy has only tightened over time — you lose nothing that mattered.

## Quick recap

1. **Request the official archive** for posts, likes, and DMs — accept that bookmarks aren't in it.
2. **Export bookmarks with a browser extension** while X still displays them; store the file safely.
3. **Skip the API route** unless you're already a paying developer.
4. **Import the export into a bookmark manager** (via bookmarks HTML) instead of leaving it as a dead CSV.
5. **Change the habit**: X for scrolling, [Marqly](https://app.marqly.com) for keeping. One click per keeper, searchable forever.

Your bookmarks outlived your interest in most of them. Make sure the good ones outlive the platform's patience too.
