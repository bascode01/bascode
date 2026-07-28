import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ShoppingBag, 
  HelpCircle, 
  Code2, 
  Layers,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Service, ServiceTier, Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface ServiceDetailModalProps {
  service: Service | null;
  language: Language;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (service: Service, tier: 'basic' | 'pro' | 'enterprise') => void;
  onDirectCheckout: (service: Service, tier: 'basic' | 'pro' | 'enterprise') => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  language,
  currency,
  onClose,
  onAddToCart,
  onDirectCheckout,
}) => {
  if (!service) return null;

  const [selectedTierId, setSelectedTierId] = useState<'basic' | 'pro' | 'enterprise'>('pro');
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const title = isAr ? service.titleAr : service.titleEn;
  const fullDesc = (isAr ? service.fullDescAr : service.fullDescEn) || (isAr ? service.shortDescAr : service.shortDescEn);
  const deliverables = isAr ? service.deliverablesAr : service.deliverablesEn;
  const faqs = isAr ? service.faqsAr : service.faqsEn;

  const selectedTier = service.tiers.find((t) => t.id === selectedTierId) || service.tiers[0];
  const currentPriceUSD = Math.round(service.basePriceUSD * selectedTier.priceMultiplier);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                {service.badgeAr || 'خدمة متميزة'}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{service.rating}</span>
                <span className="text-slate-500">({service.reviewsCount} {isAr ? 'تقييم' : 'reviews'})</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            id="close-detail-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Overview Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
              {isAr ? 'الوصف الشامل للخدمة:' : 'Service Overview:'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              {fullDesc}
            </p>
          </div>

          {/* Service Package Tiers Selection */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'اختر الباقة المناسبة لمشروعك:' : 'Select Package Tier:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.tiers.map((tier) => {
                const isSelected = tier.id === selectedTierId;
                const tierPrice = Math.round(service.basePriceUSD * tier.priceMultiplier);
                const tierName = isAr ? tier.nameAr : tier.nameEn;
                const tierFeatures = isAr ? tier.featuresAr : tier.featuresEn;

                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-950 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-500/20'
                        : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                          {tierName}
                        </span>
                        {tier.id === 'pro' && (
                          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                            {isAr ? 'الموصى بها' : 'Popular'}
                          </span>
                        )}
                      </div>

                      <div className="my-3">
                        <span className="text-2xl font-black text-white">
                          {formatPrice(tierPrice, currency)}
                        </span>
                        <span className="text-xs text-slate-400 block mt-0.5">
                          <Clock className="w-3 h-3 inline mr-1 text-cyan-400" />
                          {tier.deliveryDays} {t.days}
                        </span>
                      </div>

                      <ul className="space-y-2 my-4">
                        {tierFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-center">
                      <span className={`text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {isSelected ? (isAr ? '✓ الباقة المختارة' : '✓ Selected Tier') : (isAr ? 'انقر للاختيار' : 'Click to select')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
              {isAr ? 'ماذا تستلم عند طلب هذه الخدمة (المخرجات المباشرة):' : 'Key Project Deliverables:'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          {service.techStack && service.techStack.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? 'التقنيات المستخدمة بالعمل:' : 'Technologies & Tech Stack:'}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span key={tech} className="bg-slate-950 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800">
                    ⚡ {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Accordion */}
          {faqs && faqs.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? 'الأسئلة الشائعة حول الخدمة:' : 'Frequently Asked Questions:'}</span>
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-sm font-bold text-cyan-300 mb-1">Q: {faq.question}</div>
                    <div className="text-xs sm:text-sm text-slate-300">A: {faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-10">
          <div>
            <span className="text-xs text-slate-400 block">{isAr ? 'الإجمالي للباقة المختارة:' : 'Selected Tier Total:'}</span>
            <span className="text-2xl font-black text-white">
              {formatPrice(currentPriceUSD, currency)}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToCart(service, selectedTierId);
                onClose();
              }}
              className="flex-1 sm:flex-none bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="modal-add-to-cart-btn"
            >
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span>{t.addToCart}</span>
            </button>

            <button
              onClick={() => {
                onDirectCheckout(service, selectedTierId);
                onClose();
              }}
              className="flex-1 sm:flex-none bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="modal-direct-checkout-btn"
            >
              <span>{t.orderNow}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
