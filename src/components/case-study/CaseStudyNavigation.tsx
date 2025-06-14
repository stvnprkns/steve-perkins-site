'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/lib/projects';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface CaseStudyNavigationProps {
  currentSlug: string;
  projects: Project[];
  className?: string;
}

export default function CaseStudyNavigation({ currentSlug, projects, className }: CaseStudyNavigationProps) {
  // Memoize the navigation items to prevent unnecessary recalculations
  const { nextProject, firstProject } = useMemo(() => {
    const currentIndex = projects.findIndex(project => project.slug === currentSlug);
    const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    const first = projects[0];
    
    return { prevProject: prev, nextProject: next, firstProject: first };
  }, [currentSlug, projects]);

  // If there's no next project, link to the first project
  if (!nextProject && firstProject) {
    return (
      <nav className={cn('mt-16 max-w-[640px] mx-auto', className)} aria-label="Project navigation">
        <Link 
          href={`/projects/${firstProject.slug}`}
          className="block group no-underline"
          aria-label={`Next project: ${firstProject.title}`}
          prefetch={false}
        >
          <article className="bg-card border border-purple-200 dark:border-purple-800/50 rounded-lg p-6 transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/30">
            <div className="relative h-full">
              <p className="text-sm text-muted-foreground mb-1"><span className="sr-only">Navigate to </span>Up Next</p>
              <div className="flex items-center pr-10">
                <h3 className="text-lg font-medium text-foreground flex-1 pr-4 sm:pr-0">{firstProject.title}</h3>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center" aria-hidden="true">
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 ease-in-out group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        </Link>
      </nav>
    );
  }

  return (
    <div className={cn('mt-16 max-w-[640px] mx-auto', className)}>
      {nextProject && (
        <Link 
          href={`/projects/${nextProject.slug}`}
          aria-label={`Next project: ${nextProject.title}`}
          prefetch={false}
          className="block group no-underline"
        >
          <div className="bg-card border border-purple-200 dark:border-purple-800/50 rounded-lg p-6 transition-colors hover:bg-purple-50 dark:hover:bg-purple-900/30">
            <div className="relative h-full">
              <p className="text-sm text-muted-foreground mb-1">Up Next</p>
              <div className="flex items-center pr-10">
                <h3 className="text-lg font-medium text-foreground flex-1 pr-4 sm:pr-0">{nextProject.title}</h3>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center">
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
