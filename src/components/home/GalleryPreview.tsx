import React, { useState } from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { initialGalleryItems } from '../gallery/galleryData';
import { GalleryLightbox } from '../gallery/GalleryLightbox';
import { FoodVisual } from '../common/FoodVisual';
import { PrimaryButton } from '../common/Buttons';
import { ArrowRight, Eye } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const { navigateTo } = useBusiness();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Take first 5 items for an artistic asymmetric layout
  const previewItems = initialGalleryItems.slice(0, 5);

  const openPhoto = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
              Visual Atmosphere
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
              Take a Look Around
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-2 max-w-xl">
              Explore photos of KS CAFE, its menu, and its surroundings.
            </p>
          </div>

          <div className="shrink-0">
            <PrimaryButton
              size="md"
              icon={<ArrowRight className="w-4 h-4 text-[#C58B54]" />}
              iconPosition="right"
              onClick={() => navigateTo('gallery')}
            >
              View Full Gallery
            </PrimaryButton>
          </div>
        </div>

        {/* Asymmetric Desktop Grid (5 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Main feature image - 7 cols */}
          <div
            onClick={() => openPhoto(0)}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E6DED2] bg-white aspect-16/10 sm:aspect-auto lg:h-[420px] relative cursor-pointer group shadow-xs hover:shadow-md transition-shadow"
          >
            <FoodVisual
              type={previewItems[0].type}
              alt={previewItems[0].title}
              isSamplePreview={!previewItems[0].isOwnerSubmitted}
            />
            <div className="absolute inset-0 bg-[#291710]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] text-xs font-medium shadow-md">
                <Eye className="w-4 h-4 text-[#C58B54]" />
                <span>View Atmosphere</span>
              </span>
            </div>
            <div className="absolute bottom-3 left-3 bg-[#FAF6EF]/90 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-serif font-semibold text-[#3B241C]">
              {previewItems[0].title}
            </div>
          </div>

          {/* 4 smaller images in 2x2 grid - 5 cols */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {previewItems.slice(1, 5).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openPhoto(idx + 1)}
                className="rounded-xl overflow-hidden border border-[#E6DED2] bg-white aspect-4/3 relative cursor-pointer group shadow-2xs hover:shadow-xs transition-shadow"
              >
                <FoodVisual
                  type={item.type}
                  alt={item.title}
                  isSamplePreview={!item.isOwnerSubmitted}
                />
                <div className="absolute inset-0 bg-[#291710]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-[#FAF6EF] text-[#3B241C] shadow-sm">
                    <Eye className="w-4 h-4 text-[#C58B54]" />
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#FAF6EF]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-sans font-medium text-[#3B241C] truncate max-w-[90%]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <GalleryLightbox
          items={previewItems}
          currentIndex={activePhotoIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setActivePhotoIndex((prev) =>
              prev === 0 ? previewItems.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setActivePhotoIndex((prev) =>
              prev === previewItems.length - 1 ? 0 : prev + 1
            )
          }
        />
      </div>
    </section>
  );
};
