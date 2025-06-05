'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import UnderlineLink from '@/components/UnderlineLink';
import { Project } from '@/lib/projects';

interface AnimatedCaseStudiesProps {
  projects: Project[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  })
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

  /**
   * Renders a list of animated case studies.
   * 
   * Each project is rendered as a separate `motion.article` component and is
   * animated in when it comes into view using the IntersectionObserver API.
   * 
   * @param projects - An array of project objects with the following properties:
   *    - `slug`: The slug of the project.
   *    - `title`: The title of the project.
   *    - `summary`: A brief summary of the project.
   *    - `timeframe`: The timeframe of the project.
   *    - `images`: An array of image URLs for the project.
   * @returns A JSX element containing the list of animated case studies.
   */
export function AnimatedCaseStudies({ projects }: AnimatedCaseStudiesProps) {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([0]); // Start with first project visible
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef<boolean[]>([]);

  useEffect(() => {
    const currentRefs = projectRefs.current;
    
    // Initialize hasAnimated for all projects
    hasAnimated.current = projects.map((_, i) => i === 0); // First project has animated

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            
            // Only add to visible projects if it hasn't been animated yet
            if (!hasAnimated.current[projectIndex]) {
              hasAnimated.current[projectIndex] = true;
              setVisibleProjects(prev => 
                prev.includes(projectIndex) ? prev : [...prev, projectIndex]
              );
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all projects except the first one (already visible)
    currentRefs.forEach((ref, index) => {
      if (ref && index > 0) {
        ref.setAttribute('data-index', index.toString());
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  // Always show the first project, others only if they've been scrolled to
  const shouldShow = (index: number) => {
    return index === 0 || visibleProjects.includes(index);
  };

  return (
    <div className="space-y-16 w-full">
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                projectRefs.current[index] = el;
              }
            }}
            className="w-full group py-8"
            initial="hidden"
            animate={shouldShow(index) ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  when: "beforeChildren"
                }
              }
            }}
          >
            {/* Text Content */}
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
              <motion.div 
                className="max-w-[640px] mx-auto space-y-6"
                initial="hidden"
                animate={shouldShow(index) ? 'visible' : 'hidden'}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                <motion.div 
                  className="text-base text-gray-500"
                  variants={fadeInUp}
                  custom={0}
                >
                  {project.timeframe}
                </motion.div>
                <motion.div variants={fadeInUp} custom={1}>
                  <UnderlineLink href={`/projects/${project.slug}`}>
                    <h3 className="text-base font-medium">
                      {project.title}
                    </h3>
                  </UnderlineLink>
                </motion.div>
                <motion.p 
                  className="text-muted-foreground"
                  variants={fadeInUp}
                  custom={2}
                >
                  {project.summary}
                </motion.p>
              </motion.div>
            </div>
            
            {/* Project Images */}
            <motion.div 
              className="w-full mt-12 relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-0"
              initial="hidden"
              animate={shouldShow(index) ? 'visible' : 'hidden'}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                }
              }}
            >
              <div className="max-w-[640px] mx-auto">
                <UnderlineLink href={`/projects/${project.slug}`}>
                  <div className="block w-full relative left-0 right-0">
                    {project.images && project.images.length > 0 ? (
                      project.images.length > 1 ? (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.images.slice(0, 2).map((img, imgIndex) => (
                            <motion.div 
                              key={imgIndex} 
                              className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full"
                              variants={imageVariants}
                              custom={imgIndex}
                              whileHover="hover"
                            >
                              <Image 
                                src={img} 
                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <motion.div 
                          className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full"
                          variants={imageVariants}
                          whileHover="hover"
                        >
                          <Image 
                            src={project.images[0]} 
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </motion.div>
                      )
                    ) : (
                      <motion.div 
                        className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden w-full flex items-center justify-center"
                        variants={imageVariants}
                      >
                        <span className="text-muted-foreground">No image available</span>
                      </motion.div>
                    )}
                  </div>
                </UnderlineLink>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </AnimatePresence>
    </div>
  );
}
