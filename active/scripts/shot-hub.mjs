// Render built pages and screenshot the localized link hub for visual QA.
// Usage: node active/scripts/shot-hub.mjs
import { chromium } from 'playwright';

const BASE = 'http://localhost:8899';
const TARGETS = [
  { name: 'ja-lander-desktop', path: '/ja/bookmark-organizer.html', width: 1440, height: 1000 },
  { name: 'es-usos-desktop', path: '/es/usos/abogados.html', width: 1440, height: 1000 },
  { name: 'de-compare-desktop', path: '/de/vergleich/marqly-vs-raindrop.html', width: 1440, height: 1000 },
  { name: 'ja-lander-mobile', path: '/ja/bookmark-organizer.html', width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const t of TARGETS) {
  const page = await browser.newPage({ viewport: { width: t.width, height: t.height } });
  await page.goto(BASE + t.path, { waitUntil: 'load' });
  const hub = page.locator('section.linkhub');
  const count = await hub.count();
  if (!count) {
    console.log(`${t.name}: NO HUB FOUND`);
    await page.close();
    continue;
  }
  // Overflow check: does the hub (or any child) spill horizontally?
  const metrics = await hub.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const kids = [...el.querySelectorAll('nav')].map((n) => {
      const b = n.getBoundingClientRect();
      return { label: n.getAttribute('aria-label'), w: Math.round(b.width), scrollW: n.scrollWidth };
    });
    return {
      width: Math.round(r.width),
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      docScroll: document.documentElement.scrollWidth,
      docClient: document.documentElement.clientWidth,
      kids,
    };
  });
  const pageOverflow = metrics.docScroll > metrics.docClient + 1;
  await hub.screenshot({ path: `active/tmp/shot-${t.name}.png` });
  console.log(`${t.name}: hub ${metrics.width}px, columns:`,
    metrics.kids.map((k) => `${k.label}=${k.w}px`).join(' | '));
  console.log(`   horizontal page overflow: ${pageOverflow ? 'YES ← BUG' : 'no'} ` +
    `(doc ${metrics.docScroll}/${metrics.docClient})`);
  await page.close();
}
await browser.close();
