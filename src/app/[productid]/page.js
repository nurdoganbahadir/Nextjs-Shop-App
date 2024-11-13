import { getSingleProduct } from "@/actions/productsAPI";
import ProductDetail from "@/components/Product/ProductDetail";

export default async function Page({ params }) {
  const { productId } = params;

  const product = await getSingleProduct(productId);

  return <ProductDetail product={product} />;
}
