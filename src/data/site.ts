/**
 * All site copy and business data lives here — components only render it.
 * Structured per locale so a Spanish version can be added as `es` later.
 *
 * Items marked `TODO(client)` need confirmation before launch.
 */
import type { ImageMetadata } from 'astro';

// Photos and logos exported from the previous Wix site (Nov 2026).
import imgOfficePoster from '@/assets/projects/office-video-poster.jpg';
import imgFramingLift from '@/assets/projects/metal-stud-framing-lift.jpg';
import imgConference from '@/assets/projects/office-conference.jpg';
import imgReception2 from '@/assets/projects/office-reception-2.jpg';
import imgUnd from '@/assets/projects/und-delta-upsilon.jpg';
import imgResidential from '@/assets/projects/residential-interior.jpg';
import imgFramingWindows from '@/assets/projects/commercial-framing-windows.jpg';
import imgReception from '@/assets/projects/office-reception.jpg';
import imgCeiling from '@/assets/projects/office-ceiling-lighting.jpg';
import imgFeatureWall from '@/assets/projects/office-feature-wall.jpg';
import imgDrywall from '@/assets/projects/drywall-in-progress.jpg';
import imgFinishedOffice from '@/assets/projects/finished-office.jpg';
import svcCeilings from '@/assets/services/acoustic-ceilings.jpg';
import svcCarpentry from '@/assets/services/finish-carpentry.jpg';
import svcTile from '@/assets/services/ceramic-tile.jpg';
import svcLaminate from '@/assets/services/laminate.jpg';
import logoBps from '@/assets/logos/clients/bismarck-public-schools.png';
import logoMandan from '@/assets/logos/clients/mandan-public-schools.png';
import logoSchilling from '@/assets/logos/clients/schilling-properties.png';
import logoVision from '@/assets/logos/clients/vision-construction.png';
import logoRiddles from '@/assets/logos/clients/riddles-jewelry.png';
import logoFernandoConstruction from '@/assets/logos/group/fernando-construction.png';
import logoFargo from '@/assets/logos/group/fargo-contracting.png';
import logoWhiteDiamond from '@/assets/logos/group/white-diamond-construction.png';

export type Locale = 'en';

