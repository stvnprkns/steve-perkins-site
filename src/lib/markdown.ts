// Re-export the Note type from server utilities
export type { Note } from './server/markdown-utils';

// This file contains client-side utilities for fetching data from the API

// Re-export the Note type for backward compatibility
type Note = import('./server/markdown-utils').Note;

async function fetchFromAPI(endpoint: string) {
  try {
    // For client-side requests, use relative path to avoid CORS issues
    const isClient = typeof window !== 'undefined';
    const baseUrl = isClient ? '' : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    // Remove any leading slashes from the endpoint to avoid double slashes
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    
    const url = `${baseUrl}/api/${cleanEndpoint}`;
    console.log('Fetching from:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control to prevent stale data
      cache: 'no-store',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(
        errorData.message || 
        errorData.error || 
        `API request failed with status ${response.status}: ${response.statusText}`
      );
      console.error('API Error:', {
        url,
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      throw error;
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    // Return empty data instead of throwing to prevent UI from breaking
    if (endpoint.startsWith('notes')) {
      return [];
    }
    return null;
  }
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    // First try the direct note by slug endpoint
    const note = await fetchFromAPI(`notes/${slug}`);
    
    // If no note found, try fetching all notes and filtering client-side
    if (!note) {
      console.log(`Note not found at /api/notes/${slug}, trying fallback...`);
      const allNotes = await fetchFromAPI('notes');
      return allNotes.find((n: Note) => n.slug === slug) || null;
    }
    
    return note;
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
