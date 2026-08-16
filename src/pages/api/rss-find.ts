import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { fetchPublicUrl, json, originAllowed, publicHttpUrl, rateLimit } from '../../lib/api-utils';

export const prerender = false;

const UA = 'MarqlyFeedFinder/1.0 (+https://www.marqly.com/tools/rss-feed-finder)';
const MAX_HTML_BYTES = 512_000;

/** Common feed paths to probe when the HTML declares none. */
const GUESSES = ['/feed', '/rss', '/rss.xml', '/feed.xml', '/atom.xml', '/index.xml', '/feed/'];

interface Found {
  url: string;
  title: string | null;
  type: string | null;
  source: 'declared' | 'guessed';
}

function absolutize(href: string, base: URL): string | null {
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

/** Pull <link rel="alternate" type="application/rss+xml"> style declarations. */
function declaredFeeds(html: string, base: URL): Found[] {
  const out: Found[] = [];
  const seen = new Set<string>();
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    if (!/rel\s*=\s*["']?[^"'>]*alternate/i.test(tag)) continue;
    const type = tag.match(/type\s*=\s*["']([^"']+)["']/i)?.[1] ?? null;
    if (!type || !/(rss|atom|feed)\+?xml/i.test(type)) continue;
    const href = tag.match(/href\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!href) continue;
    const abs = absolutize(href, base);
    if (!abs || seen.has(abs)) continue;
    seen.add(abs);
    out.push({
      url: abs,
      title: tag.match(/title\s*=\s*["']([^"']*)["']/i)?.[1] ?? null,
      type,
      source: 'declared',
    });
  }
  return out;
}

function looksLikeFeed(body: string): boolean {
  const head = body.slice(0, 2000).toLowerCase();
  return head.includes('<rss') || head.includes('<feed') || head.includes('<rdf:rdf');
}

function feedTitle(body: string): string | null {
  const m = body.match(/<title[^>]*>([\s\S]{0,200}?)<\/title>/i);
  if (!m) return null;
  return m[1]
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, '')
    .trim() || null;
}

/**
 * Free-tool endpoint: finds the RSS/Atom feeds for a site. Reads the page's
 * declared <link rel="alternate"> feeds, then probes a short list of common
 * paths when nothing is declared. Every fetch goes through fetchPublicUrl,
 * which blocks private/internal hosts (SSRF guard).
 */
export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);
  const limited = await rateLimit(request, env, 'API_RATE_LIMITER', 'rss-find');
  if (limited) return limited;

  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"url": "https://…"}' }, 400);
  }
  const raw = (body.url ?? '').trim();
  if (!raw || raw.length > 2048) return json({ error: 'Enter one public site URL.' }, 400);
  const parsed = publicHttpUrl(raw);
  if (!parsed) return json({ error: 'That does not look like a public http(s) URL.' }, 400);

  let cleanup = () => {};
  try {
    const page = await fetchPublicUrl(parsed.href, {
      method: 'GET',
      timeoutMs: 8000,
      maxRedirects: 5,
      userAgent: UA,
    });
    cleanup = page.cleanup;
    if (!page.response.ok) {
      return json({ error: `The site responded ${page.response.status}.` }, 502);
    }

    const finalUrl = new URL(page.chain.at(-1)?.url ?? parsed.href);
    const contentType = page.response.headers.get('content-type') ?? '';
    const text = (await page.response.text()).slice(0, MAX_HTML_BYTES);
    cleanup();

    // The URL itself is already a feed.
    if (/xml/i.test(contentType) && looksLikeFeed(text)) {
      return json({
        pageUrl: finalUrl.href,
        feeds: [{ url: finalUrl.href, title: feedTitle(text), type: contentType, source: 'declared' }],
      });
    }

    const declared = declaredFeeds(text, finalUrl);
    if (declared.length) return json({ pageUrl: finalUrl.href, feeds: declared });

    // Nothing declared — probe the usual suspects on the same origin.
    const found: Found[] = [];
    for (const path of GUESSES) {
      if (found.length >= 3) break;
      const candidate = new URL(path, finalUrl.origin).href;
      try {
        const probe = await fetchPublicUrl(candidate, {
          method: 'GET',
          timeoutMs: 5000,
          maxRedirects: 3,
          userAgent: UA,
        });
        const probeText = probe.response.ok ? (await probe.response.text()).slice(0, 4000) : '';
        probe.cleanup();
        if (probe.response.ok && looksLikeFeed(probeText)) {
          found.push({
            url: probe.chain.at(-1)?.url ?? candidate,
            title: feedTitle(probeText),
            type: probe.response.headers.get('content-type'),
            source: 'guessed',
          });
        }
      } catch {
        // A failed guess is normal — keep probing.
      }
    }

    return json({ pageUrl: finalUrl.href, feeds: found });
  } catch (err) {
    console.error('rss-find failed:', err instanceof Error ? err.message : err);
    return json({ error: 'Could not read that site. Check the URL and try again.' }, 502);
  } finally {
    cleanup();
  }
};
