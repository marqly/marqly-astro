import type { APIRoute } from 'astro';
import { json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

const MAX_URLS = 25;
const TIMEOUT_MS = 6000;

/** Free-tool endpoint: checks a small batch of URLs and reports their status. */
export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  let body: { urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"urls": ["https://…"]}' }, 400);
  }

  const urls = (body.urls ?? [])
    .map((u) => u.trim())
    .filter((u) => /^https?:\/\//i.test(u))
    .slice(0, MAX_URLS);
  if (!urls.length) return json({ error: 'Provide up to 25 http(s) URLs.' }, 400);

  const check = async (url: string) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      let res = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'MarqlyLinkChecker/1.0 (+https://www.marqly.com/tools/dead-link-checker)' },
      });
      // Some servers reject HEAD — retry those with GET.
      if (res.status === 405 || res.status === 501) {
        res = await fetch(url, {
          method: 'GET',
          redirect: 'follow',
          signal: controller.signal,
          headers: { 'user-agent': 'MarqlyLinkChecker/1.0 (+https://www.marqly.com/tools/dead-link-checker)' },
        });
      }
      return { url, status: res.status, ok: res.ok, finalUrl: res.url !== url ? res.url : undefined };
    } catch {
      return { url, status: 0, ok: false, error: 'unreachable or timed out' };
    } finally {
      clearTimeout(timer);
    }
  };

  const results = await Promise.all(urls.map(check));
  return json({ results, checked: results.length, dropped: (body.urls?.length ?? 0) - urls.length });
};
