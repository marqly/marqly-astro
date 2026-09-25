import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const SRC = resolve(ROOT, 'src/pages/embed.astro');
const OUT = resolve(ROOT, 'dist/client/embed.html');

// The embed contract lives in the app (apps/web/lib/utils/shareEmbed.ts).
// These tests pin the marketing generator to it: the old tool emitted
// "{link}/embed?theme=…&view=cards|minimal" — a route that does not exist —
// so every copied snippet 404'd (support ticket 2026-09-24 lineage).
export const tests = [
  {
    id: 'T1.F17.01',
    feature: 'F17',
    name: 'generator builds app.marqly.com/s/<id>?embed=1 (never a /embed path or theme param)',
    run: async () => {
      const src = readFileSync(SRC, 'utf8');
      if (!src.includes("APP_ORIGIN + '/s/'")) return { ok: false, error: 'URL builder no longer emits /s/<id>' };
      if (!src.includes("['embed=1']")) return { ok: false, error: 'embed=1 base param missing' };
      if (src.includes("'/embed?theme='") || src.includes("theme=' +")) return { ok: false, error: 'invented theme/embed URL shape is back' };
      return { ok: true };
    },
  },
  {
    id: 'T1.F17.02',
    feature: 'F17',
    name: 'layout values match the app contract (cards default, view=list|condensed only when non-default)',
    run: async () => {
      const src = readFileSync(SRC, 'utf8');
      if (!src.includes("currentLayout !== 'cards'")) return { ok: false, error: 'cards must stay the no-param default' };
      if (!src.includes('view=') || src.includes("'minimal'")) return { ok: false, error: 'view values drifted from the app contract' };
      return { ok: true };
    },
  },
  {
    id: 'T1.F17.03',
    feature: 'F17',
    name: 'no references to nonexistent assets (embed-badge.svg)',
    run: async () => {
      const src = readFileSync(SRC, 'utf8');
      if (src.includes('embed-badge.svg')) return { ok: false, error: 'markdown tab references a missing SVG asset' };
      return { ok: true };
    },
  },
  {
    id: 'T1.F17.05',
    feature: 'F17',
    name: 'site CSP frame-src allows app.marqly.com (the live preview iframe)',
    run: async () => {
      const headers = readFileSync(resolve(ROOT, 'public/_headers'), 'utf8');
      // match only the real directive (https:// appears there, not in the file comments)
      const m = headers.match(/frame-src[^;]*https:\/\/app\.marqly\.com[^;]*/);
      if (!m) {
        return { ok: false, error: 'CSP frame-src does not allow app.marqly.com — the embed preview renders "This content is blocked"' };
      }
      return { ok: true };
    },
  },
  {
    id: 'T1.F17.04',
    feature: 'F17',
    name: 'built page ships the generator (live preview iframe + shareId extraction)',
    run: async () => {
      if (!existsSync(OUT)) return { ok: false, error: 'dist/client/embed.html missing after build' };
      const html = readFileSync(OUT, 'utf8');
      if (!html.includes('preview-frame') || !html.includes('APP_ORIGIN')) {
        return { ok: false, error: 'live preview or shareId extraction missing from built page' };
      }
      return { ok: true };
    },
  },
];
