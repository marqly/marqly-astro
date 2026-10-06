// Normalize one GSC UI CSV export into the canonical dataset. Repeated imports
// with the same site/window accumulate dimension files; a different window starts
// a new current dataset and snapshots the prior evidence.
// Usage: node seo/scripts/gsc_ingest_ui.mjs <export.csv> [--as=query_page]
//        [--start=YYYY-MM-DD --end=YYYY-MM-DD] [--site=sc-domain:marqly.com]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  GSC_PULL_NAMES, publishDataset, readManifest, validateExplicitWindow,
} from './lib/gsc-data.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const DEFAULT_OUT = path.join(ROOT, 'seo/data/gsc');
const HEADER_MAP = {
  query: 'query', 'top queries': 'query',
  page: 'page', 'top pages': 'page',
  country: 'country', device: 'device', date: 'date',
};

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; } else quoted = !quoted;
    } else if (char === ',' && !quoted) {
      row.push(field.trim());
      field = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && input[i + 1] === '\n') i++;
      row.push(field.trim());
      field = '';
      if (row.some((value) => value !== '')) rows.push(row);
      row = [];
    } else field += char;
  }
  if (quoted) throw new Error('CSV has an unterminated quoted field');
  if (field || row.length) {
    row.push(field.trim());
    if (row.some((value) => value !== '')) rows.push(row);
  }
  return rows;
}

function parseCli(argv) {
  const positional = [];
  const opts = {};
  for (const arg of argv) {
    if (!arg.startsWith('--')) positional.push(arg);
    else {
      const match = arg.match(/^--([^=]+)(?:=(.*))?$/);
      opts[match[1]] = match[2] ?? true;
    }
  }
  if (positional.length !== 1) throw new Error('usage: gsc_ingest_ui.mjs <export.csv> [--out=dir] [--as=query_page] [--start=YYYY-MM-DD --end=YYYY-MM-DD] [--site=sc-domain:marqly.com] [--note=...]');
  return { file: positional[0], opts };
}

function normalizeMetric(metric, value) {
  const clean = String(value ?? '').replaceAll(',', '').trim();
  if (metric === 'ctr' && clean.endsWith('%')) return String(Number.parseFloat(clean.slice(0, -1)) / 100);
  return clean;
}

function normalizeCsv(file, forcedKey) {
  const input = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').trim();
  if (!input) throw new Error('CSV export is empty');
  const records = parseCsv(input);
  const head = records[0];
  const dimensionColumns = [];
  const metricColumns = [];
  head.forEach((header, index) => {
    const name = header.toLowerCase();
    if (HEADER_MAP[name]) dimensionColumns.push([index, HEADER_MAP[name]]);
    else if (['impressions', 'clicks', 'ctr', 'position'].includes(name)) metricColumns.push([index, name]);
  });
  const dimensions = dimensionColumns.map(([, dimension]) => dimension);
  if (!dimensions.length) throw new Error(`cannot map dimension header: ${JSON.stringify(head)}`);
  const detectedKey = dimensions.join('_');
  const key = forcedKey || detectedKey;
  if (!GSC_PULL_NAMES.includes(key)) throw new Error(`unsupported --as=${key}; available: ${GSC_PULL_NAMES.join(', ')}`);
  if (forcedKey && forcedKey !== detectedKey) {
    throw new Error(`--as=${forcedKey} does not match mapped header dimensions ${detectedKey}`);
  }
  for (const metric of ['impressions', 'clicks', 'ctr', 'position']) {
    if (!metricColumns.some(([, name]) => name === metric)) throw new Error(`CSV is missing ${metric} column`);
  }

  const rows = [];
  for (const cells of records.slice(1)) {
    const record = {};
    for (const [index, dimension] of dimensionColumns) record[dimension] = cells[index] ?? '';
    for (const [index, metric] of metricColumns) record[metric] = normalizeMetric(metric, cells[index]);
    rows.push(record);
  }
  const columns = [...dimensions, 'impressions', 'clicks', 'ctr', 'position'];
  const escape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
  const csv = `${[columns.join(','), ...rows.map((row) => columns.map((column) => escape(row[column])).join(','))].join('\n')}\n`;
  return { key, dimensions, rows, csv };
}

