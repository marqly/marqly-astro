import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { json, originAllowed, rateLimit } from '../../lib/api-utils';
import { APP_URL } from '../../components/landing/data';

export const prerender = false;

/**
 * Google One Tap → Marqly session handoff.
 *
 * One Tap runs on www.marqly.com, but the session lives on app.marqly.com — a
 * different origin, so this site can never set the app's cookie. Rather than
 * shipping a `.marqly.com` cookie (which would make this static marketing site
 * a session-theft surface), the credential is exchanged here, server-side, for
 * a short-lived single-use handoff token that only app.marqly.com can redeem.
 *
 * Running the exchange in the Worker rather than the browser means:
 *   - the API's internal secret never reaches the client,
 *   - no CORS entry for www.marqly.com is needed on the API, and
 *   - the browser only ever sees an app.marqly.com URL to navigate to.
 *
 * The Google credential itself is verified by the API against Google's JWKS —
 * this route deliberately does not parse or trust it.
 */

const DEFAULT_API_BASE = 'https://marqly-prod-556080199051.us-central1.run.app';
const EXCHANGE_TIMEOUT_MS = 10_000;

/**
 * The handoff token travels to app.marqly.com in a cookie on the shared parent
 * domain, NOT in the redirect URL. That choice does three jobs at once:
 *
 *  1. **Blocks login CSRF.** Only marqly.com can set a `.marqly.com` cookie, so
 *     an attacker who lifts their own One Tap credential cannot force a
 *     victim's browser into the attacker's account by sending them a link — the
 *     victim's browser simply has no handoff cookie to redeem.
 *  2. **No leakage.** A token in a query string ends up in browser history, the
 *     Referer header, GA4's page_location, and Sentry breadcrumbs. A cookie
 *     ends up in none of them.
 *  3. **Effectively single-use.** The landing page deletes the cookie the moment
 *     it reads it, so the same handoff cannot be redeemed twice.
 *
 * www and app are the same site (registrable domain marqly.com), so SameSite=Lax
 * still sends it on the top-level navigation between them.
 */
const HANDOFF_COOKIE = 'marqly_onetap';
const HANDOFF_COOKIE_MAX_AGE = 180;

/** Only these keys are forwarded; everything else in `attribution` is dropped. */
const ATTRIBUTION_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'first_referrer',
  'landing_page',
] as const;

const MAX_BODY_BYTES = 16_384;

/** Same shape the app's own signup path records, so One Tap signups aren't attribution blind spots. */
interface Attribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  first_referrer?: string;
  landing_page?: string;
}

interface OneTapBody {
  credential?: string;
  /** Raw nonce handed to google.accounts.id.initialize(); echoed in the token. */
  nonce?: string;
  timezone?: string;
  locale?: string;
  attribution?: Attribution;
}

/** Allowlist + truncate. Never relay a caller-shaped object onward wholesale. */
function pickAttribution(input: unknown): Record<string, string> | undefined {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return undefined;
  const source = input as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = source[key];
    if (typeof value === 'string' && value.trim()) out[key] = value.trim().slice(0, 512);
  }
  return Object.keys(out).length ? out : undefined;
}

export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const limited = await rateLimit(request, env, 'API_RATE_LIMITER', 'onetap');
  if (limited) return limited;

  // Cap the body before parsing: everything here is small and fixed-shape, and
  // this request is relayed onward carrying the shared secret.
  const declaredLength = Number(request.headers.get('content-length') ?? '0');
  if (declaredLength > MAX_BODY_BYTES) return json({ error: 'Payload too large.' }, 413);

  let body: OneTapBody;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return json({ error: 'Payload too large.' }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Malformed request.' }, 400);
  }

  const credential = typeof body.credential === 'string' ? body.credential.trim() : '';
  // A Google ID token is a three-part JWT; anything else is not worth a round trip.
  if (!credential || credential.split('.').length !== 3 || credential.length > 8192) {
    return json({ error: 'Missing or malformed Google credential.' }, 400);
  }

  const secret = env?.ONETAP_EXCHANGE_SECRET;
  const apiBase = (env?.MARQLY_API_URL || DEFAULT_API_BASE).replace(/\/$/, '');

  // Unconfigured is a deploy problem, not a user problem: fail soft so the page
  // just falls back to the normal "Sign in" link instead of showing an error.
  if (!secret) {
    console.error('[onetap] ONETAP_EXCHANGE_SECRET is not set on this Worker; One Tap cannot complete.');
    return json({ error: 'Sign-in is temporarily unavailable.' }, 503);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), EXCHANGE_TIMEOUT_MS);

  try {
    const res = await fetch(`${apiBase}/auth/onetap/exchange`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-onetap-secret': secret,
      },
      body: JSON.stringify({
        idToken: credential,
        nonce: typeof body.nonce === 'string' ? body.nonce.slice(0, 128) : undefined,
        timezone: typeof body.timezone === 'string' ? body.timezone.slice(0, 64) : undefined,
        locale: typeof body.locale === 'string' ? body.locale.slice(0, 32) : undefined,
        attribution: pickAttribution(body.attribution),
      }),
      signal: controller.signal,
    });

    const data = (await res.json().catch(() => ({}))) as { handoffToken?: string; message?: string };

    if (!res.ok || !data.handoffToken) {
      console.error('[onetap] exchange failed', res.status, data.message ?? '');
      // Don't relay the API's message — it distinguishes "unverified email" from
      // "bad token", which is more than an unauthenticated caller should learn.
      return json({ error: 'Could not complete Google sign-in.' }, 502);
    }

    // The token rides in a parent-domain cookie, not the URL — see HANDOFF_COOKIE.
    // Host-only would not reach app.marqly.com, hence the explicit Domain.
    const response = json({ redirectUrl: `${APP_URL}/auth/handoff` });
    response.headers.append(
      'set-cookie',
      // Encoded to match the reader's decodeURIComponent. A JWT is base64url so
      // this is a no-op today, but it keeps the pair symmetric.
      `${HANDOFF_COOKIE}=${encodeURIComponent(data.handoffToken)}; Domain=.marqly.com; Path=/; Max-Age=${HANDOFF_COOKIE_MAX_AGE}; Secure; SameSite=Lax`
    );
    return response;
  } catch (error) {
    const aborted = error instanceof Error && error.name === 'AbortError';
    console.error('[onetap] exchange error', aborted ? 'timeout' : error);
    return json({ error: 'Could not complete Google sign-in.' }, 504);
  } finally {
    clearTimeout(timer);
  }
};
