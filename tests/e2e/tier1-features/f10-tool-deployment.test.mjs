import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const TOOL_HTML = resolve(ROOT, 'dist/client/tools/raindrop-export-analyzer.html');
const MIGRATE_HTML = resolve(ROOT, 'dist/client/migrate/raindrop.html');

export const tests = [
  {
    id: 'T1.F10.01',
    feature: 'F10',
    name: 'dist/client/tools/raindrop-export-analyzer.html exists with proper canonical URL',
    run: async () => {
      if (!existsSync(TOOL_HTML)) {
        return { ok: false, error: 'dist/client/tools/raindrop-export-analyzer.html does not exist' };
      }
      const parsed = parseHtml(readFileSync(TOOL_HTML, 'utf8'));
      if (!parsed.canonical || !parsed.canonical.endsWith('/tools/raindrop-export-analyzer')) {
        return { ok: false, error: `Invalid canonical URL on tool page: ${parsed.canonical}` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F10.02',
    feature: 'F10',
    name: 'Standalone tool page highlights 100% client-side local privacy guarantee',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const text = parseHtml(readFileSync(TOOL_HTML, 'utf8')).text.toLowerCase();
      const hasPrivacy = text.includes('client-side') || text.includes('never leave') || text.includes('privacy') || text.includes('local');
      if (!hasPrivacy) {
        return { ok: false, error: 'Standalone tool page missing zero-upload client-side privacy guarantee' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F10.03',
    feature: 'F10',
    name: 'Standalone tool page provides file drop zone / upload input for HTML and CSV',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8').toLowerCase();
      const hasInput = raw.includes('type="file"') || raw.includes('drop') || raw.includes('drag') || raw.includes('upload');
      if (!hasInput) {
        return { ok: false, error: 'Missing file input or drag-and-drop target on tool page' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F10.04',
    feature: 'F10',
    name: 'migrate/raindrop.html embeds or links to the interactive export analyzer',
    run: async () => {
      if (!existsSync(MIGRATE_HTML)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const raw = readFileSync(MIGRATE_HTML, 'utf8').toLowerCase();
      const hasAnalyzer = raw.includes('analyzer') || raw.includes('preview') || raw.includes('raindrop-export-analyzer');
      if (!hasAnalyzer) {
        return { ok: false, error: 'migrate/raindrop.html neither embeds nor links to the export analyzer' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T1.F10.05',
    feature: 'F10',
    name: 'Tool page provides conversion onboarding link to signup funnel',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const parsed = parseHtml(readFileSync(TOOL_HTML, 'utf8'));
      const hasSignup = parsed.links.some(l => l.includes('signup') || l.includes('app.marqly.com') || l.includes('/signup'));
      if (!hasSignup) {
        return { ok: false, error: 'Tool page missing conversion CTA link to Marqly signup' };
      }
      return { ok: true };
    }
  }
];
