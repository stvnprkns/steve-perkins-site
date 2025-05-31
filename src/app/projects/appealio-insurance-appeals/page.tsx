import { Metadata } from 'next';
import { CaseStudyGrid, Section, SidebarNav, BackToProjects } from '@/components';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { projects } from '@/lib/projects';

// Import sections (we'll create these next)
import Intro from './Intro';
import Problem from './Problem';
import Approach from './Approach';
import Solution from './Solution';
import Outcomes from './Outcomes';

export const metadata: Metadata = {
  title: 'Appealio - Streamlining Insurance Appeals',
  description: 'Designing an intuitive platform to simplify the insurance appeals process for healthcare providers',
};

const sidebarItems = [
  { id: 'problem', label: 'The Challenge' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'solution', label: 'The Solution' },
  { id: 'outcomes', label: 'Results' },
];

export default function AppealioPage() {
  return (
    <CaseStudyGrid
      sidebar={
        <div className="sticky top-0">
          <SidebarNav items={sidebarItems} className="lg:pr-4" />
        </div>
      }
    >
      <div>
        <BackToProjects />
        <Section className="pt-16">
          <Intro />
        </Section>

        <Section id="problem">
          <Problem />
        </Section>

        <Section id="approach">
          <Approach />
        </Section>
        
        <Section id="solution">
          <Solution />
        </Section>

        <Section id="outcomes" className="mb-16">
          <Outcomes />
          <div className="mt-16">
            <CaseStudyNavigation currentSlug="appealio-insurance-appeals" projects={projects} />
          </div>
        </Section>
      </div>
    </CaseStudyGrid>
  );
}
