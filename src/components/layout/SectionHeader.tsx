import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = '',
  titleClassName = '' 
}: SectionHeaderProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <h1 className={`text-5xl md:text-6xl font-sans font-bold ${titleClassName}`}>
        {title}
      </h1>
      {subtitle && (
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-text-base font-sans">
          {subtitle.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function SectionSubheader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-4 text-base md:text-lg leading-relaxed text-text-base font-sans ${className}`}>
      {children}
    </div>
  );
}
