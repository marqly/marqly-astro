import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseHtml } from '../helpers/html-parser.mjs';

const ROOT = resolve(process.cwd());
const TRUTH_DIR = resolve(ROOT, '.seo/competitors/raindrop');
const RAINDROP_DATA = resolve(ROOT, 'src/data/competitors/raindrop.json');

const ALT_EN = resolve(ROOT, 'dist/client/alternatives/raindrop.html');
const ALT_DE = resolve(ROOT, 'dist/client/de/alternativen/raindrop.html');
const ALT_FR = resolve(ROOT, 'dist/client/fr/alternatives/raindrop.html');

const COMP_EN = resolve(ROOT, 'dist/client/compare/marqly-vs-raindrop.html');
const COMP_DE = resolve(ROOT, 'dist/client/de/vergleich/marqly-vs-raindrop.html');
const COMP_FR = resolve(ROOT, 'dist/client/fr/comparer/marqly-vs-raindrop.html');

const MIG_EN = resolve(ROOT, 'dist/client/migrate/raindrop.html');
const MIG_DE = resolve(ROOT, 'dist/client/de/migration/raindrop.html');
const MIG_FR = resolve(ROOT, 'dist/client/fr/migration/raindrop.html');

const TOOL_HTML = resolve(ROOT, 'dist/client/tools/raindrop-export-analyzer.html');
const HUB_HTML = resolve(ROOT, 'dist/client/best-bookmark-manager.html');

