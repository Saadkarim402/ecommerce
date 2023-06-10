import Button from "./button";
import CartIcon from "./icons/CartIcon";

const { styled } = require("styled-components");

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
`;

const PriceRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

export default function ProductBox({ _id, title, description, price }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>img</div>
      </WhiteBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary outline>
            <CartIcon /> Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
