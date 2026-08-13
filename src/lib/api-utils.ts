/** Shared helpers for the on-demand API routes behind the free tools. */

const ALLOWED_ORIGINS = [
  'https://www.marqly.com',
  'https://marqly.com',
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

export function json(data: unknown, status = 200, extraHeaders?: HeadersInit): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...Object.fromEntries(new Headers(extraHeaders)),
    },
  });
}

interface RateLimitBinding {
  limit(input: { key: string }): Promise<{ success: boolean }>;
}

interface RateLimitEnv {
  API_RATE_LIMITER?: RateLimitBinding;
  AI_RATE_LIMITER?: RateLimitBinding;
}

/**
 * Protect anonymous, server-side tools from scripted cost and fan-out abuse.
 * Cloudflare's counters stay at the edge; no visitor identifier is persisted
 * by the application. Development remains usable when the binding is absent.
 */
export async function rateLimit(
  request: Request,
  env: RateLimitEnv | undefined,
  bindingName: 'API_RATE_LIMITER' | 'AI_RATE_LIMITER',
  scope: string,
): Promise<Response | undefined> {
  const binding =
    bindingName === 'API_RATE_LIMITER' ? env?.API_RATE_LIMITER : env?.AI_RATE_LIMITER;
  if (!binding?.limit) return undefined;

  const actor = request.headers.get('cf-connecting-ip') || 'unknown';
  const { success } = await binding.limit({ key: `${scope}:${actor}` });
  if (success) return undefined;

  return json(
    { error: 'Too many requests. Please wait a minute and try again.' },
    429,
    { 'retry-after': '60' },
  );
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
  if (hostname.includes(':')) return !isPrivateIpv6(hostname);
  if (isPrivateIpv4(hostname)) return false;
  return hostname.includes('.');
}

/** Expand an IPv6 literal to its 8 hextets, or null if it isn't one. */
function parseIpv6(raw: string): number[] | null {
  let text = raw.replace(/^\[|\]$/g, '').toLowerCase().replace(/%.*$/, '');
  if (!text.includes(':')) return null;

  // A trailing dotted quad (::ffff:1.2.3.4, 64:ff9b::1.2.3.4) is the low 32 bits.
  let tail: number[] = [];
  const dotted = text.match(/:(\d{1,3}(?:\.\d{1,3}){3})$/);
  if (dotted) {
    const octets = dotted[1].split('.').map(Number);
    if (octets.some((o) => !Number.isInteger(o) || o < 0 || o > 255)) return null;
    tail = [(octets[0]! << 8) | octets[1]!, (octets[2]! << 8) | octets[3]!];
    text = text.slice(0, dotted.index! + 1).replace(/:$/, '');
    if (!text) text = '::';
  }

  const halves = text.split('::');
  if (halves.length > 2) return null;
  const toHextet = (h: string) => (/^[0-9a-f]{1,4}$/.test(h) ? parseInt(h, 16) : NaN);
  const head = halves[0] ? halves[0]!.split(':').map(toHextet) : [];
  const back = halves.length === 2 && halves[1] ? halves[1]!.split(':').map(toHextet) : [];
  if ([...head, ...back].some(Number.isNaN)) return null;

  const fixed = head.length + back.length + tail.length;
  if (halves.length === 2) {
    if (fixed > 8) return null;
    return [...head, ...new Array(8 - fixed).fill(0), ...back, ...tail];
  }
  const all = [...head, ...tail];
  return all.length === 8 ? all : null;
}

/**
 * Several IPv6 ranges tunnel an IPv4 address inside an otherwise "public
 * looking" 2000::/3 address — 6to4 (2002::/16) and Teredo (2001:0::/32) both
 * do, so `2002:7f00:1::` is really 127.0.0.1. Decode those before deciding.
 */
function isPrivateIpv6(raw: string): boolean {
  const h = parseIpv6(raw);
  if (!h) return true; // unparseable -> fail closed
  const v4 = (hi: number, lo: number) => `${hi >> 8}.${hi & 255}.${lo >> 8}.${lo & 255}`;

  if (h.every((x) => x === 0)) return true; // ::
  if (h.slice(0, 7).every((x) => x === 0) && h[7] === 1) return true; // ::1
  // IPv4-mapped ::ffff:0:0/96 and the deprecated IPv4-compatible ::/96.
  if (h.slice(0, 5).every((x) => x === 0) && (h[5] === 0xffff || h[5] === 0)) {
    return isPrivateIpv4(v4(h[6]!, h[7]!));
  }
  // NAT64 well-known prefix 64:ff9b::/96.
  if (h[0] === 0x64 && h[1] === 0xff9b && h.slice(2, 6).every((x) => x === 0)) {
    return isPrivateIpv4(v4(h[6]!, h[7]!));
  }
  if (h[0] === 0x2002) return isPrivateIpv4(v4(h[1]!, h[2]!)); // 6to4
  if (h[0] === 0x2001 && h[1] === 0) {
    return isPrivateIpv4(v4(h[6]! ^ 0xffff, h[7]! ^ 0xffff)); // Teredo (obfuscated)
  }
  // Everything outside 2000::/3 (ULA fc00::/7, link-local fe80::/10, multicast
  // ff00::/8, ...) is not globally routable.
  return (h[0]! & 0xe000) !== 0x2000;
}

function isIpLiteral(hostname: string): boolean {
  const bare = hostname.replace(/^\[|\]$/g, '');
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(bare) || bare.includes(':');
}

interface DohAnswer {
  type: number;
  data: string;
}

/**
 * The string checks above only see the literal hostname, so a name like
 * `localtest.me` (A record 127.0.0.1) sails straight through them. Resolve over
 * DoH and reject if ANY answer lands in private space. Fails closed: an
 * unresolvable name, or a resolver we can't reach, is treated as blocked.
 *
 * Residual risk: this is resolve-then-fetch, so a rebinding attacker could
 * return a public IP to us and a private one to the subsequent fetch. Closing
 * that needs pinning the fetch to the resolved IP, which the Workers runtime
 * can't express. It stays acceptable because Worker fetch egresses through
 * Cloudflare and has no route to loopback/RFC1918 in the first place — this
 * check is defence in depth, and the real guarantee is the platform's.
 */
async function hostResolvesPublic(hostname: string, signal: AbortSignal): Promise<boolean> {
  const lookups = (['A', 'AAAA'] as const).map(async (type) => {
    const endpoint = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(hostname)}&type=${type}`;
    const res = await fetch(endpoint, { headers: { accept: 'application/dns-json' }, signal });
    if (!res.ok) throw new Error(`DNS lookup failed (${res.status}).`);
    const body = (await res.json()) as { Answer?: DohAnswer[] };
    // Types 1 (A) and 28 (AAAA); anything else in the chain (e.g. CNAME) is noise.
    return (body.Answer ?? []).filter((a) => a.type === 1 || a.type === 28).map((a) => String(a.data));
  });

  let addresses: string[];
  try {
    addresses = (await Promise.all(lookups)).flat();
  } catch {
    return false;
  }
  if (!addresses.length) return false;
  return addresses.every((addr) => (addr.includes(':') ? !isPrivateIpv6(addr) : !isPrivateIpv4(addr)));
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

  /** Literals were already range-checked; names still need resolving. */
  const assertPublicHost = async (url: URL) => {
    if (isIpLiteral(url.hostname)) return;
    if (!(await hostResolvesPublic(url.hostname, controller.signal))) {
      throw new Error('That hostname resolves to a private or unreachable address.');
    }
  };

  try {
    await assertPublicHost(current);
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
      await assertPublicHost(validated);
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
