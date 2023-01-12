import styled from 'styled-components';
import cart from '../assets/icons8-carrinho-de-compras-50.png';

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
  return (
    <StyledHeader>
      <img
        className="header-logo"
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div className="header-price-container">
        <div>$ 0</div>
        <img className="header-cart" src={cart} alt="cart" />
      </div>
    </StyledHeader>
  );
}
