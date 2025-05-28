import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  children?: React.ReactNode;
}

export default function Hero({ headline, subheadline, children }: HeroProps) {
  return (
    <section className="flex flex-col items-start justify-center min-h-screen px-4 space-y-2">
      {headline && (
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-left text-black dark:text-white">
          {headline}
        </h1>
      )}
      {subheadline && (
        <p className="text-base font-sans text-text-base text-left text-muted max-w-xl">
          {subheadline}
        </p>
      )}
      {children}
    </section>
  );
}
