import { ReactNode } from 'react';

interface ExtendedCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function ExtendedCard({ 
  children, 
  className = '',
  innerClassName = '' 
}: ExtendedCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">
        <div className={innerClassName}>
          {children}
        </div>
      </div>
      <div className="absolute -inset-6 bg-muted/50 dark:bg-muted/10 border border-border/50 rounded-lg -z-10" />
    </div>
  );
}

export function ExtendedCardContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 -z-10">
        <div className="absolute inset-0 bg-muted/50 dark:bg-muted/10 border border-border/50 rounded-lg" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export default ExtendedCard;
