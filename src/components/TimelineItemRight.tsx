"use client";

import { TimelineItem as MuiTimelineItem, TimelineContent } from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";

interface TimelineItemRightProps {
  title: string;
  date: string;
  description: string;
}

export default function TimelineItemRight({ title, date, description }: TimelineItemRightProps) {
  return (
    <MuiTimelineItem sx={{ '&:before': { flex: 0 } }}>
      <TimelineContent sx={{ maxWidth: 350, ml: "auto" }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            flexDirection: "row", // dot on the left side
            "&:hover": { transform: "translateY(-3px)", boxShadow: 4 },
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Dot near spine, hidden on small screens */}
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              bgcolor: "primary.main",
              flexShrink: 0,
              mt: 0.5,
              display: { xs: "none", sm: "block" }, // hide on small screens
            }}
          />

          {/* Text */}
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" }, // responsive text alignment
              flex: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>{date}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          </Box>
        </Paper>
      </TimelineContent>
    </MuiTimelineItem>
  );
}
