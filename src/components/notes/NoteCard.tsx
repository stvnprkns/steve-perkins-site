import { Note } from '@/lib/notes';
import { getCategoryByKey } from '@/lib/categories';

import { FC } from 'react';

interface NoteCardProps {
  note: Note;
  className?: string;
}

export const NoteCard: FC<NoteCardProps> = ({ note, className = '' }) => {
  const category = getCategoryByKey(note.category);
  
  return (
    <div className={`border rounded-lg p-6 hover:bg-muted/50 transition-colors ${className || ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">{note.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{note.excerpt || note.body.slice(0, 100)}</p>
          
          {category && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-muted rounded-full">
                {category.emoji} {category.title}
              </span>
            </div>
          )}
        </div>
        <div className="text-2xl">{note.emoji || note.icon}</div>
      </div>
    </div>
  );
};

export default NoteCard;
