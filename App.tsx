import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CalculatorSection } from './components/CalculatorSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AIConsultantModal } from './components/AIConsultantModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

import { SERVICES, REVIEWS } from './data/servicesData';
import { Service, Review, CartItem, Language, Currency } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [currency, setCurrency] = useState<Currency>('SAR');
  const [activeSection, setActiveSection] = useState('hero');

  // Datasets state
  const [servicesList, setServicesList] = useState<Service[]>(SERVICES);
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals state
  const [detailService, setDetailService] = useState<Service | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [checkoutTotalUSD, setCheckoutTotalUSD] = useState(0);

  // Sync HTML dir attribute for RTL/LTR
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Cart operations
  const handleAddToCart = (service: Service, tierId: 'basic' | 'pro' | 'enterprise' = 'pro') => {
    const tierObj = service.tiers.find((t) => t.id === tierId) || service.tiers[0];
    const unitPriceUSD = Math.round(service.basePriceUSD * tierObj.priceMultiplier);

    const existingIndex = cartItems.findIndex(
      (item) => item.service.id === service.id && item.tier === tierId
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `cart-${service.id}-${tierId}-${Date.now()}`,
        service,
        tier: tierId,
        tierNameAr: tierObj.nameAr,
        tierNameEn: tierObj.nameEn,
        unitPriceUSD,
        selectedAddons: [],
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }

    setCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  // Direct checkout trigger
  const handleDirectCheckout = (service: Service, tierId: 'basic' | 'pro' | 'enterprise') => {
    handleAddToCart(service, tierId);
    const tierObj = service.tiers.find((t) => t.id === tierId) || service.tiers[0];
    const price = Math.round(service.basePriceUSD * tierObj.priceMultiplier);
    setCheckoutTotalUSD(price);
    setOrderModalOpen(true);
  };

  // From Calculator Section
  const handleApplyCalculatedOrder = (calcData: {
    categoryName: string;
    scaleName: string;
    totalUSD: number;
    timelineDays: number;
    addonsList: string[];
  }) => {
    const matchedService = servicesList[0]; // Primary web service
    handleAddToCart(matchedService, 'pro');
    setCheckoutTotalUSD(calcData.totalUSD);
    setOrderModalOpen(true);
  };

  // From AI Consultant
  const handleApplyAISuggestions = (suggestedServices: Service[]) => {
    suggestedServices.forEach((s) => {
      handleAddToCart(s, 'pro');
    });
    setCartOpen(true);
  };

  // Review submission
  const handleAddReview = (newReview: Review) => {
    setReviewsList([newReview, ...reviewsList]);
  };

  // Search filter trigger
  const handleSearchTrigger = (term: string) => {
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-sans selection:bg-cyan-400 selection:text-black">
      
      {/* Sticky Header Navbar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        onOpenAIConsultant={() => setAiModalOpen(true)}
        onOpenCustomOrder={() => setOrderModalOpen(true)}
        onSearch={handleSearchTrigger}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Banner */}
        <HeroSection
          language={language}
          onExploreServices={() => {
            const el = document.getElementById('services-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCalculator={() => {
            const el = document.getElementById('calculator-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAIConsultant={() => setAiModalOpen(true)}
          onSelectTag={(tag) => {
            setSelectedCategory('all');
            const el = document.getElementById('services-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Services Directory Grid */}
        <ServicesGrid
          services={servicesList}
          language={language}
          currency={currency}
          onViewDetails={(s) => setDetailService(s)}
          onQuickOrder={(s) => handleAddToCart(s, 'pro')}
          cartServiceIds={cartItems.map((i) => i.service.id)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Interactive Price & Duration Estimator Calculator */}
        <CalculatorSection
          language={language}
          currency={currency}
          onApplyCalculatedOrder={handleApplyCalculatedOrder}
        />

        {/* Global Client Reviews & Ratings */}
        <ReviewsSection
          reviews={reviewsList}
          language={language}
          onAddReviewSubmit={handleAddReview}
        />

        {/* Portfolio & Innovation Showcase */}
        <PortfolioSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigateSection={(secId) => {
          const el = document.getElementById(`${secId}-section`);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals & Drawers */}

      {/* 1. Service Details Modal */}
      <ServiceDetailModal
        service={detailService}
        language={language}
        currency={currency}
        onClose={() => setDetailService(null)}
        onAddToCart={(s, tier) => handleAddToCart(s, tier)}
        onDirectCheckout={(s, tier) => handleDirectCheckout(s, tier)}
      />

      {/* 2. AI Service Recommender Modal */}
      {aiModalOpen && (
        <AIConsultantModal
          language={language}
          currency={currency}
          allServices={servicesList}
          onClose={() => setAiModalOpen(false)}
          onApplySuggestedServices={handleApplyAISuggestions}
        />
      )}

      {/* 3. Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        language={language}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={(finalTotalUSD) => {
          setCheckoutTotalUSD(finalTotalUSD);
          setOrderModalOpen(true);
        }}
      />

      {/* 4. Checkout / Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        cartItems={cartItems}
        totalUSD={checkoutTotalUSD || cartItems.reduce((s, i) => s + i.unitPriceUSD * i.quantity, 0)}
        language={language}
        currency={currency}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />

    </div>
  );
}
