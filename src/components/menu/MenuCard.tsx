import React from 'react';
import { MenuItem } from '../../config/businessConfig';
import { FoodVisual } from '../common/FoodVisual';
import { Leaf, Sparkles } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  currency?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, currency = 'PKR' }) => {
  return (
    <article className="bg-white rounded-2xl border border-[#E6DED2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C58B54]/40 transition-all duration-200 flex flex-col group">
      {/* Visual Image Slot with consistent 4:3 Aspect Ratio */}
      <div className="aspect-4/3 w-full overflow-hidden relative bg-[#FAF6EF]">
        <FoodVisual
          type={item.imageCategory}
          alt={item.name}
          isSamplePreview={item.samplePlaceholder}
        />
        
        {/* Subtle dietary or popular indicator (unboxed or subtle) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          {item.isPopular && (
            <span className="inline-flex items-center gap-1 bg-[#3B241C] text-[#FAF6EF] text-[10px] font-sans font-medium px-2 py-0.5 rounded-md shadow-xs">
              <Sparkles className="w-2.5 h-2.5 text-[#C58B54]" />
              <span>Favorite</span>
            </span>
          )}
          {item.isVegetarian && (
            <span className="inline-flex items-center gap-1 bg-[#687653] text-[#FAF6EF] text-[10px] font-sans font-medium px-2 py-0.5 rounded-md shadow-xs">
              <Leaf className="w-2.5 h-2.5" />
              <span>Veg</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif font-bold text-lg text-[#3B241C] group-hover:text-[#291710] transition-colors leading-snug">
              {item.name}
            </h3>
            {item.pricePKR !== null ? (
              <span className="font-sans font-bold text-base text-[#687653] tabular-nums whitespace-nowrap">
                {currency} {item.pricePKR.toLocaleString()}
              </span>
            ) : (
              <span className="text-xs text-[#6B665F] bg-[#FAF6EF] border border-[#E6DED2] px-2 py-0.5 rounded font-sans whitespace-nowrap">
                Price on Request
              </span>
            )}
          </div>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm text-[#6B665F] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Card Footer Tag */}
        <div className="mt-4 pt-3 border-t border-[#E6DED2]/60 flex items-center justify-between text-[11px] text-[#6B665F]">
          <span className="capitalize">{item.category.replace('-', ' ')}</span>
          {item.samplePlaceholder ? (
            <span className="text-[#C58B54] font-medium">Demo Preview Item</span>
          ) : (
            <span className="text-[#687653] font-medium">Verified Menu Item</span>
          )}
        </div>
      </div>
    </article>
  );
};
