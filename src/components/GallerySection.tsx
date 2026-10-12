import React, { useState } from 'react';
import { SALON_GALLERY, GalleryItem } from '../data/salonData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'hair' | 'beauty' | 'spa'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? SALON_GALLERY
    : SALON_GALLERY.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
            Visual Atelier
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
            Atmosphere & Artistry
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            A glimpse into Chen’s Salon spaces, precision styling stations, and aesthetic treatment rooms across Mumbai.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'interior', label: 'Salon Spaces' },
            { key: 'hair', label: 'Hair & Styling' },
            { key: 'beauty', label: 'Aesthetics & Bridal' },
            { key: 'spa', label: 'Spa Rituals' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border ${
                activeFilter === tab.key
                  ? 'bg-[#141414] text-white border-[#141414]'
                  : 'bg-[#FAF8F5] text-[#57534E] border-[#E8E2D5] hover:border-[#141414]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden border border-[#E8E2D5] bg-[#FAF8F5] aspect-4/3 flex flex-col justify-end"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white" />
              
              <div className="relative z-10 p-4 text-white opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-wider text-[#D4B886] font-semibold block">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-medium leading-snug">{item.title}</h4>
              </div>

              <div className="absolute top-3 right-3 p-1.5 bg-black/60 rounded text-white/90 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden bg-black/40 border border-white/10">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={prevLightbox}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-center text-white space-y-1">
              <h3 className="font-serif text-lg font-medium text-[#FAF8F5]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#A8A29E]">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
