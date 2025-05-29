import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-2xl font-semibold text-foreground ${className}`}>
      {children}
    </h2>
  );
}
