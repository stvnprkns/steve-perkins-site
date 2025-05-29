import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import { projects, Project } from '@/lib/projects';
import UnderlineLink from '@/components/UnderlineLink';
import HoverReveal from '@/components/HoverReveal';
import React from 'react';

export default function Home() {
  // Get all projects for the home page
  const featuredProjects: Project[] = [...projects];

  return (
    <>
      <PageHero
        title="Steve Perkins"
        className="p-8"
        subtitle={
          <>
            <p>Hey, I'm Steve — a design leader, 3x founding designer, and someone who's spent the last decade building clarity where there wasn't any.</p>
            <br />
            <p>I've helped launch 50+ products across startups and scale-ups — from Designer on <a href='https://www.intuitlabs.com/' className='inline-flex items-center'>Intuit Labs <span className='ml-1'>↗</span></a>, to Head of Design at <a href='https://www.rudderstack.com/' className='inline-flex items-center'>RudderStack <span className='ml-1'>↗</span></a>, to Founding Designer at <a href='https://www.tigerconnect.com/' className='inline-flex items-center'>TigerConnect <span className='ml-1'>↗</span></a>. I care a lot about thoughtful systems, fast feedback loops, and design that earns trust with customers.</p>
            <br />
            <p>But product isn't the only thing I build. I've got 
              <HoverReveal image='/hover-reveals/kids-dogs.png' alt='Family and pets' className='relative' display='inline'>
                <UnderlineLink href='#' className='inline-block'>
                  twin 4-year-olds and three dogs
                </UnderlineLink>
              </HoverReveal>, and a running list of every Steve who's ever appeared on TV—which, yes, is one of several <Link href='/sideprojects' className='inline-flex items-center'>
                side projects
              </Link>.
            </p>
            <br />
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
              {/* Text Content - Matches image container width */}
              <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
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
              </div>
              
              {/* Project Images - Centered container */}
              <div className="w-full mt-8 relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-0">
                <div className="max-w-[640px] mx-auto">
                  <UnderlineLink href={`/projects/${project.slug}`}>
                    <div className="block w-full relative left-0 right-0">
                      {Array.isArray(project.images) ? (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section variant="narrow" className="py-16" noDivider>
        <div className="w-full -mx-4 sm:-mx-6">
          <div className="relative px-4 sm:px-6">
            <div className="absolute inset-0 -inset-x-3 -inset-y-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/50 rounded-lg -z-10" />
            <div className="max-w-3xl mx-auto py-6">
              <div className="space-y-1 mb-2">
                <h2 className="text-lg font-medium">Latest Notes</h2>
                <div className="text-sm text-muted-foreground">
                  Ideas I'm wrestling with, patterns I keep noticing, questions I haven't fully answered.
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-3" />
              
              <div className="space-y-4">
                {/* Example Note - Replace with your actual notes data */}
                <div className="group">
                  <Link 
                    href="/notes/example-note" 
                    className="block group no-underline text-foreground"
                  >
                    <div className="flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        📝
                      </span>
                      <div>
                        <span className="font-medium">
                          Example Note Title
                        </span>
                        <p className="text-base text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                          A brief description of the note content goes here. This is a preview of the note that gives readers an idea of what to expect.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="mt-4 text-center">
                  <Link 
                    href="/notes" 
                    className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm"
                  >
                    View All Notes
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}