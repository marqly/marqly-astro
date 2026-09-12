import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { json, originAllowed, rateLimit } from '../../lib/api-utils';

export const prerender = false;

/**
 * Entry-page touch beacon → Marqly API (`POST /attribution/touch`).
 *
 * AttributionCapture.astro posts here on every ENTRY page view (external referrer or a
 * campaign/click parameter). Proxying through the Worker means the browser only ever talks
 * to its own origin — which ad blockers leave alone, unlike any analytics host — and the API
 * needs no CORS entry for www.marqly.com (same reasoning as /api/onetap). Nothing here is
 * trusted: the API re-validates every field and the row is attribution, not identity.
 *
 * Always answers 204. A page must never see an error from measurement.
 */

const DEFAULT_API_BASE = 'https://marqly-prod-556080199051.us-central1.run.app';
const FORWARD_TIMEOUT_MS = 3_000;
const MAX_BODY_BYTES = 4_096;

/** Mirrors normalizeTouch() in the API; anything else in the body is dropped here. */
const TOUCH_KEYS = [
  'visitor_id',
  'host',
  'landing_page',
  'referrer',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'twclid',
  'msclkid',
  'ttclid',
  'li_fat_id',
] as const;

const NO_CONTENT = () => new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });

export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const limited = await rateLimit(request, env, 'API_RATE_LIMITER', 'touch');
  if (limited) return limited;

  const declaredLength = Number(request.headers.get('content-length') ?? '0');
  if (declaredLength > MAX_BODY_BYTES) return NO_CONTENT();

  let source: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return NO_CONTENT();
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return NO_CONTENT();
    source = parsed as Record<string, unknown>;
  } catch {
    return NO_CONTENT();
  }

  const body: Record<string, string> = {};
  for (const key of TOUCH_KEYS) {
    const value = source[key];
    if (typeof value === 'string' && value.trim()) body[key] = value.trim().slice(0, 512);
  }
  if (!body.visitor_id || !body.host || !body.landing_page) return NO_CONTENT();

  const apiBase = ((env as { MARQLY_API_URL?: string } | undefined)?.MARQLY_API_URL || DEFAULT_API_BASE).replace(/\/$/, '');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);
  try {
    await fetch(`${apiBase}/attribution/touch`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (error) {
    console.warn('[touch] forward failed', error instanceof Error ? error.message : error);
  } finally {
    clearTimeout(timer);
  }
  return NO_CONTENT();
};
