import { Note } from '@/lib/markdown';
import { getCategoryByKey } from '@/lib/categories';
import { FC } from 'react';
import Link from 'next/link';
import { ExtendedCard } from '../ui/ExtendedCard';
import UnderlineLink from '../UnderlineLink';

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
  const category = getCategoryByKey(note.category);
  
  const content = (
    <div className="relative group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <UnderlineLink href={href}>
            <h3 className="text-lg font-medium">
              {note.title}
            </h3>
          </UnderlineLink>
          {note.excerpt && (
            <p className="text-sm text-muted-foreground mb-1 line-clamp-2">
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

  return (
    <ExtendedCard className={className}>
      {href ? (
        <Link href={href} className="block p-6">
          {content}
        </Link>
      ) : (
        <div className="p-6">
          {content}
        </div>
      )}
    </ExtendedCard>
  );
};

export default NoteCard;
