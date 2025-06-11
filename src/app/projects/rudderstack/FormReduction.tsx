import React from 'react';
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";
import CaseStudyImage from "@/components/markdown/CaseStudyImage";
import Image, { type StaticImageData } from "next/image";

interface ImageData {
  src: StaticImageData;
  alt: string;
  caption?: string;
}

interface RudderstackData {
  formReduction: {
    heading: string;
    content: string;
    image?: ImageData;
  };
  configDesign: {
    heading: string;
    content: string;
    image?: ImageData;
  };
  dataConfigConnect: {
    connect: {
      heading: string;
      content: string;
    };
    success: {
      heading: string;
      content: string;
    };
    setup: {
      heading: string;
      content: string;
    };
  };
  connectionMode: {
    connectionModeImage?: ImageData;
  };
}

export default function FormReduction() {
  // Memoize the component to prevent unnecessary re-renders
  const MemoizedCaseStudyImage = React.memo(CaseStudyImage) as typeof CaseStudyImage;
  const MemoizedParagraphs = React.memo(Paragraphs) as typeof Paragraphs;
  const { heading, content, image } = rudderstackData.formReduction;
  const { heading: configHeading, content: configContent, image: configImage } = rudderstackData.configDesign;
  const { 
    connect: connectData,
    success: successData,
    setup: setupData
  } = rudderstackData.dataConfigConnect;
  
  const { connectionModeImage } = rudderstackData.connectionMode;
  
  return (
    <div id="form-reduction">
      {/* Connection Mode section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 font-sans">Connection Mode: an aside</h3>
        <div className="prose max-w-prose text-text-base">
          <p className="text-base leading-loose mb-4">
            Connection Mode turned into a mini project all on its own. This little switch, hidden away, had zero helper text, and there was nothing in the docs about it. Only 1 in 5 customers we talked to actually knew what it did. But this little setting was the single most important choice when configuring a destination.
          </p>
          <p className="text-base leading-loose mb-4">
            Our biggest problem it seemed was communication. Our UX Writer played a pivotal role in demystifying what exactly this did and why it matters, so customers could make the right choice for them.
          </p>
          <p className="text-base leading-loose">
            The writing defined the final design.
          </p>
        </div>
        {connectionModeImage && (
          <div className="mt-8">
            <MemoizedCaseStudyImage
              src={connectionModeImage.src}
              alt={connectionModeImage.alt}
              width={1200}
              height={800}
            />
          </div>
        )}
      </div>

      {/* First part: From 27 fields to 2 steps */}
      <h2 className="text-3xl font-bold mb-6 font-sans">{heading}</h2>
      <div className="prose max-w-prose text-text-base">
        <MemoizedParagraphs text={content} className="text-base leading-loose" />
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
        
        {/* Connect Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 font-sans">{connectData.heading}</h3>
          <div className="prose max-w-prose text-text-base mb-6">
            <p className="text-base leading-loose">
              {connectData.description}
            </p>
          </div>
          <div className="mt-6">
            <CaseStudyImage
              src={connectData.image.src}
              alt={connectData.image.alt}
              width={1200}
              height={800}
            />
          </div>
        </div>
        
        {/* Success Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 font-sans">{successData.heading}</h3>
          <div className="prose max-w-prose text-text-base mb-6">
            <p className="text-base leading-loose">
              {successData.description}
            </p>
          </div>
          <div className="mt-6">
            <CaseStudyImage
              src={successData.image.src}
              alt={successData.image.alt}
              width={1200}
              height={800}
            />
          </div>
        </div>
        
        {/* Setup Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 font-sans">{setupData.heading}</h3>
          <div className="prose max-w-prose text-text-base mb-6">
            <p className="text-base leading-loose">
              {setupData.description}
            </p>
          </div>
          <div className="mt-6">
            <CaseStudyImage
              src={setupData.image.src}
              alt={setupData.image.alt}
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
