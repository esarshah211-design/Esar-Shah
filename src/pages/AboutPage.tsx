import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { FoodVisual } from '../components/common/FoodVisual';
import { PrimaryButton } from '../components/common/Buttons';
import { MapPin, ShieldCheck, Heart, Coffee, Users, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { config, navigateTo } = useBusiness();

  const differentiators = [
    {
      icon: <Coffee className="w-5 h-5 text-[#C58B54]" />,
      title: 'Crafted Coffee Discipline',
      description:
        'Every roast is prepared with attention to grind consistency, water temperature, and balanced extraction to ensure your beverage is consistently rich and smooth.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#687653]" />,
      title: 'A Neighborhood Gathering Place',
      description:
        'More than a coffee stop, KS CAFE is shaped to be a peaceful local haven where friends reconnect, professionals work comfortably, and solo visitors unwind.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#3B241C]" />,
      title: 'Warm & Genuine Hospitality',
      description:
        'Our service philosophy is rooted in welcoming friendliness and genuine care for our visitors from the moment you step through our doors.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C58B54]" />,
      title: 'Fresh Daily Bakes & Treats',
      description:
        'Pair your favorite hot or iced brew with our daily assortment of buttery croissants, decadent cakes, and artisanal savory light fare.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#FAF6EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            The Philosophy
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#3B241C] tracking-tight">
            About KS CAFE
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#6B665F] mt-3 leading-relaxed">
            {config.shortDescription}
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-[#E6DED2] shadow-xs space-y-4">
              <span className="text-xs uppercase font-semibold text-[#687653] tracking-wide">
                Approved Brand Story
              </span>
              <h2 className="font-serif font-bold text-2xl text-[#3B241C]">
                Built for Moments of Connection
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#6B665F] leading-relaxed">
                {config.fullStory}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#6B665F] leading-relaxed">
                Whether you come in for an early morning flat white, an afternoon cold brew meeting, or an evening treat with family, our priority is giving you an honest, quality experience in an unhurried ambiance.
              </p>
            </div>

            <div className="flex items-center gap-2 p-4 rounded-xl bg-white/60 border border-[#E6DED2] text-xs text-[#6B665F]">
              <ShieldCheck className="w-4 h-4 text-[#687653] shrink-0" />
              <span>
                Verified Google Business Profile entry: We maintain strictly verified facts without fabricated accolades or unconfirmed history.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#E6DED2] shadow-xl bg-white aspect-4/3 relative">
              <FoodVisual
                type="cafe_interior"
                alt="KS CAFE Interior Atmosphere"
                isSamplePreview={false}
              />
              <div className="absolute bottom-4 left-4 bg-[#291710]/85 backdrop-blur-xs text-[#FAF6EF] px-3.5 py-2 rounded-xl text-xs font-serif border border-[#C58B54]/30">
                <span className="text-[#C58B54] font-bold">KS CAFE</span> · Atmosphere & Space
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
              Our Core Pillars
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#3B241C]">
              What Makes KS CAFE Special
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] border border-[#E6DED2] flex items-center justify-center mb-4">
                    {diff.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#3B241C] mb-2">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Directions Call to Action */}
        <div className="bg-[#291710] text-[#FAF6EF] rounded-2xl p-8 md:p-12 border border-[#3B241C] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF6EF]">
              Experience KS CAFE in Person
            </h3>
            <p className="font-sans text-sm text-[#E6DED2]/80 mt-2 leading-relaxed">
              Find our verified destination on Google Maps, check our operating schedule, and come say hello.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={config.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton
                size="md"
                icon={<MapPin className="w-4 h-4 text-[#C58B54]" />}
                className="bg-[#FAF6EF] text-[#3B241C] hover:bg-white border-white"
              >
                Get Directions
              </PrimaryButton>
            </a>
            <button
              onClick={() => navigateTo('menu')}
              className="px-5 py-2.5 rounded-lg border border-[#C58B54]/40 text-[#FAF6EF] hover:bg-[#3B241C] text-sm font-medium transition-colors cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
