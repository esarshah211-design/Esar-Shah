import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { MapPin, UtensilsCrossed, Phone, MessageSquare } from 'lucide-react';

export const StickyMobileActions: React.FC = () => {
  const { config, navigateTo } = useBusiness();

  // Show WhatsApp if verified
  const hasWhatsApp = config.isWhatsAppVerified && config.whatsAppNumber;
  const hasPhone = config.isPhoneVerified && config.phoneNumber;

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF6EF]/95 backdrop-blur-md border-t border-[#E6DED2] px-3 py-2 shadow-lg"
      style={{ maxHeight: '72px' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
        {/* Action 1: Get Directions (Primary) */}
        <a
          href={config.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#3B241C] text-[#FAF6EF] active:scale-95 transition-transform"
          aria-label="Get Directions to KS CAFE"
        >
          <MapPin className="w-4 h-4 text-[#C58B54] mb-0.5" />
          <span className="text-[11px] font-medium leading-none whitespace-nowrap">
            Directions
          </span>
        </a>

        {/* Action 2: View Menu */}
        <button
          onClick={() => navigateTo('menu')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-white border border-[#E6DED2] text-[#292622] hover:bg-[#FAF6EF] active:scale-95 transition-transform cursor-pointer"
          aria-label="View Menu"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#687653] mb-0.5" />
          <span className="text-[11px] font-medium leading-none whitespace-nowrap">
            View Menu
          </span>
        </button>

        {/* Action 3: Call OR WhatsApp OR Contact */}
        {hasPhone ? (
          <a
            href={`tel:${config.phoneNumber?.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#687653] text-white active:scale-95 transition-transform"
            aria-label="Call KS CAFE"
          >
            <Phone className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-medium leading-none whitespace-nowrap">
              Call
            </span>
          </a>
        ) : hasWhatsApp ? (
          <a
            href={`https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(
              config.whatsAppDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#25D366] text-white active:scale-95 transition-transform"
            aria-label="WhatsApp KS CAFE"
          >
            <MessageSquare className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-medium leading-none whitespace-nowrap">
              WhatsApp
            </span>
          </a>
        ) : (
          <button
            onClick={() => navigateTo('contact')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-white border border-[#E6DED2] text-[#292622] hover:bg-[#FAF6EF] active:scale-95 transition-transform cursor-pointer"
            aria-label="Find Location & Contact"
          >
            <MapPin className="w-4 h-4 text-[#C58B54] mb-0.5" />
            <span className="text-[11px] font-medium leading-none whitespace-nowrap">
              Contact
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};
