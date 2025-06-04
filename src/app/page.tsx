import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import { projects, Project } from '@/lib/projects';
import UnderlineLink from '@/components/UnderlineLink';
import HoverReveal, { HoverImage } from '@/components/HoverReveal';
import Image from 'next/image';
import React from 'react';

// Image cluster configurations
const dogsAndKidsImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/bluey.webp',
    alt: 'Bluey and family',
    width: 200,
    height: 150,
    initial: { x: -40, y: -60, scale: 0.9, rotate: -5 },
    animate: { x: -180, y: -40, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/dogs.webp',
    alt: 'Dogs playing',
    width: 180,
    height: 140,
    initial: { x: 60, y: 60, scale: 0.8, rotate: 3 },
    animate: { x: 100, y: 40, scale: 0.9, rotate: 5 }
  },
  {
    src: '/images/hover-reveals/kids-dogs.webp',
    alt: 'Kids playing with dogs',
    width: 200,
    height: 150,
    initial: { x: 20, y: -20, scale: 0.85, rotate: 2 },
    animate: { x: 20, y: -60, scale: 0.95, rotate: 2 }
  }
];

const tvSteveImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/steve1.webp',
    alt: 'Steve on TV 1',
    width: 200,
    height: 150,
    initial: { x: -100, y: -60, scale: 1, rotate: -5 },
    animate: { x: -220, y: -40, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/steve2.webp',
    alt: 'Steve on TV 2',
    width: 220,
    height: 160,
    initial: { x: 0, y: 0, scale: 1, rotate: 0 },
    animate: { x: 0, y: 40, scale: 1, rotate: 0 }
  },
  {
    src: '/images/hover-reveals/steve3.webp',
    alt: 'Steve on TV 3',
    width: 200,
    height: 150,
    initial: { x: 100, y: 60, scale: 1, rotate: 5 },
    animate: { x: 200, y: 40, scale: 1, rotate: 5 }
  }
];

const basketballImages: HoverImage[] = [
  {
    src: '/images/hover-reveals/ben-wallace.webp',
    alt: 'Ben Wallace',
    width: 240,
    height: 160,
    initial: { x: 0, y: 0, scale: 1, rotate: 0 },
    animate: { x: 0, y: 20, scale: 1, rotate: 0 }
  },
  {
    src: '/images/hover-reveals/dirk.webp',
    alt: 'Dirk Nowitzki',
    width: 180,
    height: 240,
    initial: { x: -80, y: -40, scale: 1, rotate: -5 },
    animate: { x: -180, y: -20, scale: 1, rotate: -5 }
  },
  {
    src: '/images/hover-reveals/kobe.webp',
    alt: 'Kobe Bryant',
    width: 180,
    height: 240,
    initial: { x: 160, y: 40, scale: 1, rotate: 5 },
    animate: { x: 240, y: 20, scale: 1, rotate: 5 }
  }
];

export default function Home() {
  // Get all projects for the home page
  const featuredProjects: Project[] = [...projects];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="Steve Perkins"
        subtitle={
          <>
            <p>
              I’m currently the Senior Manager of Product Design at <a href="https://www.procore.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors inline-flex items-center">Procore <span className='ml-1'>↗</span></a>, leading
              teams behind the platforms that power construction — Directory,
              Permissions, Ecosystem, and Authentication.
            </p>
            <br />
            <p>
              Over the years, I’ve helped launch more than 50 products across
              fintech, healthcare, dev tools, and communication. From building the
              first mobile app for CPAs to file taxes, to shaping early concepts for
              Amex Pay It Plan It, to working on what became TurboTax Live — I’ve
              focused on the unglamorous stuff that quietly powers everything else.
            </p>
            <br />
            <p>
              I’m a generalist, a builder, and a team-first leader. I care about
              momentum, culture, and whether the decisions we make today lead to
              meaningful change.
            </p>
            <br />
            <p>
              Outside of work, I’m just{' '}
              <HoverReveal images={tvSteveImages} position="right">
                <UnderlineLink href="#">Steve</UnderlineLink>
              </HoverReveal>{' '}
              — a dad{' '}
              <HoverReveal images={dogsAndKidsImages} position="left">
                <UnderlineLink href="#">
                  raising twins, wrangling three dogs
                </UnderlineLink>
              </HoverReveal>
              , and spending Saturday mornings{' '}
              <HoverReveal images={basketballImages} position="right">
                <UnderlineLink href="#">playing basketball</UnderlineLink>
              </HoverReveal>
              .
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
                      {project.images && project.images.length > 0 ? (
                        project.images.length > 1 ? (
                          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.images.slice(0, 2).map((img, index) => (
                              <div key={index} className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full">
                                <Image 
                                  src={img} 
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover transition-all duration-300 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full">
                            <Image 
                              src={project.images[0]} 
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-all duration-300 group-hover:scale-105"
                            />
                          </div>
                        )
                      ) : (
                        <div className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full flex items-center justify-center">
                          <span className="text-muted-foreground">No image available</span>
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
    </div>
  );
}