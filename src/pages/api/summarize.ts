import type { APIRoute } from 'astro';
import { json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

const MAX_INPUT_CHARS = 24_000;

/**
 * Free-tool endpoint: summarizes pasted text / a transcript with Workers AI.
 * Deliberately modest: capped input, one summary shape, no streaming. The
 * product's real summarizer (extension) is the upgrade path.
 */
export const POST: APIRoute = async ({ request, locals }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  let body: { text?: string; title?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Send JSON: {"text": "..."}' }, 400);
  }

  const text = (body.text ?? '').trim();
  if (text.length < 200) return json({ error: 'Provide at least 200 characters to summarize.' }, 400);

  const input = text.slice(0, MAX_INPUT_CHARS);

  const env = (locals as any)?.runtime?.env;
  if (!env?.AI) {
    return json({ error: 'Summarization is temporarily unavailable.' }, 503);
  }

  try {
    const result = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: [
        {
          role: 'system',
          content:
            'You summarize content faithfully. Output exactly: a one-paragraph TL;DR (2-3 sentences), then a "Key points" list of 4-7 bullets. Plain text with "- " bullets, no markdown headers. Never invent facts not present in the input.',
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
  } catch {
    return json({ error: 'Summarization failed. Please try again shortly.' }, 502);
  }
};
