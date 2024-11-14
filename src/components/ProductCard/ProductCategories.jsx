"use client";
import React, { useState } from "react";
import { Box, Button, Popover } from "@mui/material";

export default function ProductCategories({
  category,
  setCategory,
  handleAllProductsClick,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryGroup, setCategoryGroup] = useState(null);

  const handleMenuOpen = (event, group) => {
    setAnchorEl(event.currentTarget);
    setCategoryGroup(group);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCategoryGroup(null);
  };

  const open = Boolean(anchorEl);

  const categories = {
    men: [
      { name: "Men Shirts", value: "mens-shirts" },
      { name: "Men Shoes", value: "mens-shoes" },
      { name: "Men Watches", value: "mens-watches" },
    ],
    women: [
      { name: "Women Bags", value: "womens-bags" },
      { name: "Women Dresses", value: "womens-dresses" },
      { name: "Women Jewellery", value: "womens-jewellery" },
      { name: "Womens Shoes", value: "womens-shoes" },
      { name: "Tops", value: "tops" },
    ],
    electronics: [
      { name: "Smartphones", value: "smartphones" },
      { name: "Laptops", value: "laptops" },
      { name: "Tablets", value: "tablets" },
      { name: "Mobile Accessories", value: "mobile-accessories" },
    ],
    cosmetics: [
      { name: "Beauty", value: "beauty" },
      { name: "Fragrances", value: "fragrances" },
      { name: "Skin Care", value: "skin-care" },
    ],
    home: [
      { name: "Furniture", value: "furniture" },
      { name: "Home Decoration", value: "home-decoration" },
      { name: "Kitchen Accessories", value: "kitchen-accessories" },
    ],
    market: [{ name: "Groceries", value: "groceries" }],
    vehicles: [
      { name: "Motorcycle", value: "motorcycle" },
      { name: "Vehicle", value: "vehicle" },
    ],
    sports: [
      { name: "Sports Accessories", value: "sports-accessories" },
      { name: "Sunglasses", value: "sunglasses" },
    ],
  };

  return (
    <Box
      sx={{
        mb: "1rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap", // Ekran küçükse wrap
        gap: 1,
      }}
    >
      <Button
        variant="contained"
        onClick={handleAllProductsClick}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" }, // 3 buton küçük ekranda, büyük ekranda otomatik genişlik
        }}
      >
        ALL
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "men")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Men
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "women")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Women
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "electronics")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Electronics
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "cosmetics")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Cosmetics
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "home")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Home
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "market")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Market
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "vehicles")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Vehicles
      </Button>

      <Button
        variant="contained"
        onClick={(event) => handleMenuOpen(event, "sports")}
        sx={{
          fontSize: "12px",
          flexBasis: { xs: "calc(33.33% - 8px)", sm: "auto" },
        }}
      >
        Sports
      </Button>

      {/* Popover için aynı mantığı koruyoruz */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{ p: 2, display: "flex", flexDirection: "column", gap: ".5rem" }}
        >
          {(categoryGroup ? categories[categoryGroup] : []).map((cat) => (
            <Button
              key={cat.value}
              onClick={() => {
                setCategory(cat.value);
                handleMenuClose();
              }}
              variant={category === cat.value ? "contained" : "outlined"}
              sx={{ fontSize: "12px" }}
            >
              {cat.name}
            </Button>
          ))}
        </Box>
      </Popover>
    </Box>
  );
}
