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
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        width: { xs: "90%", sm: 140 },
        maxWidth: 140,
        aspectRatio: "1 / 1",
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
        sx={{
          width: { xs: 40, sm: 50 },
          height: { xs: 40, sm: 50 },
          mb: 1,
          objectFit: "contain",
        }}
      />
      <Typography variant="body2" textAlign="center" sx={{ fontWeight: 500 }}>
        {name}
      </Typography>
    </Paper>
  );
}
