"use client";

import { Container, Typography, Box, IconButton, Stack } from "@mui/material";
import { LinkedIn, GitHub, Facebook, Email } from "@mui/icons-material";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        py: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2 } } }}
        >
          <Typography color="text.secondary" paragraph>
            Feel free to reach out if you'd like to collaborate or just say hi 👋
          </Typography>
        </motion.div>

        {/* Social Icons with staggered effect */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          {[
            { href: "mailto:jonelescaran@gmail.com", icon: <Email /> },
            { href: "https://www.linkedin.com/in/jonel-escaran-5939942b1/", icon: <LinkedIn /> },
            { href: "https://github.com/jonel123437", icon: <GitHub /> },
            { href: "https://www.facebook.com/jonelescaran13", icon: <Facebook /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2, delay: index * 0.15 + 0.3 },
                },
              }}
            >
              <IconButton
                component="a"
                href={item.href}
                target="_blank"
                sx={{
                  bgcolor: "background.paper",
                  color: "primary.main",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "background.paper",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
