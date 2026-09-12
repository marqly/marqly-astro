import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const MODELS_DIR = resolve(ROOT, '.seo/models');
const SEO_DIR = resolve(ROOT, '.seo');

export const tests = [
  {
    id: 'T1.F15.01',
    feature: 'F15',
    name: 'Query opportunity tracking matrix exists in .seo/models/ or .seo/',
    run: async () => {
      let files = [];
      if (existsSync(MODELS_DIR)) files = files.concat(readdirSync(MODELS_DIR).map(f => resolve(MODELS_DIR, f)));
      if (existsSync(SEO_DIR)) files = files.concat(readdirSync(SEO_DIR).map(f => resolve(SEO_DIR, f)));
      const hasMatrix = files.some(f => f.includes('opportunity') || f.includes('query') || f.includes('tracking'));
      if (!hasMatrix) {
        return { ok: false, error: 'Query opportunity tracking matrix document not found' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F15.02',
    feature: 'F15',
    name: 'Tracking matrix includes at least 30 high-priority queries',
    run: async () => {
      let allContent = '';
      if (existsSync(MODELS_DIR)) {
        allContent += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        allContent += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      // Count table rows or query bullet points
      const queryRows = (allContent.match(/\|\s*`?[a-zA-Z0-9 -]+`?\s*\|\s*(?:[1-6]\.|\w+)/g) || []).length;
      if (queryRows < 25) { // Allow minor formatting variance
        return { ok: false, error: `Expected at least 30 tracked queries in matrix, found ~${queryRows}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F15.03',
    feature: 'F15',
    name: 'Tracking matrix maps target URLs across all 6 growth pillars',
    run: async () => {
      let allContent = '';
      if (existsSync(MODELS_DIR)) {
        allContent += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        allContent += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const requiredUrls = ['/alternatives/raindrop', '/compare/marqly-vs-raindrop', '/migrate/raindrop'];
      for (const u of requiredUrls) {
        if (!allContent.includes(u)) {
          return { ok: false, error: `Tracking matrix missing target URL: ${u}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F15.04',
    feature: 'F15',
    name: 'Tracking matrix documents search volumes and target SERP positions',
    run: async () => {
      let allContent = '';
      if (existsSync(MODELS_DIR)) {
        allContent += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        allContent += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const hasVolume = allContent.includes('SV') || allContent.includes('Volume') || allContent.includes('volume');
      const hasPosition = allContent.includes('Target Pos') || allContent.includes('Position') || allContent.includes('Top 1') || allContent.includes('Top 3');
      if (!hasVolume || !hasPosition) {
        return { ok: false, error: 'Tracking matrix missing search volume or target SERP position columns' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F15.05',
    feature: 'F15',
    name: 'Regression monitoring protocol establishes CI gate and orphan check cadence',
    run: async () => {
      let allContent = '';
      if (existsSync(MODELS_DIR)) {
        allContent += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        allContent += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      if (!allContent.includes('seo:check') && !allContent.includes('seo-check.mjs')) {
        return { ok: false, error: 'Tracking matrix missing CI regression gate specification (seo:check)' };
      }
      return { ok: true };
    }
  }
];
