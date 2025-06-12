'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  yOffset = 20,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      } : {}}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredScrollReveal({
  children,
  className = '',
  staggerDelay = 0.08,
  yOffset = 20,
}: Omit<ScrollRevealProps, 'delay'> & { staggerDelay?: number }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal 
          key={`staggered-${index}`}
          delay={index * staggerDelay}
          yOffset={yOffset}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
