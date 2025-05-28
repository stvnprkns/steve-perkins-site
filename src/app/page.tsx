import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import { projects, Project } from '@/lib/projects';

export default function Home() {
  // Get featured projects (first 3 for the home page)
  const featuredProjects: Project[] = projects.slice(0, 3);

  return (
    <div className="w-full">
      <PageHero
        title="Steve Perkins"
        subtitle="Product Design Leader"
        variant="narrow"
        padding="lg"
      />

      {/* Selected Work Section */}
      <Section variant="narrow" className="py-16" noDivider>
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-2">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've led or contributed to, focusing on user-centered design and impactful outcomes.
          </p>
        </div>

        <div className="grid gap-12">
          {featuredProjects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.summary}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {project.timeframe} • {project.role}
                  </div>
                </div>
                <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </Section>

      {/* Latest Notes Section */}
      <Section variant="narrow" className="py-16 bg-muted/10" noDivider>
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Latest Notes</h2>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts, ideas, and insights on design, leadership, and product development.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Replace with your actual notes data */}
          <Link href="/notes/example-note" className="block group">
            <div className="p-6 rounded-lg hover:bg-foreground/5 transition-colors border">
              <h3 className="text-lg font-medium mb-2 group-hover:text-foreground/80">
                Example Note Title
              </h3>
              <p className="text-muted-foreground mb-4">
                A brief description of the note content goes here. This is a preview of the note that gives readers an idea of what to expect.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>May 28, 2025</span>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </div>
          </Link>
          
          {/* Add more note previews as needed */}
          
          <div className="mt-6 text-center">
            <Link 
              href="/notes" 
              className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors"
            >
              View All Notes
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}