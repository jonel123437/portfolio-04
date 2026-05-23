"use client";

import { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Facebook,
  KeyboardArrowDown,
} from "@mui/icons-material";
import {
  motion,
  easeOut,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Magnetic from "@/components/Magnetic";
import HeroConstellation from "@/components/HeroConstellation";

const roles = [
  "Full-Stack Developer",
  "React & Next.js Specialist",
  "Node.js & API Builder",
];

const socials = [
  {
    href: "https://www.linkedin.com/in/jonel-escaran-5939942b1/",
    icon: <LinkedIn />,
    label: "LinkedIn",
  },
  { href: "https://github.com/jonel123437", icon: <GitHub />, label: "GitHub" },
  {
    href: "https://www.facebook.com/jonelescaran13",
    icon: <Facebook />,
    label: "Facebook",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Types one role, pauses, deletes, then advances to the next.
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          ),
        deleting ? 45 : 90,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Raw cursor position (px) drives the spotlight; normalized position drives parallax/tilt.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const soft = { stiffness: 120, damping: 20, mass: 0.5 };
  const glowSX = useSpring(glowX, soft);
  const glowSY = useSpring(glowY, soft);
  const pxS = useSpring(px, soft);
  const pyS = useSpring(py, soft);

  const rotateY = useTransform(pxS, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(pyS, [-0.5, 0.5], [6, -6]);
  const tx = useTransform(pxS, [-0.5, 0.5], [-12, 12]);
  const ty = useTransform(pyS, [-0.5, 0.5], [-8, 8]);

  // Center the spotlight before the cursor first moves.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    glowX.set(el.clientWidth / 2);
    glowY.set(el.clientHeight / 2);
  }, [glowX, glowY]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    glowX.set(localX);
    glowY.set(localY);
    px.set(localX / rect.width - 0.5);
    py.set(localY / rect.height - 0.5);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      ref={heroRef}
      id="hero"
      onMouseMove={handleMove}
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 2, sm: 0 },
        overflow: "hidden",
      }}
    >
      {/* Cursor-reactive dot network */}
      <HeroConstellation />

      {/* Base ambient glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: (theme) =>
            `radial-gradient(circle at 50% 32%, rgb(${theme.vars?.palette.primary.mainChannel ?? "25 118 210"} / 0.12), transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Spotlight that trails the cursor */}
      {!reduce && (
        <Box
          component={motion.div}
          aria-hidden
          style={{ x: glowSX, y: glowSY }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 600,
            height: 600,
            ml: "-300px",
            mt: "-300px",
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
            background: (theme) =>
              `radial-gradient(circle, rgb(${theme.vars?.palette.primary.mainChannel ?? "25 118 210"} / 0.18), transparent 70%)`,
          }}
        />
      )}

      <Container maxWidth="md" sx={{ position: "relative", perspective: 1000 }}>
        <Box
          component={motion.div}
          style={reduce ? undefined : { rotateX, rotateY, x: tx, y: ty }}
          sx={{ transformStyle: "preserve-3d" }}
        >
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "3.2rem", sm: "4rem" },
                }}
              >
                Hi, I&apos;m{" "}
                <Box component="span" sx={{ display: "inline-flex" }}>
                  {"Jonel".split("").map((ch, i) => (
                    <Box
                      key={i}
                      component={motion.span}
                      whileHover={reduce ? undefined : { y: -10, scale: 1.15 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      }}
                      sx={{
                        display: "inline-block",
                        cursor: "default",
                        backgroundImage: (theme) =>
                          `linear-gradient(135deg, ${theme.vars?.palette.primary.main}, ${theme.vars?.palette.secondary.main})`,
                        backgroundSize: "200% 200%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        animation: "nameGradient 6s ease infinite",
                        "@keyframes nameGradient": {
                          "0%, 100%": { backgroundPosition: "0% 50%" },
                          "50%": { backgroundPosition: "100% 50%" },
                        },
                      }}
                    >
                      {ch}
                    </Box>
                  ))}
                </Box>{" "}
                👋
              </Typography>
            </motion.div>

            {/* Animated role line */}
            <motion.div variants={item}>
              <Typography
                variant="h5"
                color="primary"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  minHeight: { xs: "1.8rem", sm: "2.2rem" },
                  fontSize: { xs: "1.1rem", sm: "1.6rem" },
                }}
              >
                {role}
                <Box
                  component="span"
                  sx={{
                    ml: "2px",
                    animation: "blink 1s steps(1) infinite",
                    "@keyframes blink": { "50%": { opacity: 0 } },
                  }}
                >
                  |
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 5,
                  lineHeight: { xs: 1.4, sm: 1.6 },
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
              >
                A passionate developer creating modern, efficient, and
                user-friendly web applications.
              </Typography>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div variants={item}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Magnetic>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => scrollTo("#projects")}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
                    }}
                  >
                    View My Projects
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => scrollTo("#contact")}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    Contact Me
                  </Button>
                </Magnetic>
              </Stack>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item}>
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 4 }}
              >
                {socials.map((s) => (
                  <Magnetic key={s.label} strength={0.6}>
                    <IconButton
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      sx={{
                        bgcolor: "background.paper",
                        color: "primary.main",
                        borderRadius: "50%",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "background.paper",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  </Magnetic>
                ))}
              </Stack>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      {/* Bouncing scroll cue */}
      <Box
        component={motion.div}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        sx={{ position: "absolute", bottom: 32, left: 0, right: 0 }}
      >
        <IconButton
          onClick={() => scrollTo("#about")}
          aria-label="Scroll to about section"
          sx={{ color: "text.secondary" }}
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
