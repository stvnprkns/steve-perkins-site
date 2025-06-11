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
  children,
  ...props
}: React.PropsWithChildren<CaseStudyImageProps>) {
  return (
    <div className={cn('not-prose my-8 w-full', containerClassName)} style={{ gridColumn: '1 / -1' }}>
      <div className={cn('w-full block', { 
        'bg-purple-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700': withBackground,
        'bg-transparent': !withBackground
      })} style={{ width: '100%' }}>
        <div className={cn('w-full', { 'bg-transparent': !withBackground })}>
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
          {children && (
            <div className="mt-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
