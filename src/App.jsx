import React, { useState, useEffect } from 'react';

// --- Leaflet Imports ---
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS **HERE** or in main.jsx/index.js

// --- Lucide Icon Imports ---
import {
  Linkedin, Instagram, Phone, Mail, MapPin, Download, ChevronDown, Leaf,
  Droplet, Sun, Wind, Menu, X, Award, Globe, Handshake, Compass
} from 'lucide-react';

// --- Leaflet Icon Fix ---
// Addresses potential issues with default icon paths in module bundlers
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl; // Remove potentially problematic default method
L.Icon.Default.mergeOptions({ // Explicitly set icon paths
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});
// --- End Icon Fix ---

// --- Data Definitions ---
// In a larger app, move these to a separate file (e.g., src/data.js) and import them

// Image paths (assuming images are in the `public/images` directory)
const images = {
  // Corrected paths to start with '/' assuming they are in public/images/
  hero: 'images/hero_highlands_sunrise.jpg',
  solutionHands: 'images/pain_point_hands_cherries.jpg',
  yirgacheffe: 'images/yirgacheffe_washed.jpg',
  guji: 'images/guji_washed.jpg',
  sidama: 'images/sidama_washed.jpg',
  limu: 'images/limu_washed.jpg',
  processPicking: 'images/process_picking_cherries_hand.jpg',
  processWashed: 'images/process_washed_beans_water_channel.jpg',
  processSorting: 'images/process_hand_sorting.jpg',
  processGrading: 'images/process_q_grading_cupping_bowls.jpg',
  processExport: 'images/process_export_prep_burlap_sacks.jpg',
  ethicalTraining: 'images/ethical_farmers_training_collaboration.jpg',
  ethicalSchool: 'images/ethical_community_school_building.jpg',
  ethicalWomen: 'images/ethical_women_sorting_beans_confident.jpg',
  ethicalShade: 'images/ethical_environment_shade_trees.jpg',
  founderPortrait: 'images/about_founder_abel_tesfaye_sunrise.jpg',
  ctaBackground: 'images/cta_background_roasted_beans_blur.jpg'
};

// Navigation links
const navLinks = [
  { name: 'Our Coffees', href: '#our-coffees' },
  { name: 'Our Commitment', href: '#our-commitment' },
  { name: 'The Executive Difference', href: '#the-executive-difference' },
  { name: 'Contact', href: '#contact' },
];

// Coffee region data including approximate coordinates
const coffeeRegions = [
  { name: 'Yirgacheffe', lat: 6.16, lng: 38.20, image: images.yirgacheffe, profile: 'Ethereal & Citrus', notes: 'Jasmine, bergamot, lemon zest, light body, sparkling acidity.', processing: ['Washed', 'Natural'], score: '87-90+', altitude: '1700-2200m' },
  { name: 'Guji', lat: 5.90, lng: 39.50, image: images.guji, profile: 'Complex & Berry-Forward', notes: 'Blueberry, dark chocolate, floral hints, winey acidity, syrupy body.', processing: ['Washed', 'Natural', 'Honey'], score: '86-89+', altitude: '1800-2300m' },
  { name: 'Sidama', lat: 7.05, lng: 38.47, image: images.sidama, profile: 'Balanced & Sweet', notes: 'Stone fruit (peach), honey, brown sugar, medium body, bright acidity.', processing: ['Washed', 'Natural'], score: '85-88', altitude: '1500-2200m' },
  { name: 'Limu', lat: 7.67, lng: 36.83, image: images.limu, profile: 'Gentle & Spiced', notes: 'Mild spice, floral notes, rounded body, soft acidity, clean finish.', processing: ['Washed', 'Natural'], score: '84-87', altitude: '1400-2000m' },
];

// Processing steps data
const processSteps = [
  { title: 'Selective Hand-Picking', description: 'Ensuring only peak-ripeness cherries for optimal sweetness.', image: images.processPicking },
  { title: 'Precision Processing', description: 'Tailoring Washed, Natural, or Honey methods to unlock each bean\'s potential.', image: images.processWashed },
  { title: 'Multi-Stage Sorting', description: 'Removing imperfections by density, size, and hand-selection for uniformity.', image: images.processSorting },
  { title: 'Expert Q-Grading', description: 'Sensory analysis by certified Q-graders to guarantee quality and consistency.', image: images.processGrading },
  { title: 'Protective Export Prep', description: 'Preserving quality through GrainPro or equivalent liners and meticulous logistics.', image: images.processExport },
];

