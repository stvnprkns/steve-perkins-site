import { sideProjects } from "@/lib/side-projects";
import Link from "next/link";
import UnderlineLink from "@/components/UnderlineLink";
import PageHero from "@/components/PageHero";
import Section from "@/components/layout/Section";

export default function SideProjectsPage() {
  return (
    <>
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
              <div className="text-muted-foreground text-right">
                {project.timeframe}
              </div>
            </li>
          ))}
        </div>
      </Section>
    </>
  );
}
