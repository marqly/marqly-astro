import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv, buildReport } from '../scripts/weekly-report.mjs';

const manifest = { source: 'Google Search Console Search Analytics API', status: 'live pull 2026-10-06', completion: 'complete', site: 'sc-domain:marqly.com', startDate: '2026-09-01', endDate: '2026-09-30' };
const current = { manifest, pages: ['/pending', '/treated', '/mixed', '/control'].map((page) => ({ page: 'https://www.marqly.com' + page, impressions: 100, clicks: 10 })),
  queries: [{ query: 'marqly', impressions: 999, clicks: 900, position: 1 }, { query: 'youtube123', impressions: 900, clicks: 0, position: 1 }, { query: 'bookmarks', impressions: 100, clicks: 2, position: 3 }],
  countries: [{ country: 'usa', impressions: 200, clicks: 4 }], dates: [{ impressions: 1000, clicks: 10 }] };
const changes = [{ url: '/pending', deploy_date: 'PENDING-not-deployed' }, { url: '/treated', deploy_date: '2026-08-31' }, { url: '/mixed', deploy_date: '2026-09-01' }];
const report = (overrides = {}) => buildReport({ current, changes, today: '2026-10-06', ...overrides });

test('parses quoted commas, escaped quotes and multiline CSV evidence', () => {
  assert.deepEqual(parseCsv('"deploy_date","url","note"\r\n"2026-10-01","/a","quoted ""text"", line\ncontinued"\r\n'), [{ deploy_date: '2026-10-01', url: '/a', note: 'quoted "text", line\ncontinued' }]);
  assert.throws(() => parseCsv('a\n"unfinished'), /Unterminated/);
});
test('pending edits and deployment-day traffic are never fully treated', () => {
  assert.match(report(), /Deployed before entire window \| 1 \|/);
  assert.match(report(), /No recorded deployment by window end \| 2 \|/);
  assert.match(report(), /Deployment within window.*\| 1 \|/);
  assert.match(report(), /Top-50 nonbrand.*2.00%/);
  assert.match(report(), /Nonbrand queries in top 3.*\| 1 \|/);
});
test('reference snapshots never become live baselines', () => {
  const md = report({ current: { ...current, manifest: { source: 'OWNER snapshot', status: 'REFERENCE BASELINE' } } });
  assert.match(md, /Live baseline pending/);
  assert.doesNotMatch(md, /Top-50 nonbrand query CTR/);
});
test('genuine UI exports distinguish property totals from capped query samples', () => {
  const md = report({ current: { ...current, manifest: { ...manifest, source: 'Google Search Console UI exports', status: 'UI export ingestion', completion: 'partial' }, countries: [{ country: 'United States', impressions: 200, clicks: 4 }] } });
  assert.match(md, /Top-50 exported nonbrand query CTR \(partial sample\)/);
  assert.match(md, /full nonbrand top-3 count remain unmeasured/);
  assert.match(md, /US CTR \(country aggregate\) \| 2.00%/);
  assert.match(md, /Property clicks \(daily aggregate\) \| 10/);
});
test('deltas require equal-duration nonoverlapping live windows for the same property', () => {
  const baseline = { ...current, manifest: { ...manifest, startDate: '2026-08-02', endDate: '2026-08-31' }, dates: [{ impressions: 500, clicks: 5 }] };
  assert.match(report({ baseline }), /Property clicks \| 5 \| 10 \| 5/);
  for (const changed of [{ startDate: '2026-08-01' }, { site: 'sc-domain:other.com' }, { startDate: '2026-09-01', endDate: '2026-09-30' }, { completion: 'incomplete' }]) {
    assert.match(report({ baseline: { ...baseline, manifest: { ...baseline.manifest, ...changed } } }), /No comparable prior window/);
  }
});

test('a second deployment during the window makes an older URL mixed', () => {
  const md = report({ changes: [...changes, { url: '/treated', deploy_date: '2026-09-15' }] });
  assert.match(md, /Deployed before entire window \| 0 \|/);
  assert.match(md, /Deployment within window.*\| 2 \|/);
});
