'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, useCallback } from 'react';
import { useLightbox } from '@/context/LightboxContext';
import { cn } from '@/lib/utils';

interface MarkdownImageBaseProps {
  src?: string | null;
  alt?: string;
  width?: string | number;
  height?: string | number;
  inline?: boolean;
  className?: string;
  containerClassName?: string;
}

type MarkdownImageProps = MarkdownImageBaseProps & Omit<ImageProps, keyof MarkdownImageBaseProps | 'src' | 'alt' | 'width' | 'height'>;

// Custom loader for external images
const customLoader = ({ src }: { src: string }) => src;

export default function MarkdownImage({ 
  src, 
  alt = '', 
  className = '',
  containerClassName = '',
  width = 800,
  height = 600,
  inline = false,
  ...props 
}: MarkdownImageProps) {
  const [isImageError, setIsImageError] = useState(false);
  const { openLightbox } = useLightbox();
  
  const handleError = useCallback(() => {
    setIsImageError(true);
  }, []);
  
  const handleImageClick = useCallback((e: React.MouseEvent) => {
    if (!src || inline) return;
    e.stopPropagation();
    const lightboxAlt = alt && !alt.includes('\n') ? alt : '';
    openLightbox(src, lightboxAlt);
  }, [src, inline, alt, openLightbox]);
  
  if (!src) return null;

  if (isImageError) {
    return (
      <div className="not-prose my-8 rounded-lg p-8 text-center bg-transparent">
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  const isExternal = typeof src === 'string' && (src.startsWith('http') || src.startsWith('//'));
  const showCaption = Boolean(alt);
  const numericWidth = typeof width === 'string' ? parseInt(width, 10) : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;

  const imageProps: ImageProps = {
    src,
    alt,
    width: Number(width) || 800,
    height: Number(height) || 600,
    className: cn(
      'mx-auto my-0 block w-full h-auto',
      { 'inline-block': inline },
      className
    ),
    style: {
      borderRadius: '0.25rem',
      maxWidth: '100%',
    },
    loader: isExternal ? customLoader : undefined,
    unoptimized: isExternal,
    onError: handleError,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw",
    onClick: !inline ? handleImageClick : undefined,
    ...props
  };

  return (
    <div className={cn('not-prose my-2 flex flex-col items-center', containerClassName)}>
      <div 
        className={cn('relative w-full bg-transparent', { 'cursor-zoom-in': !inline })}
        onClick={!inline ? handleImageClick : undefined}
      >
        <Image {...imageProps} />
      </div>
      {showCaption && !inline && (
        <figcaption className="mt-2 text-sm text-gray-500 text-center">
          {alt}
        </figcaption>
      )}
    </div>
  );
}
