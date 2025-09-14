'use client';

import { ReactNode, useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

// Context to share theme mode
interface ThemeContextType {
  mode: "light" | "dark";
  toggleMode: () => void;
}
const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) throw new Error("useThemeMode must be used within Providers");
  return context;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Create theme dynamically based on mode
  const dynamicTheme = useMemo(() => {
    return mode === "light" ? theme.light : theme.dark;
  }, [mode]);

  const toggleMode = () => setMode(prev => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      {/* Force ThemeProvider to remount on mode change */}
      <ThemeProvider theme={dynamicTheme} key={mode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
