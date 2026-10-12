import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, Scissors, Heart, Award } from 'lucide-react';

interface HomeServicesPreviewProps {
  onSelectService?: (serviceName: string) => void;
  onOpenBooking?: () => void;
}

export const HomeServicesPreview: React.FC<HomeServicesPreviewProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const highlights = [
    {
      id: 'hair-rebonding',
      title: 'Japanese Hair Rebonding',
      badge: 'Signature Mastery',
      tagline: 'Pioneered in India (1996)',
      description:
        'Permanent straightness, fluid softness, and mirror shine utilizing authentic Japanese cuticle-preserving technology.',
      image: '/assets/original/hair-mini-front4.jpg',
      serviceName: 'Japanese Hair Rebonding & Smoothing',
      categoryLink: '/services',
    },
    {
      id: 'organic-facials',
      title: 'Organic Botanical Facials',
      badge: 'Pure Botanical Care',
      tagline: '100% Aroma Extracts',
      description:
        'Cellular rejuvenation, gold radiance, and pure oxygen infusion facials crafted for long-lasting healthy skin glow.',
      image: '/assets/original/beauty-mini-front.jpg',
      serviceName: 'Sheen of Gold Luxury Facial',
      categoryLink: '/services',
    },
    {
      id: 'ayurvedic-spa',
      title: 'Ayurvedic & Balinese Spa',
      badge: 'Unisex Spa in Colaba',
      tagline: 'Authentic Potli Rituals',
      description:
        'Therapeutic warm herbal pouches and deep connective tissue massages for complete physical detoxification and stress relief.',
      image: '/assets/original/spa-mini-front.jpg',
      serviceName: 'Authentic Ayurvedic Potli Massage',
      categoryLink: '/services',
    },
    {
      id: 'bridal-artistry',
      title: 'Destination Bridal Packages',
      badge: 'Worldwide Entourage',
      tagline: 'Bespoke Makeovers',
      description:
        'Comprehensive head-to-toe bridal transformations, luxury saree draping, and event styling traveled globally.',
      image: '/assets/original/pack-mini-front5.jpg',
      serviceName: 'Bridal & Entourage Luxury Makeover',
      categoryLink: '/services',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header with Title and Link to Full Services */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Atelier Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-tight">
              Crafted Hair & Beauty Rituals
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
              A curated selection of our most celebrated salon treatments. Explore our complete 5-category atelier menu on the full services page.
            </p>
          </div>

          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141414] hover:text-[#A8875A] pb-1 border-b border-[#141414] hover:border-[#A8875A] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Explore All 25+ Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E8E2D5] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-xs text-[#FAF8F5] text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold border border-white/10">
                    {item.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#A8875A] font-medium block">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#141414] group-hover:text-[#A8875A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-5 pt-0 mt-2 border-t border-[#FAF8F5] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService && onSelectService(item.serviceName)}
                  className="text-xs font-semibold text-[#141414] hover:text-[#A8875A] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#A8875A]" />
                  <span>Book Slot</span>
                </button>

                <Link
                  to={item.categoryLink}
                  className="text-xs text-[#78716C] hover:text-[#141414] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141414] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#262626]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              Complete Treatment Catalog
            </span>
            <p className="text-sm text-[#E8E2D5]">
              Looking for our full list of hair textures, gel nails, and customized pre-bridal sessions?
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/services"
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#141414] bg-[#FAF8F5] hover:bg-[#C5A880] transition-colors flex items-center gap-2"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF8F5] bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                Book Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
