'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface MarkdownImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  src?: string | null;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

// Custom loader for external images
const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function MarkdownImage({ 
  src, 
  alt = '', 
  className = '',
  width: widthProp,
  height: heightProp,
  ...props 
}: MarkdownImageProps) {
  // Convert width and height to numbers if they're strings
  const width = widthProp ? Number(widthProp) : undefined;
  const height = heightProp ? Number(heightProp) : undefined;
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
  
  // Convert width and height to numbers if they're strings
  const widthNum = width ? Number(width) : undefined;
  const heightNum = height ? Number(height) : undefined;

  return (
    <div className="my-8">
      <div className="relative w-full aspect-video">
        <Image
          src={src}
          alt={alt}
          fill={!widthNum || !heightNum}
          width={widthNum}
          height={heightNum}
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
