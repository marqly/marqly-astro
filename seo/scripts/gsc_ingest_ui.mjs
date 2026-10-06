// gsc_ingest_ui.mjs — fallback path: normalize Google Search Console UI CSV exports
// into the same schema gsc-pull.mjs writes, so cannibalization/opportunity-score work
// whether the data came from the API or from "EXPORT" downloads in the GSC UI.
//
// Usage:  node seo/scripts/gsc_ingest_ui.mjs <downloaded.csv> [--as=query_page] [--start=YYYY-MM-DD] [--end=YYYY-MM-DD] [--note="..."]
// Auto-detects the dimension set from the header row when --as is omitted.
// GSC UI exports are keyed by the SAME property the API uses (sc-domain:marqly.com).
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');

function parseCsvLine(l) {
  const out = []; let cur = '', q = false;
  for (let i = 0; i < l.length; i++) {
    const ch = l[i];
    if (ch === '"') { if (l[i + 1] === '"') { cur += '"'; i++; } else q = !q; }
    else if (ch === ',' && !q) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim().replace(/^"|"$/g, ''));
}

const HEADER_MAP = {
  'query': 'query', 'page': 'page', 'country': 'country', 'device': 'device', 'date': 'date',
};

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const opts = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/); return m ? [m[1], m[2] ?? true] : [a.slice(2), true];
}));
const file = args[0];
if (!file) { console.error('usage: gsc_ingest_ui.mjs <export.csv> [--out=dir] [--as=query_page] [--start=] [--end=] [--note=]'); process.exit(2); }
const OUT = opts.out ? path.resolve(String(opts.out)) : path.join(ROOT, 'seo/data/gsc');

const lines = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').trim().split(/\r?\n/);
const head = parseCsvLine(lines[0]);
// map every column by header name (order-agnostic)
const colDim = [], colMet = [];
head.forEach((h, i) => {
  const s = h.toLowerCase();
  if (HEADER_MAP[s]) colDim.push([i, HEADER_MAP[s]]);
  else if (s === 'impressions') colMet.push([i, 'impressions']);
  else if (s === 'clicks') colMet.push([i, 'clicks']);
  else if (s === 'ctr') colMet.push([i, 'ctr']);
  else if (s === 'position') colMet.push([i, 'position']);
});
let dims = colDim.map(([, d]) => d);
if (opts.as && !dims.length) dims = String(opts.as).split('_');
if (opts.as && dims.length && dims.join(',') !== String(opts.as).split('_').join(',')) {
  console.warn(`note: --as=${opts.as} ignored — header already mapped ${dims.join('_')}`);
}
if (!dims.length) {
  console.error(`cannot map header: ${JSON.stringify(head)}\nexpected columns named Query/Page/Country/Device/Date + Impressions/Clicks/CTR/Position`);
  process.exit(2);
}
const key = dims.join('_');
const outPath = path.join(OUT, `${key}.csv`);
fs.mkdirSync(OUT, { recursive: true });

const rows = [];
for (const l of lines.slice(1)) {
  if (!l.trim()) continue;
  const c = parseCsvLine(l);
  const rec = {};
  for (const [i, d] of colDim) rec[d] = c[i] ?? '';
  for (const [i, m] of colMet) rec[m] = (c[i] ?? '').replace(/%/g, '').replace(/,/g, '');
  rows.push(rec);
}
const cols = [...dims, 'impressions', 'clicks', 'ctr', 'position'];
const esc = (v) => `"${String(v).replaceAll('"', '""')}"`;
fs.writeFileSync(outPath, [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n') + '\n');

const man = {
  file: path.relative(ROOT, outPath),
  dims: key,
  rows: rows.length,
  source: 'GSC UI export',
  importedAt: new Date().toISOString(),
  start: opts.start ?? null, end: opts.end ?? null,
  note: opts.note ?? 'date range not recorded — set --start/--end for correct 28d/3mo comparisons',
};
const manPath = path.join(OUT, 'manifest.json');
const list = fs.existsSync(manPath) ? JSON.parse(fs.readFileSync(manPath, 'utf8')) : [];
list.push(man);
fs.writeFileSync(manPath, JSON.stringify(list, null, 2) + '\n');

console.log(`ingested ${rows.length} rows -> ${path.relative(ROOT, outPath)} (${key})`);
console.log(man.note === 'date range not recorded — set --start/--end for correct 28d/3mo comparisons'
  ? 'WARN: window unknown — re-run with --start/--end if this export differs from the API window'
  : `window: ${man.start}..${man.end}`);
