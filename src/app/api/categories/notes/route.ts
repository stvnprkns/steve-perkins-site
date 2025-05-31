import { NextResponse } from 'next/server';
import { getNotesByCategory } from '@/lib/server/markdown-utils';

export async function GET(
  request: Request
) {
  try {
    const url = new URL(request.url);
    const category = url.pathname.split('/').pop() || '';
    const notes = await getNotesByCategory(category);
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notes by category' },
      { status: 500 }
    );
  }
}
