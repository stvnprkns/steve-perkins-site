'use client';

import React, { ReactNode, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageTransition, fadeInUp, spring } from '@/lib/animation';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  isFirstRender?: boolean;
}

// Helper component to wrap page content for consistent animation
const AnimatedPageContent = ({ 
  children, 
  className = '',
  isInitial = false 
}: { 
  children: ReactNode; 
  className?: string;
  isInitial?: boolean;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Skip animation if user prefers reduced motion
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={isInitial ? 'initial' : 'navigated'}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className={className}
      ref={contentRef}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          transition={{
            ...spring,
            delay: isInitial ? 0.1 + (index * 0.03) : 0.03 * index
          }}
          className="w-full"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function PageTransition({ 
  children, 
  className = '',
  isFirstRender = false 
}: PageTransitionProps) {
  const pathname = usePathname();
  const hasAnimated = useRef(false);
  const isFirstRenderRef = useRef(isFirstRender);

  // Reset animation state on route change
  useEffect(() => {
    return () => {
      hasAnimated.current = false;
    };
  }, [pathname]);

  // Skip animation after first render
  if (isFirstRenderRef.current && !hasAnimated.current) {
    hasAnimated.current = true;
    return (
      <AnimatePresence>
        <AnimatedPageContent 
          className={className} 
          isInitial={true}
        >
          {children}
        </AnimatedPageContent>
      </AnimatePresence>
    );
  }

  // For subsequent navigations
  return (
    <AnimatePresence mode="wait" initial={false}>
      <AnimatedPageContent className={className}>
        {children}
      </AnimatedPageContent>
    </AnimatePresence>
  );
}
