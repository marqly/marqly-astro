import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { analyticsProvenance } from '../scripts/lib/gsc-provenance.mjs';

test('rejects reference snapshots, incomplete pulls and mismatched windows', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gsc-provenance-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const write = (m) => fs.writeFileSync(path.join(dir, 'MANIFEST.json'), JSON.stringify(m));
  const pull = { rows: 1, startDate: '2026-07-06', endDate: '2026-10-03', truncated: false, paginationExhausted: true };
  const manifest = { source: 'Google Search Console Search Analytics API', completion: 'complete', startDate: pull.startDate, endDate: pull.endDate, pulls: { query: pull } };
  write({ status: 'OWNER snapshot' });
  assert.throws(() => analyticsProvenance(dir, ['query']), /reference or unknown/);
  fs.writeFileSync(path.join(dir, 'query.csv'), 'query,impressions,clicks,ctr,position\na,1,0,0,3\n');
  write(manifest);
  assert.equal(analyticsProvenance(dir, ['query']).inputRows.query, 1);
  write({ ...manifest, pulls: { query: { ...pull, truncated: true } } });
  assert.throws(() => analyticsProvenance(dir, ['query']), /Incomplete/);
  assert.match(analyticsProvenance(dir, ['query'], { allowPartial: true }).analysisScope, /Exploratory/);
  write({ ...manifest, pulls: { query: { ...pull, startDate: '2026-07-01' } } });
  assert.throws(() => analyticsProvenance(dir, ['query'], { allowPartial: true }), /Mixed/);
  write(manifest);
  assert.throws(() => analyticsProvenance(dir, ['query_page']), /Missing recorded/);
  write({ ...manifest, startDate: '2025-06-06' });
  assert.throws(() => analyticsProvenance(dir, ['query']), /90-day/);
});
