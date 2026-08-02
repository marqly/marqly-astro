import type { APIRoute } from 'astro';
import { extractYouTubeId, json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

interface Segment {
  start: number;
  text: string;
}

/**
 * Free-tool endpoint: fetches a YouTube video's caption track server-side
 * (the watch page embeds the caption track URLs in ytInitialPlayerResponse).
 * Best-effort — YouTube occasionally blocks datacenter IPs; the tool page
 * degrades gracefully and points at the extension, which reads captions
 * in-browser and is not subject to this limitation.
 */
export const GET: APIRoute = async ({ request, url }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const id = extractYouTubeId(url.searchParams.get('v') ?? '');
  if (!id) return json({ error: 'Provide a valid YouTube URL or video ID (?v=…).' }, 400);

  try {
    const watch = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en`, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
        'accept-language': 'en-US,en;q=0.9',
      },
    });
    if (!watch.ok) return json({ error: `YouTube returned ${watch.status}.` }, 502);
    const html = await watch.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/s);
    const title = titleMatch
      ? titleMatch[1].replace(/ - YouTube\s*$/, '').trim()
      : `YouTube video ${id}`;

    const tracksMatch = html.match(/"captionTracks":(\[.*?\])(?=,")/s);
    if (!tracksMatch) {
      return json(
        { error: 'No captions found for this video (it may have captions disabled).' },
        404,
      );
    }
    const tracks = JSON.parse(tracksMatch[1]) as {
      baseUrl: string;
      languageCode: string;
      kind?: string;
    }[];
    if (!tracks.length) return json({ error: 'No caption tracks available.' }, 404);

    // Prefer manual English, then any English, then the first track.
    const track =
      tracks.find((t) => t.languageCode.startsWith('en') && t.kind !== 'asr') ??
      tracks.find((t) => t.languageCode.startsWith('en')) ??
      tracks[0];

    const capUrl = `${track.baseUrl.replace(/\\u0026/g, '&')}&fmt=json3`;
    const capRes = await fetch(capUrl);
    if (!capRes.ok) return json({ error: 'Could not fetch the caption track.' }, 502);
    const cap = (await capRes.json()) as {
      events?: { tStartMs: number; segs?: { utf8: string }[] }[];
    };

    const segments: Segment[] = (cap.events ?? [])
      .filter((e) => e.segs?.length)
      .map((e) => ({
        start: Math.round(e.tStartMs / 1000),
        text: e.segs!.map((s) => s.utf8).join('').replace(/\n/g, ' ').trim(),
      }))
      .filter((s) => s.text.length > 0);

    if (!segments.length) return json({ error: 'The caption track was empty.' }, 404);

    return json({
      id,
      title,
      language: track.languageCode,
      auto: track.kind === 'asr',
      segments,
    });
  } catch (err) {
    return json(
      { error: 'Could not read captions for this video right now. Please try again shortly.' },
      502,
    );
  }
};
