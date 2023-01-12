import styled from 'styled-components';
import { parsePrice } from '../helpers/parsePrice';
import { Product } from '../types/Product';

const StyledProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #e8ecf5;
  border-radius: 1rem;

  padding-bottom: 2rem;
  border: none;

  .product-name {
    font-size: 1rem;
    font-weight: 500;
    color: '#222';
    padding: 0 1rem;
  }

  .product-price {
    padding: 0 1rem;
  }

  .product-image {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    max-width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .product-description {
    display: none;
    position: absolute;
    padding: 1rem;
    top: 0;
  }

  .add-to-cart {
    flex: 1;
    background: #b1affa;
    border: none;
    cursor: pointer;
    height: 2rem;
    border-radius: 5px;
    margin-right: 1rem;
    color: #08284c;
    font-weight: 700;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :hover {
    .product-image {
      opacity: 0.2;
      transition: 0.3s;
    }

    .product-description {
      display: block;
      transition: 0.3s;
    }
  }

  @media (max-width: 650px) {
    .product-image {
      opacity: 1;
      border-radius: 0;
    }
    .product-description {
      display: block;
      position: static;
      padding: 0 1rem;
      top: 0;
    }

    padding-bottom: 2rem;
    padding-top: 4rem;
    border-bottom: #b1affa;
  }
`;

interface ProductCardProps extends Product {}
export default function ProductCard({
  description,
  name,
  image,
  price,
}: ProductCardProps) {
  return (
    <StyledProductCard>
      <img className="product-image" src={image?.preview} alt={name} />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <div className="price-row">
        <span className="product-price">{parsePrice(price)}</span>
        <button className="add-to-cart">+ Add</button>
      </div>
    </StyledProductCard>
  );
}
