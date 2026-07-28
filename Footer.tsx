import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Award, 
  Headphones, 
  Heart, 
  CheckCircle2,
  FileCode 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onNavigateSection: (sec: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigateSection }) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  return (
    <footer className="bg-[#0c0e12] text-gray-400 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Trust Guarantees Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.footerGuarantee}</h4>
              <p className="text-[11px] text-gray-400">{isAr ? 'التزام تام بالجودة والرضا الكلي' : 'Full quality & satisfaction policy'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.footerISO}</h4>
              <p className="text-[11px] text-gray-400">{isAr ? 'تشفير كامل لكافة بيانات المشروعات' : 'Enterprise grade encryption'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.footerSupport}</h4>
              <p className="text-[11px] text-gray-400">{isAr ? 'فريق هندسي متخصص متابع طوال الوقت' : 'Around the clock expert assistance'}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white italic">{t.brandName}</span>
            </div>

            <p className="text-xs leading-relaxed text-gray-300 max-w-sm">
              {t.footerDesc}
            </p>

            {/* Payment Method Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold text-gray-200">
              <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10">💳 Mada</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10">🍎 Apple Pay</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10">💳 Visa/MC</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10">🟡 Tabby</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10">🌐 Crypto USDT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{t.footerQuickLinks}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('hero')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('services')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {t.navServices}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('calculator')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {t.navCalculator}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('reviews')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {t.navReviews}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {t.navPortfolio}
                </button>
              </li>
              <li className="pt-2">
                <a 
                  href="/bascode-platform.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-blue-500/20 hover:from-amber-500/30 hover:to-blue-500/30 text-amber-300 font-bold text-xs px-3 py-1.5 rounded-full border border-amber-500/30 transition-all"
                >
                  <FileCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? '📄 فتح / تحميل ملف HTML الكامل' : '📄 Open/Download HTML Platform'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{t.footerServices}</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'برمجة وتطوير المنصات والـ Fullstack' : 'Fullstack Web & Platform Architecture'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'تطبيقات الجوال الآيفون والأندرويد' : 'Native iOS & Android Applications'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'دمج نماذج الذكاء الاصطناعي Gemini' : 'Gemini AI & Bot Integrations'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'تصميم تجربة الواجهات UI/UX' : 'Luxury UI/UX & Design Systems'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'الأمن السيبراني والبنية السحابية' : 'Cybersecurity & AWS Cloud Infrastructure'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sleek Bottom Bar with Trust Score Metrics */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-6 text-[11px] font-bold">
            <span className="text-white"><strong className="text-cyan-400 font-extrabold">4.9/5.0</strong> Customer Trust</span>
            <span className="text-white"><strong className="text-cyan-400 font-extrabold">50+</strong> Digital Services</span>
            <span className="text-white"><strong className="text-cyan-400 font-extrabold">120+</strong> Global Partners</span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span>{t.copyright}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>Standard for Digital Excellence</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );

};
