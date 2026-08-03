/** Shared helpers for the on-demand API routes behind the free tools. */

const ALLOWED_ORIGINS = [
  'https://www.marqly.com',
  'https://marqly.com',
  'https://marqly-astro.trymarqly.workers.dev',
  'http://localhost:4321',
  'http://localhost:8787',
  'http://localhost:8788',
];

/** Cheap abuse gate: the tools are same-site UIs, so require a known Origin/Referer. */
export function originAllowed(request: Request): boolean {
  const origin = request.headers.get('origin') ?? '';
  if (origin) return ALLOWED_ORIGINS.includes(origin);
  const referer = request.headers.get('referer') ?? '';
  try {
    return ALLOWED_ORIGINS.includes(new URL(referer).origin);
  } catch {
    return false;
  }
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

const BLOCKED_HOST_SUFFIXES = ['.localhost', '.local', '.internal', '.home', '.lan'];

function isPrivateIpv4(hostname: string): boolean {
  const parts = hostname.split('.').map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) {
    return false;
  }
  const [a = 0, b = 0] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && (b === 0 || b === 168)) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  );
}

function isPublicHostname(rawHostname: string): boolean {
  const hostname = rawHostname.replace(/^\[|\]$/g, '').replace(/\.$/, '').toLowerCase();
  if (!hostname || hostname === 'localhost' || BLOCKED_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix))) {
    return false;
  }
  if (hostname.includes(':')) {
    const mapped = hostname.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/)?.[1];
    if (mapped) return !isPrivateIpv4(mapped);
    // Publicly routable IPv6 addresses live in 2000::/3. Blocking every other
    // literal keeps this free URL fetcher away from loopback/link-local ranges.
    return /^[23][0-9a-f]{0,3}:/.test(hostname);
  }
  if (isPrivateIpv4(hostname)) return false;
  return hostname.includes('.');
}

export function publicHttpUrl(input: string): URL | null {
  try {
    const url = new URL(input.trim());
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (url.username || url.password) return null;
    if (url.port && !['80', '443'].includes(url.port)) return null;
    if (!isPublicHostname(url.hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

export interface RedirectHop {
  url: string;
  status: number;
  location?: string;
}

interface PublicFetchResult {
  response: Response;
  chain: RedirectHop[];
  cleanup: () => void;
}

/**
 * Fetch an http(s) URL without ever following an unvalidated redirect.
 * This blocks obvious localhost/private-network SSRF targets, credentials,
 * custom ports, and redirect pivots before a request is made.
 */
export async function fetchPublicUrl(
  input: string,
  options: { method?: 'HEAD' | 'GET'; timeoutMs?: number; maxRedirects?: number; userAgent?: string } = {},
): Promise<PublicFetchResult> {
  let current = publicHttpUrl(input);
  if (!current) throw new Error('Enter a public http(s) URL on port 80 or 443.');

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 7000);
  const cleanup = () => clearTimeout(timer);
  const chain: RedirectHop[] = [];
  const maxRedirects = options.maxRedirects ?? 8;

  try {
    for (let index = 0; index <= maxRedirects; index++) {
      const response = await fetch(current, {
        method: options.method ?? 'GET',
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          accept: 'text/html,application/xhtml+xml,*/*;q=0.8',
          'user-agent': options.userAgent ?? 'MarqlyFreeTools/1.0 (+https://www.marqly.com/tools)',
        },
      });
      const locationHeader = response.headers.get('location');
      const isRedirect = response.status >= 300 && response.status < 400 && Boolean(locationHeader);
      const nextUrl = isRedirect ? new URL(locationHeader!, current).toString() : undefined;
      chain.push({ url: current.toString(), status: response.status, ...(nextUrl ? { location: nextUrl } : {}) });

      if (!isRedirect) return { response, chain, cleanup };
      if (index === maxRedirects) throw new Error(`Too many redirects (more than ${maxRedirects}).`);

      const validated = publicHttpUrl(nextUrl!);
      if (!validated) throw new Error('A redirect pointed to a blocked or non-public URL.');
      current = validated;
    }
    throw new Error('Redirect limit reached.');
  } catch (error) {
    cleanup();
    throw error;
  }
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
