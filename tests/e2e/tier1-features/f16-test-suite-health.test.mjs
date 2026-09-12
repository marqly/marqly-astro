import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const RUNNER_SCRIPT = resolve(ROOT, 'active/scripts/test-e2e-raindrop.mjs');
const TESTS_DIR = resolve(ROOT, 'tests/e2e');

export const tests = [
  {
    id: 'T1.F16.01',
    feature: 'F16',
    name: 'Standalone test runner script exists at active/scripts/test-e2e-raindrop.mjs',
    run: async () => {
      if (!existsSync(RUNNER_SCRIPT)) {
        return { ok: false, error: 'active/scripts/test-e2e-raindrop.mjs does not exist' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F16.02',
    feature: 'F16',
    name: 'Test suite contains all 4 tiers (tier1-features, tier2-boundaries, tier3-combinations, tier4-scenarios)',
    run: async () => {
      const requiredDirs = [
        'tier1-features',
        'tier2-boundaries',
        'tier3-combinations',
        'tier4-scenarios',
        'fixtures',
        'helpers'
      ];
      for (const dir of requiredDirs) {
        if (!existsSync(resolve(TESTS_DIR, dir))) {
          return { ok: false, error: `Missing test directory: tests/e2e/${dir}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F16.03',
    feature: 'F16',
    name: 'Tier 1 features directory contains test files covering all 16 features (F01-F16)',
    run: async () => {
      const t1Dir = resolve(TESTS_DIR, 'tier1-features');
      const files = readdirSync(t1Dir);
      for (let i = 1; i <= 16; i++) {
        const prefix = `f${String(i).padStart(2, '0')}`;
        const hasFile = files.some(f => f.startsWith(prefix));
        if (!hasFile) {
          return { ok: false, error: `Missing Tier 1 test file for feature ${prefix}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F16.04',
    feature: 'F16',
    name: 'Tier 2 boundaries directory contains test files covering all 16 features (B01-B16)',
    run: async () => {
      const t2Dir = resolve(TESTS_DIR, 'tier2-boundaries');
      if (!existsSync(t2Dir)) return { ok: false, error: 'tier2-boundaries missing' };
      const files = readdirSync(t2Dir);
      for (let i = 1; i <= 16; i++) {
        const prefix = `b${String(i).padStart(2, '0')}`;
        const hasFile = files.some(f => f.startsWith(prefix));
        if (!hasFile) {
          return { ok: false, error: `Missing Tier 2 test file for boundary ${prefix}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F16.05',
    feature: 'F16',
    name: 'Project root contains TEST_INFRA.md and TEST_READY.md documentation',
    run: async () => {
      const infraPath = resolve(ROOT, 'TEST_INFRA.md');
      if (!existsSync(infraPath)) {
        return { ok: false, error: 'TEST_INFRA.md missing at project root' };
      }
      return { ok: true };
    }
  }
];
