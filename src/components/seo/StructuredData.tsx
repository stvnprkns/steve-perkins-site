import { siteConfig } from '@/config/site';

interface StructuredDataProps {
  type?: 'Person' | 'WebSite' | 'BlogPosting' | 'Article' | 'Project';
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url: string;
  };
  publisher?: {
    name: string;
    logo: string;
  };
  sameAs?: string[];
}

export function StructuredData({
  type = 'WebSite',
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = {
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  publisher = {
    name: siteConfig.name,
    logo: `${siteConfig.url}/images/logo.png`,
  },
  sameAs = [
    `https://twitter.com/${siteConfig.twitterHandle}`,
    'https://linkedin.com/in/steveperkins',
  ],
}: StructuredDataProps) {
  const baseData: any = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    url,
    ...(image && { image: [image] }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url,
      sameAs,
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
    />
  );
}
