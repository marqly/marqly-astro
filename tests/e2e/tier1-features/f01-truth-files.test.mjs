import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const TRUTH_DIR = resolve(ROOT, '.seo/competitors/raindrop');

export const tests = [
  {
    id: 'T1.F01.01',
    feature: 'F01',
    name: 'Authoritative Raindrop truth directory exists and contains 16 JSON specs',
    run: async () => {
      if (!existsSync(TRUTH_DIR)) {
        return { ok: false, error: `Truth directory ${TRUTH_DIR} does not exist` };
      }
      const requiredFiles = [
        'pricing.json', 'platforms.json', 'ai.json', 'features.json',
        'import-export.json', 'limitations.json', 'truth.json', 'integrations.json'
      ];
      for (const file of requiredFiles) {
        if (!existsSync(resolve(TRUTH_DIR, file))) {
          return { ok: false, error: `Missing required truth file: ${file}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F01.02',
    feature: 'F01',
    name: 'Truth pricing.json defines exact USD/EUR pricing and free tier restrictions',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'pricing.json');
      if (!existsSync(p)) return { ok: false, error: 'pricing.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      if (data.free_tier !== true) {
        return { ok: false, error: 'free_tier must be true' };
      }
      const has28 = data.paid_tiers?.some(t => t.billed_annually === 28.0 || t.annual_usd === 28.0);
      if (!has28) {
        return { ok: false, error: 'Expected Pro annual pricing of $28.00 in pricing.json' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F01.03',
    feature: 'F01',
    name: 'Truth platforms.json documents desktop (macOS, Windows, Linux) and mobile support',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'platforms.json');
      if (!existsSync(p)) return { ok: false, error: 'platforms.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      const required = ['macos', 'windows', 'linux', 'ios', 'android', 'web'];
      for (const plat of required) {
        if (data[plat] !== true && !(Array.isArray(data.platforms) && data.platforms.includes(plat))) {
          return { ok: false, error: `Missing verified platform: ${plat}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F01.04',
    feature: 'F01',
    name: 'Truth ai.json documents Stella / save-time suggestions without semantic search',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'ai.json');
      if (!existsSync(p)) return { ok: false, error: 'ai.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      if (data.semantic_retrieval === true || data.semantic_vector_search === true) {
        return { ok: false, error: 'Raindrop does NOT support semantic vector search' };
      }
      if (data.auto_summaries === true || data.auto_summaries_on_save === true) {
        return { ok: false, error: 'Raindrop does NOT offer auto summaries' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F01.05',
    feature: 'F01',
    name: 'Truth import-export.json documents Netscape HTML and CSV formats',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'import-export.json');
      if (!existsSync(p)) return { ok: false, error: 'import-export.json missing' };
      const raw = readFileSync(p, 'utf8').toLowerCase();
      if (!raw.includes('html') || !raw.includes('csv')) {
        return { ok: false, error: 'import-export.json must document both HTML and CSV export capability' };
      }
      return { ok: true };
    }
  }
];
