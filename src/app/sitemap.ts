import { MetadataRoute } from 'next';
import { getAllNotes } from '@/lib/server/markdown-utils';
import { siteConfig } from '@/config/site';

const BASE_URL = siteConfig.url;

// Define project pages with their metadata
const PROJECTS = [
  {
    slug: 'rudderstack',
    lastModified: '2024-06-01',
    priority: 0.9,
  },
  {
    slug: 'quickbooks-cpa-match',
    lastModified: '2024-05-15',
    priority: 0.9,
  },
  // Add more projects as needed
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all notes for the sitemap
  const notes = await getAllNotes();
  const now = new Date();
  
  // Static routes
  const staticRoutes = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/notes`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Project routes
  const projectRoutes = PROJECTS.map(project => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.lastModified || now),
    changeFrequency: 'monthly' as const,
    priority: project.priority || 0.7,
  }));

  // Dynamic note routes
  const noteRoutes = notes.map((note) => ({
    url: `${BASE_URL}/notes/${note.slug}`,
    lastModified: new Date(note.updated || note.date || now),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
