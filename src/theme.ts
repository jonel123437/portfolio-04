// theme.ts
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#f5f5f5", paper: "#fff" },
    text: { primary: "#000", secondary: "#555" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ce93d8" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#fff", secondary: "#aaa" },
  },
});

// ✅ assign object to a variable first
const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
