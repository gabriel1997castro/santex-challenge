export const parsePrice = (price?: number, currencyCode?: string) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format((price || 0) / 100);
