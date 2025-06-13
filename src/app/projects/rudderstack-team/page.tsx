import Image from 'next/image';
import { SidebarNav, CaseStudyGrid, Section, BackToProjects } from '@/components';
import MarkdownImage from '@/components/markdown/MarkdownImage';
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
import { generateProjectMetadata } from '@/components/ProjectMetadata';

export const metadata = generateProjectMetadata({
  title: 'Founding a Design Team and Growing a Culture',
  description: 'How I built a collaborative, high-output design team at RudderStack and helped design become a strategic business partner.',
  path: '/projects/rudderstack-team',
  coverImage: '/images/rudderstack-team-preview.png',
  publishedTime: '2024-02-20',
  modifiedTime: '2025-06-12',
  tags: ['Design Leadership', 'Team Building', 'RudderStack', 'Design Culture', 'Design Operations', 'Remote Teams']
});

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
        <Section variant="wide">
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
            <div className="w-full my-8 md:my-12">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={rudderstackTeamData.heroImage.src}
                  alt={rudderstackTeamData.heroImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                  quality={85}
                />
              </div>
            </div>
          )}
          <div className="prose max-w-prose mt-8 text-text-base">
            <p>{rudderstackTeamData.summary}</p>
          </div>
        </Section>

          <Section id="how-i-built-a-team" variant="wide" className="mb-24">
            <HowIBuiltATeam />
          </Section>

          <Section variant="wide" id="how-we-work" className="mb-24">
            <HowWeWork />
          </Section>

          <Section variant="wide" id="how-we-succeeded" className="mb-16">
            <HowWeSucceeded />
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
