import { NextResponse } from 'next/server';
import { getAllNotes } from '@/lib/server/markdown-utils';

export async function GET() {
  try {
    const notes = await getAllNotes();
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    );
  }
}
