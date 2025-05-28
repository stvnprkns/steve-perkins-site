'use client';

import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('@/components/Nav'), { 
  ssr: false,
  loading: () => (
    <nav className="w-full px-6 md:px-10 py-6 text-sm text-muted flex gap-8">
      {['Home', 'Projects', 'Notes', 'About'].map((item) => (
        <span key={item} className="opacity-50">{item}</span>
      ))}
    </nav>
  )
});

export default function NavClient() {
  return <Nav />;
}
