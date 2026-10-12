import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  breadcrumb,
  backgroundImage,
}) => {
  return (
    <section className="relative bg-[#141414] text-white py-14 lg:py-26  border-b border-[#262626] overflow-hidden">
      {/* Background Image with Lighter, Elegant Contrast Scrim */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover object-center filter brightness-[0.62]"
            referrerPolicy="no-referrer"
          />
          {/* Lighter gradient scrim: lets the image show through clearly while maintaining text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-[#141414]/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/85 via-transparent to-black/30" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-3">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#A8A29E]" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FAF8F5] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-[#FAF8F5] font-medium">{breadcrumb}</span>
          </nav>

          {/* Subtitle / Kicker */}
          {subtitle && (
            <span className="text-xs uppercase tracking-widest text-[#D4B886] font-semibold block pt-1 drop-shadow-xs">
              {subtitle}
            </span>
          )}

          {/* Clean Page Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F5] tracking-tight drop-shadow-sm">
            {title}
          </h1>

          {/* Concise Supporting Description */}
          {description && (
            <p className="text-sm sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed max-w-2xl pt-1 drop-shadow-xs">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
