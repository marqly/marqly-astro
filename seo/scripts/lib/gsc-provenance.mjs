import fs from 'node:fs';
import path from 'node:path';

// API pagination completion describes available returned rows, not all Google queries.
// Explicit partial analysis is exploratory and never authorizes pruning or redirects.
export function analyticsProvenance(dir, names, { allowPartial = false } = {}) {
  const file = path.join(dir, 'MANIFEST.json');
  if (!fs.existsSync(file)) throw new Error('GSC MANIFEST.json is missing; collect a dated dataset before analysis');
  const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!['Google Search Console Search Analytics API', 'Google Search Console UI exports'].includes(manifest.source)) throw new Error('GSC data is a reference or unknown source; collect a current dataset');
  const { startDate, endDate } = manifest;
  const validDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || '') && Number.isFinite(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s;
  if (!validDate(startDate) || !validDate(endDate) || endDate < startDate) throw new Error('GSC dataset has no valid recorded window; reference snapshots cannot establish decisions');
  const windowDays = Math.round((Date.parse(endDate) - Date.parse(startDate)) / 86400000) + 1;
  if (windowDays > 93) throw new Error('Current opportunity/cannibalization analysis needs a recent 90-day/3-month window; preserve the 16-month dataset as history');
  for (const name of names) {
    const pull = manifest.pulls?.[name];
    if (!pull || !fs.existsSync(path.join(dir, name + '.csv'))) throw new Error('Missing recorded GSC pull: ' + name);
    if (pull.startDate !== startDate || pull.endDate !== endDate) throw new Error('Mixed GSC date windows: ' + name);
    if (!allowPartial && (pull.truncated !== false || pull.paginationExhausted !== true)) throw new Error('Incomplete GSC ' + name + ' data; use --allow-partial only for exploratory scoring');
  }
  if (!allowPartial && manifest.completion !== 'complete') throw new Error('GSC pull is incomplete');
  return { source: manifest.source, status: manifest.status, site: manifest.site, startDate, endDate,
    generatedAt: manifest.generatedAt, coverage: manifest.coverage, windowDays,
    analysisScope: allowPartial ? 'Exploratory partial-data analysis; no pruning/redirect decisions or full KPI claims' : 'Paginated API-visible dataset; source omissions remain possible',
    inputRows: Object.fromEntries(names.map((name) => [name, manifest.pulls[name].rows])) };
}
