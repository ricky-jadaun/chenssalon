import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Compass, Users, Sparkles } from 'lucide-react';
import { CELEBRITY_CLIENTELE } from '../data/salonData';

export const HomeAboutPreview: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Framed Founder Snapshot with Quote Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="border border-[#E8E2D5] bg-[#FAF8F5] p-3 shadow-md">
                <img
                  src="/assets/original/owner4.jpg"
                  alt="Annie Chen, Founder of Chen's Salon Mumbai"
                  className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D5] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#141414] font-medium">Annie Chen</h3>
                    <p className="text-[11px] text-[#A8875A] uppercase tracking-widest font-semibold">
                      Founder · 35+ Years Mastery
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#78716C] bg-white border border-[#E8E2D5] px-2 py-1">
                    Japan-Trained
                  </span>
                </div>
              </div>

              {/* Decorative Background Accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C5A880]/30 -z-10 hidden sm:block" />
            </div>

            {/* Quote Pill */}
            <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-4 text-center">
              <p className="font-serif italic text-sm text-[#1C1917]">
                "When You Look Good, We Look Good."
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#78716C] mt-1 block">
                The Chen's Salon Philosophy Since 1997
              </span>
            </div>
          </div>

          {/* Right Column: Short Editorial Highlights & Story Preview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Mastery</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] leading-tight text-balance">
                Pioneers of Hair Rebonding in India Since 1996
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#57534E]">
                Under the visionary guidance of Annie Chen, Chen’s Salon has stood as an institution of hair innovation in South Mumbai.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Having completed rigorous professional training in <strong className="text-[#141414]">Japan</strong>, Annie Chen was the first stylist to introduce permanent Hair Rebonding to India in 1996. Today, her dedicated team of 15 continuously trained stylists serves Mumbai's most discerning clientele across two signature hubs in Colaba and Marine Lines.
            </p>

            {/* 3 Quick Credentials */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-3 text-center">
                <span className="font-serif text-xl sm:text-2xl text-[#C5A880] block font-normal">1996</span>
                <span className="text-[11px] text-[#78716C] block leading-tight mt-0.5">First in India</span>
              </div>
              <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-3 text-center">
                <span className="font-serif text-xl sm:text-2xl text-[#C5A880] block font-normal">35+ Yrs</span>
                <span className="text-[11px] text-[#78716C] block leading-tight mt-0.5">Styling Mastery</span>
              </div>
              <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-3 text-center">
                <span className="font-serif text-xl sm:text-2xl text-[#C5A880] block font-normal">2 Hubs</span>
                <span className="text-[11px] text-[#78716C] block leading-tight mt-0.5">Colaba & Marine Lines</span>
              </div>
            </div>

            {/* Direct Link to Full About Page */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#141414] hover:bg-[#2A2A2A] transition-colors shadow-sm"
              >
                <span>Read Annie Chen’s Full Story & Credentials</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
