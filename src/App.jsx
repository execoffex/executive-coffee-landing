import React, { useState, useEffect } from 'react';
// Import Lucide icons (assuming lucide-react is installed)
// You might need to install it: npm install lucide-react
import { Linkedin, Instagram, Phone, Mail, MapPin, Download, ChevronDown, Coffee, Leaf, Globe, Users, Award, Ship, Droplet, Sun, Wind } from 'lucide-react';

// --- Image URL Mapping ---
const images = {
  hero: 'images/hero_highlands_pano_mist.png',
  solutionHands: 'images/solution_hands_seedling_soil.png',
  qualitySeal: 'images/image_quality_seal.png',
  globalRoutes: 'images/image_global_routes.png',
  partnershipLeaf: 'images/image_partnership_leaf.png',
  expertiseCompass: 'images/image_expertise_compass.png',
  yirgacheffe: 'images/coffee_region_yirgacheffe_misty.png',
  guji: 'images/coffee_region_guji_landscape_beans.png',
  sidama: 'images/coffee_region_sidama_grove_sunlight.png',
  limu: 'images/coffee_region_limu_shaded_plantation.png',
  processPicking: 'images/process_picking_cherries_hand.png',
  processWashed: 'images/process_washed_beans_water_channel.png',
  processSorting: 'images/process_sorting_hands_beans_table.png',
  processGrading: 'images/process_q_grading_cupping_bowls.png',
  processExport: 'images/process_export_prep_burlap_sacks.png',
  ethicalTraining: 'images/ethical_farmers_training_collaboration.png',
  ethicalSchool: 'images/ethical_community_school_building.png',
  ethicalWomen: 'images/ethical_women_sorting_beans_confident.png',
  ethicalShade: 'images/ethical_environment_shade_trees.png',
  founderPortrait: 'images/about_founder_abel_tesfaye_sunrise.png',
  ctaBackground: 'images/cta_background_roasted_beans_blur.png'
};
// --- Helper Components ---

// Button Component (Simulating shadcn/ui style)
const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variantStyles = {
    primary: 'bg-[#B08D57] text-[#4A2C2A] hover:bg-[#a8834f] focus-visible:ring-[#B08D57]', // Refined Gold/Bronze
    outline: 'border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57]/10', // Refined Gold/Bronze Outline
    secondaryOutline: 'border border-[#A42A28] text-[#A42A28] hover:bg-[#A42A28]/10', // Muted Coffee Cherry Red Outline
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md text-base', // Larger for primary CTAs
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component (Simulating shadcn/ui style)
const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className} bg-white/50 backdrop-blur-sm`} {...props}>
    {children}
  </div>
);
const CardHeader = ({ children, className = '', ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>;
const CardTitle = ({ children, className = '', as = 'h3', ...props }) => {
  const Tag = as;
  return <Tag className={`text-lg font-semibold leading-none tracking-tight font-serif text-[#4A2C2A] ${className}`} {...props}>{children}</Tag>;
};
const CardDescription = ({ children, className = '', ...props }) => <p className={`text-sm text-[#4A2C2A]/80 font-sans ${className}`} {...props}>{children}</p>;
const CardContent = ({ children, className = '', ...props }) => <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
const CardFooter = ({ children, className = '', ...props }) => <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>{children}</div>;


