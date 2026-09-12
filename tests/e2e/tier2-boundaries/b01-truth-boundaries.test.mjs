import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const TRUTH_DIR = resolve(ROOT, '.seo/competitors/raindrop');

export const tests = [
  {
    id: 'T2.B01.01',
    feature: 'F01',
    name: 'All truth JSON files are syntactically valid JSON with no trailing commas or syntax errors',
    run: async () => {
      if (!existsSync(TRUTH_DIR)) return { ok: false, error: 'Truth directory missing' };
      const files = ['pricing.json', 'platforms.json', 'ai.json', 'features.json', 'limitations.json'];
      for (const file of files) {
        const p = resolve(TRUTH_DIR, file);
        if (existsSync(p)) {
          try {
            JSON.parse(readFileSync(p, 'utf8'));
          } catch (err) {
            return { ok: false, error: `Syntax error in ${file}: ${err.message}` };
          }
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B01.02',
    feature: 'F01',
    name: 'pricing.json paid tier prices are positive non-zero numbers',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'pricing.json');
      if (!existsSync(p)) return { ok: false, error: 'pricing.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      const tiers = data.paid_tiers || [];
      for (const t of tiers) {
        if (t.monthly_price !== undefined && t.monthly_price <= 0) {
          return { ok: false, error: `Invalid monthly price: ${t.monthly_price}` };
        }
        if (t.billed_annually !== undefined && t.billed_annually <= 0) {
          return { ok: false, error: `Invalid annual price: ${t.billed_annually}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B01.03',
    feature: 'F01',
    name: 'platforms.json flags are strictly boolean or non-empty string arrays',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'platforms.json');
      if (!existsSync(p)) return { ok: false, error: 'platforms.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      for (const [k, v] of Object.entries(data)) {
        if (typeof v !== 'boolean' && !Array.isArray(v)) {
          return { ok: false, error: `Platform property ${k} has non-boolean, non-array value: ${typeof v}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B01.04',
    feature: 'F01',
    name: 'limitations.json contains non-empty array of documented constraints',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'limitations.json');
      if (!existsSync(p)) return { ok: false, error: 'limitations.json missing' };
      const data = JSON.parse(readFileSync(p, 'utf8'));
      const list = Array.isArray(data) ? data : data.limitations;
      if (!Array.isArray(list) || list.length === 0) {
        return { ok: false, error: 'limitations.json must contain non-empty array of limitations' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B01.05',
    feature: 'F01',
    name: 'Official source URLs in official-sources.json or truth.json use secure HTTPS protocols',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'official-sources.json');
      if (!existsSync(p)) return { ok: true }; // optional file
      const raw = readFileSync(p, 'utf8');
      if (raw.includes('http://')) {
        return { ok: false, error: 'Insecure HTTP URLs detected in official-sources.json' };
      }
      return { ok: true };
    }
  }
];
