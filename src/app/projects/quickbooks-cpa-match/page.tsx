import { CaseStudyGrid, Section, SidebarNav, BackToProjects } from '@/components';
import Intro from './Intro';
import CaseStudyIntro from './CaseStudyIntro';
import TalkingShop from './TalkingShop';
import CreatingExperiment from './CreatingExperiment';
import TheAd from './TheAd';
import PlayingMatchmaker from './PlayingMatchmaker';
import TalkingTax from './TalkingTax';
import WhatWeLearned from './WhatWeLearned';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { projects } from '@/lib/projects';
import { generateProjectMetadata } from '@/components/ProjectMetadata';

export const metadata = generateProjectMetadata({
  title: 'Making Small Business Connections with CPAs',
  description: 'How Intuit QuickBooks matched small businesses with CPAs to improve survival rates.',
  path: '/projects/quickbooks-cpa-match',
  coverImage: '/images/qb-cpa-preview.png',
  publishedTime: '2022-09-23',
  modifiedTime: '2025-06-12',
  tags: ['Intuit', 'QuickBooks', 'CPA', 'Small Business', 'Matchmaking', 'Product Strategy']
});

const sidebarItems = [
  { id: 'talking-shop', label: 'Talking Shop' },
  { id: 'creating-the-experiment', label: 'Creating the Experiment' },
  { id: 'what-we-learned', label: 'What We Learned' }
];

export default function QuickBooksCPAMatch() {
  return (
    <>
      <CaseStudyGrid
        sidebar={
          <nav className="sticky top-0" aria-label="Case study navigation">
            <SidebarNav items={sidebarItems} className="lg:pr-4" />
          </nav>
        }
      >
        <main className="space-y-24" role="main" aria-labelledby="project-title">
          <BackToProjects />
          <Section variant="wide">
            <div className="space-y-12">
              <Intro />
              <CaseStudyIntro />
            </div>
          </Section>

          <Section id="talking-shop" variant="wide">
            <TalkingShop />
          </Section>

          <Section id="creating-the-experiment" variant="wide">
            <CreatingExperiment />
          </Section>

          <Section id="the-ad" variant="wide">
            <TheAd />
          </Section>

          <Section id="playing-matchmaker" variant="wide">
            <PlayingMatchmaker />
          </Section>

          <Section id="talking-tax" variant="wide">
            <TalkingTax />
          </Section>

          <Section id="what-we-learned" variant="wide">
            <WhatWeLearned />
            <footer className="mt-16">
              <nav aria-label="More case studies">
                <CaseStudyNavigation currentSlug="quickbooks-cpa-match" projects={projects} />
              </nav>
            </footer>
          </Section>
        </main>
      </CaseStudyGrid>
    </>
  );
}
