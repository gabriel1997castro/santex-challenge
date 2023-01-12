export type Asset = {
  id: string;
  preview: string;
};
export type Variant = {
  assets: Asset[];
  id: string;
  name: string;
  price: number;
  priceWithTax: number;
  currencyCode: string;
  featuredAsset: Asset;
};

export type Variants = {
  items: Variant[];
};

export type Product = {
  description: string;
  id: string;
  name: string;
  featuredAsset: Asset;
  variantList: Variants;
};

export type Products = {
  items: Product[];
};
