"use client";

import { TimelineItem as MuiTimelineItem, TimelineContent } from "@mui/lab";
import { Typography, Paper, Box, Link } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

interface TimelineItemRightProps {
  title: string;
  date: string;
  duration?: string;
  description: string;
  link?: string;
}

export default function TimelineItemRight({
  title,
  date,
  duration,
  description,
  link,
}: TimelineItemRightProps) {
  return (
    <MuiTimelineItem sx={{ "&:before": { flex: 0 } }}>
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
            flexDirection: "row",
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
            }}
          />

          {/* Text */}
          <Box
            sx={{
              textAlign: { xs: "left", sm: "left" },
              flex: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 1, display: "block" }}
            >
              {date}
              {duration && (
                <Box component="span" sx={{ fontWeight: 600 }}>
                  {" · "}
                  {duration}
                </Box>
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{
                  mt: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontWeight: 500,
                }}
              >
                View Attendance Summary
                <OpenInNew sx={{ fontSize: 16 }} />
              </Link>
            )}
          </Box>
        </Paper>
      </TimelineContent>
    </MuiTimelineItem>
  );
}
