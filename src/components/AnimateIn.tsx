'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Only animate in after the component mounts
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