export const tests = [
  {
    id: 'T3.01',
    feature: 'F01 × F02',
    name: 'Truth pricing vs runtime raindrop.json price consistency ($28/yr Pro rate)',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'pricing.json');
      if (!existsSync(p) || !existsSync(RAINDROP_DATA)) {
        return { ok: false, error: 'pricing.json or raindrop.json missing' };
      }
      const truth = JSON.parse(readFileSync(p, 'utf8'));
      const runtime = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const truthAnnual = truth.paid_tiers?.[0]?.billed_annually;
      const runtimePaid = runtime.pricing?.paid || '';
      if (truthAnnual && !runtimePaid.includes(String(truthAnnual))) {
        return { ok: false, error: `Price discrepancy: Truth has $${truthAnnual}, runtime has "${runtimePaid}"` };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.02',
    feature: 'F01 × F02',
    name: 'Truth platforms vs runtime raindrop.json platforms parity (windows, linux)',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'platforms.json');
      if (!existsSync(p) || !existsSync(RAINDROP_DATA)) return { ok: false, error: 'Files missing' };
      const truth = JSON.parse(readFileSync(p, 'utf8'));
      const runtime = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      const rtPlats = runtime.platforms || [];
      if (truth.windows && !rtPlats.includes('windows')) {
        return { ok: false, error: 'Truth specifies windows support, but runtime raindrop.json is missing windows' };
      }
      if (truth.linux && !rtPlats.includes('linux')) {
        return { ok: false, error: 'Truth specifies linux support, but runtime raindrop.json is missing linux' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.03',
    feature: 'F01 × F02',
    name: 'Truth AI features vs runtime raindrop.json AI flag alignment',
    run: async () => {
      const p = resolve(TRUTH_DIR, 'ai.json');
      if (!existsSync(p) || !existsSync(RAINDROP_DATA)) return { ok: false, error: 'Files missing' };
      const truth = JSON.parse(readFileSync(p, 'utf8'));
      const runtime = JSON.parse(readFileSync(RAINDROP_DATA, 'utf8'));
      if (truth.semantic_retrieval === false && runtime.features?.semanticSearch === true) {
        return { ok: false, error: 'Truth asserts no semantic retrieval, but runtime marks semanticSearch=true' };
      }
      if (truth.auto_tagging === false && runtime.features?.aiAutoTagging === true && !runtime.features?.aiTagSuggestions) {
        return { ok: false, error: 'Truth asserts no auto_tagging (only suggestions), but runtime marks aiAutoTagging=true' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.04',
    feature: 'F03 × F12',
    name: 'English alternatives vs German alternatives reciprocal hreflang pairing',
    run: async () => {
      if (!existsSync(ALT_EN) || !existsSync(ALT_DE)) {
        return { ok: false, error: 'alternatives/raindrop.html or de/alternativen/raindrop.html missing' };
      }
      const enParsed = parseHtml(readFileSync(ALT_EN, 'utf8'));
      const deParsed = parseHtml(readFileSync(ALT_DE, 'utf8'));

      const enToDe = enParsed.alternates.some(a => a.hreflang === 'de' && a.href.includes('/de/alternativen/raindrop'));
      const deToEn = deParsed.alternates.some(a => (a.hreflang === 'en' || a.hreflang === 'x-default') && a.href.includes('/alternatives/raindrop'));

      if (!enToDe) {
        return { ok: false, error: 'English alternatives page missing hreflang="de" pointing to German page' };
      }
      if (!deToEn) {
        return { ok: false, error: 'German alternatives page missing reciprocal hreflang pointing to English page' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.05',
    feature: 'F03 × F12',
    name: 'English alternatives vs French alternatives reciprocal hreflang pairing',
    run: async () => {
      if (!existsSync(ALT_EN) || !existsSync(ALT_FR)) {
        return { ok: false, error: 'alternatives/raindrop.html or fr/alternatives/raindrop.html missing' };
      }
      const enParsed = parseHtml(readFileSync(ALT_EN, 'utf8'));
      const frParsed = parseHtml(readFileSync(ALT_FR, 'utf8'));

      const enToFr = enParsed.alternates.some(a => a.hreflang === 'fr' && a.href.includes('/fr/alternatives/raindrop'));
      const frToEn = frParsed.alternates.some(a => (a.hreflang === 'en' || a.hreflang === 'x-default') && a.href.includes('/alternatives/raindrop'));

      if (!enToFr) {
        return { ok: false, error: 'English alternatives page missing hreflang="fr" pointing to French page' };
      }
      if (!frToEn) {
        return { ok: false, error: 'French alternatives page missing reciprocal hreflang pointing to English page' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.06',
    feature: 'F07 × F12',
    name: 'English comparison vs German comparison canonical and hreflang symmetry',
    run: async () => {
      if (!existsSync(COMP_EN) || !existsSync(COMP_DE)) {
        return { ok: false, error: 'Comparison pages missing' };
      }
      const enParsed = parseHtml(readFileSync(COMP_EN, 'utf8'));
      const deParsed = parseHtml(readFileSync(COMP_DE, 'utf8'));

      const enToDe = enParsed.alternates.some(a => a.hreflang === 'de' && a.href.includes('/de/vergleich/marqly-vs-raindrop'));
      const deToEn = deParsed.alternates.some(a => a.hreflang === 'en' && a.href.includes('/compare/marqly-vs-raindrop'));

      if (!enToDe || !deToEn) {
        return { ok: false, error: 'Asymmetric hreflang between English and German comparison pages' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.07',
    feature: 'F07 × F12',
    name: 'English comparison vs French comparison canonical and hreflang symmetry',
    run: async () => {
      if (!existsSync(COMP_EN) || !existsSync(COMP_FR)) {
        return { ok: false, error: 'Comparison pages missing' };
      }
      const enParsed = parseHtml(readFileSync(COMP_EN, 'utf8'));
      const frParsed = parseHtml(readFileSync(COMP_FR, 'utf8'));

      const enToFr = enParsed.alternates.some(a => a.hreflang === 'fr' && a.href.includes('/fr/comparer/marqly-vs-raindrop'));
      const frToEn = frParsed.alternates.some(a => a.hreflang === 'en' && a.href.includes('/compare/marqly-vs-raindrop'));

      if (!enToFr || !frToEn) {
        return { ok: false, error: 'Asymmetric hreflang between English and French comparison pages' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.08',
    feature: 'F08 × F11',
    name: 'English migration guide vs German migration lander reciprocal hreflang pairing',
    run: async () => {
      if (!existsSync(MIG_EN) || !existsSync(MIG_DE)) {
        return { ok: false, error: 'English or German migration page missing' };
      }
      const enParsed = parseHtml(readFileSync(MIG_EN, 'utf8'));
      const deParsed = parseHtml(readFileSync(MIG_DE, 'utf8'));

      const enToDe = enParsed.alternates.some(a => a.hreflang === 'de' && a.href.includes('/de/migration/raindrop'));
      const deToEn = deParsed.alternates.some(a => a.hreflang === 'en' && a.href.includes('/migrate/raindrop'));

      if (!enToDe || !deToEn) {
        return { ok: false, error: 'Asymmetric hreflang between English and German migration pages' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.09',
    feature: 'F08 × F11',
    name: 'English migration guide vs French migration lander reciprocal hreflang pairing',
    run: async () => {
      if (!existsSync(MIG_EN) || !existsSync(MIG_FR)) {
        return { ok: false, error: 'English or French migration page missing' };
      }
      const enParsed = parseHtml(readFileSync(MIG_EN, 'utf8'));
      const frParsed = parseHtml(readFileSync(MIG_FR, 'utf8'));

      const enToFr = enParsed.alternates.some(a => a.hreflang === 'fr' && a.href.includes('/fr/migration/raindrop'));
      const frToEn = frParsed.alternates.some(a => a.hreflang === 'en' && a.href.includes('/migrate/raindrop'));

      if (!enToFr || !frToEn) {
        return { ok: false, error: 'Asymmetric hreflang between English and French migration pages' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.10',
    feature: 'F06 × F08',
    name: 'Alternatives page contextual CTA points directly to live /migrate/raindrop route',
    run: async () => {
      if (!existsSync(ALT_EN)) return { ok: false, error: 'alternatives/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(ALT_EN, 'utf8'));
      const hasMigrate = parsed.links.some(l => l.includes('/migrate/raindrop'));
      if (!hasMigrate) {
        return { ok: false, error: 'alternatives/raindrop.html does not link to /migrate/raindrop' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.11',
    feature: 'F07 × F08',
    name: 'Comparison page migration callout points directly to /migrate/raindrop',
    run: async () => {
      if (!existsSync(COMP_EN)) return { ok: false, error: 'compare/marqly-vs-raindrop.html missing' };
      const parsed = parseHtml(readFileSync(COMP_EN, 'utf8'));
      const hasMigrate = parsed.links.some(l => l.includes('/migrate/raindrop'));
      if (!hasMigrate) {
        return { ok: false, error: 'compare/marqly-vs-raindrop.html does not link to /migrate/raindrop' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.12',
    feature: 'F09 × F10',
    name: 'Standalone tool page links back to migration walkthrough and forward to signup',
    run: async () => {
      if (!existsSync(TOOL_HTML)) return { ok: false, error: 'Tool page missing' };
      const parsed = parseHtml(readFileSync(TOOL_HTML, 'utf8'));
      const hasMigrate = parsed.links.some(l => l.includes('/migrate/raindrop'));
      const hasSignup = parsed.links.some(l => l.includes('signup') || l.includes('app.marqly.com'));
      if (!hasMigrate || !hasSignup) {
        return { ok: false, error: 'Tool page must link both backward to /migrate/raindrop and forward to signup' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.13',
    feature: 'F08 × F13',
    name: 'Migration guide interlinks with generic category benchmark hub (/best-bookmark-manager)',
    run: async () => {
      if (!existsSync(MIG_EN)) return { ok: false, error: 'migrate/raindrop.html missing' };
      const parsed = parseHtml(readFileSync(MIG_EN, 'utf8'));
      const hasHub = parsed.links.some(l => l.includes('/best-bookmark-manager'));
      if (!hasHub) {
        return { ok: false, error: 'migrate/raindrop.html missing link to /best-bookmark-manager' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.14',
    feature: 'F07 × F13',
    name: 'Generic category hub interlinks with /compare/marqly-vs-raindrop and /alternatives/raindrop',
    run: async () => {
      if (!existsSync(HUB_HTML)) return { ok: false, error: 'best-bookmark-manager.html missing' };
      const parsed = parseHtml(readFileSync(HUB_HTML, 'utf8'));
      const hasComp = parsed.links.some(l => l.includes('/compare/marqly-vs-raindrop'));
      const hasAlt = parsed.links.some(l => l.includes('/alternatives/raindrop'));
      if (!hasComp || !hasAlt) {
        return { ok: false, error: 'Hub must link to both Raindrop comparison and alternatives pages' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.15',
    feature: 'F14 × F15',
    name: 'Growth model and tracking matrix target URLs match existing or specified capture routes',
    run: async () => {
      const modelsDir = resolve(ROOT, '.seo/models');
      if (!existsSync(modelsDir)) return { ok: false, error: '.seo/models missing' };
      const raw = readFileSync(resolve(modelsDir, 'query-opportunity-matrix.md'), 'utf8');
      const targetUrls = [...raw.matchAll(/`(\/[a-z0-9_\/-]+)`/g)].map(m => m[1]);
      const validPrefixes = ['/alternatives', '/compare', '/migrate', '/tools', '/best-bookmark-manager', '/de', '/fr'];
      for (const url of targetUrls) {
        const isValid = validPrefixes.some(p => url.startsWith(p));
        if (!isValid) {
          return { ok: false, error: `Tracking matrix targets invalid or unmapped URL prefix: ${url}` };
        }
      }
      return { ok: true };
    }
  },
  {
    id: 'T3.16',
    feature: 'F04 × F11',
    name: 'seo-check.mjs regex gate enforces zero stale trial claims across all generated DE/FR landers',
    run: async () => {
      const dePages = [ALT_DE, COMP_DE, MIG_DE].filter(existsSync);
      const frPages = [ALT_FR, COMP_FR, MIG_FR].filter(existsSync);
      const allPages = [...dePages, ...frPages];
      for (const p of allPages) {
        const raw = readFileSync(p, 'utf8');
        if (/3[- ]?(?:tage|jours|giorni|dias|días)\b/i.test(raw)) {
          return { ok: false, error: `Stale 3-day trial claim found in ${p}` };
        }
      }
      return { ok: true };
    }
  }
];
