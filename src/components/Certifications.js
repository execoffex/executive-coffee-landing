import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content/textData';
import SectionTitle from './SectionTitle';

const Certifications = () => {
  const { language } = useLanguage();
  const t = content[language].certifications;

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.title} isLight={true} />
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
          {t.logos.map(logo => (
            <div key={logo.id} className="text-center group">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-20 bg-white/10 p-3 rounded-lg backdrop-blur-sm shadow-lg group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105"
                onError={(e) => { e.target.style.display='none'; }}
              />
              <p className="text-xs mt-2 opacity-80 group-hover:opacity-100 transition-opacity">{logo.alt.split(' Certified')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 