import React, { useState, useEffect } from 'react';
import { SALON_LOCATIONS, SALON_SERVICES } from '../data/salonData';
import { Calendar, Clock, MapPin, CheckCircle, MessageSquare, Phone, Copy, Check, AlertCircle } from 'lucide-react';

interface BookingSectionProps {
  initialService?: string;
  initialLocation?: 'colaba' | 'marine-lines';
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService,
  initialLocation = 'colaba',
}) => {
  const [location, setLocation] = useState<'colaba' | 'marine-lines'>(initialLocation);
  const [service, setService] = useState<string>(initialService || 'Japanese Hair Rebonding & Smoothing');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  
  // Validation and Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    locationName: string;
    serviceName: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    whatsappNumber: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (initialLocation) {
      setLocation(initialLocation);
    }
  }, [initialService, initialLocation]);

  // All services list for select dropdown
  const allServices = Object.values(SALON_SERVICES).flatMap((cat) => cat.items);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!phone.trim()) {
      errs.phone = 'Contact number is required.';
    } else if (phone.trim().replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number with area/mobile code.';
    }
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!date) {
      errs.date = 'Please pick a preferred appointment date.';
    }
    if (!service) {
      errs.service = 'Please select a salon service.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedLoc = SALON_LOCATIONS.find((l) => l.id === location)!;
    const ref = `CS-${Math.floor(100000 + Math.random() * 900000)}`;

    setSubmittedData({
      referenceId: ref,
      locationName: selectedLoc.name,
      serviceName: service,
      date,
      time,
      name,
      phone,
      whatsappNumber: selectedLoc.whatsapp || '917777069720',
    });
  };

  const handleCopy = () => {
    if (!submittedData) return;
    const summary = `Chen's Salon Appointment Request:\nRef: ${submittedData.referenceId}\nClient: ${submittedData.name} (${submittedData.phone})\nLocation: ${submittedData.locationName}\nService: ${submittedData.serviceName}\nPreferred Slot: ${submittedData.date} at ${submittedData.time}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setNotes('');
    setErrors({});
  };

  // Get current date for min-date picker
  const today = new Date().toISOString().split('T')[0];

  const selectedLocData = SALON_LOCATIONS.find((l) => l.id === location);

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#A8875A] font-semibold">
              Online Appointment Enquiry
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] text-balance">
              Reserve Your Salon Experience
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
              Select your desired branch, preferred service, and schedule. Our desk will confirm your appointment 
              slot or you can immediately verify via WhatsApp or phone.
            </p>
          </div>

          {/* If already submitted: show confirmation card */}
          {submittedData ? (
            <div className="bg-white border border-[#C5A880] p-8 sm:p-10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F3EFE8]">
                <CheckCircle className="w-8 h-8 text-[#A8875A] shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl text-[#141414]">
                    Appointment Enquiry Received
                  </h3>
                  <span className="text-xs text-[#78716C]">
                    Reference ID: <strong className="text-[#141414]">{submittedData.referenceId}</strong>
                  </span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 border border-[#E8E2D5] space-y-2 text-sm text-[#44403C]">
                <div className="flex justify-between py-1 border-b border-[#E8E2D5]/50">
                  <span className="text-[#78716C]">Guest Name:</span>
                  <span className="font-medium text-[#141414]">{submittedData.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E2D5]/50">
                  <span className="text-[#78716C]">Contact Number:</span>
                  <span className="font-medium text-[#141414]">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E2D5]/50">
                  <span className="text-[#78716C]">Location:</span>
                  <span className="font-medium text-[#141414]">{submittedData.locationName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E2D5]/50">
                  <span className="text-[#78716C]">Requested Service:</span>
                  <span className="font-medium text-[#141414]">{submittedData.serviceName}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">Date & Time Slot:</span>
                  <span className="font-medium text-[#141414]">{submittedData.date} · {submittedData.time}</span>
                </div>
              </div>

              <p className="text-xs text-[#57534E] leading-relaxed">
                Your request has been logged for Chen’s Salon desk managers. For instant confirmation or immediate same-day bookings, 
                you can send this pre-filled message directly to our official salon WhatsApp or ring our front desk directly.
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${submittedData.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Chen's Salon, I would like to confirm my appointment (Ref: ${submittedData.referenceId}).\nName: ${submittedData.name}\nService: ${submittedData.serviceName}\nBranch: ${submittedData.locationName}\nDate: ${submittedData.date} at ${submittedData.time}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>

                <a
                  href={location === 'colaba' ? 'tel:+917777069720' : 'tel:02222037609'}
                  className="py-3 px-4 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call Salon Desk</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#F3EFE8] text-xs">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-[#57534E] hover:text-[#141414] flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Summary Copied' : 'Copy Booking Details'}</span>
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="text-[#A8875A] hover:underline font-medium"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-[#E8E2D5] p-6 sm:p-10 shadow-sm space-y-6"
            >
              {/* Location Selector Tabs */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                  Select Salon Branch *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLocation('colaba')}
                    className={`p-4 border text-left transition-all ${
                      location === 'colaba'
                        ? 'border-[#141414] bg-[#FAF8F5] shadow-xs'
                        : 'border-[#E8E2D5] bg-white hover:border-[#141414]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-base font-medium text-[#141414]">Colaba</span>
                      <span className="text-[10px] text-[#A8875A] font-semibold uppercase tracking-wider">Unisex Salon & Spa</span>
                    </div>
                    <p className="text-xs text-[#78716C] leading-tight">
                      Opp. Radio Club · Tue–Sun 10am–8pm
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocation('marine-lines')}
                    className={`p-4 border text-left transition-all ${
                      location === 'marine-lines'
                        ? 'border-[#141414] bg-[#FAF8F5] shadow-xs'
                        : 'border-[#E8E2D5] bg-white hover:border-[#141414]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-base font-medium text-[#141414]">Marine Lines</span>
                      <span className="text-[10px] text-[#A8875A] font-semibold uppercase tracking-wider">Ladies Only Salon</span>
                    </div>
                    <p className="text-xs text-[#78716C] leading-tight">
                      110 Marine Mansion · Open All 7 Days
                    </p>
                  </button>
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="service-select" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                  Desired Service *
                </label>
                <select
                  id="service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                >
                  <optgroup label="Hair & Scalp Rituals">
                    {SALON_SERVICES.hair.items.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Skin Care & Organic Facials">
                    {SALON_SERVICES.beauty.items.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Spa & Holistic Massages">
                    {SALON_SERVICES.spa.items.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Nail Art & Hand/Foot Care">
                    {SALON_SERVICES.nails.items.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Bridal & Bespoke Packages">
                    {SALON_SERVICES.packages.items.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
                {errors.service && (
                  <p className="text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                    Preferred Date *
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  {errors.date && (
                    <p className="text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-time" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                    Preferred Time Slot
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                  >
                    <option value="10:00 AM">10:00 AM (Opening slot)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="7:00 PM">7:00 PM (Evening slot)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="guest-name" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                    Full Name *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    placeholder="e.g. Shalini Roy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                    Contact Number *
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    placeholder="e.g. 9819679992"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="guest-email" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                  Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="guest-email"
                  type="email"
                  placeholder="e.g. name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Notes / Stylist Preferences */}
              <div className="space-y-1.5">
                <label htmlFor="guest-notes" className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
                  Special Requests / Stylist Preference
                </label>
                <textarea
                  id="guest-notes"
                  rows={2}
                  placeholder="e.g. Haircut by Annie Chen if available, or bridal consultation notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-2 text-sm text-[#141414] focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#141414] hover:bg-[#2A2A2A] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Submit Appointment Enquiry</span>
                </button>
              </div>

              {/* Direct Booking Note */}
              <div className="text-center text-xs text-[#78716C] pt-2">
                <span>Prefer speaking directly? Call Colaba at </span>
                <a href="tel:+917777069720" className="text-[#141414] font-medium underline underline-offset-2">
                  +91 7777069720
                </a>
                <span> or Marine Lines at </span>
                <a href="tel:02222037609" className="text-[#141414] font-medium underline underline-offset-2">
                  022 22037609
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
