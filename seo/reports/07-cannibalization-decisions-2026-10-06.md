# D2/D5 cannibalization decisions — 2026-10-06

## Evidence and boundary

This review uses the candidate's complete, paginated Google Search Console Search Analytics API pull recorded in `seo/data/gsc/MANIFEST.json`: `2026-07-06..2026-10-03` (90 days), with 7,487 query rows, 2,010 page rows and 9,320 query×page rows. `cannibalization.csv` lists co-owners with at least 10% query impression share. Query/page visibility is source-limited, so these are routing decisions, not a basis for deleting pages with no row.

The per-query decision copy is `07-cannibalization-decisions-2026-10-06.csv`. It covers all 44 non-`youtube<digits>` clusters. No new 301 or FAQ merge is warranted.

## Decisions

| Cluster family | Decision | Evidence / reason |
| --- | --- | --- |
| Pocket alternatives: `pocket ai alternative`, `alternative to pocket`, `pocket app alternative`, `pocket replacement`, `hey pocket alternative` | Keep the English blog listicle as the internal-link owner. Do not redirect the alternatives page or German locale page. | `/blog/best-pocket-alternatives-2026` owns 338/4 for `pocket ai alternative`; `/alternatives/pocket` still has 975 impressions / 8 clicks overall, so is not a near-zero loser. German pages serve locale intent. |
| Raindrop: `raindrop vs pocket`, `pocket vs raindrop`, `raindrop alternative`, `raindrop.io`, `linkwarden vs raindrop` | Keep review, alternatives and comparisons distinct. | The direct comparison serves a pairwise query while alternatives pages serve switching queries. The stale `/blog/raindrop-vs-marqly` GSC row (644/1) already has a 301 in `public/_redirects:65-66` to `/compare/marqly-vs-raindrop`; no new redirect. |
| Instapaper: `instapaper alternative`, `instapaper alternatives`, `instapaper pricing` | Keep both pages. | The editorial listicle is 297/6 and the alternatives page is 2,484/29 overall; both answer live, distinct list/discovery intent. |
| Product comparisons: `toby vs onetab`, `diigo momtl`, `symbaloo vs padlet`, `symbaloo vs wakelet`, `readwise alternative(s)`, `linkwarden vs raindrop` | Keep direct comparison and product/list pages. | Pairwise versus alternative/list intent differs; no co-owner is a zero-demand duplicate. |
| Generic discovery: `bookmark alternative`, `bookmark alternative for safari`, `bookmarking tool(s)`, `visual bookmarking tool`, `bookmark tool`, `best bookmarking tool`, `web based bookmarks` | Keep index, comparison, product and use-case pages. | Broad queries legitimately span discovery hubs and product/use-case pages; rankings are mostly positions 25–80 and clicks are zero across the query split, which is not evidence for a redirect. |
| Organizing / research: `bookmark organizer`, `favorites organizer`, `bookmark integrations`, auto-tagging question, research-workflow queries | Keep landing pages and instructional posts. | Transactional/product intent differs from how-to/research guidance. Example: `/bookmark-organizer` is 652/5; `/blog/how-to-organize-bookmarks` is 3,443/34. |
| Locale/tool pairs: `exportar marcadores chrome`, `exportar favoritos chrome`, Korean transcript query | Keep. | Portuguese and Spanish export pages are language-specific. The Korean tool and Korean how-to are the same-language but distinct utility-versus-instructions pages (not a locale distinction): `/ko/tools/youtube-transcript` 401/6 and `/ko/blog/youtube-transcript-chuchul-guide-2026` 923/21. |
| FAQ overlaps: `ai bookmark manager`, `highlight the text` | Keep direct FAQ plus detailed guide. | FAQ answers the narrow question; the blog supplies the guide/list. The highlight FAQ is 605/2 versus 4,330/31 for the guide, so low clicks alone do not establish duplicate content. |
| Named alternatives: `karakeep alternative`, `wallabag alternative`, `memex alternatives`, `diigo alternatives` | Keep. | Vendor-specific alternatives pages differ from a broader self-hosted or general alternatives list. |

## FAQ screen

All 63 `src/content/faq` pages were checked against the page pull. Twenty-three have fewer than 10 visible impressions; none has a same-intent, same-answer parent demonstrated by the current cluster evidence. They cover distinct account, privacy, API, feature, support, retrieval, YouTube, boards, product-status, and conceptual questions. Do not merge, noindex, or redirect an FAQ solely for zero/near-zero GSC impressions.

The only two low-click FAQ pages that occur in a co-owner cluster are `/faq/what-is-an-ai-bookmark-manager` (433/3) and `/faq/how-do-i-highlight-text-on-a-website` (605/2). They are direct-answer pages, whereas their co-owners are a listicle/product landing and a detailed tutorial respectively. Both remain distinct.

## Ghost-query opportunity correction

Raw GSC files remain immutable. For page opportunity ranking, create a derived display-only view subtracting explicit `^youtube\d+$` query×page impressions, labelled **visible non-ghost residual** rather than total search demand. There are 645 such query×page rows, 12,182 impressions and zero clicks.

| Page | Raw impressions/clicks | Explicit ghost impressions | Residual |
| --- | ---: | ---: | ---: |
| `/es/blog/chatear-con-videos-de-youtube-2026` | 7,307 / 5 | 7,143 (97.8%; 277 rows) | 164 / 5 |
| `/blog/summarize-youtube-videos-with-ai` | 3,239 / 8 | 1,241 (38.3%; 18 rows) | 1,998 / 8 |
| `/it/blog/riassumere-video-youtube-con-ia-2026` | 1,508 / 1 | 1,474 (97.7%; 204 rows) | 34 / 1 |

The top-40 raw-page exposure detail is in `active/tmp/top40-page-ghost-exposure.csv`. Page aggregates and query×page rows can differ because GSC omits source-visible queries, so the residual must not be described as a complete traffic total.

## Changed English anchors

Only explicit English `/alternatives/pocket` anchors were repointed to the retained owner `/blog/best-pocket-alternatives-2026`; no translations or generated namespace mappings changed:

- `src/pages/migrate/pocket.astro`
- `src/pages/tools/pocket-export-converter.astro`
- `src/content/blog/backup-all-browser-bookmarks.md`
- `src/content/blog/export-linkedin-saved-items.md`
- `src/data/llms-base.txt`

These are links-only changes; no `updatedDate` changed.
