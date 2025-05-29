import { Coffee, Leaf, Sun, Mountain, Zap } from 'lucide-react';

export const placeholderImages = {
  logoLightBg: (text) => `${process.env.PUBLIC_URL}/images/logo_light_${text.toLowerCase().replace(/\s+/g, '_')}.png`,
  logoDarkBg: (text) => `${process.env.PUBLIC_URL}/images/logo_dark_${text.toLowerCase().replace(/\s+/g, '_')}.png`,
  heroBackground: `${process.env.PUBLIC_URL}/images/hero_background_plantation.jpg`,
  productGeneric: (categoryStem, productName) => {
    let simpleCategory = categoryStem.toLowerCase()
      .replace('ethiopian', '')
      .replace('seeds', '')
      .replace('pulses legumes', 'pulses')
      .replace(/\+/g, ' ')
      .trim()
      .split(' ')[0];
    if (!simpleCategory) simpleCategory = 'item';

    const simpleName = productName.toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^\w_]/g, '')
      .substring(0, 30);
    return `${process.env.PUBLIC_URL}/images/product_${simpleCategory}_${simpleName}.png`;
  },
  productImageUnavailable: `${process.env.PUBLIC_URL}/images/product_image_unavailable.png`,
  sustainabilityHands: `${process.env.PUBLIC_URL}/images/sustainability_hands_plant.jpg`,
  sustainabilityImageError: `${process.env.PUBLIC_URL}/images/sustainability_image_error.png`,
  certificationIso: `${process.env.PUBLIC_URL}/images/certification_iso_9001.png`,
  certificationOrganic: `${process.env.PUBLIC_URL}/images/certification_organic.png`,
  certificationFairTrade: `${process.env.PUBLIC_URL}/images/certification_fair_trade.png`,
  certificationEepa: `${process.env.PUBLIC_URL}/images/certification_eepa_partner.png`,
  certificationGlobalGap: `${process.env.PUBLIC_URL}/images/certification_global_gap.png`,
  certificationIsoZh: `${process.env.PUBLIC_URL}/images/certification_iso_9001_zh.png`,
  certificationOrganicZh: `${process.env.PUBLIC_URL}/images/certification_organic_zh.png`,
  certificationFairTradeZh: `${process.env.PUBLIC_URL}/images/certification_fair_trade_zh.png`,
  certificationEepaZh: `${process.env.PUBLIC_URL}/images/certification_eepa_partner_zh.png`,
  certificationGlobalGapZh: `${process.env.PUBLIC_URL}/images/certification_global_gap_zh.png`,
  testimonialAvatarGeneric: (text) => `${process.env.PUBLIC_URL}/images/avatar_${text.toLowerCase().replace(/\s+/g, '')}.png`,
  testimonialAvatarError: `${process.env.PUBLIC_URL}/images/avatar_user_default.png`,
  footerLogo: (text) => `${process.env.PUBLIC_URL}/images/footer_logo_${text.toLowerCase().replace(/\s+/g, '_')}.png`,
  categoryBgCoffee: `url('${process.env.PUBLIC_URL}/images/category_bg_coffee.jpg')`,
  categoryBgSesame: `url('${process.env.PUBLIC_URL}/images/category_bg_sesame.jpg')`,
  categoryBgPulses: `url('${process.env.PUBLIC_URL}/images/category_bg_pulses.jpg')`,
};

