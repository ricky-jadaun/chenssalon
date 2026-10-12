import React from 'react';
import { PageHero } from '../components/PageHero';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const About: React.FC = () => {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        subtitle="Established in Mumbai · 1997"
        title="About Chen’s Salon"
        description="Founded by Annie Chen, pioneer of Japanese Hair Rebonding in India. Over 35 years of styling mastery across Colaba and Marine Lines."
        backgroundImage="/assets/hero-about.jpg"
      />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
};
