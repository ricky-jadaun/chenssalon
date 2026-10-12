import React from 'react';
import { PageHero } from '../components/PageHero';
import { ServicesSection } from '../components/ServicesSection';
import { BookingSection } from '../components/BookingSection';

interface ServicesProps {
  bookingService: string;
  bookingLocation: 'colaba' | 'marine-lines';
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  bookingService,
  bookingLocation,
  onSelectService,
}) => {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        subtitle="Signature Salon Offerings"
        title="Our Services & Rituals"
        description="Explore our specialized Japanese Hair Rebonding, organic botanical facials, relaxing spa rituals, and bespoke bridal packages."
        backgroundImage="/assets/hero-services.jpg"
      />
      <ServicesSection onSelectService={onSelectService} />
      <BookingSection
        initialService={bookingService}
        initialLocation={bookingLocation}
      />
    </>
  );
};
