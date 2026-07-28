import { Category, Service, Review, PortfolioItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    nameAr: 'جميع الخدمات',
    nameEn: 'All Services',
    descAr: 'استكشف كافة الحلول والخدمات الرقمية العالمية المتوفرة لدينا',
    descEn: 'Explore all of our world-class digital services and solutions',
    iconName: 'LayoutGrid',
    count: 24,
  },
  {
    id: 'web-dev',
    nameAr: 'تطوير البرمجيات والمواقع',
    nameEn: 'Web & Software Dev',
    descAr: 'مواقع إلكترونية، أنظمة سحابية، متاجر، وتطبيقات ويب فائقة السرعة والأمان',
    descEn: 'Ultra-fast websites, cloud portals, custom SaaS, and E-Commerce platforms',
    iconName: 'Code',
    count: 6,
  },
  {
    id: 'mobile-apps',
    nameAr: 'تطبيقات الجوال',
    nameEn: 'Mobile App Development',
    descAr: 'تطبيقات أيفون وأندرويد حديثة ومبتكرة بأعلى معايير تجربة المستخدم',
    descEn: 'Innovative native and cross-platform iOS & Android mobile applications',
    iconName: 'Smartphone',
    count: 4,
  },
  {
    id: 'ui-ux',
    nameAr: 'التصميم والهوية البصرية',
    nameEn: 'UI/UX & Branding',
    descAr: 'هويات بصرية فاخرة، وتصاميم واجهات رقمية جذابة تزيد المبيعات وتجذب العملاء',
    descEn: 'Premium brand identities, luxury UI design systems, and converting UX',
    iconName: 'Palette',
    count: 4,
  },
  {
    id: 'ai-solutions',
    nameAr: 'الذكاء الاصطناعي والأتمتة',
    nameEn: 'AI & Automation',
    descAr: 'دمج نماذج الذكاء الاصطناعي (Gemini)، المساعدين الأذكياء، وأتمتة المهام',
    descEn: 'Gemini AI model integrations, custom chatbots, and workflow automation',
    iconName: 'Bot',
    count: 4,
  },
  {
    id: 'cloud-security',
    nameAr: 'الأمن السيبراني والسحابية',
    nameEn: 'Cybersecurity & Cloud',
    descAr: 'فحص ثغرات الاختراق، إعداد البنية السحابية AWS/GCP، وDevOps للشركات',
    descEn: 'Penetration testing, security auditing, DevOps, and cloud deployment',
    iconName: 'ShieldCheck',
    count: 3,
  },
  {
    id: 'marketing-growth',
    nameAr: 'التسويق الرقمي والـ SEO',
    nameEn: 'Digital Marketing & SEO',
    descAr: 'تصدر نتائج البحث، حملات إعلانية ممولة ذكية، واستراتيجيات نمو للمبيعات',
    descEn: 'Top SEO rankings, high-ROI performance ad campaigns, and growth hacking',
    iconName: 'TrendingUp',
    count: 3,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-fullstack',
    categoryId: 'web-dev',
    titleAr: 'تطوير موقع أو منصة ويب متكاملة (Fullstack)',
    titleEn: 'Fullstack Web Application Development',
    shortDescAr: 'برمجة موقع أو منصة سحابية مخصصة بأحدث تقنيات React, Next.js, Node.js وTailwind مع لوحة تحكم كاملة.',
    shortDescEn: 'Custom fullstack web application built with React, Next.js, Node.js, and modern cloud backend.',
    fullDescAr: 'نقدم لك خدمة برمجة منصة رقمية مخصصة من الصفر لتلبي احتياجات عملك بالكامل. تشمل المنصة واجهة مستخدم سريعة جداً، لوحة تحكم إدارية متكاملة، ربط بوابات الدفع، وحماية متقدمة ضد الهجمات.',
    fullDescEn: 'End-to-end fullstack development service tailored for startups and global enterprises. Includes scalable backend architecture, interactive UI, payment gateway integrations, and robust cloud deployment.',
    basePriceUSD: 850,
    deliveryDays: 10,
    rating: 4.98,
    reviewsCount: 342,
    iconName: 'Globe',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular',
    popular: true,
    featured: true,
    deliverablesAr: [
      'موقع وتطبيق ويب متجاوب 100% مع كافة الشاشات',
      'لوحة تحكم أدمن كاملة لإدارة البيانات والعملاء',
      'ربط بوابات الدفع الإلكتروني (Visa, Mada, Apple Pay, PayPal)',
      'سيرفر سحابي مهيأ ومحمي جاهز للإطلاق',
      'دعم فني وتحديثات مجانية لمدة 30 يوماً'
    ],
    deliverablesEn: [
      '100% Responsive Fullstack Web Platform',
      'Comprehensive Admin Control Dashboard',
      'Payment Gateway Integrations (Mada, Visa, Apple Pay, Stripe)',
      'Configured Cloud Hosting & Production Ready Deployment',
      '30 Days Free Post-Launch Technical Support'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL / Firestore'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'الأساسية',
        nameEn: 'Basic',
        priceMultiplier: 1.0,
        deliveryDays: 7,
        featuresAr: ['حتى 5 صفحات مخصصة', 'متجاوب مع الجوال', 'نموذج اتصل بنا ونموذج حجز', 'ربط الدومين والسيرفر'],
        featuresEn: ['Up to 5 custom pages', 'Responsive layout', 'Contact & Booking Form', 'Domain & Server Setup']
      },
      {
        id: 'pro',
        nameAr: 'الاحترافية (الموصى بها)',
        nameEn: 'Pro (Recommended)',
        priceMultiplier: 1.8,
        deliveryDays: 12,
        featuresAr: ['حتى 15 صفحة تفاعلية', 'لوحة تحكم إدارية متكاملة', 'ربط بوابات الدفع والـ API', 'تحسين أداء وسرعة 95%+', 'دعم سنتين للأخطاء'],
        featuresEn: ['Up to 15 interactive pages', 'Full Admin Dashboard', 'Payment Gateway & API Integrations', '95%+ Speed Score', 'Support Included']
      },
      {
        id: 'enterprise',
        nameAr: 'المؤسسية الكبرى',
        nameEn: 'Enterprise',
        priceMultiplier: 3.2,
        deliveryDays: 20,
        featuresAr: ['عدد صفحات لا محدود', 'بنية سحابية مخصصة عالية التحمل', 'ربط الذكاء الاصطناعي وتطبيق جوال', 'فحص أمني معتمد ISO', 'دعم فني خاص 24/7'],
        featuresEn: ['Unlimited pages', 'High-availability Cloud Architecture', 'AI Integration & Companion Mobile App', 'Certified Security Audit', '24/7 Dedicated Support']
      }
    ],
    faqsAr: [
      { question: 'هل أمتلك كود المصدر (Source Code) بالكامل؟', answer: 'نعم بالكامل! تحصل على حقوق الكود المصدر والملكية الفكرية للمشروع فور إتمام التسليم.' },
      { question: 'ما مدى سرعة الموقع وأداؤه؟', answer: 'نضمن الحصول على تقييم 90+ على أداة Google PageSpeed للسرعة والأداء.' }
    ],
    faqsEn: [
      { question: 'Do I get full ownership of the source code?', answer: 'Yes! You own 100% of the source code, IP rights, and repository upon project completion.' },
      { question: 'What is the performance speed guaranteed?', answer: 'We guarantee a 90+ Google PageSpeed score across desktop and mobile devices.' }
    ]
  },
  {
    id: 'ai-automation',
    categoryId: 'ai-solutions',
    titleAr: 'تطوير حلول الذكاء الاصطناعي والمساعدين الأذكياء',
    titleEn: 'AI Solutions & Custom Smart Assistants',
    shortDescAr: 'دمج نماذج Gemini AI وبناء شات بوت ذكي مخصص لمنشأتك للرد الآلي وتوليد المحتوى وتحليل البيانات.',
    shortDescEn: 'Gemini AI integration, custom domain-trained chatbots, and automated smart business workflows.',
    basePriceUSD: 650,
    deliveryDays: 7,
    rating: 5.0,
    reviewsCount: 218,
    iconName: 'Bot',
    badgeAr: 'تقنية حديثة',
    badgeEn: 'Next-Gen AI',
    popular: true,
    featured: true,
    deliverablesAr: [
      'شات بوت ذكي مخصص مدرب على بيانات ورسائل شركتك',
      'ربط API نماذج Gemini 3.6 الفائقة وتوليد النصوص والتحليلات',
      'أتمتة خدمة العملاء والمبيعات عبر الواتساب والموقع',
      'لوحة تحكم لمراقبة المحادثات والتحليلات الذكية'
    ],
    deliverablesEn: [
      'Custom AI Chatbot fine-tuned on your business knowledge base',
      'Gemini 3.6 Flash API integration for smart text & document processing',
      'Automated WhatsApp & Web customer support assistant',
      'Analytics dashboard tracking conversations and conversion insights'
    ],
    techStack: ['Gemini API', 'Node.js', 'Python', 'LangChain', 'Vector Search', 'React'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'مساعد ذكي أساسي',
        nameEn: 'Basic AI Bot',
        priceMultiplier: 1.0,
        deliveryDays: 5,
        featuresAr: ['بوت مجيب ذكي للموقع', 'تدريب حتى 50 ملف/مستند', 'لوحة تحكم المحادثات'],
        featuresEn: ['Web Widget AI Assistant', 'Trained on up to 50 documents', 'Basic Chat History Dashboard']
      },
      {
        id: 'pro',
        nameAr: 'منظومة الذكاء الاصطناعي الشاملة',
        nameEn: 'Pro AI Ecosystem',
        priceMultiplier: 2.0,
        deliveryDays: 9,
        featuresAr: ['ربط واتساب + الموقع + منصات التواصل', 'توليد الصور والنصوص والتقارير تلقائياً', 'تدريب لا محدود على البيانات', 'ربط الـ CRM ونظام المبيعات'],
        featuresEn: ['WhatsApp + Web + Social Integration', 'Automated Image & Text Generation', 'Unlimited Knowledge Base Training', 'CRM & ERP System Sync']
      },
      {
        id: 'enterprise',
        nameAr: 'نماذج وتوليد خاص للمؤسسات',
        nameEn: 'Enterprise AI',
        priceMultiplier: 3.5,
        deliveryDays: 16,
        featuresAr: ['نماذج ذكاء اصطناعي مغلقة وخاصة معتمدة', 'تحليل ملفات وفيديو وصوت لحظي', 'بنية سحابية معزولة فائقة الأمان'],
        featuresEn: ['Custom fine-tuned Private LLMs', 'Real-time Multimodal Audio/Video analysis', 'Isolated Secure Dedicated Infrastructure']
      }
    ],
    faqsAr: [
      { question: 'هل يحافظ نظام الذكاء الاصطناعي على سرية بيانات شركتنا؟', answer: 'بالتأكيد! نستخدم بيئة مشفرة ولا يتم مشاركة أي من بياناتك مع أطراف خارجية.' }
    ],
    faqsEn: [
      { question: 'Is my enterprise data private and secure?', answer: 'Absolutely! We deploy enterprise privacy controls ensuring your business data is never leaked or publicly trained.' }
    ]
  },
  {
    id: 'mobile-app',
    categoryId: 'mobile-apps',
    titleAr: 'تطوير تطبيق جوال كامل (iOS & Android)',
    titleEn: 'Cross-Platform Mobile App (iOS & Android)',
    shortDescAr: 'تطبيق هاتف ذكي سريع وجذاب متاح على متجري App Store وGoogle Play بتصاميم عصرية.',
    shortDescEn: 'High-performance native-feel iOS & Android app published on App Store and Google Play.',
    basePriceUSD: 1100,
    deliveryDays: 14,
    rating: 4.95,
    reviewsCount: 189,
    iconName: 'Smartphone',
    badgeAr: 'متكامل',
    badgeEn: 'Full Suite',
    popular: true,
    featured: true,
    deliverablesAr: [
      'تطبيق مخصص لنظامي آيفون وأندرويد بنفس الوقت',
      'رفع ونشر التطبيق على App Store وGoogle Play',
      'إشعارات لحظية (Push Notifications)',
      'لوحة تحكم إدارية وشاشات مستخدم فائقة السلاسة'
    ],
    deliverablesEn: [
      'Cross-platform mobile app for iOS & Android',
      'App Store & Google Play Store Publishing Approval',
      'Push Notifications Engine (Firebase/OneSignal)',
      'Sleek modern UI with admin backend portal'
    ],
    techStack: ['Flutter', 'React Native', 'Firebase', 'TypeScript', 'Node.js API'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'تطبيق محتوى / خدمات مصغرة',
        nameEn: 'Basic Mobile App',
        priceMultiplier: 1.0,
        deliveryDays: 10,
        featuresAr: ['شاشات حتى 8 شاشات', 'ربط إشعارات', 'رفع على المتاجر'],
        featuresEn: ['Up to 8 interactive screens', 'Push Notifications', 'Store Submission']
      },
      {
        id: 'pro',
        nameAr: 'تطبيق تجاري أو حجز متكامل',
        nameEn: 'Pro Commercial App',
        priceMultiplier: 1.75,
        deliveryDays: 16,
        featuresAr: ['متجر أو منصة خدمات كاملة', 'خرائط وتتبع التوصيل اللحظي', 'بوابات دفع إلكتروني متعددة', 'لوحة تحكم أدمن لمتابعة الطلبات'],
        featuresEn: ['Full E-Commerce or On-Demand Services App', 'Live GPS Tracking & Maps', 'Multiple Payment Gateways', 'Realtime Order Management Dashboard']
      },
      {
        id: 'enterprise',
        nameAr: 'منصة تطبيقات كبرى (مثل Uber / HungerStation)',
        nameEn: 'Enterprise Marketplace App',
        priceMultiplier: 3.0,
        deliveryDays: 25,
        featuresAr: ['تطبيق عميل + تطبيق مندوب توصيل + تطبيق لوحة التاجر', 'أنظمة تحليلات ومحادثة فورية داخل التطبيق'],
        featuresEn: ['Client App + Courier App + Merchant Portal Trio', 'In-App Live Chat, Wallet & Realtime Analytics']
      }
    ],
    faqsAr: [
      { question: 'هل تضمنون قبول التطبيق في متجر أبل ومتجر جوجل؟', answer: 'نعم، نتحمل مسؤولية متابعة المراجعة والتعديلات حتى اعتماد القبول النهائي.' }
    ],
    faqsEn: [
      { question: 'Do you guarantee App Store & Google Play approval?', answer: 'Yes! We handle the entire app submission review process until full live approval.' }
    ]
  },
  {
    id: 'uiux-design',
    categoryId: 'ui-ux',
    titleAr: 'تصميم واجهات وتجربة المستخدم (UI/UX Design)',
    titleEn: 'UI/UX Interactive Design & Design Systems',
    shortDescAr: 'تصاميم واجهات Figma تفاعلية وفخمة للمواقع والتطبيقات ترفع من معدل التحويل والمبيعات.',
    shortDescEn: 'Luxury Figma UI/UX prototypes and complete design systems engineered for high conversion.',
    basePriceUSD: 450,
    deliveryDays: 5,
    rating: 4.99,
    reviewsCount: 412,
    iconName: 'Palette',
    badgeAr: 'تصاميم عالمية',
    badgeEn: 'World Class',
    popular: true,
    featured: true,
    deliverablesAr: [
      'ملف Figma تفاعلي كامل قابل للتجربة الفورية',
      'دليل هوية واجهات متكامل (Design System & Components)',
      'أيقونات ورسومات مخصصة بدقة عالية',
      'نسخة الشاشات للجوال والكمبيوتر (Responsive Mockups)'
    ],
    deliverablesEn: [
      'Interactive Figma Prototype with full micro-interactions',
      'Complete Design System & Reusable Component Library',
      'Custom HD Icons & Micro-animations',
      'Responsive Mobile & Desktop View Layouts'
    ],
    techStack: ['Figma', 'Adobe CC', 'Principle', 'Design Token System'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'تصميم واجهة موقع أو تطبيق مصغر',
        nameEn: 'Basic UI Kit',
        priceMultiplier: 1.0,
        deliveryDays: 4,
        featuresAr: ['حتى 6 شاشات فريدة', 'ملف Figma تفاعلي', 'تصدير الأصول بالكامل'],
        featuresEn: ['Up to 6 custom screens', 'Interactive Figma file', 'Full Asset Export']
      },
      {
        id: 'pro',
        nameAr: 'تصميم تطبيق أو موقع احترافي متكامل',
        nameEn: 'Pro UI/UX Suite',
        priceMultiplier: 1.8,
        deliveryDays: 8,
        featuresAr: ['حتى 20 شاشة تفاعلية', 'دراسة تجربة المستخدم وتسهيل مسار العميل', 'Design System كامل ومكتبة مكونات', 'دعم المبرمجين في التسليم'],
        featuresEn: ['Up to 20 screens', 'UX User Journey Study & Conversion Optimization', 'Complete Design System', 'Developer Handoff Documentation']
      },
      {
        id: 'enterprise',
        nameAr: 'هوية رقمية وأنظمة واجهات للمؤسسات',
        nameEn: 'Enterprise System UI',
        priceMultiplier: 3.0,
        deliveryDays: 14,
        featuresAr: ['شاشات غير محدودة للمنصات المعقدة', 'اختبار تجربة المستخدم مع عملاء حقيقيين', 'دليل أسلوب البراند بالكامل (Brand Styleguide)'],
        featuresEn: ['Unlimited Screens for Complex SaaS', 'Live User Usability Testing', '3D Motion Assets & Comprehensive Styleguide']
      }
    ],
    faqsAr: [
      { question: 'هل يحصل المبرمج على ملفات جاهزة للتنفيذ المباشر؟', answer: 'نعم، نسلم ملف Figma منظم بالطريقة القياسية مع الكود المباشر للألوان والمسافات CSS.' }
    ],
    faqsEn: [
      { question: 'Is the Figma file ready for immediate developer coding?', answer: 'Yes! All frames use Auto-Layout, variables, and specs formatted for seamless developer handoff.' }
    ]
  },
  {
    id: 'brand-identity',
    categoryId: 'ui-ux',
    titleAr: 'تصميم الهوية البصرية والشعار الاحترافي',
    titleEn: 'Brand Identity & Logo Design Suite',
    shortDescAr: 'شعار ابتلاكري ودليل هوية بصرية شاملاً الألوان، الخطوط، المطبوعات والملفات المفتوحة.',
    shortDescEn: 'Custom logo design, brand guidelines, typography scale, and complete print/digital identity assets.',
    basePriceUSD: 380,
    deliveryDays: 5,
    rating: 4.97,
    reviewsCount: 295,
    iconName: 'Sparkles',
    badgeAr: 'هوية فاخرة',
    badgeEn: 'Luxury Branding',
    deliverablesAr: [
      'شعار مبتكر بنموذجين مختلفين للاختيار',
      'دليل استخدام الهوية (Brand Guidelines PDF)',
      'ملفات الشعار المفتوحة (AI, EPS, SVG, PNG, PDF)',
      'تصاميم كروت العمل والمطبوعات والسوشيال ميديا'
    ],
    deliverablesEn: [
      'Custom Logo Concepts (2 distinct directions)',
      'Brand Stylebook PDF (Color palette, Typography, Logo rules)',
      'Vector Source Files (AI, SVG, EPS, Transparent PNG)',
      'Business Cards, Stationery, and Social Media Templates'
    ],
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Architecture'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'شعار + دليل خطوط وألوان',
        nameEn: 'Basic Logo Package',
        priceMultiplier: 1.0,
        deliveryDays: 3,
        featuresAr: ['مفهومان للشعار', 'الملفات المفتوحة المصدر', 'دليل الألوان والخطوط'],
        featuresEn: ['2 Logo Concepts', 'Source Vector Files', 'Color Palette & Fonts']
      },
      {
        id: 'pro',
        nameAr: 'هوية تجارية متكاملة',
        nameEn: 'Pro Brand Suite',
        priceMultiplier: 1.9,
        deliveryDays: 6,
        featuresAr: ['3 مفاهيم شعار', 'دليل استخدام متكامل 25+ صفحة', 'تصاميم المطبوعات الكاملة', 'قوالب السوشيال ميديا'],
        featuresEn: ['3 Logo Concepts', '25+ Page Brand Guide PDF', 'Full Stationery Mockups', 'Social Media Templates']
      },
      {
        id: 'enterprise',
        nameAr: 'إعادة بناء براند عالمي كامل (Rebranding)',
        nameEn: 'Enterprise Rebranding',
        priceMultiplier: 3.2,
        deliveryDays: 12,
        featuresAr: ['استراتيجية البراند والتموضع', 'تطبيقات رقمية وميدانية غير محدودة', 'ملفات ثنائية وثلاثية الأبعاد 3D'],
        featuresEn: ['Brand Strategy & Market Positioning', 'Unlimited Digital & Physical Applications', '3D Animated Logo Assets']
      }
    ],
    faqsAr: [
      { question: 'كم عدد التعديلات المتاحة؟', answer: 'تعديلات غير محدودة حتى الوصول إلى الشعار والهوية التي ترضيك 100%.' }
    ],
    faqsEn: [
      { question: 'How many revisions are included?', answer: 'We provide unlimited revisions until you are 100% satisfied with the final result.' }
    ]
  },
  {
    id: 'cloud-security',
    categoryId: 'cloud-security',
    titleAr: 'الأمن السيبراني، فحص الثغرات وإعداد السيرفرات السحابية',
    titleEn: 'Cybersecurity Audit & Cloud DevOps Architecture',
    shortDescAr: 'اختراق اختباري للحماية من الهجمات، وإعداد البنية السحابية في AWS أو Google Cloud بأمان عالي.',
    shortDescEn: 'Penetration testing, security vulnerability assessment, and scalable AWS/GCP DevOps deployment.',
    basePriceUSD: 720,
    deliveryDays: 6,
    rating: 4.96,
    reviewsCount: 145,
    iconName: 'ShieldCheck',
    badgeAr: 'أمان معتمد',
    badgeEn: 'ISO Cyber Safe',
    deliverablesAr: [
      'تقرير فحص أمني شامل للثغرات والتهديدات',
      'إغلاق جميع الثغرات البرمجية والـ SQLi/XSS',
      'إعداد سيرفرات سحابية قادرة على تحمل آلاف الزوار (Auto-scaling)',
      'شهادة حماية SSL وتشفير البيانات بأسلوب عصري'
    ],
    deliverablesEn: [
      'Comprehensive Vulnerability Assessment & Pen-test Report',
      'Remediation of top security threats (OWASP Top 10)',
      'High-availability AWS/GCP cloud setup with auto-scaling',
      'SSL certificates & end-to-end data encryption'
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'OWASP Top 10', 'Nginx'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'فحص أمني وإعداد سيرفر أساسي',
        nameEn: 'Basic Security Audit',
        priceMultiplier: 1.0,
        deliveryDays: 4,
        featuresAr: ['تقرير الثغرات', 'إعداد جدار حماية Firewall', 'نسخ احتياطي تلقائي'],
        featuresEn: ['Vulnerability Scan Report', 'WAF Firewall Setup', 'Automated Backups']
      },
      {
        id: 'pro',
        nameAr: 'بنية سحابية وحماية متقدمة',
        nameEn: 'Pro Cloud & Security Suite',
        priceMultiplier: 1.85,
        deliveryDays: 8,
        featuresAr: ['اختبار اختراق حقيقي', 'إصلاح كامل للثغرات', 'DevOps مع Docker & CI/CD', 'حماية ضخمة ضد هجمات DDoS'],
        featuresEn: ['Full Penetration Testing', 'Complete Patching & Hardening', 'Docker & CI/CD Automated Pipelines', 'DDoS Mitigation Setup']
      },
      {
        id: 'enterprise',
        nameAr: 'تأمين المنشآت والالتزام بالمعايير',
        nameEn: 'Enterprise Cyber Defense',
        priceMultiplier: 3.3,
        deliveryDays: 15,
        featuresAr: ['التوافق مع ISO 27001 وGDPR', 'مراقبة أمنية لحظية 24/7 SOC', 'محاكاة هجمات افتراضية مع فريق عملك'],
        featuresEn: ['ISO 27001 & GDPR Compliance Support', '24/7 Realtime SOC Monitoring Integration', 'Red Team Attack Simulation']
      }
    ],
    faqsAr: [
      { question: 'هل تؤثر عملية الفحص الأمني على توقف موقعنا؟', answer: 'لا إطلاقاً! نقوم بالفحص بطرق آمنة لا تسبب أي توقف للخادم.' }
    ],
    faqsEn: [
      { question: 'Will penetration testing cause downtime for my live app?', answer: 'Not at all! We use non-disruptive testing methods that keep your live services running smoothly.' }
    ]
  },
  {
    id: 'digital-marketing',
    categoryId: 'marketing-growth',
    titleAr: 'التسويق الرقمي وتصدر نتائج البحث SEO',
    titleEn: 'Digital Marketing, Growth Hacking & SEO Dominance',
    shortDescAr: 'تصدر الصفحة الأولى في Google وزيادة المبيعات عبر إعلانات ممولة مستهدفة وحملات نمو دقيقة.',
    shortDescEn: 'Rank #1 on Google, drive targeted buyer traffic, and scale sales with high-ROI ad campaigns.',
    basePriceUSD: 490,
    deliveryDays: 7,
    rating: 4.93,
    reviewsCount: 260,
    iconName: 'TrendingUp',
    badgeAr: 'نتائج مضمونة',
    badgeEn: 'High ROI',
    deliverablesAr: [
      'تهيئة سيو كاملة داخل الموقع وخارجه (On-Page & Off-Page SEO)',
      'إدارة وتصميم حملات Google Ads & Social Ads',
      'تحليل المنافسين والكلمات المفتاحية ذات القوة الشرائية',
      'تقارير أسبوعية وشهرية شفافة لنسبة الأرباح والعائد (ROAS)'
    ],
    deliverablesEn: [
      'Complete Technical & Content SEO Audit & Execution',
      'High-converting Google Search & Meta/TikTok Ads Management',
      'Competitor Keyword Research & Buyer Intent Analysis',
      'Transparent Weekly ROI Performance Analytics'
    ],
    techStack: ['Google Analytics 4', 'Ahrefs', 'SEM-Rush', 'Meta Pixel', 'Google Tag Manager'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'حزمة السيو والتحسين الداخلي',
        nameEn: 'Basic Technical SEO',
        priceMultiplier: 1.0,
        deliveryDays: 5,
        featuresAr: ['إصلاح أخطاء SEO بالموقع', 'تحسين أداء 10 كلمات مفتاحية', 'ربط تحليلات جوجل'],
        featuresEn: ['Fix On-Page Technical SEO errors', 'Optimize 10 Target Keywords', 'Google Analytics 4 Setup']
      },
      {
        id: 'pro',
        nameAr: 'حملات النمو المبيعات الشاملة',
        nameEn: 'Pro Growth Engine',
        priceMultiplier: 1.9,
        deliveryDays: 10,
        featuresAr: ['تصدر 30 كلمة مفتاحية رئيسية', 'إدارة حملات إعلانية بميزانية تصل لـ $10K', 'إنشاء تصاميم الإعلانات والنصوص المربحة'],
        featuresEn: ['Rank top 30 lucrative search terms', 'Manage up to $10k/mo ad spend', 'High-converting ad copywriting and creative visual assets']
      },
      {
        id: 'enterprise',
        nameAr: 'هيمنة السوق الرقمية للمؤسسات',
        nameEn: 'Enterprise Market Dominance',
        priceMultiplier: 3.5,
        deliveryDays: 20,
        featuresAr: ['خطة تسويق دولية متعددة اللغات', 'استراتيجية تسويق بالعمولة والمؤثرين', 'فريق نمو مخصص متابع يومياً'],
        featuresEn: ['Global Multi-lingual Expansion Campaign', 'Affiliate & Influencer Marketing Ecosystem', 'Dedicated Growth Team']
      }
    ],
    faqsAr: [
      { question: 'متى تبدأ النتائج بالظهور؟', answer: 'الحملات الإعلانية الممولة تبدأ جلب نتائج فورية خلال 24 ساعة، بينما الـ SEO يظهر تطوره الملموس خلال 30 إلى 60 يوماً.' }
    ],
    faqsEn: [
      { question: 'How quickly will I see results?', answer: 'Paid PPC ad campaigns generate immediate buyer traffic within 24 hours, while organic SEO builds explosive compounding growth within 30-60 days.' }
    ]
  },
  {
    id: 'ecommerce-pro',
    categoryId: 'web-dev',
    titleAr: 'إنشاء متجر إلكتروني احترافي متكامل',
    titleEn: 'Enterprise E-Commerce Store & Marketplace',
    shortDescAr: 'متجر سريع وجذاب لبيع المنتجات والخدمات مع ربط بوابات الدفع المحلية والعالمية وتتبع الشحنات.',
    shortDescEn: 'Custom scalable E-Commerce store equipped with global payment gateways, inventory, and order tracking.',
    basePriceUSD: 790,
    deliveryDays: 8,
    rating: 4.98,
    reviewsCount: 310,
    iconName: 'ShoppingBag',
    badgeAr: 'زيادة المبيعات',
    badgeEn: 'High Conversion',
    popular: true,
    featured: true,
    deliverablesAr: [
      'متجر سريع وتصميم يضمن أفضل تجربة شراء للعميل',
      'ربط شركات الشحن (Aramex, SMSA, DHL, DHL)',
      'ربط الدفع الإلكتروني (مدى، الفيزا، أبل باي، تمارا، تابـي)',
      'نظام إدارة المخزون والعروض والتخفيضات'
    ],
    deliverablesEn: [
      'High-converting modern E-Commerce storefront',
      'Logistics & Courier APIs (Aramex, DHL, SMSA)',
      'Instant Payments (Mada, Apple Pay, Visa, Stripe, Buy-Now-Pay-Later)',
      'Realtime Inventory Management & Coupon Engine'
    ],
    techStack: ['Next.js', 'Shopify Custom', 'WooCommerce API', 'Stripe', 'Tailwind CSS'],
    tiers: [
      {
        id: 'basic',
        nameAr: 'متجر منتجات أساسي',
        nameEn: 'Basic Store',
        priceMultiplier: 1.0,
        deliveryDays: 6,
        featuresAr: ['رفع حتى 30 منتج', 'ربط الدفع الإلكتروني', 'تصميم متجاوب'],
        featuresEn: ['Up to 30 Product Uploads', 'Payment Setup', 'Responsive Design']
      },
      {
        id: 'pro',
        nameAr: 'متجر احترافي متقدم',
        nameEn: 'Pro Store',
        priceMultiplier: 1.8,
        deliveryDays: 10,
        featuresAr: ['رفع منتجات لا محدود', 'ربط الشحن والتتبع الآلي', 'خاصية الشراء بنقرة واحدة وتطبيقات التقسيط (Tabby/Tamara)', 'سيو متجر احترافي'],
        featuresEn: ['Unlimited Products', 'Automated Shipping Integration', '1-Click Checkout & BNPL (Tabby/Tamara)', 'Full E-Commerce SEO']
      },
      {
        id: 'enterprise',
        nameAr: 'منصة متجر متعدد التجار (Multi-Vendor Marketplace)',
        nameEn: 'Multi-Vendor Marketplace',
        priceMultiplier: 3.2,
        deliveryDays: 18,
        featuresAr: ['تطبيق للتجار وتطبيق للعملاء', 'عمولات آليه وتقارير المبيعات مع لوحة تحكم للتاجر'],
        featuresEn: ['Multi-Vendor Merchant Portals', 'Automated Commission Splits & Enterprise Analytics']
      }
    ],
    faqsAr: [
      { question: 'هل يدعم المتجر اللغة العربية والإنجليزية ودعم العملات متعددة؟', answer: 'نعم بالكامل! يدعم تعدد اللغات وتحويل العملات بأسعار الصرف المباشرة.' }
    ],
    faqsEn: [
      { question: 'Does it support multi-language and multi-currency?', answer: 'Yes! Fully supports Arabic, English, and auto currency conversions worldwide.' }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    serviceId: 'web-fullstack',
    clientName: 'م. عبد العزيز الشمري',
    clientRoleAr: 'الرئيس التنفيذي - شركة الأفق الرقمية',
    clientRoleEn: 'CEO - Horizon Tech Group',
    clientCountry: '🇸🇦 المملكة العربية السعودية',
    countryCode: 'SA',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'تطوير موقع أو منصة ويب متكاملة (Fullstack)',
    serviceTitleEn: 'Fullstack Web Application Development',
    rating: 5,
    date: 'منذ يومين',
    commentAr: 'منصة باسكود (BASCODE) هي الأفضل برمجياً بلا منازع! قمنا بطلب برمجة منصتنا العقارية الكاملة واستلمنا عملاً فاخراً يفوق التوقعات. أداء وسرعة خرافية، والتزام تام بالوقت. الدعم الفني كان متاحاً طوال الـ 24 ساعة.',
    commentEn: 'BASCODE is hands down the best digital software agency! We ordered our enterprise web application and received a masterclass in code quality and performance.',
    verified: true,
    projectCostUSD: 1800
  },
  {
    id: 'rev-2',
    serviceId: 'ai-automation',
    clientName: 'د. سارة المنصوري',
    clientRoleAr: 'مديرة الابتكار - مؤسسة المستقبل',
    clientRoleEn: 'Director of Innovation - Future Corp',
    clientCountry: '🇦🇪 الإمارات العربية المتحدة',
    countryCode: 'AE',
    clientAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'تطوير حلول الذكاء الاصطناعي والمساعدين الأذكياء',
    serviceTitleEn: 'AI Solutions & Custom Smart Assistants',
    rating: 5,
    date: 'منذ 5 أيام',
    commentAr: 'تم ربط نموذج Gemini وتدريب شات بوت لخدمة العملاء لدينا في الإمارات. النتائج كانت مذهلة، انخفضت ضغط الاستفسارات بنسبة 85% وزادت المبيعات بفضل المساعد الذكي!',
    commentEn: 'Integrated Gemini AI model for customer support. Automated 85% of our inquiries with remarkable human-like context understanding.',
    verified: true,
    projectCostUSD: 1300
  },
  {
    id: 'rev-3',
    serviceId: 'mobile-app',
    clientName: 'Johnathan Vance',
    clientRoleAr: 'Founder - SwiftLogistics Inc.',
    clientRoleEn: 'Founder - SwiftLogistics Inc.',
    clientCountry: '🇺🇸 United States',
    countryCode: 'US',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'تطوير تطبيق جوال كامل (iOS & Android)',
    serviceTitleEn: 'Cross-Platform Mobile App (iOS & Android)',
    rating: 5,
    date: '1 week ago',
    commentAr: 'تجربة رائعة جداً! التطبيق نزل على متجر أبل ومتجر جوجل بدون أي تعقيدات. تصاميم الواجهة وسرعة التنفيذ كانت عالمية بكل المقاييس.',
    commentEn: 'Exceptional craftsmanship. Our mobile app passed Apple and Google Play store reviews on the first submission. Super smooth experience!',
    verified: true,
    projectCostUSD: 2400
  },
  {
    id: 'rev-4',
    serviceId: 'uiux-design',
    clientName: 'مهندس خالد الهاشمي',
    clientRoleAr: 'مؤسس منصة مسار',
    clientRoleEn: 'Founder - Masar Platform',
    clientCountry: '🇰🇼 دولة الكويت',
    countryCode: 'KW',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'تصميم واجهات وتجربة المستخدم (UI/UX Design)',
    serviceTitleEn: 'UI/UX Interactive Design & Design Systems',
    rating: 5,
    date: 'منذ أسبوعين',
    commentAr: 'تصاميم واجهات Figma التي قدموها لنا كانت تحفة فنية. النظام المتبع ودقة التفاصيل جعلت فريق البرمجة ينجز عمله بسرعة مضاعفة.',
    commentEn: 'The Figma design system delivered was pure art. Pixel-perfect specs and beautiful micro-animations.',
    verified: true,
    projectCostUSD: 850
  },
  {
    id: 'rev-5',
    serviceId: 'ecommerce-pro',
    clientName: 'م. أحمد فؤاد',
    clientRoleAr: 'مدير المتجر - براند نايس',
    clientRoleEn: 'Store Operations - Brand Nice',
    clientCountry: '🇪🇬 جمهورية مصر العربية',
    countryCode: 'EG',
    clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'إنشاء متجر إلكتروني احترافي متكامل',
    serviceTitleEn: 'Enterprise E-Commerce Store & Marketplace',
    rating: 5,
    date: 'منذ 3 أسابيع',
    commentAr: 'تم إنشاء المتجر الإلكتروني وربط جميع وسائل الدفع والشحن. ارتفعت نسبة التحويل والمبيعات بنسبة 140% خلال أول شهر من الإطلاق!',
    commentEn: 'High converting e-commerce platform. Sales jumped 140% in our very first month thanks to frictionless checkout.',
    verified: true,
    projectCostUSD: 1420
  },
  {
    id: 'rev-6',
    serviceId: 'cloud-security',
    clientName: 'Sophie Laurent',
    clientRoleAr: 'CTO - FinTech Global Europe',
    clientRoleEn: 'CTO - FinTech Global Europe',
    clientCountry: '🇫🇷 France',
    countryCode: 'FR',
    clientAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    serviceTitleAr: 'الأمن السيبراني، فحص الثغرات وإعداد السيرفرات السحابية',
    serviceTitleEn: 'Cybersecurity Audit & Cloud DevOps Architecture',
    rating: 5,
    date: '1 month ago',
    commentAr: 'فريق الأمن السيبراني اكتشف ثغرات دقيقة جداً وقام بإصلاحها فوراً وإعداد سيرفرات AWS عالية التحمل. احترافية عالية جداً.',
    commentEn: 'Top tier cybersecurity audit. The team resolved critical attack vectors and hardened our cloud architecture flawlessly.',
    verified: true,
    projectCostUSD: 2300
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    titleAr: 'منصة تداول وتكيف مالي عالمية (FinTech)',
    titleEn: 'Global FinTech Trading & Wallet Engine',
    categoryAr: 'تطوير مواقع وتطبيقات',
    categoryEn: 'Fullstack & Mobile',
    clientCountry: '🇦🇪 الإمارات / 🇬🇧 المملكة المتحدة',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    metricsAr: 'أكثر من 500,000 معاملة يومية بنسبة أمان 100%',
    metricsEn: '500k+ daily transactions with 100% security uptime',
    tags: ['React', 'Node.js', 'Cybersecurity', 'AWS', 'Gemini AI'],
    descriptionAr: 'منصة مالية ضخمة تتيح تداول العملات والأصول الرقمية مع تحليلات ذكية ومحفظة مشفرة بأرقى المعايير العالمية.',
    descriptionEn: 'High-throughput financial technology suite featuring live real-time charting, AI predictive trends, and instant settlements.'
  },
  {
    id: 'port-2',
    titleAr: 'منصة الرعاية الصحية والأطباء الاستشاريين',
    titleEn: 'Healthcare & Telemedicine Telehealth Portal',
    categoryAr: 'تطبيقات جوال وذكاء اصطناعي',
    categoryEn: 'Mobile App & AI',
    clientCountry: '🇸🇦 المملكة العربية السعودية',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    metricsAr: 'خدمة أكثر من 120,000 مريض ومطبقة بمعايير HIPAA',
    metricsEn: '120,000+ patients served with HIPAA compliance',
    tags: ['Flutter', 'AI Chatbot', 'WebRTC Video', 'Firebase'],
    descriptionAr: 'تطبيق حجز استشارات طبية فورية بالصوت والصورة مع مساعد ذكاء اصطناعي للتشخيص الأولي وتوليد التقارير.',
    descriptionEn: 'Telehealth application providing video consultations, prescription sync, and instant AI pre-diagnosis.'
  },
  {
    id: 'port-3',
    titleAr: 'سلسلة المتاجر العالمية الفاخرة',
    titleEn: 'Luxury E-Commerce Omnichannel Experience',
    categoryAr: 'تجارة إلكترونية وتصاميم UI/UX',
    categoryEn: 'E-Commerce & UI/UX',
    clientCountry: '🇶🇦 قطر / 🇺🇸 الولايات المتحدة',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    metricsAr: 'ارتفاع المبيعات بنسبة +210% وزيادة معدل البقاء',
    metricsEn: '+210% Conversion uplift and 4.2x customer return rate',
    tags: ['Next.js', 'Figma Design', 'Stripe', 'Tailwind'],
    descriptionAr: 'تجربة شراء فاخرة عبر الإنترنت مدعومة بتقنيات عرض المنتجات ثلاثية الأبعاد والشراء السريع بنقرة واحدة.',
    descriptionEn: 'Omnichannel luxury e-commerce platform with 3D product previews and localized multi-currency checkout.'
  }
];
