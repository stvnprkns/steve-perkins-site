import { quickbooksData } from './quickbooksData';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

export default function TalkingShop() {
  const { content, images } = quickbooksData.talkingShop;
  
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8 font-sans">Talking Shop</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      {images.map((image, index) => (
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
  );
}
