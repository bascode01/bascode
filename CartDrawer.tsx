import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowLeft, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { CartItem, Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  currency: Currency;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (finalSubtotalUSD: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  language,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const rawSubtotalUSD = items.reduce(
    (sum, item) => sum + item.unitPriceUSD * item.quantity,
    0
  );

  const discountAmountUSD = (rawSubtotalUSD * discountPercent) / 100;
  const finalSubtotalUSD = Math.max(0, rawSubtotalUSD - discountAmountUSD);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'GLOBAL2026' || promoCode.trim().toUpperCase() === 'NEXUS10') {
      setDiscountPercent(10);
      setPromoSuccess(isAr ? 'تم تطبيق خصم 10% بنجاح! 🎉' : '10% Discount applied! 🎉');
    } else {
      setPromoError(isAr ? 'كود الخصم غير صحيح (جرب: GLOBAL2026)' : 'Invalid code (Try: GLOBAL2026)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-[#0c0e12] h-full border-l border-white/10 flex flex-col justify-between p-6 overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">{t.cartTooltip}</h3>
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              id="close-cart-drawer-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {items.length > 0 ? (
            <div className="space-y-4 mb-6">
              {items.map((item) => {
                const title = isAr ? item.service.titleAr : item.service.titleEn;
                const tierName = isAr ? item.tierNameAr : item.tierNameEn;

                return (
                  <div key={item.id} className="bg-white/5 p-4 rounded-2xl border border-white/10 relative group">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="absolute left-3 top-3 text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
                      title={isAr ? 'حذف' : 'Remove'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="pr-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-1">
                        {title}
                      </h4>
                      <div className="text-[11px] text-cyan-400 font-semibold mb-2">
                        {isAr ? 'الباقة:' : 'Tier:'} {tierName}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm font-extrabold text-white">
                          {formatPrice(item.unitPriceUSD * item.quantity, currency)}
                        </span>

                        <div className="flex items-center gap-2 bg-black/60 px-2 py-1 rounded-full border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-gray-400 hover:text-white text-xs px-1.5 font-bold cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-gray-400 hover:text-white text-xs px-1.5 font-bold cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 space-y-2">
              <ShoppingBag className="w-12 h-12 mx-auto text-gray-600" />
              <p className="text-sm font-bold">{isAr ? 'سلة الخدمات فارغة حالياً' : 'Your service cart is empty'}</p>
              <p className="text-xs">{isAr ? 'تصفح دليل الخدمات وأضف الخدمات المطلوبة' : 'Browse services and add them to order'}</p>
            </div>
          )}
        </div>

        {/* Bottom Checkout Section */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={isAr ? 'كود الخصم (GLOBAL2026)' : 'Promo Code (GLOBAL2026)'}
                  className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs rounded-xl py-2 px-3 pr-8 focus:outline-none focus:border-cyan-500"
                />
                <Tag className="w-3.5 h-3.5 text-gray-500 absolute left-2.5 top-2.5" />
              </div>
              <button
                type="submit"
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 rounded-xl border border-white/10 transition-colors cursor-pointer"
              >
                {isAr ? 'تطبيق' : 'Apply'}
              </button>
            </form>

            {promoError && <p className="text-[11px] text-red-400 font-semibold">{promoError}</p>}
            {promoSuccess && <p className="text-[11px] text-emerald-400 font-semibold">{promoSuccess}</p>}

            {/* Calculations Summary */}
            <div className="space-y-2 text-xs text-gray-300 bg-black/60 p-3.5 rounded-2xl border border-white/10">
              <div className="flex justify-between">
                <span className="text-gray-400">{isAr ? 'المجموع الأساسي:' : 'Subtotal:'}</span>
                <span>{formatPrice(rawSubtotalUSD, currency)}</span>
              </div>

              {discountAmountUSD > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>{isAr ? 'مبلغ الخصم (10%):' : 'Discount (10%):'}</span>
                  <span>-{formatPrice(discountAmountUSD, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
                <span>{isAr ? 'الإجمالي النهائـي:' : 'Total Amount:'}</span>
                <span className="text-cyan-300">{formatPrice(finalSubtotalUSD, currency)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onProceedToCheckout(finalSubtotalUSD);
                onClose();
              }}
              className="w-full bg-white hover:bg-cyan-400 text-black font-bold text-sm py-3.5 px-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="proceed-to-checkout-btn"
            >
              <span>{isAr ? 'متابعة الدفع وتأكيد الطلب' : 'Proceed to Checkout'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'حماية مشدودة ومعتمدة مع ضمان استرجاع الأموال 100%' : '100% Money Back Guaranteed & Encrypted'}</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
