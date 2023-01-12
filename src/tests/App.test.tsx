import { InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { GET_PRODUCTS, GET_SUBTOTAL } from '../graphql/queries';
import productsMock from './mocks.json';

const mocks = [
  {
    request: {
      query: GET_SUBTOTAL,
    },
    result: {
      data: {
        activeOrder: {
          totalWithTax: 0,
          total: 0,
          subTotal: 0,
          subTotalWithTax: 0,
          currencyCode: 'USD',
        },
      },
    },
  },
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: productsMock,
    },
  },
  {
    request: {
      variables: {
        productVariantId: '1',
        quantity: 1,
      },
      query: ADD_ITEM_TO_ORDER,
    },
    result: {
      data: {
        addItemToOrder: {
          totalWithTax: 155880,
        },
      },
    },
  },
];

const cache = new InMemoryCache({});
describe('ProductList', () => {
  it('renders header', async () => {
    render(
      <MockedProvider mocks={mocks} cache={cache} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const headerLogo = await screen.findByAltText('header-logo');
    const headerCart = await screen.findByAltText('header-cart');
    expect(headerLogo).toBeVisible();
    expect(headerCart).toBeVisible();
  });

  it('has total initially equals to zero', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const amount = await screen.findByText('$0.00');
    expect(amount).toBeVisible();
  });

  it('renders the products', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const laptop = await screen.findByText('Laptop 13 inch 8GB');
    const monitor = await screen.findByText('32-Inch Monitor');
    expect(laptop).toBeVisible();
    expect(monitor).toBeVisible();
  });

  it('renders the all the variants of a product', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const laptops = productsMock.products.items[0].variantList.items.map(
      (product) => product.name
    );
    const laptopsElements = await Promise.all(
      laptops.map(async (names) => screen.findByText(names))
    );

    laptopsElements.map((element) => expect(element).toBeVisible());
  });

  it('adds item to cart', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const allProducts = await screen.findAllByText('+ Buy');
    const firstProduct = allProducts[0];

    let amount = await screen.findByText('$0.00');
    expect(amount).toBeVisible();

    expect(firstProduct).toBeInTheDocument();

    fireEvent.click(firstProduct);

    amount = await screen.findByText('$1,558.80');
    expect(amount).toBeInTheDocument();
  });
});
