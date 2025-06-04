import { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

export default function ButtonLink({ href, children, target, rel }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center px-5 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 no-underline transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background"
    >
      {children}
    </a>
  );
}
