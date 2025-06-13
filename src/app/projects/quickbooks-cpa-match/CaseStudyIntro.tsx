import React from 'react';

export default function CaseStudyIntro() {
  return (
    <header className="prose max-w-3xl mx-auto text-text-base mb-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Running a business is a team sport</h1>
      <div className="space-y-6">
        <p>Working at Intuit was pivotal in shaping who I am as a designer and leader. On the Intuit Labs team, I worked on 0→1 concepts. Working on these projects taught me that building products is more like starting a company than pushing a roadmap.</p>
        <p>The QuickBooks project exemplified these values perfectly.</p>
        <p>Starting with a data point: <strong><a href="https://www.commerceinstitute.com/business-failure-rate/" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="Study showing 49.4% of U.S. small businesses close within five years">Roughly 49.4 % of U.S. small businesses close within their first five years</a></strong>. We set out to improve the survival rate of businesses. A key point that pointed our way was that businesses with a CPA were more successful than those without.</p>
        <p><a href="https://quickbooks.intuit.com/r/small-business-data/success-2024/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="Study showing that 7 in 10 small businesses that work with an accountant report steady or high growth">Research backs this up:</a> nearly 7 in 10 small businesses that work with an accountant report steady or high growth, compared with just 4 in 10 who go it alone.</p>
      </div>
    </header>
  );
}
