import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const MODELS_DIR = resolve(ROOT, '.seo/models');

export const tests = [
  {
    id: 'T1.F14.01',
    feature: 'F14',
    name: '.seo/models/ directory exists and contains 100x growth model documentation',
    run: async () => {
      if (!existsSync(MODELS_DIR)) {
        return { ok: false, error: '.seo/models/ directory does not exist' };
      }
      const files = readdirSync(MODELS_DIR);
      const hasModelFile = files.some(f => f.includes('model') || f.includes('growth') || f.includes('100x'));
      if (!hasModelFile) {
        return { ok: false, error: 'No 100x growth model documentation found in .seo/models/' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F14.02',
    feature: 'F14',
    name: 'Growth model defines 6 independent traffic pillars',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const content = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n').toLowerCase();
      const pillars = ['branded', 'migration', 'comparison', 'generic', 'tool', 'international'];
      for (const p of pillars) {
        if (!content.includes(p)) {
          return { ok: false, error: `Growth model missing definition for pillar: ${p}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F14.03',
    feature: 'F14',
    name: 'Model details Conservative, Expected (51.8k visits), and Aggressive scenarios',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const content = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n').toLowerCase();
      if (!content.includes('conservative') || !content.includes('expected') || !content.includes('aggressive')) {
        return { ok: false, error: 'Model must define Conservative, Expected, and Aggressive scenarios' };
      }
      if (!content.includes('51,800') && !content.includes('51.8k') && !content.includes('51800')) {
        return { ok: false, error: 'Expected scenario target (~51,800 visits) not documented in model' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F14.04',
    feature: 'F14',
    name: 'Model documents mathematical multiplier decomposition (~100x compound)',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const content = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n').toLowerCase();
      const hasMath = content.includes('multiplier') || content.includes('compound') || content.includes('formula') || content.includes('ctr');
      if (!hasMath) {
        return { ok: false, error: 'Model missing mathematical multiplier or formula decomposition' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F14.05',
    feature: 'F14',
    name: 'Model calculates annualized ARR expansion and funnel conversion rates',
    run: async () => {
      if (!existsSync(MODELS_DIR)) return { ok: false, error: '.seo/models/ missing' };
      const files = readdirSync(MODELS_DIR).filter(f => f.endsWith('.md'));
      const content = files.map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n').toLowerCase();
      if (!content.includes('arr') && !content.includes('revenue')) {
        return { ok: false, error: 'Model missing ARR expansion projection' };
      }
      if (!content.includes('conversion') && !content.includes('cvr')) {
        return { ok: false, error: 'Model missing conversion rate assumptions' };
      }
      return { ok: true };
    }
  }
];
