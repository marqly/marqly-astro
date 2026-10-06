---
title: "How to Export Your Facebook Saved Posts and Links in 2026 (Download Your Information, Step by Step)"
seoTitle: "Export Facebook Saved Posts in 2026 — Marqly"
description: "Facebook Saved has no export button. Download Your Information returns links, not posts. Here is the route, the gotcha, and how to make saves searchable."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export facebook saved posts"
tags:
  - "export facebook saved posts"
  - "facebook download your information"
  - "facebook saved links export"
  - "backup facebook saves"
  - "facebook data download"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "Is there a way to export my Facebook Saved items?"
    a: "Not from the Saved screen — there is no export button there. The official route is Meta's Download Your Information tool, reached in-app through the Accounts Center or directly at facebook.com/dyi once you are logged in. You pick which categories to include, choose a format, and Meta emails you an archive."
  - q: "What does the Facebook download include for saved posts?"
    a: "Saved items are links to other people's content, so expect a record that lists what you saved and when — URLs and timestamps — rather than copies of the posts, photos, or videos themselves. The exact folder and file names inside the archive have shifted between versions, so search the unzipped archive for the saved-related file instead of trusting a fixed path."
  - q: "How long does the download take?"
    a: "Meta quotes up to 30 days for the Accounts Center request, while narrow single-category requests typically arrive within hours to a couple of days by email. The download link then expires after a few days, so grab the archive when it lands."
  - q: "Do saved posts still work after deletion?"
    a: "No. If the author deletes a post, a group goes private, or an account is disabled, the saved item is dead in-app and in your export. Outbound links you saved — the actual articles and products — usually keep working, which is exactly why exporting is worth doing early."
  - q: "Can I import my Facebook saved links into Marqly?"
    a: "After converting the list to a format Marqly accepts: browser bookmark HTML or a generic CSV with a URL column, up to 10 MB on the free plan, 30 MB on Pro, 10,000 bookmarks per file. Facebook post URLs sit behind login, so they import thin — the external article links are the valuable ones. Original save dates are not preserved on import, and auto-tagging is a Pro feature."
---

