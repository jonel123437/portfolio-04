"use client";

import { ReactNode } from "react";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // 👈 import here

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop /> {/* 👈 button shows up after scroll */}
        </Providers>
      </body>
    </html>
  );
}
