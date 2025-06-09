'use client';

import React, { ReactNode } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type Node = {
  children?: Node[];
  type?: string;
  tagName?: string;
  value?: string;
  properties?: any;
  parent?: Node;
};

type CodeComponentProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

import MarkdownImage from './MarkdownImage';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const components: Components = {
    // Headers
    h1: (props) => (
      <h1 className="text-3xl font-bold mb-6" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
    ),
    
    // Paragraphs - handle block elements properly
    p: (paragraph) => {
      // Check if paragraph contains block-level elements
      const hasBlockElements = React.Children.toArray(paragraph.children).some(
        (child: any) => {
          if (typeof child === 'string') return false;
          const childType = (child as React.ReactElement)?.type;
          return (
            typeof childType === 'string' && 
            ['div', 'figure', 'img', 'pre', 'ul', 'ol', 'blockquote', 'table', 'iframe', 'video', 'aside'].includes(childType)
          );
        }
      );

      // Don't wrap block elements in a paragraph
      if (hasBlockElements) {
        return <>{paragraph.children}</>;
      }
      
      return <p className="mb-4 leading-relaxed" {...paragraph} />;
    },
    
    // Links
    a: ({ href = '#', children, ...props }) => {
      if (href?.startsWith('http')) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            {...props}
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link href={href || '#'} className="text-primary hover:underline" {...props}>
          {children}
        </Link>
      );
    },
    
    // Lists
    ul: (props) => (
      <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
    ),
    li: (props) => (
      <li className="mb-1" {...props} />
    ),
    
    // Code blocks
    code: ({ className, children, ...props }: CodeComponentProps) => {
      const inline = props.inline;
      delete props.inline; // Remove inline from props to avoid passing it to the DOM
      const match = /language-(\w+)/.exec(className || '');
      
      if (inline) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...props}>
            {children}
          </code>
        );
      }
      
      return match ? (
        <div className="my-4 rounded-lg overflow-hidden">
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            showLineNumbers
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    },
    
    // Tables
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead className="bg-muted/50" {...props} />
    ),
    th: (props) => (
      <th className="border border-border p-3 text-left font-semibold" {...props} />
    ),
    td: (props) => (
      <td className="border border-border p-3" {...props} />
    ),
    
    // Horizontal rule
    hr: (props) => (
      <hr className="my-8 border-t border-border" {...props} />
    ),
    
    // Blockquotes with enhanced styling
    blockquote: (props) => (
      <blockquote 
        className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/10 dark:bg-muted/20 italic text-muted-foreground/90"
        {...props}
      />
    ),
    
    // Use our custom MarkdownImage component for better image handling
    img: (props: React.ImgHTMLAttributes<HTMLImageElement> & { node?: any }) => {
      const { src, alt = '', node, width, height, className = '', ...rest } = props;
      // Ensure src is a string before passing to MarkdownImage
      const imageSrc = typeof src === 'string' ? src : '';
      
      // Always treat as standalone to avoid nesting issues
      const isStandalone = true;
      
      // Extract width and height from className if they exist (e.g., width="300")
      const widthMatch = className.match(/w-?(\d+)/);
      const heightMatch = className.match(/h-?(\d+)/);
      const imgWidth = width || (widthMatch ? widthMatch[1] : undefined);
      const imgHeight = height || (heightMatch ? heightMatch[1] : undefined);
      
      const imageProps = {
        src: imageSrc,
        alt: alt || '',
        width: imgWidth,
        height: imgHeight,
        className: className.replace(/w-?\d+/g, '').replace(/h-?\d+/g, '').trim(),
        ...rest
      };
      
      // Always wrap in a div to prevent invalid HTML nesting
      return (
        <div className="my-6">
          <MarkdownImage {...imageProps} />
        </div>
      );
    },
  };

  return (
    <div className={`prose dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
