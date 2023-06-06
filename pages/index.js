import Header from "@/components/Header";
import Featured from "@/components/featured";
import NewProduct from "@/components/newProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({ product,newProducts }) {
  console.log(product);
  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProduct  products={newProducts}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "647d8b8b2f53dc526ed4dc6b";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
