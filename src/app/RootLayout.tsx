'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import AnimatedLayout from '@/components/animation/AnimatedLayout';

const Nav = dynamic(() => import('@/components/Nav'), { ssr: false });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <AnimatedLayout>
        <main className="flex-1">
          {children}
        </main>
      </AnimatedLayout>
    </div>
  );
}
