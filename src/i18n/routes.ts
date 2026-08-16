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
    es: '/es/blog/alternativas-a-pocket-2026',
    pt: '/pt/blog/alternativas-ao-pocket-2026',
    de: '/de/blog/pocket-alternativen-2026',
    fr: '/fr/blog/alternatives-a-pocket-2026',
    it: '/it/blog/alternative-a-pocket-2026',
  },
  '/blog': {
    es: '/es/blog',
    pt: '/pt/blog',
    de: '/de/blog',
    fr: '/fr/blog',
    it: '/it/blog',
  },
  '/': {
    es: '/es',
    pt: '/pt',
    de: '/de',
    fr: '/fr',
    it: '/it',
  },
  '/web-highlighter': {
    es: '/es/extension',
    pt: '/pt/marca-texto-para-sites',
    de: '/de/webseiten-markieren',
    fr: '/fr/surligner-page-web',
    it: '/it/evidenziatore-web',
  },
  '/for-students': {
    es: '/es/usos/estudiantes',
    pt: '/pt/para-estudantes',
    de: '/de/studium',
    fr: '/fr/etudiants',
    it: '/it/studenti',
  },
  '/tab-manager': {
    es: '/es/usos/guardar-pestanas',
    pt: '/pt/salvar-abas',
    de: '/de/tabs-speichern',
    fr: '/fr/sauvegarder-onglets',
    it: '/it/salva-schede',
  },
  '/read-it-later': {
    es: '/es/usos/guardar-articulos-leer-despues',
    pt: '/pt/salvar-para-ler-depois',
    de: '/de/spaeter-lesen',
    fr: '/fr/lire-plus-tard',
    it: '/it/salva-e-leggi-dopo',
  },
  '/compare/marqly-vs-raindrop': {
    es: '/es/comparar/marqly-vs-raindrop',
    pt: '/pt/comparar/marqly-vs-raindrop',
    de: '/de/vergleich/marqly-vs-raindrop',
    fr: '/fr/comparer/marqly-vs-raindrop',
    it: '/it/confronto/marqly-vs-raindrop',
  },
  '/compare/marqly-vs-pocket': {
    es: '/es/comparar/marqly-vs-pocket',
  },
  '/compare/marqly-vs-instapaper': {
    es: '/es/comparar/marqly-vs-instapaper',
  },
  '/compare/marqly-vs-evernote-web-clipper': {
    es: '/es/comparar/marqly-vs-evernote',
  },
  '/compare/marqly-vs-notion-web-clipper': {
    es: '/es/comparar/marqly-vs-notion',
  },
  '/compare/marqly-vs-obsidian-web-clipper': {
    es: '/es/comparar/marqly-vs-obsidian',
  },
  '/compare/marqly-vs-readwise-reader': {
    es: '/es/comparar/marqly-vs-readwise',
  },
  '/compare/marqly-vs-matter': {
    es: '/es/comparar/marqly-vs-matter',
  },
  '/alternatives/pocket': {
    es: '/es/alternativas/pocket',
  },
  '/alternatives/raindrop': {
    es: '/es/alternativas/raindrop',
  },
  '/for-researchers': {
    es: '/es/usos/investigadores',
  },
  '/for-teachers': {
    es: '/es/usos/profesores',
  },
  '/for-developers': {
    es: '/es/usos/desarrolladores',
  },
  '/for-content-creators': {
    es: '/es/usos/creadores-de-contenido',
  },
  '/for-marketers': {
    es: '/es/usos/marketing',
  },
  '/for-journalists': {
    es: '/es/usos/periodistas',
  },
  '/second-brain': {
    es: '/es/usos/segundo-cerebro',
  },
  '/for-writers': {
    es: '/es/usos/escritores',
  },
  '/reading-list': {
    es: '/es/usos/lista-de-lectura',
  },
  '/recipe-organizer': {
    es: '/es/usos/organizar-recetas',
  },
  '/travel-planning': {
    es: '/es/usos/planificar-viajes',
  },
  '/alternatives/instapaper': {
    es: '/es/alternativas/instapaper',
  },
  '/alternatives/evernote-web-clipper': {
    es: '/es/alternativas/evernote',
  },
  '/alternatives/notion-web-clipper': {
    es: '/es/alternativas/notion',
  },
  '/research-organizer': {
    es: '/es/usos/organizar-investigacion',
  },
  '/watch-later': {
    es: '/es/usos/guardar-videos-youtube',
  },
};

/** Locale roots, for the footer language selector. */
export const LOCALE_HOMES: { lang: Exclude<Locale, 'en'>; label: string; href: string }[] = [
  { lang: 'es', label: 'Español', href: '/es' },
  { lang: 'pt', label: 'Português', href: '/pt' },
  { lang: 'de', label: 'Deutsch', href: '/de' },
  { lang: 'fr', label: 'Français', href: '/fr' },
  { lang: 'it', label: 'Italiano', href: '/it' },
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
