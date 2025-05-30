'use client';
import * as React from "react";
import { useActiveSectionObserver } from "@/hooks/useActiveSectionObserver";

interface NavItem {
  id: string;
  label: string;
}

interface SidebarNavProps {
  items: NavItem[];
  className?: string;
}

export default function SidebarNav({ items, className = '' }: SidebarNavProps) {
  const active = useActiveSectionObserver(items.map(item => item.id));

  return (
    <nav
      className={`hidden lg:block sticky top-32 pt-6 space-y-4 text-sm text-muted border-l border-gray-100 pl-4 ${className}`}
      aria-label="Case Study Navigation"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "true" : undefined}
          className={`block transition-all hover:underline whitespace-nowrap ${
            active === item.id ? "text-black font-semibold" : "text-muted"
          }`}
          style={{ scrollBehavior: "smooth" }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
