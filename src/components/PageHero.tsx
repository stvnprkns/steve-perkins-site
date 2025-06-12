import { ReactNode } from 'react';
import Section from '@/components/layout/Section';
import Image from 'next/image';

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  variant?: 'narrow' | 'wide' | 'wider';
  padding?: 'default' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'none';
  heroImage?: {
    src: string;
    alt: string;
    className?: string;
  };
}

export default function PageHero({
  title,
  subtitle,
  children,
  className = '',
  variant = 'narrow',
  padding = 'default',
  background = 'default',
  heroImage,
}: PageHeroProps) {
  const paddingClasses = {
    default: 'pb-8', // Only bottom padding
    lg: 'pb-12',
    xl: 'pb-16',
  };

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/10',
    none: '',
  };

  return (
    <Section
      variant={variant}
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
      noDivider
    >
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <div className="prose prose-lg text-muted-foreground mt-8">
            {typeof subtitle === 'string'
              ? subtitle.split('\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))
              : subtitle}
          </div>
        )}
        {children}
        {heroImage && (
          <div className={`mt-12 w-full max-w-4xl mx-auto rounded-lg overflow-hidden ${heroImage.className || ''}`}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        )}
      </div>
    </Section>
  );
}
