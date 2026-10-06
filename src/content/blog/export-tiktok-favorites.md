---
title: "How to Export Your TikTok Favorites in 2026 (Two Official Routes, Step by Step)"
seoTitle: "Export TikTok Favorites in 2026 — Marqly"
description: "TikTok has no favorites export button. Request a copy of your data in Settings, triage the link list, and rebuild favorites as searchable bookmarks."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export tiktok favorites"
tags:
  - "export tiktok favorites"
  - "tiktok download your data"
  - "tiktok favorites backup"
  - "download tiktok saved videos"
  - "tiktok data export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
lang: "en"
faqs:
  - q: "Can I download all my TikTok favorites at once?"
    a: "Not as videos. You can get the list in bulk — TikTok's account-wide data request produces a copy of your activity data, and the Favorites tab itself offers a file request in recent app versions (the label varies by build). Neither route hands you the video files themselves; you get links you can re-open."
  - q: "Does TikTok's data download include my favorites?"
    a: "TikTok says the copy of your data 'may include but is not limited to' watch history, comment history, and privacy settings, so favorites fall inside the same activity bucket but the exact contents vary by account and region. After unzipping, search the folder for 'favorites' rather than assuming a specific filename."
  - q: "Can I save the actual TikTok videos to my phone in bulk?"
    a: "No. TikTok's official download option is per video: Share, then Save video, and only when the creator allows downloads. Saved clips land in your camera roll with a TikTok watermark. There is no bulk-save feature, and third-party downloader sites are unofficial and break whenever TikTok changes things."
  - q: "What happens to my favorites when a creator deletes a video?"
    a: "The item disappears from your favorites grid and the URL in any export you made points at a page that no longer exists. This is the main argument for exporting early: your favorites list is only a backup of what still exists at request time."
  - q: "If I import my favorites list into a bookmark manager, are the save dates kept?"
    a: "In Marqly's case, no. Import does not preserve original save dates — every imported item takes the date you imported it. If the chronology of your favorites matters, keep TikTok's own export file next to the library you rebuild."
---

TikTok gives you one-tap favoriting and no way to move those favorites anywhere else. There is no export button on the Favorites screen. Your two official routes are a file request inside the Favorites tab and an account-wide copy of your data from settings. Both produce links, not videos.

## Why the favorites grid is not a backup

TikTok's Favorites tab (the bookmark icon on your profile) is convenient until three things happen:

- **Videos rot.** A creator deletes a post, an account gets banned, a region blocks a clip — the favorite vanishes from your grid silently, and the URL in any later export is a dead page.
- **It is one app, one purpose.** Your saved sourdough clips, guitar tutorials, and home-repair walkthroughs live next to videos you favorited ironically at 1 a.m. There is no real search, and nothing connects them to the articles, PDFs, and YouTube videos you save elsewhere — which is the whole argument for a [read-it-later library](/read-it-later).
- **You cannot take it with you.** Same story as [Instagram saved posts](/blog/export-instagram-saved-posts) and [X bookmarks](/blog/export-twitter-x-bookmarks): the save button is a lease, not ownership.

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
      <td>Favorites tab → request the favorites file</td>
      <td>A list of every video you favorited, links only</td>
      <td>A file emailed to you (link list; exact format varies)</td>
      <td>Minutes to a couple of days</td>
      <td>Feature label and availability vary by app version</td>
    </tr>
    <tr>
      <td>Settings → Download your data (full archive)</td>
      <td>Your account activity data, favorites among it</td>
      <td>Structured data files in a ZIP archive</td>
      <td>TikTok prepares it asynchronously; download link expires</td>
      <td>Big ZIP to dig through; favorites may be one file among many</td>
    </tr>
    <tr>
      <td>Per-video: Share → Save video</td>
      <td>The actual video file</td>
      <td>MP4 into your camera roll, watermarked</td>
      <td>One video at a time; only if the creator allows downloads</td>
      <td>Official docs are explicit that the option is absent when creators disable saving</td>
    </tr>
    <tr>
      <td>Manual copy-link as you browse</td>
      <td>URLs into whatever you paste them into</td>
      <td>Text</td>
      <td>Whatever you can reach before videos rot</td>
      <td>No archive of past favorites</td>
    </tr>
  </tbody>
</table>

## Route 1: request a copy of your data

TikTok's help article on requesting your data describes the account-level download: you can ask for a copy of your TikTok data, which per the article may include but is not limited to your username, watch video history, comment history, and privacy settings (as of Oct 5, 2026, per https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data). The path TikTok documents starts in the app:

1. Open TikTok → **Profile** (bottom right).
2. Tap the **Menu ☰** button (top right).
3. Open the settings area, find the **Settings and privacy** section, and look for the data controls — **Download your data**.
4. Request the data for your account and choose the structured format when the app offers a choice.
5. Wait for TikTok's email with the download link, then download promptly — the link does not last forever.

The same request is reachable from TikTok's web settings once signed in.

## Route 2: the favorites file request

In the Favorites tab (Profile → bookmark icon), recent versions of the app expose an option to request your favorites as a file — usually behind a menu icon on the favorites screen, and the label shifts between releases (historically things like "Request file"). TikTok then emails a file containing links to the videos you favorited.

If your app does not show it, Route 1 is your fallback — same destination, more digging.

## What the file actually contains

Open the archive (or the emailed favorites file) and look for a favorites-specific file inside a folder about your activity — past archives have used names in the style of `Favorites.json`, but folder and file naming has changed between versions, so search the unzipped folder for 'favorites' instead of trusting a path.

