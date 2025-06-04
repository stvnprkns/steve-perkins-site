'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Side Projects', path: '/sideprojects' },
  { name: 'Notes', path: '/notes' },
  { name: 'About', path: '/about' },
];

// Styled link component for navigation items
const NavLink = ({ href, isActive, children }: { 
  href: string; 
  isActive: boolean; 
  children: React.ReactNode 
}) => {
  return (
    <div className="relative group">
      <Link 
        href={href}
        className={`
          relative
          inline-block
          pb-0.5
          text-sm
          font-medium
          transition-colors
          duration-200
          ${isActive 
            ? 'text-purple-400 dark:text-purple-400' 
            : 'text-gray-600 dark:text-gray-400 dark:hover:text-purple-300 hover:text-gray-900'
          }
        `}
      >
        {children}
      </Link>
      <span 
        className={`
          absolute
          bottom-0
          left-0
          h-px
          transition-all
          duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          ${isActive 
            ? 'bg-purple-400 dark:bg-purple-400' 
            : 'bg-gray-900/50 dark:bg-gray-400/50 group-hover:bg-purple-300/50 dark:group-hover:bg-purple-300/50'
          }
        `}
      />
    </div>
  );
};

export default function Nav() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 10);
  }, [scrollY]);
  
  return (
    <nav className="w-full fixed top-4 left-0 right-0 z-50">
      <div className="relative max-w-[640px] mx-auto w-full px-4">
        <div className={`absolute inset-0 -mx-4 ${
          isScrolled ? 'bg-background/95 dark:bg-background/95 backdrop-blur-md border border-border/20' : ''
        } transition-all duration-200 rounded-full`} style={{
          left: 'calc(50% - 320px - 16px)',
          right: 'calc(50% - 320px - 16px)'
        }} />
        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-2 sm:py-3">
        <Link 
          href="/" 
          className="font-bold text-foreground hover:opacity-80 transition-opacity"
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            textDecoration: 'none',
            outline: 'none'
          }}
        >
          Steve Perkins
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {navItems.map((item) => {
              const isActive = Boolean(
                pathname === item.path || 
                (item.path !== '/' && pathname?.startsWith(item.path))
              );
              
              return (
                <NavLink 
                  key={item.path}
                  href={item.path}
                  isActive={isActive}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
}


