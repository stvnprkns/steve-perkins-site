import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
}

interface SidebarNavProps {
  items: NavItem[];
  className?: string;
}

export default function SidebarNav({ items, className = '' }: SidebarNavProps) {
  return (
    <nav className={`space-y-1 ${className}`} aria-label="Table of contents">
      <ul className="space-y-2" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              aria-label={`Jump to section: ${item.label}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
