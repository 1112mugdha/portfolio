import React, { useState, useEffect, useRef } from 'react';

export default function ImageLightbox({ activeImage, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const touchDistanceRef = useRef(null);

  // Reset scale and position whenever activeImage changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [activeImage]);

  // Lock body scroll when active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale((prevScale) => {
      const newScale = Math.min(Math.max(prevScale + delta, 1), 4);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  // Mouse drag & pan
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch pinch-to-zoom & drag-to-pan
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y };
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchDistanceRef.current) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchDistanceRef.current;
      setScale((prevScale) => {
        const newScale = Math.min(Math.max(prevScale * factor, 1), 4);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        return newScale;
      });
      touchDistanceRef.current = dist;
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchDistanceRef.current = null;
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
      onClick={onClose}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Floating Control Toolbar */}
      <div 
        className="absolute top-4 left-4 sm:left-6 z-10 flex items-center gap-2 bg-[#171515]/90 text-[#FAF4EB] border border-[#FAF4EB]/20 px-3 py-1.5 rounded-full shadow-2xl font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={zoomIn} 
          className="px-2.5 py-0.5 hover:bg-[#E96F98] hover:text-[#171515] rounded transition-colors font-bold text-sm cursor-pointer"
          title="Zoom In (+)"
        >
          +
        </button>
        <span className="px-1.5 text-[#FAF4EB]/80 font-bold min-w-[42px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button 
          onClick={zoomOut} 
          className="px-2.5 py-0.5 hover:bg-[#E96F98] hover:text-[#171515] rounded transition-colors font-bold text-sm cursor-pointer"
          title="Zoom Out (−)"
        >
          −
        </button>
        <button 
          onClick={resetZoom} 
          className="px-2.5 py-0.5 hover:bg-[#D7F23A] hover:text-[#171515] rounded transition-colors font-bold uppercase text-[10px] tracking-wider ml-1 border-l border-[#FAF4EB]/20 pl-2 cursor-pointer"
          title="Reset Zoom (100%)"
        >
          RESET
        </button>
      </div>

      {/* Top Right Prominent Close Button (✕) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:right-6 z-10 w-10 h-10 flex items-center justify-center bg-[#171515]/90 hover:bg-[#E96F98] text-[#FAF4EB] hover:text-[#171515] border border-[#FAF4EB]/20 rounded-full shadow-2xl transition-all font-mono font-bold text-xl cursor-pointer"
        aria-label="Close full-screen image preview"
      >
        ✕
      </button>

      {/* Centered Image Container with Pan / Zoom */}
      <div 
        className={`relative flex items-center justify-center max-w-full max-h-full ${
          scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeImage.src}
          alt={activeImage.alt || 'Full screen image preview'}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            maxHeight: 'calc(100vh - 80px)',
            maxWidth: 'calc(100vw - 40px)',
            objectFit: 'contain'
          }}
          className="block select-none pointer-events-auto rounded shadow-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
}
