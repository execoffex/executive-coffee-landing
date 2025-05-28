import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import { scrollToSection } from '../utils/helpers';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'products', label: t.products },
    { id: 'sustainability', label: t.sustainability },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'bg-transparent'}`}>
        {/* Top bar for language toggle */}
        <div className={`py-2 px-4 sm:px-6 lg:px-8 flex justify-end items-center transition-colors duration-300 ${isScrolled ? 'bg-green-700/10' : 'bg-green-700/80 backdrop-blur-sm'}`}>
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 ease-in-out group
                        ${isScrolled 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-white text-green-700 hover:bg-green-100'}`}
            aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
          >
            <Globe size={14} />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-shadow duration-300 ${isScrolled ? '' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center space-x-2">
                <img 
                    src={isScrolled || language === 'zh' ? placeholderImages.logoLightBg(t.companyNameShort) : placeholderImages.logoDarkBg(t.companyNameShort)}
                    alt={`${t.companyName} Logo`} 
                    className="h-8 sm:h-10 md:h-11 transition-all duration-300" 
                />
              </a>
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map(link => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-red-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${isScrolled ? 'text-gray-700 hover:text-red-500' : 'text-white hover:text-red-300'}`}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Open main menu"
                >
                  {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div 
            id="mobile-menu" 
            className={`md:hidden fixed inset-0 top-[calc(4.5rem)] bg-white z-40 border-t border-gray-200 transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="px-3 pt-3 pb-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMobileMenuOpen(false); }}
                  className="text-gray-700 hover:bg-green-50 hover:text-red-600 block px-4 py-4 rounded-md text-lg font-medium transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
      {/* Add padding to compensate for fixed header */}
      {isMobileMenuOpen && <div className="md:hidden" style={{ height: '100vh' }} />}
    </>
  );
};

export default Header; 