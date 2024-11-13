"use client";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";

const ProductDesc = ({ product }) => {
  return (
    <Container
      sx={{
        width: { xs: "100%", md: "50%" },
        maxWidth: "500px",
        height: { xs: "300px", sm: "448px" },
        position: "relative",
      }}
    >
      <Typography color="red" sx={{ fontSize: { xs: "27px", sm: "45px" } }}>
        {product.brand}
      </Typography>
      <Typography sx={{ fontSize: { xs: "20px", sm: "30px" } }}>
        {product.title}
      </Typography>
      <Typography sx={{ fontSize: { xs: "12px", sm: "18px" } }}>
        {product.description}
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem", mt: "2rem" }}>
        <Box sx={{ display: "flex" }}>
          <Rating name="read-only" value={product.rating} readOnly />
          <Typography>{product.rating}</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CommentIcon sx={{ color: "#FABA10" }} />
          <Typography sx={{ color: "#FABA10" }}>
            {product.reviews.length}
          </Typography>
        </Box>
      </Box>
      <Typography gutterBottom variant="h4" component="div" sx={{ mt: "1rem" }}>
        ${product.price}
      </Typography>
      <Box
        sx={{ border: "1px solid grey", borderRadius: "5px", padding: "10px" }}
      >
        <Typography>
          Minimum Order Quantity: {product.minimumOrderQuantity}
        </Typography>
        <Typography>
          Stock: {product.stock >= product.minimumOrderQuantity ? "Yes" : "No"}
        </Typography>
      </Box>
      <Button
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
        variant="contained"
        disabled={product.minimumOrderQuantity > product.stock}
      >
        Sepete Ekle
      </Button>
    </Container>
  );
};

export default ProductDesc;
