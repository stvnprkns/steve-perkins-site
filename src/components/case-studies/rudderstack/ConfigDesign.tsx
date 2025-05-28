import * as React from "react";
import Image from "next/image";
import { rudderstackData } from "./rudderstackData";

export default function ConfigDesign() {
  const { heading, content, image } = rudderstackData.configDesign;
  return (
    <section className="pt-16 pb-12 max-w-prose" id="config-design">
      <h2 className="text-xl font-semibold mb-4 font-sans">{heading}</h2>
      <p className="text-base leading-loose text-text-base whitespace-pre-line mb-6">{content}</p>
      {image && (
        <figure className="my-8">
          <Image src={image.src} alt={image.alt} width={800} height={450} className="rounded-md border border-gray-100 w-full object-cover" />
          {image.alt && <figcaption className="text-xs text-muted mt-2 text-center">{image.alt}</figcaption>}
        </figure>
      )}
    </section>
  );
}
