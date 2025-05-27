import React from 'react';
import { Coffee, Sun, Mountain } from 'lucide-react'; // Ensure all icons used are imported
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import SectionTitle from './SectionTitle';
import CtaButton from './CtaButton';

const ProductCard = ({ name, description, icon: Icon, tag, imagePlaceholder }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="relative h-60">
        <img 
          src={imagePlaceholder} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => e.target.src = placeholderImages.productImageUnavailable}
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md tracking-wide">
          {tag}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <Icon className="text-green-600 w-7 h-7 mr-3" />
          <h4 className="font-bold text-xl text-green-800 group-hover:text-red-600 transition-colors duration-300">{name}</h4>
        </div>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">{description}</p>
        <CtaButton href="#contact" variant="outline" className="w-full mt-auto text-sm py-2.5">
          Inquire About {name}
        </CtaButton>
      </div>
    </div>
  );
};

const Products = () => {
  const { language } = useLanguage();
  const t = content[language].products;
  const p = content[language].productDetails;

  const productCategories = [
    {
      title: t.coffeeTitle,
      description: t.coffeeDesc,
      items: p.coffee,
      imagePlaceholderStem: 'Ethiopian+Coffee+',
      icon: Coffee,
      bgImage: placeholderImages.categoryBgCoffee,
    },
    {
      title: t.sesameTitle,
      description: t.sesameDesc,
      items: p.sesame,
      imagePlaceholderStem: 'Sesame+Seeds+',
      icon: Sun,
      bgImage: placeholderImages.categoryBgSesame,
    },
    {
      title: t.pulsesTitle,
      description: t.pulsesDesc,
      items: p.pulses,
      imagePlaceholderStem: 'Pulses+Legumes+',
      icon: Mountain, // Changed icon for variety
      bgImage: placeholderImages.categoryBgPulses,
    },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50/50">
      <div className="container mx-auto">
        <SectionTitle title={t.title} subtitle={t.intro} />
        {productCategories.map((category) => (
          <div key={category.title} className="mb-20">
            <div 
              className="text-white py-16 px-6 sm:px-10 rounded-xl mb-12 shadow-xl bg-cover bg-center relative overflow-hidden min-h-[300px] flex flex-col justify-center"
              style={{ backgroundImage: category.bgImage }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 max-w-3xl">
                <category.icon size={48} className="mb-4 text-yellow-400 drop-shadow-lg" />
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-shadow-md">{category.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed text-shadow-sm">{category.description}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.items.slice(0,4).map(item => ( // Show max 4 items per category for brevity
                <ProductCard 
                  key={item.id} 
                  name={item.name} 
                  description={item.description} 
                  icon={item.icon} 
                  tag={item.tag}
                  imagePlaceholder={placeholderImages.productGeneric(category.imagePlaceholderStem, item.name)}
                />
              ))}
            </div>
             {category.items.length > 4 && (
              <div className="text-center mt-12">
                <CtaButton href="#contact" variant="primary" className="text-sm">
                  {t.viewAll} {category.title.split(' ')[2] || category.title.split(' ')[0]}
                </CtaButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products; 