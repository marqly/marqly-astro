# Marqly source log — template & guide

A one-page log for every source behind a story, brief, or piece. One row per
source. The point is not tidiness — it is that on deadline (or at fact-check)
you can answer *"where did this claim come from, exactly?"* in seconds.

## The fields

| Field | Rule |
|---|---|
| claim_or_intended_use | What you plan to use the source for. Write it before the quote, not after. |
| source_title / url | As the page itself shows them. Keep the original URL — clean it separately. |
| publisher_or_author | Who is responsible for the claim (person or org). |
| published_date_verified | Only if you saw it on the page. Otherwise leave blank — blank beats wrong. |
| accessed_date | When you read it. Sources change. |
| exact_quote | Verbatim, with punctuation. Paraphrases go in context_note, labelled as paraphrase. |
| locator | Page number, paragraph, or video timestamp. The thing you'll thank yourself for at 6 pm. |
| verification_status | unverified → seen → cross-checked. Never mark "verified" from a summary or an AI output alone — open the source. |
| draft_use | Where it lands in the draft (para number, scene, argument). |

## Worked example

Row 1 in the CSV is a real, live source — a Pew Research Center short read on
AI summaries and click-through — filled in the way you'd fill it mid-research.
Note what the example does *not* do: it doesn't invent an author name, and it
marks the quote as headline-only, because the body statistics hadn't been read
yet. Unknown stays unknown.

## Bring it into Marqly

1. Save each source into a board named for the story (`/story-name`) as you go —
   one click from the browser toolbar, AI tags and summary land with it (Pro).
2. Before you file the piece, run the board's links through the
   [dead-link checker](/tools/dead-link-checker) — a source that 404s after
   publication is a correction waiting to happen.
3. Paste tracking-parameter links through the
   [URL cleaner](/tools/url-cleaner) before you log them so the same source
   doesn't appear twice.

## Honest limits

This log is a discipline, not a fact-checker. It records what *you* verified;
it cannot verify for you. For newsroom-grade workflows (consent, embargo,
legal hold), use your newsroom's system — this is the personal layer.

## Further reading (primary sources)

- GIJN, [Online research tools](https://gijn.org/resource/online-research-tools/)
- GIJN, [New tools to organize your workspace and enhance digital reporting](https://gijn.org/stories/new-tools-to-organize-your-workspace-and-enhance-digital-reporting/)
- S. White, [Keeping Found Things Found: The Study of Personal Information](https://www.microsoft.com/en-us/research/publication/keeping-found-things-found-web/) — why re-finding is the real job.
