'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('@/components/Nav'), { ssr: false });
const AnimatedLayout = dynamic(
  () => import('@/components/animation/AnimatedLayout'),
  { ssr: false }
);

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
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
