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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
