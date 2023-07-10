import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "./product";

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;

`;

function Products() {
  return (
    <Container>
      {popularProducts.map((it) => (
        <Product item={it} key={it.key} />
      ))}
    </Container>
  );
}

export default Products;
