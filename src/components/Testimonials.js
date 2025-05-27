import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content, placeholderImages } from '../content/textData';
import SectionTitle from './SectionTitle';

const TestimonialCard = ({ text, name, company, avatar, stars }) => {
  const renderStars = () => {
    let s = [];
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        s.push(<Star key={i} className="text-yellow-400 fill-current" size={20} />);
      } else if (i === fullStars + 1 && halfStar) {
         s.push(
          <div key={i} className="relative">
            <Star className="text-gray-300" size={20} />
            <Star className="text-yellow-400 fill-current absolute top-0 left-0" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} size={20} />
          </div>
        );
      } else {
        s.push(<Star key={i} className="text-gray-300" size={20} />);
      }
    }
    return s;
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-5">{renderStars()}</div>
      <p className="italic text-gray-700 mb-6 leading-relaxed flex-grow text-lg">"{text}"</p>
      <div className="flex items-center mt-auto pt-5 border-t border-gray-200">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-200 shadow-sm object-cover" onError={(e) => e.target.src = placeholderImages.testimonialAvatarError}/>
        <div>
          <h4 className="font-bold text-green-700 text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language].testimonials;

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.quotes.map((quote, index) => <TestimonialCard key={index} {...quote} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 