"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [elevate, setElevate] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      const yOffset = -70;
      const y =
        (section as HTMLElement).getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={elevate ? 4 : 0}
      sx={{
        transition: "all 0.3s ease",
        bgcolor: elevate ? "background.paper" : "transparent",
        backdropFilter: elevate ? "blur(8px)" : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "primary.main",
            }}
          >
            Portfolio
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {navLinks.map(link => (
              <Button
                key={link.href}
                onClick={e => handleScroll(e, link.href)}
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  mx: 1,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle /> {/* toggle beside Contact */}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            <Box sx={{ width: 200 }}>
              <List>
                {navLinks.map(link => (
                  <ListItemButton
                    key={link.href}
                    component="a"
                    onClick={e => handleScroll(e, link.href)}
                    sx={{ color: "text.primary", "&:hover": { color: "primary.main" } }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                ))}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <ThemeToggle />
                </Box>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
