import * as React from "react";

export interface CaseStudyGridProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function CaseStudyGrid({ sidebar, children }: CaseStudyGridProps) {
  return (
    <div className="relative py-12 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        {/* Sidebar - positioned to the left of content, hidden on mobile/tablet */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-[200px] pr-12 mt-48">
          <aside className="sticky top-12 w-[200px] text-sm text-muted z-10">
            <div className="bg-background p-4 rounded-r-lg">
              <h3 className="font-medium text-foreground mb-4">In this case study</h3>
              {sidebar}
            </div>
          </aside>
        </div>
        
        {/* Main content - centered with max-width */}
        <div className="max-w-[640px] mx-auto">
          <main className="w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
