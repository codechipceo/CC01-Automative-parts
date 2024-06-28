import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const pages = ["Services", "Products", "About Us", "Contact Us"];

const pagesObj = [
  {
    pageName: "Services",
    pageURL: "/services",
  },
  {
    pageName: "Products",
    pageURL: "/products",
  },
  {
    pageName: "About Us",
    pageURL: "/about-us",
  },
  {
    pageName: "Contact Us",
    pageURL: "/contact-us",
  },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position='static'
      color='navbar'
      elevation={0}
      sx={{ backgroundColor: "" }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <img src="/images/logo.jpg" alt="" /> */}
          <Typography
            variant='h6'
            noWrap
            component={"a"}
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              cursor: "pointer",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LNVASUKI ENTERPRISES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color={"burgerIcon"}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesObj.map((page) => (
                <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign='center'
                    onClick={() => navigate(page.pageURL)}
                  >
                    {page.pageName}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* mobile */}
          <Typography
            variant='h5'
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LNVASUKI <br /> ENTERPRISES
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesObj.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(page.pageURL)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
