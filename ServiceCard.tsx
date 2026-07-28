import React from 'react';
import { 
  Star, 
  Clock, 
  CheckCircle, 
  Globe, 
  Bot, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  TrendingUp, 
  ShoppingBag, 
  Sparkles, 
  Code,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Service, Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface ServiceCardProps {
  service: Service;
  language: Language;
  currency: Currency;
  onViewDetails: (service: Service) => void;
  onQuickOrder: (service: Service) => void;
  isInCart: boolean;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  Bot,
  Smartphone,
  Palette,
  ShieldCheck,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  Code
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  language,
  currency,
  onViewDetails,
  onQuickOrder,
  isInCart,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const IconComponent = ICON_MAP[service.iconName] || Globe;
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const title = isAr ? service.titleAr : service.titleEn;
  const shortDesc = isAr ? service.shortDescAr : service.shortDescEn;
  const badge = isAr ? service.badgeAr : service.badgeEn;
  const deliverables = isAr ? service.deliverablesAr : service.deliverablesEn;

  return (
    <div className="group relative bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          
          {/* Icon Box */}
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <IconComponent className="w-6 h-6 text-cyan-400" />
          </div>

          {/* Badges & Rating */}
          <div className="flex flex-col items-end gap-1.5">
            {badge && (
              <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {badge}
              </span>
            )}
            
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{service.rating}</span>
              <span className="text-gray-400 font-normal text-[11px]">({service.reviewsCount})</span>
            </div>
          </div>
        </div>

        {/* Service Title & Description */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
          {title}
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
          {shortDesc}
        </p>

        {/* Deliverables Checklist Snippet */}
        <div className="space-y-1.5 mb-6 bg-black/40 p-3 rounded-xl border border-white/5">
          {deliverables.slice(0, 3).map((del, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{del}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Price & Action Buttons */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-[10px] text-gray-400 font-medium">{t.startingFrom}</span>
            <span className="text-lg sm:text-xl font-extrabold text-white">
              {formatPrice(service.basePriceUSD, currency)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{service.deliveryDays} {t.days}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(service)}
            className="w-full bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-bold py-2.5 px-3 rounded-full border border-white/10 transition-all flex items-center justify-center gap-1 cursor-pointer"
            id={`view-details-${service.id}`}
          >
            <span>{t.viewDetails}</span>
          </button>

          <button
            onClick={() => onQuickOrder(service)}
            className={`w-full text-xs font-bold py-2.5 px-3 rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer ${
              isInCart
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-white hover:bg-cyan-400 text-black shadow-md'
            }`}
            id={`quick-order-${service.id}`}
          >
            <span>{isInCart ? t.inCart : t.orderNow}</span>
            {!isInCart && <ArrowIcon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

    </div>
  );

};
