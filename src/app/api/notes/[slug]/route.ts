import { NextResponse } from 'next/server';
import { getNoteBySlug } from '@/lib/server/markdown-utils';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Ensure params are properly awaited/destructured
  const { slug } = params;
  try {
    const note = await getNoteBySlug(slug);
    
    if (!note) {
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch note' },
      { status: 500 }
    );
  }
}
