/**
 * /llms.txt — flag-aware so the Teams line appears exactly when the rest of
 * the Teams surface does (TEAMS_PUBLIC in src/components/landing/data.ts).
 * While dark this serves src/data/llms-base.txt byte-for-byte identical to
 * the previous static public/llms.txt.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { TEAMS_PUBLIC } from '../components/landing/data';

export const prerender = true;

// NOTE: import.meta.url here points at the bundled chunk under
// dist/server/.prerender/ at prerender time, NOT this source file — resolve
// from the project root (cwd is the repo root during astro build).
const BASE = readFileSync(join(process.cwd(), 'src/data/llms-base.txt'), 'utf8');

const TEAMS_LINE =
  '- [Marqly Teams](https://www.marqly.com/teams): shared team bookmark workspace — $9 per seat per month or $72 per seat per year, 3-seat minimum, pooled AI allowance, one Owner-paid bill, no trial\n';

function withTeams(text: string): string {
  return text.replace('- [Browser extension features]', TEAMS_LINE + '- [Browser extension features]');
}

export function GET() {
  return new Response(TEAMS_PUBLIC ? withTeams(BASE) : BASE, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
