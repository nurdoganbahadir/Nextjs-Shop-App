import { getSingleProduct } from "@/actions/productsAPI";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export async function generateMetadata({ params }) {
  const { productId } = params;
  const product = await getSingleProduct(productId);

  return {
    title: product.title,
    description: product.description,
    keywords: ["product", "details", "e-commerce", product.title],
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      image: product.images[0],
    },
  };
}

export default async function Page({ params }) {
  const { productId } = params;

  const product = await getSingleProduct(productId);

  return <ProductDetail product={product} />;
}
