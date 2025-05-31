'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";

interface Note {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  category?: string;
  emoji?: string;
  icon?: string;
  status?: string;
  // Add other note properties as needed
}

interface CategoryCount {
  category: string;
  count: number;
  description?: string;
  title?: string;
}

export default function NotesPage() {
  const searchParams = useSearchParams();
  const [notes, setNotes] = useState<Note[]>([]);
  const [categories, setCategories] = useState<CategoryCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get category from URL search params
  const selectedCategory = searchParams?.get('category') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch notes and categories in parallel
        const [notesRes, categoriesRes] = await Promise.all([
          fetch('/api/notes').then(res => res.json()),
          fetch('/api/categories').then(res => res.json())
        ]);
        
        setNotes(notesRes);
        setCategories(categoriesRes);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load notes. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter notes by category if one is selected
  const filteredNotes = selectedCategory
    ? notes.filter((note) => 
        note.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : notes;

  // Sort notes by date (newest first)
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    const dateA = a.updated || a.date || '1970-01-01';
    const dateB = b.updated || b.date || '1970-01-01';
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  // Get category info
  const getCategoryInfo = (categoryKey: string): { title: string; description: string } => {
    if (!categoryKey) return { title: 'Uncategorized', description: '' };
    
    // If we have category data from the API, use it
    const categoryData = categories.find((cat: CategoryCount) => 
      cat.category.toLowerCase() === categoryKey.toLowerCase()
    );
    
    return {
      title: categoryData?.title || categoryKey,
      description: categoryData?.description || ''
    };
  };

  return (
    <div className="w-full">
      <PageHero
        title="Notes"
        subtitle={
          "This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.\n\nSometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud.\n\nIf you're working through the same kinds of problems — or come at them from the other side — I'd love to hear from you."
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))
        }
        variant="narrow"
        padding="lg"
      />
      
      {/* Category filter in narrow section */}
      <Section variant="narrow" className="py-4 bg-muted/10" noDivider>
        <div className="mb-8">
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            Browse by category
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/notes"
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background no-underline
                ${
                  !selectedCategory
                    ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                    : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                }`}
              tabIndex={0}
            >
              All
            </Link>
            {categories.map(({ category, count }: { category: string; count: number }) => {
              const categoryInfo = getCategoryInfo(category);
              return (
                <Link
                  key={category}
                  href={`/notes?category=${encodeURIComponent(category)}`}
                  className={`px-3 py-1.5 text-sm rounded-full border flex items-center gap-1.5 transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background no-underline
                    ${
                      selectedCategory === category
                        ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                        : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                    }`}
                  tabIndex={0}
                >
                  {categoryInfo.title}
                  <span className="text-xs opacity-70">{count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
      
      {/* Main content container */}
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-10">
        {/* Category header */}
        {selectedCategory && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              {getCategoryInfo(selectedCategory).title}
            </h2>
            <p className="text-muted-foreground">
              {getCategoryInfo(selectedCategory).description}
            </p>
          </div>
        )}

        {/* Notes grid */}
        {isLoading ? (
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3 mb-8"></div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-48 bg-gray-100 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          </div>
        ) : sortedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNotes.map((note) => {
              const categoryInfo = note.category ? getCategoryInfo(note.category) : null;
              return (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  className="group block no-underline"
                >
                  <div className="h-full border rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:border-muted-foreground/20 bg-background hover:bg-muted/50">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-2xl">{note.emoji || note.icon || ''}</span>
                      {categoryInfo && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full no-underline">
                          {categoryInfo.title}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-foreground">
                      {note.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="no-underline">{note.date}</span>
                      {note.status && (
                        <span className="px-2 py-0.5 bg-muted rounded-full no-underline">
                          {note.status}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No notes found{selectedCategory ? ' in this category' : ''}.</p>
            <Link href="/notes" className="mt-4 inline-block text-sm text-foreground hover:underline">
              View all notes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
