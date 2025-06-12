import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
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
    narrow: 'max-w-[640px]',
    wide: 'max-w-5xl',
    wider: 'max-w-6xl'
  }[variant];

  const paddingClass = noPadding ? '' : 'px-4 sm:px-8';

  return (
    <div className="w-full">
      <Component 
        className={`w-full min-h-0 ${className}`}
        id={id}
        style={{
          scrollMarginTop: '96px', // 6rem for sticky header offset
        }}
      >
        <div className={`mx-auto w-full ${widthClass} ${paddingClass} h-full`}>
          {children}
        </div>
      </Component>
    </div>
  );
}

export function SectionNarrow(props: Omit<SectionProps, 'variant'>) {
  return <Section {...props} />;
}

export function SectionWide(props: Omit<SectionProps, 'variant' | 'noPadding'>) {
  return <Section variant="wide" {...props} />;
}
