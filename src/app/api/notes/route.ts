import { NextResponse } from 'next/server';
import { getAllNotes, getAllCategoriesWithCounts } from '@/lib/markdown';

export async function GET() {
  try {
    // Fetch both notes and categories in parallel
    const [notes, categories] = await Promise.all([
      getAllNotes(),
      getAllCategoriesWithCounts()
    ]);

    return NextResponse.json({
      notes,
      categories
    });
    
  } catch (error) {
    console.error('Error in /api/notes:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch notes',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
