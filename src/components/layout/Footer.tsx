import React from 'react';
import { useBusiness, PageId } from '../../context/BusinessContext';
import { Logo } from '../common/Logo';
import { MapPin, ExternalLink, Clock, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, navigateTo, setIsConfigDrawerOpen } = useBusiness();

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About KS CAFE' },
    { id: 'gallery', label: 'Atmosphere & Gallery' },
    { id: 'contact', label: 'Location & Contact' },
  ];

  return (
    <footer className="bg-[#291710] text-[#FAF6EF] pt-16 pb-24 md:pb-16 border-t border-[#3B241C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#3B241C]">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Logo variant="footer" inverted />
            <p className="text-sm text-[#E6DED2]/80 leading-relaxed font-sans">
              {config.shortDescription}
            </p>
            <div className="pt-2">
              <a
                href={config.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C58B54] hover:text-[#FAF6EF] transition-colors"
              >
                <span>View on Google Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-[#FAF6EF] tracking-wide">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#E6DED2]/80">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className="hover:text-[#C58B54] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Verification Note */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C58B54]" />
              <h3 className="font-serif text-lg font-semibold text-[#FAF6EF] tracking-wide">
                Hours of Visit
              </h3>
            </div>
            {config.areHoursVerified ? (
              <ul className="text-xs text-[#E6DED2]/80 space-y-1.5">
                {config.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span className="text-[#E6DED2]">{h.day}</span>
                    <span className="tabular-nums font-medium text-[#FAF6EF]">
                      {h.isClosed ? 'Closed' : `${h.opens} – ${h.closes}`}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-[#3B241C]/60 border border-[#C58B54]/25 rounded-lg p-3 text-xs text-[#E6DED2]/90 space-y-2">
                <div className="flex items-center gap-1.5 text-[#C58B54] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Hours Pending Verification</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#E6DED2]/70">
                  Daily operating hours will be locked upon owner confirmation. Check Google Maps for real-time status before visiting.
                </p>
                <div className="text-[11px] text-[#FAF6EF]">
                  General schedule: 8:00 AM – 11:00 PM daily
                </div>
              </div>
            )}
          </div>

          {/* Column 4: Location & Verified Contacts */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C58B54]" />
              <h3 className="font-serif text-lg font-semibold text-[#FAF6EF] tracking-wide">
                Visit & Contact
              </h3>
            </div>
            
            <div className="text-xs text-[#E6DED2]/80 space-y-2.5">
              <div>
                <span className="block text-[#C58B54] text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Location
                </span>
                <p className="leading-snug">
                  {config.isAddressVerified
                    ? config.fullAddress
                    : 'Location registered on Google Maps. Exact street address pending owner verification.'}
                </p>
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C58B54] hover:text-[#FAF6EF] font-medium mt-1.5 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Phone if verified */}
              {config.isPhoneVerified && config.phoneNumber && (
                <div className="pt-1 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#687653]" />
                  <a
                    href={`tel:${config.phoneNumber.replace(/\s+/g, '')}`}
                    className="hover:text-[#C58B54] tabular-nums font-medium"
                  >
                    {config.phoneNumber}
                  </a>
                </div>
              )}

              {/* Email if verified */}
              {config.isEmailVerified && config.emailAddress && (
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C58B54]" />
                  <a
                    href={`mailto:${config.emailAddress}`}
                    className="hover:text-[#C58B54] truncate"
                  >
                    {config.emailAddress}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6DED2]/60">
          <p>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsConfigDrawerOpen(true)}
              className="hover:text-[#C58B54] transition-colors cursor-pointer"
            >
              Owner Configuration
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6DED2]/50">
              Demonstration & Verification Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
