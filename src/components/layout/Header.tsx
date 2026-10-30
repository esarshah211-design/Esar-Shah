import React, { useState, useEffect } from 'react';
import { useBusiness, PageId } from '../../context/BusinessContext';
import { Logo } from '../common/Logo';
import { PrimaryButton } from '../common/Buttons';
import { MapPin, Menu, X, Phone, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPage, navigateTo, config, setIsConfigDrawerOpen } = useBusiness();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#FAF6EF]/95 backdrop-blur-md shadow-xs border-[#E6DED2]'
          : 'bg-[#FAF6EF] border-[#E6DED2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden cursor-pointer"
            aria-label="KS CAFE Home"
          >
            <Logo variant="horizontal" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B665F]"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#3B241C] ${
                    isActive ? 'text-[#3B241C] font-semibold' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C58B54] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Call button if verified phone number exists */}
            {config.isPhoneVerified && config.phoneNumber && (
              <a
                href={`tel:${config.phoneNumber.replace(/\s+/g, '')}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-[#3B241C] bg-[#FAF6EF] hover:bg-[#E6DED2]/60 border border-[#E6DED2] transition-colors"
                title="Call KS CAFE"
              >
                <Phone className="w-3.5 h-3.5 text-[#687653]" />
                <span>Call Café</span>
              </a>
            )}

            {/* Main Primary Conversion Action: GET DIRECTIONS */}
            <a
              href={config.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <PrimaryButton
                size="md"
                icon={<MapPin className="w-4 h-4 text-[#C58B54]" />}
              >
                Get Directions
              </PrimaryButton>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-[#3B241C] hover:bg-[#E6DED2]/50 border border-[#E6DED2] focus:outline-hidden focus:ring-2 focus:ring-[#C58B54]"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Modal */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 z-50 bg-[#291710]/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FAF6EF] border-b border-[#E6DED2] shadow-xl p-6 flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1 pb-4 border-b border-[#E6DED2]">
              <span className="text-xs uppercase tracking-wider text-[#6B665F] font-semibold">
                Menu & Navigation
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#3B241C] text-[#FAF6EF]'
                        : 'text-[#292622] hover:bg-[#E6DED2]/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#C58B54]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <PrimaryButton
                  fullWidth
                  size="md"
                  icon={<MapPin className="w-4 h-4 text-[#C58B54]" />}
                >
                  Get Directions
                </PrimaryButton>
              </a>

              {config.isPhoneVerified && config.phoneNumber && (
                <a
                  href={`tel:${config.phoneNumber.replace(/\s+/g, '')}`}
                  className="w-full"
                >
                  <button className="w-full py-3 px-4 rounded-lg border border-[#687653] text-[#687653] hover:bg-[#687653]/10 font-medium text-sm flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Café</span>
                  </button>
                </a>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConfigDrawerOpen(true);
                }}
                className="mt-2 text-xs text-[#6B665F] hover:text-[#3B241C] flex items-center justify-center gap-1.5 py-2"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Owner Configuration Drawer</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
