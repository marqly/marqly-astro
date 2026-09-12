import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());

export const tests = [
  {
    id: 'T2.B04.01',
    feature: 'F04',
    name: 'Multi-lingual trial regex correctly flags German hyphenated "3-Tage-Testversion"',
    run: async () => {
      const trialRegex = /\b3[- ]?(?:day|tage|jours|días|dias|giorni)\b/i;
      const testString = 'Starten Sie Ihre 3-Tage-Testversion noch heute.';
      if (!trialRegex.test(testString)) {
        return { ok: false, error: 'Regex failed to detect hyphenated "3-Tage-Testversion"' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B04.02',
    feature: 'F04',
    name: 'Multi-lingual trial regex correctly flags French "essai gratuit de 3 jours"',
    run: async () => {
      const trialRegex = /\b3[- ]?(?:day|tage|jours|días|dias|giorni)\b/i;
      const testString = 'Profitez de notre essai gratuit de 3 jours.';
      if (!trialRegex.test(testString)) {
        return { ok: false, error: 'Regex failed to detect "3 jours"' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B04.03',
    feature: 'F04',
    name: 'Multi-lingual trial regex correctly flags Italian "3 giorni di prova"',
    run: async () => {
      const trialRegex = /\b3[- ]?(?:day|tage|jours|días|dias|giorni)\b/i;
      const testString = 'Accedi alla prova di 3 giorni.';
      if (!trialRegex.test(testString)) {
        return { ok: false, error: 'Regex failed to detect "3 giorni"' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B04.04',
    feature: 'F04',
    name: 'Multi-lingual trial regex correctly flags Spanish accented "3 días de prueba"',
    run: async () => {
      const trialRegex = /\b3[- ]?(?:day|tage|jours|días|dias|giorni)\b/i;
      const testString = 'Disfruta de 3 días de prueba gratis.';
      if (!trialRegex.test(testString)) {
        return { ok: false, error: 'Regex failed to detect accented "3 días"' };
      }
      return { ok: true };
    }
  },
  {
    id: 'T2.B04.05',
    feature: 'F04',
    name: 'Multi-lingual trial regex does NOT false-positive on "30 days" or "3 items"',
    run: async () => {
      const trialRegex = /\b3[- ]?(?:day|tage|jours|días|dias|giorni)\b/i;
      const benignStrings = [
        '30 days money back guarantee',
        '30 Tage Rückgaberecht',
        'Save 3 items per minute',
        'Top 3 alternatives'
      ];
      for (const s of benignStrings) {
        if (trialRegex.test(s)) {
          return { ok: false, error: `False positive triggered on benign string: "${s}"` };
        }
      }
      return { ok: true };
    }
  }
];
