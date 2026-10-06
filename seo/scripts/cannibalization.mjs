// cannibalization.mjs — GSC query×page -> per-query impression-share owners.
// Reads seo/data/gsc/query_page.csv (run gsc-pull.mjs first).
// Rule (per master prompt §4.0.2): every page holding >=10% of a query's impressions is a co-owner.
import fs from 'node:fs';
import path from 'node:path';
import { parseCsv } from './lib/csv.mjs';
import { analyticsProvenance } from './lib/gsc-provenance.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const GSC = process.env.GSC_DIR || path.join(ROOT, 'seo/data/gsc');
const IN = path.join(GSC, 'query_page.csv');
const OUT = path.join(GSC, 'cannibalization.csv');
const BRAND = /marqly|markly/i;
let provenance;
try { provenance = analyticsProvenance(GSC, ['query_page']); }
catch (error) { console.error(error.message); process.exit(2); }

if (!fs.existsSync(IN)) { console.error(`missing ${path.relative(ROOT, IN)} — run gsc-pull first`); process.exit(1); }

const records = parseCsv(fs.readFileSync(IN, 'utf8'));
if (records.length && !['query', 'page', 'impressions'].every((key) => key in records[0])) {
  console.error(`header mismatch in ${path.basename(IN)} — expected query,page,impressions,clicks[,position]`); process.exit(2);
}
const byQuery = new Map();
for (const r of records) {
  const query = (r.query || '').toLowerCase(), page = r.page;
  if (!query || !page || BRAND.test(query)) continue;
  if (!byQuery.has(query)) byQuery.set(query, []);
  byQuery.get(query).push({ page, imp: +r.impressions || 0, clicks: +r.clicks || 0, pos: +r.position || 0 });
}

const out = [];
for (const [query, rows] of byQuery) {
  const total = rows.reduce((s, r) => s + r.imp, 0);
  if (total < 50) continue; // signal too low to matter
  rows.sort((a, b) => b.imp - a.imp);
  const owners = rows.filter((r) => r.imp / total >= 0.10);
  if (owners.length < 2) continue;
  for (const o of owners) {
    out.push({ query, total_imp: total, page: o.page, share: +(o.imp / total * 100).toFixed(1), imp: o.imp, clicks: o.clicks, pos: +o.pos.toFixed(1) });
  }
}
out.sort((a, b) => b.total_imp - a.total_imp || a.query.localeCompare(b.query));

const cols = Object.keys(out[0] || { query: 1 });
const esc = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
fs.writeFileSync(OUT, [cols.join(','), ...out.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n') + '\n');
fs.writeFileSync(path.join(GSC, 'cannibalization-provenance.json'), JSON.stringify(provenance, null, 2) + '\n');

const qcount = new Map();
for (const r of out) qcount.set(r.query, (qcount.get(r.query) || 0) + 1);
const clusters = [...qcount.entries()].sort((a, b) => b[1] - a[1]);
console.log(`${out.length} co-ownership rows across ${clusters.length} queries -> ${path.relative(ROOT, OUT)}\n`);
console.log('Top contested queries (owner count):');
for (const [q, n] of clusters.slice(0, 25)) console.log(`  ${String(n).padStart(2)} owners  ${q}`);
