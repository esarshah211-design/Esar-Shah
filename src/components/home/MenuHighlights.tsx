import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { MenuCard } from '../menu/MenuCard';
import { PrimaryButton } from '../common/Buttons';
import { ArrowRight, Info } from 'lucide-react';

export const MenuHighlights: React.FC = () => {
  const { config, showSampleMenu, navigateTo, setShowSampleMenu } = useBusiness();

  // Determine items to show:
  // If verified menu items exist, show them.
  // If not, and showSampleMenu is true, show demo items with explicit clear banner.
  // If not, show empty state with owner prompt.
  const verifiedItems = config.verifiedMenuItems;
  const hasVerified = verifiedItems.length > 0;
  const displayItems = hasVerified
    ? verifiedItems.slice(0, 4)
    : showSampleMenu
    ? config.sampleDemoMenuItems.slice(0, 4)
    : [];

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
              Signature Offerings
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
              A Look at Our Menu
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-3 leading-relaxed">
              Explore the items available at KS CAFE and find something for your next visit.
            </p>
          </div>

          <div className="shrink-0">
            <PrimaryButton
              size="md"
              icon={<ArrowRight className="w-4 h-4 text-[#C58B54]" />}
              iconPosition="right"
              onClick={() => navigateTo('menu')}
            >
              View Full Menu
            </PrimaryButton>
          </div>
        </div>

        {/* Demo Mode Notice Banner if using sample data */}
        {!hasVerified && showSampleMenu && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold text-amber-950">Demonstration Layout Preview:</span>{' '}
              Official menu items and prices in PKR are pending café owner confirmation. These sample cards preview the presentation format.
            </div>
            <button
              onClick={() => setShowSampleMenu(false)}
              className="text-amber-800 underline underline-offset-2 hover:text-amber-950 whitespace-nowrap font-medium cursor-pointer"
            >
              Show Strict Mode
            </button>
          </div>
        )}

        {/* Item Grid */}
        {displayItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayItems.map((item) => (
              <MenuCard key={item.id} item={item} currency={config.menuCurrency} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-[#E6DED2] p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF6EF] text-[#687653] flex items-center justify-center mx-auto">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#3B241C]">
              Official Menu Being Updated
            </h3>
            <p className="font-sans text-sm text-[#6B665F] leading-relaxed">
              KS CAFE's official menu items and prices are being confirmed with the café owner. You can enable sample demo preview mode to inspect the layout.
            </p>
            <button
              onClick={() => setShowSampleMenu(true)}
              className="px-4 py-2 rounded-lg bg-[#3B241C] text-white text-xs font-medium hover:bg-[#291710] cursor-pointer"
            >
              Enable Sample Layout Preview
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
