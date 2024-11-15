"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import { CssBaseline, FormControl } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  width: "150px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

function DefaultLayout({ children }) {
  const searchParams = useSearchParams(); // URL den parametreleri aldım
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 30;
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?${new URLSearchParams({ page, limit, search })}`, {
      scroll: false,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#8bc34a",
          width: "100%",
          zIndex: "99999999",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "space-around" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClick}
            sx={{
              display: { xs: "block", sm: "block" },
              width: "65px",
              cursor: "pointer",
            }}
          >
            SHOP
          </Typography>

          <FormControl component="form" onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
        }}
      >
        <Toolbar />
        {/* alt bileşenler burada gösterilir */}
        {children}
      </Box>
    </Box>
  );
}

export default DefaultLayout;
