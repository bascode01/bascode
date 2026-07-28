import { Language } from '../types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  ar: {
    // Brand
    brandName: 'باسكود | BASCODE',
    brandTagline: 'CODE. DESIGN. SECURE. SUCCEED. | منصة البرمجة والخدمات الرقمية',
    
    // Navbar
    navHome: 'الرئيسية',
    navServices: 'كافة الخدمات',
    navCalculator: 'حاسبة التكلفة',
    navReviews: 'تقييمات العملاء',
    navPortfolio: 'أعمالنا والبرمجة',
    navAIConsultant: 'المساعد الذكي',
    navRequestCustom: 'طلب خدمة مخصصة',
    searchPlaceholder: 'ابحث عن أي خدمة رقمية برمجية في باسكود (برمجة، تصميم، ذكاء اصطناعي، أمن سيبراني)...',
    cartTooltip: 'سلة الخدمات',
    
    // Hero
    heroBadge: '✨ BASCODE — CODE. DESIGN. SECURE. SUCCEED.',
    heroTitlePart1: 'منصة باسكود البرمجية تحول أفكارك إلى',
    heroTitleGradient: 'أنظمة كود فائقة الجودة والأمان',
    heroSubtitle: 'جميع الخدمات البرمجية والهندسية: تطوير الويب المتكامل، تطبيقات الجوال، الأنظمة المخصصة، الذكاء الاصطناعي والأمن السيبراني بأسعار محددة بالدينار العراقي والدولار والدرهم الإماراتي.',
    heroCTAExplore: 'استكشف كافة الخدمات',
    heroCTACalculator: 'حاسبة المشاريع التفاعلية',
    heroCTAAIAdvice: 'استشر مستشار باسكود الذكي',
    
    // Stats
    statProjects: '+2,500',
    statProjectsLabel: 'مشروع رقمي ومكتمل في باسكود',
    statSatisfaction: '99.8%',
    statSatisfactionLabel: 'نسبة رضا العملاء التامة',
    statCountries: '+45 دولة',
    statCountriesLabel: 'نخدم عملاء في العراق، الإمارات ودول العالم',
    statRating: '4.98 / 5.0',
    statRatingLabel: 'متوسط تقييمات عملاء باسكود',

    // Section Titles
    servicesTitle: 'دليل خدمات باسكود الرقمية',
    servicesSubtitle: 'اختر الخدمة البرمجية المطلوبة مع إمكانية الدفع والتسعير بالدينار العراقي (IQD)، الدولار (USD) أو الدرهم الإماراتي (AED)',
    allCategories: 'جميع التخصصات',
    filterSortPopular: 'الأكثر شعبية وطلباً',
    filterSortRating: 'الأعلى تقييماً ★',
    filterSortPriceLow: 'السعر: من الأقل للأعلى',
    filterSortPriceHigh: 'السعر: من الأعلى للأقل',
    
    // Service Card
    startingFrom: 'يبدأ من',
    deliveryIn: 'التسليم خلال',
    days: 'أيام',
    viewDetails: 'عرض التفاصيل والباقات',
    orderNow: 'أطلب الآن',
    addToCart: 'إضافة للسلة',
    inCart: 'موجود بالسلة',

    // Reviews Section
    reviewsTitle: 'تقييمات وآراء عملاء باسكود',
    reviewsSubtitle: 'نفخر بتنفيذ آلاف المشروعات البرمجية بأعلى كفاءة وأمان',
    overallRatingScore: '4.98',
    outOfFive: 'من أصل 5.0 نجوم',
    basedOnCount: 'بناءً على 1,850+ تقييم موثوق من عملاء حقيقيين',
    addYourReviewBtn: '✍️ إضافة تقييمك لمشروعك',
    verifiedClientBadge: 'عميل باسكود الموثق',
    filterAllReviews: 'جميع التقييمات',
    filter5Stars: '5 نجوم فقط ★★★★★',
    
    // Add Review Modal
    addReviewModalTitle: 'شاركنا تقييمك وتجربتك مع منصة باسكود (BASCODE)',
    addReviewName: 'الاسم الكامل أو اسم شركتك',
    addReviewRole: 'المسمى الوظيفي / اسم النشاط',
    addReviewCountry: 'الدولة',
    addReviewService: 'الخدمة الرقمية التي حصلت عليها',
    addReviewRating: 'التقييم بالنجمات',
    addReviewComment: 'تفاصيل انطباعك وتجربتك',
    submitReviewBtn: 'إرسال التقييم للنشر الفوري',
    reviewSuccessMsg: 'شكراً لك! تم نشر تقييمك بنجاح وسيطهر ضمن آراء العملاء المميزين.',

    // Calculator Section
    calcTitle: 'حاسبة باسكود التفاعلية لتقدير التكلفة والزمن',
    calcSubtitle: 'حدد متطلبات مشروعك للحصول على تسعير فوري بالدينار العراقي والدولار والدرهم الإماراتي، والتحويل الفوري للطلب',
    calcSelectCategory: '1. اختر مجال الخدمة البرمجية الرئيسي:',
    calcSelectScope: '2. حدد نطاق وحجم المشروع:',
    calcAddons: '3. الإضافات والميزات الخاصة:',
    calcEstimatedTotal: 'التكلفة التقديرية الإجمالية:',
    calcEstimatedTime: 'مدة التنفيذ المتوقعة:',
    calcApplyOrderBtn: 'تحويل هذه الخيارات مباشرة لطلب جديد',

    // AI Consultant
    aiModalTitle: 'مستشار باسكود الذكي لتحديد الخدمات والأنظمة',
    aiModalSubtitle: 'اكتب تفاصيل مشروعك وسيقوم نظام باسكود باقتراح الخدمات وتكلفة ودورة العمل بدقة متناهية',
    aiInputPlaceholder: 'مثال: أريد إنشاء منصة تجارة إلكترونية مع تطبيق جوال باللغة العربية ودعم الدفع بالدينار العراقي ودولار...',
    aiConsultBtn: 'استشارة مستشار باسكود الذكي',
    aiAnalyzing: 'جاري تحليل متطلبات مشروعك بواسطة Gemini AI...',
    aiRecommendationHeading: 'التوصية البرمجية من باسكود:',
    aiSuggestedServices: 'الخدمات المقترحة للتنفيذ:',
    aiEstimatedBudget: 'الميزانية التقديرية:',
    aiEstimatedTimeline: 'الجدول الزمني التقديري:',

    // Portfolio
    portfolioTitle: 'معرض مشاريع وأكواد باسكود',
    portfolioSubtitle: 'نماذج حية لمشاريع برمجية قمنا ببنائها وتأمينها بأعلى المعايير',

    // Order Modal / Checkout
    orderModalTitle: 'تأكيد طلب الخدمة عبر باسكود',
    orderClientName: 'الاسم الكامل',
    orderClientEmail: 'البريد الإلكتروني للعميل',
    orderClientPhone: 'رقم الجوال / الواتساب',
    orderCompanyName: 'اسم الشركة أو المؤسسة (اختياري)',
    orderNotes: 'ملاحظات وتفاصيل المشروع المطلوب',
    orderPaymentMethod: 'اختر طريقة الدفع المفضلة:',
    orderSummary: 'ملخص الحساب والطلب:',
    confirmOrderBtn: 'تأكيد وإرسال الطلب الآن',
    orderSuccessTitle: '🎉 تم إرسال واستلام طلبك بنجاح!',
    orderRefNumber: 'رقم المرجعية للطلب:',
    orderSuccessDesc: 'تم إرسال كافة التفاصيل تلقائياً إلى البريد الإلكتروني الإداري (bascode84@gmail.com)، وسيتم التواصل معك مباشرة للبدء بالتنفيذ.',

    // Footer
    footerDesc: 'باسكود (BASCODE) — المنصة المتخصصة للحلول والبرمجيات، الهويات البصرية، والأمن السيبراني. Code. Design. Secure. Succeed.',
    footerQuickLinks: 'روابط سريعة',
    footerServices: 'خدمات باسكود',
    footerTrust: 'الضمانات والاعتمادات',
    footerGuarantee: 'ضمان استرجاع الأموال 100%',
    footerISO: 'شهادة أمان البيانات وبرمجة الكود ISO 27001',
    footerSupport: 'دعم فني وتواصل مباشر: bascode84@gmail.com',
    copyright: '© 2026 باسكود (BASCODE). جميع الحقوق محفوظة.'
  },
  en: {
    // Brand
    brandName: 'BASCODE',
    brandTagline: 'CODE. DESIGN. SECURE. SUCCEED.',
    
    // Navbar
    navHome: 'Home',
    navServices: 'Services',
    navCalculator: 'Cost Calculator',
    navReviews: 'Client Reviews',
    navPortfolio: 'BASCODE Portfolio',
    navAIConsultant: 'AI Advisor',
    navRequestCustom: 'Custom Order',
    searchPlaceholder: 'Search any service in BASCODE (Web, Mobile, AI, Cyber Security)...',
    cartTooltip: 'Service Cart',
    
    // Hero
    heroBadge: '✨ BASCODE — CODE. DESIGN. SECURE. SUCCEED.',
    heroTitlePart1: 'BASCODE Software Platform Turns Ideas into',
    heroTitleGradient: 'High Quality & Secure Systems',
    heroSubtitle: 'Explore all digital & engineering services in IQD (Iraqi Dinar), USD ($), and AED (UAE Dirham) with 100% guarantee.',
    heroCTAExplore: 'Explore All Services',
    heroCTACalculator: 'Interactive Cost Calculator',
    heroCTAAIAdvice: 'BASCODE AI Advisor',
    
    // Stats
    statProjects: '+2,500',
    statProjectsLabel: 'Projects Delivered by BASCODE',
    statSatisfaction: '99.8%',
    statSatisfactionLabel: 'Client Satisfaction Rate',
    statCountries: '45+ Countries',
    statCountriesLabel: 'Serving Iraq, UAE & Global Clients',
    statRating: '4.98 / 5.0',
    statRatingLabel: 'Average BASCODE Score',

    // Section Titles
    servicesTitle: 'BASCODE Digital Services Directory',
    servicesSubtitle: 'Choose your desired service priced in Iraqi Dinar (IQD), US Dollar (USD), or UAE Dirham (AED)',
    allCategories: 'All Categories',
    filterSortPopular: 'Most Popular',
    filterSortRating: 'Highest Rated ★',
    filterSortPriceLow: 'Price: Low to High',
    filterSortPriceHigh: 'Price: High to Low',
    
    // Service Card
    startingFrom: 'Starting from',
    deliveryIn: 'Delivery in',
    days: 'Days',
    viewDetails: 'View Details & Tiers',
    orderNow: 'Order Now',
    addToCart: 'Add to Cart',
    inCart: 'In Cart',

    // Reviews Section
    reviewsTitle: 'BASCODE Client Reviews',
    reviewsSubtitle: 'Trusted by thousands of businesses for high quality software engineering and security',
    overallRatingScore: '4.98',
    outOfFive: 'Out of 5.0 Stars',
    basedOnCount: 'Based on 1,850+ verified client reviews',
    addYourReviewBtn: '✍️ Submit Review',
    verifiedClientBadge: 'Verified BASCODE Client',
    filterAllReviews: 'All Reviews',
    filter5Stars: '5 Stars Only ★★★★★',

    // Add Review Modal
    addReviewModalTitle: 'Share Your Experience with BASCODE',
    addReviewName: 'Full Name / Company',
    addReviewRole: 'Job Title / Business',
    addReviewCountry: 'Country',
    addReviewService: 'Service Received',
    addReviewRating: 'Star Rating',
    addReviewComment: 'Detailed Feedback',
    submitReviewBtn: 'Publish Review',
    reviewSuccessMsg: 'Thank you! Your review has been published.',

    // Calculator Section
    calcTitle: 'BASCODE Interactive Cost & Timeline Calculator',
    calcSubtitle: 'Configure your project parameters for instant pricing in IQD, USD, or AED and direct order submission to bascode84@gmail.com',
    calcSelectCategory: '1. Select Primary Category:',
    calcSelectScope: '2. Select Project Scale:',
    calcAddons: '3. Special Addons & Features:',
    calcEstimatedTotal: 'Estimated Total Cost:',
    calcEstimatedTime: 'Expected Timeline:',
    calcApplyOrderBtn: 'Apply Selections to Direct Order',

    // AI Consultant
    aiModalTitle: 'BASCODE Smart AI Advisor',
    aiModalSubtitle: 'Describe your idea and Gemini AI will analyze requirements and recommend exact services',
    aiInputPlaceholder: 'Example: I want to build an e-commerce platform with mobile app supporting Iraqi Dinar and USD...',
    aiConsultBtn: 'Consult BASCODE AI Advisor',
    aiAnalyzing: 'Analyzing project scope via Gemini AI...',
    aiRecommendationHeading: 'BASCODE Engineering Recommendation:',
    aiSuggestedServices: 'Suggested Services:',
    aiEstimatedBudget: 'Estimated Budget:',
    aiEstimatedTimeline: 'Estimated Timeline:',

    // Portfolio
    portfolioTitle: 'BASCODE Portfolio & Software Architecture',
    portfolioSubtitle: 'Real-world software systems engineered and secured for clients worldwide',

    // Order Modal / Checkout
    orderModalTitle: 'Confirm Service Order via BASCODE',
    orderClientName: 'Full Name',
    orderClientEmail: 'Email Address',
    orderClientPhone: 'Phone / WhatsApp Number',
    orderCompanyName: 'Company Name (Optional)',
    orderNotes: 'Project Details & Instructions',
    orderPaymentMethod: 'Select Preferred Payment Method:',
    orderSummary: 'Order Summary:',
    confirmOrderBtn: 'Confirm & Send Order',
    orderSuccessTitle: '🎉 Order Received & Sent Successfully!',
    orderRefNumber: 'Order Reference:',
    orderSuccessDesc: 'All order details have been dispatched to administrative email (bascode84@gmail.com). We will reach out immediately.',

    // Footer
    footerDesc: 'BASCODE — Software Development, UI/UX Design, Cyber Security & AI Solutions. CODE. DESIGN. SECURE. SUCCEED.',
    footerQuickLinks: 'Quick Links',
    footerServices: 'BASCODE Services',
    footerTrust: 'Trust & Security',
    footerGuarantee: '100% Money-Back Guarantee',
    footerISO: 'ISO 27001 Certified Security & Quality',
    footerSupport: 'Direct Email Support: bascode84@gmail.com',
    copyright: '© 2026 BASCODE. All Rights Reserved.'
  }
};
