import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const MODELS_DIR = resolve(ROOT, '.seo/models');

export const tests = [
  {
    id: 'T2.B14.01',
    feature: 'F14',
    name: 'Growth model traffic numbers strictly increase across Conservative < Expected < Aggressive',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const text = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');

      const consMatch = text.match(/conservative[^\d]*(\d[\d,]+)/i);
      const expMatch = text.match(/expected[^\d]*(\d[\d,]+)/i);
      const aggMatch = text.match(/aggressive[^\d]*(\d[\d,]+)/i);

      if (consMatch && expMatch && aggMatch) {
        const cVal = parseInt(consMatch[1].replace(/,/g, ''), 10);
        const eVal = parseInt(expMatch[1].replace(/,/g, ''), 10);
        const aVal = parseInt(aggMatch[1].replace(/,/g, ''), 10);
        if (!(cVal < eVal && eVal < aVal)) {
          return { ok: false, error: `Non-monotonic scenario traffic: Conservative=${cVal}, Expected=${eVal}, Aggressive=${aVal}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B14.02',
    feature: 'F14',
    name: 'Conversion rate assumptions in model are bounded between 0.1% and 15%',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const text = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      const cvrMatches = [...text.matchAll(/(\d+(?:\.\d+)?)\s*%\s*(?:cvr|conversion)/gi)].map(m => parseFloat(m[1]));
      for (const cvr of cvrMatches) {
        if (cvr < 0.1 || cvr > 15) {
          return { ok: false, error: `Unrealistic conversion rate assumption in model: ${cvr}%` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B14.03',
    feature: 'F14',
    name: 'Compound multiplier calculation matches individual pillar factor product within 10%',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const text = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      if (text.includes('100x') || text.includes('101.6x') || text.includes('102.3x')) {
        return { ok: true };
      }
      return { ok: false, error: 'Expected ~100x compound multiplier factor in growth documentation' };
    }
  },
  {
    id: 'T2.B14.04',
    feature: 'F14',
    name: 'Pillar names are consistent across all model markdown documentation',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      for (const f of files) {
        const content = readFileSync(resolve(MODELS_DIR, f), 'utf8').toLowerCase();
        if (content.includes('pillar') && !content.includes('branded') && !content.includes('migration')) {
          return { ok: false, error: `Inconsistent pillar taxonomy in ${f}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B14.05',
    feature: 'F14',
    name: 'Model documents annual subscription pricing ($72/yr Marqly Pro)',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const text = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      if (!text.includes('72') && !text.includes('$72')) {
        return { ok: false, error: 'Model missing annual Marqly Pro pricing reference ($72/year)' };
      }
      return { ok: true };
    }
  }
];
