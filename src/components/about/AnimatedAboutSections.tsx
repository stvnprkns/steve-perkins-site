'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import UnderlineLink from '@/components/UnderlineLink';

// Dynamically import SequenceLoader with no SSR
const SequenceLoader = dynamic(() => import('@/components/SequenceLoader'), {
  ssr: false,
});

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

type ExperienceItem = {
  company: string;
  companyUrl?: string;
  role: string;
  years: string;
};

type AboutSection = {
  id: string;
  content: React.ReactNode;
};

export function AnimatedAboutSections({ 
  introContent,
  experienceItems 
}: { 
  introContent: string[];
  experienceItems: ExperienceItem[];
}) {
  // Content is now handled by SequenceLoader, no need for intersection observer here

  return (
    <div className="w-full">
      <SequenceLoader delayBetween={0.2} initialDelay={0.3}>
        {/* Spacer to match home page layout */}
        <div className="h-6" />

        {/* Intro Content */}
        <div className="w-full max-w-[640px] mx-auto">
          <div className="prose text-base leading-relaxed space-y-6">
            {introContent.map((paragraph, index) => (
              <p key={index} className="m-0 mb-4 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full bg-muted/10 py-16">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
            <div className="max-w-[640px] mx-auto space-y-8">
              <h2 className="text-2xl font-medium">Experience</h2>
              <ul className="space-y-4 m-0 p-0 list-none">
                {experienceItems.map((item, index) => (
                  <li 
                    key={`${item.company}-${index}`}
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-0 text-xs sm:text-sm"
                    style={{ minWidth: 0 }}
                  >
                    <div className="truncate min-w-0 max-w-full">
                      {item.companyUrl ? (
                        <UnderlineLink href={item.companyUrl}>
                          {item.company}
                        </UnderlineLink>
                      ) : (
                        item.company
                      )}
                    </div>
                    <span className="flex-grow border-t border-gray-500/30 border-dashed min-w-4 mx-2 align-middle" style={{ flexBasis: 0, flexShrink: 999999 }} />
                    <div className="flex flex-wrap items-center justify-end min-w-0 max-w-full text-right">
                      <div className="font-normal text-gray-600 dark:text-gray-300 truncate min-w-0 max-w-full">
                        {item.role}
                      </div>
                      <div className="ml-2 w-auto text-right tabular-nums text-gray-400 dark:text-gray-500 whitespace-nowrap">
                        {item.years}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full py-16">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
            <div className="max-w-[640px] mx-auto space-y-8">
              <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl m-0">
                I'm always open to discussing product design, leadership, or potential opportunities. 
                Feel free to reach out through any of these channels:
              </p>
              
              <div className="flex flex-wrap gap-6 pt-2 text-base">
                <a 
                  href="mailto:meet@steveperk.com"
                  className="text-foreground hover:text-foreground/70 transition-colors duration-200"
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/perkinsstephen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/70 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://steveperk.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/70 transition-colors duration-200"
                >
                  Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      </SequenceLoader>
    </div>
  );
}
