'use client';

import CaseStudyImage from '@/components/markdown/CaseStudyImage';
import { Suspense } from 'react';

// Loading component for images
const ImageLoading = () => (
  <div className="w-full aspect-video bg-gray-100 animate-pulse rounded-lg" />
);

export default function HowWeWork() {
  return (
    <section id="building-the-product" className="scroll-mt-20 mb-24">
      <div className="prose max-w-prose text-text-base space-y-6">
        <h2 className="text-3xl font-bold mb-8 font-sans">Building the Product</h2>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-workflow.webp"
              alt="[Fig. 1] Flowchart of the insurance claim process by Appealio"
              width={1200}
              height={600}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
        
        <h3 className="text-2xl font-semibold mt-12 mb-6 font-sans">The Appeal Letter</h3>
        
        <p>
          Drafting this letter was the most time-consuming part of the process. We addressed this by programming the AI to gather data about the patient, the appeal, the insurance, and the procedure. It then used templates to draft the letter.
        </p>
        
        <p>
          We designed a split-screen layout for ease of use: on the right, a text editor with the letter and data ready to edit, and on the left, a preview of the final letter.
        </p>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-letter.png"
              alt="[Fig. 2] Split-screen appeal letter with text editor and preview"
              width={1200}
              height={600}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
        
        <h3 className="text-2xl font-semibold mt-16 mb-6 font-sans">Prioritization</h3>
        
        <p>
          Working on appeals from oldest to newest led to missed deadlines and lost revenue. So, we created a better way to prioritize appeals. We developed an algorithm based on deadline, monetary value, appeal round, and chance of success to determine the most high-impact appeals. This helped medical providers generate more money from these appeals with a much higher success rate.
        </p>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-appeals.png"
              alt="[Fig. 3] Appeals table showing the list of appeals and the ability to sort and filter them"
              width={1200}
              height={400}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
        
        <h3 className="text-2xl font-semibold mt-16 mb-6 font-sans">HIPAA and Document Storage</h3>
        
        <p>
          Storing medical data is tricky. To make the appeal process easy, we needed a system that allowed healthcare providers to upload records, test results, and images within our tool. It had to be secure and private. We followed all e-PHI (electronic Private Health Information) and HIPAA rules in the application and added encryption and other protections for the data.
        </p>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-appeal-details.jpeg"
              alt="[Fig. 4] An appeal flyout showing data stored in the appeal (images, letters, past appeal information)"
              width={1200}
              height={600}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
