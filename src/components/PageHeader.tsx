import React, { ElementType } from "react";

/**
 * PageHeader enforces consistent h1 spacing and alignment across all major pages.
 * - Applies mt-32 (or equivalent) top margin
 * - Uses max-w-screen-md, mx-auto, px-6 md:px-10 for horizontal layout
 * - Accepts optional subtitle
 */
export default function PageHeader({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  as: Heading = 'h1',
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  as?: ElementType;
}) {
  return (
    <header className={`mt-8 mb-8 w-full max-w-prose mx-auto px-2 ${className}`}>
      <Heading className={`text-4xl md:text-5xl font-bold font-sans text-left tracking-tight ${titleClassName}`}>
        {title}
      </Heading>
      {subtitle && (
        <div className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground font-sans">
          {typeof subtitle === "string"
            ? subtitle.split("\n").map((p, i) => <p key={i}>{p}</p>)
            : subtitle}
        </div>
      )}
    </header>
  );
}
