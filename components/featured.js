import { styled } from "styled-components";
import Center from "./center";
import Button  from "./button";
import ButtonLink from "./buttonLinks";

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

export default function Featured({product}) {
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
              <ButtonLink href={'/products/'+product._id} outline white>
                Read more
              </ButtonLink>
              <Button primary >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
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