Expect roughly, per entry:

- the **creator's username** and a **permalink** (`tiktok.com/@user/video/...`),
- a **timestamp** of when you favorited,
- sometimes the video description text.

What is not in there: the video files. Favorites are other people's content, so TikTok gives you a pointer, not a copy. Your own uploads are exported as media elsewhere in the archive; your favorites are a link list. And like every export of saved social content, a deleted or region-blocked video leaves you holding a URL that resolves to a dead page — the rot is not a bug in the export, it is the state of the world at request time.

## Turn the link list into something usable

Two thousand `tiktok.com` URLs with timestamps tell you nothing about which one was the door-hinge fix. Three ways forward, in order of realism:

**Triage first (most people).** Walk the favorites list newest to oldest and keep what survives contact with daylight. Favorites lists are heavily impulse — pruning is most of the value. If the backlog is huge, do a pass with the list open in one window and your browser in the other, and save the keepers out as you go. This is the same discipline as organizing any [bookmark backlog](/blog/how-to-organize-bookmarks), applied to video.

**Convert to a bookmarks file (technical).** A favorites export is structured data, so a short script — or an AI assistant shown the file's shape — can convert it into standard bookmark HTML or a simple CSV with a URL column. Marqly's import accepts browser bookmark HTML (Chrome/Edge/Firefox/Safari format), Pocket’s list.csv, and generic CSV files, as `.html`, `.htm`, or `.csv`, up to 10 MB on the free plan and 30 MB on Pro, with 10,000 bookmarks per file. On import, links are fetched and indexed, so keepers that are actually articles (a recipe page, a product) come back with real titles. Two honest caveats, stated plainly: the import does **not** preserve your TikTok favorite dates — everything lands stamped with the import date — and automatic tagging of imports is a Pro feature; the free plan keeps whatever tags you bring in the file. Preview any converted file with the [bookmark file viewer](/tools/bookmark-file-viewer) before importing, and note that tiktok.com links themselves are JS-heavy and resist clean automated fetching, so per-video pages import thin.

**Rebuild deliberately (visual stuff).** If the favorites are references — finishes, knots, joinery, plating — treat the export as a checklist and re-capture the keepers into a library where you add your own note about why it is in there, using the [Chrome extension](/bookmark-manager-for-chrome) or whichever browser you live in (the same manager ships for Edge, Firefox, and Safari, plus iOS and Android). The sentence you add is the thing TikTok's favorites grid never had.

And fix the habit at the source: keep favoriting in-feed — it is a fine inbox — but when a video is genuinely worth years, share the link out to a place with an export button and a search box. Being able to later describe "the thing about regrouting tile" and have it surface, without remembering the creator's handle, is what [semantic search](/blog/how-to-search-bookmarks-with-ai) does that no favorites tab does. (If a big share of your saves are long-form instead of clips, the [YouTube Watch Later export guide](/blog/export-youtube-watch-later) covers the better-suited route.)

## When NOT to use Marqly

Be honest about the fit:

- **You want the files offline.** Marqly stores links and page content, not MP4s. Per-video Save to camera roll (where allowed) or a personal file archive is the tool for that.
- **You mostly rewatch inside TikTok.** The favorites grid is free and instant for that. A bookmark manager earns its keep only if you also save articles, videos, and docs from everywhere else.
- **You need the timestamps.** TikTok's own export keeps your favorite dates; any import into any bookmark manager (Marqly included) will not. Keep the export file as the record.

## FAQ

**Can I download all my TikTok favorites at once?**
Not as videos. You can get the list in bulk — the account-wide data request produces a copy of your activity data, and the Favorites tab itself offers a file request in recent app versions (label varies by build). Neither route hands you the video files; you get links.

**Does TikTok's data download include my favorites?**
TikTok's help article says the data "may include but is not limited to" watch history, comment history, and privacy settings (as of Oct 5, 2026, per https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data). Favorites fall inside the same activity data, but exact contents vary by account. Search the unzipped folder for 'favorites'.

**Can I save the actual TikTok videos to my phone in bulk?**
No. The official per-video path is Share → Save video, and TikTok's own help notes the option is simply absent when a creator disallows downloads (as of Oct 5, 2026, per https://support.tiktok.com/en/using-tiktok/exploring-videos/download-content). Watermarked, one at a time. Bulk video capture is not a feature TikTok offers, and unofficial downloader sites are exactly that.

**What happens when a creator deletes a video I favorited?**
It disappears from your grid, and the URL in any export you made points at a dead page. Export early; you are backing up what still exists.

**Does the right to a data copy apply to favorites specifically?**
You can request a copy of the data TikTok holds about you under the rights described in its Privacy Policy (as of Oct 5, 2026, per https://www.tiktok.com/legal/privacy-policy-row?lang=en); the mechanics run through the in-app request described above.

**If I import favorites into Marqly, are the save dates kept?**
No. Import stamps items with the import date, and auto-tagging imports is a Pro feature. The free plan gets your own tags and a searchable, cross-platform library.

## Quick recap

1. **Profile → Menu → Download your data** (or the favorites file request inside the Favorites tab, if your app shows it).
2. The output is a **link list**, not video files — expect creator handle, permalink, favorite timestamp.
3. **Download the archive promptly**; emailed links expire.
4. **Triage the list**, convert keepers to bookmark HTML or CSV, and import them into a place you can search — like [Marqly](https://app.marqly.com).
5. Keep favoriting in-feed; send the multi-year keepers out the moment you recognize them.
