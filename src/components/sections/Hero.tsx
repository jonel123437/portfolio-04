"use client";

import { Container, Typography, Box, Button } from "@mui/material";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ fontWeight: 700, mb: 3 }}
        >
          Hi, I'm Jonel 👋
        </Typography>

        <Typography 
          variant="h5" 
          color="text.secondary" 
          paragraph 
          sx={{ mb: 5, lineHeight: 1.6 }}
        >
          A passionate developer creating modern, efficient, and user-friendly web applications.
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={handleScroll}
          sx={{
            px: 4,
            py: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 3,
            },
          }}
        >
          View My Projects
        </Button>
      </Container>
    </Box>
  );
}
