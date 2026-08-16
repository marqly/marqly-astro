---
title: "How to Export Your Instagram Saved Posts in 2026 (Download Your Information, Step by Step)"
seoTitle: "How to Export Instagram Saved Posts in 2026 — Marqly"
description: "Instagram has no export button for saves. Here's the Download Your Information route, what's actually inside saved_posts.json, and how to make those saves usable."
pubDate: 2026-08-16
category: "Guides"
targetKeyword: "export instagram saved posts"
tags:
  - "export instagram saved posts"
  - "instagram download your information"
  - "saved_posts.json"
  - "backup instagram saves"
  - "instagram data export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
faqs:
  - q: "Can I export my Instagram saved posts directly from the app?"
    a: "No. There is no export button on the Saved screen and no way to email yourself a collection. The only official route is Meta's Download Your Information tool, reached through Settings → Accounts Center → Your information and permissions → Download your information. It produces an archive that includes a saved_posts file listing everything you've saved."
  - q: "Where is saved_posts.json in the Instagram archive?"
    a: "Inside the ZIP, under your Instagram activity, in a saved folder — the file is saved_posts.json (or saved_posts.html if you chose HTML). Collections you created appear separately as saved_collections. Exact folder names have shifted between archive versions, so if you don't see it, search the unzipped folder for 'saved'."
  - q: "Does the export include the photos and videos I saved?"
    a: "No. Saved posts belong to other accounts, so the archive stores a link and a timestamp for each one rather than the media. The photos and videos in your archive are the ones you posted yourself. If a saved post is later deleted or its account goes private, the link in your export stops working and nothing brings it back."
  - q: "How long does an Instagram data download take?"
    a: "Meta says up to 30 days, but a Saved-only request usually arrives within hours to a couple of days. You get an email with a download link when it's ready, and the link expires after a few days — so download the ZIP promptly rather than leaving it in your inbox."
  - q: "Should I pick JSON or HTML?"
    a: "HTML if you just want to click through your saves in a browser; JSON if you plan to convert the list into something else, like a bookmarks file you can import. JSON is the more useful starting point for building a real library, since it's structured data rather than a styled page."
---

Instagram will let you save a post in one tap and will never let you take those saves anywhere. There's no export button on the Saved screen, no share-a-collection link, no CSV. The only official route out is Meta's **Download Your Information** tool — and what it hands back is a list of links and timestamps, not the posts themselves. Here's the exact path, what's really in the file, and how to turn a bare link list into something you can search.

## Why bother exporting saves you can already see

Instagram's Saved screen works fine until it doesn't. Three things go wrong as the collection grows:

- **There's no search inside your saves.** You can create collections, but you can't search them by text. Once you're past a few hundred items, finding "that pasta thing" means scrolling a grid of thumbnails.
- **Saves die quietly.** When a creator deletes a post or switches their account to private, the item vanishes from your saved grid. You will not be notified, and you won't notice until you go looking for it.
- **Everything lives inside one app.** The recipes, the design references, the gear recommendations, the apartment inspiration — none of it can be pulled into whatever else you use to think.

That last point is the [Pocket shutdown](/blog/how-to-export-migrate-pocket-data) lesson applied to a platform that's in no danger of shutting down: saves inside someone else's app are only as accessible as that app chooses to make them. Instagram chooses "barely." The same is true of [X bookmarks](/blog/export-twitter-x-bookmarks) and [Reddit saves](/blog/export-reddit-saved-posts) — this is a pattern, not a quirk.

## Step 1: Request the download

The tool moved into Meta's Accounts Center, so old instructions you'll find elsewhere are stale. The current path:

1. Open Instagram → **Settings** (or **Settings and activity**).
2. Tap **Accounts Center** at the top.
3. Go to **Your information and permissions**.
4. Tap **Download your information**, then start a new request.

You can also reach the same tool at accountscenter.instagram.com in a desktop browser, which is easier if you're going to be unzipping files anyway.

Then make three choices:

- **How much:** pick "Some of your information" and select **Saved** under your Instagram activity. Requesting everything works too, but it takes longer to prepare and produces a much larger ZIP to dig through.
- **Format:** **JSON** or **HTML**. HTML gives you a page you can click through; JSON gives you structured data you can convert. If you intend to build a real library out of this, choose JSON.
- **Date range:** all time.

Submit, and Meta emails you a download link when the archive is ready.

## Step 2: Wait for the email, then download promptly

Meta's official line is up to 30 days. In practice, a narrow request like Saved usually lands within hours to a couple of days.

