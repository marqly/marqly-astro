import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCsv } from '../scripts/lib/csv.mjs';

const SCRIPT = fileURLToPath(new URL('../scripts/opportunity-score.mjs', import.meta.url));

function fixture(t, { queryPageComplete = true } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'opportunity-score-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const window = { startDate: '2026-07-06', endDate: '2026-10-03' };
  const pull = (rows, complete = true) => ({
    rows, ...window, truncated: !complete, paginationExhausted: complete,
  });
  fs.writeFileSync(path.join(dir, 'MANIFEST.json'), JSON.stringify({
    source: 'Google Search Console Search Analytics API',
    status: 'fixture',
    completion: queryPageComplete ? 'complete' : 'partial',
    site: 'sc-domain:example.com',
    generatedAt: '2026-10-06T00:00:00.000Z',
    ...window,
    pulls: {
      query: pull(2),
      page: pull(2),
      query_page: pull(3, queryPageComplete),
    },
  }));
  fs.writeFileSync(path.join(dir, 'query.csv'), [
    'query,impressions,clicks,ctr,position',
    'useful query,500,0,0,10',
    'youtube123,900,4,0.0044444444,10',
    '',
  ].join('\n'));
  fs.writeFileSync(path.join(dir, 'page.csv'), [
    'page,impressions,clicks,ctr,position',
    'https://example.com/ghost-heavy,1000,4,0.004,10',
    'https://example.com/clean,500,0,0,10',
    '',
  ].join('\n'));
  fs.writeFileSync(path.join(dir, 'query_page.csv'), [
    'query,page,impressions,clicks,ctr,position',
    'youtube123,https://example.com/ghost-heavy,900,4,0.0044444444,10',
    'useful query,https://example.com/ghost-heavy,100,0,0,10',
    'useful query,https://example.com/clean,500,0,0,10',
    '',
  ].join('\n'));
  return dir;
}

function run(dir, args = []) {
  return spawnSync(process.execPath, [SCRIPT, ...args], {
    env: { ...process.env, GSC_DIR: dir },
    encoding: 'utf8',
  });
}

test('page scoring subtracts explicit visible ghosts and demotes a ghost-heavy page without changing raw evidence', (t) => {
  const dir = fixture(t);
  const rawNames = ['MANIFEST.json', 'query.csv', 'page.csv', 'query_page.csv'];
  const before = Object.fromEntries(rawNames.map((name) => [name, fs.readFileSync(path.join(dir, name), 'utf8')]));

  const result = run(dir);
  assert.equal(result.status, 0, result.stderr);
  for (const name of rawNames) assert.equal(fs.readFileSync(path.join(dir, name), 'utf8'), before[name]);

  const pages = parseCsv(fs.readFileSync(path.join(dir, 'opportunities_pages.csv'), 'utf8'));
  assert.equal(pages[0].page, 'https://example.com/clean');
  const ghostHeavy = pages.find((row) => row.page === 'https://example.com/ghost-heavy');
  assert.deepEqual({
    rawImpressions: +ghostHeavy.raw_impressions,
    ghostImpressions: +ghostHeavy.ghost_impressions,
    eligibleImpressions: +ghostHeavy.eligible_impressions,
    rawClicks: +ghostHeavy.raw_clicks,
    ghostClicks: +ghostHeavy.ghost_clicks,
    eligibleClicks: +ghostHeavy.eligible_clicks,
    rawPosition: +ghostHeavy.raw_position,
  }, {
    rawImpressions: 1000,
    ghostImpressions: 900,
    eligibleImpressions: 100,
    rawClicks: 4,
    ghostClicks: 4,
    eligibleClicks: 0,
    rawPosition: 10,
  });

  const queries = parseCsv(fs.readFileSync(path.join(dir, 'opportunities_queries.csv'), 'utf8'));
  assert.equal(queries[0].query, 'useful query');
  assert.equal(+queries[0].impressions, 500);
  assert.equal(queries.some((row) => row.query === 'youtube123'), false);

  const model = JSON.parse(fs.readFileSync(path.join(dir, 'position-curve.json'), 'utf8'));
  assert.match(model.page_adjustment.page_model, /eligible_impressions.*raw_position.*eligible_ctr/);
  assert.match(model.page_adjustment.position_ASSUMED, /Raw page position/);
  assert.match(model.page_adjustment.coverage_limit, /Google-omitted\/anonymized/);
  assert.equal(model.page_adjustment.provenance.inputRows.query_page, 3);
  assert.match(result.stdout, /subtract only query_page-visible explicit/);
});

test('page adjustment rejects incomplete query_page provenance even with --allow-partial', (t) => {
  const dir = fixture(t, { queryPageComplete: false });
  const result = run(dir, ['--allow-partial']);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Incomplete GSC query_page data/);
  assert.equal(fs.existsSync(path.join(dir, 'opportunities_pages.csv')), false);
});
