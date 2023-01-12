export type Order = {
  totalWithTax: number;
  currencyCode: string;
  subTotalWithTax: number;
  total: number;
  subTotal: number;
};

export type OrderModificationError = {
  errorCode: number;
  message: string;
};

export type OrderLimitError = {
  errorCode: number;
  message: string;
  maxItems: number;
};

export type InsufficientStockError = {
  errorCode: number;
  message: string;
  quantityAvailable: number;
};
