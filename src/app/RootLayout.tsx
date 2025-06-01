'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

// Dynamically import the Nav component with SSR disabled
const Nav = dynamic(() => import('@/components/Nav'), { 
  ssr: false
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const hasMounted = useRef(false);
  const isInitialRender = useRef(true);

  // Handle initial mount and first render state
  useEffect(() => {
    // Only run this effect once on mount
    if (isInitialRender.current) {
      isInitialRender.current = false;
      
      // Mark first render as complete after a short delay
      const timer = setTimeout(() => {
        setIsFirstRender(false);
        
        // Add a small delay before marking as ready to ensure all styles are loaded
        const readyTimer = setTimeout(() => {
          setIsReady(true);
        }, 50);
        
        return () => clearTimeout(readyTimer);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Don't render anything until we're ready to avoid hydration issues
  if (!isReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        {/* Optional: Add a subtle loading indicator */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key="nav-wrapper"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1],
              delay: isFirstRender ? 0.3 : 0.1
            } 
          }}
          className="fixed top-0 left-0 right-0 z-40 bg-background/95"
        >
          <Nav />
        </motion.div>
      </AnimatePresence>
      
      <main className="flex-1 w-full pt-28">
        <PageTransition 
          className="w-full mx-auto max-w-3xl px-4 sm:px-6"
          isFirstRender={isFirstRender}
        >
          {children}
        </PageTransition>
      </main>
    </div>
  );
}
