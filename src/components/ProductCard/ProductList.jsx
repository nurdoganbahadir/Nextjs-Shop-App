"use client";
import dynamic from "next/dynamic";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Pagination,
  Stack,
  Slider,
  Box,
  Typography,
  Container,
  Skeleton,
} from "@mui/material";
import ProductCard from "./ProductCard";
import ProductArrangement from "../ProductDetail/ProductArrangement";
import ProductCategories from "./ProductCategories";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllProducts } from "@/actions/productsAPI";

const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  ssr: false,
});

const ProductList = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 37000]);
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 200;
  const search = searchParams.get("search") || "";

  const productsPerPage = 30;

  useEffect(() => {
    (async () => {
      const { products } = await getAllProducts(
        page ?? "1",
        limit ?? "30",
        search
      );
      setProducts(products);
    })();
  }, [page, limit, search]);

  useEffect(() => {
    router.push(`?${new URLSearchParams({ page, limit, search })}`, {
      scroll: false,
    });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === "popularity") {
      updatedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "priceHighToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "priceLowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "recentlyAdded") {
      updatedProducts.sort(
        (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
      );
    } else if (sortOption === "discountRate") {
      updatedProducts.sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
    }

    setFilteredProducts(updatedProducts);
  }, [category, priceRange, sortOption, products]);

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    router.push(`?${new URLSearchParams({ page: value.toString(), limit })}`, {
      scroll: false,
    });
  };

  const handleAllProductsClick = () => {
    setCategory("");
  };

  return (
    <>
      <Container sx={{ padding: { xs: "0px" } }}>
        <Box>
          <ProductCategories
            category={category}
            handleAllProductsClick={handleAllProductsClick}
            setCategory={setCategory}
          />
        </Box>

        <Container
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: "100%",
            border: "1px solid lightGray",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Typography>Price</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={37000}
              sx={{ width: "100%", m: 1 }}
            />
          </Box>
          <Box>
            <ProductArrangement
              setSortOption={setSortOption}
              sortOption={sortOption}
            />
          </Box>
        </Container>
      </Container>

      <Container
        sx={{
          padding: { xs: "0px" },
          border: "1px solid lightGray",
          borderRadius: "5px",
          mt: 1,
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
            gap: { xs: "0.2rem", sm: "1.5rem" },
            my: "1.5rem",
          }}
        >
          {currentProducts.length > 0
            ? currentProducts.map((product) => (
                <DynamicProductCard key={product.id} product={product} />
              ))
            : [...Array(30)].map((_, index) => (
                <Skeleton key={index} width={211} height={500} />
              ))}
        </Grid>
      </Container>

      <Stack spacing={2} justifyContent="center" alignItems="center" mt={3}>
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={Number(page)}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default ProductList;
