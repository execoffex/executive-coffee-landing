import React from 'react';
import { Users, Leaf, Droplets, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import SectionTitle from './SectionTitle';

const SustainabilityItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-5 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
    <div className="flex-shrink-0 bg-green-100 text-green-600 p-4 rounded-full group-hover:bg-red-100 group-hover:text-red-600 transition-colors duration-300">
      <Icon size={28} />
    </div>
    <div>
      <h4 className="text-xl font-semibold text-green-700 mb-1 group-hover:text-red-600 transition-colors duration-300">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Sustainability = () => {
  const { language } = useLanguage();
  const t = content[language].sustainability;

  const sustainabilityPoints = [
    { icon: Users, title: t.farmerEmpowerment, description: t.farmerEmpowermentDesc },
    { icon: Leaf, title: t.ecoConsciousFarming, description: t.ecoConsciousFarmingDesc },
    { icon: Droplets, title: t.waterStewardship, description: t.waterStewardshipDesc },
    { icon: Wind, title: t.carbonReduction, description: t.carbonReductionDesc },
  ];

  return (
    <section id="sustainability" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <SectionTitle title={t.title} subtitle={t.intro} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl shadow-2xl overflow-hidden group aspect-[1024/680] max-h-[70vh] w-full">
            <img 
              src={placeholderImages.sustainabilityHands}
              alt="Hands holding a young plant in fertile Ethiopian soil" 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => e.target.src = placeholderImages.sustainabilityImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Leaf size={36} className="mb-2 drop-shadow-lg" />
              <p className="text-xl font-semibold text-shadow-md">Nurturing Land, Empowering People, Sustaining Futures.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-green-800 mb-2">{t.commitmentTitle}</h3>
            {sustainabilityPoints.map(point => <SustainabilityItem key={point.title} {...point} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability; 