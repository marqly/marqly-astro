// opportunity-score.mjs — rank refresh targets by (impressions × CTR uplift to a better position).
// Reads seo/data/gsc/{query,page}.csv. Writes position-curve.json (calibration record),
// opportunities_queries.csv, opportunities_pages.csv, top3_nonbrand.txt.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const GSC = process.env.GSC_DIR || path.join(ROOT, 'seo/data/gsc');
const BRAND = /marqly|markly/i;
const IMPROVE_BY = Number(process.env.IMPROVE_BY ?? 3); // model: what we can move a page up in ranks

function readCsv(file) {
  if (!fs.existsSync(file)) { console.error(`missing ${file} — run gsc-pull.mjs first`); process.exit(1); }
  const lines = fs.readFileSync(file, 'utf8').trim().split('\n');
  const head = lines[0].split(',').map((s) => s.replace(/"/g, ''));
  const parse = (l) => { const out = []; let cur = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out.map((s) => s.trim().replace(/^"|"$/g, '')); };
  return lines.slice(1).map((l) => { const c = parse(l); return Object.fromEntries(head.map((h, i) => [h, c[i]])); });
}

// --- position -> CTR curve -----------------------------------------------------
// Prior = published industry averages (ASSUMED until our own data says otherwise).
const PRIOR = { 1: 0.276, 2: 0.158, 3: 0.110, 4: 0.084, 5: 0.063, 6: 0.049, 8: 0.037, 10: 0.031, 12: 0.026, 15: 0.020, 20: 0.013, 30: 0.007, 50: 0.003 };
const BUCKETS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 50];
const NOISE = /^youtube\d+$/i; // master prompt §2.5 ghost impressions

// Calibration uses NON-BRAND, non-ghost queries only: brand rows (CTR 30-80% at pos 1-3)
// and zero-click ghost rows would otherwise distort every bucket they touch.
function calibrate(rows) {
  const clean = rows.filter((r) => !BRAND.test(r.query) && !NOISE.test(r.query));
  const agg = {};
  for (const r of clean) {
    const pos = Math.round(+r.position), imp = +r.impressions, clk = +r.clicks;
    if (!pos || pos > 60) continue;
    const b = BUCKETS.find((x) => x >= pos) ?? 60;
    (agg[b] ??= { imp: 0, clk: 0 });
    agg[b].imp += imp; agg[b].clk += clk;
  }
  // shrinkage toward the prior: w = imp / (imp + K). K=25k impressions per bucket
  // before empirical data dominates — our 16mo window rarely has more at deep pos.
  const K = 25000;
  let curve = BUCKETS.map((b) => {
    const a = agg[b], prior = PRIOR[b];
    if (!a || !a.imp) return { b, c: prior, imp: 0 };
    const w = a.imp / (a.imp + K);
    return { b, c: prior * (1 - w) + (a.clk / a.imp) * w, imp: a.imp };
  });
  // PAVA: enforce monotone non-increasing by volume-weighted pooling of violations.
  curve = curve.map((x) => ({ ...x }));
  for (let i = 1; i < curve.length; i++) {
    if (curve[i].c > curve[i - 1].c) {
      const w0 = (curve[i - 1].imp || 1000), w1 = (curve[i].imp || 1000);
      const pooled = (curve[i - 1].c * w0 + curve[i].c * w1) / (w0 + w1);
      curve[i].c = curve[i - 1].c = pooled;
      curve[i].pooled_with_prev = true;
    }
  }
  const out = {}; for (const x of curve) out[x.b] = +x.c.toFixed(4);
  return { curve: out, agg };
}

function ctrAt(pos, curve) {
  if (pos <= 1) return curve[1];
  const hi = BUCKETS.find((x) => x >= pos);
  const lo = [...BUCKETS].reverse().find((x) => x <= pos);
  if (hi === undefined) return curve[50] * Math.max(0.2, 50 / pos);
  if (hi === lo) return curve[hi];
  const t = (pos - lo) / (hi - lo);
  return curve[lo] + (curve[hi] - curve[lo]) * t;
}

const queries = readCsv(path.join(GSC, 'query.csv'));
const pages = readCsv(path.join(GSC, 'page.csv'));
const { curve, agg } = calibrate(queries);
fs.writeFileSync(path.join(GSC, 'position-curve.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  model: `score = impressions × max(0, ctr(pos−${IMPROVE_BY}) − ctr(pos))`,
  prior_ASSUMED: PRIOR,
  empirical_buckets: agg,
  final_curve: curve,
}, null, 2));

function score(rows, key) {
  return rows.map((r) => {
    const pos = +r.position, imp = +r.impressions, clk = +r.clicks;
    const actual = imp ? clk / imp : 0;
    const targetPos = Math.max(1, pos - IMPROVE_BY);
    const targetCtr = ctrAt(targetPos, curve);
    return {
      [key]: r[key],
      impressions: imp, clicks: clk, ctr: +actual.toFixed(4), position: +pos.toFixed(1),
      target_pos: +targetPos.toFixed(1), target_ctr: +targetCtr.toFixed(4),
      uplift_clicks: Math.round(imp * Math.max(0, targetCtr - actual)),
    };
  }).filter((r) => r.impressions >= 30).sort((a, b) => b.uplift_clicks - a.uplift_clicks);
}

const brandQ = queries.filter((r) => BRAND.test(r.query));
// KPI math excludes brand AND the §2.5 ghost-noise pattern (no clicks, junk attribution)
const nonBrand = queries.filter((r) => !BRAND.test(r.query) && !NOISE.test(r.query));
const noise = queries.filter((r) => NOISE.test(r.query));
const top3 = nonBrand.filter((r) => +r.position <= 3 && +r.impressions >= 10);

fs.writeFileSync(path.join(GSC, 'opportunities_queries.csv'), toCSV(score(nonBrand, 'query')));
fs.writeFileSync(path.join(GSC, 'opportunities_pages.csv'), toCSV(score(pages, 'page')));
fs.writeFileSync(path.join(GSC, 'ghost_noise_queries.csv'), toCSV(score(queries.filter((r) => NOISE.test(r.query)), 'query')));
fs.writeFileSync(path.join(GSC, 'top3_nonbrand.txt'), top3.length ? top3.map((r) => `${r.query}\t${r.position}\t${r.impressions}\t${r.clicks}`).join('\n') + '\n' : '');

function toCSV(rows) {
  if (!rows.length) return '';
  const cols = Object.keys(rows[0]);
  const esc = (v) => `"${String(v).replaceAll('"', '""')}"`;
  return [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n') + '\n';
}

console.log(`curve buckets: ${JSON.stringify(curve)}`);
console.log(`non-brand queries ≥10imp in top3: ${top3.length} (KPI baseline)`);
console.log(`brand share of queries: ${brandQ.length}/${queries.length} rows`);
console.log(`wrote opportunities_{queries,pages}.csv (top ${Math.min(5, 200)} preview):`);
for (const r of score(nonBrand, 'query').slice(0, 5)) console.log(`  ${String(r.uplift_clicks).padStart(4)}  pos ${String(r.position).padStart(4)}  ${r.query}`);
