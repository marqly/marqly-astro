---
title: "How to Export Your Threads Saved Posts in 2026 (Accounts Center, Step by Step)"
seoTitle: "Export Threads Saved Posts in 2026 — Marqly"
description: "Threads has no save export. Use Meta's Accounts Center data request, check what the archive actually includes, and rebuild saves as searchable links."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export threads saved posts"
tags:
  - "export threads saved posts"
  - "threads data download"
  - "threads collections export"
  - "threads backup"
  - "meta accounts center download"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "Does Threads have an export button for saved posts?"
    a: "No. The saves view (and the collections you organize them into) has no export, no 'email me this list,' and no CSV. The only official way to get your Threads data out is Meta's Download Your Information tool, shared across Instagram, Facebook, and Threads through the Accounts Center."
  - q: "How do I download my Threads data?"
    a: "In the Threads app, open Settings and tap into the Accounts Center (Threads runs on your Instagram login), then go to Your information and permissions, Download your information, choose Threads, pick a format and date range, and submit. Meta emails a download link when the archive is ready and says preparation can take up to 30 days, though narrow requests usually land far sooner."
  - q: "Are my saved posts inside the Threads download?"
    a: "Treat this as an open question and verify against your own archive. Meta's request flow covers the content Threads stores about you, but the current help documentation reachable at research time does not itemize whether other users' posts you saved — versus your own posts and replies — appear in the output. Run a request, then search the unzipped Threads folder for saves before you assume coverage."
  - q: "Will the saved-post links still work?"
    a: "Public Threads posts at threads.com generally open in a logged-out browser, so exported links stay meaningful longer than login-walled platforms. A post deleted by its author is gone from your collection and resolves to nothing in any export you made."
  - q: "Can I import saved Threads posts into Marqly?"
    a: "Only via the links. Marqly imports browser bookmark HTML and generic CSV, not Threads data files, so a conversion step (or manual re-save of keepers) sits in between. Import does not preserve original save dates — items take the import date — and auto-tagging imported items is a Pro feature."
---

Threads lets you save posts into collections and gives you no way to export them. There is no button on the saves screen and no file request. The official exit for anything Threads stores is Meta's shared Download Your Information tool, reached through the Accounts Center — the same machinery that backs [Instagram's saved-posts export](/blog/export-instagram-saved-posts). Here is the route, an honest statement of what the archive is confirmed to contain, and how to get your saved posts into something searchable.

## The state of play (and what could not be verified)

Threads is Instagram's text app — accounts are Instagram accounts, and Threads help documentation lives inside Meta's Accounts Center ecosystem. Two facts matter for any rescue plan:

1. **Saves exist but are sealed.** Threads added the ability to save posts to collections, and those collections have no export path, no email-your-list option, no API you can point at them.
2. **Meta's documentation for Threads specifically was unreachable while this guide was written.** The Threads help domain did not resolve for our researcher on Oct 5, 2026, so this guide states only what Meta's shared Accounts Center flow and Threads' own product pages support, and flags everything else for hands-on checking.

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
      <td>Accounts Center → Download your information → Threads</td>
      <td>Meta's archive of your Threads data (your posts, replies, activity)</td>
      <td>JSON or HTML, per the request choices</td>
      <td>Meta says up to 30 days; link expires after delivery</td>
      <td>Whether other users' saved posts are itemized is not confirmed in reachable docs</td>
    </tr>
    <tr>
      <td>Manual copy-link per saved post</td>
      <td>The threads.com URL of one post</td>
      <td>Text</td>
      <td>One at a time</td>
      <td>The only guaranteed way to capture today's collection contents</td>
    </tr>
    <tr>
      <td>Instagram-side request (same Accounts Center)</td>
      <td>Your Instagram archive, including saved posts</td>
      <td>JSON or HTML</td>
      <td>Same Meta machinery</td>
      <td>Threads saves are not Instagram saves — requesting Instagram covers a different collection</td>
    </tr>
    <tr>
      <td>Unofficial scrapers for threads.com</td>
      <td>Whatever they manage before they break</td>
      <td>Varies</td>
      <td>None documented</td>
      <td>Against platform terms in spirit and often in letter; account risk is yours</td>
    </tr>
  </tbody>
</table>

## Step 1: file the Accounts Center request

