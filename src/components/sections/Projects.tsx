"use client";

import { Container, Typography, GridLegacy as Grid, Box } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const personalProjects: ProjectCardProps[] = [
  {
    title: "git.wrapped",
    description:
      "Spotify Wrapped, but for your code. Connect your GitHub account and turn a year of commits, pull requests, and reviews into beautiful, shareable cards — complete with personality insights, top languages, streaks, and a public profile page.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "GitHub OAuth",
      "GitHub API",
    ],
    liveLink: "https://gitwrapped-tau.vercel.app/",
    repoLink: "https://github.com/jonel123437/gitwrapped",
  },
  {
    title: "Dental Appointment",
    description:
      "A school project front-end for a dental appointment system, with separate login, admin, and student views. Built as a static markup site to design the booking flow and dashboard layouts using only HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink:
      "https://jonel123437.github.io/Dental_Appointment_Markup/login/login.html",
    repoLink: "https://github.com/jonel123437/Dental_Appointment_Markup",
  },
  {
    title: "Social App",
    description:
      "A full-stack social media platform where users can create posts, add friends, and interact. Features include authentication, friend system, and future messaging functionality.",
    techStack: ["Next.js", "NestJS", "REST API", "MongoDB", "Mongoose"],
    frontendLink: "https://github.com/jonel123437/chatter-frontend",
    backendLink: "https://github.com/jonel123437/chatter-backend",
  },
  {
    title: "See More Projects",
    description:
      "Check out my other work and repositories on GitHub for more projects and experiments.",
    frontendLink: "https://github.com/jonel123437?tab=repositories",
  },
];

const professionalProjects: ProjectCardProps[] = [
  {
    title: "Sun* HRIS",
    role: "Full-Stack Developer @ Sun*",
    date: "Oct 2025 - May 2026",
    description:
      "A production Human Resource Information System I worked on at Sun*. Progressed from QA into full-stack development — handling database migrations, building REST and GraphQL APIs, and integrating frontend features, while resolving high-priority production bugs with minimal to no regressions.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Prisma",
      "SQL Server",
    ],
  },
  {
    title: "Tokyu Roobby",
    role: "Software QA @ Sun*",
    date: "Aug 2024 - Oct 2025",
    description:
      "A client web application where I worked as QA across the full software development lifecycle. Authored and maintained test cases and ran manual, automation, regression, API, and monkey testing, and reviewed pull requests with functionality checks before staging deployment.",
    techStack: ["Cypress", "Playwright", "Jest", "TypeScript"],
  },
];

function ProjectGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <Grid
      container
      spacing={4}
      mt={1}
      sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
    >
      {projects.map((project) => (
        <Grid key={project.title} item xs={10} sm={6} md={4}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <ProjectCard {...project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        py: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom textAlign="center">
          Projects
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 4 }}>
          Personal Projects
        </Typography>
        <ProjectGrid projects={personalProjects} />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 8 }}>
          Professional Work
        </Typography>
        <ProjectGrid projects={professionalProjects} />
      </Container>
    </Box>
  );
}
