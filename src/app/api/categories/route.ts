import { NextResponse } from 'next/server';
import { getAllCategoriesWithCounts } from '@/lib/server/markdown-utils';

export async function GET() {
  try {
    const categories = await getAllCategoriesWithCounts();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
