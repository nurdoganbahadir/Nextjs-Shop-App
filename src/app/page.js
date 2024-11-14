import ProductList from "@/components/ProductCard/ProductList";

export const metadata = {
  title: "Product List - Your Store Name",
  description:
    "Browse our extensive list of products, including the latest and most popular items.",
  openGraph: {
    title: "Product List - Your Store Name",
    description:
      "Browse our extensive list of products, including the latest and most popular items.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/default-product-image.jpg",
        width: 800,
        height: 600,
        alt: "Product Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ProductList />
    </>
  );
}
