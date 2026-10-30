import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { navigateTo, setIsConfigDrawerOpen, config } = useBusiness();

  return (
    <div className="bg-[#291710] text-[#FAF6EF] text-xs font-sans py-2 px-4 border-b border-[#3B241C]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Main Announcement Message */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C58B54]" />
          <span className="font-normal text-[#E6DED2]">
            Welcome to <strong className="font-medium text-[#FAF6EF]">{config.businessName}</strong>. Explore our menu and plan your visit.
          </span>
          <button
            onClick={() => navigateTo('menu')}
            className="inline-flex items-center gap-1 text-[#C58B54] hover:text-[#FAF6EF] font-medium underline underline-offset-4 decoration-[#C58B54]/50 transition-colors ml-1 cursor-pointer"
          >
            <span>View Menu</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Business Owner Quick Access Drawer Trigger */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setIsConfigDrawerOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3B241C] hover:bg-[#4D3326] text-[#C58B54] border border-[#C58B54]/30 text-[11px] font-medium transition-colors cursor-pointer"
            title="Edit business configuration, menu, contact details & operating hours"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Owner Content Manager</span>
          </button>
        </div>
      </div>
    </div>
  );
};
