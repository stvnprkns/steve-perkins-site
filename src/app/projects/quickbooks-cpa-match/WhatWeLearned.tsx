import React from 'react';

export default function WhatWeLearned() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">What We Learned</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          Running a business is already hard, but doing so while being the bookkeeper makes it nearly impossible to be successful. 
          After the experiment launched, the response was surprising. Customer feedback highlighted immediate benefits: they were 
          saving money on their taxes, finding more time and energy to devote to their businesses, and realizing how valuable 
          tax professionals were in making daily financial decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">+2000</h3>
            <p className="text-gray-700">Connections between CPAs and entrepreneurs in the first year</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">15%</h3>
            <p className="text-gray-700">Higher 5-year survival rate for businesses with CPAs</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-text-base/80 italic">
          &ldquo;Running a business is already hard, but doing so while being the bookkeeper makes it nearly impossible to be successful. 
          After the experiment launched, the response was surprising. Customer feedback highlighted immediate benefits: they were 
          saving money on their taxes, finding more time and energy to devote to their businesses, and realizing how valuable 
          tax professionals were in making daily financial decisions.&rdquo;
        </blockquote>
      </div>
    </>
  );
}
