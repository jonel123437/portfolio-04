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
        px: { xs: 2, sm: 0 }, // add horizontal padding on small screens
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            mb: 3, 
            fontSize: { xs: "3.7rem", sm: "4rem" } // smaller on SP
          }}
        >
          Hi, I'm Jonel 👋
        </Typography>

        <Typography 
          variant="h5" 
          color="text.secondary" 
          paragraph 
          sx={{ 
            mb: 5, 
            lineHeight: { xs: 1.4, sm: 1.6 }, 
            fontSize: { xs: "1rem", sm: "1.5rem" } // responsive
          }}
        >
          A passionate developer creating modern, efficient, and user-friendly web applications.
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={handleScroll}
          sx={{
            px: { xs: 3, sm: 4 }, // smaller padding on SP
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.8rem", sm: "1rem" },
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
