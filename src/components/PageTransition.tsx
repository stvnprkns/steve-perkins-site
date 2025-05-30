'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // On first load, wait a brief moment before showing content
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // On subsequent navigations, show content immediately
  }, [pathname, isFirstLoad]);

  // Don't render anything until the initial load is complete
  if (isFirstLoad) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
            delay: isFirstLoad ? 0.2 : 0
          } 
        }}
        exit={{ 
          opacity: 0, 
          y: -10,
          transition: { 
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
          } 
        }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
