import { projects } from "@/lib/projects";
import Link from "next/link";
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";

export default function ProjectsPage() {
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="Projects"
        subtitle={
          "These are the things I've built. Some were products, some were teams, some were systems. All of them taught me something about how to build better things."
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
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <Link href={`/projects/${project.slug}`} className="text-sm text-foreground/80 hover:text-foreground">
                  {project.title}
                </Link>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-muted-foreground text-right">
                {project.timeframe}
              </div>
            </li>
          ))}
        </div>
      </Section>
    </div>
  );
}
