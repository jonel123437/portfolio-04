"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        mt: 4,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Jonel Escaran. All rights reserved.
      </Typography>
    </Box>
  );
}
