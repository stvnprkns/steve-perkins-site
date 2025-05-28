import React, { ReactNode, ElementType } from 'react';

interface SectionWideProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  noPadding?: boolean;
}

export function SectionWide({ 
  children, 
  className = '',
  as: Component = 'section',
  noPadding = false
}: SectionWideProps): React.JSX.Element {
  return (
    <Component className={`py-16 space-y-8 ${className}`}>
      <div className={`max-w-screen-md mx-auto w-full ${!noPadding ? 'px-6 md:px-10' : ''}`}>
        {children}
      </div>
    </Component>
  );
}

export default SectionWide;
