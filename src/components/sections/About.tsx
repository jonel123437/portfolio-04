"use client";

import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Timeline as MuiTimeline } from "@mui/lab";
import TimelineItemLeft from "../TimelineItemLeft";
import TimelineItemRight from "../TimelineItemRight";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const events = [
    {
      title: "First Programming Experience",
      date: "2022 - 2025",
      description:
        "Studied Computer Engineering at CITE Technical Institute, where I first learned programming — C, C++, Java, Java GUI, HTML, CSS, and JavaScript — along with database management using SQL, PHP, and phpMyAdmin.",
    },
    {
      title: "Software QA Internship",
      date: "Aug 2024 - Oct 2025",
      description:
        "Joined Sun Asterisk Software Development, Inc. as a QA intern on the Sun* HRIS and Tokyu Roobby projects. Gained hands-on experience across the full SDLC — writing test cases, performing manual, automation, regression, and API testing, and reviewing pull requests on GitHub.",
    },
    {
      title: "Web Developer Internship",
      date: "Oct 2025 - May 2026",
      description:
        "Transitioned from QA to development on the Sun* HRIS project. Progressed from frontend tasks and bug fixes to backend and full-stack work — handling database migrations, API creation, and frontend integration while consistently delivering fixes on time.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          About Me
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          paragraph
          sx={{ mb: 8 }}
        >
          I’m a developer passionate about building user-friendly, scalable, and
          maintainable web applications. I enjoy learning and applying clean
          architecture patterns to create robust, modular systems. Continuously
          exploring new technologies and approaches helps me deliver
          high-quality software solutions.
        </Typography>

        <MuiTimeline
          position={isSmallScreen ? "right" : "alternate"} // right side for small screens
          sx={{
            position: "relative",
            "&::before": {
              display: "block",
              content: '""',
              position: "absolute",
              top: 0,
              left: isSmallScreen ? "20px" : "50%", // left for small screens
              transform: isSmallScreen ? "none" : "translateX(-50%)",
              height: "100%", // spans the full timeline, grows with each item
              borderLeft: "2px solid",
              borderColor: "primary.main",
            },
            "& .MuiTimelineItem-root": { minHeight: 100 },
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
            >
              {/* For small screens, all items use the "Right" style */}
              {isSmallScreen ? (
                <TimelineItemRight
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              ) : index % 2 === 0 ? (
                <TimelineItemLeft
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              ) : (
                <TimelineItemRight
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              )}
            </motion.div>
          ))}
        </MuiTimeline>
      </Container>
    </Box>
  );
}
