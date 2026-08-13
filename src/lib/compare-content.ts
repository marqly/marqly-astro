import type { Competitor } from './competitors';
import { FEATURE_LABELS, type FeatureKey } from './features';
import { PAIR_TIER } from './competitors';

/** Mid-sentence form of a feature label: lowercase the lead word unless it's a proper noun/acronym. */
function naturalize(label: string): string {
  return /^(AI|YouTube|iOS|Pocket|Android|API)\b/.test(label)
    ? label
    : label.charAt(0).toLowerCase() + label.slice(1);
}

/** Feature labels Marqly has that `other` lacks — the honest differentiator list. */
export function marqlyEdges(marqly: Competitor, other: Competitor, limit = 3): string[] {
  return (Object.keys(FEATURE_LABELS) as FeatureKey[])
    .filter((k) => marqly.features[k] && !other.features[k])
    .slice(0, limit)
    .map((k) => naturalize(FEATURE_LABELS[k]));
}

/** Feature labels `other` has that Marqly lacks — shown just as honestly. */
export function otherEdges(marqly: Competitor, other: Competitor, limit = 3): string[] {
  return (Object.keys(FEATURE_LABELS) as FeatureKey[])
    .filter((k) => !marqly.features[k] && other.features[k])
    .slice(0, limit)
    .map((k) => naturalize(FEATURE_LABELS[k]));
}

export function pricingSentence(c: Competitor): string {
  if (c.status === 'shutdown') {
    return `${c.name} has shut down and no longer accepts new users. ${c.shutdownNote ?? ''}`.trim();
  }
  const parts: string[] = [];
  if (c.pricing.free) parts.push(`${c.name} has a free tier`);
  if (c.pricing.paid) {
    parts.push(
      parts.length ? `paid plans are ${c.pricing.paid}` : `${c.name} costs ${c.pricing.paid}`,
    );
  }
  if (!parts.length) parts.push(`${c.name}'s current pricing is listed on its website`);
  let s = parts.join('; ') + '.';
  if (c.pricing.trial) s += ` ${c.pricing.trial}.`;
  if (c.pricing.notes) s += ` ${c.pricing.notes}`;
  return s;
}

export function switchSentence(c: Competitor): string {
  if (c.slug === 'pocket' || c.features.importPocket === undefined) {
    // fallthrough below handles specifics
  }
  if (c.slug === 'pocket') {
    return 'Yes. Marqly imports Pocket export files directly — upload the export and every save is re-tagged by AI and becomes searchable by meaning.';
  }
  if (c.slug === 'raindrop') {
    return 'Yes. Marqly imports Raindrop.io collections directly, and AI re-tags everything on the way in so your saves become searchable by meaning.';
  }
  return `Yes. Export your data from ${c.name} (most tools export standard bookmark HTML or CSV), then import the file into Marqly — AI tags everything automatically and semantic search works across all of it.`;
}

export function aiFeaturesSentence(c: Competitor): string {
  const has: string[] = [];
  if (c.features.aiAutoTagging) has.push('AI tagging');
  if (c.features.aiSummaries) has.push('AI summaries');
  if (c.features.semanticSearch) has.push('semantic search');
  if (c.features.chatWithSaves) has.push('chat with saves');
  if (has.length === 0) {
    return `${c.name} does not offer AI organization features — saving, tagging, and finding content is manual. That gap is exactly what AI-first tools like Marqly automate.`;
  }
  return `${c.name} offers ${has.join(', ')}. Marqly covers the full AI layer — auto-tagging, summaries, semantic search, and chat with your saves — plus YouTube summaries, transcripts, and video chat on the watch page.`;
}

/** Generated FAQ set for Marqly-vs-X pages (all data-derived, no hand-waving). */
export function marqlyPairFaqs(marqly: Competitor, b: Competitor): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];

  const edges = marqlyEdges(marqly, b);
  const bEdges = otherEdges(marqly, b);
  faqs.push({
    q: `Which is better, Marqly or ${b.name}?`,
    a:
      `It depends on the job. ${b.name} is a better fit if you need ${
        bEdges.length ? bEdges.join(', ') : b.bestFor.toLowerCase().replace(/\.$/, '')
      }. Marqly wins when finding saves again matters most: it adds ${
        edges.length ? edges.join(', ') : 'an AI layer'
      } on top of standard bookmarking, so you can retrieve any save by describing it.`,
  });

  if (b.status === 'shutdown') {
    faqs.push({
      q: `What happened to ${b.name}?`,
      a: b.shutdownNote ?? `${b.name} has been discontinued.`,
    });
  } else {
    faqs.push({ q: `Is ${b.name} free?`, a: pricingSentence(b) });
  }

  faqs.push({ q: `Can I switch from ${b.name} to Marqly?`, a: switchSentence(b) });
  faqs.push({ q: `Does ${b.name} have AI search?`, a: aiFeaturesSentence(b) });
  faqs.push({
    q: 'Is Marqly free?',
    a: 'Yes — Marqly has a free tier with no card required. Pro is $72/year (about $6/month billed annually) or $9/month, with a 3-day free trial. Pro unlocks chat with your saves and chat with YouTube videos.',
  });

  return faqs;
}

/**
 * Ranked alternatives for /alternatives/<subject>: Marqly first, then the five
 * most prominent tools in the same (then adjacent) category. Deterministic.
 */
export function rankAlternatives(
  subject: Competitor,
  all: Competitor[],
  marqly: Competitor,
): Competitor[] {
  const prominence = (c: Competitor) => {
    const i = PAIR_TIER.indexOf(c.slug);
    return i === -1 ? PAIR_TIER.length + 1 : i;
  };
  const candidates = all
    .filter((c) => c.slug !== subject.slug && c.status === 'active')
    .sort((x, y) => {
      const sameX = x.category === subject.category ? 0 : 1;
      const sameY = y.category === subject.category ? 0 : 1;
      if (sameX !== sameY) return sameX - sameY;
      return prominence(x) - prominence(y);
    });
  return [marqly, ...candidates.slice(0, 5)];
}
