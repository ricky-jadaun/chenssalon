import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { SALON_LOCATIONS, SOCIAL_LINKS } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, locationId?: 'colaba' | 'marine-lines') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top subtle utility strip */}
      <div className="bg-[#141414] text-[#E8E2D5] text-xs py-2 px-4 sm:px-8 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#C5A880]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[#FAF8F5] font-medium">Colaba:</span>
              <a href="tel:+917777069720" className="hover:text-[#FAF8F5] transition-colors underline-offset-2 hover:underline">
                7777069720 (Unisex)
              </a>
            </span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-[#C5A880]">
              <span className="text-[#FAF8F5] font-medium">Marine Lines:</span>
              <a href="tel:02222037609" className="hover:text-[#FAF8F5] transition-colors underline-offset-2 hover:underline">
                022 22037609 (Ladies)
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C5A880]" />
              <span>Tue–Sun: 10:00am–8:00pm</span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar strictly following Top Bar Contract: 3 zones separated by gap-8 */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5]'
            : 'bg-[#FAF8F5] border-b border-[#E8E2D5]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand element featuring original unchanged logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            aria-label="Chen's Hair & Beauty Salon Home"
          >
            <div className="bg-[#141414] p-1.5 rounded border border-[#2A2A2A] shadow-inner flex items-center justify-center">
              <img
                src="/assets/original/logo.png"
                alt="Chen's Hair & Beauty Salon Logo"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container in case file path differs
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.brand-text-fallback')) {
                    const span = document.createElement('span');
                    span.className = 'brand-text-fallback font-serif text-sm tracking-widest text-[#FAF8F5] px-2 py-1 font-bold';
                    span.innerText = "CHEN'S";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider text-[#141414] font-bold uppercase leading-tight">
                Chen’s Salon
              </span>
              <span className="text-[10px] tracking-widest text-[#78716C] uppercase font-medium">
                Mumbai · Est. 1997
              </span>
            </div>
          </Link>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C5A880] after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-[#141414] font-semibold after:w-full'
                      : 'text-[#44403C] hover:text-[#141414] after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#141414] hover:bg-[#2A2A2A] border border-[#141414] transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase text-white bg-[#141414] shrink-0"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141414] hover:bg-[#F3EFE8] transition-colors rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm">
          <div className="fixed top-20 right-0 w-4/5 max-w-sm h-[calc(100vh-5rem)] bg-[#FAF8F5] border-l border-[#E8E2D5] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="pb-4 border-b border-[#E8E2D5]">
                <span className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
                  Navigation
                </span>
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-serif py-1 transition-colors border-b ${
                        isActive
                          ? 'text-[#A8875A] font-semibold border-[#C5A880]/30 pl-1'
                          : 'text-[#1C1917] hover:text-[#C5A880] border-[#FAF8F5]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#E8E2D5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#141414] hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book Appointment Online</span>
              </button>

              <div className="space-y-2 text-xs text-[#57534E]">
                <p className="font-medium text-[#1C1917]">Call Salon Desks:</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+917777069720"
                    className="flex items-center gap-2 text-[#1C1917] hover:text-[#C5A880]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Colaba (Unisex): +91 7777069720</span>
                  </a>
                  <a
                    href="tel:02222037609"
                    className="flex items-center gap-2 text-[#1C1917] hover:text-[#C5A880]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Marine Lines (Ladies): 022 22037609</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
