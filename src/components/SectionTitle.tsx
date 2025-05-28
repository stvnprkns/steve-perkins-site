import React from 'react';

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-left text-black dark:text-white tracking-tight">
      {children}
    </h2>
  );
}
