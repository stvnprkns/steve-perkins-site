import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllCategoriesWithCounts, getNotesByCategory } from '@/lib/notes';
import { getCategoryByKey } from '@/lib/categories';
import NoteCard from '@/components/notes/NoteCard';
import Link from 'next/link';

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const categories = getAllCategoriesWithCounts();
  return categories.map(({ category }) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryByKey(params.slug.replace(/-/g, ' '));
  if (!category) return {};
  
  return {
    title: `${category.title} | Steve Perkins`,
    description: category.subtitle,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryByKey(params.slug.replace(/-/g, ' '));
  
  if (!category) {
    notFound();
  }
  
  const notes = getNotesByCategory(category.title);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">{category.emoji} {category.title}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{category.subtitle}</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} className="h-full" />
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t">
        <Link href="/notes" className="text-sm font-medium hover:underline">
          &larr; Back to all notes
        </Link>
      </div>
    </div>
  );
}
