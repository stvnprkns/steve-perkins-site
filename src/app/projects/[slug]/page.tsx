'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/lib/projects';
import Section from '@/components/layout/Section';
// Import from the new location for the main RudderStack case study
import Intro from '../rudderstack/Intro';
import Problem from '../rudderstack/Problem';
import Approach from '../rudderstack/Approach';
import ConnectionMode from '../rudderstack/ConnectionMode';
import FormReduction from '../rudderstack/FormReduction';
import ConfigDesign from '../rudderstack/ConfigDesign';
import Outcomes from '../rudderstack/Outcomes';
import { rudderstackData } from '../rudderstack/rudderstackData';
import PageHeader from "@/components/PageHeader";
import ScrollProgressBar from '@/components/ScrollProgressBar';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient || !params?.slug) {
    return null; // Or a loading state
  }
  
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  if (slug === "rudderstack") {
    return (
      <>
        <ScrollProgressBar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <main>
            <PageHeader title={rudderstackData.title} subtitle={rudderstackData.summary} />
            <Section variant="wide" className="prose prose-neutral max-w-none">
              <Intro />
              <Problem />
              <Approach />
              <ConnectionMode />
              <FormReduction />
              <ConfigDesign />
              <Outcomes />
            <CaseStudyNavigation currentSlug={slug} projects={projects} className="mt-16" />
            </Section>
          </main>
        </div>
      </>
    );
  }
  // Fallback for other projects
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6 py-20 text-muted">Project not found or not yet available.</div>
  );
}
