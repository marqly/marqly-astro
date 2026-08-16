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

export const LOCALES = ['en', 'es', 'pt', 'de', 'fr', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

/** hreflang attribute value per locale tree. `pt` also emits pt-BR (primary). */
const HREFLANG: Record<Locale, string[]> = {
  en: ['en'],
  es: ['es'],
  pt: ['pt-BR', 'pt'],
  de: ['de'],
  fr: ['fr'],
  it: ['it'],
};

/** Open Graph locale codes per tree. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_LA',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
};

const SITE = 'https://www.marqly.com';

/** English path → localized paths. Extend as locale pages ship. */
export const TRANSLATIONS: Record<string, Partial<Record<Locale, string>>> = {
  '/tools/youtube-summarize': {
    es: '/es/herramientas/resumen-youtube',
    pt: '/pt/ferramentas/resumidor-de-videos-do-youtube',
    de: '/de/tools/youtube-zusammenfassung',
    fr: '/fr/outils/resume-youtube',
    it: '/it/strumenti/riassunto-video-youtube',
  },
  '/tools/youtube-transcript': {
    es: '/es/herramientas/transcripcion-youtube',
    pt: '/pt/ferramentas/transcricao-de-video-do-youtube',
    de: '/de/tools/youtube-transkript',
    fr: '/fr/outils/transcription-youtube',
    it: '/it/strumenti/trascrizione-video-youtube',
  },
  '/blog/best-pocket-alternatives-2026': {
    de: '/de/blog/pocket-alternativen-2026',
  },
  '/blog': {
    de: '/de/blog',
  },
};

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
  for (const tag of HREFLANG.en) out.push({ hreflang: tag, href: `${SITE}${enPath}` });
  for (const loc of LOCALES) {
    if (loc === 'en') continue;
    const p = cluster[loc];
    if (!p) continue;
    for (const tag of HREFLANG[loc]) out.push({ hreflang: tag, href: `${SITE}${p}` });
  }
  out.push({ hreflang: 'x-default', href: `${SITE}${enPath}` });
  return out;
}
