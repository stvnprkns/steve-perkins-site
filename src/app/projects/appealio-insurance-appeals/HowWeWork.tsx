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
              alt="Detailed flowchart showing the end-to-end insurance appeal process with Appealio, illustrating how claims move from submission through review to resolution"
              width={1200}
              height={600}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
        
        <h3 className="text-2xl font-semibold mt-12 mb-6 font-sans">The Appeal Letter</h3>
        
        <p>
    Drafting the appeal letter is the priciest choke-point — 
    <strong>
      each denied claim
    adds&nbsp;
    <a
      href="https://www.webpt.com/blog/claim-denial-costs"
      target="_blank"
      rel="noopener noreferrer"
    >
      $25–$118 in extra manual rework
    </a>
    </strong>
    &nbsp;before it even gets back to the payer.
  &nbsp;So we trained the AI to pull patient data, cite policy language, and
  generate a first-draft letter in seconds.
</p>
        
        <p>
          We designed a split-screen layout for ease of use: on the right, a text editor with the letter and data ready to edit, and on the left, a preview of the final letter.
        </p>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-letter.png"
              alt="Appealio's split-screen interface showing an editable appeal letter template on the left with form fields for patient data and a formatted preview of the final letter on the right"
              width={1200}
              height={600}
              containerClassName="w-full"
              className="w-full"
            />
          </Suspense>
        </div>
        
        <h3 className="text-2xl font-semibold mt-16 mb-6 font-sans">Prioritization</h3>
        
        <p>
          Working on appeals from oldest to newest led to missed deadlines and lost revenue. So, we created a better way to prioritize appeals. We developed an algorithm based on deadline, monetary value, appeal round, and chance of success to determine the most high-impact appeals. </p>
          <p>
  <strong>
    <a
      href="https://journal.ahima.org/denial-resubmission-gap"
      target="_blank"
      rel="noopener noreferrer"
    >
      Up to&nbsp;60&nbsp;% of denied claims are never resubmitted
    </a>
    </strong>
    —so choosing the right appeals first isn’t busywork; it’s rescued revenue.
  Our algorithm weighs deadline, dollar value, appeal round, and win-probability
  to surface the highest-impact cases at the top of the queue.
</p>
<p>This helped medical providers generate more money from these appeals with a much higher success rate.
        </p>
        
        <div className="w-full my-8">
          <Suspense fallback={<ImageLoading />}>
            <CaseStudyImage
              src="/images/projects/appealio/appealio-appeals.png"
              alt="Appealio's appeals management dashboard displaying a prioritized list of insurance appeals with sorting options, monetary values, deadlines, and success probability indicators"
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
              alt="HIPAA-compliant document storage interface showing an appeal detail panel with securely stored medical records, correspondence history, and attached supporting documentation"
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
