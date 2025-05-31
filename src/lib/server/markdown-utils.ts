import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getOrSet } from '../cache';

const NOTES_DIRECTORY = path.join(process.cwd(), 'content/notes');

// Cache TTL in seconds
const CACHE_TTL = process.env.NODE_ENV === 'production' ? 3600 : 60; // 1 hour in production, 1 min in dev

// Minimal note data for listings
export type MinimalNote = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  updated?: string;
  category?: string;
  emoji?: string;
  status?: string;
};

export interface Note {
  slug: string;
  title: string;
  body: string;
  category?: string;
  date?: string;
  updated?: string;
  tags?: string[];
  status?: string;
  icon?: string;
  excerpt?: string;
  emoji?: string;
  description?: string;
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    console.log(`Looking for note with slug: ${slug}`);
    const fullPath = path.join(NOTES_DIRECTORY, `${slug}.md`);
    console.log(`Looking for note at path: ${fullPath}`);
    
    try {
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const note = {
        ...data,
        slug,
        body: content,
      } as Note;
      
      console.log(`Successfully loaded note: ${slug}`);
      return note;
    } catch (fileError) {
      console.error(`Error reading file for note ${slug}:`, fileError);
      return null;
    }
  } catch (error) {
    console.error(`Unexpected error in getNoteBySlug for ${slug}:`, error);
    return null;
  }
}

// Get minimal note data for listings
function getMinimalNoteData(note: Note): MinimalNote {
  return {
    slug: note.slug,
    title: note.title,
    excerpt: note.excerpt || note.body.substring(0, 200) + (note.body.length > 200 ? '...' : ''),
    date: note.date,
    updated: note.updated,
    category: note.category,
    emoji: note.emoji,
    status: note.status
  };
}

export async function getAllNotes(): Promise<Note[]> {
  return getOrSet('all-notes', async () => {
    try {
      const filenames = await fs.readdir(NOTES_DIRECTORY);
      
      const notes = await Promise.all(
        filenames
          .filter(filename => filename.endsWith('.md'))
          .map(async (filename) => {
            const slug = filename.replace(/\.md$/, '');
            const filePath = path.join(NOTES_DIRECTORY, filename);
            try {
              const fileContents = await fs.readFile(filePath, 'utf8');
              const { data, content } = matter(fileContents);
              return { ...data, slug, body: content } as Note;
            } catch (error) {
              console.error(`Error reading note ${slug}:`, error);
              return null;
            }
          })
      );

      // Filter out any null values and sort by date (newest first)
      const validNotes = notes.filter((note): note is Note => note !== null);
      
      validNotes.sort((a, b) => {
        const dateA = a.updated || a.date || '1970-01-01';
        const dateB = b.updated || b.date || '1970-01-01';
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });
      
      return validNotes;
      
    } catch (error) {
      console.error('Error in getAllNotes:', error);
      return [];
    }
  }, CACHE_TTL);
}

// Get minimal notes data for listings
export async function getMinimalNotesData(): Promise<MinimalNote[]> {
  const notes = await getAllNotes();
  return notes.map(getMinimalNoteData);
}

export async function getAllCategoriesWithCounts() {
  try {
    const notes = await getAllNotes();
    const categoryCounts = notes.reduce((acc, note) => {
      if (!note.category) return acc;
      acc[note.category] = (acc[note.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
    }));
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}

export async function getNotesByCategory(category: string): Promise<Note[]> {
  try {
    const notes = await getAllNotes();
    return notes.filter((note) => note.category === category);
  } catch (error) {
    console.error(`Error getting notes for category ${category}:`, error);
    return [];
  }
}

// Get minimal notes by category
export async function getMinimalNotesByCategory(category: string): Promise<MinimalNote[]> {
  const notes = await getMinimalNotesData();
  return notes.filter(note => note.category === category);
}
