export interface SalonLocation {
  id: 'colaba' | 'marine-lines';
  name: string;
  tagline: string;
  type: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  telephones: string[];
  mobiles: string[];
  whatsapp?: string;
  hours: string;
  days: string;
  closedOn?: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beauty' | 'spa' | 'nails' | 'packages';
  description: string;
  highlights?: string[];
  forWhom?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  content: string;
  source: string;
  relation?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'beauty' | 'spa';
  imageUrl: string;
  caption: string;
}

export const SALON_LOCATIONS: SalonLocation[] = [
  {
    id: 'colaba',
    name: "Chen's Salon & Spa — Colaba",
    tagline: 'Unisex Salon & Spa',
    type: 'Unisex Salon & Spa (For Men & Women)',
    address: '6 Puran Nivas, 1st Floor, Opp. Radio Club',
    landmark: 'Opposite Radio Club',
    city: 'Colaba, Mumbai',
    pincode: '400 005',
    telephones: [],
    mobiles: ['+91 7777069720'],
    whatsapp: '917777069720',
    hours: '10:00 AM – 8:00 PM',
    days: 'Tuesday to Sunday',
    closedOn: 'Monday',
    googleMapsUrl: 'https://maps.google.com/?q=6+Puran+Nivas+Colaba+Mumbai+Radio+Club',
    coordinates: {
      lat: 18.9187507,
      lng: 72.8294805,
    },
  },
  {
    id: 'marine-lines',
    name: "Chen's Salon — Marine Lines",
    tagline: 'Ladies Only Salon',
    type: 'Exclusive Ladies Salon',
    address: '110 Marine Mansion, 1st Marine Street, St. Anandilal Podar Marg',
    landmark: 'Opposite Shakuntala School',
    city: 'Marine Lines, Mumbai',
    pincode: '400 002',
    telephones: ['022 22037609'],
    mobiles: ['+91 9819679992', '+91 9930597720'],
    whatsapp: '919819679992',
    hours: '10:00 AM – 7:30 PM',
    days: 'Open All 7 Days',
    googleMapsUrl: 'https://maps.google.com/?q=Marine+Mansion+110+Marine+Lines+Mumbai',
    coordinates: {
      lat: 18.942713,
      lng: 72.827413,
    },
  },
];

