// Re-export the Note type from server utilities
export type { Note } from './server/markdown-utils';

// This file contains client-side utilities for fetching data from the API

// Re-export the Note type for backward compatibility
type Note = import('./server/markdown-utils').Note;

async function fetchFromAPI(endpoint: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    // For Next.js App Router, the API routes are under /api/ by default
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || 
        errorData.error || 
        `API request failed with status ${response.status}: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    return await fetchFromAPI(`notes/${slug}`);
  } catch (error) {
    console.error(`Error fetching note ${slug}:`, error);
    return null;
  }
}

export async function getAllNotes(): Promise<Note[]> {
  try {
    return await fetchFromAPI('notes');
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
}

export async function getAllCategoriesWithCounts() {
  try {
    return await fetchFromAPI('categories');
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getNotesByCategory(category: string): Promise<Note[]> {
  try {
    return await fetchFromAPI(`categories/${encodeURIComponent(category)}`);
  } catch (error) {
    console.error(`Error fetching notes for category ${category}:`, error);
    return [];
  }
}
