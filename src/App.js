import React, { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

// --- Helper Functions ---
// Moved to src/utils/helpers.js

// --- Reusable UI Components ---
// Moved to src/components/

// --- Page Section Components ---
// Moved to src/components/

// Main App Component
function App() {
  // Effect for observing section animations
  useEffect(() => {
    // Immediately make all sections visible on small screens (mobile)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.querySelectorAll('section[id]').forEach(section => {
        section.classList.add('animate-section-visible');
      });
      return; // Exit early for mobile devices - no need for observer
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }); // Lower threshold and smaller rootMargin for better mobile detection

    document.querySelectorAll('section[id]').forEach(section => { // Target sections with an ID
      section.classList.add('section-hidden'); // Initial state for animation
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans text-gray-800 bg-white selection:bg-red-500 selection:text-white">
        {/* Global Styles & Fonts */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
          
          body.font-english { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
          body.font-chinese { font-family: 'Noto Sans SC', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
          
          .text-shadow-sm { text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
          .text-shadow-md { text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
          .text-shadow-lg { text-shadow: 0 3px 6px rgba(0,0,0,0.3); }

          .section-hidden { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
          .animate-section-visible { opacity: 1; transform: translateY(0); }
          
          /* Make sure sections are visible on mobile regardless */
          @media (max-width: 767px) {
            .section-hidden {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
          }

          .animate-fadeInUp { animation: fadeInUpAnimation 0.8s ease-out forwards; }
          .animation-delay-300 { animation-delay: 0.3s; opacity:0; } /* Ensure opacity is 0 for delayed items */
          .animation-delay-600 { animation-delay: 0.6s; opacity:0; }
          
          @keyframes fadeInUpAnimation {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Sustainability />
          <Certifications />
          <Testimonials />
          <Contact />
          <MapSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

