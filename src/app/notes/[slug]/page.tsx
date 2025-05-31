'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Note } from '@/lib/server/markdown-utils';
import NoteClientPage from './NoteClientPage';

type NotePageParams = {
  slug: string | string[];
};

export default function NotePage() {
  const params = useParams<NotePageParams>();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.slug) {
      setError('Note slug is missing');
      setIsLoading(false);
      return;
    }
    
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    if (!slug) {
      setError('Note slug is missing');
      setIsLoading(false);
      return;
    }

    const fetchNote = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/notes/${slug}`);
        if (!res.ok) {
          throw new Error('Note not found');
        }
        const data = await res.json();
        setNote(data);
      } catch (err) {
        console.error('Error fetching note:', err);
        setError(err instanceof Error ? err.message : 'Failed to load note');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [params?.slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
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

  if (!note || !params?.slug) {
    notFound();
  }

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  return <NoteClientPage note={note} slug={slug} />;
}