Facebook's Saved feature has no export button. The only official way out is Meta's **Download Your Information** tool — in-app it lives behind the Accounts Center, and on the web at facebook.com/dyi (as of Oct 5, 2026, per https://www.facebook.com/dyi). What comes back for saves is a list of links and timestamps, not copies of the posts. Here is the exact route, what the file really contains, and how to rescue the part of your Saved folder that still has value: the outbound links to articles, products, and pages you can actually re-open.

## What "Saved" is, and why it rots

Facebook's Save button buckets three very different things: posts from your feed, pages and groups, and **links to external websites**. The failure modes differ:

- **A Facebook post you saved is a lease on someone else's activity.** Deletion, a disabled account, a group flipping to private — any of these turns the saved item into a shrug, in-app and in every export you make afterward.
- **The Saved screen is a folder-drawer, not a library.** No full-text search across your saves; if you did not put it in a collection, it is scroll-or-forget.
- **The external links are the hidden treasure.** Years of Saved usually contains hundreds of plain web URLs — news, docs, tools — and those survive Facebook's decay while being buried in a place no one browses. Getting them out is the whole job. This is the same rescue math as [Instagram saved posts](/blog/export-instagram-saved-posts) and [Reddit saved posts](/blog/export-reddit-saved-posts) — Facebook is the biggest instance because the tool is invisible.

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
      <td>Accounts Center → Download your information (choose Facebook → saved items)</td>
      <td>A record of what you saved and when</td>
      <td>JSON or HTML, per your choice</td>
      <td>Up to 30 days per Meta; email link expires in days</td>
      <td>Links only for others' content; category labels drift between versions</td>
    </tr>
    <tr>
      <td>Same tool, full download</td>
      <td>Everything Facebook holds, saved items included</td>
      <td>Large ZIP of folders</td>
      <td>Slowest to prepare, biggest to dig through</td>
      <td>You are archaeology-ing for your own links</td>
    </tr>
    <tr>
      <td>Manual: open each saved external link, save it with your browser tool</td>
      <td>The real page, fetched while alive</td>
      <td>Whatever your library stores</td>
      <td>One at a time</td>
      <td>Slow but lossless; best fidelity for the keepers</td>
    </tr>
    <tr>
      <td>Copy link per saved item</td>
      <td>One URL</td>
      <td>Text</td>
      <td>Small counts only</td>
      <td>No way to enumerate the backlog quickly</td>
    </tr>
  </tbody>
</table>

## Step 1: request the archive

Meta consolidated the tool into the Accounts Center across Facebook, Instagram, and Threads. The in-app path:

1. Open the Facebook app → your **Menu** → **Settings & privacy** → **Settings**.
2. Tap the **Accounts Center** block at the top.
3. Go to **Your information and permissions** → **Download your information**.
4. Start a new request, choose **Facebook**, and select **Some of your information**.
5. In the category list, look for the saved content entry (historically labeled along the lines of *Saved posts and links* — current labels shift).
6. Pick **JSON** if you will convert the list, **HTML** if you will just browse it, set the date range to all time, and submit.

On desktop the same tool is reachable at facebook.com/dyi once signed in (as of Oct 5, 2026, per https://www.facebook.com/dyi — authentication required; the Help Center home is https://www.facebook.com/help/). Meta's privacy controls hub, https://www.facebook.com/privacy/center/, links the same request family.

<!-- VERIFY: the exact current label of the Saved category in the Accounts Center request flow ("Saved posts and links" vs "Saved" vs something else), since Meta renames these in the granular picker between versions. Confirm in a live account and update step 5. -->

## Step 2: watch for the email and download fast

Meta's stated worst case is **up to 30 days**; a narrow request usually arrives within hours to a couple of days, by email. The download link **expires after a few days**, and re-requesting means re-waiting. If mail goes missing, the Accounts Center lists your completed requests — check there before assuming the request failed.

## Step 3: find the saved file and read it honestly

Unzip and dig through the Facebook folder for anything named in the style of `saved_posts` or `saved` — past archives have carried a saved-items file listing each entry with its **URL and a save timestamp**; folder layout has changed across archive versions, so search the unzipped tree for 'saved' rather than trusting a path.

<!-- VERIFY: the actual filename and folder for saved items in a current Facebook archive (e.g., whether it is saved_posts.json at the top of the activity tree). Update this section with the confirmed names. -->

Expect three tiers inside:

1. **External links** (articles, products, videos hosted elsewhere) — the gold. The URL in your export is the live thing; it will re-fetch fine in any tool you move it to.
2. **Facebook posts, reels, group posts** — links to content behind login. They will not render for a stranger, a search engine, or most importer crawlers, and they rot entirely when the author deletes.
3. **Pages and groups you saved** — closer to bookmarks of identities than content; useful as a list, rarely as a re-openable object.

No captions, no copies of media you did not upload, no "why I saved this" — because Facebook never asked. The export is a pointer list of what you once pointed at.

## Turn the pointer list into a library

**Sort the links from the corpses.** Whatever format you got, first split the list on `facebook.com` / `fb.com` in the URL. The external half is your real library; the Facebook-post half is mostly a record — keep it if you need the paper trail, but do not expect it to read.

**External links → convert and import.** A saved-links JSON/CSV can be flattened by a script or an AI assistant into a standard bookmarks HTML file or a simple CSV with a URL column. Marqly imports browser bookmark HTML (Chrome/Edge/Firefox/Safari format), Pocket exports, Raindrop HTML, and generic CSV — `.html`, `.htm`, or `.csv`, up to 10 MB free / 30 MB Pro, 10,000 bookmarks per file — then fetches and indexes the pages, so a five-year-old "saved article" link arrives titled and searchable. The honest limits, stated plainly: **imports do not preserve your Facebook save dates** (everything takes the import date; keep the original archive if chronology matters), and **auto-tagging imported items is a Pro feature** — the free plan keeps whatever tags you write into the file. Test a converted file first with the [bookmark file viewer](/tools/bookmark-file-viewer), and if you are moving a large messy dump, the [how-to-import walkthrough](/blog/how-to-import-chrome-bookmarks-to-ai) covers the same mechanics from the Chrome side.

**Small backlog or high-value items → re-save by hand.** The [Marqly extension](/bookmark-manager-for-chrome) makes each keeper one click with a tag and a note attached — worth it for a hundred saves, where curation is the point. Then let the collection become searchable in [plain language](/blog/how-to-search-bookmarks-with-ai) instead of by collection-drawer, the way any other [bookmark backlog](/blog/how-to-organize-bookmarks) benefits from. Teachers and students hoarding articles in Saved will get more life from the rebuilt library — see [for teachers](/for-teachers) and [for students](/for-students).

## When NOT to use Marqly

- **You need the legal artifact.** For a records request or dispute, the untouched Meta archive is the evidence; a curated import is a different object. Keep the ZIP.
- **The value was the conversation.** Saved group threads and comment chains only make sense inside Facebook; link-outs to posts behind login will import thin everywhere, here included.
- **You want everything offline.** Marqly indexes pages, not copies of your entire social history; for full-media personal archiving, DYI itself (with all categories, HTML) remains the blunt but complete tool.

## FAQ

**Is there a way to export my Facebook Saved items?**
Not from the Saved screen. Use Download Your Information — Accounts Center in-app, or facebook.com/dyi signed in (as of Oct 5, 2026, per https://www.facebook.com/dyi). Pick the saved category, choose JSON or HTML, and Meta emails an archive.

**What does the download include for saves?**
A record of what you saved and when — URLs and timestamps. Others' posts are links, not copies, and deleted or privatized items come through dead.

**How long does it take?**
Meta quotes up to 30 days; narrow requests usually land in hours to days. The emailed link itself expires within days — download it immediately.

**Do saved posts still work after deletion?**
No, in-app or in your export. This is the argument for externalizing your outbound links while they are alive.

**Can I import Facebook saved links into Marqly?**
Convert to CSV or bookmark HTML first; Marqly accepts those (10 MB free / 30 MB Pro, 10,000 per file) and fetches the external pages. Facebook-hosted links sit behind login and import thin. Save dates are not preserved; auto-tagging imports is Pro.

## Quick recap

1. **Menu → Settings → Accounts Center → Your information and permissions → Download your information**, select the saved category, **JSON** if converting.
2. **Download the archive the day the email lands**; the link expires.
3. The file gives you **links + timestamps**, tiered into external URLs (gold) and Facebook posts (login-walled, rot-prone).
4. Split, convert, and move the keepers into something searchable and cross-platform — like [Marqly](https://app.marqly.com) — keeping in mind import dates reset and Facebook-hosted links import thin.

Request it this week. Every month in Saved is another batch of posts quietly deleted under your links list.
