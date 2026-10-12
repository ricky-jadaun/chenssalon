import React, { useState } from 'react';
import { Calendar, ArrowRight, Phone, Sparkles, ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

const HERO_SLIDES = [
  {
    image: '/assets/original/banner-new1.jpg',
    subheading: 'CHEN’S HAIR & BEAUTY SALON · MUMBAI',
    headline: 'Mastery in Hair Artistry & Unisex Wellness',
    tagline:
      'Pioneers of Hair Rebonding in India since 1996. Over 35 years of Japanese-trained excellence under Annie Chen at Colaba and Marine Lines.',
  },
  {
    image: '/assets/original/banner-new2.jpg',
    subheading: 'HAIR REBONDING & REVOLUTIONARY SMOOTHING',
    headline: 'The Art of Effortless Silky Hair',
    tagline:
      'Celebrity-trusted Japanese Rebonding, Keratine and Cystine treatments crafted to deliver natural fluidity, shine, and structural health.',
  },
  {
    image: '/assets/original/banner-new33.jpg',
    subheading: 'COLABA UNISEX & MARINE LINES LADIES ATELIER',
    headline: 'Holistic Beauty & Destination Bridal Care',
    tagline:
      '100% organic aroma facials, restorative body therapies, and an elite bridal entourage trusted by Mumbai’s most discerning clientele.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative bg-[#141414] text-white overflow-hidden">
      {/* Background Slideshow with graceful transitions */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover object-center filter brightness-[0.42] scale-100"
              referrerPolicy="no-referrer"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-transparent to-[#141414]/90" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Heritage Kicker (Zero-pill text format with typographic separator) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4B886] font-medium">
              <span>{active.subheading}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight text-[#FAF8F5] text-balance">
              {active.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#E8E2D5]/90 font-light leading-relaxed max-w-2xl">
              {active.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#141414] bg-[#FAF8F5] hover:bg-[#C5A880] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg group active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#A8875A] group-hover:text-[#141414] transition-colors" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-1 group-hover:text-[#141414] transition-all" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF8F5] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-colors duration-200 backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <span>View Full Menu</span>
              </button>

              <a
                href="tel:+917777069720"
                className="px-5 py-3.5 text-xs font-medium text-[#D4B886] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk: 7777069720</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slide Carousel Controls */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 px-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-[#C5A880]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Proof Strip (Full-width row directly adjacent to hero) */}
      <div className="border-t border-white/10 bg-[#0F0F0F] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="font-serif text-2xl text-[#C5A880] tabular-nums font-normal">1997</span>
              <div className="text-xs text-[#A8A29E] leading-tight">
                <span className="font-medium text-[#FAF8F5] block">Established in Mumbai</span>
                <span>29 Years Salon Heritage</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="font-serif text-2xl text-[#C5A880] tabular-nums font-normal">1996</span>
              <div className="text-xs text-[#A8A29E] leading-tight">
                <span className="font-medium text-[#FAF8F5] block">Pioneered Rebonding</span>
                <span>First in India (Japan-Trained)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="font-serif text-2xl text-[#C5A880] tabular-nums font-normal">15+</span>
              <div className="text-xs text-[#A8A29E] leading-tight">
                <span className="font-medium text-[#FAF8F5] block">Master Stylists & Therapists</span>
                <span>Continuously Trained Team</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="font-serif text-2xl text-[#C5A880] font-normal">2 Hubs</span>
              <div className="text-xs text-[#A8A29E] leading-tight">
                <span className="font-medium text-[#FAF8F5] block">Colaba & Marine Lines</span>
                <span>Unisex & Ladies Exclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
