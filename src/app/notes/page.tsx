import Link from "next/link";
import { getAllNotes, getAllCategoriesWithCounts, Note } from "@/lib/markdown";
import { getCategoryByKey } from "@/lib/categories";
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";

// Get all notes at build time
export const dynamic = 'force-static';

type SearchParams = {
  category?: string;
};

interface CategoryCount {
  category: string;
  count: number;
}

export default async function NotesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const selectedCategory = searchParams.category;
  const [allNotes, categories] = await Promise.all([
    getAllNotes(),
    getAllCategoriesWithCounts()
  ]) as [Note[], CategoryCount[]];
  
  // Filter notes by category if one is selected
  const filteredNotes = selectedCategory
    ? allNotes.filter((note) => 
        note.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : allNotes;

  // Sort notes by date (newest first)
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    const dateA = a.updated || a.date || '1970-01-01';
    const dateB = b.updated || b.date || '1970-01-01';
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  return (
    <div className="w-full">
      <PageHero
        title="Notes"
        subtitle={
          "This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.\n\nSometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud.\n\nIf you're working through the same kinds of problems — or come at them from the other side — I'd love to hear from you."
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))
        }
        variant="narrow"
        padding="lg"
      />
      
      {/* Category filter in narrow section */}
      <Section variant="narrow" className="py-4 bg-muted/10" noDivider>
        <div className="mb-8">
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            Browse by category
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/notes"
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background no-underline
                ${
                  !selectedCategory
                    ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                    : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                }`}
              tabIndex={0}
            >
              All
            </Link>
            {categories.map(({ category, count }) => (
              <Link
                key={category}
                href={`/notes?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1.5 text-sm rounded-full border flex items-center gap-1.5 transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background no-underline
                  ${
                    selectedCategory === category
                      ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                      : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                  }`}
                tabIndex={0}
              >
                <span className="capitalize">{category}</span>
                <span className="text-xs opacity-70 ml-0.5">{count}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Main content container */}
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-10">
        {/* Category header */}
        {selectedCategory && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              {getCategoryByKey(selectedCategory)?.title}
            </h2>
            <p className="text-muted-foreground">
              {getCategoryByKey(selectedCategory)?.subtitle}
            </p>
          </div>
        )}

        {/* Notes grid */}
        {sortedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNotes.map((note) => {
              const category = note.category ? getCategoryByKey(note.category) : null;
              return (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  className="group block no-underline"
                >
                  <div className="h-full border rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:border-muted-foreground/20 bg-background hover:bg-muted/50">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-2xl">{note.emoji || note.icon || ''}</span>
                      {category && category.emoji && category.title && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full no-underline">
                          {category.emoji} {category.title}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-foreground">
                      {note.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="no-underline">{note.date}</span>
                      {note.status && (
                        <span className="px-2 py-0.5 bg-muted rounded-full no-underline">
                          {note.status}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No notes found in this category.</p>
            <Link href="/notes" className="mt-4 inline-block text-sm text-foreground hover:underline">
              View all notes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
