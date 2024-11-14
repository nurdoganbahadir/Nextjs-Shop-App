"use client";
import {
  Box,
  Button,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";

const ProductDesc = ({ product }) => {
  return (
    <Container
      sx={{
        width: { xs: "100%", md: "50%" },
        maxWidth: "500px",
        height: { xs: "450px", sm: "448px" },
        position: "relative",
        p: { xs: 0 },
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
          WebkitLineClamp: 4,
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: ".5rem",
          mt: ".5rem",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          $
          {((product.price * (100 - product.discountPercentage)) / 100).toFixed(
            2
          )}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "gray", textDecoration: "line-through" }}
        >
          ${product.price}
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "5px",
          padding: "10px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ fontSize: "5px" }}>
          <Typography sx={{ fontSize: "15px" }}>
            Minimum Order Quantity: {product.minimumOrderQuantity}
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Stock:{" "}
            {product.stock >= product.minimumOrderQuantity ? "Yes" : "No"}
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Return Policy: {product.returnPolicy}
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: { xs: 0, sm: 1 },
              mt: { xs: 1 },
              width: { xs: "100%", sm: "8ch" },
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Piece"
            variant="outlined"
            type="number"
            defaultValue={`${product.minimumOrderQuantity}`}
            inputProps={{
              min: `${product.minimumOrderQuantity}`,
              max: `${product.stock}`,
            }}
          />
        </Box>
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
