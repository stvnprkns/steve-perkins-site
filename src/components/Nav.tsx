'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Notes', path: '/notes' },
  { name: 'About', path: '/about' },
];

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full px-6 md:px-10 py-6 text-sm text-muted flex gap-8">
      {navItems.map((item) => {
        const isActive = pathname === item.path || 
                       (item.path !== '/' && pathname?.startsWith(item.path));
        
        return (
          <Link 
            key={item.path}
            href={item.path}
            className={`relative group transition-colors duration-200 ${
              isActive ? 'text-foreground' : 'hover:text-foreground/80'
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
    </nav>
  );
}
