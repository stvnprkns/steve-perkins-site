import { CaseStudyGrid, Section, SidebarNav, BackToProjects } from '@/components';
import Intro from './Intro';
import Problem from './Problem';
import Approach from './Approach';
import FormReduction from './FormReduction';
import Outcomes from './Outcomes';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { projects } from '@/lib/projects';
import { generateProjectMetadata } from '@/components/ProjectMetadata';

export const metadata = generateProjectMetadata({
  title: 'RudderStack - Redesigning the Developer Experience',
  description: 'How we improved the developer experience and reduced configuration time by 60%',
  path: '/projects/rudderstack',
  coverImage: '/images/rudderstack-preview.png',
  publishedTime: '2024-01-18',
  modifiedTime: '2025-06-12',
  tags: ['Developer Experience', 'UX Design', 'RudderStack', 'Form Design', 'Data Engineering', 'Customer Data Platform']
});

const sidebarItems = [
  { id: 'problem', label: 'The Problem' },
  { id: 'approach', label: 'Our Approach' },
  { 
    id: 'form-reduction', 
    label: 'From 27 fields to 2 steps',
    subItems: [
      { id: 'config-design', label: 'Configuring with ease' }
    ]
  },
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
        <Section variant="wide">
          <Intro />
        </Section>

        <Section variant="wide" id="problem" className="mb-24">
          <Problem />
        </Section>

        <Section variant="wide" id="approach" className="mb-24">
          <Approach />
        </Section>

        <Section variant="wide" id="form-reduction" className="mb-24">
          <FormReduction />
        </Section>
        
        <Section variant="wide" id="outcomes" className="mb-16">
          <Outcomes />
          <div className="mt-16">
            <CaseStudyNavigation currentSlug="rudderstack" projects={projects} />
          </div>
        </Section>
      </div>
    </CaseStudyGrid>
  );
}
