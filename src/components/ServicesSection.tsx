import React, { useState } from 'react';
import { SALON_SERVICES, ServiceItem } from '../data/salonData';
import { Scissors, Sparkles, Heart, Check, ArrowRight, Calendar } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('hair');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { key: 'hair', label: 'Hair & Rebonding', icon: Scissors },
    { key: 'beauty', label: 'Skin & Organic Facials', icon: Sparkles },
    { key: 'spa', label: 'Spa & Ayurvedic Massages', icon: Heart },
    { key: 'nails', label: 'Nails & Gel Art', icon: Sparkles },
    { key: 'packages', label: 'Bridal & Bespoke Packages', icon: Sparkles },
  ];

  const currentCategoryData = SALON_SERVICES[activeCategory];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
            Signature Salon Offerings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
            Crafted Hair & Beauty Rituals
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Every service at Chen’s Salon is performed using international Japanese techniques, 
            organic botanical formulas, and decades of mastery.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#141414] text-[#FAF8F5] border-[#141414] shadow-sm'
                    : 'bg-white text-[#57534E] border-[#E8E2D5] hover:border-[#141414] hover:text-[#141414]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured Category Banner Card */}
        <div className="bg-white border border-[#E8E2D5] mb-12 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[320px]">
              <img
                src={currentCategoryData.image}
                alt={currentCategoryData.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-[#D4B886]">Featured Category</span>
                <h3 className="font-serif text-xl">{currentCategoryData.title}</h3>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-4">
              <div className="hidden lg:block text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
                Specialized Service Category
              </div>
              <h3 className="hidden lg:block font-serif text-2xl sm:text-3xl text-[#141414]">
                {currentCategoryData.title}
              </h3>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                {currentCategoryData.summary}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#78716C]">
                <span>Unisex & Specialized Care</span>
                <span>·</span>
                <span>Colaba & Marine Lines</span>
                <span>·</span>
                <span>Consultation Included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategoryData.items.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E8E2D5] p-6 flex flex-col justify-between hover:border-[#C5A880] transition-colors duration-200 group relative"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-xl font-medium text-[#141414] group-hover:text-[#A8875A] transition-colors">
                    {service.name}
                  </h4>
                  {service.forWhom && (
                    <span className="text-[11px] text-[#78716C] tracking-wide shrink-0">
                      {service.forWhom}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {service.description}
                </p>

                {service.highlights && service.highlights.length > 0 && (
                  <div className="pt-2 border-t border-[#F3EFE8] space-y-1.5">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#78716C]">
                        <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#F3EFE8] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-[#141414] bg-[#F3EFE8] hover:bg-[#141414] hover:text-[#FAF8F5] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 bg-[#F3EFE8]/70 border border-[#E8E2D5] text-center text-xs text-[#57534E] max-w-3xl mx-auto">
          <p>
            Consultation is complimentary with all chemical, hair color, and rebonding treatments.
            Exact duration and pricing are provided transparently during personal hair and skin analysis.
          </p>
        </div>
      </div>
    </section>
  );
};
