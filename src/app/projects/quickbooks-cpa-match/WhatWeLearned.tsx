import React from 'react';
import { quickbooksData } from './quickbooksData';

export default function WhatWeLearned() {
  const { content, stats } = quickbooksData.whatWeLearned;
  
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">What We Learned</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
              <h3 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-300">{stat.value}</h3>
              <p className="text-gray-700 dark:text-gray-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