export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'Our Story',
      products: 'Our Exports',
      sustainability: 'Our Commitment',
      contact: 'Connect',
      companyName: 'Executive Export',
      companyNameShort: 'Exec_Export',
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
        { alt: 'ISO 9001 Certified Quality Management', src: placeholderImages.certificationIso, id: 'iso' },
        { alt: 'Certified Organic Exporter', src: placeholderImages.certificationOrganic, id: 'organic' },
        { alt: 'Fair Trade Certified Partner', src: placeholderImages.certificationFairTrade, id: 'fairtrade' },
        { alt: 'Ethiopian Export Promotion Agency Partner', src: placeholderImages.certificationEepa, id: 'eepa' },
        { alt: 'GlobalG.A.P. Certified Agriculture', src: placeholderImages.certificationGlobalGap, id: 'globalgap' },
      ]
    },
    testimonials: {
      title: 'Trusted by Partners Worldwide',
      quotes: [
        {
          text: "Executive Export's Yirgachefe coffee is consistently exceptional. Their professionalism and reliable supply chain have made them an invaluable partner for our specialty roastery.",
          name: 'Isabelle Dubois',
          company: 'Le Café Select, Paris',
          avatar: placeholderImages.testimonialAvatarGeneric('ID'),
          stars: 5,
        },
        {
          text: "The quality of Humera sesame seeds from Executive Export has significantly elevated our tahini products. Their commitment to purity and ethical sourcing is commendable.",
          name: 'Kenji Tanaka',
          company: 'Artisan Foods Japan, Tokyo',
          avatar: placeholderImages.testimonialAvatarGeneric('KT'),
          stars: 5,
        },
        {
          text: "We rely on Executive Export for high-quality Ethiopian chickpeas and lentils. Their dedication to sustainable practices and farmer welfare aligns perfectly with our brand values.",
          name: 'Maria Rossi',
          company: 'Salute Organics, Rome',
          avatar: placeholderImages.testimonialAvatarGeneric('MR'),
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
        phoneNum: '+251 935 993 536',
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
        // { id: 'lekempti_natural_g4', name: 'Lekempti Natural G4/5', description: 'Known for its bold, fruity flavors, often with blueberry notes, good body, and a wild, rustic charm. Excellent for blends.', icon: Coffee, tag: 'Western Ethiopian' },
      ],
      sesame: [
        { id: 'humera_type', name: 'Humera Type Sesame', description: 'Premium whitish seeds, renowned for large size, sweet nutty flavor, and high oil content (50%+). Ideal for premium tahini and confectionary.', icon: Sun, tag: 'High Oil Yield' },
        { id: 'wollega_type', name: 'Wollega Type Sesame', description: 'Mixed/brownish seeds with a rich, distinctive nutty taste and excellent oil yield. Versatile for oil extraction and culinary uses.', icon: Sun, tag: 'Rich Flavor' },
        { id: 'hulled_sesame', name: 'Mechanically Hulled Sesame', description: 'Precisely hulled for a pristine, uniform appearance and enhanced purity. Perfect for bakery, toppings, and health foods.', icon: Zap, tag: 'Ready-to-Use' },
        { id: 'organic_sesame', name: 'Organic Sesame', description: 'Cultivated without synthetic pesticides or fertilizers, offering a pure, natural taste. Certified organic options available.', icon: Leaf, tag: 'Certified Organic' },
      ],
      pulses: [
        { id: 'red_kidney_beans', name: 'Red Kidney Beans (Dark/Light)', description: 'Rich in protein and fiber, with a robust flavor and firm texture. Excellent for chili, stews, and salads.', icon: Mountain, tag: 'Protein Powerhouse' },
        { id: 'black_beans', name: 'Black Beans', description: 'Rich in antioxidants, which can protect the cells in our body & reduce the risk of conditions like heart diseases & cancer.', icon: Mountain, tag: 'Antioxidant Armor' },
        { id: 'green_mung_beans', name: 'Green Mung Beans', description: 'Small, versatile beans, easily digestible. Popular for sprouting, soups, stews, and Asian desserts.', icon: Mountain, tag: 'Nutrient-Dense' },
        { id: 'soybeans_food_feed', name: 'Soybeans (Food/Feed Grade)', description: 'High-protein beans for diverse applications, from tofu and soy milk to animal feed. Non-GMO options.', icon: Mountain, tag: 'Plant-Based Protein' },
        { id: 'red_speckled_kidney', name: 'Red Speckled Kidney Beans', description: 'Visually appealing with a rich, earthy flavor. Holds shape well when cooked. Great for soups and traditional dishes.', icon: Mountain, tag: 'Colorful & Flavorful' },
        { id: 'white_pea_beans', name: 'White Pea Beans (Haricot)', description: 'Small, oval, and creamy. Mild flavor, ideal for baked beans, soups, and casseroles. Multiple grades available.', icon: Mountain, tag: 'Versatile Staple' },
        { id: 'chickpeas_desi_kabuli', name: 'Chickpeas (Desi/Kabuli)', description: 'Nutty flavor and firm texture. Essential for hummus, curries, salads, and snacks. Available in various sizes.', icon: Mountain, tag: 'Global Favorite' },
        { id: 'faba_beans', name: 'Faba Beans (Broad Beans)', description: 'A traditional Ethiopian staple, offering high nutritional value with an earthy, slightly sweet flavor. Various sizes.', icon: Mountain, tag: 'Ancient Grain' },
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
      companyNameShort: 'Exec_Export',
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
        { alt: 'ISO 9001 质量管理体系认证', src: placeholderImages.certificationIso, id: 'iso' },
        { alt: '有机出口商认证', src: placeholderImages.certificationOrganic, id: 'organic' },
        { alt: '公平贸易认证伙伴', src: placeholderImages.certificationFairTrade, id: 'fairtrade' },
        { alt: '埃塞俄比亚出口促进局合作伙伴', src: placeholderImages.certificationEepa, id: 'eepa' },
        { alt: '全球良好农业规范认证', src: placeholderImages.certificationGlobalGap, id: 'globalgap' },
      ]
    },
    testimonials: {
      title: '全球合作伙伴的信赖之选',
      quotes: [
        {
          text: "卓越出口的耶加雪菲咖啡品质始终如一地出色。他们的专业精神和可靠的供应链使其成为我们精品烘焙坊不可或缺的合作伙伴。",
          name: '伊莎贝尔·杜波依斯',
          company: '巴黎 Le Café Select 咖啡馆',
          avatar: placeholderImages.testimonialAvatarGeneric('ID'),
          stars: 5,
        },
        {
          text: "卓越出口的胡梅拉芝麻品质显著提升了我们的芝麻酱产品。他们对纯度和道德采购的承诺值得称赞。",
          name: '田中健司',
          company: '东京 Artisan Foods Japan 公司',
          avatar: placeholderImages.testimonialAvatarGeneric('KT'),
          stars: 5,
        },
        {
          text: "我们依赖卓越出口提供高品质的埃塞俄比亚鹰嘴豆和扁豆。他们对可持续实践和农民福祉的奉献与我们的品牌价值观完美契合。",
          name: '玛利亚·罗西',
          company: '罗马 Salute Organics 公司',
          avatar: placeholderImages.testimonialAvatarGeneric('MR'),
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
        phoneNum: '+251 935 993 536',
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