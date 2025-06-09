import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

const components = {
  h1: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h2: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h3: ({ node, ...props }: any) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
};

export default function TalkingTax() {
  const { content, images } = quickbooksData.talkingTax;
  const image = images?.[0];

  return (
    <div className="mb-12">
      <div className="mb-8">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
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
