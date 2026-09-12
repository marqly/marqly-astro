import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const RAINDROP_DATA = resolve(ROOT, 'src/data/competitors/raindrop.json');

export const tests = [
  {
    id: 'T2.B02.01',
    feature: 'F02',
    name: 'raindrop.json platforms list contains no duplicate platform identifiers',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const platforms = data.platforms || [];
      const set = new Set(platforms);
      if (set.size !== platforms.length) {
        return { ok: false, error: 'raindrop.json platforms array contains duplicates' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B02.02',
    feature: 'F02',
    name: 'All platform identifiers in raindrop.json are strictly lowercase alphanumeric strings',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const platforms = data.platforms || [];
      for (const p of platforms) {
        if (p !== p.toLowerCase() || !/^[a-z0-9_-]+$/.test(p)) {
          return { ok: false, error: `Invalid platform identifier formatting: "${p}"` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B02.03',
    feature: 'F02',
    name: 'raindrop.json pros and cons items contain non-empty strings without HTML tags',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const allItems = [...(data.pros || []), ...(data.cons || [])];
      for (const item of allItems) {
        if (typeof item !== 'string' || item.trim().length === 0) {
          return { ok: false, error: 'Empty item found in pros/cons array' };
        }
        if (/<[a-z][\s\S]*>/i.test(item)) {
          return { ok: false, error: `HTML tag detected in pros/cons copy: "${item}"` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B02.04',
    feature: 'F02',
    name: 'raindrop.json faqs array contains valid question-and-answer pairs',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const faqs = data.faqs || [];
      for (const faq of faqs) {
        if (!faq.q || typeof faq.q !== 'string' || faq.q.trim().length < 5) {
          return { ok: false, error: `Invalid FAQ question: "${faq.q}"` };
        }
        if (!faq.a || typeof faq.a !== 'string' || faq.a.trim().length < 10) {
          return { ok: false, error: `Invalid FAQ answer for question: "${faq.q}"` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B02.05',
    feature: 'F02',
    name: 'raindrop.json lastVerified date is valid ISO 8601 date string',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      if (!data.lastVerified || !/^\d{4}-\d{2}-\d{2}$/.test(data.lastVerified)) {
        return { ok: false, error: `Invalid lastVerified date format: "${data.lastVerified}"` };
      }
      const d = new Date(data.lastVerified);
      if (isNaN(d.getTime())) {
        return { ok: false, error: `Invalid date object for lastVerified: "${data.lastVerified}"` };
      }
      return { ok: true };
    }
  }
];
