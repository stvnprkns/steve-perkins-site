'use client';

import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

export default function AnimatePresenceWrapper({
  children,
  mode = 'wait',
  initial = false,
  onExitComplete,
}: {
  children: React.ReactNode;
  mode?: 'wait' | 'sync';
  initial?: boolean;
  onExitComplete?: () => void;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence 
        mode={mode} 
        initial={initial}
        onExitComplete={onExitComplete}
      >
        {children}
      </AnimatePresence>
    </LazyMotion>
  );
}
