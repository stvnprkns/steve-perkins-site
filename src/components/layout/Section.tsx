import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'narrow' | 'wide' | 'wider'; // now optional, default is 'narrow'
  className?: string;
  as?: React.ElementType;
  noPadding?: boolean;
  id?: string;
  noDivider?: boolean; // Add this line to make the divider optional
}

export default function Section({
  children,
  variant = 'narrow', // default to narrow
  className = '',
  as: Component = 'section',
  noPadding = false,
  noDivider = false, // default to showing divider
  id,
}: SectionProps): React.JSX.Element {
  const widthClass = {
    narrow: 'max-w-prose',
    wide: 'max-w-screen-md',
    wider: 'max-w-4xl' // 56rem (50% wider than prose which is ~37.5rem)
  }[variant];

  const paddingClass = noPadding ? '' : 'px-4 sm:px-6';

  return (
    <div className="w-full">
      <Component 
        className={`py-6 space-y-3 w-full min-h-0 ${className}`}
        id={id}
        style={{
          scrollMarginTop: '96px', // 6rem for sticky header offset
        }}
      >
        <div className={`mx-auto w-full ${widthClass} ${paddingClass} h-full`}>
          {children}
        </div>
      </Component>
      {!noDivider && (
        <div className="flex justify-center">
          <div className={`border-t border-gray-200 mt-8 ${widthClass} ${paddingClass}`} style={{ width: '100%' }}></div>
        </div>
      )}
    </div>
  );
}

export function SectionNarrow(props: Omit<SectionProps, 'variant'>) {
  return <Section {...props} />;
}

export function SectionWide(props: Omit<SectionProps, 'variant' | 'noPadding'>) {
  return <Section variant="wide" {...props} />;
}
