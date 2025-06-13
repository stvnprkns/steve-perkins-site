import React from 'react';
import { siteConfig } from '@/config/site';

interface JsonLdSchemaProps {
  type: 'person' | 'project' | 'faq';
  data?: any;
}

export function JsonLdSchema({ type, data }: JsonLdSchemaProps) {
  const renderPersonSchema = () => {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
      jobTitle: 'Product Design Leader',
      sameAs: [
        siteConfig.author.url,
        `https://twitter.com/${siteConfig.twitterHandle.replace('@', '')}`
      ],
      knowsAbout: [
        'Product Design',
        'Design Leadership',
        'UX Design',
        'Design Systems',
        'User Experience',
        'Product Strategy',
        'HIPAA-compliant Design',
        'Healthcare UX',
        'Enterprise Design Strategy'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Independent Design Consultant'
      }
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    );
  };

  const renderProjectSchema = () => {
    if (!data) return null;
    
    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      headline: data.title,
      description: data.description,
      author: {
        '@type': 'Person',
        name: siteConfig.author.name
      },
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime,
      image: `${siteConfig.url}${data.coverImage}`,
      keywords: data.tags.join(', '),
      url: `${siteConfig.url}${data.path}`
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    );
  };

  const renderFAQSchema = () => {
    if (!data?.faqs) return null;
    
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq: any) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    );
  };

  return (
    <>
      {type === 'person' && renderPersonSchema()}
      {type === 'project' && renderProjectSchema()}
      {type === 'faq' && renderFAQSchema()}
    </>
  );
}
