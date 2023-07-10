import { styled } from "styled-components";
import { categories } from "../data";
import Containerlist from "./containerlist";

const Container = styled.div`
display:flex;
padding:20px;
justify-content: space-between;
`;

function Category() {
  return <Container>
    {categories.map((it)=>(
        <Containerlist item={it}/>
    ))}
  </Container>;
}

export default Category;
