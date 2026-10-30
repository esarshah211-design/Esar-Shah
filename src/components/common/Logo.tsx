import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'footer' | 'icon-only';
  className?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  inverted = false,
}) => {
  const primaryColor = inverted ? '#FAF6EF' : '#3B241C';
  const accentColor = '#C58B54';
  const oliveColor = '#687653';
  const textColor = inverted ? '#FAF6EF' : '#292622';
  const subtextColor = inverted ? '#E6DED2' : '#687653';

  if (variant === 'icon-only') {
    return (
      <div className={`relative flex items-center justify-center ${className}`} aria-label="KS CAFE emblem">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Coffee Cup Base */}
          <rect width="48" height="48" rx="12" fill={inverted ? '#291710' : '#3B241C'} />
          <path
            d="M14 20h18v8a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-8z"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cup Handle */}
          <path
            d="M32 22h3a3 3 0 0 1 0 6h-3"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Saucer */}
          <path
            d="M12 37h22"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Subtle Steam Motif */}
          <path
            d="M19 15c0-2 2-2 2-4M25 15c0-2 2-2 2-4"
            stroke={inverted ? '#FAF6EF' : '#FAF6EF'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-9 h-9 rounded-xl bg-[#3B241C] flex items-center justify-center p-1.5 shadow-xs shrink-0">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path
              d="M9 14h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-5z"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M21 15h2a2 2 0 0 1 0 4h-2"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 26h14"
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 10c0-1.5 1.5-1.5 1.5-3M17 10c0-1.5 1.5-1.5 1.5-3"
              stroke="#FAF6EF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span
            className="font-serif font-bold text-lg tracking-wider"
            style={{ color: textColor }}
          >
            KS CAFE
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#291710] border border-[#C58B54]/30 flex items-center justify-center p-2">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path
                d="M9 14h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-5z"
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21 15h2a2 2 0 0 1 0 4h-2"
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 26h14"
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 10c0-1.5 1.5-1.5 1.5-3M17 10c0-1.5 1.5-1.5 1.5-3"
                stroke="#FAF6EF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div className="font-serif font-bold text-2xl tracking-wide text-[#FAF6EF]">
              KS CAFE
            </div>
            <div className="text-xs uppercase tracking-widest text-[#C58B54] font-medium font-sans">
              Independent Coffee Bar
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-[#3B241C] flex items-center justify-center p-2 shadow-sm shrink-0 border border-[#C58B54]/20 transition-transform duration-200 hover:scale-105">
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          {/* Steam Motif */}
          <path
            d="M15 10c0-2 2-2 2-4M21 10c0-2 2-2 2-4"
            stroke="#FAF6EF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Coffee Cup */}
          <path
            d="M10 16h14v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-6z"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Handle */}
          <path
            d="M24 18h2.5a2.5 2.5 0 0 1 0 5H24"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Saucer */}
          <path
            d="M9 30h16"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="font-serif font-bold text-xl md:text-2xl tracking-tight transition-colors"
          style={{ color: primaryColor }}
        >
          KS <span className="font-medium text-[#C58B54]">CAFE</span>
        </span>
        <span
          className="text-[10px] uppercase tracking-widest font-sans font-semibold mt-0.5"
          style={{ color: subtextColor }}
        >
          Artisanal Coffee & Fare
        </span>
      </div>
    </div>
  );
};
