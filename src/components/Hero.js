import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import CtaButton from './CtaButton';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="home" className="relative hero-bg text-white min-h-[90vh] md:min-h-screen flex items-center justify-center py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
      <style jsx global>{`
        .hero-bg {
          background-image: url('${placeholderImages.heroBackground}');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        
        /* Fix for iOS background-attachment: fixed issue */
        @supports (-webkit-touch-callout: none) {
          .hero-bg {
            background-attachment: scroll;
          }
        }
      `}</style>
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight animate-fadeInUp text-shadow-lg">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 animate-fadeInUp animation-delay-300 text-shadow-sm">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 animate-fadeInUp animation-delay-600">
          <CtaButton href="#products" variant="primary">{t.exploreProducts}</CtaButton>
          <CtaButton href="#contact" variant="secondary">{t.contactUs}</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Hero; 