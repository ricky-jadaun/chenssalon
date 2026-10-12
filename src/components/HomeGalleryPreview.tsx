import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

export const HomeGalleryPreview: React.FC = () => {
  const previewImages = [
    {
      id: 'gal-preview-1',
      title: 'Chen’s Salon Atelier Atmosphere',
      category: 'Salon Spaces',
      image: '/assets/original/banner-new33.jpg',
      caption: 'Dedicated styling stations designed for rebonding and precision grooming.',
    },
    {
      id: 'gal-preview-2',
      title: 'Hair Rebonding & Treatment Station',
      category: 'Hair Artistry',
      image: '/assets/original/hair-mini-front4.jpg',
      caption: 'Precision equipment for hair rebonding, smoothening, and scalp rituals.',
    },
    {
      id: 'gal-preview-3',
      title: 'Holistic Spa & Relaxation Rooms',
      category: 'Spa Rituals',
      image: '/assets/original/spa-mini-front.jpg',
      caption: 'Ayurvedic Potli and Balinese aroma therapies for complete relaxation.',
    },
    {
      id: 'gal-preview-4',
      title: 'Bridal & Groom Makeover Suite',
      category: 'Bridal Atelier',
      image: '/assets/original/pack-mini-front5.jpg',
      caption: 'Full bridal attire, saree draping, and destination event makeover facilities.',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header with Title and Link to Full Gallery */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Atelier Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-tight">
              Atmosphere & Artistry
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
              A curated look into Chen’s Salon spaces, styling stations, and relaxing aesthetic suites. Explore the full photo album on our dedicated gallery page.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141414] hover:text-[#A8875A] pb-1 border-b border-[#141414] hover:border-[#A8875A] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Gallery (All Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewImages.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative overflow-hidden border border-[#E8E2D5] bg-[#FAF8F5] aspect-4/3 flex flex-col justify-end shadow-xs hover:border-[#C5A880] transition-colors block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="relative z-10 p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D4B886] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-medium leading-snug text-[#FAF8F5] group-hover:text-[#D4B886] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 p-1.5 bg-black/60 rounded text-white/90 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#141414] bg-[#FAF8F5] hover:bg-[#141414] hover:text-[#FAF8F5] border border-[#E8E2D5] transition-colors duration-200"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Explore All Atelier Photos & Lightbox Album</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
