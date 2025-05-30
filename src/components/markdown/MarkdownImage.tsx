'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface MarkdownImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string | null;
  alt?: string;
}

// Custom loader for external images
const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function MarkdownImage({ 
  src, 
  alt = '', 
  className = '',
  ...props 
}: MarkdownImageProps) {
  const [isImageError, setIsImageError] = useState(false);
  
  // Skip rendering if no source
  if (!src) return null;
  
  // Handle image loading errors
  const handleError = () => {
    setIsImageError(true);
  };

  // If image failed to load, show a placeholder
  if (isImageError) {
    return (
      <div className="my-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center aspect-video">
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  // For all images, use Next.js Image component with custom loader for external images
  const isExternal = typeof src === 'string' && (src.startsWith('http') || src.startsWith('//'));
  
  return (
    <div className="my-8">
      <div className="relative w-full aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className={`rounded-lg object-cover ${className}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          onError={handleError}
          loader={isExternal ? customLoader : undefined}
          unoptimized={isExternal} // Disable optimization for external images
          {...props}
        />
      </div>
      {alt && (
        <p className="text-center text-sm text-muted-foreground mt-2">
          {alt}
        </p>
      )}
    </div>
  );
}