export function ingestUi({ file, opts }, dependencies = {}) {
  const out = opts.out ? path.resolve(String(opts.out)) : DEFAULT_OUT;
  const site = String(opts.site ?? 'sc-domain:marqly.com');
  const hasStart = opts.start !== undefined;
  const hasEnd = opts.end !== undefined;
  if (hasStart !== hasEnd) throw new Error('--start and --end must be supplied together');
  const window = hasStart ? validateExplicitWindow(opts.start, opts.end) : { startDate: null, endDate: null };
  const normalized = normalizeCsv(file, typeof opts.as === 'string' ? opts.as : null);
  const now = dependencies.now ?? new Date();
  const generatedAt = now.toISOString();

  const previous = readManifest(out);
  const canAccumulate = previous?.source === 'Google Search Console UI exports'
    && previous.site === site
    && previous.startDate === window.startDate
    && previous.endDate === window.endDate;
  const files = {};
  const pulls = {};
  if (canAccumulate) {
    for (const [key, provenance] of Object.entries(previous.pulls || {})) {
      const existing = path.join(out, `${key}.csv`);
      if (GSC_PULL_NAMES.includes(key) && fs.existsSync(existing)) {
        files[key] = fs.readFileSync(existing, 'utf8');
        pulls[key] = provenance;
      }
    }
  }
  files[normalized.key] = normalized.csv;
  const rowLimitReached = ['query', 'page'].includes(normalized.key) && normalized.rows.length === 1_000;
  const dimensionValueFormats = normalized.dimensions.includes('country')
    ? { country: 'GSC UI display label, preserved unmodified (for example, United States)' }
    : {};
  pulls[normalized.key] = {
    file: `${normalized.key}.csv`,
    dimensions: normalized.dimensions,
    rows: normalized.rows.length,
    truncated: rowLimitReached ? true : null,
    rowLimitReached,
    paginationExhausted: false,
    startDate: window.startDate,
    endDate: window.endDate,
    provenance: {
      source: 'GSC UI export',
      importedAt: generatedAt,
      exportFile: path.basename(file),
      windowRecorded: hasStart,
      note: opts.note ? String(opts.note) : null,
    },
    dimensionValueFormats,
  };

  const keys = Object.keys(pulls);
  const manifest = {
    schemaVersion: 2,
    source: 'Google Search Console UI exports',
    status: `UI export ingestion ${generatedAt.slice(0, 10)}`,
    completion: 'partial',
    generatedAt,
    pullDate: generatedAt.slice(0, 10),
    site,
    startDate: window.startDate,
    endDate: window.endDate,
    window: { kind: hasStart ? 'explicit' : 'unknown' },
    dimensions: Object.fromEntries(keys.map((key) => [key, pulls[key].dimensions])),
    dimensionValueFormats: Object.fromEntries(keys
      .filter((key) => Object.keys(pulls[key].dimensionValueFormats || {}).length)
      .map((key) => [key, pulls[key].dimensionValueFormats])),
    rowCounts: Object.fromEntries(keys.map((key) => [key, pulls[key].rows])),
    pulls,
    coverage: 'Files were exported from the Search Console UI. Export limits and anonymized or privacy-protected data may omit rows; API pagination completeness is not claimed.',
  };
  (dependencies.publisher ?? publishDataset)({ out, files, manifest });
  console.log(`ingested ${normalized.rows.length} rows -> ${path.relative(ROOT, path.join(out, `${normalized.key}.csv`))}`);
  console.log(hasStart ? `window: ${window.startDate}..${window.endDate}` : 'WARN: export window was not recorded; use --start and --end');
  return manifest;
}

function main() {
  const request = parseCli(process.argv.slice(2));
  ingestUi(request);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
