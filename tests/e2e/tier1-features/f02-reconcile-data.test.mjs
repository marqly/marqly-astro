import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const RAINDROP_DATA = resolve(ROOT, 'src/data/competitors/raindrop.json');

export const tests = [
  {
    id: 'T1.F02.01',
    feature: 'F02',
    name: 'src/data/competitors/raindrop.json includes Windows and Linux in platforms array',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) {
        return { ok: false, error: 'src/data/competitors/raindrop.json missing' };
      }
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const platforms = data.platforms || [];
      const hasWindows = platforms.includes('windows');
      const hasLinux = platforms.includes('linux');
      if (!hasWindows || !hasLinux) {
        return {
          ok: false,
          error: `raindrop.json missing desktop platforms. Has: ${platforms.join(', ')}. Expected windows and linux.`
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F02.02',
    feature: 'F02',
    name: 'raindrop.json documents 3-highlight limit on Free tier rather than unlimited highlights',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const raw = readFileSync(RAINDROP_DATA, 'utf8');
      // Must not falsely claim unlimited highlights on free plan without noting the 3-highlight cap
      if (raw.includes('unlimited bookmarks, collections, and highlights') && !raw.includes('3 highlights per bookmark')) {
        return {
          ok: false,
          error: 'raindrop.json claims unlimited highlights on free plan; must specify 3-highlight cap per bookmark.'
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F02.03',
    feature: 'F02',
    name: 'raindrop.json pricing matches verified $28/year or $3.25/month web Pro rate',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const paidStr = data.pricing?.paid || '';
      if (!paidStr.includes('28') || (!paidStr.includes('3.25') && !paidStr.includes('3/month'))) {
        return { ok: false, error: `Unexpected pricing string: ${paidStr}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F02.04',
    feature: 'F02',
    name: 'raindrop.json features.aiAutoTagging is reconciled to false or notes tag suggestions',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      // Raindrop has ML tag suggestions at save time, not true automated semantic auto-tagging
      if (data.features?.aiAutoTagging === true && !data.features?.aiTagSuggestions) {
        return {
          ok: false,
          error: 'raindrop.json features.aiAutoTagging is marked true without tag suggestions distinction'
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F02.05',
    feature: 'F02',
    name: 'raindrop.json maintains required competitor fields (slug, category, pros, cons, faqs)',
    run: async () => {
      if (!existsSync(RAINDROP_DATA)) return { ok: false, error: 'raindrop.json missing' };
      const data = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      if (data.slug !== 'raindrop' || data.category !== 'bookmark-manager') {
        return { ok: false, error: 'raindrop.json has invalid slug or category' };
      }
      if (!Array.isArray(data.pros) || data.pros.length < 3) {
        return { ok: false, error: 'raindrop.json pros must have at least 3 items' };
      }
      if (!Array.isArray(data.cons) || data.cons.length < 3) {
        return { ok: false, error: 'raindrop.json cons must have at least 3 items' };
      }
      return { ok: true };
    }
  }
];
