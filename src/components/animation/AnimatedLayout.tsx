'use client';

import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedLayoutProps {
  children: ReactNode;
}

// Only render the animation client-side
function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't animate on initial mount
  if (!isMounted) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

export default AnimatedLayout;
