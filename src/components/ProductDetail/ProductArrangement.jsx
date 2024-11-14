"use client";
import { MenuItem, Select } from "@mui/material";
import React from "react";

const ProductArrangement = ({ setSortOption, sortOption }) => {
  return (
    <Select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      displayEmpty
      sx={{
        ml: 1,
        height: "40px",
        width: { xs: "200px", sm: "150px" },
      }}
    >
      <MenuItem value="default">Arrangement</MenuItem>
      <MenuItem value="popularity">Popularity</MenuItem>
      <MenuItem value="priceHighToLow">Price (High to Low)</MenuItem>
      <MenuItem value="priceLowToHigh">Price (Low to High)</MenuItem>
      <MenuItem value="recentlyAdded">Recently Added</MenuItem>
      <MenuItem value="discountRate">Discount Rate</MenuItem>
    </Select>
  );
};

export default ProductArrangement;
