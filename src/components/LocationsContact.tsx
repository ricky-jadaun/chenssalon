import React, { useState } from 'react';
import { SALON_LOCATIONS, SOCIAL_LINKS } from '../data/salonData';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Calendar, Navigation } from 'lucide-react';

interface LocationsContactProps {
  onBookLocation: (locId: 'colaba' | 'marine-lines') => void;
}

export const LocationsContact: React.FC<LocationsContactProps> = ({ onBookLocation }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<'colaba' | 'marine-lines'>('colaba');

  const selectedLoc = SALON_LOCATIONS.find((l) => l.id === selectedLocationId)!;

  return (
    <section id="locations" className="py-20 lg:py-28 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
            Visit Our Salons
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
            Two Premier Mumbai Destinations
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Choose our vibrant Colaba unisex studio near Radio Club or our exclusive Marine Lines ladies salon.
          </p>
        </div>

        {/* Location Selector Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#FAF8F5] p-1 border border-[#E8E2D5] flex max-w-md w-full">
            {SALON_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocationId(loc.id)}
                className={`flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-all duration-200 text-center ${
                  selectedLocationId === loc.id
                    ? 'bg-[#141414] text-white shadow-xs'
                    : 'text-[#57534E] hover:text-[#141414]'
                }`}
              >
                {loc.id === 'colaba' ? 'Colaba (Unisex)' : 'Marine Lines (Ladies)'}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Two-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Active Location Detail Card */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E8E2D5] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A8875A] block">
                  {selectedLoc.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141414] mt-1 font-medium">
                  {selectedLoc.name}
                </h3>
                <p className="text-xs text-[#78716C] mt-1">
                  {selectedLoc.type}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E8E2D5]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A8875A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#78716C] block font-medium">
                      Address & Landmark
                    </span>
                    <p className="text-sm font-medium text-[#141414]">
                      {selectedLoc.address}
                    </p>
                    <p className="text-xs text-[#57534E]">
                      {selectedLoc.city} – {selectedLoc.pincode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A8875A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#78716C] block font-medium">
                      Operating Schedule
                    </span>
                    <p className="text-sm font-medium text-[#141414]">
                      {selectedLoc.days}: {selectedLoc.hours}
                    </p>
                    {selectedLoc.closedOn && (
                      <p className="text-xs text-[#78716C]">
                        {selectedLoc.closedOn}: Closed
                      </p>
                    )}
                  </div>
                </div>

                {/* Telephones */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A8875A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#78716C] block font-medium">
                      Direct Telephones & Mobiles
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                      {selectedLoc.telephones.map((tel) => (
                        <a
                          key={tel}
                          href={`tel:${tel.replace(/\s+/g, '')}`}
                          className="text-sm font-medium text-[#141414] hover:text-[#A8875A] underline-offset-2 hover:underline"
                        >
                          Landline: {tel}
                        </a>
                      ))}
                      {selectedLoc.mobiles.map((mob) => (
                        <a
                          key={mob}
                          href={`tel:${mob.replace(/\s+/g, '')}`}
                          className="text-sm font-medium text-[#141414] hover:text-[#A8875A] underline-offset-2 hover:underline"
                        >
                          Mobile: {mob}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-6 border-t border-[#E8E2D5] flex flex-wrap gap-3">
              <button
                onClick={() => onBookLocation(selectedLoc.id)}
                className="py-3 px-5 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Book At This Branch</span>
              </button>

              {selectedLoc.whatsapp && (
                <a
                  href={`https://wa.me/${selectedLoc.whatsapp}?text=Hello%20Chen's%20Salon,%20I%20would%20like%20to%20enquire%20about%20services%20at%20${encodeURIComponent(
                    selectedLoc.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              )}

              <a
                href={selectedLoc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-white border border-[#E8E2D5] text-[#141414] text-xs font-semibold uppercase tracking-wider hover:border-[#141414] transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#A8875A]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual & Location Overview */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E8E2D5] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
                  Mumbai Map Orientation
                </span>
                <span className="text-[11px] text-[#A8875A] font-medium">
                  Lat {selectedLoc.coordinates.lat.toFixed(4)}, Lng {selectedLoc.coordinates.lng.toFixed(4)}
                </span>
              </div>

              {/* Styled Map Container */}
              <div className="relative aspect-16/10 bg-[#E8E2D5] border border-[#D8BD93]/50 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#EFECE6] p-6 flex flex-col justify-between">
                  {/* Stylized geometric grid map representation of South Mumbai */}
                  <div className="flex justify-between items-start text-xs text-[#78716C]">
                    <div className="bg-white/80 backdrop-blur-xs px-2.5 py-1 border border-[#D8BD93]/40">
                      <span className="font-semibold text-[#141414]">South Mumbai Coastal Hub</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#A8875A]">
                      Established 1997
                    </div>
                  </div>

                  {/* Marker Pin Visual */}
                  <div className="self-center flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#141414] text-[#FAF8F5] rounded-full flex items-center justify-center shadow-lg border-2 border-[#C5A880] animate-bounce">
                        <MapPin className="w-6 h-6 text-[#C5A880]" />
                      </div>
                    </div>
                    <div className="bg-white/95 px-3 py-1.5 shadow-sm border border-[#E8E2D5] text-center">
                      <span className="text-xs font-serif font-bold text-[#141414] block">
                        {selectedLoc.name}
                      </span>
                      <span className="text-[11px] text-[#57534E]">
                        {selectedLoc.landmark}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end text-xs text-[#78716C]">
                    <span>Marine Drive / Colaba Causeway</span>
                    <a
                      href={selectedLoc.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#141414] hover:text-[#A8875A] font-medium flex items-center gap-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Quick Summary for Both Branches */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div
                  onClick={() => setSelectedLocationId('colaba')}
                  className={`p-3 border cursor-pointer transition-all ${
                    selectedLocationId === 'colaba'
                      ? 'border-[#141414] bg-white'
                      : 'border-[#E8E2D5] bg-[#FAF8F5] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-serif font-semibold text-[#141414] block">Colaba Branch</span>
                  <span className="text-[11px] text-[#A8875A]">Unisex Salon & Spa</span>
                  <p className="text-[11px] text-[#78716C] mt-1">Tel: +91 7777069720</p>
                </div>

                <div
                  onClick={() => setSelectedLocationId('marine-lines')}
                  className={`p-3 border cursor-pointer transition-all ${
                    selectedLocationId === 'marine-lines'
                      ? 'border-[#141414] bg-white'
                      : 'border-[#E8E2D5] bg-[#FAF8F5] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-serif font-semibold text-[#141414] block">Marine Lines</span>
                  <span className="text-[11px] text-[#A8875A]">Ladies Only Salon</span>
                  <p className="text-[11px] text-[#78716C] mt-1">Tel: 022 22037609</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