Threads signs you in with Instagram, and its account-level controls live in the Meta Accounts Center — the same tool documented for Instagram data downloads (as of Oct 5, 2026, per the flow described at https://help.instagram.com and executed at accountscenter.instagram.com / accountscenter.facebook.com; the Threads product overview lives at https://about.instagram.com/threads and the app itself at https://www.threads.com — "Log in with your Instagram").

1. In the Threads app: **Settings** → tap your **Accounts Center** banner (labels vary by version).
2. Open **Your information and permissions** → **Download your information**.
3. Start a new request and choose **Threads** as the product.
4. Pick **Some information** if the flow offers granular selection, and look for a saves/collections option; otherwise request the full Threads dataset.
5. Choose **JSON** if you plan to convert, **HTML** if you just want to browse.
6. Set the date range to all time, submit, and watch for the email.

Meta's stated worst case for archive preparation is up to 30 days, and — as with Instagram — the delivered download link expires after a few days, so grab the ZIP when it lands rather than letting it age in your inbox. If no email shows after a week, check the request status inside the Accounts Center itself; completed requests are listed there even when mail is lost.

## Step 2: find out what you actually got

Unzip and open the **Threads** folder. What Meta is on record about: the Threads dataset covers *your* activity — posts and replies you wrote, and the account data behind them. What is not documented in any reachable Threads help page: an itemized statement that other users' posts you saved appear, with timestamps, in a dedicated file.

So the honest instruction is: **search the archive for your saves, and do not trust this guide's silence either way.**

- Look for a folder or file named in the style of `saved` or `collections` inside the Threads directory; compare its item count against your in-app collection.
- If saves are present, each entry will most likely be a **link to the post plus a save timestamp** — Threads stores other people's content as references, not copies, the same way Instagram's `saved_posts` file works.
- If saves are absent from your archive, the copy-link method is your capture path, and filing a **data rights request** through the Accounts Center's support flow is the escalation if you need the full list under applicable privacy law.

## What the file actually contains (confirmed part)

For the parts you can count on — your own content and activity — expect structured JSON (or browsable HTML) describing Threads posts and replies with identifiers, text, timestamps, and media references. If saves are included in your archive, read them as a **link list**: public `threads.com/@user/post/...` URLs. The good news for Threads specifically: public posts generally render for logged-out visitors at threads.com, so exported links keep their meaning better than login-walled platforms — until the author deletes, at which point the link rots exactly like everyone else's.

That rot clock is the argument for acting now. Threads is young; its users delete and abandon accounts at young-platform rates.

## Turn the list into a library

**If the archive has your saves:** flatten the post links into a CSV with a URL column (a script, or an AI assistant shown the file shape, does this in minutes). Marqly's import takes generic CSV plus standard browser bookmark HTML — `.html`, `.htm`, `.csv`, up to 10 MB free / 30 MB Pro, 10,000 bookmarks per file — and fetches and indexes what it imports, so public threads.com posts come back with retrievable text. Say the limits plainly: the import **does not carry your original save dates** — everything lands with the import date — and **auto-tagging is a Pro feature**; free-plan imports keep their own tags. Check a converted file in the [bookmark file viewer](/tools/bookmark-file-viewer) before importing.

**If the archive does not (or while you wait for it):** triage by hand. Open your collections newest-first and re-save the keepers through the browser with the [Marqly extension](/bookmark-manager-for-chrome) — Chrome, Edge, Firefox, Safari, plus iOS and Android apps. Tedious for four hundred saves; but a curated two hundred with your own tags beats a complete archive you cannot search, and it is the same lesson as organizing any other backlog ([how to organize bookmarks](/blog/how-to-organize-bookmarks)).

**The habit fix:** keep saving in Threads for the feed's sake, but when a post is genuinely reference material — the thread on prompt eval, the teacher sharing a worksheet workflow — send it to a place with an export button. Threads-native text is thin metadata for any future search; add your note at save time so the thing is findable by meaning later ([find a bookmark you forgot the title of](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of)). If most of your saves are conversation, not content, the [Reddit saves guide](/blog/export-reddit-saved-posts) is the closer sibling.

## When NOT to use Marqly

- **The archive itself is the deliverable.** If you are filing for a legal hold, an account handover, or a privacy-rights record, the raw Meta archive is the artifact — do not substitute a curated library.
- **You live in the replies.** Saved *threads* (conversations you re-read in context) lose their reply-tree meaning as isolated links; keeping the collection in-app may honestly be right.
- **Media-heavy posts.** An image or video post saved as a link re-renders, but Marqly stores pages, not copies of other people's media. For anything you must keep even if the post dies, screenshot or save the file locally first.

## FAQ

**Does Threads have an export button for saved posts?**
No. Saves and collections have no export path in the app; the only official door is Meta's Download Your Information through the Accounts Center.

**How do I download my Threads data?**
Threads settings → Accounts Center → Your information and permissions → Download your information → Threads → choose format and date range. Meta quotes up to 30 days for preparation; the emailed link expires within days of delivery. (Follows the shared Meta Accounts Center flow; see the VERIFY note above for Threads-specific labels.)

**Are my saved posts inside the Threads download?**
Unconfirmed by reachable documentation — Meta's docs describe your own activity in detail and leave saves undocumented. Run the request, search the Threads folder for a saves or collections file, and compare counts to your app before trusting either outcome.

**Will the exported links still work later?**
Public threads.com posts render logged-out, so links stay readable longer than login-walled platforms — until an author deletes, at which point the link is a dead page in every copy you hold.

**Can I import saved Threads posts into Marqly?**
Convert the links to a CSV or bookmark HTML first — Marqly imports those, fetches public pages, and does not preserve original save dates. Auto-tagging imports is Pro; the free plan keeps your own tags and the cross-platform library intact ([read it later here](/read-it-later)).

## Quick recap

1. **No export on saves** — Meta's Accounts Center download is the only official route.
2. **Request Threads data now** (up to 30 days worst case; download the ZIP promptly — links expire).
3. **Verify saves inclusion against your own archive** — the docs do not settle it.
4. **Flatten keeper links to CSV/HTML** and put them where search works — like [Marqly](https://app.marqly.com) — or re-save by hand while you wait.
