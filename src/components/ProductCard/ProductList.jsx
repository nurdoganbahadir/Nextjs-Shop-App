"use client";
import * as React from "react";
import { useState } from "react";
import { Grid, Pagination, Stack } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30; // Sayfa başına gösterilecek ürün sayısı

  // Şu anki sayfada gösterilecek ürünleri hesapla
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center", gap: { xs: "0.2rem", sm: "1.5rem" } }}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      {/* Sayfalama */}
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={3}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)} // Toplam sayfa sayısını hesapla
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default ProductList;
