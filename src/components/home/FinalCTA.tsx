import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { MapPin, UtensilsCrossed } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { config, navigateTo } = useBusiness();

  return (
    <section className="py-20 md:py-24 bg-[#291710] text-[#FAF6EF] relative overflow-hidden border-t border-[#3B241C]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C58B54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-[#3B241C] border border-[#C58B54]/30 flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#C58B54]" fill="none">
            <path d="M8 14h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 15h2.5a2.5 2.5 0 0 1 0 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 26h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 9c0-2 2-2 2-4M16 9c0-2 2-2 2-4" stroke="#FAF6EF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#FAF6EF] tracking-tight leading-tight">
          Plan Your Visit to KS CAFE
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#E6DED2]/80 mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore our menu, check our location, and get in touch if you have any questions. We look forward to welcoming you.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={config.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] hover:bg-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer">
              <MapPin className="w-4 h-4 text-[#C58B54]" />
              <span>Get Directions</span>
            </button>
          </a>

          <button
            onClick={() => navigateTo('menu')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#3B241C] hover:bg-[#4D3326] text-[#FAF6EF] border border-[#C58B54]/40 font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C58B54]" />
            <span>View Full Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
