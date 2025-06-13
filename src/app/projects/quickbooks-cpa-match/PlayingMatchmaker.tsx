import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

const components = {
  h1: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h2: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h3: ({ node, ...props }: any) => <h4 id="playing-matchmaker" className="text-lg font-semibold mt-4 mb-2" {...props} />,
};

export default function PlayingMatchmaker() {
  const { content, images } = quickbooksData.playingMatchmaker;
  const image = images?.[0];

  return (
    <article className="mb-12">
      <section className="mb-8" aria-labelledby="playing-matchmaker">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </section>
      {image && (
        <figure className="w-full my-8">
          <CaseStudyImage
            src={image.src}
            alt={image.alt}
            width={1600}
            height={800}
            withBackground={true}
          />
        </figure>
      )}
    </article>
  );
}
