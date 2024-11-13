import { getAllProducts } from "@/actions/productsAPI";
import ProductCard from "@/components/Product/ProductCard";
import { Grid } from "@mui/material";

export default async function Home() {
  const { products } = await getAllProducts();

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
