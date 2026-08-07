// Generate branded 1200x630 OG cards for the SEO engines (faq / compare /
// alternatives / use-case landers / tools + hub indexes), matching the blog
// card design in gen-og-cards.mjs. Output: public/og/seo/<ns>-<slug>.png
// Run: node active/scripts/gen-og-seo.mjs
import { readFile, readdir, writeFile, mkdir, mkdtemp, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import os from 'node:os';
import satori from 'satori';

const execFileAsync = promisify(execFile);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'og/seo');

const regular = await readFile('/System/Library/Fonts/Supplemental/Arial.ttf');
const bold = await readFile('/System/Library/Fonts/Supplemental/Arial Bold.ttf');

function fmField(src, field) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const line = m[1].split('\n').find((l) => l.startsWith(`${field}:`));
  return line ? line.slice(field.length + 1).trim().replace(/^["']|["']$/g, '') : null;
}

const el = (type, props, children) => ({
  type,
  props: { ...props, ...(children !== undefined ? { children } : {}) },
});

function card(title, chip, footer) {
  const size = title.length > 70 ? '52px' : '62px';
  return el(
    'div',
    {
      style: {
        width: '1200px', height: '630px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '72px',
        background: 'linear-gradient(135deg, #ffffff 0%, #eaf1ff 55%, #efeaff 100%)',
        fontFamily: 'Arial',
      },
    },
    [
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
        }, chip),
      ]),
      el('div', {
        style: {
          fontSize: size, fontWeight: 700, color: '#0a0a0f', lineHeight: 1.12,
          letterSpacing: '-0.02em', maxWidth: '1050px', display: 'flex',
        },
      }, title),
      el('div', { style: { fontSize: '26px', color: '#616479', display: 'flex' } }, footer),
    ]
  );
}

async function png(name, title, chip, footer, outputDir = OUT) {
  const svg = await satori(card(title, chip, footer), {
    width: 1200, height: 630,
    fonts: [
      { name: 'Arial', data: regular, weight: 400, style: 'normal' },
      { name: 'Arial', data: bold, weight: 700, style: 'normal' },
    ],
  });
  await mkdir(outputDir, { recursive: true });
  const outPath = path.join(outputDir, `${name}.png`);

  try {
    const { Resvg } = await import('@resvg/resvg-js');
    const data = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
    await writeFile(outPath, data);
  } catch (err) {
    // Fallback to ImageMagick when the platform-specific Resvg binary is missing
    // (common on x64 macOS when node_modules were installed for arm64).
    const tmpDir = await mkdtemp(path.join(os.tmpdir(), 'marqly-og-'));
    const tmpSvg = path.join(tmpDir, `${name}.svg`);
    // ImageMagick's SVG renderer does not handle satori's gradient patterns well,
    // so fall back to a clean white background for the card canvas.
    const fallbackSvg = svg.replace(/fill="url\(#satori_pattern_id_\d+\)"/g, 'fill="#ffffff"');
    await writeFile(tmpSvg, fallbackSvg);
    try {
      await execFileAsync('magick', ['convert', tmpSvg, outPath]);
    } catch (imErr) {
      await unlink(tmpSvg);
      throw imErr;
    }
    await unlink(tmpSvg);
  }
}

await mkdir(OUT, { recursive: true });
let n = 0;

// Competitor name map
const compDir = path.join(ROOT, 'src/data/competitors');
const comps = {};
for (const f of (await readdir(compDir)).filter((f) => f.endsWith('.json'))) {
  const j = JSON.parse(await readFile(path.join(compDir, f), 'utf8'));
  comps[j.slug] = j.name;
}

// FAQ
const faqDir = path.join(ROOT, 'src/content/faq');
for (const f of (await readdir(faqDir)).filter((f) => /\.mdx?$/.test(f))) {
  const slug = f.replace(/\.mdx?$/, '');
  const q = fmField(await readFile(path.join(faqDir, f), 'utf8'), 'question') || slug.replace(/-/g, ' ');
  await png(`faq-${slug}`, q, 'FAQ', 'marqly.com/faq');
  n++;
}

// Use cases
const ucDir = path.join(ROOT, 'src/content/usecases');
for (const f of (await readdir(ucDir)).filter((f) => /\.mdx?$/.test(f))) {
  const slug = f.replace(/\.mdx?$/, '');
  const t = fmField(await readFile(path.join(ucDir, f), 'utf8'), 'title') || slug.replace(/-/g, ' ');
  await png(`usecase-${slug}`, t, 'Use cases', `marqly.com/${slug}`);
  n++;
}

