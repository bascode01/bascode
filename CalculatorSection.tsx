import React, { useState } from 'react';
import { 
  Calculator, 
  CheckSquare, 
  Square, 
  Clock, 
  Zap, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface CalculatorSectionProps {
  language: Language;
  currency: Currency;
  onApplyCalculatedOrder: (details: {
    categoryName: string;
    scaleName: string;
    totalUSD: number;
    timelineDays: number;
    addonsList: string[];
  }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  language,
  currency,
  onApplyCalculatedOrder,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<'web' | 'mobile' | 'ai' | 'uiux' | 'security' | 'marketing'>('web');
  const [selectedScale, setSelectedScale] = useState<'micro' | 'growth' | 'enterprise'>('growth');
  
  const [addons, setAddons] = useState({
    express: false,
    multilingual: false,
    security: false,
    aiIntegration: false,
    maintenance: false,
  });

  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Base Prices Matrix in USD
  const domainBasePrices = {
    web: { baseUSD: 600, days: 8, nameAr: 'تطوير موقع/منصة ويب', nameEn: 'Web Platform Dev' },
    mobile: { baseUSD: 950, days: 12, nameAr: 'تطبيق جوال (iOS & Android)', nameEn: 'Mobile App (iOS/Android)' },
    ai: { baseUSD: 550, days: 6, nameAr: 'حلول ذكاء اصطناعي وأتمتة', nameEn: 'AI & Bot Integration' },
    uiux: { baseUSD: 400, days: 5, nameAr: 'تصميم واجهات UI/UX وFigma', nameEn: 'UI/UX & Branding' },
    security: { baseUSD: 500, days: 5, nameAr: 'أمن سيبراني وسيرفرات سحابية', nameEn: 'Cybersecurity & DevOps' },
    marketing: { baseUSD: 450, days: 7, nameAr: 'تسويق رقمي وSEO', nameEn: 'Digital Marketing & SEO' },
  };

  const scaleMultipliers = {
    micro: { mult: 0.8, daysAdd: 0, nameAr: 'مشروع ناشئ مصغر', nameEn: 'Micro Startup Scope' },
    growth: { mult: 1.5, daysAdd: 4, nameAr: 'مشروع نمو متكامل', nameEn: 'Growth Scale Scope' },
    enterprise: { mult: 2.8, daysAdd: 10, nameAr: 'منصة مؤسسية كبرى', nameEn: 'Enterprise Suite' },
  };

  const addonPricesUSD = {
    express: 200,
    multilingual: 150,
    security: 180,
    aiIntegration: 250,
    maintenance: 300,
  };

  // Calculate total
  const currentDomainObj = domainBasePrices[selectedDomain];
  const currentScaleObj = scaleMultipliers[selectedScale];

  let subtotal = currentDomainObj.baseUSD * currentScaleObj.mult;
  let timelineDays = currentDomainObj.days + currentScaleObj.daysAdd;

  const addonsListNames: string[] = [];

  if (addons.express) {
    subtotal += addonPricesUSD.express;
    timelineDays = Math.max(3, Math.round(timelineDays * 0.6)); // Fast delivery reduction
    addonsListNames.push(isAr ? 'تسليم سريع واستثنائي' : 'Express Delivery');
  }
  if (addons.multilingual) {
    subtotal += addonPricesUSD.multilingual;
    timelineDays += 2;
    addonsListNames.push(isAr ? 'دعم متعدد اللغات' : 'Multilingual Support');
  }
  if (addons.security) {
    subtotal += addonPricesUSD.security;
    addonsListNames.push(isAr ? 'حماية مشددة وشهادات SSL' : 'Hardened Security');
  }
  if (addons.aiIntegration) {
    subtotal += addonPricesUSD.aiIntegration;
    timelineDays += 2;
    addonsListNames.push(isAr ? 'ربط شات بوت ذكاء اصطناعي' : 'AI Chatbot Sync');
  }
  if (addons.maintenance) {
    subtotal += addonPricesUSD.maintenance;
    addonsListNames.push(isAr ? 'دعم وصيانة مجانية لمدة سنة' : '1-Year Maintenance');
  }

  const calculatedTotalUSD = Math.round(subtotal);

  const handleApplyOrder = () => {
    onApplyCalculatedOrder({
      categoryName: isAr ? currentDomainObj.nameAr : currentDomainObj.nameEn,
      scaleName: isAr ? currentScaleObj.nameAr : currentScaleObj.nameEn,
      totalUSD: calculatedTotalUSD,
      timelineDays,
      addonsList: addonsListNames,
    });
  };

  return (
    <section id="calculator-section" className="py-16 bg-[#050505] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Calculator className="w-4 h-4" />
            <span>حاسبة الأسعار التفاعلية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.calcTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Main Calculator Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0c0e12] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Select Domain */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-3">
                {t.calcSelectCategory}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(domainBasePrices).map(([dKey, dObj]) => {
                  const isSelected = selectedDomain === dKey;
                  return (
                    <button
                      key={dKey}
                      onClick={() => setSelectedDomain(dKey as any)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all text-right cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-cyan-500 text-cyan-300 shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                      }`}
                    >
                      <div>{isAr ? dObj.nameAr : dObj.nameEn}</div>
                      <div className="text-[10px] text-gray-400 font-normal mt-1">
                        {isAr ? 'يبدأ من ' : 'From '}{formatPrice(dObj.baseUSD, currency)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Project Scale */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-3">
                {t.calcSelectScope}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(scaleMultipliers).map(([sKey, sObj]) => {
                  const isSelected = selectedScale === sKey;
                  return (
                    <button
                      key={sKey}
                      onClick={() => setSelectedScale(sKey as any)}
                      className={`p-4 rounded-xl border text-xs sm:text-sm font-bold transition-all text-right cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-cyan-500 text-white ring-1 ring-cyan-500/30'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-cyan-400 mb-0.5">{isAr ? sObj.nameAr : sObj.nameEn}</div>
                      <div className="text-[11px] text-gray-400 font-normal">
                        {sKey === 'micro' ? (isAr ? 'ممتاز للمشروعات الفردية والناشئة' : 'Ideal for MVP') : sKey === 'growth' ? (isAr ? 'الأكثر طلباً للشركات والمتاجر' : 'Popular for Growing Business') : (isAr ? 'منصة متكاملة للمؤسسات الكبرى' : 'Large Enterprise Scale')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addons Checklist */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-3">
                {t.calcAddons}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div 
                  onClick={() => setAddons({ ...addons, express: !addons.express })}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.express ? 'bg-cyan-500/10 border-cyan-500/60 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {addons.express ? <CheckSquare className="w-4 h-4 text-cyan-400" /> : <Square className="w-4 h-4 text-gray-600" />}
                    <span>{isAr ? 'تسليم أسرع 40% (توصيل سريع)' : 'Express 40% Faster Delivery'}</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">+{formatPrice(addonPricesUSD.express, currency)}</span>
                </div>

                <div 
                  onClick={() => setAddons({ ...addons, multilingual: !addons.multilingual })}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.multilingual ? 'bg-cyan-500/10 border-cyan-500/60 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {addons.multilingual ? <CheckSquare className="w-4 h-4 text-cyan-400" /> : <Square className="w-4 h-4 text-gray-600" />}
                    <span>{isAr ? 'دعم تعدد اللغات (عربي + إنجليزي)' : 'Multilingual AR & EN'}</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">+{formatPrice(addonPricesUSD.multilingual, currency)}</span>
                </div>

                <div 
                  onClick={() => setAddons({ ...addons, security: !addons.security })}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.security ? 'bg-cyan-500/10 border-cyan-500/60 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {addons.security ? <CheckSquare className="w-4 h-4 text-cyan-400" /> : <Square className="w-4 h-4 text-gray-600" />}
                    <span>{isAr ? 'حماية مشددة وضمان عدم الاختراق' : 'Vulnerability Hardening'}</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">+{formatPrice(addonPricesUSD.security, currency)}</span>
                </div>

                <div 
                  onClick={() => setAddons({ ...addons, aiIntegration: !addons.aiIntegration })}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.aiIntegration ? 'bg-cyan-500/10 border-cyan-500/60 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {addons.aiIntegration ? <CheckSquare className="w-4 h-4 text-cyan-400" /> : <Square className="w-4 h-4 text-gray-600" />}
                    <span>{isAr ? 'دمج شات بوت ذكاء اصطناعي (Gemini)' : 'Gemini AI Chatbot Sync'}</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold">+{formatPrice(addonPricesUSD.aiIntegration, currency)}</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Summary Box Column */}
          <div className="lg:col-span-4 bg-black/60 p-6 rounded-2xl border border-white/10 space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>{isAr ? 'ملخص الحساب المباشر' : 'Live Estimated Quote'}</span>
            </div>

            <div className="space-y-3 text-xs text-gray-300 border-b border-white/10 pb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">{isAr ? 'الخدمة الرئيسية:' : 'Primary Service:'}</span>
                <span className="font-bold text-white">{isAr ? currentDomainObj.nameAr : currentDomainObj.nameEn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{isAr ? 'حجم المشروع:' : 'Project Scale:'}</span>
                <span className="font-bold text-white">{isAr ? currentScaleObj.nameAr : currentScaleObj.nameEn}</span>
              </div>
              {addonsListNames.length > 0 && (
                <div>
                  <span className="text-gray-400 block mb-1">{isAr ? 'الإضافات المحددة:' : 'Selected Addons:'}</span>
                  <div className="space-y-1">
                    {addonsListNames.map((add, i) => (
                      <div key={i} className="text-[11px] text-cyan-300 font-medium">+ {add}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-bold">{t.calcEstimatedTime}</span>
                <span className="text-sm font-bold text-amber-400 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{timelineDays} {t.days}</span>
                </span>
              </div>

              <div>
                <span className="text-xs text-gray-400 block">{t.calcEstimatedTotal}</span>
                <span className="text-3xl font-extrabold text-white">
                  {formatPrice(calculatedTotalUSD, currency)}
                </span>
              </div>
            </div>

            <button
              onClick={handleApplyOrder}
              className="w-full bg-white hover:bg-cyan-400 text-black font-bold text-sm py-3.5 px-4 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="calc-apply-order-btn"
            >
              <span>{t.calcApplyOrderBtn}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );

};
