import React from 'react';
import { Award, ShieldCheck, Sparkles, HeartHandshake, Scissors, Globe } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: 'Pioneers of Hair Rebonding in India',
      subtitle: 'Introduced in 1996',
      description:
        'Annie Chen was the first stylist to introduce permanent Japanese Hair Rebonding to India after extensive professional training in Japan.',
    },
    {
      icon: Scissors,
      title: '35+ Years of Proven Salon Mastery',
      subtitle: 'Continuous Excellence Since 1997',
      description:
        'Decades of consistent craftsmanship and personal dedication to ensuring clients leave looking and feeling their absolute best.',
    },
    {
      icon: HeartHandshake,
      title: 'Dual Specialized Mumbai Hubs',
      subtitle: 'Colaba Unisex & Marine Lines Ladies Exclusive',
      description:
        'Tailored comfort for every preference—whether an exclusive ladies salon at Marine Mansion or a full unisex salon and spa in Colaba.',
    },
    {
      icon: ShieldCheck,
      title: 'Continuously Trained 15-Member Team',
      subtitle: 'Rigorous Technical Standards',
      description:
        'Every stylist and therapist is personally guided by Annie Chen, undergoing continuous training in cutting-edge global methodologies.',
    },
    {
      icon: Sparkles,
      title: '100% Organic & Aroma Skin Solutions',
      subtitle: 'Pure Botanical Formulations',
      description:
        'Skin treatments, facials, and body rituals formulated with pure essential oils and organic ingredients for natural, glowing skin.',
    },
    {
      icon: Globe,
      title: 'Destination Bridal Artistry',
      subtitle: 'Travels Worldwide for Weddings',
      description:
        'Our seasoned bridal styling team travels to venues and homes across the globe for head-to-toe wedding, saree draping, and makeup services.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
            Verifiable Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
            Why Discerning Clients Choose Chen’s
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Founded on genuine international credentials, technical precision, and decades of trust in South Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#E8E2D5] p-8 flex flex-col justify-between hover:border-[#C5A880] transition-colors duration-200"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center text-[#A8875A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A8875A] font-semibold block">
                      {pt.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#141414] mt-1">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
