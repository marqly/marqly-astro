import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = resolve(process.cwd());
const DIST = resolve(ROOT, 'dist/client');

/**
 * Pricing-truth guards (2026-09-25). Marqly's discount rule, same as the app
 * (apps/web/lib/billing/discount.ts): percentages are always ROUNDED DOWN and
 * always name their baseline. $49 vs $72 = 31.9% → "31% off your first year",
 * never 32%. And Marqly sells no trial of any kind (retired 2026-09-18) —
 * forward trial phrasing, in any language, must never reach built output
 * attributed to Marqly. Questions and negations are allowed.
 */

function readIf(p) {
  return existsSync(p) ? readFileSync(p, 'utf8') : null;
}

function teamsPublicFlag() {
  const raw = readIf(resolve(ROOT, 'src/components/landing/data.ts'));
  if (raw === null) throw new Error('data.ts missing');
  return /export const TEAMS_PUBLIC\s*=\s*true/.test(raw);
}

const PRICING_PAGES = [
  'index.html',
  'pricing.html',
  'faq/how-much-does-marqly-cost.html',
  'faq/marqly-coupons-and-discounts.html',
  'faq/is-there-a-student-discount.html',
];

// "32% off" / "Save 32%" is Marqly-offer copy by construction — no competitor
// page states a 32% saving, so a global dist scan is safe.
const BANNED_ROUNDING = [/save\s*32\s*%/i, /32\s*%\s*off/i];

