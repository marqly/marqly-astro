import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const ALT_HTML = resolve(ROOT, 'dist/client/alternatives/raindrop.html');

export const tests = [
  {
    id: 'T1.F06.01',
    feature: 'F06',
    name: 'alternatives/raindrop.html features categorized switching segments or quick-picks',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const text = parsed.text.toLowerCase();
      // Must reference segmented categories (AI, self-hosted, visual, or reading)
      const hasAiSegment = text.includes('ai') || text.includes('semantic');
      const hasSelfHosted = text.includes('self-hosted') || text.includes('open source') || text.includes('open-source');
      if (!hasAiSegment || !hasSelfHosted) {
        return {
          ok: false,
          error: 'alternatives/raindrop.html lacks categorized alternatives (e.g. AI retrieval, self-hosted/privacy)'
        };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F06.02',
    feature: 'F06',
    name: 'alternatives/raindrop.html renders multi-competitor feature comparison table',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const raw = readFileSync(ALT_HTML, 'utf8');
      if (!raw.includes('<table') && !raw.includes('comparison-table') && !raw.includes('matrix')) {
        return { ok: false, error: 'Missing comparison table/matrix in alternatives/raindrop.html' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F06.03',
    feature: 'F06',
    name: 'alternatives/raindrop.html analyzes root causes why users leave Raindrop (folder fatigue, search limits)',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const text = parseHtml(readFileSync(ALT_HTML, 'utf8')).text.toLowerCase();
      const hasWhyLeave = text.includes('why') && (text.includes('leave') || text.includes('switch') || text.includes('fatigue') || text.includes('drawback') || text.includes('limitation'));
      if (!hasWhyLeave) {
        return { ok: false, error: 'Missing qualitative analysis of why users switch from Raindrop' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F06.04',
    feature: 'F06',
    name: 'alternatives/raindrop.html includes contextual bridge CTA to /migrate/raindrop',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const hasMigrateLink = parsed.links.some(l => l.includes('/migrate/raindrop'));
      if (!hasMigrateLink) {
        return { ok: false, error: 'alternatives/raindrop.html missing contextual CTA linking to /migrate/raindrop' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F06.05',
    feature: 'F06',
    name: 'alternatives/raindrop.html JSON-LD includes ItemList or SoftwareApplication schemas',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      if (parsed.jsonLd.length === 0) {
        return { ok: false, error: 'alternatives/raindrop.html missing JSON-LD structured data' };
      }
      const hasExpectedType = parsed.jsonLd.some(s =>
        s['@type'] === 'ItemList' ||
        s['@type'] === 'CollectionPage' ||
        s['@type'] === 'WebPage' ||
        s['@type'] === 'SoftwareApplication'
      );
      if (!hasExpectedType) {
        return { ok: false, error: 'JSON-LD missing expected schema type (ItemList / CollectionPage / WebPage)' };
      }
      return { ok: true };
    }
  }
];
