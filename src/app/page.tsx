import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import { projects, Project } from '@/lib/projects';
import UnderlineLink from '@/components/UnderlineLink';
import HoverReveal from '@/components/HoverReveal';
import React from 'react';

export default function Home() {
  // Get featured projects (first 3 for the home page)
  const featuredProjects: Project[] = projects.slice(0, 3);

  return (
    <>
      <PageHero
        title="Steve Perkins"
        className="p-8"
        subtitle={
          <>
            <p>Hey, I'm Steve — a design leader, 3x founding designer, and someone who's spent the last decade building clarity where there wasn't any.</p>
            <p>I've helped launch 50+ products across startups and scale-ups — from Designer on <a href='https://www.intuitlabs.com/' className='text-foreground/80 hover:text-foreground underline underline-offset-4'>Intuit Labs</a> ↗, to Head of Design at <a href='https://www.rudderstack.com/' className='text-foreground/80 hover:text-foreground underline underline-offset-4'>RudderStack</a> ↗, to Founding Designer at <a href='https://www.tigerconnect.com/' className='text-foreground/80 hover:text-foreground underline underline-offset-4'>TigerConnect</a> ↗. I care a lot about thoughtful systems, fast feedback loops, and design that earns trust with customers.</p>
            <p>But product isn't the only thing I build. I've got 
              <HoverReveal image='/hover-reveals/kids-dogs.png' alt='Family and pets' className='relative' display='inline'>
                <UnderlineLink href='#' className='inline-block'>
                  twin 4-year-olds and three dogs
                </UnderlineLink>
              </HoverReveal>, and a running list of every Steve who's ever appeared on TV—which, yes, is one of several
              <Link href='/projects' className='text-foreground/80 hover:text-foreground'>
                side projects
              </Link>.
            </p>
            <p>I like my teams opinionated, my design work honest and fast-moving, and my
              <HoverReveal image='/hover-reveals/nba.png' alt='NBA players' className='relative' display='inline'>
                <UnderlineLink href='#' className='inline-block'>
                  basketball players from the mid-2000s
                </UnderlineLink>
              </HoverReveal>.
            </p>
          </>
        }
        variant="narrow"
        padding="lg"
      />

      {/* Case Studies Section */}
      <Section variant="narrow" className="py-16" noDivider>
        <div className="space-y-16 w-full">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="w-full group">
              {/* Text Content - Constrained to 640px */}
              <div className="max-w-[640px] mx-auto">
                <div className="space-y-3">
                  <div className="text-base text-gray-500 mb-2">
                    {project.timeframe}
                  </div>
                  <UnderlineLink href={`/projects/${project.slug}`}>
                    <h3 className="text-base font-medium">
                      {project.title}
                    </h3>
                  </UnderlineLink>
                  <p className="text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </div>
              
              {/* Project Images - Centered container */}
              <div className="w-full mt-8 relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-0">
                <UnderlineLink href={`/projects/${project.slug}`}>
                  <div className="block w-full relative left-0 right-0">
                    {Array.isArray(project.images) ? (
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 md:px-0">
                        {project.images.slice(0, 2).map((img, index) => (
                          <div key={index} className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full">
                            <img 
                              src={img} 
                              alt={`${project.title} ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  </div>
                </UnderlineLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section variant="narrow" className="py-16 bg-muted/10" noDivider>
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Latest Notes</h2>
          <div className="prose prose-lg text-muted-foreground">
            {[
              "This is where I put the half-formed stuff. Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered. You won't find polish here — just the starting points of clarity.",
              "Sometimes it's a hunch. Sometimes it's something a customer said that won't leave my head. Sometimes it's a note to my future self, written out loud.",
              "If you're working through the same kinds of problems — or come at them from the other side — I'd love to hear from you."
            ].map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          {/* Replace with your actual notes data */}
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
    </>
  );
}