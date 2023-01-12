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
