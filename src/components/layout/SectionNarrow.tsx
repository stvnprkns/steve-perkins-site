import React, { ReactNode, ElementType } from 'react';

interface SectionNarrowProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function SectionNarrow({ 
  children, 
  className = '',
  as: Component = 'section'
}: SectionNarrowProps): React.JSX.Element {
  return (
    <Component className={`py-16 space-y-8 ${className}`}>
      <div className="max-w-prose mx-auto px-4 sm:px-6">
        {children}
      </div>
    </Component>
  );
}

export default SectionNarrow;
