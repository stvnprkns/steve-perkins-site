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
    <article className="mb-12" id="talking-tax-section" aria-labelledby="talking-tax">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="Research on how CPAs and small business owners communicate about tax matters, revealing key communication patterns and challenges in the accounting relationship" data-snippet="talking-tax-summary" hidden />
      
      <section className="mb-8 prose dark:prose-invert max-w-none" data-content-type="research-findings">
        <ReactMarkdown components={{
          ...components,
          h3: ({ children, ...props }: HeadingProps) => (
            <h4 id="talking-tax" className="text-lg font-semibold mt-4 mb-2" {...props}>
              {children}
            </h4>
          ),
        }}>
          {content}
        </ReactMarkdown>
      </section>
      
      {image && (
        <>
          <figure className="w-full my-8" data-evidence="tax-communication-visual">
            <CaseStudyImage
              src={image.src}
              alt={image.alt}
              width={1600}
              height={800}
              withBackground={true}
            />
          </figure>
          <div className="mt-4 text-center" data-prototype-link>
            <a 
              href="https://v0-recreate-ui-design-mocha-mu.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
              aria-label="View a prototype of the QuickBooks CPA messaging interface (opens in new tab)"
              data-resource="prototype"
            >
              View a prototype of the full experiment
            </a>
          </div>
        </>
      )}
    </article>
  );
}
