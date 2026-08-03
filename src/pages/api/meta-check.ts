import type { APIRoute } from 'astro';
import { fetchPublicUrl, json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

const MAX_HTML_BYTES = 600_000;

function decodeEntities(value: string): string {
  const named: Record<string, string> = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const hex = entity[1]?.toLowerCase() === 'x';
      const code = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return named[entity.toLowerCase()] ?? match;
  });
}

function clean(value?: string): string | undefined {
  if (!value) return undefined;
  return decodeEntities(value.replace(/\s+/g, ' ').trim()).slice(0, 1000) || undefined;
}

function attrs(tag: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)) {
    result[match[1]!.toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  }
  return result;
}

async function readLimitedHtml(response: Response): Promise<string> {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let html = '';
  while (bytes < MAX_HTML_BYTES) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    html += decoder.decode(value, { stream: true });
    if (bytes >= MAX_HTML_BYTES || /<\/head\s*>/i.test(html)) {
      await reader.cancel();
      break;
    }
  }
  return html + decoder.decode();
}

export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"url": "https://…"}' }, 400);
  }
  if (!body.url || body.url.length > 2048) return json({ error: 'Enter one public URL.' }, 400);

  let cleanup = () => {};
  try {
    const result = await fetchPublicUrl(body.url, {
      method: 'GET',
      timeoutMs: 9000,
      maxRedirects: 8,
      userAgent: 'MarqlyMetaChecker/1.0 (+https://www.marqly.com/tools/open-graph-checker)',
    });
    cleanup = result.cleanup;
    const contentType = result.response.headers.get('content-type') ?? '';
    if (!/html|xhtml/i.test(contentType)) return json({ error: `The URL returned ${contentType || 'a non-HTML file'}.` }, 400);

    const html = await readLimitedHtml(result.response);
    const title = clean(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
    const meta: Record<string, string> = {};
    for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
      const a = attrs(tag);
      const key = (a.property || a.name || a['http-equiv'] || '').toLowerCase();
      if (key && a.content && !(key in meta)) meta[key] = clean(a.content) ?? '';
    }
    let canonical: string | undefined;
    for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
      const a = attrs(tag);
      if (a.rel?.toLowerCase().split(/\s+/).includes('canonical') && a.href) {
        try {
          canonical = new URL(a.href, result.chain.at(-1)?.url ?? body.url).toString();
        } catch {
          canonical = clean(a.href);
        }
        break;
      }
    }

    return json({
      requestedUrl: body.url,
      finalUrl: result.chain.at(-1)?.url,
      status: result.response.status,
      redirects: Math.max(0, result.chain.length - 1),
      title,
      description: meta.description,
      canonical,
      robots: meta.robots,
      openGraph: {
        title: meta['og:title'],
        description: meta['og:description'],
        image: meta['og:image'],
        url: meta['og:url'],
        type: meta['og:type'],
        siteName: meta['og:site_name'],
      },
      twitter: {
        card: meta['twitter:card'],
        title: meta['twitter:title'],
        description: meta['twitter:description'],
        image: meta['twitter:image'],
      },
    });
  } catch (error) {
    const message = error instanceof Error && error.name !== 'AbortError' ? error.message : 'The request timed out.';
    return json({ error: message }, 400);
  } finally {
    cleanup();
  }
};
