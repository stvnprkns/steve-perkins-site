import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function generateNotesListMetadata(category?: string): Metadata {
  const title = category 
    ? `${category} | Notes | ${siteConfig.name}` 
    : `Notes | ${siteConfig.name}`;
    
  const description = category
    ? `Collection of notes about ${category} by ${siteConfig.author.name}`
    : `Collection of notes and thoughts by ${siteConfig.author.name} on design, technology, and leadership.`;

  const url = category 
    ? `${siteConfig.url}/category/${encodeURIComponent(category.toLowerCase())}`
    : `${siteConfig.url}/notes`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}
