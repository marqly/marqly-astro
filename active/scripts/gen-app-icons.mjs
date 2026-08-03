/**
 * Renders the touch/PWA icons from the vector brand mark.
 *
 * iOS applies its own rounded-rect mask to apple-touch-icon, so the art is
 * flattened onto the brand colour rather than left transparent — otherwise the
 * logo's circle shows up as a circle floating inside a rounded square.
 *
 * Usage: node active/scripts/gen-app-icons.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const SOURCE = 'active/assets/logo-mark.svg';
const BRAND_BG = { r: 0x2e, g: 0x36, b: 0x3c, alpha: 1 };
const OUTPUTS = [
  { file: 'public/apple-touch-icon.png', size: 180, flatten: true },
  { file: 'public/icon-192.png', size: 192, flatten: true },
  { file: 'public/icon-512.png', size: 512, flatten: true },
];

const svg = readFileSync(SOURCE);

for (const { file, size, flatten } of OUTPUTS) {
  // density scales the SVG rasterisation so the 32px viewBox stays crisp.
  let img = sharp(svg, { density: Math.ceil((72 * size) / 32) }).resize(size, size, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });
  if (flatten) img = img.flatten({ background: BRAND_BG });
  const buf = await img.png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(file, buf);
  const meta = await sharp(buf).metadata();
  console.log(`${file} — ${meta.width}x${meta.height} ${meta.format} (${buf.length} bytes)`);
}
