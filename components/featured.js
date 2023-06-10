import { styled } from "styled-components";
import Center from "./center";
import Button from "./button";
import ButtonLink from "./buttonLinks";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.9rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { setCartProducts } = useContext(CartContext);


  function addFeaturedToCart() {
    console.log('saad')
    setCartProducts(prev=>[...prev,product._id]);
  }
  


  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>{product.title}</Title>
            <Desc>
              The MacBook Pro is a premium laptop by Apple, loved by
              professionals and creatives alike. It combines sleek design,
              powerful performance, and an impressive Retina display. With its
              Intel or Apple Silicon processors, multitasking is seamless, and
              the Touch Bar adds an interactive element. Running on macOS, it
              offers a range of productivity tools. The MacBook Pro is a
              reliable companion for demanding tasks and is highly regarded in
              professional circles.
            </Desc>
            <ButtonWrapper>
              <ButtonLink href={"/products/" + product._id} outline white>
                Read more
              </ButtonLink>
              <Button white onclick={addFeaturedToCart}>
                <CartIcon />
                Add to cart
              </Button>
            </ButtonWrapper>
          </div>
          <div>
            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415375/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245226_0_miryw4.png/mxw_1440,f_auto"></img>
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
