import React, { useState } from 'react';
import { X, Star, CheckCircle, Sparkles } from 'lucide-react';
import { Review, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AddReviewModalProps {
  language: Language;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  language,
  onClose,
  onSubmitReview,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientRole, setClientRole] = useState('');
  const [clientCountry, setClientCountry] = useState('🇸🇦 المملكة العربية السعودية');
  const [serviceTitle, setServiceTitle] = useState('تطوير موقع أو منصة ويب متكاملة');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      clientName: clientName.trim(),
      clientRoleAr: clientRole.trim() || 'عميل في المنصة',
      clientRoleEn: clientRole.trim() || 'Platform Client',
      clientCountry: clientCountry,
      countryCode: 'SA',
      clientAvatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150`,
      serviceTitleAr: serviceTitle,
      serviceTitleEn: serviceTitle,
      rating: rating,
      date: isAr ? 'الآن' : 'Just Now',
      commentAr: comment.trim(),
      commentEn: comment.trim(),
      verified: true,
      projectCostUSD: 1200,
    };

    onSubmitReview(newReview);
    setSubmittedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0c0e12] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          id="close-add-review-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-bold text-white">
                {t.addReviewModalTitle}
              </h3>
            </div>

            {/* Client Name */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.addReviewName} *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={isAr ? 'مثال: م. أحمد العتيبي' : 'e.g. John Miller'}
                className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Role / Business */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.addReviewRole}
              </label>
              <input
                type="text"
                value={clientRole}
                onChange={(e) => setClientRole(e.target.value)}
                placeholder={isAr ? 'مثال: الرئيس التنفيذي - شركة التقنية' : 'e.g. CEO - Tech Corp'}
                className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Country Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.addReviewCountry}
              </label>
              <select
                value={clientCountry}
                onChange={(e) => setClientCountry(e.target.value)}
                className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-500"
              >
                <option value="🇸🇦 المملكة العربية السعودية">🇸🇦 المملكة العربية السعودية (Saudi Arabia)</option>
                <option value="🇦🇪 الإمارات العربية المتحدة">🇦🇪 الإمارات العربية المتحدة (UAE)</option>
                <option value="🇰🇼 دولة الكويت">🇰🇼 دولة الكويت (Kuwait)</option>
                <option value="🇶🇦 دولة قطر">🇶🇦 دولة قطر (Qatar)</option>
                <option value="🇪🇬 جمهورية مصر العربية">🇪🇬 جمهورية مصر العربية (Egypt)</option>
                <option value="🇺🇸 United States">🇺🇸 الولايات المتحدة (United States)</option>
                <option value="🇬🇧 United Kingdom">🇬🇧 المملكة المتحدة (United Kingdom)</option>
              </select>
            </div>

            {/* Star Rating Picker */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.addReviewRating}
              </label>
              <div className="flex items-center gap-2 bg-black/60 p-2.5 rounded-xl border border-white/10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 cursor-pointer focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 transition-all ${
                        star <= rating ? 'text-amber-400 fill-amber-400 scale-110' : 'text-gray-600'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-amber-400 mr-2">{rating} / 5.0</span>
              </div>
            </div>

            {/* Detailed Comment */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                {t.addReviewComment} *
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={isAr ? 'اكتب انطباعك عن أداء الخدمة والسرعة وجودة الكود...' : 'Write your honest review and impression...'}
                className="w-full bg-black/60 border border-white/10 text-gray-200 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-cyan-400 text-black font-bold text-sm py-3 px-4 rounded-full shadow-lg transition-all cursor-pointer mt-2"
              id="submit-review-form-btn"
            >
              {t.submitReviewBtn}
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-extrabold text-white">
              {t.reviewSuccessMsg}
            </h3>
          </div>
        )}

      </div>
    </div>
  );
};
