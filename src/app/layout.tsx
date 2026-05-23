import { ReactNode } from "react";
import type { Metadata } from "next";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Jonel's Portfolio",
  description:
    "Portfolio of Jonel, a developer creating modern, efficient, and user-friendly web applications.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Sets the theme class before hydration to prevent a flash on reload. */}
        <InitColorSchemeScript attribute="class" defaultMode="system" />
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
