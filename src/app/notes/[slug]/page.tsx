import { getNoteBySlug, getAllNotes, Note } from "@/lib/server/markdown-utils";
import NoteClientPage from "./NoteClientPage";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note: Note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: { params: { slug: string } }) {
  // Try to get the note data during build or server-side rendering
  let note = null;
  try {
    note = await getNoteBySlug(params.slug);
  } catch (error) {
    console.error(`Error fetching note ${params.slug}:`, error);
  }

  // Pass the note data to the client component if available
  // The client component will handle client-side fetching if needed
  return <NoteClientPage note={note} slug={params.slug} />;
}
