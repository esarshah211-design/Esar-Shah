import React from 'react';

export type VisualCategory =
  | 'espresso'
  | 'cappuccino'
  | 'iced_latte'
  | 'matcha'
  | 'croissant'
  | 'cake'
  | 'sandwich'
  | 'pour_over'
  | 'cafe_interior'
  | 'barista_craft'
  | 'patio_evening';

interface FoodVisualProps {
  type: VisualCategory | string;
  alt: string;
  className?: string;
  isSamplePreview?: boolean;
}

export const FoodVisual: React.FC<FoodVisualProps> = ({
  type,
  alt,
  className = '',
  isSamplePreview = false,
}) => {
  const renderVisual = () => {
    switch (type) {
      case 'espresso':
      case 'pour_over':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#291710] via-[#3B241C] to-[#513629] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background ambiance circles */}
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#C58B54]/15 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#687653]/15 blur-lg pointer-events-none" />
            
            {/* Graphic Cup Illustration */}
            <div className="relative flex flex-col items-center">
              {/* Steams */}
              <div className="flex gap-2 mb-2 opacity-80 animate-pulse">
                <span className="w-1 h-5 bg-[#FAF6EF]/60 rounded-full blur-[0.5px]" />
                <span className="w-1 h-7 bg-[#C58B54]/60 rounded-full blur-[0.5px]" />
                <span className="w-1 h-4 bg-[#FAF6EF]/60 rounded-full blur-[0.5px]" />
              </div>
              {/* Cup & Crema */}
              <div className="w-24 h-16 bg-[#FAF6EF] rounded-b-3xl border-4 border-[#E6DED2] shadow-lg flex items-center justify-center relative">
                <div className="absolute top-1 inset-x-2 h-3.5 bg-gradient-to-r from-[#8C532B] via-[#C58B54] to-[#6E3C1B] rounded-full shadow-inner flex items-center justify-center">
                  <span className="w-8 h-1.5 bg-[#E6C29F]/70 rounded-full blur-[0.5px]" />
                </div>
                {/* Brand Initial Stamp */}
                <span className="text-[11px] font-serif font-bold text-[#3B241C] tracking-widest mt-2">
                  KS
                </span>
                {/* Handle */}
                <div className="absolute right-[-14px] top-2 w-4 h-8 border-4 border-[#E6DED2] rounded-r-xl" />
              </div>
              {/* Saucer */}
              <div className="w-32 h-2.5 bg-[#E6DED2] rounded-full shadow-md mt-1" />
            </div>
          </div>
        );

      case 'cappuccino':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#4A3227] via-[#5C3D2E] to-[#3B241C] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#C58B54]/20 rounded-full blur-xl" />
            <div className="relative flex flex-col items-center">
              <div className="w-26 h-26 rounded-full bg-[#FAF6EF] p-2.5 shadow-xl border-2 border-[#E6DED2] flex items-center justify-center">
                {/* Cup Rim */}
                <div className="w-full h-full rounded-full bg-[#3B241C] p-2 flex items-center justify-center shadow-inner relative">
                  {/* Froth & Latte Art Heart */}
                  <div className="w-full h-full rounded-full bg-[#E8D4BE] flex items-center justify-center relative overflow-hidden">
                    <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#C58B54] fill-current">
                      <path d="M20 32s-10-6.5-10-15a6 6 0 0 1 10-4 6 6 0 0 1 10 4c0 8.5-10 15-10 15z" />
                    </svg>
                    <span className="absolute inset-0 bg-radial from-transparent to-[#8C532B]/30" />
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-[#FAF6EF]/75 font-sans font-medium uppercase tracking-wider mt-2.5">
                Velvety Microfoam
              </span>
            </div>
          </div>
        );

      case 'iced_latte':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#3D2C24] via-[#513C32] to-[#2E2019] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FAF6EF_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative flex flex-col items-center">
              {/* Clear Glass */}
              <div className="w-16 h-28 bg-[#FAF6EF]/20 backdrop-blur-xs border-2 border-[#FAF6EF]/40 rounded-b-2xl relative shadow-lg overflow-hidden flex flex-col justify-end p-1">
                {/* Condensation & Ice cubes */}
                <div className="absolute top-3 left-3 w-4 h-4 bg-white/40 rounded-xs rotate-12 border border-white/60" />
                <div className="absolute top-6 right-3 w-5 h-5 bg-white/40 rounded-xs -rotate-6 border border-white/60" />
                
                {/* Milk Layer */}
                <div className="w-full h-12 bg-[#F5ECE0] rounded-b-xl" />
                {/* Swirling Espresso Layer */}
                <div className="w-full h-10 bg-gradient-to-t from-[#8C532B] to-[#3B241C]" />
                {/* Straw */}
                <div className="absolute -top-6 right-4 w-1.5 h-36 bg-[#C58B54] rounded-full rotate-6 shadow-sm" />
              </div>
              <span className="text-[10px] text-[#FAF6EF]/75 font-sans font-medium uppercase tracking-wider mt-2">
                Hand-Shaken Over Ice
              </span>
            </div>
          </div>
        );

      case 'matcha':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#4D5B3C] via-[#687653] to-[#3B452D] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A2B684]/20 rounded-full blur-xl" />
            <div className="relative flex flex-col items-center">
              {/* Ceramic Chawan Bowl */}
              <div className="w-24 h-16 bg-[#FAF6EF] rounded-b-3xl border-4 border-[#E6DED2] shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full bg-[#52633C] p-2 flex items-center justify-center">
                  <div className="w-16 h-8 bg-[#687653] rounded-full flex items-center justify-center shadow-inner">
                    <span className="w-8 h-2 bg-[#8CA46E] rounded-full blur-[1px]" />
                  </div>
                </div>
              </div>
              <div className="w-28 h-2 bg-[#FAF6EF]/80 rounded-full mt-1" />
              <span className="text-[10px] text-[#FAF6EF] font-sans font-medium uppercase tracking-wider mt-2.5">
                Ceremonial Grade Uji Matcha
              </span>
            </div>
          </div>
        );

      case 'croissant':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#F5ECE0] via-[#EEDCC7] to-[#E3C9A7] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="relative flex flex-col items-center">
              {/* Bakery plate */}
              <div className="w-28 h-28 rounded-full bg-white shadow-md border border-[#E6DED2] flex items-center justify-center p-3">
                {/* Croissant Crescent */}
                <svg viewBox="0 0 64 48" className="w-16 h-12 text-[#C58B54] fill-current drop-shadow-sm">
                  <path d="M6 34c4-12 14-22 26-22s22 10 26 22c-6-4-14-6-26-6s-20 2-26 6z" />
                  <path d="M16 28c3-6 9-11 16-11s13 5 16 11c-4-2-9-3-16-3s-12 1-16 3z" fill="#D99B62" />
                  <path d="M24 22c2-3 5-5 8-5s6 2 8 5c-2-1-5-2-8-2s-6 1-8 2z" fill="#8C532B" />
                </svg>
              </div>
              <span className="text-[10px] text-[#3B241C]/80 font-sans font-semibold uppercase tracking-wider mt-2">
                Freshly Baked Daily
              </span>
            </div>
          </div>
        );

      case 'cake':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#3B241C] via-[#4F3025] to-[#291710] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="relative flex flex-col items-center">
              <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-xs border border-[#C58B54]/30 flex items-center justify-center p-2 shadow-lg">
                <svg viewBox="0 0 64 64" className="w-16 h-16">
                  {/* Cake Slice Shape */}
                  <polygon points="12,46 52,46 44,22 12,30" fill="#291710" stroke="#C58B54" strokeWidth="2" />
                  <polygon points="12,30 44,22 28,14 12,20" fill="#3B241C" />
                  {/* Chocolate Ganache Layer */}
                  <line x1="12" y1="38" x2="48" y2="34" stroke="#C58B54" strokeWidth="2" />
                  {/* Cherry on top */}
                  <circle cx="28" cy="14" r="4" fill="#992222" />
                  <path d="M28 10c2-4 6-5 6-5" stroke="#687653" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[10px] text-[#FAF6EF]/80 font-sans font-medium uppercase tracking-wider mt-2">
                Decadent Belgian Ganache
              </span>
            </div>
          </div>
        );

      case 'sandwich':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#FAF6EF] via-[#F3ECE1] to-[#E6DED2] flex items-center justify-center p-6 relative overflow-hidden">
            <div className="relative flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-[#E6DED2] flex items-center justify-center p-3">
                <svg viewBox="0 0 64 64" className="w-16 h-16">
                  {/* Artisanal Bread Slices */}
                  <rect x="12" y="18" width="40" height="8" rx="3" fill="#C58B54" />
                  <rect x="14" y="27" width="36" height="4" rx="1.5" fill="#687653" />
                  <rect x="14" y="32" width="36" height="5" rx="1.5" fill="#E8B07D" />
                  <rect x="12" y="38" width="40" height="8" rx="3" fill="#C58B54" />
                  {/* Grill Marks */}
                  <line x1="20" y1="18" x2="24" y2="26" stroke="#8C532B" strokeWidth="1.5" />
                  <line x1="30" y1="18" x2="34" y2="26" stroke="#8C532B" strokeWidth="1.5" />
                  <line x1="40" y1="18" x2="44" y2="26" stroke="#8C532B" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-[10px] text-[#292622]/80 font-sans font-medium uppercase tracking-wider mt-2">
                Toasted Artisanal Sourdough
              </span>
            </div>
          </div>
        );

      case 'cafe_interior':
      case 'barista_craft':
      case 'patio_evening':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#291710] via-[#3B241C] to-[#4D3326] flex items-center justify-center p-8 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(#C58B54_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            <div className="relative z-10 flex flex-col items-center max-w-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#C58B54]/20 border border-[#C58B54]/40 flex items-center justify-center mb-3">
                <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#C58B54]" fill="none">
                  <path d="M6 14h16v7a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 16h3a2.5 2.5 0 0 1 0 5h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 28h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 9c0-2 2-2 2-4M15 9c0-2 2-2 2-4" stroke="#FAF6EF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-serif text-[#FAF6EF] text-lg font-semibold">{alt}</p>
              <p className="text-xs text-[#C58B54] font-sans mt-1">KS CAFE Atmosphere</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {renderVisual()}
      
      {/* Sample demonstration badge if demo mode */}
      {isSamplePreview && (
        <div className="absolute top-2.5 right-2.5 bg-[#291710]/85 backdrop-blur-xs text-[#C58B54] border border-[#C58B54]/30 text-[10px] font-sans font-medium px-2 py-0.5 rounded-md pointer-events-none tracking-tight shadow-xs">
          Demo Preview
        </div>
      )}
    </div>
  );
};
