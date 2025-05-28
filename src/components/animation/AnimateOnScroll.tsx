'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  variants,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
