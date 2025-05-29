import * as React from "react";
import { getProjectBySlug } from '../../../lib/projects';
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (params.slug === "rudderstack") {
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
            </Section>
          </main>
        </div>
      </>
    );
  }
  // Fallback for other projects
  return (
    <div className="px-6 py-20 text-muted">Project not found or not yet available.</div>
  );
}
