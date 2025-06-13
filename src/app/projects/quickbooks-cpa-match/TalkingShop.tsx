import { quickbooksData } from './quickbooksData';
import CaseStudyImage from '@/components/markdown/CaseStudyImage';

export default function TalkingShop() {
  const { content, images } = quickbooksData.talkingShop;
  
  return (
    <article className="mb-12">
      <header>
        <h2 id="talking-shop" className="text-3xl font-bold mb-8 font-sans">Talking Shop</h2>
      </header>
      
      <section className="prose max-w-prose text-text-base space-y-6" aria-labelledby="talking-shop">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      
      {images.map((image, index) => (
        <figure key={index} className="w-full my-8">
          <CaseStudyImage
            src={image.src}
            alt={image.alt}
            width={1600}
            height={800}
            withBackground={true}
          />
        </figure>
      ))}
    </article>
  );
}
