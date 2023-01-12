import { Products } from '../models/Product';
import { Product } from '../types/Product';

const parseProductList = (products?: Products): Product[] => {
  if (!products) return [];
  const result: Product[] = [];
  products?.items?.forEach((product) =>
    product.variantList.items.map((variant) =>
      result.push({
        id: variant.id,
        name: variant.name,
        price: variant.price,
        description: product.description,
        image: variant.featuredAsset || product.featuredAsset,
      })
    )
  );
  return result;
};

export { parseProductList };
