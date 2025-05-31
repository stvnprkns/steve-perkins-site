'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HoverImage, HoverImageCluster } from './HoverImageCluster';

interface HoverRevealProps {
  children: React.ReactNode;
  images: HoverImage[];
  className?: string;
  position?: 'left' | 'right';
  width?: number;
  height?: number;
}

export default function HoverReveal({ 
  children, 
  images, 
  className = '', 
  position = 'right'
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  // Debounced hover effect with cleanup
  const handleMouseEnter = useCallback((): void => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
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

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        window.clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      {children}
      <HoverImageCluster 
        images={images}
        isVisible={isHovered}
        position={position}
      />
    </span>
  );
}

export type { HoverImage };
