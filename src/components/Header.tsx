import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import cart from '../assets/icons8-carrinho-de-compras-50.png';
import { GET_SUBTOTAL } from '../graphql/queries';
import { parsePrice } from '../helpers/parsePrice';
import { Order } from '../models/Order';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: #b3093f;
  padding: 1rem 2rem;

  .header-logo {
    max-height: 2rem;
  }

  .header-cart {
    max-height: 2rem;
    filter: invert();
  }

  .header-price-container {
    display: flex;
    div {
      font-size: 1.8rem;
      padding-right: 1rem;
      color: #fff;
    }
  }
`;

export function Header() {
  const { data, loading } = useQuery<{ activeOrder: Order }>(GET_SUBTOTAL);

  return (
    <StyledHeader>
      <img
        className="header-logo"
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="header-logo"
      />
      <div className="header-price-container">
        <div>
          {loading
            ? '$ --.--'
            : parsePrice(
                data?.activeOrder.subTotalWithTax,
                data?.activeOrder.currencyCode
              )}
        </div>
        <img className="header-cart" src={cart} alt="header-cart" />
      </div>
    </StyledHeader>
  );
}
