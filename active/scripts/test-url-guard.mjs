/**
 * Asserts the SSRF guard's hostname decisions. Transpiles api-utils.ts with the
 * real TypeScript compiler so the test runs against the shipped logic, not a copy.
 *
 * Usage: node active/scripts/test-url-guard.mjs
 */
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import ts from 'typescript';

const src = readFileSync('src/lib/api-utils.ts', 'utf8');
const js = ts.transpileModule(src, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText;

const dir = mkdtempSync(join(tmpdir(), 'urlguard-'));
const file = join(dir, 'guard.mjs');
writeFileSync(file, js);
const { publicHttpUrl } = await import(`file://${file}`);

// [url, shouldBeAllowed, why]
const CASES = [
  ['https://example.com', true, 'ordinary public host'],
  ['https://sub.domain.co.uk/path?q=1', true, 'public host with path'],
  ['http://example.com:80/', true, 'explicit port 80'],
  ['https://example.com:443/', true, 'explicit port 443'],

  ['http://127.0.0.1', false, 'loopback literal'],
  ['http://127.1.2.3', false, 'loopback range'],
  ['http://localhost', false, 'localhost'],
  ['http://foo.localhost', false, 'blocked suffix'],
  ['http://box.internal', false, 'blocked suffix'],
  ['http://nas.local', false, 'blocked suffix'],
  ['http://10.1.2.3', false, 'RFC1918 10/8'],
  ['http://172.16.0.1', false, 'RFC1918 172.16/12'],
  ['http://172.31.255.255', false, 'RFC1918 172.16/12 upper'],
  ['http://192.168.1.1', false, 'RFC1918 192.168/16'],
  ['http://169.254.169.254', false, 'cloud metadata'],
  ['http://100.64.0.1', false, 'CGNAT'],
  ['http://0.0.0.0', false, 'unspecified'],
  ['http://255.255.255.255', false, 'broadcast/reserved'],
  ['http://198.18.0.1', false, 'benchmarking range'],
  ['http://172.32.0.1', true, 'just outside RFC1918 172.16/12'],

  ['http://example.com:8080', false, 'non-80/443 port'],
  ['http://user:pass@example.com', false, 'credentials in URL'],
  ['ftp://example.com', false, 'non-http scheme'],
  ['file:///etc/passwd', false, 'file scheme'],
  ['not a url', false, 'unparseable'],

  ['http://[::1]', false, 'IPv6 loopback'],
  ['http://[::]', false, 'IPv6 unspecified'],
  ['http://[fe80::1]', false, 'IPv6 link-local'],
  ['http://[fc00::1]', false, 'IPv6 ULA'],
  ['http://[ff02::1]', false, 'IPv6 multicast'],
  ['http://[::ffff:127.0.0.1]', false, 'IPv4-mapped loopback'],
  ['http://[::ffff:10.0.0.1]', false, 'IPv4-mapped RFC1918'],
  ['http://[2002:7f00:0001::]', false, '6to4 wrapping 127.0.0.1'],
  ['http://[2002:c0a8:0101::]', false, '6to4 wrapping 192.168.1.1'],
  ['http://[2002:a9fe:a9fe::]', false, '6to4 wrapping 169.254.169.254'],
  ['http://[2001:0:0:0:0:0:ffff:fffe]', false, 'Teredo wrapping 0.0.0.1'],
  ['http://[64:ff9b::7f00:1]', false, 'NAT64 wrapping 127.0.0.1'],
  ['http://[2600:1901::1]', true, 'genuinely routable IPv6'],
  ['http://[2002:5db8:d822::]', true, '6to4 wrapping a public v4'],
  ['http://[::ffff:93.184.216.34]', true, 'IPv4-mapped public'],
];

let failed = 0;
for (const [url, want, why] of CASES) {
  const got = publicHttpUrl(url) !== null;
  if (got !== want) {
    console.log(
      `FAIL  ${url}\n      expected ${want ? 'ALLOWED' : 'blocked'} (${why}), got ${got ? 'ALLOWED' : 'blocked'}`
    );
    failed++;
  }
}
console.log(failed ? `\n${failed}/${CASES.length} failed` : `all ${CASES.length} hostname cases pass`);
process.exit(failed ? 1 : 0);
