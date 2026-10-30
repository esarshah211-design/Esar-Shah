import React from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { UtensilsCrossed, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

export const ReasonsToVisit: React.FC = () => {
  const { navigateTo, config } = useBusiness();

  const reasons = [
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-[#C58B54]" />,
      title: '1. Explore the Menu',
      description:
        'Browse our beverage categories, hot espresso specials, cold refreshers, and bakery offerings to pick what you crave before you arrive.',
      actionText: 'View Full Menu',
      onClick: () => navigateTo('menu'),
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#687653]" />,
      title: '2. Plan Your Visit',
      description:
        'Check verified Google Maps directions, see daily operating schedule, and find the most convenient route to KS CAFE.',
      actionText: 'Get Location Route',
      href: config.googleMapsDirectionsUrl,
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#3B241C]" />,
      title: '3. Get in Touch',
      description:
        'Have a query about dine-in, takeaway, or special requests? Reach out via our verified contact channels or view our FAQs.',
      actionText: 'Contact Details',
      onClick: () => navigateTo('contact'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E6DED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            Practical Website Features
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
            Your Next Café Visit Starts Here
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-3">
            Everything you need to discover KS CAFE, choose your favorite drinks, and reach us effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#FAF6EF] rounded-2xl p-7 border border-[#E6DED2] flex flex-col justify-between hover:border-[#C58B54]/40 transition-colors shadow-xs"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6DED2] flex items-center justify-center mb-5 shadow-2xs">
                  {reason.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#3B241C] mb-2.5">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-[#6B665F] leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6DED2]">
                {reason.href ? (
                  <a
                    href={reason.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B241C] hover:text-[#C58B54] transition-colors"
                  >
                    <span>{reason.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={reason.onClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B241C] hover:text-[#C58B54] transition-colors cursor-pointer"
                  >
                    <span>{reason.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
