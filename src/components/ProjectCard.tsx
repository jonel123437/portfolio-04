"use client";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { formatDuration } from "@/lib/duration";

export interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  date?: string;
  frontendLink?: string;
  backendLink?: string;
  liveLink?: string;
  repoLink?: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  role,
  date,
  frontendLink,
  backendLink,
  liveLink,
  repoLink,
  techStack = [],
}: ProjectCardProps) {
  const isSeeMore = title.toLowerCase().includes("see more");
  const duration = date ? formatDuration(date) : "";
  const hasActions = isSeeMore
    ? !!frontendLink
    : !!(liveLink || repoLink || frontendLink || backendLink);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>

        {role && (
          <Typography variant="subtitle2" color="primary">
            {role}
          </Typography>
        )}

        {date && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mb: 1 }}
          >
            {date}
            {duration && (
              <Box component="span" sx={{ fontWeight: 600 }}>
                {" · "}
                {duration}
              </Box>
            )}
          </Typography>
        )}

        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        {!isSeeMore && techStack.length > 0 && (
          <Stack direction="row" flexWrap="wrap" mt={1} gap={1}>
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        )}
      </CardContent>

      {hasActions && (
        <CardActions>
          {isSeeMore ? (
            <Button
              size="small"
              href={frontendLink as string} // force string since we know it exists
              target="_blank"
              rel="noopener noreferrer"
            >
              See More &gt;
            </Button>
          ) : (
            <>
              {liveLink && (
                <Button
                  size="small"
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
              {repoLink && (
                <Button
                  size="small"
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </Button>
              )}
              {frontendLink && (
                <Button
                  size="small"
                  href={frontendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend
                </Button>
              )}
              {backendLink && (
                <Button
                  size="small"
                  href={backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                </Button>
              )}
            </>
          )}
        </CardActions>
      )}
    </Card>
  );
}
