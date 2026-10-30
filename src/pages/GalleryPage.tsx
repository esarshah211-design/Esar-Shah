import React, { useState } from 'react';
import { initialGalleryItems } from '../components/gallery/galleryData';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { FoodVisual } from '../components/common/FoodVisual';
import { useBusiness } from '../context/BusinessContext';
import { PrimaryButton } from '../components/common/Buttons';
import { MapPin, Eye, Info } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { config } = useBusiness();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Ambiance', 'Coffee & Beverages', 'Bakes & Fare'];

  const filteredItems = initialGalleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAF6EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            Atmosphere & Craft
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#3B241C] tracking-tight">
            Photo Gallery
          </h1>
          <p className="font-sans text-base text-[#6B665F] mt-3 leading-relaxed">
            Take a visual tour through KS CAFE's seating spaces, specialty coffee ritual, and freshly prepared bakery items.
          </p>
        </div>

        {/* Demo Photography Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-xl bg-[#E6DED2]/50 border border-[#E6DED2] flex items-start gap-3 text-xs text-[#6B665F]">
          <Info className="w-4 h-4 text-[#C58B54] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#3B241C]">Photography Status:</strong> The gallery currently showcases demonstration artistic representations. Authentic on-site photography will be uploaded by the café owner prior to production launch.
          </p>
        </div>

        {/* Category Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#3B241C] text-[#FAF6EF] shadow-2xs'
                  : 'bg-white border border-[#E6DED2] text-[#6B665F] hover:bg-[#FAF6EF] hover:text-[#291710]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DED2] shadow-2xs hover:shadow-md hover:border-[#C58B54]/40 transition-all duration-200 cursor-pointer flex flex-col group"
            >
              <div className="aspect-4/3 w-full relative overflow-hidden bg-[#FAF6EF]">
                <FoodVisual
                  type={item.type}
                  alt={item.title}
                  isSamplePreview={!item.isOwnerSubmitted}
                />
                
                {/* Hover reveal scrim */}
                <div className="absolute inset-0 bg-[#291710]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] text-xs font-medium shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#C58B54]" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#687653] tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h2 className="font-serif font-bold text-base text-[#3B241C]">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#6B665F] mt-1 font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <GalleryLightbox
          items={filteredItems}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? filteredItems.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setCurrentIndex((prev) =>
              prev === filteredItems.length - 1 ? 0 : prev + 1
            )
          }
        />

        {/* Footer Navigation CTA */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-[#E6DED2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-[#3B241C]">
              Want to Experience the Atmosphere?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665F] mt-1 font-sans">
              Come down in person and enjoy our comfortable space and fresh coffee.
            </p>
          </div>
          <a
            href={config.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <PrimaryButton
              size="md"
              icon={<MapPin className="w-4 h-4 text-[#C58B54]" />}
            >
              Get Directions
            </PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};