// --- Main App Component ---

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Section Data ---
  const coffeeRegions = [
    { name: 'Yirgacheffe', image: images.yirgacheffe, profile: 'Ethereal & Citrus', notes: 'Jasmine, bergamot, lemon zest, light body, sparkling acidity.', processing: ['Washed', 'Natural'], score: '87-90+', altitude: '1700-2200m' },
    { name: 'Guji', image: images.guji, profile: 'Complex & Berry-Forward', notes: 'Blueberry, dark chocolate, floral hints, winey acidity, syrupy body.', processing: ['Washed', 'Natural', 'Honey'], score: '86-89+', altitude: '1800-2300m' },
    { name: 'Sidama', image: images.sidama, profile: 'Balanced & Sweet', notes: 'Stone fruit (peach), honey, brown sugar, medium body, bright acidity.', processing: ['Washed', 'Natural'], score: '85-88', altitude: '1500-2200m' },
    { name: 'Limu', image: images.limu, profile: 'Gentle & Spiced', notes: 'Mild spice, floral notes, rounded body, soft acidity, clean finish.', processing: ['Washed', 'Natural'], score: '84-87', altitude: '1400-2000m' },
  ];

  const processSteps = [
      { title: 'Selective Hand-Picking', description: 'Ensuring only peak-ripeness cherries for optimal sweetness.', image: images.processPicking },
      { title: 'Precision Processing', description: 'Tailoring Washed, Natural, or Honey methods to unlock each bean\'s potential.', image: images.processWashed }, // Example shows washed
      { title: 'Multi-Stage Sorting', description: 'Removing imperfections by density, size, and hand-selection for uniformity.', image: images.processSorting },
      { title: 'Expert Q-Grading', description: 'Sensory analysis by certified Q-graders to guarantee quality and consistency.', image: images.processGrading },
      { title: 'Protective Export Prep', description: 'Preserving quality through GrainPro or equivalent liners and meticulous logistics.', image: images.processExport },
  ];

  const ethicalImages = [
      { src: images.ethicalTraining, alt: 'Farmers collaborating during training' },
      { src: images.ethicalSchool, alt: 'School funded by coffee premiums' },
      { src: images.ethicalWomen, alt: 'Women managing a drying station' },
      { src: images.ethicalShade, alt: 'Environmental conservation with shade trees' },
  ];

  // --- Render ---
  return (
    <div className="bg-[#FAF0E6] text-[#4A2C2A] font-sans antialiased"> {/* Creamy Off-White base */}
      {/* --- Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#4A2C2A]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo Placeholder */}
          <a href="#" className={`text-xl font-bold font-serif ${isScrolled ? 'text-[#FAF0E6]' : 'text-[#B08D57]'}`}>
            Executive Coffee
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {['Our Coffees', 'Our Commitment', 'The Executive Difference', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[#FAF0E6] hover:text-[#B08D57]' : 'text-[#4A2C2A] hover:text-[#B08D57]'}`}
              >
                {item}
              </a>
            ))}
             <Button variant="outline" size="sm" className={`ml-4 ${isScrolled ? 'border-[#FAF0E6] text-[#FAF0E6] hover:bg-[#FAF0E6]/10' : 'border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57]/10'}`}>
                Request Consultation
             </Button>
          </div>
          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden">
            <button className={`p-2 rounded-md ${isScrolled ? 'text-[#FAF0E6]' : 'text-[#4A2C2A]'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* --- 1. Hero Section --- */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }}>
          <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
          <div className="relative z-10 px-4 text-[#FAF0E6]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 tracking-wide" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Ethiopia's Coffee Legacy. <span className="text-[#B08D57]">Elevated.</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-sans max-w-3xl mx-auto mb-8 font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Partner with Executive Coffee for meticulously sourced Grade 1 Ethiopian Arabica. Uncompromising quality, full traceability, and reliable delivery – direct from the cradle of coffee.
            </h2>
            <Button size="lg">
              Request a Consultation
            </Button>
            <p className="text-xs mt-2 opacity-80">Let's discuss your specific needs.</p>
            {/* Optional Trust Element */}
            {/* <p className="text-sm mt-12 opacity-70">Trusted by leading specialty roasters globally.</p> */}
          </div>
          {/* Subtle scroll down indicator */}
           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FAF0E6] opacity-70 animate-bounce">
             <ChevronDown size={24} />
           </div>
        </section>

        {/* --- 2. The Challenge & The Executive Solution --- */}
        <section id="challenge-solution" className="py-16 md:py-24 bg-[#FAF0E6]"> {/* Creamy Off-White */}
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
                        Founded by Abel Tesfaye, raised amidst Hawassa's legendary coffee farms, we merge generations of indigenous knowledge with rigorous quality control and seamless logistics. We are curators of Ethiopia's finest, ensuring every bean reflects its noble heritage and arrives ready to elevate your craft.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={images.solutionHands} alt="Hands tending to a coffee seedling" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[3/2]" loading="lazy" />
                     {/* Placeholder for animated map:
                     <div className="w-full h-64 bg-[#F5F5DC] rounded-lg flex items-center justify-center text-[#4A2C2A]/50">
                         [Animated SVG Map Placeholder: Ethiopia -> Hawassa]
                     </div>
                     */}
                </div>
            </div>
          </div>
        </section>

        {/* --- 3. The Executive Difference (Value Proposition) --- */}
        <section id="the-executive-difference" className="py-16 md:py-24 bg-[#F5F5DC]"> {/* Warm Beige */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-[#4A2C2A]">
              The Executive Difference: Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {/* Benefit 1: Quality */}
              <div className="text-center p-6 bg-[#FAF0E6] rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <img src={images.qualitySeal} alt="Quality Grading Symbol" className="w-16 h-16 mx-auto mb-4" loading="lazy"/>
                <h4 className="text-xl font-serif mb-2 text-[#4A2C2A]">Quality Beyond Compare</h4>
                <p className="text-sm font-sans text-[#4A2C2A]/80 leading-relaxed">
                  Access Ethiopia's elite Grade 1 Specialty Arabica (scoring 85+). Meticulously processed (Washed, Natural, Honey), triple-sorted, and expertly Q-graded. <span className="italic text-[#A42A28]">Experience the pinnacle of Ethiopian flavor.</span>
                </p>
              </div>
              {/* Benefit 2: Logistics */}
              <div className="text-center p-6 bg-[#FAF0E6] rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <img src={images.globalRoutes} alt="Global Trade Routes" className="w-16 h-16 mx-auto mb-4" loading="lazy"/>
                <h4 className="text-xl font-serif mb-2 text-[#4A2C2A]">Logistics Excellence</h4>
                <p className="text-sm font-sans text-[#4A2C2A]/80 leading-relaxed">
                  Leverage our 5,000+ ton capacity and proven global logistics (USA, EU, Asia). Strategic warehousing ensures timely delivery. <span className="italic text-[#A42A28]">Dependability you can build your business on.</span>
                </p>
              </div>
              {/* Benefit 3: Direct Trade */}
              <div className="text-center p-6 bg-[#FAF0E6] rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <img src={images.partnershipLeaf} alt="Partnership Icon" className="w-16 h-16 mx-auto mb-4" loading="lazy"/>
                <h4 className="text-xl font-serif mb-2 text-[#4A2C2A]">Direct-Trade Integrity</h4>
                <p className="text-sm font-sans text-[#4A2C2A]/80 leading-relaxed">
                  Direct partnerships with 500+ farming families ensure fair premiums, community investment, and stewardship. Full traceability. <span className="italic text-[#A42A28]">Coffee with a conscience and a compelling story.</span>
                </p>
              </div>
              {/* Benefit 4: Expertise */}
              <div className="text-center p-6 bg-[#FAF0E6] rounded-lg shadow-sm transition-shadow hover:shadow-md">
                <img src={images.expertiseCompass} alt="Origin Expertise Icon" className="w-16 h-16 mx-auto mb-4" loading="lazy"/>
                <h4 className="text-xl font-serif mb-2 text-[#4A2C2A]">Unmatched Origin Expertise</h4>
                <p className="text-sm font-sans text-[#4A2C2A]/80 leading-relaxed">
                  Benefit from decades of hands-on experience. Receive personalized guidance and market insights for your specific needs. <span className="italic text-[#A42A28]">Your trusted compass in Ethiopian coffee.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. Our Coffees: Ethiopia's Crown Jewels --- */}
        <section id="our-coffees" className="py-16 md:py-24 bg-[#FAF0E6]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5DC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}> {/* Subtle pattern */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-[#4A2C2A]">
              Discover the Crown Jewels of Ethiopian Coffee
            </h2>
            <p className="text-lg font-sans text-center max-w-3xl mx-auto mb-12 md:mb-16 text-[#4A2C2A]/80">
              Explore the distinct terroirs that make Ethiopian coffee legendary. We offer meticulously sourced single-origin lots, preserving the unique aromatic tapestry of each region.
            </p>

            {/* Interactive Map Placeholder */}
            <div className="mb-12 p-6 bg-[#F5F5DC] rounded-lg shadow text-center text-[#4A2C2A]/60">
                [Interactive Map Placeholder - Hotspots for Yirgacheffe, Guji, Sidama, Limu]
                <br/>
                <span className="text-sm italic">(On hover/click, show details below)</span>
            </div>

            {/* Coffee Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coffeeRegions.map((region) => (
                <Card key={region.name} className="overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
                  <img src={region.image} alt={`${region.name} coffee region`} className="w-full h-48 object-cover" loading="lazy"/>
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
                            {region.processing.includes('Honey') && <Wind size={14} title="Honey" />} {/* Using Wind for Honey */}
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-md font-sans mb-6 text-[#4A2C2A]/80">
                *Certified Organic* and *Fair Trade* selections available. Inquire for exclusive micro-lots and unique experimental process offerings.
              </p>
              <Button variant="outline" size="lg">
                Request Current Offerings & Samples
              </Button>
            </div>
          </div>
        </section>

        {/* --- 5. Our Process: The Art & Science of Perfection --- */}
        <section id="our-process" className="py-16 md:py-24 bg-[#FAF0E6]"> {/* Crisp Off-White */}
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-[#4A2C2A]">
               The Art & Science of Perfection: Our Meticulous Journey
             </h2>
             <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 px-4">
                {/* Connecting Line (for desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#B08D57]/50 transform -translate-y-1/2" style={{top: 'calc(5rem)'}}></div>

                {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex flex-col items-center text-center w-full md:w-1/5 z-10 mb-8 md:mb-0">
                        {/* Dot on the line */}
                        <div className="hidden md:block w-4 h-4 bg-[#B08D57] rounded-full border-2 border-[#FAF0E6] mb-4" style={{marginTop: 'calc(5rem - 0.5rem)'}}></div>
                        {/* Image */}
                        <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg shadow-md mb-4 border-2 border-[#F5F5DC]" loading="lazy"/>
                        {/* Content */}
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

        {/* --- 6. Ethical Sourcing: Investing in People & Planet --- */}
        <section id="our-commitment" className="py-16 md:py-24 bg-[#F5F5DC]"> {/* Warm Beige */}
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
                <Button variant="secondaryOutline" size="default">
                  <Leaf size={16} className="mr-2"/> Learn About Our Impact Initiatives
                </Button>
              </div>
              {/* Image Grid */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {ethicalImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className="rounded-lg shadow-lg object-cover w-full h-48 transition-transform transform hover:scale-105 duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. Meet the Founder --- */}
        <section id="meet-the-founder" className="py-16 md:py-24 bg-[#FAF0E6]"> {/* Clean Off-White */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/3">
                <img src={images.founderPortrait} alt="Abel Tesfaye, Founder" className="rounded-full shadow-xl w-64 h-64 md:w-full md:h-auto object-cover mx-auto border-4 border-[#F5F5DC]" loading="lazy"/>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#4A2C2A]">Rooted in Hawassa, Reaching the World</h3>
                <blockquote className="text-xl md:text-2xl font-sans italic text-[#4A2C2A]/70 border-l-4 border-[#B08D57] pl-4 py-2 my-6">
                  "Coffee is more than a crop here; it's our heritage. My mission is to share its finest expression with the world, with integrity and respect for its origins."
                  <span className="block text-right text-lg not-italic mt-2">– Abel Tesfaye, Founder</span>
                </blockquote>
                <p className="text-md font-sans text-[#4A2C2A]/80 leading-relaxed">
                  Abel Tesfaye didn't just enter the coffee business; he was born into it. His lifelong connection to Ethiopia's coffee lands fuels Executive Coffee's commitment to excellence, partnership, and preserving the legacy of Ethiopian Arabica for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. Final Call to Action --- */}
        <section id="contact" className="py-20 md:py-28 text-center bg-cover bg-center relative" style={{ backgroundImage: `url(${images.ctaBackground})` }}>
           <div className="absolute inset-0 bg-[#4A2C2A]/80"></div> {/* Rich Deep Coffee Brown overlay */}
           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-[#FAF0E6]">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
               Partner with Ethiopia's Premier Coffee Exporter
             </h2>
             <p className="text-lg md:text-xl font-sans max-w-3xl mx-auto mb-10 font-light" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.3)' }}>
               Ready to secure exceptional Ethiopian specialty coffee that delights your customers and builds your brand? Connect with our experts to explore tailored solutions, request samples, or receive a detailed quote.
             </p>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <Button size="lg" className="w-full sm:w-auto">
                 Request Your Personal Consultation
               </Button>
               <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#FAF0E6] text-[#FAF0E6] hover:bg-[#FAF0E6]/10">
                 Request Green Bean Samples
               </Button>
             </div>
             <a href="#download-profile" className="inline-flex items-center text-sm mt-8 text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors">
                <Download size={16} className="mr-2"/> Download Company Profile (PDF)
             </a>
           </div>
        </section>
      </main>

      {/* --- 9. Footer --- */}
      <footer className="bg-[#4A2C2A] text-[#FAF0E6]/80 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Copyright */}
            <div className="md:col-span-1">
              <a href="#" className="text-lg font-bold font-serif text-[#FAF0E6] mb-2 block">
                Executive Coffee
              </a>
              <p className="text-xs">&copy; {new Date().getFullYear()} Executive Ethiopian Coffee Exporter. <br/>Elevating Coffee Heritage.</p>
              {/* Certifications Placeholder */}
               <div className="mt-4 space-x-2">
                  <span className="inline-block bg-[#F5F5DC]/20 text-[#F5F5DC] text-xs px-2 py-1 rounded">SCA Member</span>
                  {/* Add other logos/badges here */}
               </div>
            </div>

            {/* Quick Links */}
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

            {/* Contact Details */}
            <div>
              <h5 className="font-semibold text-[#FAF0E6] mb-3 font-serif tracking-wide">Contact Us</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#contact" className="inline-flex items-center hover:text-[#B08D57] transition-colors">
                    <Mail size={14} className="mr-2"/> Request Consultation
                  </a>
                </li>
                 <li>
                  <a href="mailto:sales@executivecoffeeexport.com" className="inline-flex items-center hover:text-[#B08D57] transition-colors">
                    <Mail size={14} className="mr-2"/> sales@executivecoffeeexport.com
                  </a>
                </li>
                <li>
                  <a href="mailto:info@executivecoffeeexport.com" className="inline-flex items-center hover:text-[#B08D57] transition-colors">
                    <Mail size={14} className="mr-2"/> info@executivecoffeeexport.com
                  </a>
                </li>
                <li>
                  <a href="tel:+251935993536" className="inline-flex items-center hover:text-[#B08D57] transition-colors">
                    <Phone size={14} className="mr-2"/> +251 935 993 536 (WhatsApp)
                  </a>
                </li>
                 <li>
                    <span className="inline-flex items-center">
                        <MapPin size={14} className="mr-2"/> Bole Sub-City, Addis Ababa, Ethiopia
                    </span>
                 </li>
                 <li>
                    <span className="inline-flex items-center">
                        {/* WeChat Icon Placeholder */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.793 6.605 4.571 8.651-.162.844-.56 2.443-.983 3.817-.158.51.171.818.611.628 2.188-.93 4.124-2.413 5.469-3.719 1.101.193 2.24.299 3.404.299 6.627 0 12-4.975 12-11.111s-5.373-11.111-12-11.111zm-1.214 14.941c-.303 0-.582-.117-.797-.333l-1.138-1.138c-.429-.43-.429-1.125 0-1.554s1.125-.43 1.554 0l.818.818 2.818-2.818c.43-.43 1.125-.43 1.554 0s.43 1.125 0 1.554l-3.446 3.446c-.214.215-.493.333-.797.333zm6.428 0c-.303 0-.582-.117-.797-.333l-1.138-1.138c-.429-.43-.429-1.125 0-1.554s1.125-.43 1.554 0l.818.818 2.818-2.818c.43-.43 1.125-.43 1.554 0s.43 1.125 0 1.554l-3.446 3.446c-.214.215-.493.333-.797.333z"/></svg>
                        WeChat: ExecutiveCoffeeETH
                    </span>
                 </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-[#FAF0E6] mb-3 font-serif tracking-wide">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-[#FAF0E6]/80 hover:text-[#B08D57] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
