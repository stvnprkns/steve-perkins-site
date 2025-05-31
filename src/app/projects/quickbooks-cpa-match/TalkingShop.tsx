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
          <figure key={index} className="w-full my-12">
            <div className="w-full max-w-4xl mx-auto bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
              <div className="relative w-full aspect-video">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full rounded" 
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
