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
  '/blog/best-read-it-later-apps-2026': {
    es: '/es/blog/mejores-apps-para-leer-despues-2026',
    pt: '/pt/blog/melhores-apps-salvar-para-ler-depois-2026',
    de: '/de/blog/beste-read-it-later-apps-2026',
    fr: '/fr/blog/meilleures-applications-lecture-differee-2026',
    it: '/it/blog/migliori-app-salva-e-leggi-dopo-2026',
  },
  '/blog/how-to-organize-bookmarks': {
    es: '/es/blog/organizar-marcadores-navegador',
    pt: '/pt/blog/organizar-favoritos-navegador',
    de: '/de/blog/lesezeichen-organisieren',
    fr: '/fr/blog/organiser-favoris-navigateur',
    it: '/it/blog/organizzare-preferiti-browser',
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
    pt: '/pt/comparar/marqly-vs-pocket',
    de: '/de/vergleich/marqly-vs-pocket',
    fr: '/fr/comparer/marqly-vs-pocket',
    it: '/it/confronto/marqly-vs-pocket',
  },
  '/compare/marqly-vs-instapaper': {
    es: '/es/comparar/marqly-vs-instapaper',
    pt: '/pt/comparar/marqly-vs-instapaper',
    de: '/de/vergleich/marqly-vs-instapaper',
    fr: '/fr/comparer/marqly-vs-instapaper',
    it: '/it/confronto/marqly-vs-instapaper',
  },
  '/compare/marqly-vs-evernote-web-clipper': {
    es: '/es/comparar/marqly-vs-evernote',
    pt: '/pt/comparar/marqly-vs-evernote',
    de: '/de/vergleich/marqly-vs-evernote',
    fr: '/fr/comparer/marqly-vs-evernote',
    it: '/it/confronto/marqly-vs-evernote',
  },
  '/compare/marqly-vs-notion-web-clipper': {
    es: '/es/comparar/marqly-vs-notion',
    pt: '/pt/comparar/marqly-vs-notion',
    de: '/de/vergleich/marqly-vs-notion',
    fr: '/fr/comparer/marqly-vs-notion',
    it: '/it/confronto/marqly-vs-notion',
  },
  '/compare/marqly-vs-obsidian-web-clipper': {
    es: '/es/comparar/marqly-vs-obsidian',
    pt: '/pt/comparar/marqly-vs-obsidian',
    de: '/de/vergleich/marqly-vs-obsidian',
    fr: '/fr/comparer/marqly-vs-obsidian',
    it: '/it/confronto/marqly-vs-obsidian',
  },
  '/compare/marqly-vs-readwise-reader': {
    es: '/es/comparar/marqly-vs-readwise',
    pt: '/pt/comparar/marqly-vs-readwise',
    de: '/de/vergleich/marqly-vs-readwise',
    fr: '/fr/comparer/marqly-vs-readwise',
    it: '/it/confronto/marqly-vs-readwise',
  },
  '/compare/marqly-vs-matter': {
    es: '/es/comparar/marqly-vs-matter',
    pt: '/pt/comparar/marqly-vs-matter',
    de: '/de/vergleich/marqly-vs-matter',
    fr: '/fr/comparer/marqly-vs-matter',
    it: '/it/confronto/marqly-vs-matter',
  },
  '/alternatives/pocket': {
    es: '/es/alternativas/pocket',
    pt: '/pt/alternativas/pocket',
    de: '/de/alternativen/pocket',
    fr: '/fr/alternatives/pocket',
    it: '/it/alternative/pocket',
  },
  '/alternatives/raindrop': {
    es: '/es/alternativas/raindrop',
    pt: '/pt/alternativas/raindrop',
    de: '/de/alternativen/raindrop',
    fr: '/fr/alternatives/raindrop',
    it: '/it/alternative/raindrop',
  },
  '/for-researchers': {
    es: '/es/usos/investigadores',
    pt: '/pt/para-pesquisadores',
    de: '/de/fuer-forschende',
    fr: '/fr/pour-chercheurs',
    it: '/it/per-ricercatori',
  },
  '/for-teachers': {
    es: '/es/usos/profesores',
    pt: '/pt/para-professores',
    de: '/de/fuer-lehrkraefte',
    fr: '/fr/pour-enseignants',
    it: '/it/per-insegnanti',
  },
  '/for-developers': {
    es: '/es/usos/desarrolladores',
    pt: '/pt/para-desenvolvedores',
    de: '/de/fuer-entwickler',
    fr: '/fr/pour-developpeurs',
    it: '/it/per-sviluppatori',
  },
  '/for-content-creators': {
    es: '/es/usos/creadores-de-contenido',
    pt: '/pt/para-criadores-de-conteudo',
    de: '/de/fuer-content-creator',
    fr: '/fr/pour-createurs',
    it: '/it/per-creator',
  },
  '/for-marketers': {
    es: '/es/usos/marketing',
    pt: '/pt/para-marketing',
    de: '/de/fuer-marketing',
    fr: '/fr/pour-marketing',
    it: '/it/per-marketing',
  },
  '/for-journalists': {
    es: '/es/usos/periodistas',
    pt: '/pt/para-jornalistas',
    de: '/de/fuer-journalisten',
    fr: '/fr/pour-journalistes',
    it: '/it/per-giornalisti',
  },
  '/second-brain': {
    es: '/es/usos/segundo-cerebro',
    pt: '/pt/segundo-cerebro',
    de: '/de/zweites-gehirn',
    fr: '/fr/second-cerveau',
    it: '/it/secondo-cervello',
  },
  '/for-writers': {
    es: '/es/usos/escritores',
    pt: '/pt/para-escritores',
    de: '/de/fuer-autoren',
    fr: '/fr/pour-auteurs',
    it: '/it/per-scrittori',
  },
  '/reading-list': {
    es: '/es/usos/lista-de-lectura',
    pt: '/pt/lista-de-leitura',
    de: '/de/leseliste',
    fr: '/fr/liste-de-lecture',
    it: '/it/lista-di-lettura',
  },
  '/recipe-organizer': {
    es: '/es/usos/organizar-recetas',
    pt: '/pt/organizar-receitas',
    de: '/de/rezepte-organisieren',
    fr: '/fr/organiser-recettes',
    it: '/it/organizzare-ricette',
  },
  '/travel-planning': {
    es: '/es/usos/planificar-viajes',
    pt: '/pt/planejar-viagens',
    de: '/de/reise-planen',
    fr: '/fr/planifier-voyage',
    it: '/it/pianificare-viaggi',
  },
  '/alternatives/instapaper': {
    es: '/es/alternativas/instapaper',
    pt: '/pt/alternativas/instapaper',
    de: '/de/alternativen/instapaper',
    fr: '/fr/alternatives/instapaper',
    it: '/it/alternative/instapaper',
  },
  '/alternatives/evernote-web-clipper': {
    es: '/es/alternativas/evernote',
    pt: '/pt/alternativas/evernote',
    de: '/de/alternativen/evernote',
    fr: '/fr/alternatives/evernote',
    it: '/it/alternative/evernote',
  },
  '/alternatives/notion-web-clipper': {
    es: '/es/alternativas/notion',
    pt: '/pt/alternativas/notion',
    de: '/de/alternativen/notion',
    fr: '/fr/alternatives/notion',
    it: '/it/alternative/notion',
  },
  '/research-organizer': {
    es: '/es/usos/organizar-investigacion',
    pt: '/pt/organizar-pesquisa',
    de: '/de/recherche-organisieren',
    fr: '/fr/organiser-recherche',
    it: '/it/organizzare-ricerca',
  },
  '/watch-later': {
    es: '/es/usos/guardar-videos-youtube',
    pt: '/pt/salvar-videos-youtube',
    de: '/de/youtube-videos-speichern',
    fr: '/fr/enregistrer-videos-youtube',
    it: '/it/salvare-video-youtube',
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
