"use client";

import { Container, Typography, GridLegacy as Grid, Box } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

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

        <Grid container spacing={4} mt={2}>
          {[
            {
              title: "Auth System Template",
              description:
                "A reusable authentication template providing secure user login and management. Supports Google Login and serves as a scalable foundation for future applications that require authentication and user authorization.",
              techStack: [
                "Next.js",
                "Apollo Client",
                "Apollo Server",
                "Prisma",
                "SQL Server",
                "GraphQL",
                "Google Login",
              ],
              frontendLink:
                "https://github.com/jonel123437/-FE-SQL--login-system",
              backendLink:
                "https://github.com/jonel123437/-BE-SQL--login-system",
            },
            {
              title: "E-commerce Store",
              description:
                "A full-stack e-commerce platform with a landing page, user storefront, and admin dashboard. Admins can add/manage products, while users can browse and purchase items. Integrated Google Login for authentication and PayMongo for secure payments.",
              techStack: [
                "React",
                "Express",
                "REST API",
                "MongoDB",
                "Mongoose",
                "Google Login",
                "PayMongo",
              ],
              frontendLink:
                "https://github.com/jonel123437/shopatos-frontend",
              backendLink:
                "https://github.com/jonel123437/shopatos-backend",
            },
            {
              title: "Social App",
              description:
                "A full-stack social media platform where users can create posts, add friends, and interact. Features include authentication, friend system, and future messaging functionality.",
              techStack: ["Next.js", "NestJS", "REST API", "MongoDB", "Mongoose"],
              frontendLink:
                "https://github.com/jonel123437/chatter-frontend",
              backendLink:
                "https://github.com/jonel123437/chatter-backend",
            },
            // 👇 New "See More" card
            {
              title: "See More Projects",
              description:
                "Check out my other work and repositories on GitHub for more projects and experiments.",
              frontendLink:
                "https://github.com/jonel123437?tab=repositories",
            },
          ].map((project) => (
            <Grid key={project.title} item xs={12} sm={6} md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInUp}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  frontendLink={project.frontendLink}
                  backendLink={project.backendLink}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
