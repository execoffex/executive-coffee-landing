import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import { scrollToSection } from '../utils/helpers';

const Footer = () => {
  const { language } = useLanguage();
  const t = content[language].footer;
  const nav = content[language].nav;

  const quickLinks = [
    { label: nav.home, href: '#home' },
    { label: nav.about, href: '#about' },
    { label: nav.products, href: '#products' },
    { label: nav.sustainability, href: '#sustainability' },
    { label: nav.contact, href: '#contact' },
  ];

  const productLinks = content[language].productDetails.coffee.slice(0,2)
    .concat(content[language].productDetails.sesame.slice(0,1))
    .concat(content[language].productDetails.pulses.slice(0,1))
    .map(p => ({ label: p.name, href: '#products'}));


  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
             <img src={placeholderImages.footerLogo(nav.companyNameShort)} alt={`${nav.companyName} Logo`} className="h-11 mb-5" />
            <p className="text-sm leading-relaxed">{t.companyDesc}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wider">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }} className="hover:text-green-400 transition-colors duration-300 text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wider">{t.products}</h3>
            <ul className="space-y-3">
              {productLinks.map(link => (
                <li key={link.label}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }} className="hover:text-green-400 transition-colors duration-300 text-sm">{link.label}</a></li>
              ))}
               <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }} className="hover:text-green-400 transition-colors duration-300 text-sm font-medium">{language === 'en' ? 'View All...' : '查看全部...'}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wider">{t.newsletter}</h3>
            <p className="text-sm mb-4 leading-relaxed">{t.newsletterDesc}</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} 
                className="px-4 py-2.5 w-full rounded-l-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm border-transparent" 
              />
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-r-md transition-colors duration-300 text-sm font-semibold">
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">{t.copyright}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">{t.privacy}</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">{t.terms}</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">{t.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 