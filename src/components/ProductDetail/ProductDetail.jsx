"use client";
import React from "react";
import ProductImages from "./ProductImages";
import { Box } from "@mui/material";
import ProductDesc from "./ProductDesc";
import ProductAccordion from "./ProductAccordion";

const ProductDetail = ({ product }) => {
  const images = product.images;
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <ProductImages images={images} />
        <ProductDesc product={product} />
      </Box>
      <Box>
        <ProductAccordion product={product} />
      </Box>
    </Box>
  );
};

export default ProductDetail;
