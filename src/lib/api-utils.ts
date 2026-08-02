/** Shared helpers for the on-demand API routes behind the free tools. */

const ALLOWED_ORIGINS = [
  'https://www.marqly.com',
  'https://marqly.com',
  'https://marqly-astro.trymarqly.workers.dev',
  'http://localhost:4321',
  'http://localhost:8787',
];

/** Cheap abuse gate: the tools are same-site UIs, so require a known Origin/Referer. */
export function originAllowed(request: Request): boolean {
  const origin = request.headers.get('origin') ?? '';
  if (origin) return ALLOWED_ORIGINS.includes(origin);
  const referer = request.headers.get('referer') ?? '';
  return ALLOWED_ORIGINS.some((o) => referer.startsWith(o));
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const u = new URL(trimmed);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1, 12) || null;
    if (u.hostname.endsWith('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      const m = u.pathname.match(/^\/(shorts|embed|live)\/([\w-]{11})/);
      if (m) return m[2];
    }
  } catch {
    return null;
  }
  return null;
}
