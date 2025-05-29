'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Side Projects', path: '/sideprojects' },
  { name: 'Notes', path: '/notes' },
  { name: 'About', path: '/about' },
];

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full">
      <div className="max-w-prose mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <Link href="/" className="font-bold text-foreground hover:opacity-80 transition-opacity">
          Steve Perkins
        </Link>
        
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path || 
                         (item.path !== '/' && pathname?.startsWith(item.path));
            
            return (
              <Link 
                key={item.path}
                href={item.path}
                className={`relative group transition-colors duration-200 text-sm ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground/80'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute left-0 -bottom-1 h-px transition-all duration-300 ${
                    isActive 
                      ? 'w-full bg-foreground' 
                      : 'w-0 bg-foreground/50 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
