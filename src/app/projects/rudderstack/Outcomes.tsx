import * as React from "react";
import Image from 'next/image';

export default function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 mb-24">
      <div className="prose max-w-prose text-text-base space-y-6">
        <h2 className="text-3xl font-bold mb-8 font-sans">Outcomes</h2>
        
        <p>
          The impact of this project had ripples across the product and the business. By streamlining the core creation workflow we boosted new destinations by 220% and drastically decreased the time it took to get set destination set up. These changes also improved our new user retention.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">+220%</div>
            <p className="text-gray-700">Increase in new destinations being created</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
            <p className="text-gray-700">Reduction in destination set up time.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">20%</div>
            <p className="text-gray-700">Boost in user retention during onboarding.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
            <p className="text-gray-700">Increase in warehouse destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
