import { Note } from '@/lib/markdown';
import { getCategoryByKey } from '@/lib/categories';
import { FC } from 'react';
import Link from 'next/link';

// Helper function to convert newlines to paragraphs
const formatExcerpt = (text: string) => {
  return text
    .split('\n\n')
    .filter(Boolean)
    .map((paragraph, index) => (
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

export const NoteCard: FC<NoteCardProps> = ({ note, className = '', href = '#' }) => {
  const category = note.category ? getCategoryByKey(note.category) : null;
  
  const content = (
    <div className="relative group h-full">
      <div className="flex items-start justify-between gap-4 h-full">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-foreground">
            {note.title}
          </h3>
          {note.excerpt && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {note.excerpt}
            </p>
          )}
          {category && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 bg-muted/50 dark:bg-muted/20 rounded-full text-foreground/80">
                {note.emoji || note.icon || '📝'} {category.title}
              </span>
            </div>
          )}
        </div>
        <div className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
          {note.emoji || note.icon || '📝'}
        </div>
      </div>
    </div>
  );

  const cardContent = (
    <div className="h-full border border-purple-200 dark:border-purple-800/50 rounded-lg p-6 transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/30">
      {content}
    </div>
  );

  return (
    <div className={`h-full border border-purple-200 dark:border-purple-800/50 rounded-lg transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/30 ${className}`}>
      {href ? (
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default NoteCard;
