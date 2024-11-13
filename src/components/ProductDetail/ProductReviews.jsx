"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Rating } from "@mui/material";

export default function ProductReviews({ review }) {
  const isoDate = review.date;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString();

  return (
    <Card sx={{ my: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {review.reviewerName[0]}
            </Avatar>
          }
          title={review.reviewerName}
          subheader={`${formattedDate} ${formattedTime}`}
        />
        <Rating
          sx={{
            mr: { xs: "0", sm: "1rem" },
            fontSize: { xs: "15px", sm: "22px" },
          }}
          name="read-only"
          value={review.rating}
          readOnly
        />
      </Box>

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {review.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
