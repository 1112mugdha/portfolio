import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ImageLightbox from '../components/ui/ImageLightbox';

const LightboxContext = createContext({
  activeImage: null,
  openLightbox: () => {},
  closeLightbox: () => {}
});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }) {
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = useCallback((src, alt = '') => {
    if (!src) return;
    setActiveImage({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Global click listener as a fallback catch-all for any site-wide <img> elements
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      const img = target.tagName === 'IMG' ? target : target.querySelector ? target.querySelector('img') : null;
      
      if (
        img && 
        !img.closest('[data-no-lightbox="true"]') &&
        !img.classList.contains('no-lightbox')
      ) {
        const imgSrc = img.currentSrc || img.src;
        const imgAlt = img.alt || '';
        if (imgSrc && !imgSrc.endsWith('.svg')) {
          openLightbox(imgSrc, imgAlt);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [openLightbox]);

  return (
    <LightboxContext.Provider value={{ activeImage, openLightbox, closeLightbox }}>
      {children}
      {activeImage && (
        <ImageLightbox 
          activeImage={activeImage} 
          onClose={closeLightbox} 
        />
      )}
    </LightboxContext.Provider>
  );
}
