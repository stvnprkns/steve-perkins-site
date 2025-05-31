import { Metadata } from 'next';
import { StructuredData } from './StructuredData';
import { siteConfig } from '@/config/site';

interface NoteSeoProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  tags?: string[];
  image?: string;
  category?: string;
}

export function NoteSeo({
  title,
  description,
  slug,
  date,
  updated,
  tags = [],
  image = siteConfig.defaultImage,
  category = 'Article',
}: NoteSeoProps) {
  const url = `${siteConfig.url}/notes/${slug}`;
  const noteImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return (
    <>
      <StructuredData
        type="BlogPosting"
        title={title}
        description={description}
        url={url}
        image={noteImage}
        datePublished={date}
        dateModified={updated || date}
      />
    </>
  );
}

export function generateNoteMetadata({
  title,
  description,
  slug,
  date,
  updated,
  tags = [],
  image = siteConfig.defaultImage,
  category = 'Article',
}: NoteSeoProps): Metadata {
  const url = `${siteConfig.url}/notes/${slug}`;
  const noteImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  const publishedTime = new Date(date).toISOString();
  const modifiedTime = updated ? new Date(updated).toISOString() : publishedTime;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      publishedTime,
      modifiedTime,
      authors: [siteConfig.author.name],
      tags,
      section: category,
      images: [
        {
          url: noteImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [noteImage],
    },
    keywords: [...siteConfig.keywords, ...tags],
    alternates: {
      canonical: url,
    },
  };
}
