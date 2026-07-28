import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Building, 
  Coins, 
  ShieldCheck, 
  Clock, 
  Send,
  FileCheck2
} from 'lucide-react';
import { CartItem, Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalUSD: number;
  language: Language;
  currency: Currency;
  onOrderCompleted: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalUSD,
  language,
  currency,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'crypto'>('card');
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const randomRef = `BAS-${Math.floor(10000 + Math.random() * 90000)}`;

    const payload = {
      orderId: randomRef,
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      companyName: company,
      notes,
      paymentMethod,
      totalUSD,
      currency,
      items: cartItems,
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderDetails: payload }),
      });
      const data = await res.json();
      if (data.mailtoUrl) {
        setMailtoUrl(data.mailtoUrl);
      }
    } catch (err) {
      console.error('Error submitting order:', err);
    } finally {
      setIsSubmitting(false);
      setOrderRef(randomRef);
      setIsSuccess(true);
      onOrderCompleted();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c0e12] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          id="close-order-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <FileCheck2 className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-extrabold text-white">
                {t.orderModalTitle}
              </h3>
            </div>

            {/* Client Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  {t.orderClientName} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAr ? 'مثال: محمد علي السالم' : 'e.g. David Miller'}
                  className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  {t.orderClientEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@company.com"
                  className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  {t.orderClientPhone} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 50 123 4567"
                  className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  {t.orderCompanyName}
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={isAr ? 'اسم المنشأة إن وجد' : 'Company Name'}
                  className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.orderNotes}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isAr ? 'أضف أي تفاصيل خاصة بمشروعك أو الموعد النهائي المطلوب...' : 'Include any specific project requirements or deadline preferences...'}
                className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Payment Options */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">
                {t.orderPaymentMethod}
              </label>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' : 'bg-black/60 border-white/10 text-gray-400'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-[11px] font-bold">{isAr ? 'بطاقة / Apple Pay' : 'Card / Apple Pay'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'bank' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' : 'bg-black/60 border-white/10 text-gray-400'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span className="text-[11px] font-bold">{isAr ? 'تحويل بنكي مباشر' : 'Bank Transfer'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('crypto')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    paymentMethod === 'crypto' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' : 'bg-black/60 border-white/10 text-gray-400'
                  }`}
                >
                  <Coins className="w-5 h-5" />
                  <span className="text-[11px] font-bold">{isAr ? 'عملات رقمية / USDT' : 'Crypto / USDT'}</span>
                </button>
              </div>
            </div>

            {/* Order Summary Footer */}
            <div className="bg-black/60 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block">{t.orderSummary}</span>
                <span className="text-xl font-extrabold text-white">
                  {formatPrice(totalUSD, currency)}
                </span>
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
                id="confirm-order-submit-btn"
              >
                <Send className="w-4 h-4" />
                <span>{t.confirmOrderBtn}</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">
                {t.orderSuccessTitle}
              </h3>
              <div className="inline-block bg-cyan-500/10 text-cyan-300 font-bold text-sm px-4 py-1.5 rounded-full border border-cyan-500/30">
                {t.orderRefNumber} {orderRef}
              </div>
              <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-2">
                {t.orderSuccessDesc}
              </p>

              {mailtoUrl && (
                <div className="pt-3">
                  <a
                    href={mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'فتح تطبيق البريد لإرسال التفاصيل مباشرة إلى bascode84@gmail.com' : 'Send Order Details to bascode84@gmail.com'}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Order Status Progress Simulation */}
            <div className="bg-black/60 p-5 rounded-2xl border border-white/10 text-right space-y-3 max-w-md mx-auto">
              <div className="text-xs font-bold text-gray-400 mb-2">{isAr ? 'مراحل تنفيذ وربط مشروعك المباشر:' : 'Live Execution Status:'}</div>
              
              <div className="flex items-center gap-3 text-xs text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>1. تم استلام الطلب وتأكيد بيانات العقد</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-cyan-400 font-bold">
                <Clock className="w-4 h-4 shrink-0 animate-spin" />
                <span>2. تعيين الخبراء والمهندسين وجاري البدء الفوري</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>3. الفحص الأمني والجودة وااختبارات الأداء</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <span>4. التسليم النهائي وتسليم كافة الحقوق والمستندات</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 px-6 rounded-full border border-white/10 transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق ومتابعة التصفح' : 'Close and Continue Browsing'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
