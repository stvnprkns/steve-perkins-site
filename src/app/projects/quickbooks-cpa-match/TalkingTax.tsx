import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import type { ReactNode, ComponentType, HTMLAttributes, DetailedHTMLProps } from 'react';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const components: Partial<Components> = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h3 className="text-2xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h3>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h3 className="text-xl font-bold mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h4 className="text-lg font-semibold mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a className="text-purple-600 dark:text-purple-400 hover:underline" {...props}>
      {children}
    </a>
  ),
};

export default function TalkingTax() {
  const { content, images } = quickbooksData.talkingTax;
  const image = images?.[0];

  return (
    <div className="mb-12">
      <article className="mb-8 prose dark:prose-invert max-w-none">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </article>
      {image && (
        <div className="w-full my-8">
          <CaseStudyImage
            src={image.src}
            alt={image.alt}
            width={1600}
            height={800}
            withBackground={true}
          />
          <div className="mt-4 text-center">
            <a 
              href="https://v0-recreate-ui-design-mocha-mu.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              View a prototype of the full experiment
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
