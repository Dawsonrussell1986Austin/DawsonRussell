export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: number;
  role: string;
  heroVideo: string;
  poster: string;
  excerpt: string;
  /** Mux playback ID — if set, used in the work grid instead of heroVideo. */
  muxPlaybackId?: string;
  /** If true, the grid card autoplays muted/looped instead of waiting for hover. */
  autoplay?: boolean;
  /** If true, the case study page shows a "Coming soon / In Production" state. */
  inProduction?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rego-brix',
    title: 'Live on it with Rego-Brix.',
    client: 'Boxabl',
    year: 2026,
    role: 'Creative Direction, Script, AI Video Production',
    heroVideo: '',
    poster: '',
    muxPlaybackId: 'yR01QTpUq2jb01RycmhG36oZWAy6lhOTY00Cbk7iB7Yics',
    autoplay: true,
    excerpt:
      "A fictional lunar adaptation of Boxabl's flat-pack housing — pitched as if it were real.",
  },
  {
    slug: 'soccer-com',
    title: 'The pitch is coming for you.',
    client: 'Soccer.com',
    year: 2026,
    role: 'Creative Direction, AI Video Production',
    heroVideo: '',
    poster: '',
    muxPlaybackId: '5MKxPgAnQSci00JCP1upQJYehYCsdQ6LHzD8yVMcaAXM',
    autoplay: true,
    inProduction: true,
    excerpt: 'A cinematic brand spot for Soccer.com.',
  },
  {
    slug: 'housing-market',
    title: 'The Housing Market is F*****',
    client: 'Boxabl',
    year: 2025,
    role: 'Creative Direction, Script, AI Video Production',
    heroVideo: '',
    poster: '',
    muxPlaybackId: 'XQWSNlmZCcmYx8sfdp9t3vVdhScJoyVHER8T36h6sQk',
    autoplay: true,
    excerpt: 'A blunt take on the housing crisis — and Boxabl as the answer.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return null;
  return caseStudies[(idx + 1) % caseStudies.length];
}
