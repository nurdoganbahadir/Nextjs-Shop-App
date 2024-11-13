import { getAllProducts } from "@/actions/productsAPI";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductList from "@/components/ProductCard/ProductList";
import { Grid } from "@mui/material";

export default async function Home() {
  const { products } = await getAllProducts();

  return <ProductList products={products} />;
}
