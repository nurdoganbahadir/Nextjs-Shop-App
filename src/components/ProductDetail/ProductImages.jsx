"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { CardMedia, Dialog } from "@mui/material";

export default function ProductImage({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const maxSteps = images?.length;

  if (!images || images.length === 0) {
    return <p>Image not available</p>;
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    ); // Sonraki görsele geç
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    ); // Önceki görsele geç
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "50%" }, flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          alt="image"
          image={images[activeStep] || images[0]}
          sx={{
            height: 400,
            maxWidth: 600,
            width: "100%",
            p: 2,
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        />
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            p: 2,
            width: { sx: "300px", sm: "550px", md: "840px" },
          }}
        >
          <Button
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: 16,
              zIndex: 10,
              "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
            }}
          >
            <KeyboardArrowLeft />
          </Button>

          <CardMedia
            component="img"
            alt="image"
            image={images[activeStep] || images[0]}
            sx={{
              maxHeight: "75vh",
              width: "100%",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />

          <Button
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              zIndex: 10,
              "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
            }}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
      </Dialog>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
