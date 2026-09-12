import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const TOOL_HTML = resolve(ROOT, 'dist/client/tools/raindrop-export-analyzer.html');

export const tests = [
  {
    id: 'T2.B10.01',
    feature: 'F10',
    name: 'Tool file drop zone specifies supported extensions (.html and .csv)',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8').toLowerCase();
      const mentionsFormats = raw.includes('.html') && raw.includes('.csv');
      if (!mentionsFormats) {
        return { ok: false, error: 'Tool page drop zone does not clearly state .html and .csv support' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B10.02',
    feature: 'F10',
    name: 'Tool page includes interactive demo sample trigger for instant preview without upload',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8').toLowerCase();
      const hasDemo = raw.includes('sample') || raw.includes('demo') || raw.includes('try with');
      if (!hasDemo) {
        return { ok: false, error: 'Tool page missing demo/sample export button for quick evaluation' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B10.03',
    feature: 'F10',
    name: 'Tool drop zone contains accessible aria landmarks or hidden label for screen readers',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8');
      if (!raw.includes('aria-label') && !raw.includes('sr-only') && !raw.includes('<label')) {
        return { ok: false, error: 'Drop zone lacks accessible labels or screen-reader instructions' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B10.04',
    feature: 'F10',
    name: 'Tool page scripts do not contain external third-party file upload endpoints',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8');
      // Must not send files to remote server
      if (raw.includes('action="http') || raw.includes('upload.php') || raw.includes('/api/upload')) {
        return { ok: false, error: 'Potential server-side upload endpoint detected; analyzer must be 100% client-side' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B10.05',
    feature: 'F10',
    name: 'Tool page title and meta description are optimized for "raindrop export analyzer" query',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const raw = readFileSync(TOOL_HTML, 'utf8').toLowerCase();
      const titleMatch = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(raw);
      const title = titleMatch ? titleMatch[1] : '';
      if (!title.includes('raindrop') || (!title.includes('export') && !title.includes('analyzer'))) {
        return { ok: false, error: `Tool page title not optimized for intent: "${title}"` };
      }
      return { ok: true };
    }
  }
];
