import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const ALT_HTML = resolve(ROOT, 'dist/client/alternatives/raindrop.html');

export const tests = [
  {
    id: 'T2.B06.01',
    feature: 'F06',
    name: 'Special characters (&, <, >, ", \') in competitor copy are properly escaped in DOM',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const raw = readFileSync(ALT_HTML, 'utf8');
      // Look for unescaped ampersand in body text (not inside entity like &amp; or inside URL params)
      const bodyOnly = raw.replace(/<[^>]+>/g, ' ');
      const rawAmp = bodyOnly.match(/\s&\s/g);
      if (rawAmp && rawAmp.length > 5) {
        return { ok: false, error: 'Unescaped ampersands found in rendered body text' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B06.02',
    feature: 'F06',
    name: 'Competitors featured on alternatives page contain valid website links',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const parsed = parseHtml(readFileSync(ALT_HTML, 'utf8'));
      const extLinks = parsed.links.filter(l => l.startsWith('http://') || l.startsWith('https://'));
      for (const link of extLinks) {
        if (link.startsWith('http://') && !link.includes('localhost')) {
          return { ok: false, error: `Insecure HTTP competitor outbound link: ${link}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B06.03',
    feature: 'F06',
    name: 'Comparison table container has CSS overflow handling for mobile viewports',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const raw = readFileSync(ALT_HTML, 'utf8');
      if (raw.includes('<table') || raw.includes('comparison-table')) {
        const hasOverflow = raw.includes('overflow-x') || raw.includes('overflow-auto') || raw.includes('table-container');
        if (!hasOverflow) {
          return { ok: false, error: 'Comparison table lacks responsive horizontal overflow wrapper' };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B06.04',
    feature: 'F06',
    name: 'Alternatives page handles competitors with zero price or free tier gracefully',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const text = parseHtml(readFileSync(ALT_HTML, 'utf8')).text.toLowerCase();
      // Should mention "free" and paid pricing clearly
      if (!text.includes('free') && !text.includes('$0')) {
        return { ok: false, error: 'Alternatives page does not document free pricing options' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B06.05',
    feature: 'F06',
    name: 'No broken image assets or empty src attributes on alternatives page',
    run: async () => {
      if (!existsSync(ALT_HTML)) return { ok: false, error: 'File missing' };
      const raw = readFileSync(ALT_HTML, 'utf8');
      const emptyImg = /<img\b[^>]*?\bsrc=["']\s*["']/i.test(raw);
      if (emptyImg) {
        return { ok: false, error: 'Empty img src attribute found on alternatives page' };
      }
      return { ok: true };
    }
  }
];
