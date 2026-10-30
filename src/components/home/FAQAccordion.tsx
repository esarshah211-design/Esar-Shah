import React, { useState } from 'react';
import { useBusiness } from '../../context/BusinessContext';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const { config } = useBusiness();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Where is KS CAFE located?',
      answer: `KS CAFE is a registered business destination on Google Maps (${config.googleBusinessProfileUrl}). While exact building and street address confirmations are pending owner update, you can immediately locate and route to our exact map destination using the 'Get Directions' button.`,
      hasMapLink: true,
    },
    {
      question: 'What is available on the menu?',
      answer:
        'Our planned offerings encompass handcrafted espresso drinks (Spanish Latte, Caramel Macchiato, Americano), chilled iced refreshers, ceremonial Uji matcha, freshly baked viennoiserie croissants, and light savory fare. Specific confirmed pricing in PKR is updated directly as items are locked by the café management.',
    },
    {
      question: 'What are your opening hours?',
      answer: `Our standard planned visiting hours are 8:00 AM to 11:00 PM on weekdays and until midnight on weekends (${
        config.areHoursVerified ? 'Verified by owner' : 'Subject to owner schedule confirmation'
      }). For real-time updates and public holiday timings, please check our Google Business Profile.`,
    },
    {
      question: 'How can I contact the café?',
      answer: config.isPhoneVerified && config.phoneNumber
        ? `You can reach KS CAFE directly by phone at ${config.phoneNumber} during operating hours, or submit an enquiry through our contact page.`
        : 'Official phone and WhatsApp channels are currently being configured by the café owner. In the interim, please use the contact form on this website or check our Google Business Profile.',
    },
    {
      question: 'Is takeaway or delivery available?',
      answer:
        'Takeaway service and dine-in seating are standard café offerings. Third-party or direct door-to-door delivery has not yet been confirmed by the owner and will be updated on this website once operational.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E6DED2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF6EF] text-xs font-semibold text-[#687653] mb-3 border border-[#E6DED2]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#3B241C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B665F] mt-2">
            Clear, honest answers to help you plan your visit to KS CAFE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#E6DED2] bg-[#FAF6EF] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#3B241C] hover:text-[#291710] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`p-1 rounded-full bg-white border border-[#E6DED2] text-[#6B665F] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#3B241C]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B665F] font-sans leading-relaxed border-t border-[#E6DED2]/50">
                    <p>{faq.answer}</p>
                    {faq.hasMapLink && (
                      <div className="mt-3">
                        <a
                          href={config.googleMapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#3B241C] hover:text-[#C58B54] underline underline-offset-2"
                        >
                          <span>Open KS CAFE on Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
