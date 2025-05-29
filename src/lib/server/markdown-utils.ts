import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTES_DIRECTORY = path.join(process.cwd(), 'content/notes');

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
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    const fullPath = path.join(NOTES_DIRECTORY, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      slug,
      body: content,
    } as Note;
  } catch (error) {
    console.error(`Error reading note ${slug}:`, error);
    return null;
  }
}

export async function getAllNotes(): Promise<Note[]> {
  try {
    const fileNames = await fs.readdir(NOTES_DIRECTORY);
    const notes = await Promise.all(
      fileNames
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map(async (fileName: string) => {
          const slug = fileName.replace(/\.md$/, '');
          const note = await getNoteBySlug(slug);
          if (!note) throw new Error(`Failed to load note: ${slug}`);
          return note;
        })
    );
    return notes.filter(Boolean) as Note[];
  } catch (error) {
    console.error('Error reading notes directory:', error);
    return [];
  }
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
