import Image from 'next/image';

interface HoverRevealProps {
  children: React.ReactNode;
  image: string;
  alt: string;
  className?: string;
  display?: 'inline' | 'block';
}

export default function HoverReveal({ children, image, alt, className = '', display = 'inline' }: HoverRevealProps) {
  return (
    <span className={`group relative ${display === 'inline' ? 'inline-block' : 'block'} ${className}`}>
      {children}
      <span className={`absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-50 ${className.includes('kids-dogs') ? 'hover-reveal-left' : 'hover-reveal-right'}`}>
        <span className="relative w-24 h-24 bg-muted/20 rounded-lg overflow-hidden z-50">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </span>
      </span>
    </span>
  );
}
