'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { generateCanonicalUrl, getCurrentCanonicalUrl } from '@/lib/url-utils';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  noIndex?: boolean;
  noFollow?: boolean;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function Metadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.defaultImage,
  type = 'website',
  noIndex = false,
  noFollow = false,
  canonicalUrl: customCanonicalUrl,
  publishedTime,
  modifiedTime,
  author = siteConfig.author.name,
  section,
  tags = [],
}: MetadataProps) {
  const pathname = usePathname();
  const canonicalUrl = customCanonicalUrl || getCurrentCanonicalUrl(pathname);
  // Ensure we have a valid image URL
  const getFullImageUrl = (imgPath: string): string => {
    if (!imgPath) return '';
    return imgPath.startsWith('http') ? imgPath : `${siteConfig.url}${imgPath}`;
  };
  
  const fullImageUrl = getFullImageUrl(image || siteConfig.defaultImage);
  
  // Return null if no valid image URL could be constructed
  if (!fullImageUrl) {
    console.warn('Could not construct a valid image URL for metadata');
    return null;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional meta tags */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Head>
  );
}
