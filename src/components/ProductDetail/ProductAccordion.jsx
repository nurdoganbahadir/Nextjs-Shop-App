"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductReviews from "./ProductReviews";
import { Box } from "@mui/material";
import ProductProperties from "./ProductProperties";

export default function ProductAccordion({ product }) {
  const review = product.reviews;

  return (
    <Box sx={{ mt: { xs: "1.5rem", md: "2rem" } }}>
      <Accordion sx={{ backgroundColor: "#eeeeee" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          PRODUCT PROPERTİES
        </AccordionSummary>
        <AccordionDetails>
          <ProductProperties product={product} />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#eeeeee" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          COMMENTS
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {review.map((review, index) => (
              <ProductReviews key={index} review={review} />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
