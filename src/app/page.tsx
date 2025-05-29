import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import { projects, Project } from '@/lib/projects';
import UnderlineLink from '@/components/UnderlineLink';

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

      {/* Case Studies Section */}
      <Section variant="narrow" className="py-16" noDivider>
        <div className="mb-12">
          <h2 className="text-2xl font-medium">Case Studies</h2>
        </div>

        <div className="space-y-16 w-full">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="w-full group">
              {/* Text Content - Constrained to 640px */}
              <div className="max-w-[640px] mx-auto">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="space-y-3">
                    <UnderlineLink href={`/projects/${project.slug}`}>
                      <h3 className="text-xl font-medium">
                        {project.title}
                      </h3>
                    </UnderlineLink>
                    <p className="text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {project.timeframe} • {project.role}
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Project Images - Full width container */}
              <div className="w-full mt-8 -mx-4 sm:-mx-6 md:mx-0">
                <Link href={`/projects/${project.slug}`} className="block w-full">
                  {Array.isArray(project.images) ? (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 md:px-0">
                      {project.images.slice(0, 2).map((img, index) => (
                        <div key={index} className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden w-full">
                          <img 
                            src={img} 
                            alt={`${project.title} ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden w-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </Link>
              </div>
            </article>
          ))}
        </div>

      </Section>

      {/* Latest Notes Section */}
      <Section variant="narrow" className="py-16 bg-muted/10" noDivider>
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Latest Notes</h2>
          <div className="text-muted-foreground max-w-2xl">
            {"This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.\n\nSometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud.\n\nIf you're working through the same kinds of problems — or come at them from the other side — I'd love to hear from you.".split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {/* Replace with your actual notes data */}
          <Link href="/notes/example-note" className="block group">
            <div className="p-6 rounded-lg hover:bg-foreground/5 transition-colors border">
              <UnderlineLink href="/notes/example-note">
                <h3 className="text-lg font-medium mb-2">
                  Example Note Title
                </h3>
              </UnderlineLink>
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