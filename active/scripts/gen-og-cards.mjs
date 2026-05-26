// Generate branded 1200x630 OG cards (title + category + wordmark) per blog post.
// satori (HTML-ish → SVG) + resvg (SVG → PNG). Output: public/og/<slug>.png
// Run: node active/scripts/gen-og-cards.mjs
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, 'src/content/blog');
const OUT = path.join(ROOT, 'public/og');

const regular = await readFile('/System/Library/Fonts/Supplemental/Arial.ttf');
const bold = await readFile('/System/Library/Fonts/Supplemental/Arial Bold.ttf');

function parseFm(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) out[mm[1]] = mm[2].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

const el = (type, props, children) => ({
  type,
  props: { ...props, ...(children !== undefined ? { children } : {}) },
});

function card(title, category) {
  return el(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        background: 'linear-gradient(135deg, #ffffff 0%, #eaf1ff 55%, #efeaff 100%)',
        fontFamily: 'Arial',
      },
    },
    [
      // top row: wordmark + category chip
      el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center' } }, [
          el('div', {
            style: {
              width: '40px', height: '40px', borderRadius: '12px', marginRight: '16px',
              background: 'linear-gradient(135deg, #007aff, #a38afb)', display: 'flex',
            },
          }),
          el('div', { style: { fontSize: '36px', fontWeight: 700, color: '#050506', display: 'flex' } }, 'Marqly'),
        ]),
        el('div', {
          style: {
            fontSize: '24px', color: '#007aff', fontWeight: 700, padding: '10px 22px',
            background: 'rgba(0,122,255,0.10)', borderRadius: '999px', display: 'flex',
          },
        }, category || 'Guides'),
      ]),
      // title
      el('div', {
        style: {
          fontSize: '62px', fontWeight: 700, color: '#0a0a0f', lineHeight: 1.12,
          letterSpacing: '-0.02em', maxWidth: '1000px', display: 'flex',
        },
      }, title),
      // footer
      el('div', { style: { fontSize: '26px', color: '#616479', display: 'flex' } }, 'marqly.com/blog'),
    ]
  );
}

await mkdir(OUT, { recursive: true });
const files = (await readdir(DIR)).filter((f) => /\.(md|mdx)$/.test(f));
let done = 0;
for (const file of files) {
  const slug = file.replace(/\.(md|mdx)$/, '');
  const fm = parseFm(await readFile(path.join(DIR, file), 'utf8'));
  const title = fm.title || slug.replace(/-/g, ' ');
  const svg = await satori(card(title, fm.category), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Arial', data: regular, weight: 400, style: 'normal' },
      { name: 'Arial', data: bold, weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  await writeFile(path.join(OUT, `${slug}.png`), png);
  done++;
}
console.log(`OG cards generated: ${done}`);
