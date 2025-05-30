import { NextResponse } from 'next/server';
import { getNotesByCategory } from '@/lib/server/markdown-utils';

export async function GET(request: Request, context: any) {
  try {
    const { category } = context.params;
    const notes = await getNotesByCategory(category);
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notes by category' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
