// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Deployed as a Cloudflare Worker (Workers Static Assets). All pages are
// prerendered (static); the adapter produces the worker entry + asset manifest
// that wrangler.json wires up.
export default defineConfig({
  site: 'https://www.marqly.com',
  trailingSlash: 'ignore',
  integrations: [react(), mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
});
