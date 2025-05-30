'use client';

import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    // Add a class to the body when loading
    document.body.style.overflow = 'hidden';
    return () => {
      // Clean up when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 mb-4"></div>
        <div className="h-4 w-32 bg-foreground/10 rounded"></div>
      </div>
    </div>
  );
}
