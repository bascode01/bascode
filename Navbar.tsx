import React, { useState } from 'react';
import { 
  Globe, 
  Search, 
  ShoppingBag, 
  Sparkles, 
  Calculator, 
  Star, 
  Menu, 
  X,
  Code,
  LayoutGrid
} from 'lucide-react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CURRENCIES } from '../data/currencies';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAIConsultant: () => void;
  onOpenCustomOrder: () => void;
  onSearch: (term: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  currency,
  setCurrency,
  cartCount,
  onOpenCart,
  onOpenAIConsultant,
  onOpenCustomOrder,
  onSearch,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const t = TRANSLATIONS[language];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setActiveSection('services');
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'services', label: t.navServices, icon: LayoutGrid },
    { id: 'calculator', label: t.navCalculator, icon: Calculator },
    { id: 'reviews', label: t.navReviews, icon: Star },
    { id: 'portfolio', label: t.navPortfolio, icon: Code },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(`${id}-section`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 text-white transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            id="brand-logo"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white italic">
                {t.brandName}
              </span>
              <span className="block text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">
                DIGITAL ECOSYSTEM
              </span>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex items-center flex-1 max-w-md mx-4 relative"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm rounded-full py-2 px-4 pr-10 pl-4 focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all"
            />
            <button 
              type="submit" 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs lg:text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <Icon className="w-4 h-4 text-cyan-400/80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Advisor Button */}
            <button
              onClick={onOpenAIConsultant}
              className="hidden sm:flex items-center gap-1.5 bg-white/5 border border-purple-500/30 text-purple-300 hover:border-purple-500/60 text-xs lg:text-sm font-bold px-3.5 py-2 rounded-full shadow-md hover:bg-purple-500/10 transition-all cursor-pointer"
              title={t.navAIConsultant}
              id="ai-advisor-nav-btn"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="hidden lg:inline">{t.navAIConsultant}</span>
            </button>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-white/5 text-gray-200 text-xs font-bold px-2.5 py-1.5 rounded-full border border-white/10 focus:border-cyan-500 focus:outline-none cursor-pointer"
              aria-label="Currency"
            >
              {Object.keys(CURRENCIES).map((cKey) => (
                <option key={cKey} value={cKey} className="bg-[#050505] text-white">
                  {CURRENCIES[cKey as Currency].symbol} ({cKey})
                </option>
              ))}
            </select>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
              id="language-switcher-btn"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 transition-all border border-white/10 cursor-pointer"
              title={t.cartTooltip}
              id="cart-drawer-btn"
            >
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-400 text-black font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-black shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e12] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm rounded-full py-2 px-3 pr-9"
            />
            <button type="submit" className="absolute left-3 top-2.5 text-gray-400">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-gray-200 text-xs font-semibold text-right border border-white/5 hover:border-cyan-500/30"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIConsultant();
              }}
              className="flex-1 bg-white/10 border border-purple-500/30 text-white text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>{t.navAIConsultant}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomOrder();
              }}
              className="flex-1 bg-white text-black text-xs font-bold py-2.5 rounded-full hover:bg-cyan-400 transition-all"
            >
              {t.navRequestCustom}
            </button>
          </div>
        </div>
      )}
    </header>
  );

};
