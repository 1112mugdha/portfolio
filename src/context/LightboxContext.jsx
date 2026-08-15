import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
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

  // Global click event listener to automatically attach Lightbox behavior to all site-wide <img> elements
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      if (
        target && 
        target.tagName === 'IMG' && 
        !target.closest('[data-no-lightbox="true"]') &&
        !target.classList.contains('no-lightbox')
      ) {
        const imgSrc = target.currentSrc || target.src;
        const imgAlt = target.alt || '';
        if (imgSrc) {
          // Open lightbox on next tick so the current click event loop completes before modal backdrop mounts
          setTimeout(() => {
            openLightbox(imgSrc, imgAlt);
          }, 10);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick, false);
    return () => {
      document.removeEventListener('click', handleDocumentClick, false);
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
