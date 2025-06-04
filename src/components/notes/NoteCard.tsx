import { Note } from '@/lib/markdown';
import { getCategoryByKey } from '@/lib/categories';
import { FC, useMemo } from 'react';
import Link from 'next/link';

// Helper function to convert newlines to paragraphs
const formatExcerpt = (text: string) => {
  if (!text) return null;
  
  const paragraphs = text.split('\n\n').filter(Boolean);
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="text-sm text-muted-foreground mb-1 line-clamp-2">
      {paragraph}
    </p>
  ));
};

interface NoteCardProps {
  note: Note;
  className?: string;
  href?: string;
}

const NoteCard: FC<NoteCardProps> = ({ note, className = '', href = '#' }) => {
  // Memoize category lookup and excerpt formatting
  const { category, formattedDescription, formattedExcerpt, emoji } = useMemo(() => ({
    category: note.category ? getCategoryByKey(note.category) : null,
    formattedDescription: note.description ? formatExcerpt(note.description) : null,
    formattedExcerpt: note.excerpt ? formatExcerpt(note.excerpt) : null,
    emoji: note.emoji || note.icon || '📝'
  }), [note.category, note.description, note.excerpt, note.emoji, note.icon]);
  
  const content = useMemo(() => (
    <div className="relative group h-full">
      <div className="flex items-start justify-between gap-4 h-full">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-foreground dark:text-white">
            {note.title}
          </h3>
          {formattedDescription || formattedExcerpt ? (
            <div className="mt-2 dark:text-gray-300">
              {formattedDescription || formattedExcerpt}
            </div>
          ) : null}
          {category && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 bg-muted/50 dark:bg-purple-900/40 dark:text-purple-200 rounded-full text-foreground/80">
                {emoji} {category.title}
              </span>
            </div>
          )}
        </div>
        <div className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity dark:text-purple-300">
          {emoji}
        </div>
      </div>
    </div>
  ), [note.title, formattedExcerpt, category, emoji]);

  const cardContent = (
    <div className={`h-full rounded-xl p-6 transition-all duration-300 
      border border-purple-200 hover:bg-purple-50 
      dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 
      dark:border-purple-900/50 dark:hover:border-purple-700/50
      dark:shadow-lg dark:shadow-purple-900/10
      hover:shadow-md dark:hover:shadow-purple-900/30`}>
      {content}
    </div>
  );

  return href ? (
    <Link href={href} className={`block h-full ${className}`}>
      {cardContent}
    </Link>
  ) : (
    <div className={`h-full ${className}`}>
      {cardContent}
    </div>
  );
};

export default NoteCard;
