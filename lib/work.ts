export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: number;
  role: string;
  heroVideo: string;
  poster: string;
  excerpt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rego-brix',
    title: 'Rego-Brix',
    client: 'Boxabl',
    year: 2026,
    role: 'Creative Direction, Script, AI Video Production',
    heroVideo: '/work/rego-brix/hero.mp4',
    poster: '/work/rego-brix/poster.jpg',
    excerpt:
      'A fictional lunar adaptation of Boxabl\'s flat-pack housing — pitched as if it were real.',
  },
  {
    slug: 'placeholder-two',
    title: 'Untitled Campaign',
    client: 'Confidential DTC',
    year: 2026,
    role: 'Creative Direction',
    heroVideo: '/work/placeholder-two/hero.mp4',
    poster: '/work/placeholder-two/poster.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    slug: 'placeholder-three',
    title: 'Series of Spots',
    client: 'B2B SaaS',
    year: 2026,
    role: 'Creative Direction',
    heroVideo: '/work/placeholder-three/hero.mp4',
    poster: '/work/placeholder-three/poster.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
