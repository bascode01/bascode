import React from 'react';
import { ExternalLink, TrendingUp, Sparkles } from 'lucide-react';
import { PORTFOLIO } from '../data/servicesData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PortfolioSectionProps {
  language: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  return (
    <section id="portfolio-section" className="py-16 bg-[#050505] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>ابتكارات رقمية عالمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.portfolioTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => {
            const title = isAr ? item.titleAr : item.titleEn;
            const category = isAr ? item.categoryAr : item.categoryEn;
            const metrics = isAr ? item.metricsAr : item.metricsEn;
            const description = isAr ? item.descriptionAr : item.descriptionEn;

            return (
              <div 
                key={item.id}
                className="group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/40 to-transparent" />
                    
                    <span className="absolute top-3 right-3 bg-black/80 text-cyan-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                      {category}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold text-gray-200 bg-black/80 px-2.5 py-1 rounded-full border border-white/10">
                      {item.clientCountry}
                    </span>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {description}
                    </p>

                    {/* Impact Metric Banner */}
                    <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold text-emerald-300">{metrics}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold bg-black/40 text-gray-300 px-2.5 py-1 rounded-full border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );

};
