import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Moses Fawole — Frontend Engineer",
  description:
    "Frontend engineer building fast, beautiful, functional products. React, Next.js, TypeScript, Three.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider>
          <Cursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
