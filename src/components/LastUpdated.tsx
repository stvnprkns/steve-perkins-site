import React from 'react';

interface LastUpdatedProps {
  date: string;
  className?: string;
}

/**
 * LastUpdated component - Shows when content was last modified
 * Helps both users and search engines/LLMs understand content freshness
 */
export function LastUpdated({ date, className = '' }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <time 
      dateTime={date} 
      className={`text-sm text-gray-500 dark:text-gray-400 ${className}`} 
      aria-label={`Last updated on ${formattedDate}`}
    >
      Last updated: {formattedDate}
    </time>
  );
}
