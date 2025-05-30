import { NextResponse } from 'next/server';
import { getAllNotes } from '@/lib/server/markdown-utils';

export async function GET() {
  console.log('API Route: GET /api/notes was called');
  try {
    console.log('Attempting to fetch all notes...');
    const notes = await getAllNotes();
    console.log(`Successfully fetched ${notes.length} notes`);
    return NextResponse.json(notes);
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
