'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface AnimatedCaseStudyProps {
  children: React.ReactNode;
  title: string;
  summary: string;
  currentSlug: string;
  projects: Project[];
  heroImage?: {
    src: string;
    alt: string;
  };
  team?: Array<{
    name: string;
    role: string;
    avatar?: string;
  }>;
  company?: {
    name: string;
    url: string;
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + (i * 0.08),
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }
  })
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2
    }
  }
};

export default function AnimatedCaseStudy({
  children,
  title,
  summary,
  currentSlug,
  projects,
  heroImage,
  team,
  company
}: AnimatedCaseStudyProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero Section with Initial Load Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-left mb-8">
            {title}
          </h1>
          
          {summary && (
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground mb-8">{summary}</p>
            </ScrollReveal>
          )}

          {/* Project Metadata */}
          <div className="space-y-6">
            {company && (
              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Company</h3>
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    {company.name}
                  </a>
                </div>
              </ScrollReveal>
            )}
            
            {team && team.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Team</h3>
                <div className="flex flex-wrap gap-2">
                  {team.map((member, index) => (
                    <ScrollReveal key={member.name} delay={0.1 + (index * 0.05)}>
                      <div className="flex items-center space-x-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm">
                        {member.avatar && (
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <img 
                              src={member.avatar} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <span>{member.name}</span>
                        <span className="text-muted-foreground">{member.role}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
            
            {heroImage && (
              <ScrollReveal delay={0.2} className="mt-12">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img 
                    src={heroImage.src} 
                    alt={`${title} project`} 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
          
          <div className="prose prose-neutral max-w-none pt-8 space-y-12">
            {React.Children.map(children, (child, index) => (
              <ScrollReveal 
                key={`content-${index}`} 
                delay={0.1 * Math.min(index, 3)} // Cap the delay for better UX
                yOffset={30}
              >
                <div>
                  {child}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal 
            delay={0.2} 
            className="mt-16"
            yOffset={30}
          >
            <CaseStudyNavigation currentSlug={currentSlug} projects={projects} />
          </ScrollReveal>
        </motion.div>
      </div>
    </div>
  );
}
