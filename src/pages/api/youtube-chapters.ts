import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { json, originAllowed, rateLimit } from '../../lib/api-utils';

export const prerender = false;

const MAX_INPUT_CHARS = 24_000;

interface Segment {
  start: number;
  text: string;
}

const stamp = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${m}:${String(sec).padStart(2, '0')}`;
};

/**
 * Free-tool endpoint: turns a transcript into YouTube chapter markers.
 * The client fetches the transcript from /api/youtube-transcript and posts the
 * segments here; the model only picks section boundaries + titles, and we
 * re-derive the timestamps from real segment starts so they can't be invented.
 */
export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const limited = await rateLimit(request, env, 'AI_RATE_LIMITER', 'youtube-chapters');
  if (limited) return limited;

  let body: { segments?: Segment[]; title?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"segments": [...]}' }, 400);
  }

  const segments = (body.segments ?? []).filter(
    (s) => typeof s?.start === 'number' && typeof s?.text === 'string',
  );
  if (segments.length < 10) {
    return json({ error: 'That video is too short to chapter usefully.' }, 400);
  }
  if (!env?.AI) return json({ error: 'Chapter generation is temporarily unavailable.' }, 503);

  // Feed the model timestamped lines so it can anchor sections to real times.
  let transcript = '';
  for (const s of segments) {
    const line = `[${Math.round(s.start)}] ${s.text}\n`;
    if (transcript.length + line.length > MAX_INPUT_CHARS) break;
    transcript += line;
  }
  const covered = Math.round(segments[segments.length - 1].start);

  try {
    const result = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
      messages: [
        {
          role: 'system',
          content:
            'You create YouTube chapter markers from a timestamped transcript. Return ONLY lines in the form "<seconds> <title>", one per chapter, where <seconds> is an integer copied from a bracketed timestamp in the transcript and <title> is a concise 2-6 word section title in the transcript\'s language. Produce 4-10 chapters covering the whole video, in ascending time order. The first chapter must start at 0. No preamble, no numbering, no markdown.',
        },
        {
          role: 'user',
          content: `Transcript${body.title ? ` of "${body.title}"` : ''}:\n\n${transcript}`,
        },
      ],
      max_tokens: 500,
    });

    const rawOut = (result as { response?: string }).response ?? '';
    const chapters: { start: number; title: string }[] = [];
    for (const line of rawOut.split('\n')) {
      const m = line.trim().match(/^\[?(\d{1,6})\]?[\s:–-]+(.{2,80})$/);
      if (!m) continue;
      const start = Number(m[1]);
      if (!Number.isFinite(start) || start < 0 || start > covered) continue;
      const title = m[2].replace(/^["'\-–—\s]+|["'\s]+$/g, '');
      if (!title) continue;
      if (chapters.length && start <= chapters[chapters.length - 1].start) continue;
      chapters.push({ start, title });
    }
    if (!chapters.length) return json({ error: 'Could not derive chapters for this video.' }, 502);

    // YouTube requires the first chapter at 00:00.
    if (chapters[0].start !== 0) chapters[0] = { start: 0, title: chapters[0].title };

    return json({
      chapters: chapters.map((c) => ({ ...c, stamp: stamp(c.start) })),
      text: chapters.map((c) => `${stamp(c.start)} ${c.title}`).join('\n'),
      truncated: transcript.length >= MAX_INPUT_CHARS,
    });
  } catch (err) {
    console.error('youtube-chapters failed:', err instanceof Error ? err.message : err);
    return json({ error: 'Chapter generation failed. Please try again shortly.' }, 502);
  }
};
