'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface HoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  initial: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
  };
  animate: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
  };
}

interface HoverImageClusterProps {
  images: HoverImage[];
  isVisible: boolean;
  position?: 'left' | 'right';
  className?: string;
}

export type { HoverImage };

export function HoverImageCluster({ 
  images, 
  isVisible, 
  position = 'right',
  className = '' 
}: HoverImageClusterProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isTapped, setIsTapped] = useState(false);
  const tapTimeout = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = useCallback(() => {
    if (isMobile) {
      setIsTapped(true);
      if (tapTimeout.current) clearTimeout(tapTimeout.current);
      tapTimeout.current = setTimeout(() => setIsTapped(false), 3000); // Auto-hide after 3 seconds
    }
  }, [isMobile]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (tapTimeout.current) clearTimeout(tapTimeout.current);
    };
  }, []);

  // Don't render if not visible and not tapped (for mobile)
  if (!isVisible && !isTapped) return null;

  return (
    <div 
      ref={containerRef}
      className={`fixed md:absolute ${
        position === 'left' 
          ? 'left-4 right-auto' 
          : 'right-4 left-auto'
      } top-1/2 z-50 ${className} ${
        isMobile ? 'pointer-events-auto w-[90vw] max-w-[300px]' : 'w-[240px]'
      }`}
      style={{
        transform: isMobile 
          ? 'translateY(-50%)'
          : 'translateY(-50%)',
      }}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onTouchStart={handleTouchStart}
    >
      <AnimatePresence>
        {(isVisible || isTapped) && (
          <div className="relative">
            {images.map((image, index) => {
              const delay = index * 0.05;
              const parallaxX = (mousePosition.x / 20 - 10) * (index % 2 === 0 ? 1 : -1);
              const parallaxY = (mousePosition.y / 20 - 10) * (index % 2 === 0 ? 1 : -1);
              
              return (
                <motion.div
                  key={index}
                  className="absolute bg-background rounded-lg overflow-hidden"
                  initial={{
                    ...image.initial,
                    opacity: 0,
                  }}
                  animate={{
                    ...(isMobile ? {
                      x: 0,
                      y: 0,
                      scale: 1,
                    } : {
                      ...image.animate,
                      x: image.animate.x + (parallaxX * 0.5),
                      y: image.animate.y + (parallaxY * 0.5),
                    }),
                    opacity: 1,
                  }}
                  exit={{
                    ...image.initial,
                    opacity: 0,
                  }}
                  transition={{
                    type: 'spring',
                    damping: isMobile ? 25 : 20,
                    stiffness: isMobile ? 150 : 200,
                    delay: isMobile ? delay * 0.5 : delay,
                  }}
                  style={{
                    width: isMobile ? Math.min(image.width, 240) : image.width,
                    height: isMobile ? 'auto' : image.height,
                    maxHeight: isMobile ? '200px' : 'none',
                    aspectRatio: isMobile ? '3/2' : 'auto',
                    objectFit: 'cover'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
