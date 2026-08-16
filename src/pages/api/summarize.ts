import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { json, originAllowed, rateLimit } from '../../lib/api-utils';

export const prerender = false;

const MAX_INPUT_CHARS = 24_000;

/**
 * Free-tool endpoint: summarizes pasted text / a transcript with Workers AI.
 * Deliberately modest: capped input, one summary shape, no streaming. The
 * product's real summarizer (extension) is the upgrade path.
 */
export const POST: APIRoute = async ({ request }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const limited = await rateLimit(request, env, 'AI_RATE_LIMITER', 'summarize');
  if (limited) return limited;

  let body: { text?: string; title?: string; lang?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"text": "..."}' }, 400);
  }

  // Localized tool pages request the summary in their own language, whatever
  // language the source transcript is in. Whitelisted — never user-freeform.
  const OUTPUT_LANG: Record<string, string> = {
    en: 'English',
    es: 'Spanish (Latin American — "videos" without accent, tú form)',
    pt: 'Brazilian Portuguese',
    de: 'German',
    fr: 'French',
    it: 'Italian',
  };
  const outputLang = OUTPUT_LANG[body.lang ?? 'en'] ?? 'English';

  const text = (body.text ?? '').trim();
  if (text.length < 200) return json({ error: 'Provide at least 200 characters to summarize.' }, 400);

  const input = text.slice(0, MAX_INPUT_CHARS);

  if (!env?.AI) {
    return json({ error: 'Summarization is temporarily unavailable.' }, 503);
  }

  try {
    const result = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
      messages: [
        {
          role: 'system',
          content:
            `You summarize content faithfully. Write the entire summary in ${outputLang}, regardless of the input language. Output exactly: a one-paragraph TL;DR (2-3 sentences), then a short heading meaning "Key points" in ${outputLang} followed by 4-7 bullets. Plain text with "- " bullets, no markdown headers. Never invent facts not present in the input.`,
        },
        {
          role: 'user',
          content: `Summarize this${body.title ? ` (title: ${body.title})` : ''}:\n\n${input}`,
        },
      ],
      max_tokens: 600,
    });
    const summary = (result as { response?: string }).response?.trim();
    if (!summary) return json({ error: 'The model returned an empty summary.' }, 502);
    return json({ summary, truncated: text.length > MAX_INPUT_CHARS });
  } catch (err) {
    console.error('summarize failed:', err instanceof Error ? err.message : err);
    return json({ error: 'Summarization failed. Please try again shortly.' }, 502);
  }
};
