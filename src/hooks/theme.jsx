// src/theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
    navbar: {
      main: "#202020",
    },
    burgerIcon: {
      main: "#ffffff",
    },
    colors: {
      primary: "",
      secondary: "#f79f24",
    },
  },
  typography: {
    // Customize typography settings here
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
