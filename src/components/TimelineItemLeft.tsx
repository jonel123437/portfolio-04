"use client";

import { TimelineItem as MuiTimelineItem, TimelineContent } from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";

interface TimelineItemLeftProps {
  title: string;
  date: string;
  description: string;
}

export default function TimelineItemLeft({ title, date, description }: TimelineItemLeftProps) {
  return (
    <MuiTimelineItem sx={{ '&:before': { flex: 0 } }}>
      <TimelineContent sx={{ maxWidth: 350, mr: "auto" }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            flexDirection: "row-reverse",
            "&:hover": { transform: "translateY(-3px)", boxShadow: 4 },
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Dot near spine, always visible */}
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              bgcolor: "primary.main",
              flexShrink: 0,
              mt: 0.5,
              ml: "auto",
            }}
          />

          {/* Text */}
          <Box
            sx={{
              textAlign: { xs: "left", sm: "right" },
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
