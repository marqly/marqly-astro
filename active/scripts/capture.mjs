// Capture the live Marqly site as a pixel/SEO reference for the Astro rebuild.
// Usage:
//   node active/scripts/capture.mjs                # capture all pages in urls.json
//   node active/scripts/capture.mjs home pricing    # capture only matching slugs
//
// Per page, writes to active/logs/capture/<slug>/:
//   desktop.png  full-page screenshot @ 1440 wide
//   mobile.png   full-page screenshot @ 390 wide
//   page.html    rendered outerHTML
//   meta.json    SEO head (title, description, canonical, og/twitter, JSON-LD) + links
//   assets/      every image/font/css response the page loaded
import { chromium } from 'playwright';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT = path.join(ROOT, 'active/logs/capture');
const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

const ASSET_TYPES = ['image/', 'font/', 'text/css', 'application/font'];

function safeName(urlStr) {
  try {
    const u = new URL(urlStr);
    let base = path.basename(u.pathname) || 'index';
    base = base.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
    const hash = createHash('sha1').update(urlStr).digest('hex').slice(0, 8);
    const ext = path.extname(base);
    const stem = ext ? base.slice(0, -ext.length) : base;
    return `${stem}.${hash}${ext}`;
  } catch {
    return createHash('sha1').update(urlStr).digest('hex').slice(0, 12);
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight + 2000) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
  await page.waitForTimeout(1200);
}

async function dismissBanners(page) {
  const labels = ['Accept', 'Accept all', 'I agree', 'Got it', 'Allow all', 'OK'];
  for (const label of labels) {
    const btn = page.getByRole('button', { name: label, exact: false }).first();
    try {
      if (await btn.isVisible({ timeout: 500 })) {
        await btn.click({ timeout: 1000 });
        await page.waitForTimeout(300);
        return;
      }
    } catch { /* ignore */ }
  }
}

async function extractMeta(page, url) {
  return page.evaluate((pageUrl) => {
    const get = (sel, attr) => document.querySelector(sel)?.getAttribute(attr) ?? null;
    const metas = {};
    for (const m of document.querySelectorAll('meta[property], meta[name]')) {
      const key = m.getAttribute('property') || m.getAttribute('name');
      if (key) metas[key] = m.getAttribute('content');
    }
    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => s.textContent?.trim())
      .filter(Boolean);
    const internalLinks = [...document.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && (h.startsWith('/') || h.includes('marqly.com')));
    return {
      url: pageUrl,
      title: document.title,
      description: get('meta[name="description"]', 'content'),
      canonical: get('link[rel="canonical"]', 'href'),
      lang: document.documentElement.lang || null,
      meta: metas,
      jsonLd,
      internalLinks: [...new Set(internalLinks)],
    };
  }, url);
}

async function capturePage(browser, { url, slug }) {
  const dir = path.join(OUT, slug);
  const assetsDir = path.join(dir, 'assets');
  await mkdir(assetsDir, { recursive: true });

  const context = await browser.newContext({
    viewport: DESKTOP,
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  const saved = new Set();

  page.on('response', async (res) => {
    try {
      const ct = (res.headers()['content-type'] || '').toLowerCase();
      if (!ASSET_TYPES.some((t) => ct.includes(t))) return;
      if (!res.ok()) return;
      const name = safeName(res.url());
      if (saved.has(name)) return;
      saved.add(name);
      const body = await res.body();
      await writeFile(path.join(assetsDir, name), body);
    } catch { /* asset save best-effort */ }
  });

  console.log(`→ ${slug}  (${url})`);
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await dismissBanners(page);
  await autoScroll(page);

  // Desktop
  await page.screenshot({ path: path.join(dir, 'desktop.png'), fullPage: true });
  const html = await page.content();
  await writeFile(path.join(dir, 'page.html'), html);
  const meta = await extractMeta(page, url);
  await writeFile(path.join(dir, 'meta.json'), JSON.stringify(meta, null, 2));

  // Mobile (reload to pick up responsive assets/layout)
  await page.setViewportSize(MOBILE);
  await page.reload({ waitUntil: 'load', timeout: 60000 });
  await dismissBanners(page);
  await autoScroll(page);
  await page.screenshot({ path: path.join(dir, 'mobile.png'), fullPage: true });

  await context.close();
  console.log(`  ✓ ${slug}  (${saved.size} assets)`);
}

async function main() {
  const filter = process.argv.slice(2);
  const { pages } = JSON.parse(await readFile(path.join(__dirname, 'urls.json'), 'utf8'));
  const targets = filter.length
    ? pages.filter((p) => filter.some((f) => p.slug.includes(f)))
    : pages;

  console.log(`Capturing ${targets.length} page(s) → ${OUT}`);
  const browser = await chromium.launch();
  for (const t of targets) {
    try {
      await capturePage(browser, t);
    } catch (err) {
      console.error(`  ✗ ${t.slug}: ${err.message}`);
    }
  }
  await browser.close();
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
