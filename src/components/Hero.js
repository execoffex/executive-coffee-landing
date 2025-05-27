import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import CtaButton from './CtaButton';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="home" className="relative hero-bg text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
      <style jsx global>{`
        .hero-bg {
          background-image: url('${placeholderImages.heroBackground}');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-fadeInUp text-shadow-lg">
          {t.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 animate-fadeInUp animation-delay-300 text-shadow-sm">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp animation-delay-600">
          <CtaButton href="#products" variant="primary">{t.exploreProducts}</CtaButton>
          <CtaButton href="#contact" variant="secondary">{t.contactUs}</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Hero; 