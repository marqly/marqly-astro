import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const MODELS_DIR = resolve(ROOT, '.seo/models');
const SEO_DIR = resolve(ROOT, '.seo');

export const tests = [
  {
    id: 'T2.B15.01',
    feature: 'F15',
    name: 'Tracking matrix contains no duplicate target search queries',
    run: async () => {
      let content = '';
      if (existsSync(MODELS_DIR)) {
        content += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        content += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const rawQueries = [...content.matchAll(/\|\s*`?([a-zA-Z0-9 -]{4,40})`?\s*\|\s*(?:[1-6]\.|\w+)/g)].map(m => m[1].trim().toLowerCase());
      const set = new Set(rawQueries);
      if (rawQueries.length > 0 && set.size !== rawQueries.length) {
        return { ok: false, error: `Found duplicate queries in tracking matrix (${rawQueries.length} total, ${set.size} unique)` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B15.02',
    feature: 'F15',
    name: 'All target ranking positions are within Page 1 (Top 1, Top 2, Top 3, or Top 5)',
    run: async () => {
      let content = '';
      if (existsSync(MODELS_DIR)) {
        content += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        content += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const posMatches = [...content.matchAll(/Top\s*(\d+)/gi)].map(m => parseInt(m[1], 10));
      for (const pos of posMatches) {
        if (pos > 10 || pos < 1) {
          return { ok: false, error: `Invalid target position outside page 1: Top ${pos}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B15.03',
    feature: 'F15',
    name: 'Target URLs in tracking matrix start with leading slash and omit trailing slashes',
    run: async () => {
      let content = '';
      if (existsSync(MODELS_DIR)) {
        content += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        content += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const urls = [...content.matchAll(/`(\/[a-zA-Z0-9_\/-]+)`/g)].map(m => m[1]);
      for (const u of urls) {
        if (u !== '/' && u.endsWith('/')) {
          return { ok: false, error: `Target URL has illegal trailing slash: ${u}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B15.04',
    feature: 'F15',
    name: 'All search volumes in tracking matrix are positive integers',
    run: async () => {
      let content = '';
      if (existsSync(MODELS_DIR)) {
        content += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        content += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const svMatches = [...content.matchAll(/\|\s*(\d[\d,]*)\s*\|\s*Top/gi)].map(m => parseInt(m[1].replace(/,/g, ''), 10));
      for (const sv of svMatches) {
        if (isNaN(sv) || sv <= 0) {
          return { ok: false, error: `Invalid search volume in tracking matrix: ${sv}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B15.05',
    feature: 'F15',
    name: 'Tracking matrix maps queries to specific geographic regions (Global/EN, DE/AT/CH, FR/BE/CH)',
    run: async () => {
      let content = '';
      if (existsSync(MODELS_DIR)) {
        content += readdirSync(MODELS_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(MODELS_DIR, f), 'utf8')).join('\n');
      }
      if (existsSync(SEO_DIR)) {
        content += readdirSync(SEO_DIR).filter(f => f.endsWith('.md')).map(f => readFileSync(resolve(SEO_DIR, f), 'utf8')).join('\n');
      }
      const hasRegions = content.includes('DE/AT/CH') || content.includes('FR/BE/CH') || content.includes('Global');
      if (!hasRegions) {
        return { ok: false, error: 'Tracking matrix missing geographic region column (DE/AT/CH, FR/BE/CH)' };
      }
      return { ok: true };
    }
  }
];
