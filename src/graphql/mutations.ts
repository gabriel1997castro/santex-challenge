import { gql } from '@apollo/client';

// Here we put mutations. Remove next line
export const ADD_ITEM_TO_ORDER = gql`
  mutation ($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        totalWithTax
        total
        subTotal
        subTotalWithTax
        currencyCode
      }
      ... on OrderModificationError {
        errorCode
        message
      }
      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }
      ... on InsufficientStockError {
        errorCode
        message
        quantityAvailable
      }
    }
  }
`;
