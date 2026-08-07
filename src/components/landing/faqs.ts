/**
 * Home FAQ — ported VERBATIM from the previous homepage. The visible text
 * must stay identical to the FAQPage JSON-LD (Google requirement), and this
 * copy is SEO-locked. Do not edit casually.
 */
export interface HomeFaq {
  q: string;
  a: string;
  href?: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    q: 'Is Marqly free?',
    a: 'Yes. The free plan includes one-click saving, tags, search, and access on every device — no credit card required. Marqly Pro adds unlimited bookmarks, AI features like semantic search and YouTube chat, highlights, and smart sorting for $48/year (about $4/month billed annually) after a 7-day free trial.',
    href: '/faq/is-marqly-free',
  },
  {
    q: 'Which browsers does the Marqly extension support?',
    a: 'The Marqly extension runs on Chrome, Edge, Firefox, and Safari. Core bookmarking, highlights, YouTube tools, and tab saving work across supported browsers. New Tab is available in Chrome, Edge, and Firefox; Clipboard History and the side panel are currently available in Chrome and Edge.',
    href: '/extension',
  },
  {
    q: 'Does Marqly include a New Tab page?',
    a: 'Yes. Marqly Home replaces the New Tab page in Chrome, Edge, and Firefox with library search, quick links and folders, backgrounds, weather, notes, to-dos, desktop stickies, and saved browsing sessions. It is not currently available in Safari.',
    href: '/faq/what-is-marqly-home-new-tab',
  },
  {
    q: 'Does Marqly save clipboard history?',
    a: 'Yes, in Chrome and Edge. Marqly keeps text copied from webpages in Clipboard History, where you can search, filter, favorite, pin, and tag it. Pro members can sync clipboard items through their Marqly account.',
    href: '/faq/does-marqly-have-clipboard-history',
  },
  {
    q: 'Can Marqly save ChatGPT, Claude, and Gemini conversations?',
    a: 'Yes. In Chrome, Edge, and Firefox, Marqly can capture conversations from ChatGPT, Claude, and Gemini and keep them in a dedicated AI Chats workspace. AI chat capture is not currently available in Safari.',
    href: '/faq/can-i-save-chatgpt-claude-gemini-conversations',
  },
  {
    q: 'Can Marqly summarize YouTube videos?',
    a: 'Yes. Marqly adds an AI card right on the YouTube watch page with a streaming summary (TL;DR plus key sections), a chat tab that answers questions from the video’s transcript, and a playback-synced transcript you can copy in one click. Books mentioned in the video are surfaced automatically.',
  },
  {
    q: 'Can I highlight text on websites with Marqly?',
    a: 'Yes. Select text on any page and highlight it in one of 6 colors, with optional notes. Highlights are restored when you revisit the page, appear in the browser side panel, and sync to your Marqly library so they’re searchable alongside your bookmarks.',
  },
  {
    q: 'Can Marqly save a webpage as a PDF?',
    a: 'Yes. From the save dialog you can export any page as a clean PDF that matches the on-screen layout — lazy-loaded images included. It runs locally in your browser and the page is never uploaded anywhere.',
  },
  {
    q: 'How is Marqly different from browser bookmarks?',
    a: 'Browser bookmarks are a folder tree you have to file and remember. Marqly auto-tags every save with AI and lets you search by meaning — describe what the page was about and it surfaces, even if you forgot the title. It also captures highlights, transcripts, and PDFs, not just URLs.',
    href: '/faq/how-is-marqly-different-from-browser-bookmarks',
  },
  {
    q: 'Can I import my bookmarks from Pocket or Raindrop?',
    a: 'Yes. Marqly imports Pocket export files, Raindrop.io collections, and the standard bookmark HTML that Chrome, Edge, Firefox, and Safari export. Everything you import is auto-tagged by AI on the way in, so your whole backlog becomes searchable by meaning immediately.',
    href: '/faq/how-do-i-import-from-pocket',
  },
  {
    q: 'How do I get a YouTube video’s transcript?',
    a: 'Open any YouTube video with the Marqly extension installed and the AI card next to the player includes a Transcript tab — playback-synced, with one-click copy. Bookmarking the video from YouTube’s action row saves it with the transcript attached, so it stays searchable later.',
    href: '/faq/how-do-i-get-a-youtube-transcript',
  },
  {
    q: 'What is semantic search?',
    a: 'Semantic search finds saves by meaning instead of exact keywords. Type “that video about sourdough starters” and Marqly surfaces the right save even if those words never appear in the title — it searches across titles, content, highlights, and transcripts.',
    href: '/faq/what-is-semantic-search',
  },
  {
    q: 'Is Marqly a good Pocket replacement?',
    a: 'Yes. Pocket shut down in July 2025, and Marqly covers the same save-for-later core — then adds AI tagging, summaries, and semantic search that Pocket never had. It imports your Pocket export file directly, so switching takes minutes.',
    href: '/faq/is-marqly-a-pocket-replacement',
  },
  {
    q: 'Is there an iOS app?',
    a: 'Yes. The Marqly iOS app puts your whole library — saves, tags, highlights — on your iPhone and iPad, synced with the extension and web app. Download it from the App Store and sign in with the same account.',
    href: '/faq/is-there-an-ios-app',
  },
  {
    q: 'Does Marqly work on Android?',
    a: 'There’s no Android app yet, but the Marqly web app at app.marqly.com works in any Android browser, so your saves are always reachable. On desktop, the extension covers Chrome, Edge, Firefox, and Safari.',
    href: '/faq/is-there-an-android-app',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'From your account settings at app.marqly.com, any time — you keep Pro access until the end of the billing period, and your saves stay on the free plan afterwards. If anything goes wrong, email support@marqly.com.',
    href: '/faq/how-do-i-cancel-my-subscription',
  },
  {
    q: 'Can I share what I save?',
    a: 'Yes. Group links and highlights into boards, then share any board as a public page — viewers don’t need an account. Public boards also appear in Marqly’s Discover directory if you want them found.',
    href: '/faq/how-do-i-share-a-board-publicly',
  },
];
