'use client';

import { cn } from '@/lib/utils';
import MarkdownImage from './MarkdownImage';

export interface CaseStudyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  inline?: boolean;
  withBackground?: boolean;
}

export default function CaseStudyImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = '',
  containerClassName = '',
  priority = false,
  inline = false,
  withBackground = true,
  ...props
}: CaseStudyImageProps) {
  return (
    <div className={cn('not-prose my-8 w-full', containerClassName)}>
      <div className={cn('w-full', { 
        'bg-purple-50 p-4 rounded-lg': withBackground,
        'bg-transparent': !withBackground,
        'inline-block': inline 
      })}>
        <div className={cn('w-full flex justify-center', { 'bg-transparent': !withBackground })}>
          <MarkdownImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn('max-w-full h-auto rounded', className, {
              'bg-transparent': !withBackground
            })}
            containerClassName={cn('w-full', { 'bg-transparent': !withBackground })}
            priority={priority}
            {...(props as any)}
          />
        </div>
      </div>
    </div>
  );
}
