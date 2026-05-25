// Pixel-diff a locally-built page against its captured live reference.
// Prereq: a local server is running (npm run preview  ->  http://localhost:4321).
// Usage:
//   node active/scripts/diff.mjs <slug> [--base http://localhost:4321] [--threshold 0.1]
//   node active/scripts/diff.mjs home
//   node active/scripts/diff.mjs pricing --base http://localhost:4321
//
// Route is looked up from urls.json by slug (so /Pricing casing etc. is exact).
// Writes diff-<bp>.png next to the reference and a score line to
// active/logs/visual-diff-<slug>.md. Exit code 0 if both breakpoints are under
// the pass ratio (default 2%), else 1 — so it can gate CI / the iterate loop.
import { chromium } from 'playwright';
import { readFile, writeFile, appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT = path.join(ROOT, 'active/logs/capture');
const PASS_RATIO = 0.02; // 2% of pixels may differ (AA, dynamic regions)

const BREAKPOINTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

function arg(flag, def) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : def;
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 400);
        total += 400;
        if (total >= document.body.scrollHeight + 2000) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 60);
    });
  });
  await page.waitForTimeout(800);
}

// Crop a PNG to width x height (top-left anchored).
function crop(png, w, h) {
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const si = (png.width * y + x) << 2;
      const di = (w * y + x) << 2;
      out.data[di] = png.data[si];
      out.data[di + 1] = png.data[si + 1];
      out.data[di + 2] = png.data[si + 2];
      out.data[di + 3] = png.data[si + 3];
    }
  }
  return out;
}

async function diffBreakpoint(page, bp, slug, route, base) {
  const refPath = path.join(OUT, slug, `${bp.name}.png`);
  if (!existsSync(refPath)) {
    console.warn(`  ! no reference ${refPath} — run capture first`);
    return { name: bp.name, ratio: 1, note: 'no-reference' };
  }
  await page.setViewportSize({ width: bp.width, height: bp.height });
  await page.goto(base + route, { waitUntil: 'load', timeout: 30000 });
  await autoScroll(page);
  const shot = await page.screenshot({ fullPage: true });

  const ref = PNG.sync.read(await readFile(refPath));
  const cur = PNG.sync.read(shot);
  const w = Math.min(ref.width, cur.width);
  const h = Math.min(ref.height, cur.height);
  const a = crop(ref, w, h);
  const b = crop(cur, w, h);
  const diff = new PNG({ width: w, height: h });
  const mismatched = pixelmatch(a.data, b.data, diff.data, w, h, { threshold: 0.1 });
  const ratio = mismatched / (w * h);

  await writeFile(path.join(OUT, slug, `diff-${bp.name}.png`), PNG.sync.write(diff));
  const sizeNote =
    ref.height !== cur.height ? ` (height ref=${ref.height} cur=${cur.height})` : '';
  return { name: bp.name, ratio, note: sizeNote };
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: node diff.mjs <slug> [--base url] [--threshold ratio]');
    process.exit(2);
  }
  const base = arg('--base', 'http://localhost:4321');
  const pass = parseFloat(arg('--threshold', String(PASS_RATIO)));

  const { pages } = JSON.parse(await readFile(path.join(__dirname, 'urls.json'), 'utf8'));
  const entry = pages.find((p) => p.slug === slug);
  if (!entry) {
    console.error(`slug "${slug}" not found in urls.json`);
    process.exit(2);
  }
  const route = new URL(entry.url).pathname;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];
  for (const bp of BREAKPOINTS) {
    results.push(await diffBreakpoint(page, bp, slug, route, base));
  }
  await browser.close();

  const stamp = new Date().toISOString();
  const lines = results
    .map((r) => `- ${r.name}: ${(r.ratio * 100).toFixed(2)}%${r.note}`)
    .join('\n');
  const logName = `visual-diff-${slug.replace(/\//g, '-')}.md`;
  await appendFile(
    path.join(ROOT, 'active/logs', logName),
    `\n## ${stamp} — ${route}\n${lines}\n`,
  );

  console.log(`\n${route}`);
  let ok = true;
  for (const r of results) {
    const passed = r.ratio <= pass;
    ok = ok && passed;
    console.log(`  ${passed ? '✓' : '✗'} ${r.name}: ${(r.ratio * 100).toFixed(2)}%${r.note}`);
  }
  process.exit(ok ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
