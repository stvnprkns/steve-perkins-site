import * as React from "react";
import Image from "next/image";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";

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
        <figure className="w-[110%] relative -left-[5%] my-12 bg-purple-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          {image.alt && (
            <figcaption className="max-w-6xl mx-auto mt-2 text-sm text-gray-500 text-left px-4">
              {image.alt}
            </figcaption>
          )}
        </figure>
      )}
      
      {/* Second part: Configuring with ease */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 font-sans">{configHeading}</h2>
        <div className="prose max-w-prose text-text-base">
          <Paragraphs text={configContent} className="text-base leading-loose" />
        </div>
        {configImage && (
          <figure className="w-[110%] relative -left-[5%] my-12 bg-purple-50 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full">
                <Image
                  src={configImage.src}
                  alt={configImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            {configImage.alt && (
              <figcaption className="max-w-6xl mx-auto mt-2 text-sm text-gray-500 text-left px-4">
                {configImage.alt}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </div>
  );
}
