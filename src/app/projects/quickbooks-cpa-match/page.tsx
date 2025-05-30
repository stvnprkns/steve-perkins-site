import { Metadata } from 'next';
import { CaseStudyGrid, Section, SidebarNav, BackToProjects } from '@/components';
import Intro from './Intro';
import TalkingShop from './TalkingShop';
import CreatingExperiment from './CreatingExperiment';
import WhatWeLearned from './WhatWeLearned';
import Outcomes from './Outcomes';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Making Small Business Connections with CPAs',
  description: 'How Intuit QuickBooks matched small businesses with CPAs to improve survival rates.',
  openGraph: {
    title: 'Making Small Business Connections with CPAs',
    images: ['/images/qb-cpa-preview.png'],
  },
};

const sidebarItems = [
  { id: 'talking-shop', label: 'Talking Shop' },
  { id: 'creating-the-experiment', label: 'Creating the Experiment' },
  { id: 'what-we-learned', label: 'What We Learned' },
  { id: 'outcomes', label: 'Outcomes' },
];

export default function QuickBooksCPAMatch() {
  return (
    <>
      <CaseStudyGrid
        sidebar={
          <div className="sticky top-0">
            <SidebarNav items={sidebarItems} className="lg:pr-4" />
          </div>
        }
      >
        <div className="space-y-32">
          <BackToProjects />
          <Section variant="wide" className="pt-16">
            <Intro />
          </Section>

          <Section id="talking-shop" variant="wide">
            <TalkingShop />
          </Section>

          <Section id="creating-the-experiment" variant="wide">
            <CreatingExperiment />
          </Section>

          <Section id="what-we-learned" variant="wide">
            <WhatWeLearned />
          </Section>

          <Section id="outcomes" variant="wide">
            <Outcomes />
            <div className="mt-16">
              <CaseStudyNavigation currentSlug="quickbooks-cpa-match" projects={projects} />
            </div>
          </Section>
        </div>
      </CaseStudyGrid>
    </>
  );
}
