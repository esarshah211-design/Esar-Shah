import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { PrimaryButton, SecondaryButton } from '../common/Buttons';
import { FoodVisual } from '../common/FoodVisual';
import { MapPin, UtensilsCrossed, ExternalLink, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { config, navigateTo } = useBusiness();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 border-b border-[#E6DED2]">
      {/* Background Subtle Warm Gradient Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C58B54]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#687653]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Locality & Verification Metadata Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-sans text-[#687653] bg-[#687653]/10 border border-[#687653]/20 px-3 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#687653]" />
              <span className="font-semibold tracking-wide uppercase text-[11px]">
                Google Business Profile Verified
              </span>
              <span aria-hidden="true" className="text-[#687653]/40">·</span>
              <span className="text-[#3B241C] font-medium">Independent Café</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#3B241C] leading-[1.12] tracking-tight text-balance">
              Good Moments Start at{' '}
              <span className="relative inline-block text-[#291710]">
                KS CAFE
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#C58B54]/60"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C48 2 152 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#6B665F] leading-relaxed max-w-xl">
              {config.shortDescription} Discover our café, explore the menu, and find everything you need to plan your next visit.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <PrimaryButton
                size="lg"
                icon={<UtensilsCrossed className="w-4 h-4 text-[#C58B54]" />}
                onClick={() => navigateTo('menu')}
                className="w-full sm:w-auto"
              >
                Explore Our Menu
              </PrimaryButton>

              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <SecondaryButton
                  size="lg"
                  icon={<MapPin className="w-4 h-4 text-white" />}
                  className="w-full sm:w-auto"
                >
                  Get Directions
                </SecondaryButton>
              </a>
            </div>

            {/* Verified Google Maps Reference Subtext */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#6B665F]">
              <ShieldCheck className="w-4 h-4 text-[#687653]" />
              <span>
                Verified Google Maps destination:{' '}
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#3B241C] underline underline-offset-2 hover:text-[#C58B54] transition-colors"
                >
                  KS CAFE on Maps
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card with Warm Shadow */}
              <div className="rounded-2xl overflow-hidden border border-[#E6DED2] shadow-xl bg-white aspect-4/3 relative group">
                <FoodVisual
                  type="barista_craft"
                  alt="KS CAFE Artisanal Brew Experience"
                  isSamplePreview={false}
                />
                
                {/* Overlay Card Sticker */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF6EF]/95 backdrop-blur-md border border-[#E6DED2] rounded-xl p-3 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3B241C] text-[#C58B54] flex items-center justify-center font-serif font-bold text-sm">
                      KS
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-sm text-[#3B241C]">
                        Artisanal Coffee & Bakes
                      </p>
                      <p className="text-[11px] text-[#6B665F] font-sans">
                        Warm hospitality · Welcoming space
                      </p>
                    </div>
                  </div>
                  <a
                    href={config.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B241C] hover:text-[#C58B54] p-1.5"
                    title="View Google Business Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative accent background frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#C58B54]/30 -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>
        </div>

        {/* 4-Column Verified Quick Information Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Location */}
          <div className="bg-white rounded-xl p-5 border border-[#E6DED2] shadow-xs flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                <MapPin className="w-5 h-5 text-[#C58B54]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B665F]">
                  Destination
                </span>
                <h2 className="font-serif font-semibold text-base text-[#3B241C] mt-0.5">
                  Verified on Maps
                </h2>
                <p className="text-xs text-[#6B665F] mt-1 leading-snug">
                  {config.isAddressVerified ? config.fullAddress : 'Google Business Profile destination confirmed.'}
                </p>
              </div>
            </div>
            <a
              href={config.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-xs font-semibold text-[#3B241C] hover:text-[#C58B54] inline-flex items-center gap-1"
            >
              <span>Get Directions</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white rounded-xl p-5 border border-[#E6DED2] shadow-xs flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#687653]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B665F]">
                  Operating Schedule
                </span>
                <h2 className="font-serif font-semibold text-base text-[#3B241C] mt-0.5">
                  {config.areHoursVerified ? 'Verified Hours' : 'Open Daily'}
                </h2>
                <p className="text-xs text-[#6B665F] mt-1 leading-snug">
                  {config.areHoursVerified
                    ? 'Confirmed by café management'
                    : 'Check Google Maps for live opening status before visit.'}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigateTo('contact')}
              className="mt-3 text-xs font-semibold text-[#687653] hover:text-[#4D5B3C] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Check Hours Details</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Card 3: Experience */}
          <div className="bg-white rounded-xl p-5 border border-[#E6DED2] shadow-xs flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                <UtensilsCrossed className="w-5 h-5 text-[#C58B54]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B665F]">
                  The Menu
                </span>
                <h2 className="font-serif font-semibold text-base text-[#3B241C] mt-0.5">
                  Artisanal Coffee & Bakes
                </h2>
                <p className="text-xs text-[#6B665F] mt-1 leading-snug">
                  Espresso, iced refreshers, ceremonial teas, and fresh bakes.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigateTo('menu')}
              className="mt-3 text-xs font-semibold text-[#3B241C] hover:text-[#C58B54] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Items</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Card 4: Contact / Google Profile */}
          <div className="bg-white rounded-xl p-5 border border-[#E6DED2] shadow-xs flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                <ShieldCheck className="w-5 h-5 text-[#687653]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B665F]">
                  Authenticity
                </span>
                <h2 className="font-serif font-semibold text-base text-[#3B241C] mt-0.5">
                  Genuine Profile
                </h2>
                <p className="text-xs text-[#6B665F] mt-1 leading-snug">
                  Official Google Business presence with customer feedback.
                </p>
              </div>
            </div>
            <a
              href={config.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-xs font-semibold text-[#687653] hover:text-[#4D5B3C] inline-flex items-center gap-1"
            >
              <span>View Google Profile</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
