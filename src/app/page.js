import { getAllProducts } from "@/actions/productsAPI";
import ProductList from "@/components/ProductCard/ProductList";


export default async function Home() {
  const { products } = await getAllProducts();

  return <ProductList products={products} />;
}
