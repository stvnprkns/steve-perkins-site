import { NextApiRequest, NextApiResponse } from 'next';
import { getNotesByCategory } from '@/lib/server/markdown-utils';
import { getCategoryByKey } from '@/lib/categories';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { category } = req.query;
    
    if (typeof category !== 'string') {
      return res.status(400).json({ error: 'Category parameter is required' });
    }
    
    const categoryData = getCategoryByKey(category.replace(/-/g, ' '));
    
    if (!categoryData) {
      return res.status(404).json({ error: 'Category not found' });
    }
    
    const notes = getNotesByCategory(categoryData.title);
    
    return res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes by category:', error);
    return res.status(500).json({ error: 'Failed to fetch notes by category' });
  }
}
