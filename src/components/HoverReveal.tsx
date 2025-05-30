'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface HoverRevealProps {
  children: React.ReactNode;
  image: string;
  alt: string;
  className?: string;
  position?: 'left' | 'right';
  width?: number;
  height?: number;
}

export default function HoverReveal({ 
  children, 
  image, 
  alt, 
  className = '', 
  position = 'right',
  width = 400,
  height = 300
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hoverTimeout = useRef<number | null>(null);

  // Memoize position class to prevent recalculation on every render
  const positionClass = useMemo(
    () => position === 'left' ? 'right-full mr-4' : 'left-full ml-4',
    [position]
  );

  // Debounced hover effect with cleanup
  const handleMouseEnter = useCallback((): void => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 100);
  }, []);

  const handleMouseLeave = useCallback((): void => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(false);
  }, []);

  // Clean up timeouts on unmount and when dependencies change
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        window.clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
      }
    };
  }, []);

  // Memoize the image element to prevent unnecessary re-renders
  const imageElement = useMemo(() => (
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
      className="max-w-none"
      loading="lazy"
      quality={85}
      style={{
        maxWidth: 'min(90vw, 800px)',
        maxHeight: '90vh',
        width: 'auto',
        height: 'auto',
      }}
    />
  ), [image, alt, width, height]);

  return (
    <span 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      {children}
      <span 
        className={`
          absolute top-1/2 -translate-y-1/2 ${positionClass}
          transition-opacity duration-200 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          bg-background rounded-lg shadow-lg z-50
          border border-border/20 p-2
          max-w-[90vw] max-h-[90vh] inline-flex
          items-center justify-center
          overflow-visible
          will-change-transform,opacity
        `}
      >
        <span className="relative w-auto h-auto max-w-[80vw] max-h-[80vh] inline-block">
          {imageElement}
        </span>
      </span>
    </span>
  );
}
