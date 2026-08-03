/**
 * JSON-LD builders. Pages pass the results into the layout's `jsonLd` prop so
 * structured data always ships in the head. Keep visible content and schema
 * text identical (Google requirement).
 */

const SITE = 'https://www.marqly.com';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc';

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marqly',
    url: SITE,
    logo: `${SITE}/favicon.png`,
    sameAs: [
      'https://twitter.com/getmarqly',
      'https://www.linkedin.com/company/marqly',
      'https://www.producthunt.com/products/marqly',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@marqly.com',
      contactType: 'customer support',
    },
  };
}

export function webSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Marqly',
    url: SITE,
  };
}

export function softwareApplication() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Marqly',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web, iOS, Chrome, Edge, Firefox, Safari',
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
      highPrice: '48',
      priceCurrency: 'USD',
      offerCount: 2,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      ratingCount: 32,
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

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** One question per page — the standalone /faq/<slug> pattern. */
export function qaPage(question: string, answerText: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      answerCount: 1,
      acceptedAnswer: { '@type': 'Answer', text: answerText, url: `${SITE}${path}` },
    },
  };
}

export function itemList(names: string[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: `${SITE}${path}`,
    itemListElement: names.map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
    })),
  };
}

export function freeWebApplication(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE}${path}`,
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
