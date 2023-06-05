import { styled } from "styled-components";
import Center from "./center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
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

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywhere</Title>
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
          </div>      
        </Wrapper>
      </Center>
    </Bg>
  );
}
