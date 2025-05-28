'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

export default function AnimateInView({
  children,
  className = '',
  delay = 0,
  yOffset = 20,
  duration = 0.5,
  once = true,
}: AnimateInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
