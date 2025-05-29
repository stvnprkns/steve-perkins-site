import { ReactNode } from 'react';
import Section from '@/components/layout/Section';

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  variant?: 'narrow' | 'wide' | 'wider';
  padding?: 'default' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'none';
}

export default function PageHero({
  title,
  subtitle,
  children,
  className = '',
  variant = 'narrow',
  padding = 'default',
  background = 'default',
}: PageHeroProps) {
  const paddingClasses = {
    default: 'py-8',
    lg: 'py-12',
    xl: 'py-16',
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
      <div className="space-y-6">
        <div className="max-w-[640px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <div className="prose prose-lg text-muted-foreground mt-8">
              {typeof subtitle === 'string' ? (
                subtitle.split('\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))
              ) : (
                subtitle
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </Section>
  );
}
