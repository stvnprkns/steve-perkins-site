import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";
import CaseStudyImage from "@/components/markdown/CaseStudyImage";

export default function Approach() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">{rudderstackData.approach.heading}</h2>
      <div className="prose max-w-prose text-text-base space-y-12">
        <Paragraphs text={rudderstackData.approach.intro} />
        {rudderstackData.approach.steps.map((step, i) => (
          <div key={i} className="space-y-6">
            <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">{step.title}</h3>
            <Paragraphs text={step.description} className="whitespace-pre-line" />
            {step.image && (
              <CaseStudyImage
                src={step.image.src}
                alt={step.image.alt}
                width={1200}
                height={800}
                withBackground={i !== 0} // Only show background for non-first images
              />
            )}
            {step.quote && (
              <blockquote className="border-l-4 border-gray-200 pl-4 italic text-muted my-8">
                <span>&ldquo;{step.quote.text}&rdquo;</span>
                <footer className="block mt-2 text-xs text-muted">— {step.quote.author}</footer>
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
