'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/lib/projects';
import Section from '@/components/layout/Section';
// Import from the new location for the main RudderStack case study
import Problem from '../rudderstack/Problem';
import Approach from '../rudderstack/Approach';
import ConnectionMode from '../rudderstack/ConnectionMode';
import FormReduction from '../rudderstack/FormReduction';
import ConfigDesign from '../rudderstack/ConfigDesign';
import Outcomes from '../rudderstack/Outcomes';
import { rudderstackData } from '../rudderstack/rudderstackData';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import AnimatedCaseStudy from '@/components/case-study/AnimatedCaseStudy';

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
        <AnimatedCaseStudy
          title={rudderstackData.title}
          summary={rudderstackData.summary}
          currentSlug={slug}
          projects={projects}
          heroImage={rudderstackData.heroImage}
          team={rudderstackData.team.map(member => ({
            name: member.name,
            role: member.role || 'Team Member',
            avatar: member.avatar
          }))}
          company={rudderstackData.company}
        >
          <Problem />
          <Approach />
          <ConnectionMode />
          <FormReduction />
          <ConfigDesign />
          <Outcomes />
        </AnimatedCaseStudy>
      </>
    );
  }
  // Fallback for other projects
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6 py-20 text-muted">Project not found or not yet available.</div>
  );
}
