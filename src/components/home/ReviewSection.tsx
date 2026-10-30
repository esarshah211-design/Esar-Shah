import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { ExternalLink, Star, ShieldCheck, MessageCircle } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  const { config } = useBusiness();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF6EF] border border-[#E6DED2] text-xs font-semibold text-[#687653] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Google Reviews & Feedback</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
            What Customers Are Saying
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-3 leading-relaxed">
            {config.googleReviewInviteText}
          </p>

          {/* Genuine Review Invitation Box */}
          <div className="mt-8 bg-[#FAF6EF] rounded-2xl p-8 border border-[#E6DED2] shadow-xs text-left relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C58B54]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs text-[#6B665F] font-sans ml-2">
                    Google Business Rating
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#3B241C]">
                  Verified Google Customer Feedback
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed max-w-lg">
                  In compliance with our strict customer transparency standards, we link visitors directly to live Google ratings and customer photos rather than curating static quotes.
                </p>
              </div>

              <a
                href={config.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3B241C] text-[#FAF6EF] hover:bg-[#291710] font-medium text-sm transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#C58B54]" />
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
