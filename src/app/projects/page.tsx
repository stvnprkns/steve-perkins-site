import { projects } from "@/lib/projects";
import Link from "next/link";
import Section from "@/components/layout/Section";
import PageHero from "@/components/PageHero";
import { generateProjectMetadata } from "@/components/ProjectMetadata";

export const metadata = generateProjectMetadata({
  title: "Projects & Case Studies",
  description: "Featured design and product development projects by Steve Perkins - Design leader specializing in product strategy and building high-performing teams.",
  path: "/projects",
  coverImage: "/images/projects-preview.jpg",
  modifiedTime: "2025-06-12",
  tags: ["Design Portfolio", "Case Studies", "Product Design", "UX Projects", "Design Leadership"]
});

export default function ProjectsPage() {
  return (
    <article className="w-full mx-auto max-w-3xl px-4 sm:px-6">
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

      <Section variant="narrow" className="py-16" noDivider as="section" aria-labelledby="project-list-heading">
        <h2 id="project-list-heading" className="sr-only">Project List</h2>
        <ul className="space-y-4 list-none p-0" role="list">
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <Link 
                  href={`/projects/${project.slug}`} 
                  className="text-sm text-foreground/80 hover:text-foreground"
                  aria-label={`Project: ${project.title}`}
                >
                  {project.title}
                </Link>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }} aria-hidden="true"></span>
              <div className="text-muted-foreground text-right">
                <time dateTime={project.timeframe}>{project.timeframe}</time>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
