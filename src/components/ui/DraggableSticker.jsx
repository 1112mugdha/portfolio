import React, { useState } from 'react';
import { getAssetPath } from '../../utils/assetPath';

export default function DraggableSticker({
  src,
  initialPos,
  size = { width: 44, height: 44 },
  alt = "Sticker"
}) {
  const [pos, setPos] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Capture pointer events for fluid drag handling across window
    try {
      e.target.setPointerCapture(e.pointerId);
    } catch (err) {}

    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const heroEl = document.querySelector('.hero-section');
    if (!heroEl) return;
    const heroRect = heroEl.getBoundingClientRect();

    // Position relative to hero container bounds
    const newX = e.clientX - heroRect.left - dragOffset.x;
    const newY = e.clientY - heroRect.top - dragOffset.y;

    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`draggable-sticker ${isDragging ? 'is-dragging' : ''}`}
      style={{
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 25 : 12,
        touchAction: 'none',
        userSelect: 'none'
      }}
    >
      <img
        src={getAssetPath(src)}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    </div>
  );
}
