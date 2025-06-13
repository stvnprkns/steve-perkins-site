import React from 'react';
import Image from 'next/image';

interface EnhancedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  eager?: boolean;
}

/**
 * EnhancedImage component that enforces SEO and accessibility best practices:
 * - Requires alt text
 * - Supports priority loading for LCP images
 * - Proper loading strategy based on visibility
 * - Container flexibility with proper aspect ratio maintenance
 */
export function EnhancedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  containerClassName = '',
  eager = false,
}: EnhancedImageProps) {
  // Ensure alt text isn't just a filename or empty string
  const hasQualityAlt = alt && !alt.match(/\.(jpe?g|png|gif|webp|svg)$/i) && alt.length > 5;
  
  if (!hasQualityAlt) {
    console.warn(`Image at ${src} has missing or poor quality alt text: "${alt}"`);
  }
  
  return (
    <div className={`relative ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={eager ? 'eager' : 'lazy'}
        className={`rounded-md ${className}`}
      />
    </div>
  );
}
