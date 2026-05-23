"use client";

import { Box, Typography } from "@mui/material";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzIsvYvgSHIaZhExDRN9RNrOd_xIkitK--ks_uU88NCcCUmylN-190emsHM-BZD2D_MPCi5psPzbjV/pubhtml/sheet?headers=false&gid=1289250016";

export default function Das() {
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
        gutterBottom
        textAlign="center"
        sx={{ mb: 6, typography: { xs: "h4", sm: "h3" } }}
      >
        Daily Attendance Summary
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "95vw", sm: "62vw" },
          height: { xs: 500, sm: 800 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          src={SHEET_URL}
          title="Daily Attendance Summary"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
        />
      </Box>
    </Box>
  );
}
