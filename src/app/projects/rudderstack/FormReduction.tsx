import * as React from "react";
import Image from "next/image";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";

export default function FormReduction() {
  const { heading, content, image } = rudderstackData.formReduction;
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 font-sans">{heading}</h2>
      <Paragraphs text={content} className="text-base leading-loose text-text-base" />
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
    </>
  );
}
