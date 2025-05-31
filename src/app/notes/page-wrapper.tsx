import { notFound } from 'next/navigation';
import { getMinimalNotesData, getAllCategoriesWithCounts } from '@/lib/server/markdown-utils';
import { Note } from '@/lib/markdown';
import NotesPageClient from './page-client';

export const revalidate = 3600; // Revalidate at most every hour

export default async function NotesPage() {
  try {
    const [minimalNotes, categories] = await Promise.all([
      getMinimalNotesData(),
      getAllCategoriesWithCounts()
    ]);
    
    // Convert MinimalNote to Note type
    const notes: Note[] = minimalNotes.map(note => ({
      ...note,
      body: '', // Required by Note type but not used in the list view
      slug: note.slug || '',
      title: note.title || 'Untitled',
      date: note.date || new Date().toISOString(),
      category: note.category || '',
      excerpt: note.excerpt || ''
    }));
    
    return <NotesPageClient notes={notes} categories={categories} />;
  } catch (error) {
    console.error('Error fetching notes:', error);
    notFound();
  }
}
