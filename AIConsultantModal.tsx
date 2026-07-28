import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, CheckCircle, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Service, Language, Currency } from '../types';
import { formatPrice } from '../data/currencies';
import { TRANSLATIONS } from '../data/translations';

interface AIConsultantModalProps {
  language: Language;
  currency: Currency;
  allServices: Service[];
  onClose: () => void;
  onApplySuggestedServices: (services: Service[]) => void;
}

export const AIConsultantModal: React.FC<AIConsultantModalProps> = ({
  language,
  currency,
  allServices,
  onClose,
  onApplySuggestedServices,
}) => {
  const [userQuery, setUserQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<{
    recommendation: string;
    suggestedServiceIds: string[];
    estimatedTime: string;
    estimatedCostUSD: number;
    keyDeliverables?: string[];
  } | null>(null);

  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setLoading(true);
    setAiResult(null);

    try {
      const response = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userQuery,
          language: language,
        }),
      });

      const data = await response.json();
      if (data) {
        setAiResult({
          recommendation: data.recommendation || (isAr ? 'بناءً على طلبك، نوصي بالحزمة المرفقة للبدء الفوري.' : 'Based on your prompt, we recommend this bundle.'),
          suggestedServiceIds: data.suggestedServiceIds || ['web-fullstack', 'uiux-design'],
          estimatedTime: data.estimatedTime || (isAr ? '10 - 15 يوم عمل' : '10 - 15 Business Days'),
          estimatedCostUSD: data.estimatedCostUSD || 1300,
          keyDeliverables: data.keyDeliverables || (isAr ? ['تطوير الواجهة كاملة', 'لوحة التحكم', 'ربط الدفع'] : ['Full UI Development', 'Admin Panel', 'Payment Gateways']),
        });
      }
    } catch (err) {
      console.error(err);
      // Fallback
      setAiResult({
        recommendation: isAr
          ? `بناءً على طلبك ("${userQuery}")، نوصي بالجمع بين: برمجة منصة الويب المتكاملة + تصميم تجربة المستخدم UI/UX + إعداد البنية السحابية.`
          : `Based on your request ("${userQuery}"), we recommend: Fullstack Web App + UI/UX Design + Cloud Setup.`,
        suggestedServiceIds: ['web-fullstack', 'uiux-design'],
        estimatedTime: isAr ? '12 - 18 يوم عمل' : '12 - 18 Days',
        estimatedCostUSD: 1300,
        keyDeliverables: isAr ? ['تطوير منصة تفاعلية', 'لوحة تحكم إدارية', 'دعم واستضافة'] : ['Interactive Web Platform', 'Admin Dashboard', 'Cloud Setup'],
      });
    } finally {
      setLoading(false);
    }
  };

  const suggestedServicesObj = allServices.filter((s) =>
    aiResult?.suggestedServiceIds.includes(s.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c0e12] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          id="close-ai-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-lg">
            <Bot className="w-6 h-6 text-cyan-400 animate-bounce" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>{t.aiModalTitle}</span>
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </h3>
            <p className="text-xs text-gray-400">
              {t.aiModalSubtitle}
            </p>
          </div>
        </div>

        {/* Prompt Input Form */}
        <form onSubmit={handleConsult} className="space-y-4 mb-6">
          <div>
            <textarea
              rows={3}
              required
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder={t.aiInputPlaceholder}
              className="w-full bg-black/60 border border-white/10 text-gray-100 placeholder-gray-500 text-xs sm:text-sm rounded-2xl p-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-cyan-400 text-black font-bold text-sm py-3.5 px-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            id="submit-ai-consult-btn"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin text-black" />
                <span>{t.aiAnalyzing}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>{t.aiConsultBtn}</span>
              </span>
            )}
          </button>
        </form>

        {/* AI Result Card */}
        {aiResult && (
          <div className="bg-black/60 p-6 rounded-2xl border border-white/10 space-y-4 animate-fadeIn">
            
            <div>
              <span className="text-xs font-bold text-cyan-400 block mb-1">
                {t.aiRecommendationHeading}
              </span>
              <p className="text-sm text-gray-200 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/10">
                {aiResult.recommendation}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-gray-400 block mb-1">{t.aiEstimatedBudget}</span>
                <span className="text-lg font-black text-emerald-400">
                  {formatPrice(aiResult.estimatedCostUSD, currency)}
                </span>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-gray-400 block mb-1">{t.aiEstimatedTimeline}</span>
                <span className="text-sm font-bold text-amber-300 flex items-center gap-1 mt-1">
                  <Clock className="w-4 h-4" />
                  <span>{aiResult.estimatedTime}</span>
                </span>
              </div>
            </div>

            {/* Suggested Services List */}
            {suggestedServicesObj.length > 0 && (
              <div>
                <span className="text-xs font-bold text-gray-400 block mb-2">
                  {t.aiSuggestedServices}
                </span>
                <div className="space-y-2">
                  {suggestedServicesObj.map((srv) => (
                    <div key={srv.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold text-white">{isAr ? srv.titleAr : srv.titleEn}</span>
                      </div>
                      <span className="font-extrabold text-cyan-300">{formatPrice(srv.basePriceUSD, currency)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (suggestedServicesObj.length > 0) {
                  onApplySuggestedServices(suggestedServicesObj);
                } else {
                  onApplySuggestedServices([allServices[0]]);
                }
                onClose();
              }}
              className="w-full bg-white hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm py-3 px-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              id="apply-ai-suggestions-btn"
            >
              <span>{isAr ? 'إضافة جميع الخدمات المقترحة للسلة' : 'Add Suggested Services to Cart'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
