"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { LinkedIn, GitHub, Facebook, Send } from "@mui/icons-material";
import { motion, easeOut } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from your portfolio",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback({
          open: true,
          severity: "success",
          message: "Thanks! Your message has been sent.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch {
      setFeedback({
        open: true,
        severity: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

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
          variants={{
            ...fadeInUp,
            visible: { ...fadeInUp.visible, transition: { delay: 0.2 } },
          }}
        >
          <Typography color="text.secondary" paragraph>
            Feel free to reach out if you'd like to collaborate or just say hi
            👋
          </Typography>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            ...fadeInUp,
            visible: { ...fadeInUp.visible, transition: { delay: 0.3 } },
          }}
        >
          <Stack
            component="form"
            onSubmit={handleSubmit}
            spacing={2}
            sx={{ mt: 4, textAlign: "left" }}
          >
            <TextField
              name="name"
              label="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="email"
              type="email"
              label="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="message"
              label="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              minRows={4}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              endIcon={
                loading ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <Send />
                )
              }
              sx={{ alignSelf: "center", px: 4 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Stack>
        </motion.div>

        {/* Social Icons with staggered effect */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/jonel-escaran-5939942b1/",
              icon: <LinkedIn />,
            },
            { href: "https://github.com/jonel123437", icon: <GitHub /> },
            {
              href: "https://www.facebook.com/jonelescaran13",
              icon: <Facebook />,
            },
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

      <Snackbar
        open={feedback.open}
        autoHideDuration={5000}
        onClose={() => setFeedback((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedback((prev) => ({ ...prev, open: false }))}
          severity={feedback.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
