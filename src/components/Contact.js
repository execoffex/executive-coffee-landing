import React, { useRef } from 'react';
import {
    Send, MapPin, Phone, Mail, Clock, 
    Linkedin, Twitter, Facebook, Instagram 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content/textData';
import SectionTitle from './SectionTitle';
import CtaButton from './CtaButton';
import InputField from './InputField';

const Contact = () => {
  const { language } = useLanguage();
  const t = content[language].contact;
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      // Simple validation feedback - in a real app, use a more robust solution
      const statusEl = formRef.current.querySelector('.form-status');
      if (statusEl) {
        statusEl.textContent = language === 'en' ? 'Please fill in all required fields.' : '请填写所有必填字段。';
        statusEl.className = 'form-status text-red-500 text-sm mt-2';
      }
      return;
    }
    
    // Simulate form submission
    console.log("Form submitted:", Object.fromEntries(formData));
    const statusEl = formRef.current.querySelector('.form-status');
    if (statusEl) {
      statusEl.textContent = language === 'en' ? 'Thank you! Your inquiry has been sent.' : '感谢您！您的咨询已发送。';
      statusEl.className = 'form-status text-green-600 text-sm mt-2';
    }
    formRef.current.reset();
    setTimeout(() => {
      if (statusEl) statusEl.textContent = '';
    }, 5000);
  };

  const contactInfoItems = [
    { icon: MapPin, title: t.info.hq, text: t.info.hqAddress },
    { icon: Phone, title: t.info.phone, text: t.info.phoneNum, href: `tel:${t.info.phoneNum.replace(/\s/g, '')}` },
    { icon: Mail, title: t.info.email, text: t.info.emailAddr, href: `mailto:${t.info.emailAddr}` },
    { icon: Clock, title: t.info.hours, text: t.info.hoursDetail },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto">
        <SectionTitle title={t.title} subtitle={t.intro} />
        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <InputField label={t.form.name} name="name" type="text" required />
                <InputField label={t.form.company} name="company" type="text" />
              </div>
              <InputField label={t.form.email} name="email" type="email" required />
              <InputField label={t.form.phone} name="phone" type="tel" />
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">{t.form.interest}</label>
                <select id="interest" name="interest" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-white appearance-none">
                  <option value="">{t.form.selectProduct}</option>
                  {Object.keys(content[language].productDetails).map(key => (
                     content[language].productDetails[key].slice(0,1).map(prod => <option key={prod.id} value={prod.id}>{prod.name}</option>)
                  ))}
                  <option value="other_inquiry">{language === 'en' ? 'Other Inquiry' : '其他咨询'}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.form.message}</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow"></textarea>
              </div>
              <CtaButton type="submit" variant="primary" className="w-full !py-3.5 text-lg">
                <Send size={20} className="mr-2" /> {t.form.sendMessage}
              </CtaButton>
              <div className="form-status text-sm mt-2 h-5"></div> {/* For status messages */}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-green-700 text-white p-8 sm:p-10 rounded-xl shadow-2xl h-full">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">{t.info.title}</h3>
            <div className="space-y-6">
              {contactInfoItems.map(item => (
                <div key={item.title} className="flex items-start">
                  <div className="bg-white/20 p-3.5 rounded-full mr-5 mt-1 shadow">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-0.5">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-green-100 hover:text-yellow-300 transition-colors break-all">{item.text}</a>
                    ) : (
                      <p className="text-green-100 break-words">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/20">
              <h4 className="font-semibold text-lg mb-4">{t.info.follow}</h4>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} aria-label={link.label} className="bg-white/20 hover:bg-yellow-400 text-white hover:text-green-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 