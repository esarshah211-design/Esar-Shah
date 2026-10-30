import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { PrimaryButton } from '../common/Buttons';
import { MapPin, Clock, ExternalLink, Navigation, CheckCircle2, ShieldAlert } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { config } = useBusiness();

  return (
    <section className="py-16 md:py-24 bg-[#FAF6EF] border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            Visit Us
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
            Find KS CAFE
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-2">
            Planning a visit? Check our location and confirmed opening hours before heading over.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Information Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address & Navigation Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                  <MapPin className="w-5 h-5 text-[#C58B54]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#3B241C]">
                    Café Location
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B665F] mt-1 leading-relaxed">
                    {config.isAddressVerified
                      ? config.fullAddress
                      : 'Google Business Profile location confirmed.'}
                  </p>
                  <p className="text-xs text-[#687653] font-medium mt-1">
                    Locality: {config.locality} · {config.city}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <PrimaryButton
                    fullWidth
                    size="md"
                    icon={<Navigation className="w-4 h-4 text-[#C58B54]" />}
                  >
                    Get Directions
                  </PrimaryButton>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#687653]" />
                  <h3 className="font-serif font-bold text-lg text-[#3B241C]">
                    Operating Hours
                  </h3>
                </div>
                {!config.areHoursVerified && (
                  <span className="text-[11px] text-[#C58B54] bg-[#FAF6EF] border border-[#C58B54]/30 px-2 py-0.5 rounded font-medium">
                    Owner Verification Pending
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                {config.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-1 border-b border-[#FAF6EF]"
                  >
                    <span className="font-medium text-[#292622]">{h.day}</span>
                    <span className="tabular-nums font-semibold text-[#3B241C]">
                      {h.isClosed ? 'Closed' : `${h.opens} – ${h.closes}`}
                    </span>
                  </div>
                ))}
              </div>

              {!config.areHoursVerified && (
                <div className="flex items-start gap-2 pt-1 text-[11px] text-[#6B665F]">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#C58B54] shrink-0 mt-0.5" />
                  <span>
                    Special holiday schedules may vary. Refer to Google Business Profile for real-time live holiday updates.
                  </span>
                </div>
              )}
            </div>

            {/* Confirmed Services */}
            <div className="bg-white rounded-2xl p-5 border border-[#E6DED2] shadow-xs">
              <span className="text-[11px] uppercase tracking-wider text-[#6B665F] font-semibold block mb-3">
                Service Options
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#292622]">
                  <CheckCircle2 className="w-4 h-4 text-[#687653]" />
                  <span>Dine-In Seating</span>
                </div>
                <div className="flex items-center gap-2 text-[#292622]">
                  <CheckCircle2 className="w-4 h-4 text-[#687653]" />
                  <span>Takeaway Service</span>
                </div>
                <div className="flex items-center gap-2 text-[#292622]">
                  <CheckCircle2 className="w-4 h-4 text-[#687653]" />
                  <span>Free High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2 text-[#292622]">
                  <CheckCircle2 className="w-4 h-4 text-[#687653]" />
                  <span>Outdoor Seating Area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E6DED2] shadow-md bg-white flex flex-col justify-between relative min-h-[420px]">
            {/* Map Header bar */}
            <div className="bg-[#291710] text-[#FAF6EF] p-4 flex items-center justify-between border-b border-[#3B241C]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C58B54]" />
                <span className="font-serif font-bold text-sm">KS CAFE Map Location</span>
              </div>
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C58B54] hover:text-[#FAF6EF] flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Visual Map Representation */}
            <div className="relative flex-1 bg-[#F3ECE1] overflow-hidden flex items-center justify-center p-8">
              {/* Subtle Road & Grid Topology Canvas */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B241C_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Simulated Map Roads */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-6 bg-white/70 rotate-[-15deg] absolute border-y border-[#E6DED2]" />
                <div className="w-8 h-[120%] bg-white/70 rotate-[25deg] absolute border-x border-[#E6DED2]" />
              </div>

              {/* Pin Destination Anchor */}
              <div className="relative z-10 flex flex-col items-center text-center animate-bounce duration-1000">
                <div className="p-3 rounded-full bg-[#3B241C] text-[#C58B54] shadow-xl border-2 border-white ring-4 ring-[#C58B54]/30">
                  <MapPin className="w-8 h-8 fill-current" />
                </div>
                <div className="mt-2 bg-[#291710] text-white px-3.5 py-1.5 rounded-lg shadow-lg border border-[#C58B54]/30 text-xs font-serif font-bold">
                  KS CAFE
                </div>
                <span className="text-[10px] bg-white text-[#292622] px-2 py-0.5 rounded shadow-xs mt-1 border border-[#E6DED2]">
                  Verified Google Business Profile
                </span>
              </div>
            </div>

            {/* Map Footer Bar with Direct Launch */}
            <div className="p-4 bg-white border-t border-[#E6DED2] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#6B665F]">
                Clicking will open navigation directly in Google Maps for live turn-by-turn routing.
              </div>
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#687653] text-white text-xs font-medium hover:bg-[#4D5B3C] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Launch Navigation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
