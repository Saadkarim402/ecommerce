import { styled } from "styled-components";
import Center from "./center";

import ProductBox from "./productbox"
;

const ProductsGrid=styled.div`
display: grid;
grid-template-columns:1fr 1fr 1fr;
gap: 20px;
padding-top: 20px;
`

export default function NewProduct({products}){
    return(
        <Center>
            <ProductsGrid>
                {products?.length>0&&products.map(products=>(
                    <ProductBox {...products}/>
                ))}

            </ProductsGrid>
        </Center>
    )
}