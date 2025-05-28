import * as React from "react";

interface ParagraphsProps {
  text: string;
  className?: string;
}

export default function Paragraphs({ text, className = "" }: ParagraphsProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
