'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={cn('prose dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ node, ...props }) => (
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 mt-10 first:mt-0" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="font-sans text-2xl font-semibold mb-4 mt-8 first:mt-0 border-b border-border pb-2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="font-sans text-xl font-semibold mb-3 mt-6 first:mt-0" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="font-sans text-lg font-semibold mb-2 mt-6 first:mt-0" {...props} />
          ),
          // Paragraphs
          p: ({ node, ...props }) => (
            <p className="mb-6 leading-relaxed text-foreground/90" {...props} />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a 
              className="text-foreground underline underline-offset-4 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" 
              {...props} 
            />
          ),
          // Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="pl-2" {...props} />
          ),
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className="border-l-4 border-purple-200 dark:border-purple-800 pl-4 py-1 my-4 text-foreground/80 italic" 
              {...props} 
            />
          ),
          // Code blocks
          code({ node, inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="my-6 rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    fontSize: '0.9em',
                    lineHeight: 1.5,
                    borderRadius: '0.5rem',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code 
                className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground/90" 
                {...props}
              >
                {children}
              </code>
            );
          },
          // Tables
          table: ({ node, ...props }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-muted/50" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-border p-3 text-left font-semibold" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-border p-3" {...props} />
          ),
          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t border-border" {...props} />
          ),
          // Images
          img: ({ node, ...props }) => (
            <div className="my-8">
              <img className="rounded-lg w-full h-auto" {...props} alt={props.alt || ''} />
              {props.alt && (
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {props.alt}
                </p>
              )}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
