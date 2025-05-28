import * as React from "react";

export interface CaseStudyGridProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function CaseStudyGrid({ sidebar, children }: CaseStudyGridProps) {
  return (
    <div className="py-12">
      <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-6 px-4 sm:px-6 max-w-screen-lg mx-auto">
        <aside className="hidden lg:block sticky top-32 pr-4 text-sm text-muted">
          {sidebar}
        </aside>
        <main className="prose prose-neutral max-w-prose w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
