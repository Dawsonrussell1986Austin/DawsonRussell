import type { MetadataRoute } from 'next';
import { notes } from '@/lib/notes';
import { caseStudies } from '@/lib/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dawsonrussell.com';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...['studio','notes','privacy',...notes.map(n=>'notes/'+n.slug)].map(path=>({url: `${base}/${path}`, lastModified: now})),
    ...caseStudies.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