// Ethical sourcing images data with alt text
const ethicalImages = [
  { src: images.ethicalTraining, alt: 'Farmers collaborating during training session' },
  { src: images.ethicalSchool, alt: 'Rural school building in coffee region' },
  { src: images.ethicalWomen, alt: 'Ethiopian women sorting coffee beans' },
  { src: images.ethicalShade, alt: 'Coffee plants growing under shade trees' },
];

// Value proposition data using Lucide icons
const valueProps = [
  { icon: Award, title: "Quality Beyond Compare", text: "Access Ethiopia's elite Grade 1 Specialty Arabica (scoring 85+). Meticulously processed (Washed, Natural, Honey), triple-sorted, and expertly Q-graded.", emphasis: "Experience the pinnacle of Ethiopian flavor." },
  { icon: Globe, title: "Logistics Excellence", text: "Leverage our 5,000+ ton capacity and proven global logistics (USA, EU, Asia). Strategic warehousing ensures timely delivery.", emphasis: "Dependability you can build your business on." },
  { icon: Handshake, title: "Direct-Trade Integrity", text: "Direct partnerships with 500+ farming families ensure fair premiums, community investment, and stewardship. Full traceability.", emphasis: "Coffee with a conscience and a compelling story." },
  { icon: Compass, title: "Unmatched Origin Expertise", text: "Benefit from decades of hands-on experience. Receive personalized guidance and market insights for your specific needs.", emphasis: "Your trusted compass in Ethiopian coffee." }
];


// --- Reusable UI Components ---

/**
 * Generates Tailwind CSS class string for buttons and link buttons.
 * @param {string} variant - The style variant (e.g., 'primary', 'outline').
 * @param {string} size - The size variant (e.g., 'default', 'sm', 'lg').
 * @returns {string} - The combined Tailwind class string.
 */
const getButtonStyles = (variant = 'primary', size = 'default') => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  // Define styles for different variants
  const variants = {
    primary: 'bg-[#B08D57] text-[#4A2C2A] hover:bg-[#a8834f] focus-visible:ring-[#B08D57]',
    outline: 'border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57]/10',
    secondaryOutline: 'border border-[#A42A28] text-[#A42A28] hover:bg-[#A42A28]/10',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    // Specific variants combining base styles with contextual overrides
    headerOutlineScrolled: 'border-[#FAF0E6] text-[#FAF0E6] hover:bg-[#FAF0E6]/10',
    headerOutlineNotScrolled: 'border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57]/10',
    mobileMenuOutline: 'border-[#FAF0E6] text-[#FAF0E6] hover:bg-[#FAF0E6]/10',
    finalCtaPrimary: 'bg-[#B08D57] text-[#4A2C2A] hover:bg-[#a8834f] focus-visible:ring-[#B08D57] w-full sm:w-auto',
    finalCtaOutline: 'border border-[#FAF0E6] text-[#FAF0E6] hover:bg-[#FAF0E6]/10 w-full sm:w-auto',
  };
  // Define styles for different sizes
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md text-base',
    icon: 'h-10 w-10',
  };
  // Return combined class string
  return `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default}`;
};

/**
 * Button Component: Renders a standard HTML <button> element styled via Tailwind.
 */
const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }) => {
  return (
    <button className={`${getButtonStyles(variant, size)} ${className}`} {...props}>
      {children}
    </button>
  );
};

/**
 * LinkButton Component: Renders an <a> tag styled like a button using Tailwind.
 */
const LinkButton = ({ children, href, variant = 'primary', size = 'default', className = '', ...props }) => {
  return (
    <a href={href} className={`${getButtonStyles(variant, size)} ${className}`} role="button" {...props}>
      {children}
    </a>
  );
};

/**
 * Card Component - Container: Basic card structure.
 */
