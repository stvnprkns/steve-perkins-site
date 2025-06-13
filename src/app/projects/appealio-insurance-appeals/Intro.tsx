'use client';

import dynamic from 'next/dynamic';

// Dynamically import CaseStudyImage with no SSR to avoid window is not defined errors
const CaseStudyImage = dynamic(
  () => import('@/components/markdown/CaseStudyImage'),
  { ssr: false }
);

export default function Intro() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Appealio: Streamlining Insurance Appeals
        </h1>
        <p className="text-xl text-muted-foreground">
          Designing an intuitive platform to simplify the insurance appeals process for healthcare providers
        </p>
      </div>
      
      <figure className="w-full" aria-label="Appealio platform interface">
        <div className="relative w-full aspect-video">
          <CaseStudyImage
            src="/images/projects/appealio/appealio-hero.png"
            alt="Appealio's comprehensive dashboard interface showing a healthcare provider's insurance appeal management system with color-coded status indicators, prioritized appeal listings, and financial impact metrics for tracking claim resolutions"
            width={1600}
            height={900}
            priority={true}
            className="object-cover w-full h-full"
            containerClassName="h-full"
          />
        </div>
      </figure>
      
      <div className="grid md:grid-cols-3 gap-8 pt-4">
        <div className="space-y-2">
          <h3 className="font-medium">Role</h3>
          <p className="text-muted-foreground">Lead Product Designer</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Timeline</h3>
          <p className="text-muted-foreground">2023 - Present</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Team</h3>
          <p className="text-muted-foreground">2 Designers, 5 Engineers, PM</p>
        </div>
      </div>
    </div>
  );
}
