import Link from 'next/link';

interface UnderlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function UnderlineLink({ href, children, className = '', external = false }: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`text-foreground hover:text-foreground/80 ${className}`}
    >
      {children}
    </Link>
  );
}
