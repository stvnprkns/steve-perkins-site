"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import { motion } from 'framer-motion';
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";
import AnimatedNotesList from '@/components/notes/AnimatedNotesList';
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="w-full">
      <PageHero
        title={
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            Notes
          </motion.div>
        }
        subtitle={
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-4"
          >
            {"Loose threads. Early thoughts. Things I'm still figuring out.\n\nThis is where I stash the ideas that aren't ready for a case study but won't leave me alone. Some are half-right. Some are just half.\n\nNo polish, no conclusions — just trying to get a little closer to the truth by writing it down."
              .split('\n\n')
              .map((paragraph, index) => (
                <motion.p key={index} variants={item} className="mb-2">
                  {paragraph}
                </motion.p>
              ))}
            <motion.p variants={item} className="mt-4">
              For more long-form writing, check out my{' '}
              <a 
                href="https://steveperk.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                newsletter
              </a>.
            </motion.p>
          </motion.div>
        }
      >
        {/* Search bar and category tabs will go here */}
      </PageHero>

      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full mb-8 max-w-3xl mx-auto">
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
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/notes"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 no-underline ${
                  !selectedCategory
                    ? 'bg-gray-900 dark:bg-purple-900 text-white shadow-sm hover:bg-gray-800 dark:hover:bg-purple-800'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
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
                        ? 'bg-gray-900 dark:bg-purple-900 text-white shadow-sm hover:bg-gray-800 dark:hover:bg-purple-800 scale-105'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-[1.02]'
                    }`}
                  >
                    <span>{category.emoji || ''}</span>
                    <span>{category.title || category.category}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <AnimatedNotesList 
            notes={filteredNotes} 
            selectedCategory={selectedCategory}
            categories={categories}
            searchQuery={searchQuery}
            categoryInfo={selectedCategory ? selectedCategoryInfo : null}
          />
        </div>
      </div>
    </div>
  );
}
