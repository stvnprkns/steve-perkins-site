import { Fragment } from 'react';
import Link from 'next/link';
import { getAllCategoriesWithCounts } from '@/lib/notes';
import Section from '@/components/layout/Section';

export default function CategoriesPage() {
  const categories = getAllCategoriesWithCounts();
  
  // Sort categories by note count (descending)
  const sortedCategories = [...categories].sort((a, b) => b.count - a.count);

  return (
    <>
    <Section variant="narrow">
      <header className="mb-12">
        <h1 className="text-3xl font-serif font-bold mb-4">Explore by Category</h1>
        <p className="text-muted-foreground">
          Browse my thoughts and notes organized by topic. Each category represents a theme I frequently explore in my work.
        </p>
      </header>
    </Section>
    
    <Section variant="wide">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCategories.map(({ category, count, data }) => (
          <Link 
            key={category}
            href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="block p-6 rounded-lg border hover:shadow-sm transition hover:bg-muted/20"
          >
            <div className="text-2xl mb-3">{data.emoji}</div>
            <h2 className="font-semibold text-lg mb-1">{data.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{data.subtitle}</p>
            <p className="text-xs text-muted-foreground mt-3">
              {count} {count === 1 ? 'note' : 'notes'}
            </p>
          </Link>
        ))}
      </div>
    </Section>
    </>
  );
}
