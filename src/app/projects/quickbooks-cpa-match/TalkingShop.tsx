import Image from 'next/image';
import { quickbooksData } from './quickbooksData';

export default function TalkingShop() {
  const { content, images } = quickbooksData.talkingShop;
  
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">Talking Shop</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        {images.map((image, index) => (
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
