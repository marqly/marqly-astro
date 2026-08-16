/**
 * Locale chrome strings for shared components that render localized pages
 * (BlogPostLayout labels today; grows with the locale rollout). Page-specific
 * copy stays in the pages — this file is only for strings a shared component
 * must emit in the page's language.
 */
import type { Locale } from './routes';

interface BlogStrings {
  /** BCP-47 tag for toLocaleDateString. */
  dateLocale: string;
  home: string;
  blog: string;
  byline: string;
  updated: string;
  faqHeading: string;
  keepReading: string;
  ctaHeading: string;
  ctaSub: string;
}

export const BLOG_UI: Record<Locale, BlogStrings> = {
  en: {
    dateLocale: 'en-US',
    home: 'Home',
    blog: 'Blog',
    byline: 'Marqly Team',
    updated: 'Updated',
    faqHeading: 'Frequently asked questions',
    keepReading: 'Keep reading',
    ctaHeading: 'Stop losing what you save.',
    ctaSub: 'Marqly turns everything you bookmark into a searchable, AI-powered second brain. Ask it anything — find saves by meaning, not keywords.',
  },
  es: {
    dateLocale: 'es-419',
    home: 'Inicio',
    blog: 'Blog',
    byline: 'Equipo de Marqly',
    updated: 'Actualizado',
    faqHeading: 'Preguntas frecuentes',
    keepReading: 'Sigue leyendo',
    ctaHeading: 'Deja de perder lo que guardas.',
    ctaSub: 'Marqly convierte todo lo que guardas en un segundo cerebro con IA. Encuentra cualquier página describiendo lo que recuerdas.',
  },
  pt: {
    dateLocale: 'pt-BR',
    home: 'Início',
    blog: 'Blog',
    byline: 'Equipe Marqly',
    updated: 'Atualizado',
    faqHeading: 'Perguntas frequentes',
    keepReading: 'Continue lendo',
    ctaHeading: 'Pare de perder o que você salva.',
    ctaSub: 'O Marqly transforma tudo o que você salva em um segundo cérebro com IA. Encontre qualquer página descrevendo o que você lembra.',
  },
  de: {
    dateLocale: 'de-DE',
    home: 'Startseite',
    blog: 'Blog',
    byline: 'Marqly Team',
    updated: 'Aktualisiert',
    faqHeading: 'Häufige Fragen',
    keepReading: 'Weiterlesen',
    ctaHeading: 'Nie wieder verlieren, was du speicherst.',
    ctaSub: 'Marqly macht aus allem, was du speicherst, ein durchsuchbares zweites Gehirn mit KI. Finde jede Seite, indem du beschreibst, woran du dich erinnerst.',
  },
  fr: {
    dateLocale: 'fr-FR',
    home: 'Accueil',
    blog: 'Blog',
    byline: 'Équipe Marqly',
    updated: 'Mis à jour',
    faqHeading: 'Questions fréquentes',
    keepReading: 'À lire ensuite',
    ctaHeading: 'Ne perdez plus ce que vous sauvegardez.',
    ctaSub: 'Marqly transforme tout ce que vous sauvegardez en un second cerveau propulsé par l’IA. Retrouvez n’importe quelle page en décrivant ce dont vous vous souvenez.',
  },
  it: {
    dateLocale: 'it-IT',
    home: 'Home',
    blog: 'Blog',
    byline: 'Team Marqly',
    updated: 'Aggiornato',
    faqHeading: 'Domande frequenti',
    keepReading: 'Continua a leggere',
    ctaHeading: 'Smetti di perdere quello che salvi.',
    ctaSub: 'Marqly trasforma tutto ciò che salvi in un secondo cervello con AI. Ritrova qualsiasi pagina descrivendo quello che ricordi.',
  },
};

/** Blog URL for a post, from its collection id + lang (`de/foo` → /de/blog/foo). */
export function postPath(id: string, lang: string): string {
  if (lang === 'en') return `/blog/${id}`;
  const bare = id.startsWith(`${lang}/`) ? id.slice(lang.length + 1) : id;
  return `/${lang}/blog/${bare}`;
}
