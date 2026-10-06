/**
 * Central translation map — the single source of truth for which URL is the
 * same page in another language. Keyed by the ENGLISH path; values are the
 * localized paths (localized slugs, not prefix-only, so @astrojs/sitemap's
 * i18n option can't pair them — hreflang is emitted from this map instead,
 * via the layouts' `alternates` prop).
 *
 * Rules (hreflang discipline):
 *  - Only list pages that actually exist in that locale. A missing key/locale
 *    simply means "no alternate" — never point hreflang at a 404.
 *  - Every member of a cluster emits the full set (self included) + x-default.
 *  - English is always the x-default.
 */

export const LOCALES = ['en', 'es', 'pt', 'de', 'fr', 'it', 'ja', 'zh', 'ko', 'nl', 'pl', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * hreflang attribute value per locale tree — LANGUAGE-ONLY.
 *
 * We publish exactly one tree per language (/pt, not /pt-BR; /zh, not /zh-Hans
 * or /zh-CN). Master §Phase 1.1: keep language codes + x-default unless we
 * actually serve region-specific content, which we do not. The old table also
 * emitted region codes (ja-JP, zh-Hans/zh-CN, pt-BR, ko-KR, nl-NL, pl-PL,
 * tr-TR) pointing at the SAME href — valid but noise that inflated every head
 * from ~13 to ~21 <link> tags (1,236 pages). Collapsed to the base code.
 */
const HREFLANG: Record<Locale, string[]> = {
  en: ['en'],
  es: ['es'],
  pt: ['pt'],
  de: ['de'],
  fr: ['fr'],
  it: ['it'],
  ja: ['ja'],
  zh: ['zh'],
  ko: ['ko'],
  nl: ['nl'],
  pl: ['pl'],
  tr: ['tr'],
};

/** Open Graph locale codes per tree. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_LA',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  ja: 'ja_JP',
  zh: 'zh_CN',
  ko: 'ko_KR',
  nl: 'nl_NL',
  pl: 'pl_PL',
  tr: 'tr_TR',
};

const SITE = 'https://www.marqly.com';

/** English path → localized paths. Extend as locale pages ship. */
/** English path -> localized paths. Lives in translations.mjs (plain data so
 *  build scripts + layouts + this module share one source without a cycle). */
import TRANSLATIONS from './translations.mjs';
import { isIndexable } from '../lib/content-quality.mjs';

export type { };


/** Locale roots, for the footer language selector. */
export const LOCALE_HOMES: { lang: Exclude<Locale, 'en'>; label: string; href: string }[] = [
  { lang: 'es', label: 'Español', href: '/es' },
  { lang: 'pt', label: 'Português', href: '/pt' },
  { lang: 'de', label: 'Deutsch', href: '/de' },
  { lang: 'fr', label: 'Français', href: '/fr' },
  { lang: 'it', label: 'Italiano', href: '/it' },
  { lang: 'ja', label: '日本語', href: '/ja' },
  { lang: 'zh', label: '简体中文', href: '/zh' },
  { lang: 'ko', label: '한국어', href: '/ko' },
  { lang: 'nl', label: 'Nederlands', href: '/nl' },
  { lang: 'pl', label: 'Polski', href: '/pl' },
  { lang: 'tr', label: 'Türkçe', href: '/tr' },
];

export interface Alternate {
  hreflang: string;
  href: string;
}

/**
 * Full hreflang link set for a page, looked up by its own path (EN or any
 * locale variant). Returns [] when the page has no translations — layouts
 * then emit nothing, which is correct.
 */
export function alternatesForPath(path: string): Alternate[] {
  const clean = path.replace(/\.html$/, '').replace(/\/$/, '') || '/';

  let enPath: string | undefined;
  if (TRANSLATIONS[clean]) {
    enPath = clean;
  } else {
    for (const [en, locs] of Object.entries(TRANSLATIONS)) {
      if (Object.values(locs).includes(clean)) {
        enPath = en;
        break;
      }
    }
  }
  if (!enPath) return [];

  const cluster = TRANSLATIONS[enPath];
  const out: Alternate[] = [];
  // ADR-001: the EN source is the x-default; skip it if IT is somehow below bar
  // (never happens today — EN is always indexable — but the check keeps the
  // invariant that hreflang never advertises a noindexed URL).
  if (isIndexable(enPath)) {
    for (const tag of HREFLANG.en) out.push({ hreflang: tag, href: `${SITE}${enPath}` });
  }
  for (const loc of LOCALES) {
    if (loc === 'en') continue;
    const p = cluster[loc];
    if (!p) continue;
    // Pruned locale twin: drop it from EVERY sibling's cluster, not just its own.
    if (!isIndexable(p)) continue;
    for (const tag of HREFLANG[loc]) out.push({ hreflang: tag, href: `${SITE}${p}` });
  }
  if (isIndexable(enPath)) out.push({ hreflang: 'x-default', href: `${SITE}${enPath}` });
  return out;
}
