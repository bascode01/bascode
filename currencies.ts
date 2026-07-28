import { Currency, CurrencyConfig } from '../types';

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  IQD: {
    code: 'IQD',
    symbol: 'د.ع',
    name: 'دينار عراقي',
    rateFromUSD: 1310,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'دولار أمريكي',
    rateFromUSD: 1.0,
  },
  AED: {
    code: 'AED',
    symbol: 'د.إ',
    name: 'درهم إماراتي',
    rateFromUSD: 3.67,
  },
};

export function formatPrice(priceUSD: number, currency: Currency = 'IQD'): string {
  const config = CURRENCIES[currency] || CURRENCIES.IQD;
  const converted = Math.round(priceUSD * config.rateFromUSD);
  
  if (currency === 'IQD') {
    return `${converted.toLocaleString()} د.ع`;
  }
  if (currency === 'AED') {
    return `${converted.toLocaleString()} د.إ`;
  }
  return `$${converted.toLocaleString()}`;
}
