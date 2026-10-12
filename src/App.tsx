import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [bookingService, setBookingService] = useState<string>('Japanese Hair Rebonding & Smoothing');
  const [bookingLocation, setBookingLocation] = useState<'colaba' | 'marine-lines'>('colaba');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToBooking = (serviceName?: string, locationId?: 'colaba' | 'marine-lines') => {
    if (serviceName) setBookingService(serviceName);
    if (locationId) setBookingLocation(locationId);

    const bookingElem = document.getElementById('book-appointment');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact#book-appointment');
      setTimeout(() => {
        const el = document.getElementById('book-appointment');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setBookingService(serviceName);
    const bookingElem = document.getElementById('book-appointment');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/services#book-appointment');
      setTimeout(() => {
        const el = document.getElementById('book-appointment');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleBookLocation = (locId: 'colaba' | 'marine-lines') => {
    setBookingLocation(locId);
    const bookingElem = document.getElementById('book-appointment');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact#book-appointment');
      setTimeout(() => {
        const el = document.getElementById('book-appointment');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const scrollToServices = () => {
    if (location.pathname === '/') {
      const servicesElem = document.getElementById('services');
      if (servicesElem) {
        servicesElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/services');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917]">
      <ScrollToTop />

      {/* 1. Premium Navigation Bar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Multi-Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bookingService={bookingService}
                bookingLocation={bookingLocation}
                onOpenBooking={scrollToBooking}
                onExploreServices={scrollToServices}
                onSelectService={handleSelectService}
                onBookLocation={handleBookLocation}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={
              <Services
                bookingService={bookingService}
                bookingLocation={bookingLocation}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/contact"
            element={
              <Contact
                bookingService={bookingService}
                bookingLocation={bookingLocation}
                onBookLocation={handleBookLocation}
              />
            }
          />
          {/* Fallback route to render Home */}
          <Route
            path="*"
            element={
              <Home
                bookingService={bookingService}
                bookingLocation={bookingLocation}
                onOpenBooking={scrollToBooking}
                onExploreServices={scrollToServices}
                onSelectService={handleSelectService}
                onBookLocation={handleBookLocation}
              />
            }
          />
        </Routes>
      </main>

      {/* 10. Premium Footer */}
      <Footer onOpenBooking={() => scrollToBooking()} />

      {/* Subtle Floating Contact Bar for Quick Mobile Access */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/917777069720?text=Hello%20Chen's%20Salon,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          aria-label="Chat on WhatsApp with Chen's Salon Colaba"
          title="WhatsApp Salon Desk"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <a
          href="tel:+917777069720"
          className="p-3 bg-[#141414] text-[#C5A880] rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center border border-[#333333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#141414]"
          aria-label="Call Chen's Salon Desk"
          title="Call Salon Desk"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