const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border border-black/10 bg-card text-card-foreground shadow-sm ${className} bg-white/50 backdrop-blur-sm`} {...props}>
    {children}
  </div>
);
// Card sub-components for structure
const CardHeader = ({ children, className = '', ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>;
const CardTitle = ({ children, className = '', as = 'h3', ...props }) => {
  const Tag = as;
  return <Tag className={`text-lg font-semibold leading-none tracking-tight font-serif text-[#4A2C2A] ${className}`} {...props}>{children}</Tag>;
};
const CardDescription = ({ children, className = '', ...props }) => <p className={`text-sm text-[#4A2C2A]/80 font-sans ${className}`} {...props}>{children}</p>;
const CardContent = ({ children, className = '', ...props }) => <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
// const CardFooter = ({ children, className = '', ...props }) => <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>{children}</div>; // Currently unused


// --- Section Components ---
// Breaking the UI into logical section components improves organization

/**
 * Header Component: Renders the site header and navigation.
 * Props:
 * isScrolled (bool): Indicates if the page is scrolled.
 * isMobileMenuOpen (bool): Indicates if the mobile menu is open.
 * toggleMobileMenu (func): Function to toggle the mobile menu.
 */
const Header = ({ isScrolled, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#4A2C2A]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-xl font-bold font-serif transition-colors ${isScrolled ? 'text-[#FAF0E6]' : 'text-[#B08D57]'}`}>
          Executive Coffee
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[#FAF0E6] hover:text-[#B08D57]' : 'text-[#4A2C2A] hover:text-[#B08D57]'}`}>
              {item.name}
            </a>
          ))}
          {/* Desktop Consultation Link (Styled Button) */}
          <LinkButton
            href="mailto:info@executivecoffeeexport.com?subject=Consultation%20Request"
            // Dynamically select variant based on scroll state
            variant={isScrolled ? 'headerOutlineScrolled' : 'headerOutlineNotScrolled'}
            size="sm"
            className="ml-4" // Add margin specific to this instance
          >
            Request Consultation
          </LinkButton>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-[#FAF0E6]' : 'text-[#4A2C2A]'}`} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

/**
 * MobileMenu Component: Renders the full-screen mobile navigation overlay.
 * Props:
 * isOpen (bool): Controls visibility of the menu.
 * toggleMenu (func): Function to close the menu.
 */
const MobileMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null; // Render nothing if menu is closed

  return (
    <div className="fixed inset-0 bg-[#4A2C2A]/95 backdrop-blur-sm z-[60] flex flex-col items-center justify-center space-y-8 md:hidden">
      {/* Close Button */}
      <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 text-[#FAF0E6] rounded-md" aria-label="Close menu">
        <X size={28} />
      </button>
      {/* Navigation Links */}
      {navLinks.map((item) => (
        <a key={item.name} href={item.href} className="text-2xl font-medium text-[#FAF0E6] hover:text-[#B08D57] transition-colors" onClick={toggleMenu}>
          {item.name}
        </a>
      ))}
      {/* Consultation Link (Styled Button) */}
      <LinkButton
        href="mailto:info@executivecoffeeexport.com?subject=Consultation%20Request"
        variant="mobileMenuOutline"
        size="lg"
        className="mt-6" // Add margin specific to this instance
        onClick={toggleMenu} // Close menu when clicked
      >
        Request Consultation
      </LinkButton>
    </div>
  );
};

/**
 * Hero Component: Renders the main hero section with background image and CTAs.
 */
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }}>
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      <div className="relative z-10 px-4 text-[#FAF0E6]">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 tracking-wide" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Ethiopia's Coffee Legacy. <span className="text-[#B08D57]">Elevated.</span>
        </h1>
        {/* Sub-headline */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-sans max-w-3xl mx-auto mb-8 font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Partner with Executive Coffee for meticulously sourced Grade 1 Ethiopian Arabica. Uncompromising quality, full traceability, and reliable delivery – direct from the cradle of coffee.
        </h2>
        {/* Primary CTA Link */}
        <LinkButton href="mailto:info@executivecoffeeexport.com?subject=Consultation%20Request" variant="primary" size="lg">
          Request a Consultation
        </LinkButton>
        <p className="text-xs mt-2 opacity-80">Let's discuss your specific needs.</p>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FAF0E6] opacity-70 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

/**
 * ChallengeSolution Component: Explains the market challenge and the company's solution.
 */
const ChallengeSolution = () => {
  return (
    <section id="challenge-solution" className="py-16 md:py-24 bg-[#FAF0E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#4A2C2A]">
          Tired of the Gamble? The Search for Exceptional <span className="text-[#3A5A40]">and</span> Reliable Ethiopian Coffee Ends Here.
        </h2>
        <p className="text-lg font-sans mb-12 text-[#4A2C2A]/80 leading-relaxed">
          Finding Ethiopian specialty coffee that consistently delivers on its promise – vibrant flavor, impeccable quality, ethical sourcing – is a challenge. Inconsistencies impact your roasts, your reputation, and your bottom line. You need more than a supplier; you need a dedicated partner grounded in origin.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#4A2C2A]">
              Executive Ethiopian Coffee: Your Direct Bridge to Coffee's Birthplace.
            </h3>
            <p className="text-md font-sans text-[#4A2C2A]/80 leading-relaxed">
              Founded by Abel Lemma, raised amidst Hawassa's legendary coffee farms, we merge generations of indigenous knowledge with rigorous quality control and seamless logistics. We are curators of Ethiopia's finest, ensuring every bean reflects its noble heritage and arrives ready to elevate your craft.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={images.solutionHands} alt="Hands holding ripe red coffee cherries" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[3/2]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};
/**
 * ValueProps Component: Displays the key value propositions using icons and text.
 */
const ValueProps = () => {
  return (
    <section id="the-executive-difference" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-[#4A2C2A]">
          The Executive Difference: Why Partner With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Map through value proposition data */}
          {valueProps.map((prop) => {
            const Icon = prop.icon; // Dynamically get the icon component
            return (
              <div key={prop.title} className="text-center p-6 bg-[#FAF0E6] rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <Icon className="w-12 h-12 mx-auto mb-4 text-[#B08D57]" strokeWidth={1.5} aria-hidden="true" />
                <h4 className="text-xl font-serif mb-2 text-[#4A2C2A]">{prop.title}</h4>
                <p className="text-sm font-sans text-[#4A2C2A]/80 leading-relaxed">
                  {prop.text} <span className="italic text-[#A42A28]">{prop.emphasis}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * CoffeeMap Component: Renders the interactive Leaflet map with markers and popups.
 */
const CoffeeMap = () => {
  return (
    <div className="mb-12 p-4 md:p-6 bg-[#F5F5DC]/50 rounded-lg shadow-lg border border-black/10 overflow-hidden"> {/* Added overflow-hidden */}
      <MapContainer center={[7.5, 38.5]} zoom={7} scrollWheelZoom={false} className="h-[400px] md:h-[500px] w-full rounded-md z-0">
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coffeeRegions.map((region) => (
          <Marker key={region.name} position={[region.lat, region.lng]} title={region.name}> {/* Added title attribute */}
            <Popup>
              <div className="w-48">
                <img src={region.image} alt={region.name} className="w-full h-20 object-cover rounded-t-md mb-2" />
                <h4 className="font-serif font-semibold text-base mb-1 text-[#4A2C2A]">{region.name}</h4>
                <p className="text-xs font-sans text-[#3A5A40] font-medium mb-1">{region.profile}</p>
                <p className="text-xs font-sans text-[#4A2C2A]/80">{region.notes}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

/**
 * CoffeeRegionCard Component: Renders a single card displaying coffee region details.
 * Props:
 * region (object): The coffee region data object.
 */
const CoffeeRegionCard = ({ region }) => {
  return (
    <Card key={region.name + "-card"} className="overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
      <img src={region.image} alt={`${region.name} coffee region landscape`} className="w-full h-48 object-cover" loading="lazy" />
      <CardHeader>
        <CardTitle>{region.name}</CardTitle>
        <CardDescription className="text-[#3A5A40] font-medium">{region.profile}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-sans text-[#4A2C2A]/80 mb-3">{region.notes}</p>
        <div className="text-xs font-sans text-[#4A2C2A]/70 space-y-1">
          <p><strong>Altitude:</strong> {region.altitude}</p>
          <p><strong>Score Range:</strong> {region.score}</p>
          <div className="flex items-center gap-2 mt-1">
            <strong>Processing:</strong>
            {region.processing.includes('Washed') && <Droplet size={14} title="Washed" />}
            {region.processing.includes('Natural') && <Sun size={14} title="Natural" />}
            {region.processing.includes('Honey') && <Wind size={14} title="Honey" />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * OurCoffees Section Component: Displays the coffee map and region cards.
 */
const OurCoffees = () => {
  return (
    <section id="our-coffees" className="py-16 md:py-24 bg-[#FAF0E6]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5DC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-[#4A2C2A]">
          Discover the Crown Jewels of Ethiopian Coffee
        </h2>
        <p className="text-lg font-sans text-center max-w-3xl mx-auto mb-12 md:mb-16 text-[#4A2C2A]/80">
          Explore the distinct terroirs that make Ethiopian coffee legendary. We offer meticulously sourced single-origin lots, preserving the unique aromatic tapestry of each region.
        </p>
        {/* Render the interactive map */}
        <CoffeeMap />
        {/* Render the grid of coffee cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeRegions.map((region) => (
            <CoffeeRegionCard key={region.name} region={region} />
          ))}
        </div>
        {/* CTA for samples/offerings */}
        <div className="text-center mt-12">
          <p className="text-md font-sans mb-6 text-[#4A2C2A]/80">
            *Certified Organic* and *Fair Trade* selections available. Inquire for exclusive micro-lots and unique experimental process offerings.
          </p>
          <LinkButton href="mailto:info@executivecoffeeexport.com?subject=Offerings%20and%20Samples%20Request" variant="outline" size="lg">
            Request Current Offerings & Samples
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

/**
 * ProcessTimeline Component: Visualizes the coffee processing steps.
 */
const ProcessTimeline = () => {
  return (
    <section id="our-process" className="py-16 md:py-24 bg-[#FAF0E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-[#4A2C2A]">
          The Art & Science of Perfection: Our Meticulous Journey
        </h2>
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 px-4">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#B08D57]/50 transform -translate-y-1/2" style={{ top: 'calc(5rem)' }}></div>
          {processSteps.map((step) => (
            <div key={step.title} className="relative flex flex-col items-center text-center w-full md:w-1/5 z-10 mb-8 md:mb-0">
              <div className="hidden md:block w-4 h-4 bg-[#B08D57] rounded-full border-2 border-[#FAF0E6] mb-4" style={{ marginTop: 'calc(5rem - 0.5rem)' }}></div>
              <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg shadow-md mb-4 border-2 border-[#F5F5DC]" loading="lazy" />
              <h4 className="text-lg font-serif mb-1 text-[#4A2C2A]">{step.title}</h4>
              <p className="text-sm font-sans text-[#A42A28] italic leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-md font-sans max-w-2xl mx-auto text-[#4A2C2A]/80">
          From fertile soil to final shipment, every step is guided by a commitment to preserving the inherent quality and unique story of Ethiopian coffee.
        </p>
      </div>
    </section>
  );
};

/**
 * EthicalSourcing Component: Highlights commitment to ethical practices.
 */
const EthicalSourcing = () => {
  return (
    <section id="our-commitment" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#4A2C2A]">
              More Than Fair Trade: Cultivating Shared Prosperity
            </h2>
            <p className="text-md font-sans mb-6 text-[#4A2C2A]/80 leading-relaxed">
              We believe exceptional coffee grows from thriving communities and a healthy environment. Our direct-trade model empowers <strong className="text-[#3A5A40]">500+ farming families</strong> through fair pricing, access to training in sustainable agriculture, and direct investment in community projects like schools and clean water initiatives. We actively promote women's roles in coffee production.
            </p>
            <h4 className="text-xl font-serif mb-3 text-[#4A2C2A]">Transparency You Can Taste, Trust You Can Share</h4>
            <p className="text-md font-sans mb-8 text-[#4A2C2A]/80 leading-relaxed">
              Know the source. Our traceable supply chain connects you directly to the origin, providing a powerful narrative of quality and positive impact for your brand and your customers.
            </p>
            {/* Button to learn more (assuming it links to another page/modal) */}
            <Button variant="secondaryOutline" size="default">
              <Leaf size={16} className="mr-2" /> Learn About Our Impact Initiatives
            </Button>
          </div>
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {ethicalImages.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} className="rounded-lg shadow-lg object-cover w-full h-48 transition-transform transform hover:scale-105 duration-300" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Founder Component: Introduces the founder of the company.
 */
const Founder = () => {
  return (
    <section id="meet-the-founder" className="py-16 md:py-24 bg-[#FAF0E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Founder Portrait */}
          <div className="md:w-1/3">
            <img src={images.founderPortrait} alt="Abel Lemma, Founder" className="rounded-full shadow-xl w-64 h-64 md:w-full md:h-auto object-cover mx-auto border-4 border-[#F5F5DC]" loading="lazy" />
          </div>
          {/* Founder Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#4A2C2A]">Rooted in Hawassa, Reaching the World</h3>
            <blockquote className="text-xl md:text-2xl font-sans italic text-[#4A2C2A]/70 border-l-4 border-[#B08D57] pl-4 py-2 my-6">
              "Coffee is more than a crop here; it's our heritage. My mission is to share its finest expression with the world, with integrity and respect for its origins."
              <span className="block text-right text-lg not-italic mt-2">– Abel Lemma, Founder</span>
            </blockquote>
            <p className="text-md font-sans text-[#4A2C2A]/80 leading-relaxed">
              Abel Lemma didn't just enter the coffee business; he was born into it. His lifelong connection to Ethiopia's coffee lands fuels Executive Coffee's commitment to excellence, partnership, and preserving the legacy of Ethiopian Arabica for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * CallToAction Component: The final call to action section before the footer.
 */
const CallToAction = () => {
  return (
    <section id="contact" className="py-20 md:py-28 text-center bg-cover bg-center relative" style={{ backgroundImage: `url(${images.ctaBackground})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#4A2C2A]/80"></div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-[#FAF0E6]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          Partner with Ethiopia's Premier Coffee Exporter
        </h2>
        <p className="text-lg md:text-xl font-sans max-w-3xl mx-auto mb-10 font-light" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.3)' }}>
          Ready to secure exceptional Ethiopian specialty coffee that delights your customers and builds your brand? Connect with our experts to explore tailored solutions, request samples, or receive a detailed quote.
        </p>
        {/* CTA Links (Styled Buttons) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <LinkButton href="mailto:info@executivecoffeeexport.com?subject=Personal%20Consultation%20Request" variant="finalCtaPrimary" size="lg">
            Request Your Personal Consultation
          </LinkButton>
          <LinkButton href="mailto:info@executivecoffeeexport.com?subject=Green%20Bean%20Sample%20Request" variant="finalCtaOutline" size="lg">
            Request Green Bean Samples
          </LinkButton>
        </div>
        {/* Download Link */}
        <a href="/profile.pdf" download className="inline-flex items-center text-sm mt-8 text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors">
          <Download size={16} className="mr-2" /> Download Company Profile (PDF)
        </a>
      </div>
    </section>
  );
};

/**
 * Footer Component: Renders the site footer with links and contact info.
 */
const Footer = () => {
  return (
    <footer className="bg-[#4A2C2A] text-[#FAF0E6]/80 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo, Copyright, Certifications */}
          <div className="md:col-span-1">
            <a href="#" className="text-lg font-bold font-serif text-[#FAF0E6] mb-2 block">
              Executive Coffee
            </a>
            <p className="text-xs">&copy; {new Date().getFullYear()} Executive Ethiopian Coffee Exporter. <br />Elevating Coffee Heritage.</p>
            <div className="mt-4 space-x-2">
              <span className="inline-block bg-[#F5F5DC]/20 text-[#F5F5DC] text-xs px-2 py-1 rounded">SCA Member</span>
              {/* Add other logos/badges here */}
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-[#FAF0E6] mb-3 font-serif tracking-wide">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#our-coffees" className="hover:text-[#B08D57] transition-colors">Our Coffees</a></li>
              <li><a href="#our-commitment" className="hover:text-[#B08D57] transition-colors">Our Commitment</a></li>
              <li><a href="#the-executive-difference" className="hover:text-[#B08D57] transition-colors">The Executive Difference</a></li>
              <li><a href="#privacy-policy" className="hover:text-[#B08D57] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-[#B08D57] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          {/* Column 3: Contact Details */}
          <div>
            <h5 className="font-semibold text-[#FAF0E6] mb-3 font-serif tracking-wide">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@executivecoffeeexport.com?subject=Consultation%20Request" className="inline-flex items-center hover:text-[#B08D57] transition-colors"><Mail size={14} className="mr-2" /> Request Consultation</a></li>
              <li><a href="mailto:sales@executivecoffeeexport.com" className="inline-flex items-center hover:text-[#B08D57] transition-colors"><Mail size={14} className="mr-2" /> sales@executivecoffeeexport.com</a></li>
              <li><a href="mailto:info@executivecoffeeexport.com" className="inline-flex items-center hover:text-[#B08D57] transition-colors"><Mail size={14} className="mr-2" /> info@executivecoffeeexport.com</a></li>
              <li><a href="tel:+251935993536" className="inline-flex items-center hover:text-[#B08D57] transition-colors"><Phone size={14} className="mr-2" /> +251 935 993 536 (WhatsApp)</a></li>
              <li><span className="inline-flex items-center"><MapPin size={14} className="mr-2" /> Bole Sub-City, Addis Ababa, Ethiopia</span></li>
              <li><span className="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.793 6.605 4.571 8.651-.162.844-.56 2.443-.983 3.817-.158.51.171.818.611.628 2.188-.93 4.124-2.413 5.469-3.719 1.101.193 2.24.299 3.404.299 6.627 0 12-4.975 12-11.111s-5.373-11.111-12-11.111zm-1.214 14.941c-.303 0-.582-.117-.797-.333l-1.138-1.138c-.429-.43-.429-1.125 0-1.554s1.125-.43 1.554 0l.818.818 2.818-2.818c.43-.43 1.125-.43 1.554 0s.43 1.125 0 1.554l-3.446 3.446c-.214.215-.493.333-.797.333zm6.428 0c-.303 0-.582-.117-.797-.333l-1.138-1.138c-.429-.43-.429-1.125 0-1.554s1.125-.43 1.554 0l.818.818 2.818-2.818c.43-.43 1.125-.43 1.554 0s.43 1.125 0 1.554l-3.446 3.446c-.214.215-.493.333-.797.333z" /></svg> WeChat: ExecutiveCoffeeETH</span></li>
            </ul>
          </div>
          {/* Column 4: Social Media */}
          <div>
            <h5 className="font-semibold text-[#FAF0E6] mb-3 font-serif tracking-wide">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Root Application Component ---
// This component now primarily manages state and orchestrates the rendering
// of the section components defined above.

function App() {
  // State for header background visibility on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll events and body overflow locking
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Prevent scrolling of the body when the mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    // Cleanup function to remove listener and reset overflow
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]); // Rerun when mobile menu state changes

  // Function passed down to toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Render the main application structure using the section components
  return (
    <div className="bg-[#FAF0E6] text-[#4A2C2A] font-sans antialiased">
      {/* Render Header, passing necessary state and handlers */}
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* Render Mobile Menu Overlay, passing state and handler */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

      {/* Render Main Content Sections */}
      {/* Apply blur effect to main content when mobile menu is open */}
      <main className={`${isMobileMenuOpen ? 'blur-sm' : ''} transition-filter duration-300`}>
        <Hero />
        <ChallengeSolution />
        <ValueProps />
        <OurCoffees />
        <ProcessTimeline />
        <EthicalSourcing />
        <Founder />
        <CallToAction />
      </main>

      {/* Render Footer */}
      <Footer />
    </div>
  );
}

export default App; // Export the main App component
