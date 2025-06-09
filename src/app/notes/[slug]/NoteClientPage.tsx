'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { NoteSkeleton } from '@/components/notes/NoteSkeleton';
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import RelatedNotes from "@/components/notes/RelatedNotes";
import { Note } from "@/lib/markdown";
import { format } from 'date-fns';
import { PageTransition } from '@/components/animations/PageTransition';

interface NoteClientPageProps {
  note: Note | null;
  slug: string;
}

export default function NoteClientPage({ note: initialNote, slug }: NoteClientPageProps) {
  const [note, setNote] = useState<Note | null>(initialNote);
  const [isLoading, setIsLoading] = useState(!initialNote);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      if (initialNote) return; // Skip if we already have the note
      
      try {
        setIsLoading(true);
        const response = await fetch(`/api/notes/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }
        const data = await response.json();
        setNote(data);
      } catch (err) {
        console.error('Error fetching note:', err);
        setError('Failed to load note. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [slug, initialNote]);

  if (isLoading && !note) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <NoteSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-500">
        {error}
      </div>
    );
  }

  if (!note) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        Note not found
      </div>
    );
  }

  const status = note.status || "seedling";
  const emoji = note.emoji || "🌱";
  const date = note.date ? new Date(note.date) : null;
  const updated = note.updated ? new Date(note.updated) : null;
  const tags = note.tags || [];
  const category = note.category || '';

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'MMMM d, yyyy');
  };

  return (
    <div className="w-full">
      <PageTransition className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <PageTransition delay={0.1}>
          <Link
            href="/notes"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all notes
          </Link>
        </PageTransition>

        <PageTransition delay={0.2}>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {note.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
              {category && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">Category</span>
                    <span className="text-gray-500 capitalize">{category}</span>
                  </div>
                  <div className="hidden sm:block h-8 w-px bg-gray-300" />
                </div>
              )}
              
              {date && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">Created</span>
                    <span className="text-gray-500">{formatDate(date)}</span>
                  </div>
                  {(updated?.getTime() !== date?.getTime() || tags.length > 0) && (
                    <div className="hidden sm:block h-8 w-px bg-gray-300" />
                  )}
                </div>
              )}
              
              {updated && updated.getTime() !== date?.getTime() && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">Updated</span>
                    <span className="text-gray-500">{formatDate(updated)}</span>
                  </div>
                  {tags.length > 0 && <div className="hidden sm:block h-8 w-px bg-gray-300" />}
                </div>
              )}
              
              {tags.length > 0 && (
                <div className="w-full sm:flex-1 min-w-0 mt-2 sm:mt-0">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">Topics</span>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Link 
                          key={tag} 
                          href={`/notes/tag/${tag}`} 
                          className="text-gray-500 hover:underline whitespace-nowrap hover:text-foreground"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>
        </PageTransition>

        <PageTransition delay={0.3}>
          <div className="prose dark:prose-invert w-full max-w-none">
            <MarkdownRenderer content={note.body} />
          </div>
        </PageTransition>

        <PageTransition delay={0.4}>
          <div className="mt-12 pt-8 border-t border-border">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
              <span>{emoji}</span>
              <span className="capitalize">{status}</span>
            </div>
          </div>
        </PageTransition>
      </PageTransition>

      <PageTransition delay={0.5} className="w-full bg-muted/30 mt-0 pt-6 pb-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedNotes currentSlug={slug as string} />
        </div>
      </PageTransition>
    </div>
  );
}
