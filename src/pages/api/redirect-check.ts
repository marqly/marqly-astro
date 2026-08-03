import type { APIRoute } from 'astro';
import { fetchPublicUrl, json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

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
    let result = await fetchPublicUrl(body.url, {
      method: 'HEAD',
      timeoutMs: 8000,
      maxRedirects: 10,
      userAgent: 'MarqlyRedirectChecker/1.0 (+https://www.marqly.com/tools/redirect-checker)',
    });
    cleanup = result.cleanup;
    if (result.response.status === 405 || result.response.status === 501) {
      cleanup();
      result = await fetchPublicUrl(body.url, {
        method: 'GET',
        timeoutMs: 8000,
        maxRedirects: 10,
        userAgent: 'MarqlyRedirectChecker/1.0 (+https://www.marqly.com/tools/redirect-checker)',
      });
      cleanup = result.cleanup;
    }
    return json({
      chain: result.chain,
      finalUrl: result.chain.at(-1)?.url,
      status: result.response.status,
      ok: result.response.ok,
      redirects: Math.max(0, result.chain.length - 1),
    });
  } catch (error) {
    const message = error instanceof Error && error.name !== 'AbortError' ? error.message : 'The request timed out.';
    return json({ error: message }, 400);
  } finally {
    cleanup();
  }
};
