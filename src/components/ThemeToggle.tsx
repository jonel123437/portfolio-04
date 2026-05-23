"use client";

import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  // `mode` is undefined until mounted; placeholder avoids a hydration mismatch.
  if (!mode) {
    return (
      <IconButton color="inherit" disabled aria-label="Toggle theme">
        <Brightness4 sx={{ opacity: 0 }} />
      </IconButton>
    );
  }

  const resolved = mode === "system" ? systemMode : mode;
  const next = resolved === "dark" ? "light" : "dark";

  return (
    <IconButton
      color="inherit"
      onClick={() => setMode(next)}
      aria-label={`Switch to ${next} mode`}
    >
      {resolved === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
