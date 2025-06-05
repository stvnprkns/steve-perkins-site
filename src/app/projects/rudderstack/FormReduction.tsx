import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";
import CaseStudyImage from "@/components/markdown/CaseStudyImage";

export default function FormReduction() {
  const { heading, content, image } = rudderstackData.formReduction;
  const { heading: configHeading, content: configContent, image: configImage } = rudderstackData.configDesign;
  
  return (
    <div id="form-reduction">
      {/* First part: From 27 fields to 2 steps */}
      <h2 className="text-3xl font-bold mb-6 font-sans">{heading}</h2>
      <div className="prose max-w-prose text-text-base">
        <Paragraphs text={content} className="text-base leading-loose" />
      </div>
      {image && (
        <CaseStudyImage
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
        />
      )}
      
      {/* Second part: Configuring with ease */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 font-sans">{configHeading}</h2>
        <div className="prose max-w-prose text-text-base">
          <Paragraphs text={configContent} className="text-base leading-loose" />
        </div>
        {configImage && (
          <CaseStudyImage
            src={configImage.src}
            alt={configImage.alt}
            width={1200}
            height={800}
          />
        )}
      </div>
    </div>
  );
}
