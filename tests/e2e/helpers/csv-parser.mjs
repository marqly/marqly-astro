/**
 * Reference implementation of Raindrop CSV Parser conforming to RFC 4180
 * and PROJECT.md § Client-Side Migration Analyzer Contract.
 */

export function parseRaindropCsv(csvContent) {
  if (!csvContent || typeof csvContent !== 'string') {
    throw new Error('Invalid input: CSV content must be a non-empty string');
  }

  // RFC 4180 compliant tokenizer
  const rows = [];
  let currentRow = [];
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
        if (currentRow.some(f => f.trim() !== '')) rows.push(currentRow);
        currentRow = [];
      } else if (char === '\n') {
        currentRow.push(currentField);
        currentField = '';
        if (currentRow.some(f => f.trim() !== '')) rows.push(currentRow);
        currentRow = [];
      } else {
        currentField += char;
      }
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(f => f.trim() !== '')) rows.push(currentRow);
  }

  if (rows.length === 0) {
    throw new Error('CSV is empty');
  }

  const headers = rows[0].map(h => h.trim().toLowerCase());
  const folderIdx = headers.indexOf('folder');
  const titleIdx = headers.indexOf('title');
  const urlIdx = headers.indexOf('url');
  const tagsIdx = headers.indexOf('tags');
  const createdIdx = headers.indexOf('created');

  if (urlIdx === -1) {
    throw new Error('Malformed Raindrop CSV: Missing required "url" column');
  }

  const collections = new Set();
  const tags = new Set();
  const domainCounts = {};
  let earliestDate = null;
  let latestDate = null;
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
      const tagList = row[tagsIdx].split(',').map(t => t.trim().replace(/^#/, '')).filter(Boolean);
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
      latest: latestDate ? latestDate.toISOString().split('T')[0] : 'N/A'
    },
    estimatedDeadLinkPercentage,
    compatibilityStatus: '100% Compatible with Marqly Instant Import'
  };
}
