// gsc-pull.mjs — pull Search Console analytics to seo/data/gsc/*.csv
// Usage: node seo/scripts/gsc-pull.mjs [--site=sc-domain:marqly.com] [--months=16] [--pulls=query,page,...]
// Requires the SA to be a user on the property (see seo/reports/00-setup-steps.md).
import fs from 'node:fs';
import path from 'node:path';
import { gscFetch } from './lib/gsc-auth.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const OUT = process.env.GSC_OUT || path.join(ROOT, 'seo/data/gsc');
const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));

const SITE = args.site ?? 'sc-domain:marqly.com';
const MONTHS = Number(args.months ?? 16);
const ROW_CAP = 25000; // GSC per-request row limit

function d(iso) { return iso.slice(0, 10); }
function windowStart() {
  const end = new Date();
  end.setDate(end.getDate() - 3); // GSC data ~3 days delayed; avoid empty tail
  const start = new Date(end);
  start.setMonth(start.getMonth() - MONTHS);
  // GSC hard-caps history at 16 months
  const floor = new Date();
  floor.setMonth(floor.getMonth() - 16);
  if (start < floor) start.setTime(floor.getTime());
  return { startDate: d(start.toISOString()), endDate: d(end.toISOString()) };
}

const PULLS = {
  query:          { dims: ['query'],                 desc: 'all queries' },
  page:           { dims: ['page'],                  desc: 'all pages' },
  query_page:     { dims: ['query', 'page'],         desc: 'query x page (top combos by impressions)' },
  country:        { dims: ['country'],               desc: 'by country' },
  device:         { dims: ['device'],                desc: 'by device' },
  date:           { dims: ['date'],                  desc: 'daily totals' },
  country_page:   { dims: ['country', 'page'],       desc: 'country x page (US gap analysis)' },
  country_query:  { dims: ['country', 'query'],      desc: 'country x query (US CTR targets)' },
  page_country_date: { dims: ['page', 'country'],    desc: 'page x country (locale sanity)' },
};

function toCSV(rows, dims) {
  const head = [...dims, 'impressions', 'clicks', 'ctr', 'position'];
  const esc = (v) => `"${String(v).replaceAll('"', '""')}"`;
  const lines = [head.join(',')];
  for (const r of rows) {
    lines.push([...(r.keys || []), r.impressions ?? '', r.clicks ?? '', r.ctr ?? '', r.position ?? ''].map(esc).join(','));
  }
  return lines.join('\n') + '\n';
}

async function pullOne(name, conf, { startDate, endDate }) {
  const rows = [];
  let startRow = 0;
  while (true) {
    const body = { startDate, endDate, dimensions: conf.dims, rowLimit: 10000, startRow };
    const json = await gscFetch(
      `/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      { method: 'POST', body },
    );
    rows.push(...(json.rows || []));
    startRow += 10000;
    if ((json.rows || []).length < 10000 || rows.length >= ROW_CAP) break;
  }
  const file = path.join(OUT, `${name}.csv`);
  fs.writeFileSync(file, toCSV(rows, conf.dims));
  const imp = rows.reduce((s, r) => s + (r.impressions || 0), 0);
  console.log(`${name.padEnd(14)} ${String(rows.length).padStart(6)} rows  ${String(imp).padStart(9)} impressions -> ${path.relative(ROOT, file)}`);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const win = windowStart();
  console.log(`site=${SITE} window=${win.startDate}..${win.endDate}`);
  const wanted = String(args.pulls ?? Object.keys(PULLS).join(',')).split(',');
  let permFail = false;
  for (const name of wanted) {
    const conf = PULLS[name];
    if (!conf) { console.error(`unknown pull "${name}" — available: ${Object.keys(PULLS).join(', ')}`); process.exitCode = 2; continue; }
    try {
      await pullOne(name, conf, win);
    } catch (e) {
      if (e.status === 403) {
        console.error(`403 for ${name} — the service account is not yet a user on "${SITE}". Grant access in GSC, then re-run.`);
        permFail = true;
        break;
      }
      if (e.status === 429) { console.error('rate limited, sleeping 65s'); await new Promise((r) => setTimeout(r, 65_000)); continue; }
      throw e;
    }
  }
  if (permFail) process.exit(3);
  console.log('done.');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
