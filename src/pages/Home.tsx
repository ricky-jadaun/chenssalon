import React from 'react';
import { Hero } from '../components/Hero';
import { HomeServicesPreview } from '../components/HomeServicesPreview';
import { HomeAboutPreview } from '../components/HomeAboutPreview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { HomeGalleryPreview } from '../components/HomeGalleryPreview';
import { BookingSection } from '../components/BookingSection';

interface HomeProps {
  bookingService: string;
  bookingLocation: 'colaba' | 'marine-lines';
  onOpenBooking: (serviceName?: string, locationId?: 'colaba' | 'marine-lines') => void;
  onExploreServices: () => void;
  onSelectService: (serviceName: string) => void;
  onBookLocation?: (locId: 'colaba' | 'marine-lines') => void;
}

export const Home: React.FC<HomeProps> = ({
  bookingService,
  bookingLocation,
  onOpenBooking,
  onExploreServices,
  onSelectService,
}) => {
  return (
    <>
      {/* 1. Full-Width Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onExploreServices={onExploreServices}
      />

      {/* 2. Curated Services Preview (Distinct Design & Short Content linking to /services) */}
      <HomeServicesPreview
        onSelectService={onSelectService}
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 3. About Chen's Salon Snapshot (Distinct Editorial Design & Short Content linking to /about) */}
      <HomeAboutPreview />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Customer Testimonials Section */}
      <TestimonialsSection />

      {/* 6. Curated Gallery Showcase (Distinct Grid & Short Content linking to /gallery) */}
      <HomeGalleryPreview />

      {/* 7. Appointment Booking Section */}
      <BookingSection
        initialService={bookingService}
        initialLocation={bookingLocation}
      />
    </>
  );
};
