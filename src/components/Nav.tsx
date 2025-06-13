'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Removed AnimatePresence as it's not needed
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  { name: 'Home', path: '/' },
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
    <nav className="w-full fixed top-0 sm:top-4 left-0 right-0 z-50" aria-label="Main navigation">
      <div className="relative max-w-[640px] mx-auto w-full px-4">
        <div className={`absolute inset-0 -mx-4 ${
          isScrolled ? 'bg-background/95 dark:bg-background/95 backdrop-blur-md' : ''
        } ${
          isScrolled ? 'sm:border border-border/20' : ''
        } transition-all duration-200 rounded-full`} style={{
          left: 'calc(50% - 320px - 16px)',
          right: 'calc(50% - 320px - 16px)'
        }} aria-hidden="true" />
        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-3 pb-2 sm:py-3">
        <Link 
          href="/" 
          className="relative group/name"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            outline: 'none',
            height: '1.75rem',
          }}
        >
          <span className="sr-only">Steve Perkins</span>
          <motion.span 
            className="inline-flex relative"
            aria-hidden="true"
            initial={false}
            whileHover="hover"
            animate="rest"
          >
            {'Steve Perkins'.split('').map((letter, index) => (
              <motion.span 
                key={index}
                className={`
                  inline-block font-bold text-foreground
                  will-change-transform
                  ${letter === ' ' ? 'w-2' : ''}
                `}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.75rem',
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  transform: 'translateZ(0)', // Force GPU acceleration
                  backfaceVisibility: 'hidden', // Improve performance on some devices
                }}
                variants={{
                  rest: {
                    y: 0,
                    scaleY: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                      delay: index * 0.01,
                    },
                  },
                  hover: {
                    y: 2, // Reduced from 4px to 2px for smoother animation
                    scaleY: 0.95, // Reduced scaling for better performance
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                      delay: index * 0.03, // Reduced delay for faster response
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground/20 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ 
                scaleX: 1,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
            />
          </motion.span>
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <ul className="flex flex-wrap gap-4 sm:gap-8 list-none p-0 m-0" role="menubar">
            {navItems.map((item) => {
              const isActive = Boolean(
                pathname === item.path || 
                (item.path !== '/' && pathname?.startsWith(item.path))
              );
              
              return (
                <li key={item.path} role="none">
                  <NavLink 
                    href={item.path}
                    isActive={isActive}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
}


