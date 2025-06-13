import React from 'react';
import { quickbooksData } from './quickbooksData';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

const components: Partial<Components> = {
  p: ({ children, ...props }) => (
    <p className="mb-4" {...props}>{children}</p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold" {...props}>{children}</strong>
  ),
};

export default function WhatWeLearned() {
  const { content, stats, images } = quickbooksData.whatWeLearned;
  
  return (
    <article>
      <header>
        <h2 id="what-we-learned" className="text-3xl font-bold mb-8 font-sans">What We Learned</h2>
      </header>
      
      <section className="prose max-w-prose text-text-base space-y-6" aria-labelledby="what-we-learned">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
        
        <section aria-label="Key statistics" className="mt-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
            {stats.map((stat, index) => (
              <li key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
                <h3 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-300" aria-label={`Statistic: ${stat.value}`}>{stat.value}</h3>
                <p className="text-gray-700 dark:text-gray-100">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
}
