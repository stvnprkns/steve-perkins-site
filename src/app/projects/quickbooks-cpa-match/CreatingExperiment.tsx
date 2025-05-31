import Image from 'next/image';
import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';

const components = {
  h1: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h2: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h3: ({ node, ...props }: any) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
};

export default function CreatingExperiment() {
  const { content, images } = quickbooksData.creatingExperiment;
  
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">Creating the Experiment</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
        
        {images.map((image, index) => (
          <figure key={index} className="w-full my-12">
            <div className="w-full max-w-4xl mx-auto bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
              <div className="relative w-full aspect-video">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-contain w-full h-full rounded" 
                />
              </div>
              {image.caption && (
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  {image.caption}
                </figcaption>
              )}
            </div>
          </figure>
        ))}
      </div>
    </>
  );
}
