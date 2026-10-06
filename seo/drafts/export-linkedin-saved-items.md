---
title: "How to Export Your LinkedIn Saved Items in 2026 (Download Your Data, Step by Step)"
seoTitle: "Export LinkedIn Saved Items in 2026 — Marqly"
description: "LinkedIn exports Saved Items as dates and URLs only. Here is the download path, what the archive holds, and how to turn saves into a searchable library."
pubDate: 2026-10-05
category: "Guides"
targetKeyword: "export linkedin saved items"
tags:
  - "export linkedin saved items"
  - "linkedin download your data"
  - "linkedin saved articles export"
  - "linkedin data export csv"
  - "linkedin newsletters backup"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Try Marqly free"
lang: "en"
faqs:
  - q: "How do I export my saved items on LinkedIn?"
    a: "Click the Me icon, go to Settings & Privacy, open Data Privacy on the left rail, and use Download your data under the 'How LinkedIn uses your data' section. Select the Saved Items category and request the archive; LinkedIn's help article says a specific-category request is emailed within minutes and the link stays usable for 72 hours."
  - q: "Does the LinkedIn export include the content of what I saved?"
    a: "No. LinkedIn's official description of the Saved Items category is that it contains the saved date and URL of a post, article, or other content — nothing more. The article is also explicit that LinkedIn only provides your own personal data, not other members' data, so posts and articles you saved belong as links."
  - q: "Can I export the LinkedIn newsletters I follow?"
    a: "LinkedIn's published list of exportable data categories does not include a newsletters category. Company Follows gives you companies you follow with dates, and Member Follows gives you people, but issues of newsletters you follow are not an itemized export. Anything not covered falls to LinkedIn's Data Access Request form."
  - q: "Why did part of my LinkedIn archive come faster than the rest?"
    a: "LinkedIn stages delivery by category: one list of categories is available within 10 minutes of the request, another within 48 hours, and a large all-category download takes up to 24 hours to even get requested by email. Saved Items sits in the slower batch."
  - q: "Can I import my LinkedIn saved items into Marqly?"
    a: "After a light conversion, yes. The saved-items data is a date-and-URL table; drop the URLs into a simple CSV with a URL column and Marqly's generic CSV import takes it (browser bookmark HTML works too). The import does not preserve your original LinkedIn save dates — items land stamped with the import date — and auto-tagging imported items is a Pro feature."
---

LinkedIn has one official export for saves: Settings & Privacy → Data Privacy → Download your data, with a dedicated **Saved Items** category. It is exactly what the name suggests — for every article or post you tapped the bookmark on, you receive the **saved date and the URL**, never the content. Here is the verified path, what the archive does and does not include (newsletters: mostly nothing), and how to turn a two-column table into a research library.

## What "saved" actually means on LinkedIn

LinkedIn's Save button quietly became one of the more useful exports to request, because the Saved Items category includes a timestamp. The catch is scope:

- **Links, not copies.** A saved post is another member's data; LinkedIn says plainly that it will only provide your own personal data and not that of other members (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364). Deleted posts rot in the archive the same as they do in your Saves screen.
- **Jobs are separate.** Saved jobs, saved job alerts, and applications each have their own categories — Saves is articles/posts, not the whole "saved" concept.
- **Newsletters are the hole.** Followed newsletters are not an exportable category, and issues you saved-as-read are not itemized either. More on that below.

