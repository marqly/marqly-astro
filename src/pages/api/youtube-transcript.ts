import type { APIRoute } from 'astro';
import { extractYouTubeId, json, originAllowed } from '../../lib/api-utils';

export const prerender = false;

interface Segment {
  start: number;
  text: string;
}

const ANDROID_UA = 'com.google.android.youtube/20.10.38 (Linux; U; Android 11) gzip';

function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

/**
 * Free-tool endpoint: fetches a video's caption track via the InnerTube
 * player API (ANDROID client). The classic watch-page caption URLs return
 * empty bodies since YouTube's proof-of-origin lockdown; the ANDROID client
 * track URLs still serve timedtext XML (format 3), which we parse here.
 */
export const GET: APIRoute = async ({ request, url }) => {
  if (!originAllowed(request)) return json({ error: 'Forbidden' }, 403);

  const id = extractYouTubeId(url.searchParams.get('v') ?? '');
  if (!id) return json({ error: 'Provide a valid YouTube URL or video ID (?v=…).' }, 400);

  try {
    const player = await fetch('https://www.youtube.com/youtubei/v1/player', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': ANDROID_UA },
      body: JSON.stringify({
        context: {
          client: { clientName: 'ANDROID', clientVersion: '20.10.38', androidSdkVersion: 30, hl: 'en' },
        },
        videoId: id,
      }),
    });
    if (!player.ok) return json({ error: `YouTube returned ${player.status}.` }, 502);
    const data = (await player.json()) as {
      videoDetails?: { title?: string };
      captions?: {
        playerCaptionsTracklistRenderer?: {
          captionTracks?: { baseUrl: string; languageCode: string; kind?: string }[];
        };
      };
    };

    const tracks = data.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
    if (!tracks.length) {
      return json(
        { error: 'No captions found for this video (it may have captions disabled).' },
        404,
      );
    }

    // Prefer manual English, then any English, then the first track.
    const track =
      tracks.find((t) => t.languageCode.startsWith('en') && t.kind !== 'asr') ??
      tracks.find((t) => t.languageCode.startsWith('en')) ??
      tracks[0];

    const capRes = await fetch(track.baseUrl, { headers: { 'user-agent': ANDROID_UA } });
    if (!capRes.ok) return json({ error: 'Could not fetch the caption track.' }, 502);
    const xml = await capRes.text();
    if (!xml.includes('<timedtext')) {
      return json({ error: 'The caption track came back in an unexpected format.' }, 502);
    }

    const segments: Segment[] = [];
    for (const m of xml.matchAll(/<p\b[^>]*\bt="(\d+)"[^>]*>([\s\S]*?)<\/p>/g)) {
      const text = decodeEntities(m[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
      if (text) segments.push({ start: Math.round(Number(m[1]) / 1000), text });
    }
    if (!segments.length) return json({ error: 'The caption track was empty.' }, 404);

    return json({
      id,
      title: data.videoDetails?.title ?? `YouTube video ${id}`,
      language: track.languageCode,
      auto: track.kind === 'asr',
      segments,
    });
  } catch {
    return json(
      { error: 'Could not read captions for this video right now. Please try again shortly.' },
      502,
    );
  }
};
