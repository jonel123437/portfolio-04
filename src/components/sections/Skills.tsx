"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import SkillCard from "@/components/SkillCard";
import { motion, easeOut } from "framer-motion";

const skillsData = [
  { name: "Next.js", logo: `/img/next-js.svg` },
  { name: "React", logo: `/img/react-2.svg` },
  { name: "MUI", logo: `/img/mui.svg` },
  { name: "HTML", logo: `/img/html.svg` },
  { name: "CSS", logo: `/img/css.svg` },
  { name: "Node.js", logo: `/img/nodejs-icon.svg` },
  { name: "NestJS", logo: `/img/nestjs.svg` },
  { name: "GraphQL", logo: `/img/graphql.svg` },
  { name: "SQL Server", logo: `/img/sqlserver.svg` },
  { name: "MongoDB", logo: `/img/mongodb.svg` },
  { name: "TypeScript", logo: `/img/typescript.svg` },
  { name: "JavaScript", logo: `/img/js.svg` },
  { name: "Cypress", logo: `/img/cypress.svg` },
  { name: "git", logo: `/img/git.svg` },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        py: 12,
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Skills & Technologies
      </Typography>

      <Box sx={{ maxWidth: 900, width: "100%" }}>
        <Grid container spacing={4} justifyContent="center">
          {skillsData.map((skill) => (
            <Grid key={skill.name} item xs={6} sm={6} md={3}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInUp}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <SkillCard name={skill.name} logo={skill.logo} />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
