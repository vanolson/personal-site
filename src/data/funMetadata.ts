export interface FunMetadata {
  title: string;
  subtitle: string;
  date: Date;
  slug: string; // Should not include 'fun/' prefix
}

export const funMetadata: FunMetadata[] = [
  {
    title: 'What if MLB moved back east?',
    subtitle: 'A not-too-likely alternate future',
    date: new Date('2023-09-01'),
    slug: 'eastward-contraction',
  },
  {
    title: 'Article 2',
    subtitle: 'This is the subtitle of the second article',
    date: new Date('2025-07-29'),
    slug: 'article-2',
  },
  {
    title: 'Article 3',
    subtitle: 'This is the subtitle of the third article',
    date: new Date('2025-07-30'),
    slug: 'article-3',
  },
];
