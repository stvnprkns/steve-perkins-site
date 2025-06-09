import { quickbooksData } from './quickbooksData';
import ReactMarkdown from 'react-markdown';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

type ImageType = {
  src: string;
  alt: string;
};

const components = {
  h1: ({ node, ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h2: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h3: ({ node, ...props }: any) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
};

// Helper component to render content with specific image
const ContentWithImage = ({ content, image, isAdSection = false }: { content: string; image: ImageType; isAdSection?: boolean }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
      <div className="flex-1">
        {isAdSection ? (
          <h2 className="text-3xl font-bold mt-16 mb-8 font-sans">The Ad</h2>
        ) : null}
        <ReactMarkdown components={components}>
          {content.replace(/^### The Ad\s*/, '')}
        </ReactMarkdown>
      </div>
      {image && (
        <div className="w-full md:w-1/2">
          <div className="my-8">
            <CaseStudyImage
              src={image.src}
              alt={image.alt}
              width={1200}
              height={600}
              withBackground={true}
              containerClassName="w-full"
            />
          </div>
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
    
    // Find specific images by their alt text (which now includes figure numbers)
    const workflowImage = images.find(img => img.alt.includes('Fig. 3'));
    const matchmakerImage = images.find(img => img.alt.includes('Fig. 4'));
    const adImage = images.find(img => img.alt.includes('Fig. 5'));
    const chatFeedImage = images.find(img => img.alt.includes('Fig. 5'));
    const directMessageImage = images.find(img => img.alt.includes('Fig. 7'));
    const accessImage = images.find(img => img.alt.includes('Fig. 8'));
    
    // Split the afterAd content at the "### Talking Tax" section
    const afterAdParts2 = afterAd.split('### Talking Tax');
    const matchmakerContent = afterAdParts2[0] || '';
    const talkingTaxContent = afterAdParts2[1] || '';
    
    return (
      <div className="mb-12">
        <div className="mb-8">
          <ReactMarkdown components={components}>
            {beforeAd}
          </ReactMarkdown>
        </div>
        {workflowImage && (
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] my-8">
            <div className="w-full max-w-screen-2xl mx-auto">
              <div className="relative w-full bg-white dark:bg-gray-900 px-4 py-8">
                <div className="max-w-4xl mx-auto">
                  <CaseStudyImage 
                    src={workflowImage.src} 
                    alt={workflowImage.alt}
                    width={1600}
                    height={800}
                    withBackground={true}
                    containerClassName="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {adImage && (
          <ContentWithImage 
            content={adContent} 
            image={adImage}
            isAdSection={true}
          />
        )}
        
        <h2 className="text-3xl font-bold mt-16 mb-8 font-sans">Playing matchmaker</h2>
        
        <ReactMarkdown components={components}>
          {matchmakerContent}
        </ReactMarkdown>
        
        {matchmakerImage && (
          <div className="w-full my-8">
            <CaseStudyImage
              src={matchmakerImage.src}
              alt={matchmakerImage.alt}
              width={1200}
              height={600}
              withBackground={true}
            />
          </div>
        )}
        

        
        <h2 className="text-3xl font-bold mt-16 mb-8 font-sans">Talking Tax</h2>
        
        <ReactMarkdown components={components}>
          {talkingTaxContent}
        </ReactMarkdown>
        
        {chatFeedImage && (
          <div className="w-full my-8">
            <CaseStudyImage
              src={chatFeedImage.src}
              alt={chatFeedImage.alt}
              width={1200}
              height={600}
              withBackground={true}
            />
          </div>
        )}
        
        {directMessageImage && (
          <div className="w-full my-12">
            <div className="w-full">
              <CaseStudyImage
                src={directMessageImage.src}
                alt={directMessageImage.alt}
                width={1600}
                height={800}
                withBackground={true}
              />
            </div>
          </div>
        )}
        
        {accessImage && (
          <div className="w-full my-12">
            <div className="w-full">
              <CaseStudyImage
                src={accessImage.src}
                alt={accessImage.alt}
                width={1600}
                height={800}
                withBackground={true}
              />
            </div>
          </div>
        )}
      </div>
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
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-sans">Creating the Experiment</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        {contentElements}
        
        {/* Only render remaining images if we didn't process the content */}
        {shouldShowAllImages && images.map((image, index) => (
          <div key={index} className="w-full my-8">
            <CaseStudyImage
              src={image.src}
              alt={image.alt}
              width={1600}
              height={800}
              withBackground={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
