export type Product = {
  id: string;
  name: string;
  price: number;
  priceWithTax: number;
  currencyCode: string;
  description: string;
  image: {
    id: string;
    preview: string;
  };
};
