import { notes, getAllCategoriesWithCounts } from "@/lib/notes";
import Link from "next/link";
import { getCategoryByKey } from "@/lib/categories";
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";

type SearchParams = {
  category?: string;
};

export default function NotesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const selectedCategory = searchParams.category;
  const categories = getAllCategoriesWithCounts();
  
  // Filter notes by category if one is selected
  const filteredNotes = selectedCategory
    ? notes.filter((note) => note.category === selectedCategory)
    : notes;

  // Sort notes by date (newest first)
  const sortedNotes = [...filteredNotes].sort((a, b) => 
    new Date(b.updated || b.date).getTime() - new Date(a.updated || a.date).getTime()
  );

  return (
    <div className="w-full">
      <PageHero
        title="Notes"
        subtitle="This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.\n\nSometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud.\n\nIf you're working through the same kinds of problems — or come at them from the other side — I'd love to hear from you."
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
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
                ${
                  !selectedCategory
                    ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                    : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                }`}
              tabIndex={0}
            >
              All
            </Link>
            {categories.map(({ category, count, data }) => (
              <Link
                key={category}
                href={`/notes?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1.5 text-sm rounded-full border flex items-center gap-1.5 transition-colors duration-150 outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
                  ${
                    selectedCategory === category
                      ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 active:bg-zinc-700'
                      : 'hover:bg-muted/50 active:bg-muted/70 border-border'
                  }`}
                tabIndex={0}
              >
                {data?.emoji && <span>{data.emoji}</span>}
                <span>{category}</span>
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
              const category = getCategoryByKey(note.category);
              return (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  className="group block"
                >
                  <div className="h-full border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-2xl">{note.emoji || note.icon}</span>
                      {category && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full">
                          {category.emoji} {category.title}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 group-hover:underline">
                      {note.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{note.date}</span>
                      {note.status && (
                        <span className="px-2 py-0.5 bg-muted rounded-full">
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
