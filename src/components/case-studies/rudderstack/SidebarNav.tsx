'use client';
"use client";
import * as React from "react";
import { useActiveSectionObserver } from "@/hooks/useActiveSectionObserver";

const sectionIds = [
  "problem",
  "approach",
  "connection-mode",
  "form-reduction",
  "config-design",
  "outcomes",
];

export default function SidebarNav() {
  const active = useActiveSectionObserver(sectionIds);

  return (
    <nav
      className="hidden lg:block sticky top-32 pt-6 pl-2 pr-4 max-w-[180px] space-y-4 text-sm text-muted border-l border-gray-100 pl-4"
      aria-label="Case Study Navigation"
    >
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "true" : undefined}
          className={`block transition-all hover:underline ${active === id ? "text-black font-semibold" : "text-muted"}`}
          style={{ scrollBehavior: "smooth" }}
        >
          {id.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
        </a>
      ))}
    </nav>
  );
}
