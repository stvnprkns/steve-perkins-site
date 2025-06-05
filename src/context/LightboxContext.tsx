'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Lightbox } from '@/components/Lightbox';

interface LightboxContextType {
  openLightbox: (src: string, alt?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string = '') => {
    console.log('Opening lightbox with image:', {
      originalSrc: src,
      resolvedSrc: src.startsWith('/') ? src : `/${src}`,
      hasHttp: src.startsWith('http'),
      hasLeadingSlash: src.startsWith('/')
    });
    setCurrentImage({ src, alt });
    setIsOpen(true);
  };

  const closeLightbox = () => {
    console.log('Closing lightbox');
    setIsOpen(false);
    // Small delay before resetting the current image to allow for the close animation
    setTimeout(() => setCurrentImage(null), 300);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {currentImage && (
        <Lightbox 
          isOpen={isOpen} 
          onClose={closeLightbox} 
          src={currentImage.src} 
          alt={currentImage.alt} 
        />
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
