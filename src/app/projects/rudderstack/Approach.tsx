import * as React from "react";
import Image from "next/image";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";

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
              <figure className="w-[110%] relative -left-[5%] my-12 bg-purple-50 p-4">
                <div className="max-w-4xl mx-auto">
                  <div className="relative w-full">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                {step.image.alt && (
                  <figcaption className="max-w-6xl mx-auto mt-2 text-sm text-gray-500 text-left px-4">
                    {step.image.alt}
                  </figcaption>
                )}
              </figure>
            )}
            {step.quote && (
              <blockquote className="border-l-4 border-gray-200 pl-4 italic text-muted my-8">
                <span>"{step.quote.text}"</span>
                <footer className="block mt-2 text-xs text-muted">— {step.quote.author}</footer>
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
