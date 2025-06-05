'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SequenceLoaderProps {
  children: React.ReactNode[];
  delayBetween?: number;
  initialDelay?: number;
}

export default function SequenceLoader({
  children,
  delayBetween = 0.15,
  initialDelay = 0.3,
}: SequenceLoaderProps) {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (visibleIndex < children.length - 1) {
      const timer = setTimeout(
        () => setVisibleIndex(visibleIndex + 1),
        visibleIndex === -1 ? initialDelay * 1000 : delayBetween * 1000
      );
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      const timer = setTimeout(() => setIsComplete(true), 500);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex, children.length, delayBetween, initialDelay, isComplete]);

  return (
    <div className="sequence-loader">
      <AnimatePresence>
        {children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: visibleIndex >= index ? 1 : 0,
              y: visibleIndex >= index ? 0 : 10,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="sequence-item"
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
