'use client';

import dynamic from 'next/dynamic';

// Dynamically import CaseStudyImage with no SSR to avoid window is not defined errors
const CaseStudyImage = dynamic(
  () => import('@/components/markdown/CaseStudyImage'),
  { ssr: false }
);

export default function Solution() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Streamlined Appeal Creation</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We designed an intuitive, step-by-step appeal creation process that guides users through 
                each stage of preparing and submitting an appeal. The interface adapts based on the 
                insurance provider and type of denial, ensuring all necessary information is collected.
              </p>
              <ul className="space-y-2 mt-4">
                <li>Smart form fields that auto-populate when possible</li>
                <li>Contextual help and tooltips for complex fields</li>
                <li>Progress indicators to show completion status</li>
                <li>Real-time validation to catch errors early</li>
              </ul>
            </div>
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <CaseStudyImage
                src="/images/projects/appealio/appealio-creation-interface.png"
                alt="Appeal creation interface mockup"
                width={800}
                height={400}
                containerClassName="h-full"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Document Management</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A centralized document hub allows users to easily upload, organize, and reference 
                all documents related to an appeal. The system automatically categorizes and tags 
                documents for easy retrieval.
              </p>
              <ul className="space-y-2 mt-4">
                <li>Drag-and-drop file uploads with preview</li>
                <li>Automatic OCR for scanned documents</li>
                <li>Version control for updated documents</li>
                <li>Secure sharing with insurance providers</li>
              </ul>
            </div>
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <CaseStudyImage
                src="/images/projects/appealio/appealio-document-management.png"
                alt="Document management interface"
                width={800}
                height={400}
                containerClassName="h-full"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Appeal Tracking & Analytics</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A comprehensive dashboard provides real-time visibility into the status of all appeals, 
                with detailed analytics to track performance and identify trends.
              </p>
              <ul className="space-y-2 mt-4">
                <li>Real-time status updates and notifications</li>
                <li>Performance metrics and success rates</li>
                <li>Financial impact analysis</li>
                <li>Exportable reports for compliance and auditing</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4 flex items-center justify-center h-64">
              <p className="text-muted-foreground">Analytics dashboard mockup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
