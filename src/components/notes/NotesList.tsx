'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Note } from '@/lib/markdown';
import { NoteSkeleton } from './NoteSkeleton';

interface CategoryCount {
  category: string;
  count: number;
  title?: string;
  emoji?: string;
  description?: string;
}

interface NotesListProps {
  notes: Note[];
  selectedCategory?: string;
  categories?: CategoryCount[];
  searchQuery?: string;
  categoryInfo?: {
    title: string;
    description: string;
  } | null;
}

export default function NotesList({
  notes,
  selectedCategory,
  categories = [],
  searchQuery = '',
  categoryInfo = null,
}: NotesListProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
      <div className="text-center py-16">
        <div className="text-4xl mb-4">🤷</div>
        <h2 className="text-xl font-medium mb-2">Nothing here yet.</h2>
        <p className="text-gray-600 mt-1">
          I'm probably overthinking the first sentence. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {validNotes.map((note) => {
          const noteDate = note.updated || note.date;
          const formattedDate = noteDate 
            ? new Date(noteDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short'
              })
            : '';
            
          return (
            <Link 
              key={note.slug} 
              href={`/notes/${note.slug}`}
              className="group block p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-full no-underline"
            >
              <div className="space-y-4">
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {note.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between pt-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 mt-4">
                  <span>{formattedDate}</span>
                  {note.status && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {note.status}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
