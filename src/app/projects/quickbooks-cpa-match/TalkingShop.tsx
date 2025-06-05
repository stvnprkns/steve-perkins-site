import { quickbooksData } from './quickbooksData';
import MarkdownImage from '@/components/markdown/MarkdownImage';

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
          <MarkdownImage 
            src={image.src} 
            alt={image.alt}
            width={1600}
            height={800}
            className="w-full h-auto rounded-lg bg-purple-50 p-6"
          />
        </div>
      ))}
    </div>
  );
}
