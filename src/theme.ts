import { createTheme } from "@mui/material/styles";

// One theme holding both schemes; MUI swaps CSS variables via a class on <html>.
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#1976d2" },
        secondary: { main: "#9c27b0" },
        background: { default: "#f5f5f5", paper: "#fff" },
        text: { primary: "#000", secondary: "#555" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#90caf9" },
        secondary: { main: "#ce93d8" },
        background: { default: "#121212", paper: "#1e1e1e" },
        text: { primary: "#fff", secondary: "#aaa" },
      },
    },
  },
});

export default theme;
