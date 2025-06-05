import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";
import CaseStudyImage from "@/components/markdown/CaseStudyImage";

export default function ConnectionMode() {
  const { heading, content, image } = rudderstackData.connectionMode;
  return (
    <section className="pt-16 pb-12 max-w-prose" id="connection-mode">
      <h2 className="text-xl font-semibold mb-4 font-sans">{heading}</h2>
      <Paragraphs text={content} className="text-base leading-loose text-text-base" />
      {image && (
        <CaseStudyImage
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
        />
      )}
    </section>
  );
}
