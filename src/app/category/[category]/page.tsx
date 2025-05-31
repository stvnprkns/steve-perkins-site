'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import NoteCard from '@/components/notes/NoteCard';

interface Note {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string; // Added missing required property
  // Add other note properties as needed
}

export default function CategoryPage() {
  const params = useParams();
  const [category, setCategory] = useState<{title: string; emoji: string; subtitle: string} | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.category) return;
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
        
        // Fetch category data
        const categoryRes = await fetch(`/api/category/${categorySlug}`);
        if (!categoryRes.ok) {
          throw new Error('Category not found');
        }
        const categoryData = await categoryRes.json();
        
        // Fetch notes for the category
        const notesRes = await fetch(`/api/notes?category=${encodeURIComponent(categoryData.title)}`);
        if (!notesRes.ok) {
          throw new Error('Failed to fetch notes');
        }
        const notesData = await notesRes.json();
        
        setCategory(categoryData);
        setNotes(notesData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">{category.emoji} {category.title}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{category.subtitle}</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} className="h-full" />
        ))}
      </div>
    </div>
  );
}
