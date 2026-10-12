import React from 'react';
import { PageHero } from '../components/PageHero';
import { LocationsContact } from '../components/LocationsContact';
import { BookingSection } from '../components/BookingSection';

interface ContactProps {
  bookingService: string;
  bookingLocation: 'colaba' | 'marine-lines';
  onBookLocation: (locId: 'colaba' | 'marine-lines') => void;
}

export const Contact: React.FC<ContactProps> = ({
  bookingService,
  bookingLocation,
  onBookLocation,
}) => {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        subtitle="Two Premier Mumbai Locations"
        title="Contact & Locations"
        description="Visit our Colaba unisex salon or exclusive Marine Lines ladies studio. Find directions, phone numbers, or book an appointment."
        backgroundImage="/assets/hero-contact.jpg"
      />
      <LocationsContact onBookLocation={onBookLocation} />
      <BookingSection
        initialService={bookingService}
        initialLocation={bookingLocation}
      />
    </>
  );
};
