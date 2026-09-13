/**
 * Raindrop Export Parser & Analyzer
 * 100% client-side parser for Netscape HTML and Raindrop CSV exports.
 */

export interface RaindropAnalysis {
  totalBookmarks: number;
  collectionsCount: number;
  tagsCount: number;
  domainBreakdown: { domain: string; count: number }[];
  dateRange: {
    earliest: string;
    latest: string;
  };
  estimatedDeadLinkPercentage: number;
  compatibilityStatus: string;
}

export function parseNetscapeHtml(htmlContent: string): RaindropAnalysis {
  if (!htmlContent || typeof htmlContent !== 'string') {
    throw new Error('Invalid input: HTML content must be a non-empty string');
  }

  const isNetscape =
    /<!DOCTYPE\s+NETSCAPE-Bookmark-file-1>/i.test(htmlContent) ||
    /<TITLE>.*Bookmarks.*<\/TITLE>/i.test(htmlContent);
  if (!isNetscape) {
    throw new Error('Not a valid Netscape bookmark file format');
  }

  const bookmarks: { title: string; url: string; domain: string }[] = [];
  const collections = new Set<string>();
  const tags = new Set<string>();
  const domainCounts: Record<string, number> = {};
  let earliestDate: Date | null = null;
  let latestDate: Date | null = null;

  // Track folder hierarchy
  const folderRegex = /<H3\b[^>]*>([\s\S]*?)<\/H3>/gi;
  let fMatch: RegExpExecArray | null;
  while ((fMatch = folderRegex.exec(htmlContent)) !== null) {
    const name = fMatch[1].replace(/<[^>]+>/g, '').trim();
    if (name) collections.add(name);
  }

  // Parse bookmarks: <DT><A HREF="..." ADD_DATE="..." TAGS="...">Title</A>
  const linkRegex = /<A\b([^>]*)>([\s\S]*?)<\/A>/gi;
  let lMatch: RegExpExecArray | null;
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
        const tagList = tagsMatch[1].split(',').map((t) => t.trim()).filter(Boolean);
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

  // Link rot calculation: Base 8% rot + age-weighted up to 25%
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
      latest: latestDate ? latestDate.toISOString().split('T')[0] : 'N/A',
    },
    estimatedDeadLinkPercentage,
    compatibilityStatus: '100% Compatible with Marqly Instant Import',
  };
}

export function parseRaindropCsv(csvContent: string): RaindropAnalysis {
  if (!csvContent || typeof csvContent !== 'string') {
    throw new Error('Invalid input: CSV content must be a non-empty string');
  }

  // RFC 4180 compliant tokenizer
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < csvContent.length; i++) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          currentField += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentField);
        currentField = '';
      } else if (char === '\r') {
        if (nextChar === '\n') i++;
        currentRow.push(currentField);
        currentField = '';
        if (currentRow.some((f) => f.trim() !== '')) rows.push(currentRow);
        currentRow = [];
      } else if (char === '\n') {
        currentRow.push(currentField);
        currentField = '';
        if (currentRow.some((f) => f.trim() !== '')) rows.push(currentRow);
        currentRow = [];
      } else {
        currentField += char;
      }
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some((f) => f.trim() !== '')) rows.push(currentRow);
  }

  if (rows.length === 0) {
    throw new Error('CSV is empty');
  }

  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const folderIdx = headers.indexOf('folder');
  const urlIdx = headers.indexOf('url');
  const tagsIdx = headers.indexOf('tags');
  const createdIdx = headers.indexOf('created');

  if (urlIdx === -1) {
    throw new Error('Malformed Raindrop CSV: Missing required "url" column');
  }

  const collections = new Set<string>();
  const tags = new Set<string>();
  const domainCounts: Record<string, number> = {};
  let earliestDate: Date | null = null;
  let latestDate: Date | null = null;
  let totalBookmarks = 0;

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const url = (row[urlIdx] || '').trim();
    if (!url || !/^https?:\/\//i.test(url)) continue;

    totalBookmarks++;

    // Folder
    if (folderIdx !== -1 && row[folderIdx]) {
      const f = row[folderIdx].trim();
      if (f) collections.add(f);
    }

    // Tags
    if (tagsIdx !== -1 && row[tagsIdx]) {
      const tagList = row[tagsIdx]
        .split(',')
        .map((t) => t.trim().replace(/^#/, ''))
        .filter(Boolean);
      for (const t of tagList) tags.add(t);
    }

    // Domain
    let domain = 'unknown';
    try {
      domain = new URL(url).hostname.replace(/^www\./, '');
    } catch {
      domain = url.split('/')[2] || 'other';
    }
    domainCounts[domain] = (domainCounts[domain] || 0) + 1;

    // Date
    if (createdIdx !== -1 && row[createdIdx]) {
      const d = new Date(row[createdIdx].trim());
      if (!isNaN(d.getTime())) {
        if (!earliestDate || d < earliestDate) earliestDate = d;
        if (!latestDate || d > latestDate) latestDate = d;
      }
    }
  }

  const domainBreakdown = Object.entries(domainCounts)
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  let estimatedDeadLinkPercentage = 0;
  if (totalBookmarks > 0) {
    const yearsOld = earliestDate ? (Date.now() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25) : 1;
    estimatedDeadLinkPercentage = Math.min(38, Math.max(5, Math.round(8 + yearsOld * 3.5)));
  }

  return {
    totalBookmarks,
    collectionsCount: collections.size,
    tagsCount: tags.size,
    domainBreakdown,
    dateRange: {
      earliest: earliestDate ? earliestDate.toISOString().split('T')[0] : 'N/A',
      latest: latestDate ? latestDate.toISOString().split('T')[0] : 'N/A',
    },
    estimatedDeadLinkPercentage,
    compatibilityStatus: '100% Compatible with Marqly Instant Import',
  };
}

export function parseRaindropExport(content: string, filename?: string): RaindropAnalysis {
  if (!content || typeof content !== 'string') {
    throw new Error('Invalid input: Export content must be a non-empty string');
  }

  const isHtml =
    (filename && /\.(html?)$/i.test(filename)) ||
    /<!DOCTYPE\s+NETSCAPE-Bookmark-file-1>/i.test(content) ||
    /<TITLE>.*Bookmarks.*<\/TITLE>/i.test(content) ||
    /<H3\b/i.test(content);

  if (isHtml) {
    return parseNetscapeHtml(content);
  }

  const isCsv =
    (filename && /\.csv$/i.test(filename)) ||
    content.split('\n')[0].toLowerCase().includes('url');

  if (isCsv) {
    return parseRaindropCsv(content);
  }

  try {
    return parseNetscapeHtml(content);
  } catch {
    return parseRaindropCsv(content);
  }
}
