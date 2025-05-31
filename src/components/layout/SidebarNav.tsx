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
      className={`hidden lg:block sticky top-32 pt-6 space-y-4 text-sm text-muted border-l border-gray-100 dark:border-gray-800 pl-4 ${className}`}
      aria-label="Case Study Navigation"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "true" : undefined}
          className={`block transition-all hover:underline whitespace-nowrap ${
            active === item.id 
              ? "text-purple-500 dark:text-purple-400 font-semibold" 
              : "text-muted dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
          }`}
          style={{ scrollBehavior: "smooth" }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