If your Saves have outgrown the in-app view — same failure mode as [X bookmarks](/blog/export-twitter-x-bookmarks) — this is how you get them out.

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
      <td>Data Privacy → Download your data → Saved Items</td>
      <td>Saved date + URL per item</td>
      <td>Per-category data files in the archive</td>
      <td>Email within minutes (specific) to 48 hours; link valid 72 hours</td>
      <td>Desktop only; no content, just links</td>
    </tr>
    <tr>
      <td>Same tool → Saved Jobs / Saved Job Alerts / Job Applications</td>
      <td>Date saved, title, company, posting URL</td>
      <td>Per-category data files</td>
      <td>Fast category (10-minute batch)</td>
      <td>LinkedIn-hosted job URLs expire when postings close</td>
    </tr>
    <tr>
      <td>Same tool → Company Follows / Member Follows</td>
      <td>Who and what you follow, with dates</td>
      <td>Per-category data files</td>
      <td>Follows only, not their content</td>
      <td>Not a newsletter archive; no issues exported</td>
    </tr>
    <tr>
      <td>Manual: open a saved article, save it with your browser</td>
      <td>The real page, title and all</td>
      <td>Whatever your manager stores</td>
      <td>One item at a time</td>
      <td>Mostly external articles, so it fetches cleanly — the highest-fidelity route for keepers</td>
    </tr>
    <tr>
      <td>EU/EEA/Switzerland members: Member Portability APIs</td>
      <td>Programmatic access to your LinkedIn data</td>
      <td>API output</td>
      <td>Regional eligibility</td>
      <td>Developer route; documented in LinkedIn's help article on Member Portability APIs</td>
    </tr>
  </tbody>
</table>

## Step-by-step: request the Saved Items export

LinkedIn's help article "Download your data" lays out the current path (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364):

