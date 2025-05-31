import { Metadata } from 'next';
import { StructuredData } from './StructuredData';
import { siteConfig } from '@/config/site';

export function HomeSeo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    sameAs: [
      `https://twitter.com/${siteConfig.twitterHandle}`,
      'https://linkedin.com/in/steveperkins',
    ],
    jobTitle: 'Product Design Leader',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  return (
    <>
      <StructuredData
        type="Person"
        title={siteConfig.title}
        description={siteConfig.description}
        url={siteConfig.url}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export const homeMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.defaultImage],
    creator: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};
