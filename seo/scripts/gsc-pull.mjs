// Pull Search Console analytics into a transactionally published GSC dataset.
// Usage: node seo/scripts/gsc-pull.mjs [--site=sc-domain:marqly.com]
//        [--start=YYYY-MM-DD --end=YYYY-MM-DD | --days=90]
//        [--pulls=query,page,...]
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gscFetch } from './lib/gsc-auth.mjs';
import { GSC_PULL_NAMES, publishDataset, validateExplicitWindow } from './lib/gsc-data.mjs';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const DEFAULT_OUT = path.join(ROOT, 'seo/data/gsc');
const PAGE_SIZE = 25_000;

export const PULLS = {
  query: { dims: ['query'] },
  page: { dims: ['page'] },
  query_page: { dims: ['query', 'page'] },
  country: { dims: ['country'] },
  device: { dims: ['device'] },
  date: { dims: ['date'] },
  country_page: { dims: ['country', 'page'] },
  country_query: { dims: ['country', 'query'] },
  page_country_date: { dims: ['page', 'country'] },
};

export function parseArgs(argv) {
  return Object.fromEntries(argv.map((arg) => {
    const match = arg.match(/^--([^=]+)(?:=(.*))?$/);
    if (!match) throw new Error(`unexpected argument: ${arg}`);
    return [match[1], match[2] ?? true];
  }));
}

function isoDay(date) { return date.toISOString().slice(0, 10); }

function pacificCalendarDate(now) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const part = (type) => Number(parts.find((item) => item.type === type).value);
  return new Date(Date.UTC(part('year'), part('month') - 1, part('day')));
}

function subtractCalendarMonths(date, months) {
  const targetMonth = date.getUTCFullYear() * 12 + date.getUTCMonth() - months;
  const year = Math.floor(targetMonth / 12);
  const month = targetMonth - year * 12;
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return new Date(Date.UTC(year, month, Math.min(date.getUTCDate(), lastDay)));
}

export function resolveWindow(args, now = new Date()) {
  const hasStart = args.start !== undefined;
  const hasEnd = args.end !== undefined;
  const hasDays = args.days !== undefined;
  if (hasStart !== hasEnd) throw new Error('--start and --end must be supplied together');
  if ((hasStart || hasEnd) && hasDays) throw new Error('use either --start/--end or --days, not both');
  if (args.months !== undefined && Number(args.months) !== 16) {
    throw new Error('--months is deprecated; use explicit --start/--end (only --months=16 is accepted)');
  }
  if (args.months !== undefined && (hasStart || hasDays)) {
    throw new Error('--months cannot be combined with --start/--end or --days');
  }

  const today = pacificCalendarDate(now);
  const historyFloor = subtractCalendarMonths(today, 16);
  if (hasStart) {
    const explicit = validateExplicitWindow(args.start, args.end);
    if (explicit.startDate < isoDay(historyFloor)) {
      throw new Error(`--start predates the available 16-month Search Console history (${isoDay(historyFloor)})`);
    }
    if (explicit.endDate > isoDay(today)) throw new Error('--end cannot be later than today in America/Los_Angeles');
    return { ...explicit, kind: 'explicit' };
  }

  const end = new Date(today);
  end.setUTCDate(end.getUTCDate() - 3);
  if (hasDays) {
    if (!/^\d+$/.test(String(args.days)) || Number(args.days) < 1) throw new Error('--days must be a positive integer');
    const days = Number(args.days);
    const start = new Date(end);
    start.setUTCDate(start.getUTCDate() - days + 1);
    if (start < historyFloor) throw new Error(`--days exceeds the available 16-month Search Console history (maximum start ${isoDay(historyFloor)})`);
    return { startDate: isoDay(start), endDate: isoDay(end), kind: 'days', days };
  }

  return { startDate: isoDay(historyFloor), endDate: isoDay(end), kind: 'default16mo', months: 16 };
}

function toCSV(rows, dims) {
  const head = [...dims, 'impressions', 'clicks', 'ctr', 'position'];
  const esc = (value) => `"${String(value).replaceAll('"', '""')}"`;
  return `${[head.join(','), ...rows.map((row) => [
    ...(row.keys || []), row.impressions ?? '', row.clicks ?? '', row.ctr ?? '', row.position ?? '',
  ].map(esc).join(','))].join('\n')}\n`;
}

