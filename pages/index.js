
import Header from "@/components/Header";
import Featured from "@/components/featured";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({product}){
  console.log(product);
  return (
    <div>
      <Header/>
      <Featured product={product}/>
    </div>
  )
}

export async function getServerSideProps(){
  const featuredProductId='647d8b8b2f53dc526ed4dc6b'
  await mongooseConnect();
  const product=await Product.findById(featuredProductId);
  return {
    props:{product:JSON.parse(JSON.stringify(product))}
  };
}