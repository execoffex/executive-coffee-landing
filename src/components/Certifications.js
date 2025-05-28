import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content/textData';
import SectionTitle from './SectionTitle';

const Certifications = () => {
  const { language } = useLanguage();
  const t = content[language].certifications;

  return (
    <section id="certifications" className="py-16 md:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.title} isLight={true} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {t.logos.map(logo => (
            <div key={logo.id} className="text-center group w-full max-w-[150px]">
              <div className="bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm shadow-lg group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105 aspect-square flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-14 sm:max-h-16 md:max-h-[4.5rem] w-auto object-contain"
                  onError={(e) => { e.target.style.display='none'; }}
                />
              </div>
              <p className="text-xs mt-2 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2 h-10">
                {logo.alt.split(' Certified')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 