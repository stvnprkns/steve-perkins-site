import { sideProjects } from "@/lib/side-projects";
import UnderlineLink from "@/components/UnderlineLink";
import PageHero from "@/components/PageHero";
import Section from "@/components/layout/Section";
import { generateProjectMetadata } from "@/components/ProjectMetadata";

export const metadata = generateProjectMetadata({
  title: "Side Projects & Experiments",
  description: "Personal projects, experiments, and creative ventures by Steve Perkins - From design tools to media appearances.",
  path: "/sideprojects",
  coverImage: "/images/sideprojects-preview.jpg",
  modifiedTime: "2025-06-12",
  tags: ["Side Projects", "Creative Experiments", "Design Tools", "Personal Work", "Media Appearances"]
});

export default function SideProjectsPage() {
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="Side Projects"
        subtitle={
          "The things I build when I'm not building products. From design tools to TV appearances, these are the side projects that keep me curious and learning."
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))
        }
        variant="narrow"
        padding="lg"
      />

      <Section variant="narrow" className="py-16" noDivider>
        <div className="space-y-4">
          {sideProjects.map((project) => (
            <li key={project.slug} className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <UnderlineLink href={project.link || '#'}>
                  {project.title}
                </UnderlineLink>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-gray-500 text-right">
                {project.timeframe}
              </div>
            </li>
          ))}
        </div>
      </Section>
    </div>
  );
}
