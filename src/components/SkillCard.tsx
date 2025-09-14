"use client";

import { Paper, Typography, Box } from "@mui/material";

interface SkillCardProps {
  name: string;
  logo: string;
}

export default function SkillCard({ name, logo }: SkillCardProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,           // bigger padding
        borderRadius: 2, 
        width: 140,      // increased width
        height: 140,     // increased height
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-6px) scale(1.05)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={name}
        sx={{ width: 50, height: 50, mb: 1 }} // bigger logo
      />
      <Typography variant="body2" textAlign="center" sx={{ fontWeight: 500 }}>
        {name}
      </Typography>
    </Paper>
  );
}
