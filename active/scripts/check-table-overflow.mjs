/**
 * Sweeps every page type that renders ComparisonTable across viewport widths and
 * reports horizontal overflow or content spilling out of a fixed-layout cell.
 *
 * Usage: node active/scripts/check-table-overflow.mjs [baseUrl]
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://127.0.0.1:4321';
const WIDTHS = [360, 390, 414, 640, 768, 1024, 1280, 1512];
const PATHS = [
  '/compare/marqly-vs-liner', // longest price string in the dataset
  '/compare/marqly-vs-toby', // 2nd longest
  '/compare/evernote-web-clipper-vs-notion-web-clipper', // 3 tools + long names
  '/compare/instapaper-vs-matter', // 3 tools
  '/alternatives/liner',
  '/alternatives/raindrop',
];

const browser = await chromium.launch();
const page = await browser.newPage();
let failures = 0;

for (const path of PATHS) {
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    const res = await page.goto(BASE + path, { waitUntil: 'load' });
    if (!res?.ok()) {
      console.log(`FAIL ${path} @${width} — HTTP ${res?.status()}`);
      failures++;
      continue;
    }
    const r = await page.evaluate(() => {
      const wrap = document.querySelector('.cmp-wrap');
      if (!wrap) return { missing: true };
      const spill = [];
      wrap.querySelectorAll('th,td').forEach((c) => {
        if (c.scrollWidth > c.clientWidth + 1) spill.push(c.textContent.trim().slice(0, 40));
      });
      return {
        pageOverflow: document.documentElement.scrollWidth - window.innerWidth,
        tableOverflow: wrap.scrollWidth - wrap.clientWidth,
        spill,
      };
    });

    if (r.missing) {
      console.log(`FAIL ${path} @${width} — no .cmp-wrap on page`);
      failures++;
    } else if (r.pageOverflow > 0 || r.tableOverflow > 0 || r.spill.length) {
      console.log(
        `FAIL ${path} @${width} — page +${r.pageOverflow}px, table +${r.tableOverflow}px` +
          (r.spill.length ? `, spill: ${r.spill.join(' | ')}` : '')
      );
      failures++;
    }
  }
  console.log(`ok   ${path} (${WIDTHS.length} widths)`);
}

await browser.close();
console.log(failures ? `\n${failures} failing combination(s)` : '\nno overflow at any width');
process.exit(failures ? 1 : 0);
