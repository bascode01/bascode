export type Language = 'ar' | 'en';

export type Currency = 'IQD' | 'USD' | 'AED';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  rateFromUSD: number; // Conversion multiplier from USD base
}

export interface ServiceTier {
  id: 'basic' | 'pro' | 'enterprise';
  nameAr: string;
  nameEn: string;
  priceMultiplier: number; // e.g. Basic 1x, Pro 1.8x, Enterprise 3.2x
  deliveryDays: number;
  featuresAr: string[];
  featuresEn: string[];
}

export interface Service {
  id: string;
  categoryId: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr?: string;
  fullDescEn?: string;
  basePriceUSD: number;
  deliveryDays: number;
  rating: number;
  reviewsCount: number;
  iconName: string;
  badgeAr?: string;
  badgeEn?: string;
  popular?: boolean;
  featured?: boolean;
  deliverablesAr: string[];
  deliverablesEn: string[];
  techStack: string[];
  tiers: ServiceTier[];
  faqsAr: { question: string; answer: string }[];
  faqsEn: { question: string; answer: string }[];
}

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
  count: number;
}

export interface Review {
  id: string;
  serviceId?: string;
  clientName: string;
  clientRoleAr: string;
  clientRoleEn: string;
  clientCountry: string; // ISO country code or flag emoji + name
  countryCode: string;
  clientAvatar: string;
  serviceTitleAr: string;
  serviceTitleEn: string;
  rating: number; // 1 to 5
  date: string;
  commentAr: string;
  commentEn: string;
  verified: boolean;
  projectCostUSD?: number;
}

export interface CartItem {
  id: string;
  service: Service;
  tier: 'basic' | 'pro' | 'enterprise';
  tierNameAr: string;
  tierNameEn: string;
  unitPriceUSD: number;
  selectedAddons: { id: string; nameAr: string; nameEn: string; priceUSD: number }[];
  quantity: number;
  customNotes?: string;
}

export interface PortfolioItem {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  clientCountry: string;
  image: string;
  metricsAr: string;
  metricsEn: string;
  tags: string[];
  descriptionAr: string;
  descriptionEn: string;
}

export interface OrderDetails {
  orderId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName?: string;
  items: CartItem[];
  totalUSD: number;
  currency: Currency;
  paymentMethod: string;
  notes?: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}
