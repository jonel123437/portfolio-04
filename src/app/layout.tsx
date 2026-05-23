import { ReactNode } from "react";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
