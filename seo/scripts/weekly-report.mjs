// Reports evidence and deployment exposure; no effect inferred from reference snapshots.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(import.meta.dirname, '..', '..');

import { parseCsv } from './lib/csv.mjs';
export { parseCsv } from './lib/csv.mjs';
function readDataset(dir) {
  const csv = (name) => fs.existsSync(path.join(dir, name)) ? parseCsv(fs.readFileSync(path.join(dir, name), 'utf8')) : null;
  const mp = path.join(dir, 'MANIFEST.json');
  return { manifest: fs.existsSync(mp) ? JSON.parse(fs.readFileSync(mp, 'utf8')) : {},
    pages: csv('page.csv'), queries: csv('query.csv'), countries: csv('country.csv'), dates: csv('date.csv') };
}
const sum = (rows) => (rows || []).reduce((a, r) => ({ imp: a.imp + (+r.impressions || 0), clk: a.clk + (+r.clicks || 0) }), { imp: 0, clk: 0 });
const pct = (a) => a.imp ? (a.clk / a.imp * 100).toFixed(2) + '%' : '—';
function dateValid(s) {
  return /^\d{4}-\d{2}-\d{2}$/.test(s || '') && Number.isFinite(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s;
}
const days = (m) => dateValid(m.startDate) && dateValid(m.endDate) ? Math.round((Date.parse(m.endDate) - Date.parse(m.startDate)) / 86400000) + 1 : null;
const live = (m) => days(m) > 0 && m.source === 'Google Search Console Search Analytics API' && m.completion === 'complete';
function pathname(url) { try { return new URL(url, 'https://www.marqly.com').pathname.replace(/\/$/, '') || '/'; } catch { return url; } }

export function buildReport({ current, baseline = null, changes = [], crawl = null, today }) {
  const m = current.manifest, knownWindow = days(m), measured = live(m);
  const uiEvidence = knownWindow > 0 && m.source === 'Google Search Console UI exports' && !!current.dates;
  const queries = (current.queries || []).filter((r) => !/marqly|markly/i.test(r.query || '') && !/^youtube\d+$/i.test(r.query || ''));
  const top50 = sum([...queries].sort((a, b) => +b.impressions - +a.impressions).slice(0, 50));
  const usa = sum((current.countries || []).filter((r) => /^(usa|us|united states)$/i.test(r.country || '')));
  const top3 = queries.filter((r) => +r.position > 0 && +r.position <= 3 && +r.impressions >= 10).length;
  let md = '# Weekly SEO report — ' + today + '\n\nRecorded evidence only; ranking changes and treatment effects are not assumed.\n\n';
  md += '## Data provenance\n\n- Source: ' + (m.source || 'UNKNOWN') + '\n- Status: ' + (m.status || 'UNKNOWN') + '\n- Property: ' + (m.site || 'not recorded') + '\n';
  md += '- Window: ' + (knownWindow ? m.startDate + '..' + m.endDate + ' (' + knownWindow + ' days)' : 'UNKNOWN — reference subset cannot establish a live baseline') + '\n';
  md += '- Generated: ' + (m.generatedAt || 'not recorded') + '\n- Page rows: ' + (current.pages?.length ?? 'missing') + '; changes-log rows: ' + changes.length + '\n';
  md += '- Query rows are source-visible data; anonymized/omitted queries are not recovered. Page aggregates can differ from property totals.\n\n## Search baseline\n\n';
  if (measured || uiEvidence) {
    if (uiEvidence && !measured) md += 'Genuine UI export with a recorded window. Query/page exports can be capped at 1,000 rows; query rankings/counts below describe only exported rows. The full top-50 query KPI and full nonbrand top-3 count remain unmeasured.\n\n';
    const top50Label = measured ? 'Top-50 nonbrand query CTR, ranked by impressions' : 'Top-50 exported nonbrand query CTR (partial sample)';
    const top3Label = measured ? 'Nonbrand queries in top 3 (≥10 impressions, ghost noise excluded)' : 'Exported nonbrand top-3 queries (observed lower bound; ≥10 impressions)';
    md += '| Metric | Current window |\n|---|---|\n| ' + top50Label + ' | ' + pct(top50) + ' |\n| US CTR (country aggregate) | ' + (current.countries ? pct(usa) : 'unavailable') + ' |\n| ' + top3Label + ' | ' + top3 + ' |\n';
    if (current.dates) { const totals = sum(current.dates); md += '| Property clicks (daily aggregate) | ' + totals.clk + ' |\n| Property impressions (daily aggregate) | ' + totals.imp + ' |\n'; }
  } else md += 'Live baseline pending. Reference/snapshot rows are not presented as a complete pull.\n';
  const firstDeploy = new Map(), deployments = new Map();
  for (const r of changes) if (dateValid(r.deploy_date)) {
    const p = pathname(r.url), old = firstDeploy.get(p);
    if (!deployments.has(p)) deployments.set(p, []);
    deployments.get(p).push(r.deploy_date);
    if (!old || r.deploy_date < old) firstDeploy.set(p, r.deploy_date);
  }
  md += '\n## Deployment exposure\n\n';
  if ((measured || uiEvidence) && current.pages) {
    const groups = { treated: [], control: [], mixed: [] };
    for (const r of current.pages) {
      const p = pathname(r.page), deploy = firstDeploy.get(p);
      const changedWithinWindow = (deployments.get(p) || []).some((d) => d >= m.startDate && d <= m.endDate);
      // Same-day publication includes predeployment traffic: require strictly earlier.
      groups[changedWithinWindow ? 'mixed' : deploy && deploy < m.startDate ? 'treated' : 'control'].push(r);
    }
    md += '| Cohort | Page rows | Impressions | Clicks | CTR |\n|---|---|---|---|---|\n';
    for (const [key, label] of [['treated', 'Deployed before entire window'], ['control', 'No recorded deployment by window end'], ['mixed', 'Deployment within window (exclude from effect comparison)']]) {
      const a = sum(groups[key]); md += '| ' + label + ' | ' + groups[key].length + ' | ' + a.imp + ' | ' + a.clk + ' | ' + pct(a) + ' |\n';
    }
    md += '\nPending changes are not treated. These descriptive cohorts do not establish causation.\n';
  } else md += 'Cohort measurement pending a live, dated dataset. ' + firstDeploy.size + ' URLs have recorded deployment dates.\n';
  md += '\n## Like-for-like comparison\n\n';
  if (baseline && measured && live(baseline.manifest) && m.site === baseline.manifest.site && days(m) === days(baseline.manifest) && baseline.manifest.endDate < m.startDate && current.dates && baseline.dates) {
    const now = sum(current.dates), before = sum(baseline.dates);
    md += 'Equal-length nonoverlapping windows: ' + baseline.manifest.startDate + '..' + baseline.manifest.endDate + ' → ' + m.startDate + '..' + m.endDate + '.\n\n';
    md += '| Metric | Prior | Current | Delta |\n|---|---|---|---|\n| Property clicks | ' + before.clk + ' | ' + now.clk + ' | ' + (now.clk - before.clk) + ' |\n| Property impressions | ' + before.imp + ' | ' + now.imp + ' | ' + (now.imp - before.imp) + ' |\n';
    md += '| Property CTR | ' + pct(before) + ' | ' + pct(now) + ' | ' + (now.imp && before.imp ? ((now.clk / now.imp - before.clk / before.imp) * 100).toFixed(2) + ' pp' : '—') + ' |\n';
  } else md += 'No comparable prior window supplied. Use --baseline-dir with a live dataset for the same property, equal duration, and an earlier nonoverlapping window. Day-30 change remains unmeasured until the observation window exists.\n';
  md += '\n## Crawl evidence\n\n';
  if (crawl) md += 'Recorded crawl (' + crawl.generatedAt + ', ' + crawl.source + '): ' + crawl.indexable + '/' + crawl.total + ' indexable URLs, ' + (crawl.kpi?.localized_stubs_parity_lt50 ?? 'unknown') + ' localized stubs. This is the recorded crawl state; it does not describe a subsequent deployment.\n';
  else md += 'No crawl evidence supplied.\n';
  return md;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const opt = (name) => process.argv.slice(2).find((x) => x.startsWith('--' + name + '='))?.slice(name.length + 3);
  const dir = process.env.GSC_DIR || path.join(ROOT, 'seo/data/gsc');
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dubai' });
  const cp = path.join(ROOT, 'seo/data/changes-log.csv'), mp = path.join(ROOT, 'seo/data/crawl/meta.json');
  const report = buildReport({ current: readDataset(dir), baseline: opt('baseline-dir') ? readDataset(path.resolve(opt('baseline-dir'))) : null,
    changes: fs.existsSync(cp) ? parseCsv(fs.readFileSync(cp, 'utf8')) : [], crawl: fs.existsSync(mp) ? JSON.parse(fs.readFileSync(mp, 'utf8')) : null, today });
  const output = opt('out') ? path.resolve(opt('out')) : path.join(ROOT, 'seo/reports', 'weekly-' + today + '.md');
  fs.mkdirSync(path.dirname(output), { recursive: true }); fs.writeFileSync(output, report);
  console.log('wrote ' + path.relative(ROOT, output));
}
