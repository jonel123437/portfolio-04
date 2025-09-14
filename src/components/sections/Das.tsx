"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Das() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="das"
      sx={{
        py: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        gutterBottom
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Daily Attendance Summary
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: isSmallScreen ? "95vw" : "62vw",
          height: isSmallScreen ? 500 : 900,
          px: 2,
          overflowX: "auto",  // horizontal scroll
          overflowY: "hidden",  // vertical scroll
        }}
      >
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzIsvYvgSHIaZhExDRN9RNrOd_xIkitK--ks_uU88NCcCUmylN-190emsHM-BZD2D_MPCi5psPzbjV/pubhtml/sheet?headers=false&gid=1289250016"
          width="100%"       
          height={isSmallScreen ? 500 : 800}
          style={{ border: "1px solid #ccc", borderRadius: 8 }}
          title="Daily Attendance Summary"
        ></iframe>
      </Box>
    </Box>
  );
}
