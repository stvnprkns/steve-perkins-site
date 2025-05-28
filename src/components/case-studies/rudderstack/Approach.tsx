import * as React from "react";
import Image from "next/image";
import { rudderstackData } from "./rudderstackData";

export default function Approach() {
  return (
    <section className="pt-16 pb-12 max-w-prose" id="approach">
      <h2 className="text-xl font-semibold mb-4 font-sans">{rudderstackData.approach.heading}</h2>
      <ol className="space-y-12 list-decimal list-inside">
        {rudderstackData.approach.steps.map((step, i) => (
          <li key={i} className="pl-2">
            <h3 className="text-lg font-semibold mb-2 font-sans">{step.title}</h3>
            <p className="text-base leading-loose text-text-base mb-4 whitespace-pre-line">{step.description}</p>
            {step.image && (
              <figure className="my-8">
                <Image src={step.image.src} alt={step.image.alt} width={800} height={450} className="rounded-md border border-gray-100 w-full object-cover" />
                {step.image.alt && <figcaption className="text-xs text-muted mt-2 text-center">{step.image.alt}</figcaption>}
              </figure>
            )}
            {step.quote && (
              <blockquote className="border-l-4 border-gray-200 pl-4 italic text-muted my-8">
                <span>“{step.quote.text}”</span>
                <footer className="block mt-2 text-xs text-muted">— {step.quote.author}</footer>
              </blockquote>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
