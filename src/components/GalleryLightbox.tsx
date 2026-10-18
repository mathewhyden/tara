import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/siteData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;
  const current = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 z-50 transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 bg-black/40 hover:bg-black/70 rounded-full transition-colors z-50 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 bg-black/40 hover:bg-black/70 rounded-full transition-colors z-50 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image & Caption Container */}
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center p-2">
        <img
          src={current.imageUrl}
          alt={current.title}
          className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl"
        />
        <div className="text-center mt-4 text-white">
          <div className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
            {current.category.replace('-', ' ')} • {currentIndex + 1} of {items.length}
          </div>
          <h3 className="font-serif text-lg font-bold text-white mt-1">
            {current.title}
          </h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto mt-1">
            {current.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