export async function withTransientRetry(operation, {
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  delays = [1_000, 2_000, 5_000, 10_000, 30_000],
} = {}) {
  for (let attempt = 0; ; attempt++) {
    try {
      return await operation();
    } catch (error) {
      const transient = error?.status === 429 || (error?.status >= 500 && error?.status <= 599);
      if (!transient || attempt >= delays.length) throw error;
      const wait = Math.min(delays[attempt], 30_000);
      console.warn(`GSC transient HTTP ${error.status}; retrying same page in ${wait / 1000}s (${attempt + 1}/${delays.length})`);
      await sleep(wait);
    }
  }
}

export async function fetchPull(name, conf, window, {
  fetcher = gscFetch,
  pageSize = PAGE_SIZE,
  sleep,
  retryDelays,
} = {}) {
  const rows = [];
  let startRow = 0;
  while (true) {
    const body = {
      startDate: window.startDate,
      endDate: window.endDate,
      dimensions: conf.dims,
      rowLimit: pageSize,
      startRow,
    };
    const json = await withTransientRetry(() => fetcher(
      `/webmasters/v3/sites/${encodeURIComponent(window.site)}/searchAnalytics/query`,
      { method: 'POST', body },
    ), { sleep, delays: retryDelays });
    const page = json.rows || [];
    rows.push(...page);
    if (page.length < pageSize) break;
    startRow += pageSize;
  }
  return {
    csv: toCSV(rows, conf.dims),
    rows,
    manifest: {
      file: `${name}.csv`,
      dimensions: conf.dims,
      rows: rows.length,
      truncated: false,
      truncationScope: 'No client-side row cap; Search Console API coverage limits still apply.',
      paginationExhausted: true,
      startDate: window.startDate,
      endDate: window.endDate,
    },
  };
}

export async function runPull(args, dependencies = {}) {
  const site = String(args.site ?? 'sc-domain:marqly.com');
  const out = args.out ? path.resolve(String(args.out)) : (process.env.GSC_OUT || DEFAULT_OUT);
  const now = dependencies.now ?? new Date();
  const window = { ...resolveWindow(args, now), site };
  const wanted = String(args.pulls ?? GSC_PULL_NAMES.join(',')).split(',').filter(Boolean);
  if (!wanted.length || new Set(wanted).size !== wanted.length) throw new Error('--pulls must contain unique pull names');
  for (const name of wanted) {
    if (!PULLS[name]) throw new Error(`unknown pull "${name}"; available: ${GSC_PULL_NAMES.join(', ')}`);
  }

  const staged = {};
  const pullManifest = {};
  const rowCounts = {};
  for (const name of wanted) {
    const result = await fetchPull(name, PULLS[name], window, dependencies);
    staged[name] = result.csv;
    pullManifest[name] = result.manifest;
    rowCounts[name] = result.rows.length;
    const impressions = result.rows.reduce((sum, row) => sum + (row.impressions || 0), 0);
    console.log(`${name.padEnd(18)} ${String(result.rows.length).padStart(7)} API-returned rows  ${String(impressions).padStart(10)} impressions`);
  }

  const generatedAt = now.toISOString();
  const manifest = {
    schemaVersion: 2,
    source: 'Google Search Console Search Analytics API',
    status: `live pull ${generatedAt.slice(0, 10)}`,
    completion: 'complete',
    generatedAt,
    pullDate: generatedAt.slice(0, 10),
    site,
    startDate: window.startDate,
    endDate: window.endDate,
    window: { kind: window.kind, ...(window.days ? { days: window.days } : {}), ...(window.months ? { months: window.months } : {}) },
    dimensions: Object.fromEntries(wanted.map((name) => [name, PULLS[name].dims])),
    rowCounts,
    pulls: pullManifest,
    coverage: 'All rows available to this aggregate API request were paginated until exhaustion. This is not exhaustive Google search data: Search Console may omit anonymized/privacy-protected queries, drop some query/page rows, and returns at most 50,000 rows per day per search type.',
    documentation: [
      'https://developers.google.com/webmaster-tools/v1/searchanalytics/query',
      'https://developers.google.com/webmaster-tools/v1/how-tos/all-your-data',
    ],
  };
  (dependencies.publisher ?? publishDataset)({ out, files: staged, manifest });
  console.log(`published ${wanted.length} pull(s) for ${site}, ${window.startDate}..${window.endDate} -> ${path.relative(ROOT, out)}`);
  return manifest;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await runPull(args);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    const detail = error?.status === 403
      ? 'GSC access denied (403). Grant the service account Full access to the property, then retry.'
      : error.message;
    console.error(detail);
    process.exitCode = error?.status === 403 ? 3 : 1;
  });
}
