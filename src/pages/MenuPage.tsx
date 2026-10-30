import React, { useState, useMemo } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { MenuCard } from '../components/menu/MenuCard';
import { PrimaryButton } from '../components/common/Buttons';
import { MapPin, Search, Info, SlidersHorizontal } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const { config, showSampleMenu, setShowSampleMenu, setIsConfigDrawerOpen } = useBusiness();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const hasVerified = config.verifiedMenuItems.length > 0;
  
  // Available pool of items
  const allItems = useMemo(() => {
    if (hasVerified) {
      return config.verifiedMenuItems;
    }
    if (showSampleMenu) {
      return config.sampleDemoMenuItems;
    }
    return [];
  }, [hasVerified, showSampleMenu, config.verifiedMenuItems, config.sampleDemoMenuItems]);

  // Filter items
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allItems, selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 bg-[#FAF6EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            The Offerings
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#3B241C] tracking-tight">
            Menu & Refreshments
          </h1>
          <p className="font-sans text-base text-[#6B665F] mt-3 leading-relaxed">
            Discover handcrafted espresso, signature iced blends, ceremonial matcha, and artisanal oven-baked treats at KS CAFE.
          </p>
        </div>

        {/* Verification & Demo Notice Banner */}
        {!hasVerified && showSampleMenu && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-50/90 border border-amber-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-amber-950">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-amber-950">
                  Sample Demonstration Menu
                </p>
                <p className="text-amber-800 text-xs mt-0.5">
                  Official item offerings, ingredients, and PKR prices will be finalized upon café owner confirmation. These cards demonstrate the verified card presentation structure.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowSampleMenu(false)}
                className="px-3 py-1.5 rounded-lg border border-amber-300 bg-white text-amber-900 font-medium hover:bg-amber-100/50 transition-colors cursor-pointer"
              >
                Hide Sample Items
              </button>
              <button
                onClick={() => setIsConfigDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3B241C] text-white font-medium hover:bg-[#291710] transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Enter Real Menu</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-[#E6DED2] shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#6B665F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search coffee, drinks, bakes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-[#FAF6EF] border border-[#E6DED2] rounded-xl text-[#292622] placeholder:text-[#6B665F]/60 focus:outline-hidden focus:ring-2 focus:ring-[#C58B54]"
              />
            </div>

            {/* Total Count Pill / Kicker */}
            <div className="text-xs text-[#6B665F] font-sans">
              Showing <strong className="text-[#3B241C] tabular-nums">{filteredItems.length}</strong> items {config.menuCurrency ? `(Prices in ${config.menuCurrency})` : ''}
            </div>
          </div>

          {/* Category Tabs (Functional Segmented Buttons per design system rules) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#FAF6EF]">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#3B241C] text-white shadow-2xs'
                  : 'bg-[#FAF6EF] text-[#6B665F] hover:bg-[#E6DED2]/60 hover:text-[#292622]'
              }`}
            >
              All Offerings
            </button>
            {config.menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#3B241C] text-white shadow-2xs'
                    : 'bg-[#FAF6EF] text-[#6B665F] hover:bg-[#E6DED2]/60 hover:text-[#292622]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} currency={config.menuCurrency} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-[#E6DED2] p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF6EF] text-[#C58B54] flex items-center justify-center mx-auto">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-[#3B241C]">
              {searchQuery ? 'No Matching Items Found' : 'Menu Under Verification'}
            </h2>
            <p className="font-sans text-sm text-[#6B665F] leading-relaxed">
              {searchQuery
                ? `No menu items matched "${searchQuery}". Try selecting another category or resetting the search filter.`
                : 'The café owner has not yet entered verified menu items. You can enable sample demo items to inspect the layout, or use the Owner Content Manager to add real items.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#FAF6EF] text-[#3B241C] text-xs font-semibold hover:bg-[#E6DED2] transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
              )}
              {!hasVerified && !showSampleMenu && (
                <button
                  onClick={() => setShowSampleMenu(true)}
                  className="px-4 py-2 rounded-lg bg-[#3B241C] text-white text-xs font-semibold hover:bg-[#291710] transition-colors cursor-pointer"
                >
                  Enable Demo Layout Preview
                </button>
              )}
              <button
                onClick={() => setIsConfigDrawerOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#687653] text-white text-xs font-semibold hover:bg-[#4D5B3C] transition-colors cursor-pointer"
              >
                Open Owner Menu Editor
              </button>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#FAF6EF] rounded-2xl p-8 border border-[#E6DED2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-[#3B241C]">
              Ready to Taste What's Brewing?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665F] mt-1 font-sans">
              Visit KS CAFE today. Check our verified Google Maps route to plan your visit.
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
