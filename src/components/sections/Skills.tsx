"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import SkillCard from "@/components/SkillCard";
import { motion, easeOut } from "framer-motion";

// Get basePath from env (works for dev + GitHub Pages)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
console.log("BASE PATH:", basePath); 

const skillsData = [
  { name: "Next.js", logo: `${basePath}/img/next-js.svg` },
  { name: "React", logo: `${basePath}/img/react-2.svg` },
  { name: "MUI", logo: `${basePath}/img/mui.svg` },
  { name: "HTML", logo: `${basePath}/img/html.svg` },
  { name: "CSS", logo: `${basePath}/img/css.svg` },
  { name: "Node.js", logo: `${basePath}/img/nodejs-icon.svg` },
  { name: "NestJS", logo: `${basePath}/img/nestjs.svg` },
  { name: "GraphQL", logo: `${basePath}/img/graphql.svg` },
  { name: "SQL Server", logo: `${basePath}/img/sqlserver.svg` },
  { name: "MongoDB", logo: `${basePath}/img/mongodb.svg` },
  { name: "TypeScript", logo: `${basePath}/img/typescript.svg` },
  { name: "JavaScript", logo: `${basePath}/img/js.svg` },
  { name: "Cypress", logo: `${basePath}/img/cypress.svg` },
  { name: "git", logo: `${basePath}/img/git.svg` },
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
