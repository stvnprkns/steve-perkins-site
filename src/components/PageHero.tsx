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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
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
      </div>
    </Section>
  );
}
