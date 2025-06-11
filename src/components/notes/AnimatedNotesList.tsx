'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Note } from '@/lib/markdown';
import { NoteSkeleton } from './NoteSkeleton';

interface CategoryCount {
  category: string;
  count: number;
  title?: string;
  emoji?: string;
  description?: string;
}

interface AnimatedNotesListProps {
  notes: Note[];
  selectedCategory?: string;
  categories?: CategoryCount[];
  searchQuery?: string;
  categoryInfo?: {
    title: string;
    description: string;
  } | null;
}
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function AnimatedNotesList({
  notes,
  selectedCategory,
  categories = [],
  searchQuery = '',
  categoryInfo = null,
}: AnimatedNotesListProps) {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Small delay to ensure the parent component has rendered
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 space-y-8">
          {[1, 2, 3].map((i) => (
            <NoteSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Filter out any invalid notes that might be missing required fields
  const validNotes = notes.filter(note => note && note.slug && note.title);

  if (validNotes.length === 0) {
    return (
      <motion.div 
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="text-center py-16"
      >
        <div className="text-4xl mb-4">🤷</div>
        <h2 className="text-xl font-medium mb-2">Nothing here yet.</h2>
        <p className="text-gray-600 mt-1">
          I'm probably overthinking the first sentence. Check back soon.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
        <AnimatePresence>
          {validNotes.map((note, index) => {
            const noteDate = note.updated || note.date;
            const formattedDate = noteDate 
              ? new Date(noteDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short'
                })
              : '';
                
            return (
              <motion.div
                key={note.slug}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{
                  delay: 0.1 * (index % 4) + 0.2 * Math.floor(index / 4),
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="h-full"
              >
                <a 
                  href={`/notes/${note.slug}`}
                  className="group block p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-full no-underline flex flex-col"
                >
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {note.emoji && (
                        <span className="text-lg" role="img" aria-label="">
                          {note.emoji}
                        </span>
                      )}
                      {note.category && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {note.category}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      {note.title}
                    </h3>
                    
                    {note.excerpt && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {note.excerpt}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formattedDate}
                      </span>
                      <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                        Read more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
