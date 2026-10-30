import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { FoodVisual } from '../common/FoodVisual';
import { PrimaryButton, SecondaryButton } from '../common/Buttons';
import { MapPin, ArrowRight, Heart, Sparkles, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { config, navigateTo } = useBusiness();

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Ambiance Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#E6DED2] shadow-lg aspect-4/3 relative bg-white">
              <FoodVisual
                type="cafe_interior"
                alt="KS CAFE Welcoming Atmosphere"
                isSamplePreview={false}
              />
              <div className="absolute top-4 left-4 bg-[#291710]/80 backdrop-blur-xs text-[#FAF6EF] px-3 py-1.5 rounded-lg border border-[#C58B54]/30 text-xs font-serif font-medium flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C58B54]" />
                <span>Made for Good Moments</span>
              </div>
            </div>
          </div>

          {/* Text & Story Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
                Our Story & Philosophy
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
                A Little About KS CAFE
              </h2>
            </div>

            <p className="font-sans text-base text-[#6B665F] leading-relaxed">
              Get to know KS CAFE, explore what we offer, and discover where to find us. We look forward to welcoming you.
            </p>

            <div className="bg-white rounded-xl p-6 border border-[#E6DED2] shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF6EF] text-[#687653] mt-0.5">
                  <Coffee className="w-4 h-4 text-[#C58B54]" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-[#3B241C]">
                    Welcoming Environment
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B665F] mt-1 leading-relaxed">
                    {config.fullStory}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#E6DED2]/60">
                <div className="p-2 rounded-lg bg-[#FAF6EF] text-[#687653] mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#687653]" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-[#3B241C]">
                    Quality in Every Pour
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B665F] mt-1 leading-relaxed">
                    From comforting morning espresso to evening iced specialties, our focus is bringing consistency, warmth, and care to your everyday café experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton
                  size="md"
                  icon={<MapPin className="w-4 h-4 text-[#C58B54]" />}
                >
                  Get Directions
                </PrimaryButton>
              </a>

              <SecondaryButton
                size="md"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4 text-[#3B241C]" />}
                iconPosition="right"
                onClick={() => navigateTo('about')}
              >
                Read More About Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
