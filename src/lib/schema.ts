/**
 * JSON-LD builders. Pages pass the results into the layout's `jsonLd` prop so
 * structured data always ships in the head. Keep visible content and schema
 * text identical (Google requirement).
 */

const SITE = 'https://www.marqly.com';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc';

// Storefront + profile URLs that verifiably exist for Marqly today (grep-confirmed
// in src/, docs/, public/ on 2026-10-05). Only Marqly's own properties — the
// youcal iOS app is a different product and is deliberately NOT listed here.
export const STORE_URLS = {
  chrome: CHROME_STORE_URL,
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/marqly/',
  ios: 'https://apps.apple.com/us/app/marqly-ai-bookmark-manager/id6758905385',
  android: 'https://play.google.com/store/apps/details?id=com.marqly.android',
  producthunt: 'https://www.producthunt.com/products/marqly',
  x: 'https://x.com/getmarqly',
  linkedin: 'https://www.linkedin.com/company/marqly',
};

// The single named author of Marqly's editorial content. Bio facts are
// OWNER-SUPPLIED (master prompt §Phase 1.6, 2026-10-05) — never invent beyond
// this. Photo is not yet provided, so Person ships without an `image` rather
// than a placeholder that would misrepresent a real person. `sameAs` is empty
// on purpose: we have no VERIFIED personal profile URL for Amro — do not guess
// one. Add real, confirmed profile URLs here before relying on them.
export const AUTHOR = {
  name: 'Amro Shahbari',
  url: `${SITE}/authors/amro-shahbari`,
  jobTitle: 'Founder & Product Design Lead',
  worksFor: 'Marqly',
  sameAs: [] as string[],
};

export function person() {
  return {
    '@type': 'Person',
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.jobTitle,
    worksFor: { '@type': 'Organization', name: 'Marqly', url: SITE },
    ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {}),
  };
}

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marqly',
    legalName: 'Megamoon Ventures FZCO',
    url: SITE,
    logo: `${SITE}/favicon.png`,
    foundingDate: '2022',
    sameAs: [
      'https://twitter.com/getmarqly',
      STORE_URLS.x,
      'https://www.facebook.com/profile.php?id=100088234261663',
      STORE_URLS.linkedin,
      STORE_URLS.producthunt,
      STORE_URLS.ios,
      STORE_URLS.android,
      STORE_URLS.chrome,
      STORE_URLS.firefox,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@marqly.com',
      contactType: 'customer support',
    },
  };
}

export function webSite(lang = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Marqly',
    url: SITE,
    inLanguage: lang,
  };
}

export function softwareApplication() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Marqly',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web, iOS, Android, Chrome, Edge, Firefox, Safari',
    url: SITE,
    installUrl: CHROME_STORE_URL,
    description:
      'AI bookmark manager with semantic search — save articles, videos, and links, then find any of them by describing what you remember instead of the exact title.',
    featureList: [
      'One-click bookmark saving and automatic AI tagging',
      'Semantic search across bookmarks, highlights, and transcripts',
      'New Tab workspace with quick links, notes, to-dos, weather, and saved sessions',
      'Clipboard History in Chrome and Edge',
      'Save conversations from ChatGPT, Claude, and Gemini in Chrome, Edge, and Firefox',
      'Persistent webpage highlights in six colors with notes',
      'AI YouTube summaries, chat, and playback-synced transcripts',
      'Save all open tabs and restore browsing sessions',
      'Save webpages as PDF locally in the browser',
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '72',
      priceCurrency: 'USD',
      offerCount: 2,
    },
    // No aggregateRating. The previous value (4.8 / 150 reviews) was fabricated:
    // live store ratings are far lower (see docs/superpowers/specs/2026-08-02-
    // marqly-product-facts.md → "Social proof"), and Google does not grant review
    // stars for self-serving ratings a site gives its own product. Re-adding a
    // rating here risks a spammy-structured-data manual action on every page that
    // renders this builder. If ratings are ever cited, update the facts sheet first.
    author: {
      '@type': 'Organization',
      name: 'Marqly',
      url: SITE,
    },
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[], lang = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Publisher-authored, single-question FAQ page. */
export function qaPage(question: string, answerText: string, path: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answerText, url: `${SITE}${path}` },
    },
    ...(dateModified ? { dateModified } : {}),
  };
}

export function itemList(
  names: string[],
  path: string,
  itemUrls?: string[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: `${SITE}${path}`,
    itemListElement: names.map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(itemUrls?.[i] ? { item: `${SITE}${itemUrls[i]}` } : {}),
    })),
  };
}

export function freeWebApplication(name: string, description: string, path: string, lang = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE}${path}`,
    inLanguage: lang,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and a modern web browser',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'Marqly',
      url: SITE,
    },
  };
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export function howTo(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime = 'PT2M',
  lang = 'en',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: lang,
    totalTime,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url.startsWith('http') ? s.url : `${SITE}${s.url}` } : {}),
      ...(s.image ? { image: s.image } : {}),
    })),
  };
}
