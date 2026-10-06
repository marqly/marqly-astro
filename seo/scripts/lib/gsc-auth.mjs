// Pure-Node Google service-account auth (no deps): RS256 JWT -> oauth2 access token.
// Key lives OUTSIDE the repo (~/.config/marqly-seo/marqly-seo-key.json) — never commit it.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const KEY_PATH = process.env.MARQLY_SA_KEY
  || path.join(process.env.HOME, '.config/marqly-seo/marqly-seo-key.json');
const TOKEN_DIR = path.join(process.env.HOME, '.cache/marqly-seo');

export function loadServiceAccount() {
  if (!fs.existsSync(KEY_PATH)) {
    throw new Error(`SA key not found at ${KEY_PATH} (set MARQLY_SA_KEY to override). Never paste keys into chat.`);
  }
  return JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'));
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64url');
}

async function mintToken(sa, scope) {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    iss: sa.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))}.${b64url(JSON.stringify(claims))}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = b64url(sign.sign(sa.private_key));
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${sig}`,
    }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`token mint failed: ${JSON.stringify(json)}`);
  return json;
}

export async function getAccessToken(scope = 'https://www.googleapis.com/auth/webmasters.readonly') {
  const sa = loadServiceAccount();
  const hash = crypto.createHash('sha256').update(`${sa.client_email}|${scope}`).digest('hex').slice(0, 16);
  const cacheFile = path.join(TOKEN_DIR, `token-${hash}.json`);
  try {
    const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    if (cached.expires_at > Date.now() + 60_000) return cached.access_token;
  } catch {}
  const tok = await mintToken(sa, scope);
  fs.mkdirSync(TOKEN_DIR, { recursive: true });
  fs.writeFileSync(cacheFile, JSON.stringify({
    access_token: tok.access_token,
    expires_at: Date.now() + (tok.expires_in - 120) * 1000,
  }), { mode: 0o600 });
  return tok.access_token;
}

export async function gscFetch(pathname, { method = 'GET', body, params } = {}) {
  const token = await getAccessToken();
  const url = new URL(`https://searchconsole.googleapis.com${pathname}`);
  if (params) for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));
  const res = await fetch(url, {
    method,
    headers: { authorization: `Bearer ${token}`, ...(body ? { 'content-type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch {
    throw new Error(`GSC ${method} ${pathname} -> HTTP ${res.status} non-JSON: ${text.slice(0, 200)}`);
  }
  if (!res.ok) {
    const e = new Error(`GSC ${method} ${pathname} -> HTTP ${res.status}: ${json?.error?.message ?? 'unknown'}`);
    e.status = res.status;
    e.json = json;
    throw e;
  }
  return json;
}
