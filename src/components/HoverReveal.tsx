'use client';

import { useCallback, useEffect, useRef, useState, useMemo, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationProps {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
}

export interface HoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  initial: AnimationProps;
  animate: AnimationProps;
}

interface HoverRevealProps {
  children: React.ReactNode;
  images: HoverImage[];
  className?: string;
  position?: 'left' | 'right' | 'center';
  offsetX?: number;
  offsetY?: number;
}

export default function HoverReveal({
  children,
  images,
  className = '',
  position = 'right',
  offsetX = 12,
  offsetY = -8,
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const hoverTimeout = useRef<number | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (hoverTimeout.current) {
        window.clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 30);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 100);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
  }, []);

  const imagePositions = useMemo(() => {
    if (!images.length) return [];

    return images.map((_, index) => {
      // First image goes to the left
      if (index === 0) {
        return {
          x: -320, // Position to the left of the text
          y: offsetY ?? -30,
          left: true // Flag to indicate left position
        };
      }
      // Remaining images go to the right with horizontal spacing
      return {
        x: 20 + ((index - 1) * 320), // Space out remaining images to the right
        y: offsetY ?? -30,
        left: false
      };
    });
  }, [images, offsetY]);

  const hoverContent = useMemo(() => {
    if (!isMounted || !images.length) return null;

    return (
      <AnimatePresence>
        {isHovered && (
          <Fragment>
            {/* Left side container */}
            {images[0] && (
              <span key="left-container" className="absolute top-0 right-full pr-4 z-30 pointer-events-none" style={{ transform: 'translateY(-50%)', display: 'block' }}>
                <motion.span
                  key={`left-${images[0].src}`}
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    x: -20,
                    transition: {
                      duration: 0.3,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <span className="relative block">
                    <img
                      src={images[0].src}
                      alt={images[0].alt}
                      className={`block rounded-lg ${
                        ['kobe.webp', 'steve2.webp'].some(img => images[0].src.includes(img)) 
                          ? '' 
                          : 'shadow-lg'
                      }`}
                      style={{
                        maxWidth: '280px',
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '180px',
                      }}
                      loading="lazy"
                    />
                  </span>
                </motion.span>
              </span>
            )}

            {/* Right side container */}
            {images.length > 1 && (
              <span key="right-container" className="absolute top-0 left-full pl-4 z-30 pointer-events-none" style={{ transform: 'translateY(-50%)', display: 'block' }}>
                {images.slice(1).map((image, index) => (
                  <motion.span
                    key={`right-${image.src}-${index}`}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: index * 20, // Slight vertical offset for each image
                      transition: {
                        delay: 0.1 + (index * 0.05),
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      x: 20,
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    }}
                    className="block mb-2 last:mb-0"
                  >
                    <span className="relative block">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`block rounded-lg ${
                          ['kobe.webp', 'steve2.webp'].some(img => image.src.includes(img)) 
                            ? '' 
                            : 'shadow-lg'
                        }`}
                        style={{
                          maxWidth: '280px',
                          width: 'auto',
                          height: 'auto',
                          maxHeight: '180px',
                        }}
                        loading="lazy"
                      />
                    </span>
                  </motion.span>
                ))}
              </span>
            )}
          </Fragment>
        )}
      </AnimatePresence>
    );
  }, [isHovered, images, isMounted]);

  // Use a span for inline display with position relative
  return (
    <span className="relative inline-block">
      <span 
        ref={triggerRef}
        className={`relative inline ${className}`}
        style={{
          whiteSpace: 'normal',
          wordBreak: 'normal',
          lineHeight: 'inherit',
          display: 'inline',
        }}
      >
        <span 
          className="cursor-pointer hover:opacity-80 transition-opacity relative z-10"
          style={{
            whiteSpace: 'normal',
            wordBreak: 'normal',
            lineHeight: 'inherit',
            display: 'inline',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={isHovered}
        >
          {children}
        </span>
        {/* Render hover content as a sibling to the trigger */}
        {hoverContent}
      </span>
    </span>
  );
}

