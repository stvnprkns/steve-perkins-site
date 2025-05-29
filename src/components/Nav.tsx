'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Side Projects', path: '/sideprojects' },
  { name: 'Notes', path: '/notes' },
  { name: 'About', path: '/about' },
];

// Add a style tag for explicit hover states
const navLinkStyles = `
  .nav-link {
    position: relative;
    display: inline-block;
    padding-bottom: 2px;
    color: #4B5563; /* gray-600 */
    transition: color 0.2s ease;
    text-decoration: none;
  }
  .nav-link:hover {
    color: #171717; /* foreground */
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #171717; /* foreground */
    transition: width 0.3s ease;
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .nav-link.active {
    color: #171717; /* foreground */
  }
  .nav-link.active::after {
    width: 100%;
  }
  .dark .nav-link {
    color: #9CA3AF; /* gray-400 */
  }
  .dark .nav-link:hover,
  .dark .nav-link.active {
    color: #FBF8FD; /* foreground in dark mode */
  }
  .dark .nav-link::after {
    background-color: #FBF8FD; /* foreground in dark mode */
  }
`;

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <>
      <style jsx global>{navLinkStyles}</style>
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
                  className={`nav-link ${isActive ? 'active' : ''}`}
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
