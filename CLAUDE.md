# Marqly Marketing Site — Project CLAUDE.md

Compressed project context for Claude Code. Global rules from
`~/.claude/CLAUDE.md` still apply. Detailed design/system notes live in
`./docs/superpowers/` (spec + plan) and the auto-memory file.

## Architecture (compressed)

Pixel-perfect rebuild of the Framer-hosted marqly.com marketing site as an
**Astro v5 static site** deployed to **Cloudflare Pages**. The legacy site
(Framer) is the visual reference; we capture it with a headless browser and
clone it with clean, hand-written Astro components + scoped CSS + design tokens.
Blog posts are Astro Content Collections (MDX). No backend — auth/product live
separately on app.marqly.com.

## Stack

- **Language / framework**: Astro v5 (static output), TypeScript, MDX
- **Styling**: scoped component CSS + design tokens (`src/styles/tokens.css`)
- **Backend**: none (marketing only; app is external)
- **Build / run**: `npm run dev` (local), `npm run build` → `dist/`, `npm run preview`
- **Test**: visual regression via `node active/scripts/diff.mjs` (pixelmatch vs live reference) + `astro build` success
- **Host**: Cloudflare Pages (build `npm run build`, output `dist/`)

## Key entry points

- `astro.config.mjs` — site URL, static output, mdx + sitemap integrations
- `src/layouts/BaseLayout.astro` — `<head>`/SEO, global CSS, fonts, Header/Footer
- `src/layouts/BlogPostLayout.astro` — cloned blog post template
- `src/content/config.ts` — blog collection zod schema
- `src/styles/tokens.css` — design tokens extracted from the live site
- `active/scripts/capture.mjs` / `diff.mjs` — live-site capture + screenshot-diff harness

## Migration info

- Spec: `docs/superpowers/specs/2026-05-25-framer-to-astro-migration-design.md`
- Plan: `docs/superpowers/plans/2026-05-25-framer-to-astro-migration.md`
- Canonical domain: `https://www.marqly.com` (www, per sitemap)
- **URL preservation:** live URLs kept 1:1 (incl. `/Pricing`, `/T&C`, dotted slugs). Only the 3 junk/duplicate blog slugs get 301s in `public/_redirects`.
- **SEO is critical:** titles/descriptions/canonical/OG/JSON-LD captured and replicated; do not let them drift.

## Sandbox rule (hard)

Never dump generated files into this project root. Use `./active/tmp/` for
ephemeral work and `./active/logs/` for research outputs (incl. capture
artifacts and diff scores). The root stays clean.

## Lab Notes: What Not To Do

<!-- append one-liners as you discover mistakes -->
<!-- format: - <date>: <what failed> → <why> → <what to do instead> -->
