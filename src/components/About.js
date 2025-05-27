import React from 'react';
import { Award, Anchor, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content/textData';
import SectionTitle from './SectionTitle';

const AboutCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full group">
    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
      <Icon size={36} strokeWidth={2} />
    </div>
    <h3 className="text-2xl font-bold text-green-700 mb-3 group-hover:text-red-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
  </div>
);

const About = () => {
  const { language } = useLanguage();
  const t = content[language].about;

  const aboutItems = [
    { icon: Award, title: t.premiumQuality, description: t.premiumQualityDesc },
    { icon: Anchor, title: t.globalLogistics, description: t.globalLogisticsDesc }, // Changed icon
    { icon: Users, title: t.ethicalPartnerships, description: t.ethicalPartnershipsDesc },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle title={t.title} subtitle={t.intro} />
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {aboutItems.map(item => <AboutCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default About; 