export const SALON_SERVICES: Record<string, { title: string; image: string; summary: string; items: ServiceItem[] }> = {
  hair: {
    title: 'Hair Design & Scalp Rituals',
    image: '/assets/original/hair-mini-front4.jpg',
    summary:
      "Specializing in hair rebonding, relaxing, and smoothing pioneered in India by Annie Chen in 1996 following intensive training in Japan.",
    items: [
      {
        id: 'hair-rebonding',
        name: 'Japanese Hair Rebonding & Smoothing',
        category: 'hair',
        description:
          'The signature specialization of Chen’s Salon. First brought to India in 1996 by Annie Chen. Transforms frizzy, curly hair into permanently sleek, silky, natural straight locks with Japanese precision techniques.',
        highlights: ['Pioneered in India (1996)', 'Japan-trained technique', 'Permanent sleek finish'],
        forWhom: 'Unisex (Men & Women)',
      },
      {
        id: 'keratine-cystine',
        name: 'Keratine & Cystine Smoothing Therapy',
        category: 'hair',
        description:
          'The very latest restorative technology to eliminate frizz and create smooth, natural-looking hair with rich protein infusion while maintaining natural movement.',
        highlights: ['Frizz control', 'Natural movement', 'Cystine protein repair'],
        forWhom: 'Unisex',
      },
      {
        id: 'haircut-stylist',
        name: 'Hair Cut by Top Stylist & Senior Stylist',
        category: 'hair',
        description:
          'Precision haircutting, styling consultation, bangs or fringe crafting, and total change-of-style tailored to bone structure and personal lifestyle.',
        highlights: ['Men, Women, Boys & Girls', 'Change of style', 'Custom fringe & layering'],
        forWhom: 'Men, Women, Children',
      },
      {
        id: 'hair-color',
        name: 'Hair Color & Expert Correction',
        category: 'hair',
        description:
          'Personalized color consultation by our Color Experts. Full global color, multi-dimensional highlights, balayage, and restorative corrective coloring.',
        highlights: ['Global Color', 'Color Highlights', 'Color Correction'],
        forWhom: 'Men & Women',
      },
      {
        id: 'hair-styling',
        name: 'Hair Styling & Evening Hairdos',
        category: 'hair',
        description:
          'Professional hair wash with blast dry, precision blow dry, iron straightening, tong curls, and elaborate evening hairstyles for gala events.',
        highlights: ['Wash & Blow Dry', 'Tong Curls', 'Elegant Evening Hairdos'],
        forWhom: 'Unisex',
      },
      {
        id: 'hair-spa-protein',
        name: 'Hair Spa & Protein Repair Ritual',
        category: 'hair',
        description:
          'Intensive repair for dry and damaged hair shafts. Strengthens, reconstructs, and detangles hair gently while deeply moisturizing cuticles for lasting gloss and shine.',
        highlights: ['Deep cortex nourishment', 'Frizz elimination', 'High-gloss shine'],
        forWhom: 'Unisex',
      },
      {
        id: 'scalp-treatments',
        name: 'High-Frequency Scalp & Hair Growth Therapies',
        category: 'hair',
        description:
          'Targeted treatments including Anti-Dandruff therapy, Hair Loss prevention with scalp peel and high-frequency electrotherapy, and Hair Growth stimulation with herbal hair tonics.',
        highlights: ['Hi-Frequency scalp stimulation', 'Anti-dandruff detox', 'Hair peel & tonic'],
        forWhom: 'Unisex',
      },
    ],
  },
  beauty: {
    title: 'Skin Care & Organic Facials',
    image: '/assets/original/beauty-mini-front.jpg',
    summary:
      'Customized facials and body rituals using 100% organic botanical and aroma formulations for youthful, radiant skin.',
    items: [
      {
        id: 'organic-glow-facial',
        name: '100% Organic Glow & Aroma Facial',
        category: 'beauty',
        description:
          'Customized facial using pure botanical extracts and aromatic essences. Deeply hydrates, cleanses, and restores skin suppleness for a youthful, healthy glow.',
        highlights: ['100% Organic extracts', 'Aroma therapy', 'Deeply hydrating'],
        forWhom: 'Unisex',
      },
      {
        id: 'crystal-shine-facial',
        name: 'Crystal Shine & Complexion Facial',
        category: 'beauty',
        description:
          'Formulated specifically to clarify sun-tanned skin, refine tone, and impart a crisp crystal luminosity.',
        highlights: ['De-tanning action', 'Complexion revival', 'Luminous clarity'],
        forWhom: 'Unisex',
      },
      {
        id: 'sheen-of-gold',
        name: 'Sheen of Gold Luxury Facial',
        category: 'beauty',
        description:
          'Rich, indulgent facial imparting a warm golden lustre and silky smoothness. Ideal ahead of festivities and celebrations.',
        highlights: ['Gold radiance', 'Smooth skin texture', 'Festive glow'],
        forWhom: 'Unisex',
      },
      {
        id: 'diamond-bridal-facial',
        name: 'Diamond Radiance Facial',
        category: 'beauty',
        description:
          'An ultra-luxurious treatment designed particularly for brides, where cellular luminosity and supple hydration last for weeks.',
        highlights: ['Bridal favorite', 'Weeks-long illumination', 'Cellular renewal'],
        forWhom: 'Women & Brides',
      },
      {
        id: 'skin-tightening',
        name: 'Skin Tightening & Rejuvenating Facial',
        category: 'beauty',
        description:
          'Botanical firming extracts and natural vitamins designed to stimulate collagen, firm skin contours, and address fine lines.',
        highlights: ['Vitamin infusion', 'Firming contour', 'Anti-aging care'],
        forWhom: 'Unisex',
      },
      {
        id: 'laser-oxygen-facial',
        name: 'Laser & Pure Oxygen Infusion Facials',
        category: 'beauty',
        description:
          'Advanced clinical facials addressing persistent acne, hyperpigmentation, sun damage, and dull sallow tone via pure oxygen and light technology.',
        highlights: ['Oxygen infusion', 'Pigmentation control', 'Acne clarification'],
        forWhom: 'Unisex',
      },
      {
        id: 'skin-polishing-peel',
        name: 'Skin Polishing & Body Peel Rituals',
        category: 'beauty',
        description:
          'Gentle exfoliation of dry surface cells with deep moisture restoration for face, back, and body. Removes tan and evens out tone.',
        highlights: ['Full body / Face', 'Tan removal', 'Velvety finish'],
        forWhom: 'Unisex',
      },
    ],
  },
  spa: {
    title: 'Holistic Spa & Body Massages',
    image: '/assets/original/spa-mini-front.jpg',
    summary:
      'Therapeutic bodywork combining ancient Ayurvedic wisdom, Balinese rituals, and deep tissue stress alleviation.',
    items: [
      {
        id: 'potli-massage',
        name: 'Authentic Ayurvedic Potli Massage',
        category: 'spa',
        description:
          'Based on the ancient therapeutic application of warmth. Full-body massage utilizing warm linen potlis filled with authentic Ayurvedic herbs and medicinal oils to detoxify and rebalance energy flow.',
        highlights: ['Therapeutic warmth', 'Ayurvedic herbal pouches', 'Deep detoxification'],
        forWhom: 'Unisex',
      },
      {
        id: 'deep-tissue-massage',
        name: 'Deep Tissue Therapeutic Massage',
        category: 'spa',
        description:
          'Manual pressure applied systematically to deeper connective tissue layers. Releases chronic muscle constriction, removes toxins, and restores oxygen circulation.',
        highlights: ['Muscle tension relief', 'Connective tissue focus', 'Pain reduction'],
        forWhom: 'Unisex',
      },
      {
        id: 'balinese-massage',
        name: 'Balinese Massage with Aroma Spa Treatment',
        category: 'spa',
        description:
          'Therapeutic ritual using pure aroma oils that rehydrates dry skin, restores moisture, and relaxes the central nervous system.',
        highlights: ['Aroma essential oils', 'Skin rehydration', 'Total calm'],
        forWhom: 'Unisex',
      },
      {
        id: 'abhyanga-massage',
        name: 'Abhyanga Ancient Ayurvedic Oil Massage',
        category: 'spa',
        description:
          'Time-honored Indian Ayurvedic oil massage for healing and rejuvenating body, mind, and spirit. Increases circulation, nourishes tissues, and lubricates joints.',
        highlights: ['Traditional warm oils', 'Vitality & immunity', 'Joint lubrication'],
        forWhom: 'Unisex',
      },
      {
        id: 'dead-sea-massage',
        name: 'Body Massage with Aroma Oil & Dead Sea Mask',
        category: 'spa',
        description:
          'Full body relaxing massage coupled with mineral-rich Dead Sea mud mask to detoxify skin, draw out impurities, and tone.',
        highlights: ['Dead Sea mineral mask', 'Aroma oil massage', 'Dermal detox'],
        forWhom: 'Unisex',
      },
      {
        id: 'back-spa',
        name: 'Back Spa Exfoliation Ritual',
        category: 'spa',
        description:
          'A dedicated ritual targeting the hard-to-reach back area: deep cleansing, exfoliation, herbal wrap, and nourishing massage leaving skin velvety smooth.',
        highlights: ['Back acne & tan relief', 'Deep exfoliation', 'Targeted massage'],
        forWhom: 'Unisex',
      },
    ],
  },
  nails: {
    title: 'Nails & Hand/Foot Care',
    image: '/assets/original/banner-new2.jpg',
    summary:
      'Complete nail grooming, artistic enhancement, and restorative paraffin hand and foot therapies.',
    items: [
      {
        id: 'manicure-pedicure',
        name: 'Spa & Paraffin Manicure & Pedicure',
        category: 'nails',
        description:
          'Nourishing hand and foot rituals to condition dry skin and restore moisture. Includes scrub, massage, cuticle grooming, and complimentary polish.',
        highlights: ['French polish option', 'Paraffin hydration', 'Relaxing foot soak'],
        forWhom: 'Unisex',
      },
      {
        id: 'gel-shellac-nails',
        name: 'Gel Nails & Shellac Polish',
        category: 'nails',
        description:
          'Long-wearing gel overlays and genuine Shellac polish providing weeks of high-shine durability without chipping.',
        highlights: ['Chip-free longevity', 'High-mirror gloss', 'Safe soak-off'],
        forWhom: 'Women',
      },
      {
        id: 'acrylic-nails',
        name: 'Acrylic Extensions & Sculpting',
        category: 'nails',
        description:
          'Custom nail extensions tailored in length and shape to elongate fingers with strong, beautifully balanced acrylic sculpting.',
        highlights: ['Custom shapes', 'High durability', 'Natural nail bed prep'],
        forWhom: 'Women',
      },
      {
        id: 'designer-nail-art',
        name: 'Bespoke Nail Art & Bridal Accents',
        category: 'nails',
        description:
          'Intricate hand-painted nail designs, chrome finishes, minimalist lines, and bridal crystal embellishments.',
        highlights: ['Hand-painted art', 'Bridal accents', 'Chrome & ombre'],
        forWhom: 'Women',
      },
    ],
  },
  packages: {
    title: 'Bridal, Groom & Bespoke Packages',
    image: '/assets/original/pack-mini-front5.jpg',
    summary:
      'Signature bridal and groom transformations, destination wedding styling, and complete pre-event grooming.',
    items: [
      {
        id: 'bridal-groom-royal',
        name: 'Bridal & Groom Complete Wedding Artistry',
        category: 'packages',
        description:
          'Indulge in royal pampering for your special day. Professional bridal/groom makeup, couture hairdo, saree and lehenga draping, veil and headgear setting, and change of polish.',
        highlights: ['In-salon or outdoor venue', 'Saree & lehenga draping', 'Veil & jewellery setting'],
        forWhom: 'Brides & Grooms',
      },
      {
        id: 'beauty-at-doorstep',
        name: 'Beauty at Your Doorstep (Destination Weddings)',
        category: 'packages',
        description:
          'Annie Chen and her senior styling entourage travel to your home, hotel, or destination wedding venue anywhere in the world to manage complete bridal glam.',
        highlights: ['Travels worldwide', 'Personal on-site artist', 'Punctual entourage'],
        forWhom: 'Brides & Family',
      },
      {
        id: 'pre-bridal-groom',
        name: 'Pre-Bridal & Pre-Groom Head-to-Toe Ritual',
        category: 'packages',
        description:
          'Comprehensive preparation one month or weeks before the wedding: Clean up, luxury facial, body polish, full body waxing, spa manicure & pedicure, and hair spa.',
        highlights: ['Complete 360° prep', 'Radiance build-up', 'Customized schedule'],
        forWhom: 'Brides & Grooms',
      },
      {
        id: 'group-dressing',
        name: 'Group Dressing for Bridal Entourage',
        category: 'packages',
        description:
          'Tailored for the bride and groom’s closest friends and family: Light makeup, saree draping, elegant hairdo, and nail polish so the entire wedding party looks cohesive.',
        highlights: ['Bridesmaids & family', 'Coordinated styling', 'Fast efficient service'],
        forWhom: 'Wedding Entourage',
      },
      {
        id: 'regular-wellness-combo',
        name: 'Signature Monthly Wellness Combos',
        category: 'packages',
        description:
          'Curated package combinations: Hair Spa + Face Cleanup + Manicure & Pedicure + Wash & Blow Dry, or Haircut + Pedicure + Oil Massage + Wash & Blow Dry.',
        highlights: ['All-in-one grooming', 'Value experience', 'Monthly maintenance'],
        forWhom: 'Unisex',
      },
    ],
  },
};

