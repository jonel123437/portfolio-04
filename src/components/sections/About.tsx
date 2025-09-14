"use client";

import { Container, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
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
      date: "2022 - 2024", 
      description: "First time learning programming languages at school: C, C++, Java, Java GUI, HTML, CSS, JavaScript, as well as database management using SQL, PHP, and phpMyAdmin." 
    },
    {
      title: "First Internship",
      date: "2024-2025",
      description: "Internship at Sun Asterisk Software Development Inc. was a great experience where I learned a lot about software QA and development workflows. During the last months, I resumed coding, studied project structures, architecture, and explored frameworks."
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
        bgcolor: "background.default", // theme-aware
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
          I’m a developer passionate about building user-friendly, scalable, and maintainable web applications. I enjoy learning and applying clean architecture patterns to create robust, modular systems. Continuously exploring new technologies and approaches helps me deliver high-quality software solutions.
        </Typography>

        <MuiTimeline
          position="alternate"
          sx={{
            "&::before": {
              display: isSmallScreen ? "none" : "block", // hide line on small screens
              content: '""',
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "70%",
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
              viewport={{ once: false, amount: 0.2 }} // animate every scroll
              variants={fadeInUp}
            >
              {index % 2 === 0 ? (
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
