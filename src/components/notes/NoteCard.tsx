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
  const { category, formattedExcerpt, emoji } = useMemo(() => ({
    category: note.category ? getCategoryByKey(note.category) : null,
    formattedExcerpt: note.excerpt ? formatExcerpt(note.excerpt) : null,
    emoji: note.emoji || note.icon || '📝'
  }), [note.category, note.excerpt, note.emoji, note.icon]);
  
  const content = useMemo(() => (
    <div className="relative group h-full">
      <div className="flex items-start justify-between gap-4 h-full">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-foreground">
            {note.title}
          </h3>
          {(note.description || formattedExcerpt) && (
            <div className="mt-2 text-sm text-muted-foreground">
              {note.description || formattedExcerpt}
            </div>
          )}
          {category && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 bg-muted/50 dark:bg-muted/20 rounded-full text-foreground/80">
                {emoji} {category.title}
              </span>
            </div>
          )}
        </div>
        <div className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
          {emoji}
        </div>
      </div>
    </div>
  ), [note.title, formattedExcerpt, category, emoji]);

  const cardContent = (
    <div className="h-full border border-purple-200 dark:border-purple-800/50 rounded-lg p-6 transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/30">
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