export interface Office {
  id: string;
  label: string;
  street: string;
  suite: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  /** Used for the schema.org address and the map link */
  mapQuery: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short version for the home page (sentences taken from the full text) */
  summary: string;
  /** Full text from the client's Services page */
  body: string;
  points: { name: string; detail: string }[];
  tier: 'core' | 'complementary';
  /** The photo the old Services page showed next to this service */
  image: Photo;
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Logo {
  name: string;
  logo: ImageMetadata;
  url?: string;
  detail?: string;
}

export interface ProjectGroup {
  title: string;
  text: string;
  photos: Photo[];
}

/* ---------------------------------------------------------------------- */
/* Business facts (locale-independent)                                     */
/* ---------------------------------------------------------------------- */

export const business = {
  // TODO(client): confirm primary brand. The old home page lists Fernando Construction
  // under "Other Companies Owned by Fernando", so it is a group company. Site has used "Companies by Fernando",
  // "Fernando Companies" and "Fernando Construction". Legal name: Fernando Companies.
  name: 'Fernando Companies',
  legalName: 'Fernando Companies',
  founder: 'Fernando Lopez',
  founded: 2018,
  url: 'https://www.fernandocompanies.com',
  phone: { display: '(713) 689-8158', href: 'tel:+17136898158', e164: '+1-713-689-8158' },
  email: 'FC@fernandocompanies.com',
  states: ['North Dakota', 'Texas'],
  offices: [
    {
      id: 'bismarck',
      label: 'Head Office — Bismarck',
      street: '1400 43rd Ave NE',
      suite: 'Suite 320',
      city: 'Bismarck',
      region: 'ND',
      postalCode: '58503',
      country: 'US',
      mapQuery: '1400 43rd Ave NE Suite 320, Bismarck, ND 58503',
    },
    {
      id: 'houston',
      label: 'Houston Office — Spring',
      street: '1790 Hughes Landing Blvd',
      suite: 'Ste 400',
      city: 'Spring',
      region: 'TX',
      postalCode: '77380',
      country: 'US',
      mapQuery: '1790 Hughes Landing Blvd Ste 400, Spring, TX 77380',
    },
  ] satisfies Office[],
  // TODO(client): add social profiles, office hours, licenses / insurance / certifications.
  social: [] as { name: string; url: string }[],
  hours: null as string | null,
  credentials: [] as string[],
  academy: {
    name: 'Foreman Academy',
    // TODO(client): set once the subdomain is live, e.g. https://academy.fernandocompanies.com
    url: null as string | null,
  },
} as const;

/* ---------------------------------------------------------------------- */
/* Copy                                                                     */
/* All visible text below is the client's own wording from the Wix site    */
/* (Home, About, Services, Contact). Do not add claims they did not make.   */
/* Only meta descriptions and form/UI labels are written for the new site.  */
/* ---------------------------------------------------------------------- */

const en = {
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/#projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  cta: { primary: 'Contact Us', phone: 'Call' },

  meta: {
    home: {
      title: 'Fernando Companies | Metal Framing, Drywall & Acoustic Ceilings',
      description:
        'Founded by Fernando Lopez in North Dakota. Metal framing, drywall, acoustic ceilings, finish carpentry, tile, laminate and painting for commercial projects.',
    },
    about: {
      title: 'About Us | Fernando Companies',
      description:
        'A subcontractor serving North Dakota and the surrounding regions since 2018: high schools, healthcare facilities, banks and other commercial buildings.',
    },
    services: {
      title: 'Services | Fernando Companies',
      description:
        'Metal framing, drywall, acoustic ceilings, finish carpentry, ceramic tile, laminate and painting for commercial and residential projects.',
    },
    contact: {
      title: 'Contact | Fernando Companies',
      description:
        'Have questions? Send us a message or call (713) 689-8158. Offices in Bismarck, ND and Spring (Houston), TX.',
    },
    notFound: {
      title: 'Page not found | Fernando Companies',
      description: 'The page you were looking for does not exist.',
    },
  },

  hero: {
    title: 'Welcome to Companies by Fernando',
    lede:
      'Founded by Fernando Lopez in North Dakota. We are dedicated to delivering exceptional craftsmanship and dependable service. We take the time to understand your unique needs and work closely with you to ensure your project is completed on time, within budget, and to the highest standards.',
    secondary: 'Our Services',
    video: {
      poster: imgOfficePoster,
      sources: [
        { src: '/video/office-640.mp4', media: '(max-width: 767px)' },
        { src: '/video/office-1080.mp4' },
      ],
      label: 'Fernando Lopez at work in the Bismarck office',
    },
    facts: [
      { value: '2018', label: 'Established' },
      { value: 'Bismarck', label: 'Head office, North Dakota' },
      { value: 'Houston', label: 'Office in Spring, Texas' },
    ],
  },

  servicesIntro: {
    title: 'Our Services',
    /** Home page cards: the four services and photos the old home page showed, in its order */
    home: [
      { slug: 'metal-framing', image: { src: imgFramingLift, alt: 'Metal stud partitions going up next to a scissor lift' } },
      { slug: 'acoustic-ceilings', image: { src: imgConference, alt: 'Acoustic tile ceiling with pendant lights in a finished conference room' } },
      { slug: 'drywall', image: { src: imgReception2, alt: 'Finished reception area with smooth drywall and a wood slat wall' } },
      { slug: 'finish-carpentry', image: { src: imgFeatureWall, alt: 'Wood slat feature wall in a finished lobby' } },
    ] satisfies { slug: string; image: Photo }[],
    alsoLabel: 'Also',
    learnMore: 'Learn more',
    coreLabel: 'Main services',
    complementaryLabel: 'Additional services',
    more: 'View all services',
  },

  services: [
    {
      slug: 'metal-framing',
      image: { src: imgFramingLift, alt: 'Metal stud partitions going up next to a scissor lift' },
      name: 'Metal Framing',
      tier: 'core',
      summary:
        'High-quality metal framing solutions for commercial projects. Our steel frames provide unmatched strength, durability, and fire resistance, ensuring a solid foundation for your building.',
      body:
        'At Fernando Construction, we specialize in high-quality metal framing solutions for commercial projects. Our steel frames provide unmatched strength, durability, and fire resistance, ensuring a solid foundation for your building. With precision-engineered components and expert installation, we deliver fast, cost-effective, and long-lasting results. Trust us to build the framework that stands the test of time.',
      points: [],
    },
    {
      slug: 'drywall',
      image: { src: imgDrywall, alt: 'Large open floor with drywall hung on perimeter walls' },
      name: 'Drywall',
      tier: 'core',
      summary:
        'Top-quality drywall installation and finishing services for residential and commercial projects. Smooth, flawless walls and ceilings that not only look great but also stand the test of time.',
      body:
        'At Fernando Construction, we specialize in delivering top-quality drywall installation and finishing services for residential and commercial projects. Our experienced team ensures smooth, flawless walls and ceilings that not only look great but also stand the test of time. We offer precision, speed, and outstanding craftsmanship to complete your project on time and within budget.',
      points: [
        { name: 'Seamless Finish', detail: 'We take extra care to provide smooth, clean, and even surfaces that are ready for painting or other finishes.' },
        { name: 'Durable & Long-Lasting', detail: 'Our drywall is installed to the highest standards, ensuring it’s strong, resistant to wear, and ready to endure everyday use.' },
        { name: 'Fast & Efficient', detail: 'With expert installers and streamlined processes, we get your drywall up quickly without compromising quality.' },
        { name: 'Affordable', detail: 'We offer competitive pricing without sacrificing quality, ensuring you get the best value for your investment.' },
      ],
    },
    {
      slug: 'acoustic-ceilings',
      image: { src: svcCeilings, alt: 'Suspended acoustic ceiling grid with tiles and recessed lights' },
      name: 'Acoustic Ceilings',
      tier: 'core',
      summary:
        'Acoustic ceilings that enhance both the sound quality and aesthetic of your space. Whether for offices, schools, or commercial environments, our systems reduce noise, improve privacy, and create a more comfortable atmosphere.',
      body:
        'At Fernando Construction, we specialize in installing acoustic ceilings that enhance both the sound quality and aesthetic of your space. Whether for offices, schools, or commercial environments, our expertly crafted acoustic systems reduce noise, improve privacy, and create a more comfortable atmosphere. With a range of designs and materials, we offer tailored solutions that blend seamlessly with your interior, delivering both functionality and style.',
      points: [],
    },
    {
      slug: 'finish-carpentry',
      image: { src: svcCarpentry, alt: 'Crown molding installed along a ceiling' },
      name: 'Finish Carpentry',
      tier: 'complementary',
      summary: 'Custom trim, moldings, and cabinetry to door and window installations.',
      body:
        'At Fernando Construction, our finish carpentry services elevate your space with fine, detailed woodwork that enhances both function and design. From custom trim, moldings, and cabinetry to door and window installations, our skilled carpenters deliver flawless results that add character and value to your home or business.',
      points: [],
    },
    {
      slug: 'ceramic-tile',
      image: { src: svcTile, alt: 'White rectangular ceramic wall tile' },
      name: 'Ceramic Tile',
      tier: 'complementary',
      summary: 'Sleek offices, stylish retail spaces, or durable restaurant floors.',
      body:
        'At Fernando Construction, we specialize in high-quality ceramic tile installations for commercial projects. Whether you’re designing a sleek office, stylish retail space, or durable restaurant floors, our expert team delivers precision installation with a focus on both functionality and aesthetics. We offer a wide selection of tiles that provide long-lasting durability, easy maintenance, and a polished look that enhances your brand image. Let us help create a professional, sophisticated environment that stands the test of time.',
      points: [],
    },
    {
      slug: 'laminate',
      image: { src: svcLaminate, alt: 'Light oak laminate flooring planks' },
      name: 'Laminate',
      tier: 'complementary',
      summary: 'Offices, retail spaces, or hospitality environments with heavy foot traffic.',
      body:
        'At Fernando Construction, we specialize in professional laminate flooring installations for commercial projects. Our laminate options combine the look of hardwood, stone, and other premium materials with the durability and low-maintenance benefits that busy commercial spaces demand. Whether you’re outfitting offices, retail spaces, or hospitality environments, our laminate flooring provides a cost-effective, attractive solution that stands up to heavy foot traffic while enhancing the overall aesthetic of your business.',
      points: [],
    },
    {
      slug: 'painting',
      image: { src: imgFinishedOffice, alt: 'Finished office with painted accent wall and glass partitions' },
      name: 'Painting',
      tier: 'complementary',
      summary: 'Interior and exterior painting for residential and commercial properties.',
      body:
        'We provide professional painting services for residential and commercial properties. Our team delivers smooth, even finishes, transforming your space with quality paint and attention to detail. Whether it’s interior or exterior, we ensure each project is completed on time and to your satisfaction.',
      points: [],
    },
  ] satisfies Service[],

  projects: {
    title: 'Projects',
    groups: [
      {
        title: 'Commercial Projects',
        text:
          'We specialize in commercial projects. These range from educational facilities, healthcare sites, restaurants, churches, and much more. We create functional commercial spaces that elevate businesses. Our team is committed to delivering excellence in every project, ensuring that your vision becomes a reality.',
        photos: [
          { src: imgFramingWindows, alt: 'Two-story metal stud walls framed around a tall curtain-wall window' },
          { src: imgReception, alt: 'Finished reception desk in front of a wood slat feature wall' },
        ],
      },
      {
        title: 'Residential Projects',
        text:
          'At Fernando Construction we enjoy staying involved in our community. Displayed is our work performed in the University of North Dakota Delta Upsilon property and the Schilling Building Apartments.',
        photos: [
          { src: imgUnd, alt: 'Common room with vaulted wood ceiling at the University of North Dakota Delta Upsilon property' },
          // TODO(client): confirm this photo is from the Schilling Building Apartments
          { src: imgResidential, alt: 'Open-plan living and dining area with pendant lights at the Schilling Building Apartments' },
        ],
      },
    ] satisfies ProjectGroup[],
  },

  /** Large background photos (parallax), the way the old site used them */
  backgrounds: {
    services: imgFramingLift,
    servicesPage: imgCeiling,
    aboutPage: imgFramingWindows,
    contactPage: imgDrywall,
  },

  clients: {
    title: 'Some Of Our Valuable Clients',
    // TODO(client): one more client logo on the old site could not be exported; ask for it.
    items: [
      { name: 'Bismarck Public Schools', logo: logoBps },
      { name: 'Mandan Public School District', logo: logoMandan },
      { name: 'Schilling Properties', logo: logoSchilling },
      { name: 'Vision Construction', logo: logoVision },
      { name: 'Riddle’s Jewelry', logo: logoRiddles },
    ] satisfies Logo[],
  },

  whyUs: {
    title: 'Why Choose Us?',
    lede: 'We value the success of your projects and take pride in our quality work.',
    body:
      'With years of industry experience, we prioritize understanding your unique needs and delivering results that exceed expectations. Our skilled team ensures every project is completed to the highest standards, making us a trusted partner for your projects needs.',
  },

  testimonial: {
    quote: 'His work ethic is beyond anything I’ve ever seen, and the quality of workmanship is there.',
    name: 'Cary Schilling',
    role: 'North Dakota',
    source: 'River and Ranch Magazine — “Condos and Townhomes,” June/July 2022',
  },

  offices: {
    title: 'Our Offices',
  },

  group: {
    title: 'Other Companies Owned by Fernando',
    // TODO(client): website links for each company, and the restaurant if it should be listed.
    companies: [
      { name: 'Fernando Construction', logo: logoFernandoConstruction },
      { name: 'Fargo Contracting', logo: logoFargo },
      { name: 'White Diamond Construction Company', logo: logoWhiteDiamond },
    ] satisfies Logo[],
  },

  ctaBand: {
    title: 'Let’s build something great together!',
    lede: [
      'Our commitment goes beyond construction — we build lasting relationships, grounded in trust and mutual success. Your satisfaction is our priority, and we pride ourselves on turning every project into a lasting relationship.',
      'We invite you to reach out with any questions.',
    ],
  },

  about: {
    eyebrow: 'About Us',
    title: 'At Fernando Construction',
    body: [
      'Fernando Construction is a leading subcontractor serving North Dakota and the surrounding regions. Since our establishment in 2018, we have proudly contributed to numerous large-scale projects, including high schools, healthcare facilities, banks, and other commercial buildings. Our team is dedicated to delivering top-quality work on schedule while prioritizing safety at every stage of our projects.',
      'Over the years, we have built and sustained valuable relationships across the industry, and we look forward to welcoming you to the Fernando Construction family. We are deeply committed to the success of all our construction endeavors and strive to consistently deliver exceptional results.',
    ],
    buildingTypes: 'High schools, healthcare facilities, banks, and other commercial buildings',
  },

  contact: {
    eyebrow: 'Get in Touch',
    title: 'Have Questions? Reach Out to Us',
    lede: 'We’d love to hear from you. Feel free to send us a message using the form below or give us a call at (713) 689-8158.',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      message: 'How can we help you?',
      submit: 'Send Message',
      sending: 'Sending…',
      success: 'Message Received!',
      error: 'The message could not be sent. Please call (713) 689-8158 or email FC@fernandocompanies.com.',
      notConfigured: 'The online form is not connected yet. Please call (713) 689-8158 or email FC@fernandocompanies.com.',
    },
    officesTitle: 'Our Offices',
    showMap: 'Show map',
    directions: 'Directions',
  },

  footer: {
    tagline: 'Founded by Fernando Lopez in North Dakota.',
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'Page not found',
    lede: 'This page may have moved with the new website.',
    back: 'Back to home',
  },
};

export type SiteCopy = typeof en;

const copy: Record<Locale, SiteCopy> = { en };

export function t(locale: Locale = 'en'): SiteCopy {
  return copy[locale];
}
