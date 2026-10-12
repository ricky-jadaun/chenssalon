import React from 'react';
import { PageHero } from '../components/PageHero';
import { GallerySection } from '../components/GallerySection';

export const Gallery: React.FC = () => {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        subtitle="Visual Atelier"
        title="Salon Gallery"
        description="A glimpse into Chen’s Salon spaces, precision styling stations, and aesthetic treatment rooms across Mumbai."
        backgroundImage="/assets/hero-gallery.jpg"
      />
      <GallerySection />
    </>
  );
};
