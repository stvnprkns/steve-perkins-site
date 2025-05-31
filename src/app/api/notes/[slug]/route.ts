import { NextResponse } from 'next/server';
import { getNoteBySlug } from '@/lib/server/markdown-utils';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return new NextResponse('Slug is required', { status: 400 });
    }

    const note = await getNoteBySlug(slug);
    
    if (!note) {
      return new NextResponse('Note not found', { status: 404 });
    }

    return NextResponse.json(note);
    
  } catch (error) {
    console.error('Error in /api/notes/[slug]:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch note',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
