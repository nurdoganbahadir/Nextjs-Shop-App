"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${product.id}`); // Ürünün detay sayfasına yönlendir
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: { xs: "49%", sm: "200px" },
        position: "relative",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="Porsche"
        height="200"
        image={product.images[0]}
      />
      <CardContent sx={{ minHeight: "100px" }}>
        <Typography variant="p" sx={{ color: "gray", fontSize: "13px" }}>
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "green", fontSize: "bolder" }}>
          {product.price} $
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          color: "white",
          padding: "4px",
          borderRadius: "5px",
          position: "absolute",
          top: "5px",
          left: "5px",
        }}
      >
        <StarIcon sx={{ fontSize: "15px" }} />
        <Typography sx={{ fontSize: "12px" }}>{product.rating}</Typography>
      </Box>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            "&:hover": { backgroundColor: "green" },
          }}
        >
          SEPETE EKLE
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
