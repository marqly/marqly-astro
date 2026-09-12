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
  ja: {
    dateLocale: 'ja-JP',
    home: 'ホーム',
    blog: 'ブログ',
    byline: 'Marqly チーム',
    updated: '更新日',
    faqHeading: 'よくある質問',
    keepReading: 'あわせて読みたい',
    ctaHeading: '保存した情報を二度と見失わない。',
    ctaSub: 'Marqlyは、ブックマークしたすべてをAI搭載の検索可能な「第二の脳」へと変えます。キーワードではなく意味で探せます。',
  },
  zh: {
    dateLocale: 'zh-CN',
    home: '首页',
    blog: '博客',
    byline: 'Marqly 团队',
    updated: '更新于',
    faqHeading: '常见问题',
    keepReading: '延伸阅读',
    ctaHeading: '不再丢失你保存的任何内容。',
    ctaSub: 'Marqly 将你保存的每个书签转变为可语义搜索的 AI 第二大脑。只需描述记忆即可找回网页，无需记住精确标题。',
  },
  ko: {
    dateLocale: 'ko-KR',
    home: '홈',
    blog: '블로그',
    byline: 'Marqly 팀',
    updated: '업데이트',
    faqHeading: '자주 묻는 질문',
    keepReading: '더 읽어보기',
    ctaHeading: '저장한 정보를 다시는 잃어버리지 마세요.',
    ctaSub: 'Marqly는 북마크한 모든 것을 AI 기반의 검색 가능한 두 번째 뇌로 변환합니다. 정확한 키워드가 아닌 기억나는 의미로 검색하세요.',
  },
  nl: {
    dateLocale: 'nl-NL',
    home: 'Home',
    blog: 'Blog',
    byline: 'Marqly Team',
    updated: 'Bijgewerkt',
    faqHeading: 'Veelgestelde vragen',
    keepReading: 'Verder lezen',
    ctaHeading: 'Verlies nooit meer wat je opslaat.',
    ctaSub: 'Marqly verandert al je bladwijzers in een doorzoekbaar, AI-aangedreven tweede brein. Vind opgeslagen pagina’s op betekenis, niet op trefwoorden.',
  },
  pl: {
    dateLocale: 'pl-PL',
    home: 'Strona główna',
    blog: 'Blog',
    byline: 'Zespół Marqly',
    updated: 'Zaktualizowano',
    faqHeading: 'Często zadawane pytania',
    keepReading: 'Czytaj dalej',
    ctaHeading: 'Przestań tracić to, co zapisujesz.',
    ctaSub: 'Marqly zamienia Twoje zakładki w przeszukiwalny drugi mózg z AI. Znajduj strony po znaczeniu i opisie, a nie tylko po słowach kluczowych.',
  },
  tr: {
    dateLocale: 'tr-TR',
    home: 'Ana Sayfa',
    blog: 'Blog',
    byline: 'Marqly Ekibi',
    updated: 'Güncellendi',
    faqHeading: 'Sıkça Sorulan Sorular',
    keepReading: 'Okumaya devam et',
    ctaHeading: 'Kaydettiklerinizi kaybetmeye son verin.',
    ctaSub: 'Marqly, yer imlerinizi yapay zeka destekli, aranabilir ikinci bir beyne dönüştürür. Başlığı hatırlamasanız bile hatırladığınız anlamla arayın.',
  },
};

/** Blog URL for a post, from its collection id + lang (`de/foo` → /de/blog/foo). */
export function postPath(id: string, lang: string): string {
  if (lang === 'en') return `/blog/${id}`;
  const bare = id.startsWith(`${lang}/`) ? id.slice(lang.length + 1) : id;
  return `/${lang}/blog/${bare}`;
}

interface LinkHubStrings {
  /** aria-label for the whole hub section. */
  aria: string;
  /** Column of single-segment localized landers (features + audiences + jobs). */
  features: string;
  compare: string;
  alternatives: string;
  tools: string;
}

/**
 * Chrome for the localized pre-footer link hub (LocaleLinkHub.astro). English
 * pages keep using the original LinkHub; this only supplies the headings a
 * non-English hub must emit so no English leaks into a localized page. Link
 * text itself is never taken from here — it comes from each entry's own
 * localized frontmatter.
 */
export const LINKHUB_UI: Record<Locale, LinkHubStrings> = {
  en: { aria: 'Explore Marqly', features: 'Features & use cases', compare: 'Compare', alternatives: 'Alternatives', tools: 'Free tools' },
  es: { aria: 'Explorar Marqly', features: 'Funciones y casos de uso', compare: 'Comparar', alternatives: 'Alternativas', tools: 'Herramientas gratis' },
  pt: { aria: 'Explorar o Marqly', features: 'Recursos e casos de uso', compare: 'Comparar', alternatives: 'Alternativas', tools: 'Ferramentas gratuitas' },
  de: { aria: 'Marqly entdecken', features: 'Funktionen & Anwendungsfälle', compare: 'Vergleichen', alternatives: 'Alternativen', tools: 'Kostenlose Tools' },
  fr: { aria: 'Explorer Marqly', features: 'Fonctionnalités et cas d’usage', compare: 'Comparer', alternatives: 'Alternatives', tools: 'Outils gratuits' },
  it: { aria: 'Esplora Marqly', features: 'Funzioni e casi d’uso', compare: 'Confronta', alternatives: 'Alternative', tools: 'Strumenti gratuiti' },
  ja: { aria: 'Marqlyを探す', features: '機能と用途', compare: '比較', alternatives: '代替ツール', tools: '無料ツール' },
  zh: { aria: '探索 Marqly', features: '功能与使用场景', compare: '对比', alternatives: '替代方案', tools: '免费工具' },
  ko: { aria: 'Marqly 둘러보기', features: '기능 및 사용 사례', compare: '비교', alternatives: '대안', tools: '무료 도구' },
  nl: { aria: 'Marqly ontdekken', features: 'Functies en gebruikssituaties', compare: 'Vergelijken', alternatives: 'Alternatieven', tools: 'Gratis tools' },
  pl: { aria: 'Poznaj Marqly', features: 'Funkcje i zastosowania', compare: 'Porównaj', alternatives: 'Alternatywy', tools: 'Darmowe narzędzia' },
  tr: { aria: 'Marqly’ı keşfedin', features: 'Özellikler ve kullanım alanları', compare: 'Karşılaştır', alternatives: 'Alternatifler', tools: 'Ücretsiz araçlar' },
};

/**
 * Localized URL segments that carry a compare/alternatives/tools namespace,
 * used to label a link-hub column. Every value below was read off the live
 * route inventory — each locale tree translates these slugs differently (and
 * ja/ko/zh keep the English ones), so a group key can't be matched against a
 * single English word.
 */
export const COMPARE_SEGMENTS = new Set([
  'compare', 'vergleich', 'comparar', 'comparer', 'confronto',
  'karsilastirma', 'porownanie', 'vergelijken',
]);
export const ALTERNATIVES_SEGMENTS = new Set([
  'alternatives', 'alternativen', 'alternativas', 'alternative',
  'alternatywy', 'alternatifler', 'alternatieven',
]);
export const TOOLS_SEGMENTS = new Set([
  'tools', 'herramientas', 'ferramentas', 'outils', 'strumenti',
]);
