import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_PRODUCTS } from '../graphql/queries';
import { parseProductList } from '../helpers/parseProductList';
import { Products } from '../models/Product';
import Loading from './Loading';
import ProductCard from './ProductCard';

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
  background-color: white;
  padding: 2rem;
  margin: 0.4rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
    margin: 0.5;
    gap: 0.5;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export function ProductList() {
  const { data, loading } = useQuery<{ products: Products }>(GET_PRODUCTS);
  const products = parseProductList(data?.products);

  if (loading)
    return (
      <Container>
        <Loading color="#B3093F" />
      </Container>
    );
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </StyledProductList>
  );
}