export const AUTHENTIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Janhvi Mehta',
    relation: 'Long-term Client',
    source: 'Verified Customer Review',
    content:
      'Excellent Services I must say. The staff is very humble & well trained. I am visiting this place for last few years & its a complete "value for money" Salon. A haircut by Annie is a must as she is the best in town.',
  },
  {
    id: 'test-2',
    author: 'Shirin Kapadia',
    relation: 'Client for 17+ Years',
    source: 'Verified Customer Review',
    content:
      "Chens is a one stop salon for all my beautification needs. I've known Annie, the owner, who has magic in her hands. I have been visiting the salon since the time the salon started around 17 years... fantastic services... Great staff... And value for money.",
  },
  {
    id: 'test-3',
    author: 'Unnati B',
    relation: 'Salon Client',
    source: 'Verified Customer Review',
    content:
      'I landed up here since I had a voucher but I bet you, without any voucher the services are well worth. A haircut by Annie is highly recommended :)',
  },
];

export const SALON_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Chen’s Salon Reception & Styling Stations',
    category: 'interior',
    imageUrl: '/assets/original/banner-new1.jpg',
    caption: 'Spacious, clean, and elegant salon styling stations in Mumbai.',
  },
  {
    id: 'gal-2',
    title: 'Precision Styling & Hair Artistry',
    category: 'hair',
    imageUrl: '/assets/original/banner-new2.jpg',
    caption: 'Master styling and hair rebonding by Annie Chen’s trained team.',
  },
  {
    id: 'gal-3',
    title: 'Chen’s Salon Atelier Atmosphere',
    category: 'interior',
    imageUrl: '/assets/original/banner-new33.jpg',
    caption: 'Dedicated stations designed for hair rebonding and precision grooming.',
  },
  {
    id: 'gal-4',
    title: 'Founder Annie Chen in Atelier',
    category: 'hair',
    imageUrl: '/assets/original/owner4.jpg',
    caption: 'Annie Chen, Proprietor with 35+ years experience and Japan training.',
  },
  {
    id: 'gal-5',
    title: 'Hair Rebonding & Treatment Station',
    category: 'hair',
    imageUrl: '/assets/original/hair-mini-front4.jpg',
    caption: 'Dedicated equipment for hair rebonding, smoothening and protein rituals.',
  },
  {
    id: 'gal-6',
    title: 'Organic Facial & Aesthetic Care',
    category: 'beauty',
    imageUrl: '/assets/original/beauty-mini-front.jpg',
    caption: '100% organic aroma skin treatments and complexion revival.',
  },
  {
    id: 'gal-7',
    title: 'Holistic Spa & Therapeutic Massages',
    category: 'spa',
    imageUrl: '/assets/original/spa-mini-front.jpg',
    caption: 'Ayurvedic Potli and Balinese aroma therapies for complete relaxation.',
  },
  {
    id: 'gal-8',
    title: 'Bridal & Groom Makeover Suite',
    category: 'beauty',
    imageUrl: '/assets/original/pack-mini-front5.jpg',
    caption: 'Full bridal attire, saree draping, and event makeover facilities.',
  },
];

export const CELEBRITY_CLIENTELE = [
  'Mandira Bedi',
  'Nawaz Modi Singhania',
  'Malavika Sangghvi',
  'Manasi Roy',
  'Laxmi Nayar',
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/Chens-Hair-Beauty-Salon-1717309218497444',
  instagram: 'https://www.instagram.com/annie_chen_salon/',
};
