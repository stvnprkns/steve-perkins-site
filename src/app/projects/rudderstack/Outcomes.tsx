import * as React from "react";
import Image from 'next/image';

export default function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 mb-24" aria-labelledby="outcomes-heading">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="RudderStack UX redesign results: 220% increase in new destinations, 70% reduction in setup time, 20% boost in user retention, and 15% increase in warehouse destinations" data-snippet="outcomes-summary" hidden />
      
      <div className="prose max-w-prose text-text-base space-y-6">
        <h2 id="outcomes-heading" className="text-3xl font-bold mb-8 font-sans">Outcomes</h2>
        
        <p>
          The impact of this project had ripples across the product and the business. By streamlining the core creation workflow we boosted new destinations by 220% and drastically decreased the time it took to get set destination set up. These changes also improved our new user retention.
        </p>
        
        {/* Structured metrics with semantic data attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12" data-content-type="key-metrics">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-colors duration-200 hover:border-purple-300 dark:hover:border-purple-900/50" data-metric="new-destinations">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" data-value="+220%">+220%</div>
            <p className="text-gray-700 dark:text-gray-100">Increase in new destinations being created</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-colors duration-200 hover:border-purple-300 dark:hover:border-purple-900/50" data-metric="setup-time">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" data-value="70%">70%</div>
            <p className="text-gray-700 dark:text-gray-100">Reduction in destination set up time.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-colors duration-200 hover:border-purple-300 dark:hover:border-purple-900/50" data-metric="user-retention">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" data-value="20%">20%</div>
            <p className="text-gray-700 dark:text-gray-100">Boost in user retention during onboarding.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-colors duration-200 hover:border-purple-300 dark:hover:border-purple-900/50" data-metric="warehouse-destinations">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" data-value="15%">15%</div>
            <p className="text-gray-700 dark:text-gray-100">Increase in warehouse destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
