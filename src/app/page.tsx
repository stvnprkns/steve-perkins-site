'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import UnderlineLink from '@/components/UnderlineLink';
import { projects, Project } from '@/lib/projects';
import { AnimatedHeroTitle, AnimatedHeroContent } from '@/components/home/AnimatedHero';
import { AnimatedCaseStudies } from '@/components/home/AnimatedCaseStudies';
import { LastUpdated } from '@/components/LastUpdated';
import { JsonLdSchema } from '@/components/JsonLdSchema';

export default function Home() {
  // Get all projects for the home page
  const featuredProjects: Project[] = [...projects];
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Set initial loaded state
  useEffect(() => {
    setIsPageLoaded(true);
    setShowContent(true);
  }, []);

  // Callback when hero content is fully visible
  const handleHeroVisible = () => {
    setIsHeroVisible(true);
  };

  return (
    <div className="w-full">
      <JsonLdSchema type="person" />
      <AnimatePresence>
        <PageHero
          title={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AnimatedHeroTitle />
            </motion.div>
          }
          subtitle={
            <motion.div
              initial="hidden"
              animate={showContent ? 'show' : 'hidden'}
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <AnimatedHeroContent onComplete={handleHeroVisible} />
            </motion.div>
          }
          variant="narrow"
          padding="xl"
        />
      </AnimatePresence>

      {/* Case Studies Section - Load after hero animation */}
      <AnimatePresence>
        {isHeroVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Section variant="narrow" className="pt-0 pb-16" noDivider>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
                <LastUpdated date="2025-06-13" />
              </div>
              <AnimatedCaseStudies projects={featuredProjects} />
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}