import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaMind AI — Intelligence, engineered to act.",
  description:
    "NovaMind AI builds enterprise-grade AI agents, workflow automation, predictive analytics, computer vision, and custom LLM integrations.",
  metadataBase: new URL("https://novamind.ai"),
  openGraph: {
    title: "NovaMind AI",
    description:
      "Enterprise-grade AI agents, automation, and predictive systems built to run in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} noise-overlay`}>
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
