'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Helper function to ensure the image path is absolute
const getAbsolutePath = (path: string) => {
  if (!path) {
    console.error('No path provided to getAbsolutePath');
    return '';
  }
  
  // If it's already an absolute URL or starts with /, return as is
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith('/')) {
    console.log('Path is already absolute:', path);
    return path;
  }
  
  // Otherwise, assume it's in the public folder
  const resolvedPath = `/${path}`;
  console.log('Resolved relative path:', { original: path, resolved: resolvedPath });
  return resolvedPath;
};

// Helper component to log image loading state
const DebugImage = ({ src, alt, ...props }: any) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const absoluteSrc = getAbsolutePath(src);
  
  useEffect(() => {
    console.log('Image component mounted with:', { 
      originalSrc: src, 
      absoluteSrc,
      hasError,
      isLoading
    });
    
    return () => {
      console.log('Image component unmounting:', { src });
    };
  }, [src, absoluteSrc, hasError, isLoading]);
  
  if (hasError) {
    console.error('Image failed to load:', { src, absoluteSrc });
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-700 p-4">
        Failed to load image: {src}
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          Loading...
        </div>
      )}
      <div className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative w-full h-full">
          <Image
            src={absoluteSrc}
            alt={alt}
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
            unoptimized={absoluteSrc.startsWith('http')}
            onLoadingComplete={() => {
              console.log('Image loaded successfully:', { src: absoluteSrc });
              setIsLoading(false);
            }}
            onError={(e) => {
              console.error('Image load error:', {
                src: absoluteSrc,
                error: e,
                timestamp: new Date().toISOString()
              });
              setHasError(true);
            }}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function Lightbox({ isOpen, onClose, src, alt }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Debug log to check if lightbox is being rendered
  console.log('Rendering Lightbox', { isOpen, src });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        }}
        onClick={(e) => {
          console.log('Lightbox background clicked');
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col h-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center p-4">
              <DebugImage 
                src={src}
                alt={alt}
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
          
          {alt && !alt.startsWith('http') && (
            <div className="mt-2 px-4 py-2 bg-black/50 rounded-lg max-w-full">
              <p className="text-sm text-white text-center truncate">
                {alt}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
