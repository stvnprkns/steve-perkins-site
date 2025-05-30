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

export async function getAllNotes(): Promise<Note[]> {
  try {
    console.log(`Reading notes from directory: ${NOTES_DIRECTORY}`);
    const fileNames = await fs.readdir(NOTES_DIRECTORY);
    console.log(`Found ${fileNames.length} files in directory`);
    
    const mdFiles = fileNames.filter((fileName: string) => fileName.endsWith('.md'));
    console.log(`Found ${mdFiles.length} markdown files`);
    
    const notes = await Promise.all(
      mdFiles.map(async (fileName: string) => {
        const slug = fileName.replace(/\.md$/, '');
        console.log(`Processing file: ${fileName} (slug: ${slug})`);
        try {
          const note = await getNoteBySlug(slug);
          if (!note) {
            console.warn(`Failed to load note: ${slug}`);
            return null;
          }
          return note;
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      })
    );
    
    const validNotes = notes.filter(Boolean) as Note[];
    console.log(`Successfully loaded ${validNotes.length} valid notes`);
    return validNotes;
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
