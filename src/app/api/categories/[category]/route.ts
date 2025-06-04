import { NextResponse } from 'next/server';
import { getNotesByCategory, getMinimalNotesByCategory } from '@/lib/server/markdown-utils';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const { category } = params;

    if (!category) {
      return new NextResponse('Category parameter is required', { status: 400 });
    }

    // Decode the category name in case it's URL encoded (e.g., "AI%20&%20Tools")
    const decodedCategory = decodeURIComponent(category);

    const notes = await getMinimalNotesByCategory(decodedCategory);
    // const notes = await getNotesByCategory(decodedCategory); // If you need full note content

    if (!notes) { // Check if notes is null or undefined, an empty array is a valid response
      return NextResponse.json([]); 
    }

    return NextResponse.json(notes);

  } catch (error) {
    console.error(`Error in /api/categories/[category]:`, error);
    return NextResponse.json(
      {
        error: 'Failed to fetch notes for category',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