// Compare: marqly pairs + verdict pairs
for (const slug of Object.keys(comps).filter((s) => s !== 'marqly')) {
  await png(`compare-marqly-vs-${slug}`, `Marqly vs ${comps[slug]}: Which is better? (2026)`, 'Compare', 'marqly.com/compare');
  n++;
  await png(`alternatives-${slug}`, `Best ${comps[slug]} Alternatives (2026)`, 'Alternatives', 'marqly.com/alternatives');
  n++;
}
const vDir = path.join(ROOT, 'src/content/verdicts');
for (const f of (await readdir(vDir).catch(() => [])).filter((f) => /\.mdx?$/.test(f))) {
  const slug = f.replace(/\.mdx?$/, '');
  const src = await readFile(path.join(vDir, f), 'utf8');
  const a = comps[fmField(src, 'a')] || fmField(src, 'a');
  const b = comps[fmField(src, 'b')] || fmField(src, 'b');
  await png(`compare-${slug}`, `${a} vs ${b}: Which is better? (2026)`, 'Compare', 'marqly.com/compare');
  n++;
}

// Tools + hubs
const tools = {
  'youtube-transcript': 'Free YouTube Transcript Viewer',
  'youtube-summarize': 'Free YouTube Video Summarizer',
  'bookmark-file-viewer': 'Bookmark File Viewer',
  'duplicate-bookmark-finder': 'Duplicate Bookmark Finder',
  'pocket-export-converter': 'Pocket Export Converter',
  'dead-link-checker': 'Dead Link Checker',
  'url-cleaner': 'URL Cleaner',
  'reading-time': 'Reading Time Calculator',
  'youtube-thumbnail-downloader': 'Free YouTube Thumbnail Downloader',
  'youtube-timestamp-link': 'YouTube Timestamp Link Generator',
  'utm-builder': 'Free UTM Builder',
  'url-encoder': 'URL Encoder & Decoder',
  'html-to-markdown': 'HTML to Markdown Converter',
  'redirect-checker': 'Redirect Chain Checker',
  'bookmarklet-maker': 'Bookmarklet Maker',
  'open-graph-checker': 'Open Graph & Meta Tag Checker',
};
for (const [slug, title] of Object.entries(tools)) {
  await png(`tool-${slug}`, title, 'Free tool', `marqly.com/tools/${slug}`);
  n++;
}
// Prompts
const promptDir = path.join(ROOT, 'src/content/prompts');
const categories = new Set();
for (const f of (await readdir(promptDir).catch(() => [])).filter((f) => /\.mdx?$/.test(f))) {
  const slug = f.replace(/\.mdx?$/, '');
  const src = await readFile(path.join(promptDir, f), 'utf8');
  const t = fmField(src, 'title') || slug.replace(/-/g, ' ');
  const cat = fmField(src, 'category') || 'Prompt';
  categories.add(cat);
  await png(`prompt-${slug}`, t, cat, 'marqly.com/prompt-gallery');
  n++;
}

// Prompt category pages
for (const cat of categories) {
  const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  await png(`category-prompt-${slug}`, `${cat} AI Prompts`, 'Prompts', `marqly.com/prompt-gallery/category/${slug}`);
  n++;
}
await png('hub-prompt-categories', 'Browse AI Prompt Categories', 'Prompts', 'marqly.com/prompt-gallery/category');
n++;

await png('hub-faq', 'Marqly FAQ — every question, answered', 'FAQ', 'marqly.com/faq');
await png('hub-compare', 'Compare bookmark managers, honestly', 'Compare', 'marqly.com/compare');
await png('hub-alternatives', 'Alternatives to every bookmarking tool', 'Alternatives', 'marqly.com/alternatives');
await png('hub-tools', 'Free tools — no signup', 'Free tools', 'marqly.com/tools');
await png('hub-prompt-gallery', 'AI Prompt Gallery — copy-paste prompts', 'Prompts', 'marqly.com/prompt-gallery');
await png('extension', 'One extension. Your browser workspace.', 'Browser extension', 'marqly.com/extension');
n += 6;

// Default social card used by the homepage and any page without a more
// specific preview. Keep this at /og-default.png because both layouts use it.
await png(
  'og-default',
  'Your bookmarks, finally searchable by meaning',
  'AI bookmark manager',
  'marqly.com',
  PUBLIC,
);
n++;

console.log(`SEO OG cards generated: ${n}`);