1. On linkedin.com, click the **Me** icon at the top of your homepage.
2. Select **Settings & Privacy** (this is also reachable directly at https://www.linkedin.com/psettings/data-privacy/).
3. Click **Data Privacy** on the left rail.
4. Under the **How LinkedIn uses your data** section, click **Download your data**.
5. Choose **Select the data that you're looking for**, tick **Saved Items** — add **Saved Jobs**, **Company Follows**, or **Connections** if you want them in the same run.
6. Click **Request archive**, then open the email and download within **72 hours**.

Three rules the article states, worth repeating because they surprise people: the download must be run from a **personal computer** — the feature is not available on mobile; a specific-category request is emailed **within minutes** while a large all-category download takes up to **24 hours**; and categories arrive on different clocks, with Saved Items in the **48-hour** batch. You only receive categories that apply to your account — no certifications file if you never listed certifications, and no saved-items file if the Saves are empty.

<!-- VERIFY: the delivery-file format of the Saved Items data (the help article does not name extensions; archives have historically been CSV inside a ZIP). Confirm from a fresh archive before publishing, then update "What the file actually contains" to name it for sure. -->

## What the file actually contains

Per LinkedIn's own category descriptions:

- **Saved Items** — "the saved date and URL of a post, article, or other content."
- **Saved Jobs** — date saved, job title, company name, and the LinkedIn posting URL.
- **Saved Job Alerts** — the search phrase and date.
- **Articles** — URLs of articles *you* published (not the ones you saved).
- **Company Follows / Member Follows** — names and follow/unfollow dates.
- **Reactions, Comments, Shares** — dates and URLs of your engagement, if you tick them.

So the Saves export is a two-column truth: **when you saved it, and where it pointed**. Two practical consequences:

1. **LinkedIn post URLs have a paywall of login.** A saved `linkedin.com/posts/...` link will not resolve for anyone not signed in, and third-party fetchers get a stub — your own archive will hold links you cannot reopen in ten years. External-article saves (the ones that redirect to publishers) are the durable ones.
2. **Job links are perishable.** LinkedIn posting URLs expire when the job closes; export your Saved Jobs into your records the day you still need them, not at reference-check time.

And the honest gap: **newsletters**. You can follow newsletters and save their posts, but LinkedIn's published export-category list has no newsletters row. Company Follows and Member Follows cover who you follow; the issues themselves are not an exportable dataset. For anything beyond the listed categories, LinkedIn directs you to its Data Access Request form (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/ask/TS-DCR) — slow, and no promise of structure. EU/EEA/Swiss members additionally have the programmatic route it documents at https://www.linkedin.com/help/linkedin/answer/a6214075.

<!-- VERIFY: whether followed-newsletter metadata lands in any category (e.g., under Member Follows) in a real archive; the help article neither lists a newsletters category nor rules one out indirectly. -->

## Turn the table into a library

The export is a datestamped URL list — raw material, not a knowledge base.

**Fastest good result: triage and re-save.** Work the newest half of the saved-items list. Anything that is really an external article — the industry post, the hiring benchmark, the essay — open it and save it properly with the [bookmark manager in your browser](/bookmark-manager-for-chrome) (Chrome, Edge, Firefox, and Safari are all covered, plus iOS and Android). You get the title, the full page, and your own tag, in the place where you will actually search for it later.

**Bulk route: convert and import.** Feed the saved-items file to a script or an AI assistant and have it write a simple CSV with a URL column (keep the date column for your own records — see why below). Marqly imports generic CSV, browser bookmark HTML, Raindrop HTML, and Pocket exports, as `.html`, `.htm`, or `.csv`, up to 10 MB free / 30 MB Pro, 10,000 bookmarks per file; imported links are fetched and indexed, which means external-article saves return as titled, readable entries — while `linkedin.com/posts` links will import thin, for the login-wall reason above. State the limits plainly: **your LinkedIn save dates do not survive the import** — every item takes the date you import it — and **auto-tagging imported items is a Pro feature**; the free plan preserves the tags you put in the file yourself. Preview a converted file with the [bookmark file viewer](/tools/bookmark-file-viewer) before a full run.

**Why the rebuild beats the archive:** the point of rescuing professional saves is finding them again cold. "That supply-chain piece from Q3" should surface from a description, not from your memory of when you saved it — that is what [searching bookmarks with AI](/blog/how-to-search-bookmarks-with-ai) is for, and it applies doubly for researchers sitting on saved-items lists of several hundred links (see the [researchers page](/for-researchers)). For the reading-queue half of your saves, the [Pocket alternative route](/alternatives/pocket) covers the same conversion question from the other side.

## When NOT to use Marqly

- **Compliance copies.** If the export is for a records request or GDPR portability (LinkedIn's Privacy Policy covers the rights: https://www.linkedin.com/legal/privacy-policy), keep the untouched LinkedIn archive — a curated library is not the same artifact.
- **Networking data.** Connections, messages, and invitations are person-shaped data with their own tools and ethics; a bookmark manager is the wrong home for them.
- **Job-hunt pipeline.** If you are managing saved jobs actively, LinkedIn's own Jobs experience beats any re-save; use the export for closing out old searches, not running current ones.

## FAQ

**How do I export my saved items on LinkedIn?**
Me icon → Settings & Privacy → Data Privacy → Download your data → tick Saved Items → Request archive. Specific-category requests email within minutes; the download link is good for 72 hours. Desktop only (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364).

**Does the export include the content of what I saved?**
No — the saved date and URL of a post, article, or other content. LinkedIn explicitly does not export other members' data, so saved posts arrive as links.

**Can I export the newsletters I follow?**
There is no newsletters category in the published list. Follows (companies, members) are exportable; newsletter issues are not. Beyond the list, it is Data Access Request form territory, with slow and unspecified output.

**Why did my archive come in pieces?**
Categories ship on two clocks — a 10-minute batch and a 48-hour batch — and a full-account download only emails within 24 hours of filing. Saved Items is in the slower batch.

**Can I import the saved-items file into Marqly?**
Convert it to a CSV with a URL column first — Marqly accepts generic CSV, bookmark HTML, Pocket, and Raindrop HTML. Save dates are not preserved (items take the import date), and auto-tagging imports is Pro. For the [how-to-import walkthrough](/blog/how-to-import-chrome-bookmarks-to-ai), the mechanics are the same.

## Quick recap

1. **Settings & Privacy → Data Privacy → Download your data**, tick **Saved Items**, request from a personal computer.
2. Expect a **date + URL table**, minutes-to-email for a narrow request, **72 hours** to download.
3. **No content, no newsletters export**; LinkedIn-post links rot behind login, so triage early.
4. Convert keepers to a CSV, import into a searchable, cross-platform library — like [Marqly](https://app.marqly.com) — and know that import stamps today's date, not your save dates.
