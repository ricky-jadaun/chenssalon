import React from 'react';
import { AUTHENTIC_TESTIMONIALS } from '../data/salonData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
            Authentic Client Words
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
            Voices of Our Salon Guests
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Unfiltered reflections from long-standing clients who have frequented Chen’s Salon for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUTHENTIC_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E8E2D5] p-8 flex flex-col justify-between shadow-xs hover:border-[#C5A880] transition-colors duration-200 relative"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#C5A880]/40" />
                <p className="font-serif text-base sm:text-lg text-[#1C1917] leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F3EFE8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-[#141414]">
                    {t.author}
                  </h4>
                  <span className="text-xs text-[#78716C] block">
                    {t.relation}
                  </span>
                </div>
                <span className="text-[10px] text-[#A8875A] font-semibold uppercase tracking-wider bg-[#FAF8F5] border border-[#E8E2D5] px-2 py-0.5">
                  Verified Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <span>Archived from genuine feedback and reviews of Chen’s Hair & Beauty Salon, Mumbai.</span>
        </div>
      </div>
    </section>
  );
};
