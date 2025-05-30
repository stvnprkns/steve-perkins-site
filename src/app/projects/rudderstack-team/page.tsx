import { Metadata } from 'next';
import Image from 'next/image';
import { SidebarNav, CaseStudyGrid, Section, BackToProjects } from '@/components';
import { ExternalLink } from '@/components/ExternalLink';
import HowIBuiltATeam from './HowIBuiltATeam';
import HowWeWork from './HowWeWork';
import HowWeSucceeded from './HowWeSucceeded';
import KeyMetrics from '@/components/KeyMetrics';
import { rudderstackTeamData } from './rudderstackTeamData';
import { TeamList } from '@/components/TeamMember';
import { rudderstackTeam } from '@/types/team';
import { projects } from '@/lib/projects';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';

export const metadata: Metadata = {
  title: 'Founding a Design Team and Growing a Culture',
  description: 'How I built a collaborative, high-output design team at RudderStack and helped design become a strategic business partner.',
  openGraph: {
    images: ['/images/rudderstack-team-preview.png'],
  },
};

const sidebarItems = [
  { id: 'how-i-built-a-team', label: 'How I Built a Team' },
  { id: 'how-we-work', label: 'How We Work' },
  { id: 'how-we-succeeded', label: 'How We Succeeded' },
];

export default function RudderstackTeamPage() {
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
        <Section variant="wide" className="pt-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-left">
            {rudderstackTeamData.title}
          </h1>
          <div className="mt-8 text-lg text-muted-foreground text-left">
            <p className="font-medium">
              <ExternalLink href={rudderstackTeamData.company.url}>
                {rudderstackTeamData.company.name}
              </ExternalLink>
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Team</h3>
              <TeamList members={rudderstackTeam} />
            </div>
          </div>
          {rudderstackTeamData.heroImage && (
            <div className="w-[110%] relative -left-[5%] my-8 md:my-12">
              <div className="max-w-screen-2xl mx-auto">
                <div className="relative w-full aspect-video">
                  <Image
                    src={rudderstackTeamData.heroImage.src}
                    alt={rudderstackTeamData.heroImage.alt}
                    fill
                    className="object-cover w-full h-full rounded"
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="prose max-w-prose mt-8 text-text-base">
            <p>{rudderstackTeamData.summary}</p>
          </div>
        </Section>

          <Section id="how-i-built-a-team" variant="wide">
            <HowIBuiltATeam />
          </Section>

          <Section variant="wide" id="how-we-work">
            <HowWeWork />
          </Section>

          <Section variant="wide" id="how-we-succeeded" className="space-y-0">
            <HowWeSucceeded />
          </Section>
          <Section variant="wide" id="outcomes" className="max-w-prose mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
          <KeyMetrics metrics={rudderstackTeamData.outcomes.metrics.map(m => ({ value: m.value, description: m.label }))} />
          <p className="text-base leading-loose text-text-base max-w-prose mx-auto mt-4 mb-8">
            {rudderstackTeamData.outcomes.summary}
          </p>
          <div className="mt-16">
            <CaseStudyNavigation 
              currentSlug="rudderstack-team" 
              projects={projects} 
            />
          </div>
        </Section>
      </div>
    </CaseStudyGrid>
  );
}
