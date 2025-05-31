import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  image?: string;
};

export function generateSeoMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Steve Perkins'],
  section,
  tags = [],
  image = '/images/og-image.jpg',
}: SeoProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${siteConfig.url}${image}`],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: siteConfig.googleSiteVerification,
    },
    keywords: [...siteConfig.keywords, ...tags],
  };
}

export function generateStructuredData({
  type = 'WebPage',
  title,
  description,
  url,
  image,
  publishedDate,
  modifiedDate,
  author,
}: {
  type?: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: {
    '@type': string;
    name: string;
    url: string;
  };
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    url,
    ...(image && {
      image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    }),
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    ...(author && { author: [author] }),
  };

  return baseData;
}
