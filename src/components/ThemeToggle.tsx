"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "@/providers";

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();

  const handleClick = () => {
    console.log("Theme toggle clicked! Current mode:", mode);
    toggleMode();
  };

  return (
    <IconButton color="inherit" onClick={handleClick}>
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
