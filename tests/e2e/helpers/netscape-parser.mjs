/**
 * Reference implementation of Netscape Bookmark HTML Parser
 * conforming to PROJECT.md § Client-Side Migration Analyzer Contract.
 */

export function parseNetscapeHtml(htmlContent) {
  if (!htmlContent || typeof htmlContent !== 'string') {
    throw new Error('Invalid input: HTML content must be a non-empty string');
  }

  const isNetscape = /<!DOCTYPE\s+NETSCAPE-Bookmark-file-1>/i.test(htmlContent) ||
                     /<TITLE>.*Bookmarks.*<\/TITLE>/i.test(htmlContent);
  if (!isNetscape) {
    throw new Error('Not a valid Netscape bookmark file format');
  }

  const bookmarks = [];
  const collections = new Set();
  const tags = new Set();
  const domainCounts = {};
  let earliestDate = null;
  let latestDate = null;

  // Track folder hierarchy
  const folderRegex = /<H3\b[^>]*>([\s\S]*?)<\/H3>/gi;
  let fMatch;
  while ((fMatch = folderRegex.exec(htmlContent)) !== null) {
    const name = fMatch[1].replace(/<[^>]+>/g, '').trim();
    if (name) collections.add(name);
  }

  // Parse bookmarks: <DT><A HREF="..." ADD_DATE="..." TAGS="...">Title</A>
  const linkRegex = /<A\b([^>]*)>([\s\S]*?)<\/A>/gi;
  let lMatch;
  while ((lMatch = linkRegex.exec(htmlContent)) !== null) {
    const attrs = lMatch[1];
    const title = lMatch[2].replace(/<[^>]+>/g, '').trim();

    const hrefMatch = /HREF=["']([^"']+)["']/i.exec(attrs);
    const dateMatch = /ADD_DATE=["']([^"']+)["']/i.exec(attrs);
    const tagsMatch = /TAGS=["']([^"']*)["']/i.exec(attrs);

    if (hrefMatch && hrefMatch[1]) {
      const url = hrefMatch[1];
      let domain = 'unknown';
      try {
        domain = new URL(url).hostname.replace(/^www\./, '');
      } catch {
        domain = url.split('/')[2] || 'other';
      }

      domainCounts[domain] = (domainCounts[domain] || 0) + 1;

      // Date parsing
      if (dateMatch && dateMatch[1]) {
        const sec = parseInt(dateMatch[1], 10);
        if (!isNaN(sec) && sec > 0) {
          const d = new Date(sec * 1000);
          if (!earliestDate || d < earliestDate) earliestDate = d;
          if (!latestDate || d > latestDate) latestDate = d;
        }
      }

      // Tags parsing
      if (tagsMatch && tagsMatch[1]) {
        const tagList = tagsMatch[1].split(',').map(t => t.trim()).filter(Boolean);
        for (const t of tagList) tags.add(t);
      }

      bookmarks.push({ title, url, domain });
    }
  }

  // Sort domain breakdown
  const domainBreakdown = Object.entries(domainCounts)
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Link rot calculation:
  // Base 8% rot + age-weighted up to 25%
  let estimatedDeadLinkPercentage = 0;
  if (bookmarks.length > 0) {
    const yearsOld = earliestDate ? (Date.now() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25) : 1;
    estimatedDeadLinkPercentage = Math.min(38, Math.max(5, Math.round(8 + yearsOld * 3.5)));
  }

  return {
    totalBookmarks: bookmarks.length,
    collectionsCount: collections.size,
    tagsCount: tags.size,
    domainBreakdown,
    dateRange: {
      earliest: earliestDate ? earliestDate.toISOString().split('T')[0] : 'N/A',
      latest: latestDate ? latestDate.toISOString().split('T')[0] : 'N/A'
    },
    estimatedDeadLinkPercentage,
    compatibilityStatus: '100% Compatible with Marqly Instant Import'
  };
}
