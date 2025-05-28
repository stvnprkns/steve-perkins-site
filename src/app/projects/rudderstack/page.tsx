import { Metadata } from 'next';
import { CaseStudyGrid, Section, SidebarNav, BackToProjects } from '@/components';
import Intro from './Intro';
import Problem from './Problem';
import Approach from './Approach';
import FormReduction from './FormReduction';
import Outcomes from './Outcomes';

export const metadata: Metadata = {
  title: 'RudderStack - Redesigning the Developer Experience',
  description: 'How we improved the developer experience and reduced configuration time by 60%',
};

const sidebarItems = [
  { id: 'problem', label: 'The Problem' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'form-reduction', label: 'From 27 fields to 2 steps' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function RudderstackPage() {
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

        <Section id="form-reduction">
          <FormReduction />
        </Section>
        
        <Section id="outcomes" className="mb-16">
          <Outcomes />
        </Section>
      </div>
    </CaseStudyGrid>
  );
}
