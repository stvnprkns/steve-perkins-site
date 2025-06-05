'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import UnderlineLink from '@/components/UnderlineLink';
import { projects, Project } from '@/lib/projects';
import { AnimatedHeroTitle, AnimatedHeroContent } from '@/components/home/AnimatedHero';
import { AnimatedCaseStudies } from '@/components/home/AnimatedCaseStudies';

export default function Home() {
  // Get all projects for the home page
  const featuredProjects: Project[] = [...projects];
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Callback when hero content is fully visible
  const handleHeroVisible = () => {
    setIsHeroVisible(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title={<AnimatedHeroTitle />}
        subtitle={<AnimatedHeroContent onComplete={handleHeroVisible} />}
      >
        {/* Hero content is passed as children */}
      </PageHero>

      {/* Case Studies Section - Only render after hero is visible */}
      {isHeroVisible && (
        <Section variant="narrow" className="py-16" noDivider>
          <AnimatedCaseStudies projects={featuredProjects} />
        </Section>
      )}
    </div>
  );
}