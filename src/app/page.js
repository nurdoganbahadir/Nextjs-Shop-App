import { getAllProducts } from "@/actions/productsAPI";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Grid } from "@mui/material";

export default async function Home() {
  const { products } = await getAllProducts();
  console.log(products);

  return (
    <Grid
      container
      sx={{ justifyContent: "center", gap: { xs: "0.2rem", sm: "1.5rem" } }}
    >
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Grid>
  );
}
