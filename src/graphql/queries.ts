import { gql } from '@apollo/client';

// Here we put queries. Remove next line
export const GET_PRODUCTS = gql`
  query {
    products {
      items {
        id
        name
        description
        featuredAsset {
          id
          preview
        }
        variantList {
          items {
            id
            price
            priceWithTax
            currencyCode
            name
            featuredAsset {
              id
              preview
            }
          }
        }
      }
    }
  }
`;

export const GET_SUBTOTAL = gql`
  query {
    activeOrder {
      totalWithTax
      total
      subTotal
      subTotalWithTax
      currencyCode
    }
  }
`;
