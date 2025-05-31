'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Side Projects', path: '/sideprojects' },
  { name: 'Notes', path: '/notes' },
  { name: 'About', path: '/about' },
];

// Add a style tag for the underline animation
const navLinkStyles = `
  .nav-link {
    position: relative;
    display: inline-block;
    padding-bottom: 2px;
    text-decoration: none;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: width 0.3s ease;
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .nav-link.active::after {
    width: 100%;
  }
`;

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <>
      <style jsx global>{navLinkStyles}</style>
      <nav className="w-full bg-background/80 backdrop-blur-sm">
        <div className="max-w-[640px] mx-auto w-full px-4 sm:px-8 py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
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
          
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                           (item.path !== '/' && pathname?.startsWith(item.path));
              
              return (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`nav-link 
                    ${isActive 
                      ? 'text-foreground dark:text-purple-400 after:bg-foreground dark:after:bg-purple-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-purple-400 after:bg-foreground dark:after:bg-purple-400'}
                    transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
