# Phase D1 — prompt demand pruning, 2026-10-06

Decision source: completed paginated GSC API page pull for 2026-07-06 through 2026-10-03, 2,010 available rows. Historical 16-month pulls and both concurrent pull snapshots are preserved; the nine raw decision files match the concurrent branch byte for byte. The preserved concurrent manifest is in `gsc-concurrent-manifest-2026-10-06.json`. Privacy and query omission limits remain in the canonical manifest.

Of 400 prompt detail pages, 149 meet ≥1 click OR ≥20 impressions. The keep-list contains those 149 details plus the category index and all ten category hubs (160 paths). The other 251 detail pages retain HTTP 200 and follow links, receive `noindex`, and disappear from sitemap and hreflang clusters. Local sitemap count drops from 1,343 to 1,092. Kept details gain contextual links to the existing AI-conversation FAQ and extension page. Semantic search is explicitly Pro. Content dates were not bumped for pruning or links.

The shared `isIndexable` decision drives all three surfaces. Integration fixed an English-path omission in hreflang exclusion and restricted the hub exemption to the exact category namespace. Deleting the keep CSV restores prompt indexability; this rollback was verified in a separate process and the file restored. Threshold coverage, 149/251 detail counts and all eleven hub paths were checked.

Fresh build exits 0; all 25 SEO gates pass on 1,935 analysed pages. Kept and pruned pages both return local HTTP 200 with the correct robots meta, no horizontal overflow at 1440px and 390px, and readable settled content. An early screenshot captured the reveal animation mid-transition; settled/reduced-motion capture verifies visibility. Evidence is in ignored `active/tmp/prompt-pruning-invariants.json`, `prompt-visual-checks.json`, `seo-candidate-shots/prompt-*-settled.png`, and the dated build/gate logs. 400 affected URL rows are logged with pending deployment dates; live receipts follow after push.

No new redirects and no numerical review ratings were introduced.
