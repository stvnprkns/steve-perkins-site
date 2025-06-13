import Image from 'next/image';
import { SidebarNav, CaseStudyGrid, Section, BackToProjects } from '@/components';
import { ExternalLink } from '@/components/ExternalLink';
import HowIBuiltATeam from './HowIBuiltATeam';
import HowWeWork from './HowWeWork';
import HowWeSucceeded from './HowWeSucceeded';
import KeyMetrics from '@/components/KeyMetrics';
import { appealioData } from './appealioData';
import { TeamList } from '@/components/TeamMember';
import { projects } from '@/lib/projects';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { generateProjectMetadata } from '@/components/ProjectMetadata';

// Enhanced metadata with structured data for better SEO and LLM understanding
export const metadata = generateProjectMetadata({
  title: appealioData.title,
  description: 'How we designed an intuitive platform to simplify the insurance appeals process for healthcare providers',
  path: '/projects/appealio-insurance-appeals',
  coverImage: '/images/appealio-preview.png',
  publishedTime: '2023-05-15',
  modifiedTime: '2025-06-12',
  tags: ['Healthcare Tech', 'Insurance Appeals', 'UX Design', 'Product Strategy', 'AppealIO']
});

const sidebarItems = [
  { id: 'project-overview', label: 'Project Overview' },
  { id: 'customer-research', label: 'Customer Research' },
  { id: 'building-the-product', label: 'Building the Product' },
  { id: 'outcomes', label: 'Outcomes' },
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
        <Section variant="wide">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-left">
            {appealioData.title}
          </h1>
          <div className="mt-8 text-lg text-muted-foreground text-left">
            <p className="font-medium">
              <ExternalLink href={appealioData.company.url}>
                {appealioData.company.name}
              </ExternalLink>
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Team</h3>
              <TeamList members={appealioData.team} />
            </div>
          </div>
          {appealioData.heroImage && (
            <div className="w-[110%] relative -left-[5%] my-8 md:my-12">
              <div className="max-w-screen-2xl mx-auto">
                <div className="relative w-full aspect-video">
                  <Image
                    src={appealioData.heroImage.src}
                    alt={appealioData.heroImage.alt}
                    fill
                    className="object-cover w-full h-full rounded"
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="prose max-w-prose mt-8 text-text-base">
            <p>{appealioData.summary}</p>
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
              currentSlug="appealio-insurance-appeals" 
              projects={projects} 
            />
          </div>
        </Section>
      </div>
    </CaseStudyGrid>
  );
}
