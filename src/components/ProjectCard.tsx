"use client";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  frontendLink?: string;
  backendLink?: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  frontendLink,
  backendLink,
  techStack = [],
}: ProjectCardProps) {
  const isSeeMore = title.toLowerCase().includes("see more");

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

      <CardActions>
  {isSeeMore ? (
    frontendLink && (
      <Button
        size="small"
        href={frontendLink as string} // force string since we know it exists
        target="_blank"
        rel="noopener noreferrer"
      >
        See More &gt;
      </Button>
    )
  ) : (
    <>
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

    </Card>
  );
}
