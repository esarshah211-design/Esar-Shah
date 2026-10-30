import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { FoodVisual } from '../common/FoodVisual';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambiance' | 'Coffee & Beverages' | 'Bakes & Fare';
  type: string;
  description: string;
  isOwnerSubmitted?: boolean;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const activeItem = items[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${activeItem.title} lightbox view`}
      className="fixed inset-0 z-50 bg-[#1F120D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative max-w-4xl w-full bg-[#291710] rounded-2xl border border-[#C58B54]/30 shadow-2xl overflow-hidden flex flex-col text-[#FAF6EF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between p-4 border-b border-[#3B241C]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#C58B54] uppercase tracking-wider">
              {activeItem.category}
            </span>
            <span className="text-[#E6DED2]/40 text-xs">·</span>
            <span className="text-xs text-[#E6DED2]/80 tabular-nums">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-lg bg-[#3B241C] text-[#FAF6EF] hover:bg-[#4D3326] transition-colors focus:ring-2 focus:ring-[#C58B54] cursor-pointer"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Display Stage */}
        <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-[#1F120D] flex items-center justify-center overflow-hidden">
          <FoodVisual
            type={activeItem.type}
            alt={activeItem.title}
            className="w-full h-full object-cover"
            isSamplePreview={!activeItem.isOwnerSubmitted}
          />

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#291710]/80 hover:bg-[#3B241C] text-[#FAF6EF] border border-[#C58B54]/30 shadow-md transition-all cursor-pointer focus:ring-2 focus:ring-[#C58B54]"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#291710]/80 hover:bg-[#3B241C] text-[#FAF6EF] border border-[#C58B54]/30 shadow-md transition-all cursor-pointer focus:ring-2 focus:ring-[#C58B54]"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption and Demonstration Note */}
        <div className="p-5 bg-[#291710] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#3B241C]">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#FAF6EF]">
              {activeItem.title}
            </h3>
            <p className="text-xs text-[#E6DED2]/80 mt-1 font-sans">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#C58B54] bg-[#3B241C] px-3 py-1.5 rounded-lg border border-[#C58B54]/20 shrink-0">
            <Info className="w-3.5 h-3.5" />
            <span>
              {activeItem.isOwnerSubmitted
                ? 'Verified Café Photography'
                : 'Demonstration Ambiance Render'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
