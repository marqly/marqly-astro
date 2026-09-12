/**
 * High-speed, robust static HTML parser for opaque-box E2E testing of dist/client.
 */

export function parseHtml(htmlContent) {
  const cleanDom = htmlContent
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const titleMatch = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(htmlContent);
  const title = titleMatch ? titleMatch[1].trim() : null;

  function getAttr(tag, name) {
    const m = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i').exec(tag);
    if (!m) return null;
    return m[2] !== undefined ? m[2] : m[3];
  }

  // Canonical
  const canonicalMatch = /<link\b[^>]*?\brel=["']canonical["'][^>]*?>/i.exec(htmlContent) ||
                         /<link\b[^>]*?\bhref=["'][^"']+["'][^>]*?\brel=["']canonical["'][^>]*?>/i.exec(htmlContent);
  const canonical = canonicalMatch ? getAttr(canonicalMatch[0], 'href') : null;

  // Meta description
  const metaDescMatch = /<meta\b[^>]*?\bname=["']description["'][^>]*?>/i.exec(htmlContent) ||
                        /<meta\b[^>]*?\bcontent=["'][^"']*["'][^>]*?\bname=["']description["'][^>]*?>/i.exec(htmlContent);
  const metaDescription = metaDescMatch ? getAttr(metaDescMatch[0], 'content') : null;

  // Hreflang alternates
  const alternates = [];
  const altRegex = /<link\b[^>]*?\brel=["']alternate["'][^>]*?>/gi;
  let altTag;
  while ((altTag = altRegex.exec(htmlContent)) !== null) {
    const hreflang = getAttr(altTag[0], 'hreflang');
    const href = getAttr(altTag[0], 'href');
    if (hreflang && href) {
      alternates.push({ hreflang, href });
    }
  }

  // Open Graph
  const og = {};
  const metaRegex = /<meta\b[^>]*?>/gi;
  let mTag;
  while ((mTag = metaRegex.exec(htmlContent)) !== null) {
    const prop = getAttr(mTag[0], 'property') || getAttr(mTag[0], 'name');
    const content = getAttr(mTag[0], 'content');
    if (prop && prop.startsWith('og:') && content) {
      og[prop.slice(3)] = content;
    }
  }

  // Headings
  const h1Matches = [...htmlContent.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2Matches = [...htmlContent.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3Matches = [...htmlContent.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // JSON-LD scripts
  const jsonLd = [];
  const jsonLdRegex = /<script\b[^>]*?type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  while ((jsonMatch = jsonLdRegex.exec(htmlContent)) !== null) {
    try {
      jsonLd.push(JSON.parse(jsonMatch[1].trim()));
    } catch {
      jsonLd.push({ parseError: true, raw: jsonMatch[1].trim() });
    }
  }

  // Anchor links
  const links = [];
  const aRegex = /<a\b[^>]*?>/gi;
  let aTag;
  while ((aTag = aRegex.exec(htmlContent)) !== null) {
    const href = getAttr(aTag[0], 'href');
    if (href) {
      links.push(href);
    }
  }

  // Plain text (excluding tags)
  const text = cleanDom.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  return {
    title,
    canonical,
    metaDescription,
    alternates,
    og,
    h1: h1Matches,
    h2: h2Matches,
    h3: h3Matches,
    jsonLd,
    links,
    text,
    raw: htmlContent
  };
}
