import React from 'react';
import { CELEBRITY_CLIENTELE } from '../data/salonData';
import { Award, Compass, Users, Globe2, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo & Heritage Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="relative border border-[#E8E2D5] bg-[#FAF8F5] p-3 shadow-md">
                <img
                  src="/assets/original/owner4.jpg"
                  alt="Annie Chen, Proprietor of Chen's Salon Mumbai"
                  className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D5] text-center">
                  <h3 className="font-serif text-xl text-[#141414] font-medium">Annie Chen</h3>
                  <p className="text-xs text-[#A8875A] uppercase tracking-widest font-semibold mt-0.5">
                    Founder & Proprietor · 35+ Years Mastery
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Background Outline */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C5A880]/30 -z-10 hidden sm:block" />
            </div>

            {/* Celebrity Patronage Strip */}
            <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-5 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-[#A8875A] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Celebrity Patronage</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Celebrated icons have trusted Annie Chen and her team for Hair Rebonding, styling, and makeovers:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {CELEBRITY_CLIENTELE.map((name) => (
                  <span
                    key={name}
                    className="text-xs font-serif text-[#141414] bg-white border border-[#E8E2D5] px-2.5 py-1"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
                Our Story & Mastery
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] leading-tight text-balance">
                "When You Look Good, We Look Good."
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#57534E]">
                Under the visionary guidance of Annie Chen, Chen’s Salon has stood as an institution of hair innovation in Mumbai since 1997.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
              <p>
                Having undergone intensive, advanced styling education in <strong className="text-[#141414] font-semibold">Japan</strong>, 
                Annie Chen made history by being the <strong className="text-[#141414] font-semibold">first to introduce Hair Rebonding to India in 1996</strong>. 
                What started as a breakthrough at Marine Mansion, Marine Lines in 1997 evolved into a renowned destination for Rebonding, Relaxing, 
                and Smoothing treatments.
              </p>
              <p>
                Today, Chen’s Salon operates across two flagship establishments in Mumbai: an exclusive Ladies Only Salon at 
                <strong className="text-[#141414] font-semibold"> Marine Lines</strong> and a comprehensive Unisex Salon & Spa at 
                <strong className="text-[#141414] font-semibold"> Colaba</strong>.
              </p>
              <p>
                Under Annie’s constant mentorship, a strong team of <strong className="text-[#141414] font-semibold">15 dedicated professionals</strong> 
                is continuously trained in the latest international techniques. Beyond daily styling, Annie specializes in bridal styling, 
                pre- and post-wedding treatments, and travels with her entourage across the world for destination bridal transformations.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-[#E8E2D5] p-4 bg-[#FAF8F5]">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-[#A8875A]" />
                  <h4 className="font-serif text-base font-medium text-[#141414]">Japan-Trained Technique</h4>
                </div>
                <p className="text-xs text-[#78716C] leading-normal">
                  Authentic Japanese rebonding methods preserving hair cuticle integrity and internal moisture.
                </p>
              </div>

              <div className="border border-[#E8E2D5] p-4 bg-[#FAF8F5]">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#A8875A]" />
                  <h4 className="font-serif text-base font-medium text-[#141414]">15 Continuous-Trained Stylists</h4>
                </div>
                <p className="text-xs text-[#78716C] leading-normal">
                  A close-knit, highly disciplined team trained personally by Annie Chen to guarantee consistency.
                </p>
              </div>

              <div className="border border-[#E8E2D5] p-4 bg-[#FAF8F5]">
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 className="w-4 h-4 text-[#A8875A]" />
                  <h4 className="font-serif text-base font-medium text-[#141414]">Worldwide Bridal Entourage</h4>
                </div>
                <p className="text-xs text-[#78716C] leading-normal">
                  Dispatched globally for wedding venues, full saree draping, and VIP makeup artistry.
                </p>
              </div>

              <div className="border border-[#E8E2D5] p-4 bg-[#FAF8F5]">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#A8875A]" />
                  <h4 className="font-serif text-base font-medium text-[#141414]">Organic Formulations</h4>
                </div>
                <p className="text-xs text-[#78716C] leading-normal">
                  100% organic aroma facials, herbal ayurvedic potlis, and safe cosmetic solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
