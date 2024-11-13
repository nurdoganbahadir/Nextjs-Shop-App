"use client";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";

const ProductDesc = ({ product }) => {
  const discountPrice =
    product.price + product.price * product.discountPercentage;
  console.log(discountPrice);
  return (
    <Container
      sx={{
        width: { xs: "100%", md: "50%" },
        maxWidth: "500px",
        height: { xs: "400px", sm: "448px" },
        position: "relative",
      }}
    >
      <Typography color="red" sx={{ fontSize: { xs: "20px", sm: "30px" } }}>
        {product.brand}
      </Typography>
      <Typography sx={{ fontSize: { xs: "15px", sm: "25px" } }}>
        {product.title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "18px" },
          display: "-webkit-box",
          WebkitLineClamp: 4, // En fazla 4 satır gösterir
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {product.description}
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem", mt: ".5rem" }}>
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

      <Box sx={{ display: "flex", gap: ".5rem" }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ mt: ".5rem" }}
        >
          ${product.price}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ mt: "1rem", color: "gray", textDecoration: "line-through" }}
        >
          $
          {(product.price + product.price * product.discountPercentage).toFixed(
            2
          )}
        </Typography>
      </Box>

      <Box
        sx={{ border: "1px solid grey", borderRadius: "5px", padding: "10px" }}
      >
        <Typography>
          Minimum Order Quantity: {product.minimumOrderQuantity}
        </Typography>
        <Typography>
          Stock: {product.stock >= product.minimumOrderQuantity ? "Yes" : "No"}
        </Typography>
        <Typography>Return Policy: {product.returnPolicy}</Typography>
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
        ADD TO CART
      </Button>
    </Container>
  );
};

export default ProductDesc;
