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
    default: 'pt-0 pb-8', // Match nav padding-bottom (py-8)
    lg: 'pt-0 pb-12',
    xl: 'pt-0 pb-16',
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
        <div className="w-full">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <div className="text-muted-foreground mt-8">
              {typeof subtitle === 'string' ? (
                <div className="prose prose-lg">
                  {subtitle.split('\n').map((paragraph, index) => (
                    <p key={index} className={index > 0 ? 'mt-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {subtitle}
                </div>
              )}
            </div>
          )}
          {children}
        </div>
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
