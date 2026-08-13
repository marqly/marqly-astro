import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { fetchPublicUrl, json, originAllowed, publicHttpUrl, rateLimit } from '../../lib/api-utils';

export const prerender = false;

const MAX_URLS = 25;
const TIMEOUT_MS = 6000;

/** Free-tool endpoint: checks a small batch of URLs and reports their status. */
export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);
  const limited = await rateLimit(request, env, 'API_RATE_LIMITER', 'check-links');
  if (limited) return limited;

  let body: { urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"urls": ["https://…"]}' }, 400);
  }

  const urls = (body.urls ?? [])
    .map((u) => u.trim())
    .filter((u) => Boolean(publicHttpUrl(u)))
    .slice(0, MAX_URLS);
  if (!urls.length) return json({ error: 'Provide up to 25 http(s) URLs.' }, 400);

  const check = async (url: string) => {
    let cleanup = () => {};
    try {
      let result = await fetchPublicUrl(url, {
        method: 'HEAD',
        timeoutMs: TIMEOUT_MS,
        userAgent: 'MarqlyLinkChecker/1.0 (+https://www.marqly.com/tools/dead-link-checker)',
      });
      cleanup = result.cleanup;
      // Some servers reject HEAD — retry those with GET.
      if (result.response.status === 405 || result.response.status === 501) {
        cleanup();
        result = await fetchPublicUrl(url, {
          method: 'GET',
          timeoutMs: TIMEOUT_MS,
          userAgent: 'MarqlyLinkChecker/1.0 (+https://www.marqly.com/tools/dead-link-checker)',
        });
        cleanup = result.cleanup;
      }
      const final = result.chain.at(-1)!;
      return {
        url,
        status: result.response.status,
        ok: result.response.ok,
        finalUrl: final.url !== url ? final.url : undefined,
      };
    } catch {
      return { url, status: 0, ok: false, error: 'unreachable or timed out' };
    } finally {
      cleanup();
    }
  };

  const results = await Promise.all(urls.map(check));
  return json({ results, checked: results.length, dropped: (body.urls?.length ?? 0) - urls.length });
};