The part people get burned by: **the download link expires** after a few days, and letting it lapse means starting over. When the email arrives, grab the ZIP and put it where you'd keep a tax document, not in Downloads.

If nothing shows up after a week, check spam for a Meta sender and check the request's status in Accounts Center — completed downloads are listed there even when the email goes missing.

## Step 3: Find saved_posts.json and see what you got

Unzip the archive and look under your Instagram activity for a **saved** folder. The file you came for is:

- **`saved_posts.json`** — everything you tapped Save on.
- **`saved_collections.json`** — the collections you organized saves into, if you use them.

(Chose HTML? Same names, `.html` extension. Folder names have shifted between archive versions, so if the paths don't match, just search the unzipped folder for "saved".)

Open `saved_posts.json` and temper expectations. Each entry gives you roughly:

- the **account** whose post you saved,
- a **permalink** to the post,
- a **timestamp** for when you saved it.

That's the whole record. **No caption. No image. No video. No note about why you saved it.** Which makes sense — the media belongs to other people's accounts, so Meta exports a pointer, not a copy. Your own photos and videos are elsewhere in the archive; your saves are a link list.

Two consequences worth absorbing now:

1. **A deleted post is gone.** Your export preserves the URL of something that no longer exists — an argument for exporting sooner rather than later.
2. **A link list isn't a library.** Two thousand `instagram.com/p/...` URLs with timestamps tells you nothing about which one was the sourdough method that worked.

So the export is raw material. Step 4 is where it becomes useful.

## Step 4: Turn the link list into something searchable

Three paths, depending on volume and appetite for tooling.

### Option A: triage by hand (most people, and honestly the best result)

Open `saved_posts.html` — or the JSON in a text editor — and walk the list newest to oldest. For each item worth keeping, open it and save it into a real bookmark manager with the browser extension, one click each.

It sounds tedious and it's the option most likely to leave you better off, because saved-post lists are 80% impulse and touching each item is the pruning. An hour on a thousand-item list gets you the two hundred you'd actually want back, already tagged and searchable, instead of a complete archive you never open. (More on that trade-off in [how to organize bookmarks](/blog/how-to-organize-bookmarks).)

### Option B: convert the JSON to a bookmarks file (technical)

`saved_posts.json` is structured, so a short script — or an AI assistant given the file's shape — can convert it into a **standard bookmarks HTML file**, the same `<DT><A HREF=...>` format every browser exports. That's the universal import format, and once you have one you can check it in a [bookmark file viewer](/tools/bookmark-file-viewer) before importing it anywhere.

From there it imports like a [Chrome bookmarks export](/blog/how-to-import-chrome-bookmarks-to-ai): Marqly ingests standard bookmark HTML, fetches each page, then tags and indexes it. One limit, stated plainly — Marqly doesn't parse Instagram's `saved_posts.json` directly, and Instagram resists automated fetching, so what comes back is thinner than a normal article import.

### Option C: rebuild the collection deliberately

If your saves were mostly visual references — design, interiors, outfits, product photography — treat the export as a checklist rather than an import, and rebuild the good parts in a [swipe file](/swipe-file) you control: source link plus your own note about why it's in there. That note is what your Instagram saves never had, and it's what makes a reference collection usable years later.

## Fix the habit, not just the backlog

Exporting solves the past. The next thousand saves rebuild the same problem, because Instagram's save button will still be an unsearchable grid next year.

The pattern that holds:

- **Keep using Instagram's Save button** as a fast, in-feed inbox. It's good at that.
- **Save the keepers out** when you recognize them. Share the post to your browser or open it and save it in one click — the link, plus a tag, plus a sentence of your own. Later, [describe what you remember](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) and it comes back: "the video about fixing a squeaky door hinge" finds it without a caption, a handle, or a hashtag. That's [semantic search](/blog/how-to-search-bookmarks-with-ai) doing the job Instagram's saved grid never could.

Instagram stays your discovery feed. The things you want in five years live somewhere with an export button.

## Quick recap

1. **Settings → Accounts Center → Your information and permissions → Download your information.**
2. Select **Saved**, pick **JSON**, all time, submit.
3. **Download the ZIP fast** — the link expires in a few days.
4. Find **`saved_posts.json`**: links and timestamps only, no media, no captions.
5. **Triage and re-save** the keepers into a library you can search — like [Marqly](https://app.marqly.com).

Request it today even if you won't process it this month. It's a two-minute request, and every week you wait is a few more saved posts quietly deleted out from under you.
