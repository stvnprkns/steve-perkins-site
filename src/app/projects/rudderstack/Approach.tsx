import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";
import CaseStudyImage from "@/components/markdown/CaseStudyImage";

export default function Approach() {
  return (
    <div id="approach" aria-labelledby="approach-heading">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="Our approach to redesigning RudderStack's developer experience focused on user research, workflow analysis, and iterative design to simplify complex data integration processes" data-snippet="approach-summary" hidden />
      
      <h2 id="approach-heading" className="text-3xl font-bold mb-8 font-sans">{rudderstackData.approach.heading}</h2>
      <div className="prose max-w-prose text-text-base space-y-12">
        <Paragraphs text={rudderstackData.approach.intro} />
        
        {/* Structured approach steps with semantic markup */}
        <div className="approach-methodology" data-content-type="design-methodology">
          {rudderstackData.approach.steps.map((step, i) => (
            <div key={i} className="space-y-6" data-step={`step-${i+1}`} data-step-title={step.title}>
              <h3 id={`step-${i+1}-heading`} className="text-2xl font-semibold mt-12 mb-4 font-sans">{step.title}</h3>
              <div data-step-content={`step-${i+1}-content`}>
                <Paragraphs text={step.description} className="whitespace-pre-line" />
              </div>
              
              {step.image && (
                <figure>
                  <CaseStudyImage
                    src={step.image.src}
                    alt={step.image.alt}
                    width={1200}
                    height={800}
                    withBackground={i !== 0} // Only show background for non-first images
                    data-evidence={`step-${i+1}-visual`}
                  />
                </figure>
              )}
              
              {step.quote && (
                <blockquote className="border-l-4 border-gray-200 pl-4 italic text-muted my-8" data-testimonial={`step-${i+1}-quote`}>
                  <span>&ldquo;{step.quote.text}&rdquo;</span>
                  <footer className="block mt-2 text-xs text-muted">— {step.quote.author}</footer>
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
