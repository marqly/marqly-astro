import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { resolveWindow, runPull } from '../scripts/gsc-pull.mjs';
import { ingestUi } from '../scripts/gsc_ingest_ui.mjs';

function tempDir(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'marqly-gsc-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

test('validates explicit windows and computes 90 Pacific-calendar days', () => {
  assert.deepEqual(resolveWindow(
    { days: '90' },
    new Date('2026-10-06T01:00:00.000Z'), // still Oct 5 in America/Los_Angeles
  ), {
    startDate: '2026-07-05', endDate: '2026-10-02', kind: 'days', days: 90,
  });
  assert.throws(() => resolveWindow({ start: '2026-02-30', end: '2026-03-02' }), /valid calendar date/);
  assert.throws(() => resolveWindow({ start: '2026-03-03', end: '2026-03-02' }), /on or before/);
  assert.throws(() => resolveWindow({ start: '2026-03-01' }), /supplied together/);
  assert.throws(() => resolveWindow({ start: true, end: true }), /YYYY-MM-DD/);
  assert.throws(() => resolveWindow({ days: '10000' }), /exceeds the available 16-month/);
  assert.deepEqual(resolveWindow({}, new Date('2026-10-06T12:00:00.000Z')), {
    startDate: '2025-06-06', endDate: '2026-10-03', kind: 'default16mo', months: 16,
  });
  assert.deepEqual(resolveWindow({}, new Date('2026-01-31T20:00:00.000Z')), {
    startDate: '2024-09-30', endDate: '2026-01-28', kind: 'default16mo', months: 16,
  });
});

test('paginates to exhaustion and retries the same page after a transient error', async () => {
  const starts = [];
  const waits = [];
  const transientStatuses = [503, 429];
  let published;
  const fetcher = async (_url, { body }) => {
    starts.push(body.startRow);
    if (body.startRow === 0 && transientStatuses.length) {
      const error = new Error('transient');
      error.status = transientStatuses.shift();
      throw error;
    }
    if (body.startRow === 0) return { rows: [
      { keys: ['one'], clicks: 2, impressions: 10, ctr: 0.2, position: 1 },
      { keys: ['two'], clicks: 1, impressions: 5, ctr: 0.2, position: 2 },
    ] };
    return { rows: [{ keys: ['three'], clicks: 1, impressions: 2, ctr: 0.5, position: 3 }] };
  };

  const manifest = await runPull({ pulls: 'query', days: '90' }, {
    now: new Date('2026-10-06T12:00:00.000Z'), fetcher, pageSize: 2,
    retryDelays: [7, 8], sleep: async (ms) => waits.push(ms),
    publisher: (value) => { published = value; },
  });
  assert.deepEqual(starts, [0, 0, 0, 2]);
  assert.deepEqual(waits, [7, 8]);
  assert.equal(manifest.pulls.query.rows, 3);
  assert.equal(manifest.pulls.query.paginationExhausted, true);
  assert.equal(manifest.pulls.query.truncated, false);
  assert.match(published.files.query, /"three"/);
});

test('does not replace the current dataset when a later requested pull fails', async (t) => {
  const out = path.join(tempDir(t), 'gsc');
  fs.mkdirSync(out);
  fs.writeFileSync(path.join(out, 'MANIFEST.json'), '{"status":"owner baseline"}\n');
  fs.writeFileSync(path.join(out, 'query.csv'), 'original\n');
  let calls = 0;
  const fetcher = async () => {
    calls++;
    if (calls === 1) return { rows: [] };
    const error = new Error('server error');
    error.status = 503;
    throw error;
  };
  await assert.rejects(runPull({ out, pulls: 'query,page', days: '90' }, {
    now: new Date('2026-10-06T12:00:00.000Z'), fetcher, retryDelays: [], sleep: async () => {},
  }), /server error/);
  assert.equal(fs.readFileSync(path.join(out, 'query.csv'), 'utf8'), 'original\n');
  assert.equal(fs.readFileSync(path.join(out, 'MANIFEST.json'), 'utf8'), '{"status":"owner baseline"}\n');
});

test('subset publication removes mixed-window files and snapshots old and new evidence', async (t) => {
  const out = path.join(tempDir(t), 'gsc');
  fs.mkdirSync(out);
  fs.writeFileSync(path.join(out, 'MANIFEST.json'), '{"status":"owner baseline"}\n');
  fs.writeFileSync(path.join(out, 'query.csv'), 'old query\n');
  fs.writeFileSync(path.join(out, 'page.csv'), 'old page\n');
  fs.writeFileSync(path.join(out, 'opportunities_pages.csv'), 'stale derived data\n');
  fs.writeFileSync(path.join(out, 'prompt-keep.csv'), 'curated policy,keep me\n');
  await runPull({ out, pulls: 'query', start: '2026-07-01', end: '2026-09-30' }, {
    now: new Date('2026-10-06T12:00:00.000Z'), fetcher: async () => ({ rows: [] }),
  });
  assert.equal(fs.existsSync(path.join(out, 'page.csv')), false);
  assert.equal(fs.existsSync(path.join(out, 'opportunities_pages.csv')), false);
  assert.equal(fs.readFileSync(path.join(out, 'prompt-keep.csv'), 'utf8'), 'curated policy,keep me\n');
  assert.equal(fs.existsSync(path.join(out, 'MANIFEST.json')), true);
  const snapshots = fs.readdirSync(path.join(out, 'snapshots'));
  assert.equal(snapshots.length, 2);
  const previous = snapshots.find((name) => name.startsWith('previous-before-'));
  assert.equal(fs.readFileSync(path.join(out, 'snapshots', previous, 'page.csv'), 'utf8'), 'old page\n');
  assert.equal(fs.readFileSync(path.join(out, 'snapshots', previous, 'opportunities_pages.csv'), 'utf8'), 'stale derived data\n');
  const current = snapshots.find((name) => !name.startsWith('previous-before-'));
  assert.equal(fs.existsSync(path.join(out, 'snapshots', current, 'query.csv')), true);
});

test('UI ingestion canonicalizes manifest casing and records per-file non-API provenance', (t) => {
  const root = tempDir(t);
  const out = path.join(root, 'gsc');
  fs.mkdirSync(out);
  fs.writeFileSync(path.join(out, 'manifest.json'), '{"status":"old lowercase evidence"}\n');
  fs.writeFileSync(path.join(out, 'page.csv'), 'old page\n');
  const input = path.join(root, 'Queries.csv');
  fs.writeFileSync(input, 'Top queries,Clicks,Impressions,CTR,Position\n"example\ncontinued",2,100,2%,4.5\n');
  const manifest = ingestUi({ file: input, opts: {
    out, start: '2026-07-01', end: '2026-09-30', note: '90-day export',
  } }, { now: new Date('2026-10-06T12:00:00.000Z') });
  assert.deepEqual(fs.readdirSync(out).filter((name) => name.toLowerCase() === 'manifest.json'), ['MANIFEST.json']);
  assert.equal(fs.existsSync(path.join(out, 'page.csv')), false);
  assert.equal(manifest.completion, 'partial');
  assert.equal(manifest.pulls.query.paginationExhausted, false);
  assert.equal(manifest.pulls.query.rows, 1);
  assert.equal(manifest.pulls.query.provenance.exportFile, 'Queries.csv');
  assert.match(fs.readFileSync(path.join(out, 'query.csv'), 'utf8'), /"0.02"/);

  const pagesInput = path.join(root, 'Pages.csv');
  fs.writeFileSync(pagesInput, 'Top pages,Clicks,Impressions,CTR,Position\nhttps://www.marqly.com/,3,100,3%,2\n');
  const accumulated = ingestUi({ file: pagesInput, opts: {
    out, start: '2026-07-01', end: '2026-09-30',
  } }, { now: new Date('2026-10-06T12:00:01.000Z') });
  assert.deepEqual(Object.keys(accumulated.pulls).sort(), ['page', 'query']);
  assert.equal(fs.existsSync(path.join(out, 'query.csv')), true);
  assert.equal(fs.existsSync(path.join(out, 'page.csv')), true);

  const limitedInput = path.join(root, 'Queries-1000.csv');
  const limitedRows = Array.from({ length: 1_000 }, (_, index) => `query ${index},1,2,50%,${index + 1}`);
  fs.writeFileSync(limitedInput, `Top queries,Clicks,Impressions,CTR,Position\n${limitedRows.join('\n')}\n`);
  const limited = ingestUi({ file: limitedInput, opts: {
    out, start: '2026-07-01', end: '2026-09-30',
  } }, { now: new Date('2026-10-06T12:00:02.000Z') });
  assert.equal(limited.pulls.query.rows, 1_000);
  assert.equal(limited.pulls.query.rowLimitReached, true);
  assert.equal(limited.pulls.query.truncated, true);

  const countryInput = path.join(root, 'Countries.csv');
  fs.writeFileSync(countryInput, 'Country,Clicks,Impressions,CTR,Position\nUnited States,4,200,2%,3\n');
  const withCountry = ingestUi({ file: countryInput, opts: {
    out, start: '2026-07-01', end: '2026-09-30',
  } }, { now: new Date('2026-10-06T12:00:03.000Z') });
  assert.match(withCountry.dimensionValueFormats.country.country, /display label/);
  assert.match(fs.readFileSync(path.join(out, 'country.csv'), 'utf8'), /"United States"/);
});
