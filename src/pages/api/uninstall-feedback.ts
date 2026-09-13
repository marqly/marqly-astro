import type { APIRoute } from 'astro';

export const prerender = false;

interface UninstallPayload {
  source?: string;
  version?: string;
  browser?: string;
  daysActive?: number;
  sessionsSaved?: number;
  bookmarksSaved?: number;
  reason?: string;
  reasonId?: string;
  reasonDetails?: string;
  competitorSwitched?: string;
  feedback?: string;
  timestamp?: string;
}

export const POST: APIRoute = async ({ request }) => {
  let body: UninstallPayload = {};

  try {
    const raw = await request.text();
    if (raw && raw.trim().length > 0) {
      body = JSON.parse(raw);
    }
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid JSON payload' }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      }
    );
  }

  const reason = body.reason || body.reasonId || 'other_reason';
  const version = body.version || 'unknown';
  const browser = body.browser || 'unknown';
  const feedback = body.feedback || body.reasonDetails || '';
  const timestamp = body.timestamp || new Date().toISOString();

  // Structured logging for Cloudflare Worker telemetry / log streams
  console.log(
    `[UNINSTALL_FEEDBACK] ${JSON.stringify({
      event: 'extension_uninstalled',
      reason,
      competitor: body.competitorSwitched || null,
      feedbackLength: feedback.length,
      version,
      browser,
      daysActive: body.daysActive ?? null,
      sessionsSaved: body.sessionsSaved ?? null,
      bookmarksSaved: body.bookmarksSaved ?? null,
      timestamp,
    })}`
  );

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Feedback recorded successfully.',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
        'access-control-allow-origin': '*',
      },
    }
  );
};
