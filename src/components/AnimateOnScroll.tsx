'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = '',
  yOffset = 20,
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={delay}
      variants={{
        ...defaultVariants,
        hidden: { ...defaultVariants.hidden, y: yOffset },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
