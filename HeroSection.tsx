import React from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Calculator, 
  Star, 
  ShieldCheck, 
  Award, 
  Globe2, 
  CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  language: Language;
  onExploreServices: () => void;
  onOpenCalculator: () => void;
  onOpenAIConsultant: () => void;
  onSelectTag: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreServices,
  onOpenCalculator,
  onOpenAIConsultant,
  onSelectTag,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const popularTags = isAr 
    ? ['#ذكاء_اصطناعي', '#تطوير_مواقع', '#تطبيقات_جوال', '#تصميم_واجهات', '#تسويق_رقمي', '#أمن_سيبراني']
    : ['#AI_Solutions', '#Web_Dev', '#Mobile_Apps', '#UI_UX', '#SEO_Growth', '#Cybersecurity'];

  return (
    <div id="hero-section" className="relative overflow-hidden bg-[#050505] text-white pt-12 pb-20 border-b border-white/10">
      
      {/* Sleek Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>{t.heroBadge}</span>
          </div>
        </div>

        {/* Main Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            {t.heroTitlePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t.heroTitleGradient}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>

          {/* Action Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto bg-white text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-cyan-400 transition-all shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-explore-btn"
            >
              <span>{t.heroCTAExplore}</span>
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-calculator-btn"
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>{t.heroCTACalculator}</span>
            </button>

            <button
              onClick={onOpenAIConsultant}
              className="w-full sm:w-auto bg-white/5 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 text-purple-300 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-ai-btn"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>{t.heroCTAAIAdvice}</span>
            </button>
          </div>

          {/* Popular Search Chips */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
            <span className="font-bold uppercase tracking-wider text-gray-500 text-[10px]">{isAr ? 'الخدمات الأكثر بحثاً:' : 'POPULAR:'}</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag(tag.replace('#', ''))}
                className="bg-white/5 hover:bg-white/10 text-cyan-400 px-3 py-1 rounded-full border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer text-xs"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-[#0c0e12] p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.statProjects}</div>
              <div className="text-xs text-gray-400 font-medium">{t.statProjectsLabel}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.statSatisfaction}</div>
              <div className="text-xs text-gray-400 font-medium">{t.statSatisfactionLabel}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.statCountries}</div>
              <div className="text-xs text-gray-400 font-medium">{t.statCountriesLabel}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.statRating}</div>
              <div className="text-xs text-gray-400 font-medium">{t.statRatingLabel}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};
