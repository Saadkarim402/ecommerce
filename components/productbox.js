import Button from "./button";

const { styled } = require("styled-components");

const Box=styled.div`
background-color: #fff;
padding: 20px;
height: 150px;
text-align: center;
display: flex;
justify-content: center;
border-radius: 10px;
`

const Title=styled.h2`
font-weight: none;
font-size: 1rem;
margin: 0;
`

export default function ProductBox({_id,title,description,price}){
    return(
        <Box>
            <Title>{title}</Title>
            <Button primary>add to cart</Button>
        </Box>
    )
}