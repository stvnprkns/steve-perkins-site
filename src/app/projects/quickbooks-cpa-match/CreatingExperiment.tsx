import Image from 'next/image';
import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';

const components = {
  h1: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h2: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h3: ({ node, ...props }: any) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
};

// Helper component to render content with specific image
const ContentWithImage = ({ content, image }: { content: string; image: any }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
      <div className="flex-1">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
      {image && (
        <div className="w-full md:w-1/2">
          <figure className="bg-purple-50 p-6 rounded-lg my-8">
            <div className="relative w-full">
              <Image 
                src={image.src} 
                alt={image.alt}
                width={1200}
                height={600}
                className="w-full h-auto rounded" 
              />
            </div>
            {image.caption && (
              <figcaption className="mt-2 text-sm text-gray-500 text-center">
                {image.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </div>
  );
};

export default function CreatingExperiment() {
  const { content, images } = quickbooksData.creatingExperiment;
  
  // Process the content to split at the ad section
  const processContent = () => {
    const contentParts = content.split('### The Ad');
    if (contentParts.length < 2) return null;
    
    const beforeAd = contentParts[0];
    const afterAdParts = contentParts[1].split('### Playing matchmaker');
    const adContent = afterAdParts[0] || '';
    const afterAd = afterAdParts[1] || '';
    
    // Find the ad image (Figure 4) and workflow image (Figure 3)
    const adImage = images.find(img => img.caption?.includes('Fig. 4'));
    const workflowImage = images.find(img => img.caption?.includes('Fig. 3'));
    const otherImages = images.filter(img => 
      !img.caption?.includes('Fig. 3') && !img.caption?.includes('Fig. 4')
    );
    
    return (
      <>
        <ReactMarkdown components={components}>
          {beforeAd}
        </ReactMarkdown>
        
        {adImage && (
          <ContentWithImage 
            content={`### The Ad${adContent}`} 
            image={adImage} 
          />
        )}
        
        <h3 className="text-2xl font-bold mt-12 mb-6">Playing matchmaker</h3>
        
        {workflowImage && (
          <figure className="w-full my-8 bg-purple-50 p-6 rounded-lg">
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full">
                <Image 
                  src={workflowImage.src} 
                  alt={workflowImage.alt}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded" 
                />
              </div>
              {workflowImage.caption && (
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  {workflowImage.caption}
                </figcaption>
              )}
            </div>
          </figure>
        )}
        
        <ReactMarkdown components={components}>
          {afterAd}
        </ReactMarkdown>
      </>
    );
  };
  
  // Get the processed content
  const contentElements = processContent() || (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  );

  // Only show remaining images if we didn't process the content (no Fig. 3/4 to filter)
  const shouldShowAllImages = !processContent();
  
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">Creating the Experiment</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        {contentElements}
        
        {/* Only render remaining images if we didn't process the content */}
        {shouldShowAllImages && images.map((image, index) => (
          <figure key={index} className="w-full my-8 bg-purple-50 p-6 rounded-lg">
            <div className="relative w-full">
              <Image 
                src={image.src} 
                alt={image.alt}
                width={1200}
                height={600}
                className="w-full h-auto rounded" 
              />
            </div>
            {image.caption && (
              <figcaption className="mt-2 text-sm text-gray-500 text-center">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </>
  );
}
