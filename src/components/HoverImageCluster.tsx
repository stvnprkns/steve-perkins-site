'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface HoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

interface HoverImageClusterProps {
  image: HoverImage;
  isVisible: boolean;
  position?: { x: number; y: number };
  delay?: number;
}

export default function HoverImageCluster({
  image,
  isVisible,
  position = { x: 0, y: 0 },
  delay = 0,
}: HoverImageClusterProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: position.x,
            y: position.y,
            transition: {
              delay,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            x: 0,
            y: 0,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
        >
          <div className="relative w-32 h-24 rounded-xl shadow-lg overflow-hidden border border-border/20 bg-background">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 128px"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
