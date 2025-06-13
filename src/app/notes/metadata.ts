import { generateProjectMetadata } from '@/components/ProjectMetadata';

export const metadata = generateProjectMetadata({
  title: 'Notes & Thoughts',
  description: 'Personal notes, thoughts, and articles on design, technology, and leadership by Steve Perkins.',
  path: '/notes',
  coverImage: '/images/notes-preview.jpg',
  modifiedTime: '2025-06-12',
  tags: ['Design Thinking', 'UX Articles', 'Product Design', 'Leadership', 'Blog']
});
