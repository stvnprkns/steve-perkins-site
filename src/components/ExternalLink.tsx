import React from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '', ...props }: ExternalLinkProps) {
  const isExternal = href?.startsWith('http') || href?.startsWith('//');
  const baseClasses = 'inline-flex items-center gap-1 hover:underline';

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
        <GoArrowUpRight className="inline-block w-4 h-4 ml-1" />
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Link>
  );
}
