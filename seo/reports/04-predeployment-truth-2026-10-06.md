# Predeployment truth review — 2026-10-06

The deploy candidate removes numerical editorial review ratings across all twelve language groups. Removing a score alone does not advance an article’s update date. Substantive pricing, free-plan, import or closure corrections do.

Verified sources:
- [Instapaper Premium](https://www.instapaper.com/premium): $5.99/month or $59.99/year; AI voices appear among Premium features. The “no AI of any kind” claim was corrected.
- [Readwise pricing](https://readwise.io/pricing): Full $9.99/month billed annually ($119.88/year), $12.99 monthly, 30-day trial. Unsupported card-required/automatic-charge claims were removed.
- mymind: the existing dated `src/data/competitors/mymind.json` (verified 2026-10-05) supplies $79/year Student of Life and a free guest account limited to 100 cards, without a time limit. The official pricing fetch returned 403, so this session does not claim independent current verification.
- [Mozilla’s Pocket closure notice](https://support.mozilla.org/en-US/kb/future-of-pocket): service closure July 8, 2025; export/API access disabled November 12, 2025; remaining data queued for deletion starting that date. Completion of deletion is not asserted.
- Marqly import facts follow the measured import-fidelity study and product fact sheet: use Pocket `list.csv`; browser HTML is a separate format. Free allows 100 saves with keyword search. Semantic search, summaries and automatic tagging on import require Pro. Imported saved timestamps are not preserved.

The concurrent prompt-pruning commit was reviewed without changing its inputs: 149 qualifying detail URLs plus 11 forced hub URLs, no missing qualifying detail and no extra nonqualifying detail. It is retained for Phase D integration. The handwritten 1.12% top-50 CTR in the concurrent log conflicts with the measured by-impressions baseline, 64/20,255 = 0.32%; it must not be propagated.

Fresh final build completed successfully; all 25 SEO gates passed for 1,935 pages. Required five surfaces were captured and visually inspected at 1440px and 390px, with matching canonicals and the French page’s noindex directive. A mobile download-button overflow and inline-link spacing were fixed and rechecked; all ten captures return 200 with no document overflow or JavaScript errors. Sitemap contains 1,343 URLs. Evidence is under `active/tmp/seo-candidate-shots/` and `active/tmp/*final-candidate-2026-10-06.log`. Changes log records 148 corrected URLs. Production push remains pending.
