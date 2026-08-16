// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Deployed as a Cloudflare Worker (Workers Static Assets). All pages are
// prerendered (static); the adapter produces the worker entry + asset manifest
// that wrangler.json wires up.
export default defineConfig({
  site: 'https://www.marqly.com',
  trailingSlash: 'ignore',
  // Emit `<route>.html` instead of `<route>/index.html` so URLs resolve with
  // NO trailing slash (parity with the original Framer URLs and with every
  // internal link on the site). Before this, Workers assets 307-redirected
  // every no-slash request to its slashed twin — a temporary redirect on all
  // ~54k internal link hops. Old /path/ URLs now 308 back to /path.
  build: { format: 'file' },
  // Locale subdirectories with localized slugs (/es/herramientas/…). English
  // stays unprefixed at root and is the x-default. hreflang is emitted from
  // src/i18n/routes.ts via the layouts (the sitemap i18n option can't pair
  // localized slugs, so it stays off).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'de', 'fr', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react(), mdx(), sitemap()],
  vite: {
    // Tailwind v4 (scoped: landing.css uses `source(none)` + explicit @source
    // globs, so utilities are generated only for the redesigned landing).
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node',
  }),
});
