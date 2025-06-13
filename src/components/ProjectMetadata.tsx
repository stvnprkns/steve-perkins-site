import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface ProjectMetadataProps {
  title: string;
  description: string;
  path: string;
  coverImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

/**
 * Generates standardized metadata for project pages
 * Improves SEO and LLM understanding of your content
 */
export function generateProjectMetadata({
  title,
  description,
  path,
  coverImage,
  publishedTime,
  modifiedTime,
  tags = [],
}: ProjectMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const imageUrl = coverImage ? `${siteConfig.url}${coverImage}` : `${siteConfig.url}${siteConfig.defaultImage}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [imageUrl],
    },
    keywords: [...siteConfig.keywords, ...tags],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    // AI-specific metadata (experimental)
    other: {
      'ai:description': description,
      'ai:keywords': tags.join(', '),
      'ai:content-type': 'project-case-study',
      'llms:relevance': 'design-leadership-portfolio',
      'llms:author': siteConfig.author.name,
      'llms:is-canonical': 'true',
    },
  };
}
