import React from 'react';
import { Link } from 'react-router-dom';
import { SALON_LOCATIONS, SOCIAL_LINKS } from '../data/salonData';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#E8E2D5] border-t border-[#262626]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Identity Zone */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <div className="bg-[#1E1E1E] p-2 border border-[#333333]">
                <img
                  src="/assets/original/logo.png"
                  alt="Chen's Hair & Beauty Salon Logo"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl tracking-wider text-[#FAF8F5] uppercase block font-bold">
                  Chen’s Salon
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#C5A880]">
                  Hair & Beauty Atelier · Mumbai
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm">
              Established in Mumbai in 1997 by Annie Chen. Pioneers of Japanese Hair Rebonding, relaxing, organic 
              botanical facials, and luxury destination bridal transformations.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#C5A880]">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors underline-offset-4 hover:underline"
              >
                Instagram (@annie_chen_salon)
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors underline-offset-4 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A29E]">
              <li>
                <Link to="/about" className="hover:text-[#FAF8F5] transition-colors">
                  About Annie Chen
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FAF8F5] transition-colors">
                  Hair & Rebonding
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FAF8F5] transition-colors">
                  Organic Facials
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FAF8F5] transition-colors">
                  Ayurvedic & Balinese Spa
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FAF8F5] transition-colors">
                  Bridal & Entourage Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FAF8F5] transition-colors">
                  Salon Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAF8F5] transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Branch 1: Colaba */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold flex items-center gap-1.5">
              <span>Colaba Atelier</span>
              <span className="text-[10px] text-[#C5A880] lowercase tracking-normal">(unisex salon & spa)</span>
            </h4>
            <div className="text-xs text-[#A8A29E] space-y-2 leading-relaxed">
              <p>6 Puran Nivas, 1st Floor, Opp. Radio Club, Colaba, Mumbai – 400 005</p>
              <p>
                Mobile:{' '}
                <a href="tel:+917777069720" className="text-[#FAF8F5] hover:text-[#C5A880]">
                  +91 7777069720
                </a>
              </p>
              <p>Tue – Sun: 10:00am – 8:00pm (Mon Closed)</p>
            </div>
          </div>

          {/* Branch 2: Marine Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold flex items-center gap-1.5">
              <span>Marine Lines Atelier</span>
              <span className="text-[10px] text-[#C5A880] lowercase tracking-normal">(ladies only)</span>
            </h4>
            <div className="text-xs text-[#A8A29E] space-y-2 leading-relaxed">
              <p>110 Marine Mansion, 1st Marine St, Opp. Shakuntala School, Mumbai – 400 002</p>
              <p>
                Tel:{' '}
                <a href="tel:02222037609" className="text-[#FAF8F5] hover:text-[#C5A880]">
                  022 22037609
                </a>
                <br />
                Mobile:{' '}
                <a href="tel:+919819679992" className="text-[#FAF8F5] hover:text-[#C5A880]">
                  9819679992
                </a>{' '}
                /{' '}
                <a href="tel:+919930597720" className="text-[#FAF8F5] hover:text-[#C5A880]">
                  9930597720
                </a>
              </p>
              <p>Open All 7 Days: 10:00am – 7:30pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#262626] bg-[#0A0A0A] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© {new Date().getFullYear()} Chen’s Hair & Beauty Salon. All rights reserved.</span>
            <span>·</span>
            <span>Founded by Annie Chen</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenBooking}
              className="text-[#C5A880] hover:text-[#FAF8F5] font-medium transition-colors"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FAF8F5] transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
