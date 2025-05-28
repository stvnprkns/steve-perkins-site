import React from 'react';
import Link from 'next/link';

interface ProjectRowProps {
  title: string;
  result: string;
  href: string;
}

export default function ProjectRow({ title, result, href }: ProjectRowProps) {
  return (
    <Link href={href} className="block py-4 border-b border-gray-200 last:border-b-0 group">
      <div className="space-y-1">
        <span className="text-lg font-medium text-black dark:text-white group-hover:underline group-hover:decoration-accent-blue group-hover:decoration-2 transition-colors">
          {title}
        </span>
        <div className="text-sm text-accent-blue group-hover:translate-x-1 transition-transform inline-block">{result} &rarr;</div>
      </div>
    </Link>
  );
}
