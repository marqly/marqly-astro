# Phase C live deployment — 2026-10-06

Production commit: `132def5d43b48f4add011c747aa5461190cfdcbe`. Pushed normally from isolated candidate to `marqly-astro/main`; fresh fetch showed no remote-only commits. Original checkout and concurrent uncommitted work were preserved. Candidate is backed up on `origin/codex/seo-deploy-candidate`.

Cloudflare Workers Build [5c1eef6b](https://dash.cloudflare.com/2fa95a5b576a96bc48924ab9cfa8ffd3/workers/services/view/marqly-astro/production/builds/5c1eef6b-b4f8-4493-800e-abda0d638424) succeeded at 2026-10-06T11:34:27Z. Live verification completed 2026-10-06T11:34:45.380Z.

- `/bookmark-manager`, `/research/bookmark-import-fidelity`, `/about`, German mymind review and `/fr/curation-de-contenu` all return 200 without redirect and with their expected canonical URL.
- French pruned page retains `noindex, follow` and is absent from the sitemap. Live sitemap has 1,343 URLs.
- Public IndexNow text file returns 200 and exactly matches the configured key, including with Bing crawler user-agent strings. Private service-account credentials remain outside Git.
- All redirect cases and chain-depth checks pass, including `/about` = 200 and missing pages = 404.
- Manual Search Console resubmission of `https://www.marqly.com/sitemap-index.xml` returned **Sitemap submitted successfully** in owner Chrome around 11:35 UTC, account `amroshahbari@gmail.com`. Existing app/help sitemaps were untouched. Displayed discovered counts still describe earlier processing.
- Central IndexNow endpoint initially returned 403 despite the verified file. Bing’s official endpoint accepted one URL and then all 1,343 sitemap URLs with HTTP 200. Added `--engine=bing` to the script for an explicit supported fallback. Receipt is not evidence of indexing.
- Filled 511 pending changes-log rows with actual deploy date 2026-10-06. A postdeployment weekly snapshot follows; there is no measured Day-30 outcome yet.

Predeployment validation: clean build; 25/25 SEO gates, 1,935 analysed pages; 13/13 data tests; required five surfaces visually inspected at 1440px and 390px, with mobile overflow fixed. Evidence logs/screenshots are under `active/tmp/` in the candidate worktree.

Next: integrate the separately verified prompt keep-list, resolve actual duplicate intent conservatively, refresh the ranked pages and titles, capture product UI, then execute and log owner-authorized outreach. Source commits from the concurrent checkout must be reconciled without overwriting its dirty files.

[IndexNow protocol documentation](https://www.indexnow.org/documentation) defines successful receipts and key validation responses.
