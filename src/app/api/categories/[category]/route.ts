import { NextResponse } from 'next/server';
import { getNotesByCategory } from '@/lib/server/markdown-utils';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  // Ensure params are properly awaited/destructured
  const { category } = params;
  try {
    const decodedCategory = decodeURIComponent(category);
    const notes = await getNotesByCategory(decodedCategory);
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notes by category' },
      { status: 500 }
    );
  }
}
