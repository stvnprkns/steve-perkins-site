'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface HoverRevealProps {
  children: React.ReactNode;
  image: string;
  alt: string;
  className?: string;
  position?: 'left' | 'right';
}

export default function HoverReveal({ 
  children, 
  image, 
  alt, 
  className = '', 
  position = 'right' 
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [positionClass, setPositionClass] = useState('');

  // Set position class based on prop
  useEffect(() => {
    setPositionClass(position === 'left' ? 'right-full mr-4' : 'left-full ml-4');
  }, [position]);

  return (
    <span 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      {children}
      <div 
        className={`
          absolute top-1/2 -translate-y-1/2 ${positionClass}
          transition-opacity duration-200 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          bg-background rounded-lg shadow-lg z-50
          border border-border/20 p-2
          max-w-[90vw] max-h-[90vh] w-auto
          flex items-center justify-center
          overflow-visible
        `}
      >
        <div className="relative w-auto h-auto max-w-[80vw] max-h-[80vh]">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="w-auto h-auto max-w-[80vw] max-h-[80vh] object-scale-down"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '80vw',
              maxHeight: '80vh',
              objectFit: 'scale-down'
            }}
            sizes="(max-width: 768px) 90vw, 1200px"
          />
        </div>
      </div>
    </span>
  );
}
