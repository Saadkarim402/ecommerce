import { Send } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
height: 60vh;
background-color: #e7a1cd;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 70px;
margin: 20px;


`;

const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

`;

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;

`;

const Input = styled.input`
border: none;
flex: 9;
padding-left: 20px;


`;

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely Updates from Your Favourite Products</Description>
      <InputContainer>
        <Input placeholder="Enter your E-Mail Here" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
