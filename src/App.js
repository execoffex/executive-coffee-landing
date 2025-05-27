import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { 
    ChevronDown, Menu, X, Globe, Star, CheckCircle, Send, MapPin, Phone, Mail, Clock, 
    Linkedin, Twitter, Facebook, Instagram, Coffee, Leaf, TrendingUp, Award, Users, 
    ShieldCheck, ArrowRight, Mountain, Sun, Droplets, Wind, Briefcase, Anchor, Zap 
} from 'lucide-react';

// --- Language Context ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'zh' : 'en'));
  };

  useEffect(() => {
    // Apply language class to body for global font styling and set document language
    if (language === 'zh') {
      document.body.classList.add('font-chinese');
      document.body.classList.remove('font-english');
      document.documentElement.lang = 'zh';
    } else {
      document.body.classList.add('font-english');
      document.body.classList.remove('font-chinese');
      document.documentElement.lang = 'en';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
const useLanguage = () => useContext(LanguageContext);

// --- Content (Bilingual) ---
// Enhanced content for more impact and storytelling
const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'Our Story',
      products: 'Our Exports',
      sustainability: 'Our Commitment',
      contact: 'Connect',
      companyName: 'Executive Export',
      companyNameShort: 'ExecExport',
    },
    hero: {
      title: "Ethiopia's Finest, Delivered Globally.",
      subtitle: "Executive Export: Your trusted partner for premium, sustainably sourced Ethiopian agricultural products. Experience the richness of our heritage, cultivated with care and exported with excellence.",
      exploreProducts: 'Discover Our Bounty',
      contactUs: 'Partner With Us',
    },
    about: {
      title: 'Rooted in Tradition, Reaching for the Future',
      intro: "For over fifteen years, Executive Export has been synonymous with Ethiopia's agricultural eminence. We are more than exporters; we are ambassadors of our nation's fertile lands, connecting discerning global buyers with unparalleled quality and unwavering ethical standards.",
      premiumQuality: 'Uncompromising Quality',
      premiumQualityDesc: "From seed to shipment, excellence is our standard. We meticulously select from Ethiopia's most fertile regions, ensuring every product embodies peak flavor, purity, and nutritional value.",
      globalLogistics: 'Seamless Global Logistics',
      globalLogisticsDesc: 'With exports to over 30 nations, our sophisticated supply chain guarantees timely and reliable delivery, preserving the freshness and integrity of our precious cargo across continents.',
      ethicalPartnerships: 'Ethical & Fair Partnerships',
      ethicalPartnershipsDesc: 'We foster direct, transparent relationships with our farming communities, championing fair trade, empowering local livelihoods, and investing in sustainable agricultural futures.',
    },
    products: {
      title: 'A Symphony of Ethiopian Flavors',
      intro: "Explore our curated selection of Ethiopia's agricultural treasures. Each offering is a testament to the unique terroir and rich traditions of its origin, processed to meet rigorous international quality benchmarks.",
      coffeeTitle: 'Legendary Ethiopian Coffees',
      coffeeDesc: "Journey to the birthplace of coffee. Our beans, from world-renowned regions like Yirgachefe and Sidamo, offer an orchestra of complex aromas and unforgettable flavor profiles.",
      sesameTitle: 'Golden Ethiopian Sesame Seeds',
      sesameDesc: 'Discover the nutty richness of Ethiopian sesame. Prized for exceptional oil content and purity, our Humera and Wollega varieties are global benchmarks for quality.',
      pulsesTitle: 'Nourishing Pulses & Legumes',
      pulsesDesc: "From the heart of Ethiopia's highlands, we bring you a diverse range of nutrient-dense pulses and legumes – the wholesome foundation of cuisines worldwide.",
      viewAll: "Explore All Varieties"
    },
    sustainability: {
      title: 'Cultivating a Legacy of Responsibility',
      intro: 'Our commitment to sustainability is not just a practice, but a principle. We believe in nurturing the land, empowering communities, and preserving Ethiopia\'s precious natural heritage for generations to follow.',
      commitmentTitle: 'Our Pillars of Sustainable Excellence',
      farmerEmpowerment: 'Farmer Empowerment & Fair Trade',
      farmerEmpowermentDesc: 'Direct partnerships with over 5,000 smallholders ensure fair wages, knowledge transfer, and shared success, fostering vibrant rural economies.',
      ecoConsciousFarming: 'Eco-Conscious Farming',
      ecoConsciousFarmingDesc: 'Over 70% of our products embrace organic and nature-positive methods, enhancing biodiversity, soil health, and ecosystem resilience.',
      waterStewardship: 'Water Stewardship',
      waterStewardshipDesc: 'Implementing advanced water-efficient irrigation and conservation techniques, we reduce water usage by up to 45%, safeguarding this vital resource.',
      carbonReduction: 'Reduced Environmental Footprint',
      carbonReductionDesc: 'Through optimized logistics, renewable energy adoption in processing, and sustainable packaging, we actively minimize our carbon footprint across the value chain.',
    },
    certifications: {
      title: 'Globally Recognized Standards of Excellence',
      logos: [
        { alt: 'ISO 9001 Certified Quality Management', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=ISO+9001&font=Inter', id: 'iso' },
        { alt: 'Certified Organic Exporter', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=Organic+Certified&font=Inter', id: 'organic' },
        { alt: 'Fair Trade Certified Partner', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=Fair+Trade&font=Inter', id: 'fairtrade' },
        { alt: 'Ethiopian Export Promotion Agency Partner', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=EEPA+Partner&font=Inter', id: 'eepa' },
        { alt: 'GlobalG.A.P. Certified Agriculture', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=GlobalG.A.P.&font=Inter', id: 'globalgap' },
      ]
    },
    testimonials: {
      title: 'Trusted by Partners Worldwide',
      quotes: [
        {
          text: "Executive Export's Yirgachefe coffee is consistently exceptional. Their professionalism and reliable supply chain have made them an invaluable partner for our specialty roastery.",
          name: 'Isabelle Dubois',
          company: 'Le Café Select, Paris',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=ID',
          stars: 5,
        },
        {
          text: "The quality of Humera sesame seeds from Executive Export has significantly elevated our tahini products. Their commitment to purity and ethical sourcing is commendable.",
          name: 'Kenji Tanaka',
          company: 'Artisan Foods Japan, Tokyo',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=KT',
          stars: 5,
        },
        {
          text: "We rely on Executive Export for high-quality Ethiopian chickpeas and lentils. Their dedication to sustainable practices and farmer welfare aligns perfectly with our brand values.",
          name: 'Maria Rossi',
          company: 'Salute Organics, Rome',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=MR',
          stars: 4.5,
        },
      ],
    },
    contact: {
      title: 'Let\'s Grow Together',
      intro: "Whether you're seeking premium Ethiopian agricultural products, exploring partnership opportunities, or require tailored solutions, our expert team is ready to assist. Reach out today.",
      form: {
        name: 'Your Full Name',
        company: 'Your Company Name',
        email: 'Your Email Address',
        phone: 'Your Phone Number (Optional)',
        interest: 'Primary Product Interest',
        selectProduct: 'Select a product category...',
        message: 'Your Detailed Inquiry or Message',
        sendMessage: 'Send Your Inquiry',
      },
      info: {
        title: 'Connect With Our Team',
        hq: 'Global Headquarters',
        hqAddress: 'Bole Sub-City, Kebele 03/05, Addis Ababa, Ethiopia',
        phone: 'Direct Line',
        phoneNum: '+251 11 612 3456',
        email: 'General Inquiries',
        emailAddr: 'connect@executive-export.com',
        hours: 'Office Hours',
        hoursDetail: 'Monday - Friday: 08:30 - 17:30 (EAT, GMT+3)',
        follow: 'Follow Our Journey',
      },
    },
    footer: {
      companyDesc: "Executive Export: Cultivating Ethiopia's finest agricultural treasures and delivering them to the world with integrity, quality, and a commitment to sustainable prosperity.",
      quickLinks: 'Navigate',
      products: 'Our Core Exports',
      newsletter: 'Market Insights & Updates',
      newsletterDesc: 'Subscribe for exclusive updates on Ethiopian harvests, market trends, and new product availabilities.',
      emailPlaceholder: 'Enter your email address',
      subscribe: 'Subscribe',
      copyright: `© ${new Date().getFullYear()} Executive Export PLC. All Rights Reserved.`,
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      sitemap: 'Sitemap',
    },
    productDetails: {
      coffee: [
        { id: 'yirgachefe', name: 'Yirgachefe Washed G1', description: 'Celebrated for its bright, citrusy acidity, delicate floral notes (jasmine, bergamot), and clean, tea-like body. A connoisseur\'s choice.', icon: Coffee, tag: 'Specialty Arabica' },
        { id: 'sidamo_natural_g1', name: 'Sidamo Natural G1', description: 'Full-bodied with rich notes of ripe berries, dark chocolate, and a winey complexity. Sun-dried to perfection.', icon: Coffee, tag: 'Heirloom Natural' },
        { id: 'guji_washed_g1', name: 'Guji Washed G1', description: 'Vibrant and complex, often revealing notes of peach, apricot, and sweet florals with a lingering, pleasant aftertaste.', icon: Coffee, tag: 'High-Altitude Washed' },
        { id: 'limmu_washed_g1', name: 'Limmu Washed G1', description: 'Well-balanced with a distinctively spicy and winey character, often complemented by sweet citrus and floral undertones.', icon: Coffee, tag: 'Forest Coffee' },
        { id: 'lekempti_natural_g4', name: 'Lekempti Natural G4/5', description: 'Known for its bold, fruity flavors, often with blueberry notes, good body, and a wild, rustic charm. Excellent for blends.', icon: Coffee, tag: 'Western Ethiopian' },
      ],
      sesame: [
        { id: 'humera_type', name: 'Humera Type Sesame', description: 'Premium whitish seeds, renowned for large size, sweet nutty flavor, and high oil content (50%+). Ideal for premium tahini and confectionary.', icon: Sun, tag: 'High Oil Yield' },
        { id: 'wollega_type', name: 'Wollega Type Sesame', description: 'Mixed/brownish seeds with a rich, distinctive nutty taste and excellent oil yield. Versatile for oil extraction and culinary uses.', icon: Sun, tag: 'Rich Flavor' },
        { id: 'hulled_sesame', name: 'Mechanically Hulled Sesame', description: 'Precisely hulled for a pristine, uniform appearance and enhanced purity. Perfect for bakery, toppings, and health foods.', icon: Zap, tag: 'Ready-to-Use' },
        { id: 'organic_sesame', name: 'Organic Sesame Seeds', description: 'Cultivated without synthetic pesticides or fertilizers, offering a pure, natural taste. Certified organic options available.', icon: Leaf, tag: 'Certified Organic' },
      ],
      pulses: [
        { id: 'red_kidney_beans', name: 'Red Kidney Beans (Dark/Light)', description: 'Rich in protein and fiber, with a robust flavor and firm texture. Excellent for chili, stews, and salads.', icon: Mountain, tag: 'Protein Powerhouse' },
        { id: 'white_pea_beans', name: 'White Pea Beans (Haricot)', description: 'Small, oval, and creamy. Mild flavor, ideal for baked beans, soups, and casseroles. Multiple grades available.', icon: Mountain, tag: 'Versatile Staple' },
        { id: 'chickpeas_desi_kabuli', name: 'Chickpeas (Desi/Kabuli)', description: 'Nutty flavor and firm texture. Essential for hummus, curries, salads, and snacks. Available in various sizes.', icon: Mountain, tag: 'Global Favorite' },
        { id: 'green_mung_beans', name: 'Green Mung Beans', description: 'Small, versatile beans, easily digestible. Popular for sprouting, soups, stews, and Asian desserts.', icon: Mountain, tag: 'Nutrient-Dense' },
        { id: 'faba_beans', name: 'Faba Beans (Broad Beans)', description: 'A traditional Ethiopian staple, offering high nutritional value with an earthy, slightly sweet flavor. Various sizes.', icon: Mountain, tag: 'Ancient Grain' },
        { id: 'soybeans_food_feed', name: 'Soybeans (Food/Feed Grade)', description: 'High-protein beans for diverse applications, from tofu and soy milk to animal feed. Non-GMO options.', icon: Mountain, tag: 'Plant-Based Protein' },
        { id: 'red_speckled_kidney', name: 'Red Speckled Kidney Beans', description: 'Visually appealing with a rich, earthy flavor. Holds shape well when cooked. Great for soups and traditional dishes.', icon: Mountain, tag: 'Colorful & Flavorful' },
        { id: 'black_cumin_seeds', name: 'Black Cumin Seeds (Nigella Sativa)', description: 'Pungent, slightly bitter seeds with numerous culinary and traditional medicinal uses. High purity.', icon: Zap, tag: 'Spice & Wellness' },
      ],
    }
  },
  zh: { // --- CHINESE CONTENT (Mirrors English structure) ---
    nav: {
      home: '首页',
      about: '我们的故事',
      products: '我们的出口',
      sustainability: '我们的承诺',
      contact: '联系合作',
      companyName: '卓越出口',
      companyNameShort: '卓越出口',
    },
    hero: {
      title: '埃塞俄比亚的精华，全球共享。',
      subtitle: '卓越出口：您值得信赖的合作伙伴，提供优质、可持续来源的埃塞俄比亚农产品。体验我们精心培育、卓越出口的丰富传统。',
      exploreProducts: '探索我们的珍品',
      contactUs: '成为我们的伙伴',
    },
    about: {
      title: '植根传统，展望未来',
      intro: '十五余年来，卓越出口已成为埃塞俄比亚农业卓越的代名词。我们不仅是出口商，更是我们国家肥沃土地的使者，以无与伦比的品质和坚定的道德标准，连接全球独具慧眼的买家。',
      premiumQuality: '不妥协的品质',
      premiumQualityDesc: '从种子到运输，卓越是我们的标准。我们从埃塞俄比亚最肥沃的地区精心挑选，确保每一种产品都体现出顶级的风味、纯度和营养价值。',
      globalLogistics: '无缝全球物流',
      globalLogisticsDesc: '我们的产品出口至30多个国家，先进的供应链确保及时可靠的交付，跨越洲际保持我们珍贵货物的新鲜度和完整性。',
      ethicalPartnerships: '道德与公平伙伴关系',
      ethicalPartnershipsDesc: '我们与农业社区建立直接、透明的合作关系，倡导公平贸易，赋能当地民生，并投资于可持续的农业未来。',
    },
    products: {
      title: '埃塞俄比亚风味的交响曲',
      intro: '探索我们精选的埃塞俄比亚农业瑰宝。每一款产品都是其原产地独特风土和丰富传统的证明，经过加工以满足严格的国际质量标准。',
      coffeeTitle: '传奇埃塞俄比亚咖啡',
      coffeeDesc: '踏上咖啡发源地的旅程。我们的咖啡豆来自耶加雪菲和西达摩等世界著名产区，提供复杂香气和难忘风味的交响乐。',
      sesameTitle: '金色埃塞俄比亚芝麻',
      sesameDesc: '探索埃塞俄比亚芝麻的坚果浓香。我们的胡梅拉和沃莱加品种因其出色的含油量和纯度而备受推崇，是全球品质的标杆。',
      pulsesTitle: '滋养身心的豆类与荚豆',
      pulsesDesc: '从埃塞俄比亚高原的心脏地带，我们为您带来各种营养丰富的豆类和荚豆——世界各地美食的健康基石。',
      viewAll: "探索所有品类"
    },
    sustainability: {
      title: '培育负责任的传承',
      intro: '我们对可持续发展的承诺不仅是一种实践，更是一种原则。我们坚信要滋养土地，赋能社区，并为子孙后代保护埃塞俄比亚珍贵的自然遗产。',
      commitmentTitle: '我们可持续卓越的支柱',
      farmerEmpowerment: '赋能农民与公平贸易',
      farmerEmpowermentDesc: '与超过5000名小农户建立直接伙伴关系，确保公平的工资、知识转移和共同成功，培育充满活力的农村经济。',
      ecoConsciousFarming: '生态意识农业',
      ecoConsciousFarmingDesc: '我们超过70%的产品采用有机和自然友好方法，增强生物多样性、土壤健康和生态系统恢复力。',
      waterStewardship: '水资源管理',
      waterStewardshipDesc: '通过实施先进的节水灌溉和保护技术，我们将用水量减少高达45%，保护这一重要资源。',
      carbonReduction: '减少环境足迹',
      carbonReductionDesc: '通过优化的物流、在加工过程中采用可再生能源以及可持续包装，我们积极减少整个价值链的碳足迹。',
    },
    certifications: {
      title: '全球认可的卓越标准',
      logos: [
        { alt: 'ISO 9001 质量管理体系认证', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=ISO+9001认证&font=Noto+Sans+SC', id: 'iso' },
        { alt: '有机出口商认证', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=有机认证&font=Noto+Sans+SC', id: 'organic' },
        { alt: '公平贸易认证伙伴', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=公平贸易&font=Noto+Sans+SC', id: 'fairtrade' },
        { alt: '埃塞俄比亚出口促进局合作伙伴', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=EEPA伙伴&font=Noto+Sans+SC', id: 'eepa' },
        { alt: '全球良好农业规范认证', src: 'https://placehold.co/160x90/EBF4FF/1C3D5A?text=GlobalG.A.P.&font=Noto+Sans+SC', id: 'globalgap' },
      ]
    },
    testimonials: {
      title: '全球合作伙伴的信赖之选',
      quotes: [
        {
          text: "卓越出口的耶加雪菲咖啡品质始终如一地出色。他们的专业精神和可靠的供应链使其成为我们精品烘焙坊不可或缺的合作伙伴。",
          name: '伊莎贝尔·杜波依斯',
          company: '巴黎 Le Café Select 咖啡馆',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=伊',
          stars: 5,
        },
        {
          text: "卓越出口的胡梅拉芝麻品质显著提升了我们的芝麻酱产品。他们对纯度和道德采购的承诺值得称赞。",
          name: '田中健司',
          company: '东京 Artisan Foods Japan 公司',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=田',
          stars: 5,
        },
        {
          text: "我们依赖卓越出口提供高品质的埃塞俄比亚鹰嘴豆和扁豆。他们对可持续实践和农民福祉的奉献与我们的品牌价值观完美契合。",
          name: '玛利亚·罗西',
          company: '罗马 Salute Organics 公司',
          avatar: 'https://placehold.co/64x64/dbeafe/1e40af?text=玛',
          stars: 4.5,
        },
      ],
    },
    contact: {
      title: '携手共创未来',
      intro: '无论您是寻求优质埃塞俄比亚农产品、探索合作机会，还是需要定制解决方案，我们的专业团队都随时准备为您提供帮助。即刻联系我们。',
      form: {
        name: '您的全名',
        company: '您的公司名称',
        email: '您的电子邮箱',
        phone: '您的电话号码 (可选)',
        interest: '主要产品兴趣',
        selectProduct: '选择产品类别...',
        message: '您的详细咨询或留言',
        sendMessage: '发送您的咨询',
      },
      info: {
        title: '联系我们的团队',
        hq: '全球总部',
        hqAddress: '埃塞俄比亚，亚的斯亚贝巴，博莱副城，03/05区',
        phone: '直线电话',
        phoneNum: '+251 11 612 3456',
        email: '一般咨询',
        emailAddr: 'connect@executive-export.com',
        hours: '办公时间',
        hoursDetail: '周一至周五: 08:30 - 17:30 (东非时间, GMT+3)',
        follow: '关注我们的动态',
      },
    },
    footer: {
      companyDesc: '卓越出口：培育埃塞俄比亚最优质的农业瑰宝，以诚信、品质和对可持续繁荣的承诺将其交付给世界。',
      quickLinks: '网站导航',
      products: '我们的核心出口',
      newsletter: '市场洞察与更新',
      newsletterDesc: '订阅我们的通讯，获取关于埃塞俄比亚收成、市场趋势和新产品供应的独家更新。',
      emailPlaceholder: '请输入您的电子邮箱',
      subscribe: '订阅',
      copyright: `© ${new Date().getFullYear()} 卓越出口股份有限公司. 版权所有.`,
      privacy: '隐私政策',
      terms: '服务条款',
      sitemap: '网站地图',
    },
     productDetails: { // Chinese Product Details
      coffee: [
        { id: 'yirgachefe', name: '耶加雪菲 水洗 G1', description: '以其明亮的柑橘酸质、细腻的花香（茉莉、佛手柑）和干净的茶感而闻名。鉴赏家之选。', icon: Coffee, tag: '精品阿拉比卡' },
        { id: 'sidamo_natural_g1', name: '西达摩 日晒 G1', description: '酒体饱满，带有浓郁的成熟浆果、黑巧克力和酒香复杂性。阳光下完美干燥。', icon: Coffee, tag: '传统日晒' },
        { id: 'guji_washed_g1', name: '古吉 水洗 G1', description: '充满活力且复杂，常带有桃子、杏子和甜美花香，余味悠长宜人。', icon: Coffee, tag: '高海拔水洗' },
        { id: 'limmu_washed_g1', name: '林姆 水洗 G1', description: '均衡度佳，带有独特的辛辣和酒香特征，常伴有甜橙和花香的底蕴。', icon: Coffee, tag: '森林咖啡' },
        { id: 'lekempti_natural_g4', name: '莱坎普蒂 日晒 G4/5', description: '以其浓郁的果香（常有蓝莓味）、良好的醇厚度和原始的乡村魅力而闻名。非常适合拼配。', icon: Coffee, tag: '埃塞西部产区' },
      ],
      sesame: [
        { id: 'humera_type', name: '胡梅拉型芝麻', description: '优质白色种子，以颗粒大、味道香甜、坚果风味和高含油量（50%以上）而闻名。是优质芝麻酱和糖果的理想选择。', icon: Sun, tag: '高油产率' },
        { id: 'wollega_type', name: '沃莱加型芝麻', description: '混合/棕色种子，具有浓郁独特的坚果味和出色的出油率。用途广泛，可用于榨油和烹饪。', icon: Sun, tag: '风味浓郁' },
        { id: 'hulled_sesame', name: '机械去皮芝麻', description: '精确去皮，外观洁净均匀，纯度更高。非常适合烘焙、配料和健康食品。', icon: Zap, tag: '即用型' },
        { id: 'organic_sesame', name: '有机芝麻', description: '种植过程中不使用合成农药或化肥，提供纯净天然的味道。可提供有机认证选项。', icon: Leaf, tag: '有机认证' },
      ],
      pulses: [
        { id: 'red_kidney_beans', name: '红芸豆 (深/浅)', description: '富含蛋白质和纤维，风味浓郁，质地紧实。非常适合制作辣椒酱、炖菜和沙拉。', icon: Mountain, tag: '蛋白质宝库' },
        { id: 'white_pea_beans', name: '白豌豆 (海军豆)', description: '小巧，椭圆形，口感细腻。味道温和，是焗豆、汤和砂锅菜的理想选择。提供多种等级。', icon: Mountain, tag: '多用途主食' },
        { id: 'chickpeas_desi_kabuli', name: '鹰嘴豆 (迪西/卡布里)', description: '坚果风味，质地紧实。是制作鹰嘴豆泥、咖喱、沙拉和零食的必备品。提供各种尺寸。', icon: Mountain, tag: '全球热门' },
        { id: 'green_mung_beans', name: '绿豆', description: '小巧玲珑，用途广泛，易于消化。常用于发豆芽、煲汤、炖菜和亚洲甜点。', icon: Mountain, tag: '营养密集' },
        { id: 'faba_beans', name: '蚕豆', description: '传统的埃塞俄比亚主食，营养价值高，带有泥土气息和微甜。各种尺寸可选。', icon: Mountain, tag: '古老谷物' },
        { id: 'soybeans_food_feed', name: '大豆 (食品/饲料级)', description: '高蛋白豆类，用途广泛，从豆腐、豆浆到动物饲料。提供非转基因选项。', icon: Mountain, tag: '植物蛋白' },
        { id: 'red_speckled_kidney', name: '红花芸豆', description: '外观诱人，风味浓郁，带有泥土气息。煮熟后能很好地保持形状。非常适合煲汤和传统菜肴。', icon: Mountain, tag: '色彩丰富 风味佳' },
        { id: 'black_cumin_seeds', name: '黑小茴香籽 (黑种草籽)', description: '气味辛辣，略带苦味，具有多种烹饪和传统药用价值。纯度高。', icon: Zap, tag: '香料与健康' },
      ],
    }
  }
};

// --- Helper Functions ---
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Adding a slight offset to account for sticky header height
    const headerOffset = 100; // Adjust this value based on your header's height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Reusable UI Components ---
const SectionTitle = ({ title, subtitle, isLight = false }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isLight ? 'text-white' : 'text-green-800'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1.5 mx-auto mb-6 rounded-full ${isLight ? 'bg-white/70' : 'bg-red-500'}`}></div>
    {subtitle && <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isLight ? 'text-gray-200' : 'text-gray-700'}`}>{subtitle}</p>}
  </div>
);

const CtaButton = ({ href, children, variant = 'primary', className = '', icon: Icon }) => {
  const baseStyle = "px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 inline-flex items-center justify-center space-x-2";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-300",
    secondary: "bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white focus:ring-gray-300",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-200"
  };
  return (
    <a href={href} onClick={(e) => { e.preventDefault(); scrollToSection(href.substring(1)); }} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={20} className="mr-2" />}
      <span>{children}</span>
    </a>
  );
};

// --- Page Section Components ---

// Header Component
const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'products', label: t.products },
    { id: 'sustainability', label: t.sustainability },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'bg-transparent'}`}>
        {/* Top bar for language toggle */}
        <div className={`py-2 px-4 sm:px-6 lg:px-8 flex justify-end items-center transition-colors duration-300 ${isScrolled ? 'bg-green-700/10' : 'bg-green-700'}`}>
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full font-medium text-xs transition-all duration-300 ease-in-out group
                        ${isScrolled 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-white text-green-700 hover:bg-green-100'}`}
            aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
          >
            <Globe size={14} />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-shadow duration-300 ${isScrolled ? '' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center space-x-2">
                <img 
                    src={`https://placehold.co/180x55/${isScrolled || language === 'zh' ? '1D4D4F/FFFFFF' : 'FFFFFF/1D4D4F'}?text=${t.companyNameShort}&font=Inter`} 
                    alt={`${t.companyName} Logo`} 
                    className="h-10 sm:h-11 transition-all duration-300" 
                />
              </a>
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map(link => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-red-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${isScrolled ? 'text-gray-700 hover:text-red-500' : 'text-white hover:text-red-300'}`}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Open main menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl z-40 border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map(link => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMobileMenuOpen(false); }}
                    className="text-gray-700 hover:bg-green-50 hover:text-red-600 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};


// Hero Component
const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="home" className="relative hero-bg text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
      <style jsx global>{`
        .hero-bg {
          background-image: url('https://placehold.co/1920x1280/2c3e50/ecf0f1?text=Lush+Ethiopian+Coffee+Plantation&font=Inter');
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

// About Component
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

// Products Component
const ProductCard = ({ name, description, icon: Icon, tag, imagePlaceholder }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="relative h-60">
        <img 
          src={imagePlaceholder} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => e.target.src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Image+Unavailable'}
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
      bgImage: "url('https://placehold.co/1200x400/4A3B31/E8D8C4?text=Aromatic+Coffee+Beans&font=Inter')",
    },
    {
      title: t.sesameTitle,
      description: t.sesameDesc,
      items: p.sesame,
      imagePlaceholderStem: 'Sesame+Seeds+',
      icon: Sun,
      bgImage: "url('https://placehold.co/1200x400/D4AC0D/FDFEFE?text=Golden+Sesame+Harvest&font=Inter')",
    },
    {
      title: t.pulsesTitle,
      description: t.pulsesDesc,
      items: p.pulses,
      imagePlaceholderStem: 'Pulses+Legumes+',
      icon: Mountain, // Changed icon for variety
      bgImage: "url('https://placehold.co/1200x400/588157/A3B18A?text=Nutrient-Rich+Pulses&font=Inter')",
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
                  imagePlaceholder={`https://placehold.co/400x300/A0AEC0/2D3748?text=${category.imagePlaceholderStem}${item.name.replace(/\s+/g, '+').substring(0,20)}&font=Inter`}
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

// Sustainability Component
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
          <div className="relative rounded-xl shadow-2xl overflow-hidden group aspect-w-4 aspect-h-3">
            <img 
              src="https://placehold.co/600x450/38A169/FFFFFF?text=Sustainable+Ethiopian+Agriculture&font=Inter" 
              alt="Hands holding a young plant in fertile Ethiopian soil" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => e.target.src = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=Image+Error'}
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

// Certifications Component
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

// Testimonials Component
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
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-green-200 shadow-sm object-cover" onError={(e) => e.target.src = 'https://placehold.co/64x64/9ca3af/ffffff?text=User'}/>
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

// Contact Component
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

const InputField = ({ label, name, type = "text", required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input 
      type={type} 
      name={name} 
      id={name} 
      required={required} 
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow" 
    />
  </div>
);


// Map Section Component
const MapSection = () => {
  return (
    <div className="h-96 md:h-[550px] w-full bg-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.718890459896!2d38.7636117147864!3d9.00000009353926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8a482f3253171591!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy"
        title="Executive Export Office Location in Addis Ababa"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

// Footer Component
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
             <img src={`https://placehold.co/200x60/FFFFFF/111827?text=${nav.companyNameShort}&font=Inter`} alt={`${nav.companyName} Logo`} className="h-11 mb-5" />
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


// Main App Component
function App() {
  // Effect for observing section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }); // Trigger a bit before fully in view

    document.querySelectorAll('section[id]').forEach(section => { // Target sections with an ID
      section.classList.add('section-hidden'); // Initial state for animation
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans text-gray-800 bg-white selection:bg-red-500 selection:text-white">
        {/* Global Styles & Fonts */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
          
          body.font-english { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
          body.font-chinese { font-family: 'Noto Sans SC', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
          
          .text-shadow-sm { text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
          .text-shadow-md { text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
          .text-shadow-lg { text-shadow: 0 3px 6px rgba(0,0,0,0.3); }

          .section-hidden { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
          .animate-section-visible { opacity: 1; transform: translateY(0); }

          .animate-fadeInUp { animation: fadeInUpAnimation 0.8s ease-out forwards; }
          .animation-delay-300 { animation-delay: 0.3s; opacity:0; } /* Ensure opacity is 0 for delayed items */
          .animation-delay-600 { animation-delay: 0.6s; opacity:0; }

          @keyframes fadeInUpAnimation {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Sustainability />
          <Certifications />
          <Testimonials />
          <Contact />
          <MapSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

