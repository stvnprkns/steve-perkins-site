"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";
import NotesList from '@/components/notes/NotesList';
import { Note } from '@/lib/markdown';

interface CategoryCount {
  category: string;
  count: number;
  title?: string;
  emoji?: string;
  description?: string;
}

type NotesPageProps = {
  notes: Note[];
  categories: CategoryCount[];
};

export default function NotesPageClient({ notes, categories }: NotesPageProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get('category') || '';
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('q') || '');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const router = useRouter();
  const pathname = usePathname();

  // Handle search input change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearchQuery);
      
      // Update URL with search query
      const params = new URLSearchParams(searchParams?.toString());
      if (localSearchQuery) {
        params.set('q', localSearchQuery);
      } else {
        params.delete('q');
      }
      
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);
    
    return () => clearTimeout(timer);
  }, [localSearchQuery, router, pathname, searchParams]);

  // Get category info
  const getCategoryInfo = (categoryKey: string): { title: string; description: string } => {
    if (!categoryKey) return { title: 'Uncategorized', description: '' };
    
    const categoryData = categories.find((cat) => 
      cat.category.toLowerCase() === categoryKey.toLowerCase()
    );
    
    return {
      title: categoryData?.title || categoryKey,
      description: categoryData?.description || ''
    };
  };

  const selectedCategoryInfo = selectedCategory ? getCategoryInfo(selectedCategory) : {
    title: 'All Notes',
    description: "This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity."
  };

  // Filter notes by category and search query
  const filteredNotes = notes.filter((note) => {
    // Filter by category
    const matchesCategory = !selectedCategory || 
      note.category?.toLowerCase() === selectedCategory.toLowerCase();
    
    // Filter by search query
    const matchesSearch = !searchQuery || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.excerpt && note.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (note.body && note.body.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      <PageHero
        title="Notes"
        subtitle={
          "This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.\n\nSometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud."
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))
        }
        variant="narrow"
        padding="default"
      />

      <Section variant="narrow" className="space-y-16">
        {/* Search and Filters */}
        <div className="space-y-6">
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search notes..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link
              href="/notes"
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 no-underline ${
                !selectedCategory
                  ? 'bg-gray-900 text-white shadow-sm hover:bg-gray-800'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              All
            </Link>
            {categories.map((category) => {
              const isActive = selectedCategory.toLowerCase() === category.category.toLowerCase();
              return (
                <Link
                  key={category.category}
                  href={`/notes?category=${encodeURIComponent(category.category)}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center space-x-1 no-underline ${
                    isActive
                      ? 'bg-gray-900 text-white shadow-sm hover:bg-gray-800 scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.02]'
                  }`}
                >
                  <span>{category.emoji || ''}</span>
                  <span>{category.title || category.category}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Notes grid section */}
      <section className="w-full px-[80px] py-10">
        <div className="max-w-screen-2xl mx-auto">
          <NotesList 
            notes={filteredNotes}
            selectedCategory={selectedCategory}
            categories={categories}
            searchQuery={searchQuery}
            categoryInfo={selectedCategoryInfo}
          />
        </div>
      </section>
    </div>
  );
}
