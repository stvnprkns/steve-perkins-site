import { Note } from '@/lib/notes';
import { getCategoryByKey } from '@/lib/categories';
import { FC } from 'react';
import Link from 'next/link';
import { ExtendedCard } from '../ui/ExtendedCard';

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
          <h3 className="text-lg font-medium group-hover:text-foreground/80 transition-colors">
            {note.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {note.excerpt || note.body.slice(0, 120)}
          </p>
          
          {category && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 bg-muted/50 dark:bg-muted/20 rounded-full text-foreground/80">
                {category.emoji} {category.title}
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