const LOCALIZED_TRIAL_FWD = [
  /\b(start|get|enjoy|claim)(?:\s+a|\s+your)?\s+(free\s+)?trial\b/i,
  /\btry\s+pro\s+free\b/i,
  /\b\d+[-\s]?day\s+(free\s+)?trial\b/i,
  /\bfree\s+trial\b(?!\s*\?)/i,
  /7\s*Tage[n]?\s+Testphase|Testphase\s+von\s+7\s*Tage/i,
  /7?\s*(?:días|jours|giorni)\s+de?\s*(?:prueba|essai|prova)/i,
  /7日間無料トライアル|無料トライアル(?:を開始|をお試し)/i,
  /7일\s*무료\s*체험|무료\s*체험(?:을|시작)/i,
  /7天免费试用|免费试用(?:Marqly|开始)/i,
];
const TRIAL_ALLOWED = /\b(no|not|without|never|longer|retired|ceased|does not|don'?t|de-trial)\b|is there a|what happens/i;

export const tests = [
  {
    id: 'T1.F18.01',
    feature: 'F18',
    name: 'No rounded-UP Marqly discount ("Save 32%" / "32% off") anywhere in built output',
    run: async () => {
      if (!existsSync(DIST)) return { ok: false, error: 'dist/client missing — run npm run build first' };
      const stack = [DIST];
      const hits = [];
      while (stack.length) {
        const dir = stack.pop();
        for (const e of readdirSync(dir, { withFileTypes: true })) {
          const p = join(dir, e.name);
          if (e.isDirectory()) { stack.push(p); continue; }
          if (!/\.(html|txt)$/.test(e.name)) continue;
          const raw = readFileSync(p, 'utf8');
          if (BANNED_ROUNDING.some((re) => re.test(raw))) hits.push(p.replace(DIST + '/', ''));
        }
      }
      return hits.length ? { ok: false, error: `Rounded-up discount in: ${hits.slice(0, 8).join(', ')}` } : { ok: true };
    },
  },
  {
    id: 'T1.F18.02',
    feature: 'F18',
    name: 'The truth is PRESENT: 31% first-year and 33% annual-vs-monthly on the pricing pages',
    run: async () => {
      const home = readIf(resolve(DIST, 'index.html'));
      const faq = readIf(resolve(DIST, 'faq/how-much-does-marqly-cost.html'));
      if (home === null || faq === null) return { ok: false, error: 'pricing pages missing in dist' };
      if (!/Save\s*31%/i.test(home)) return { ok: false, error: 'homepage pricing badge does not say "Save 31%"' };
      if (!/31\s*%\s*off your first year/i.test(faq)) return { ok: false, error: 'cost FAQ lacks "31% off your first year"' };
      if (!/33%/i.test(faq)) return { ok: false, error: 'cost FAQ lost the 33% annual-vs-monthly baseline' };
      return { ok: true };
    },
  },
  {
    id: 'T1.F18.03',
    feature: 'F18',
    name: 'Every percentage on Marqly pricing pages names its baseline (no bare discount %)',
    run: async () => {
      const BASELINE = /(first year|annual|month|monthl|per year|\/year|\/yr|108|108\/yr|list price|vs|than|billing|billed|year one|yearly)/i;
      const problems = [];
      for (const rel of PRICING_PAGES) {
        const raw = readIf(resolve(DIST, rel));
        if (raw === null) { problems.push(`${rel}: missing`); continue; }
        const text = raw.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ');
        for (const sentence of text.split(/[.!?•\n]/)) {
          if (/\b\d{2,3}(\.\d)?\s*%/.test(sentence) && !BASELINE.test(sentence)) {
            problems.push(`${rel}: "${sentence.trim().slice(0, 80)}"`);
          }
        }
      }
      return problems.length ? { ok: false, error: `Unlabelled percentages:\n  ${problems.join('\n  ')}` } : { ok: true };
    },
  },
  {
    id: 'T1.F18.04',
    feature: 'F18',
    name: 'No forward trial promise (EN + localized) on Marqly pricing surfaces in built output',
    run: async () => {
      const problems = [];
      for (const rel of [...PRICING_PAGES, 'terms.html', 'llms.txt', 'llms-full.txt']) {
        const raw = readIf(resolve(DIST, rel));
        if (raw === null) continue;
        const text = rel.endsWith('.txt') ? raw : raw.replace(/<[^>]+>/g, ' ');
        for (const line of text.split(/[\n]/)) {
          if (TRIAL_ALLOWED.test(line)) continue;
          if (LOCALIZED_TRIAL_FWD.some((re) => re.test(line))) {
            problems.push(`${rel}: ${line.trim().slice(0, 90)}`);
          }
        }
      }
      return problems.length ? { ok: false, error: `Trial promise found:\n  ${problems.join('\n  ')}` } : { ok: true };
    },
  },
  {
    id: 'T1.F18.05',
    feature: 'F18',
    name: 'Dark-mode guarantee: while TEAMS_PUBLIC=false, /teams is noindex, unlinked, and out of sitemap+llms',
    run: async () => {
      let dark;
      try {
        dark = !teamsPublicFlag();
      } catch (e) {
        return { ok: false, error: String(e) };
      }
      if (!dark) return { ok: true }; // launched — the guard's counterpart lives in the flag itself
      const teams = readIf(resolve(DIST, 'teams.html'));
      if (teams === null) return { ok: false, error: 'teams.html should still build for preview' };
      if (!/name="robots" content="noindex/.test(teams)) {
        return { ok: false, error: 'dark teams.html is missing the noindex robots meta' };
      }
      const stack = [DIST];
      const leaks = [];
      while (stack.length) {
        const dir = stack.pop();
        for (const e of readdirSync(dir, { withFileTypes: true })) {
          const p = join(dir, e.name);
          if (e.isDirectory()) { stack.push(p); continue; }
          if (!/\.html$/.test(e.name) || p.endsWith('teams.html')) continue;
          const raw = readFileSync(p, 'utf8');
          if (/href="\/teams[\/"]/.test(raw)) leaks.push(p.replace(DIST + '/', ''));
        }
      }
      if (leaks.length) return { ok: false, error: `Dark /teams linked from: ${leaks.slice(0, 6).join(', ')}` };
      const sm = readIf(resolve(DIST, 'sitemap-0.xml')) ?? '';
      if (/\/teams/.test(sm)) return { ok: false, error: '/teams appears in the sitemap while dark' };
      const llms = readIf(resolve(DIST, 'llms.txt')) ?? '';
      if (/\/teams/.test(llms)) return { ok: false, error: '/teams appears in llms.txt while dark' };
      return { ok: true };
    },
  },
];
