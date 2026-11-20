import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
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
  metadataBase: new URL("https://mosesfawole.vercel.app"),
  title: "Moses Fawole — AI & Full-Stack Developer",
  description:
    "AI & Full-Stack Developer based in Lagos. Explore AI workflows, payment verification tools, and thoughtful web products built with TypeScript, React, Next.js, and Node.js.",
  openGraph: {
    title: "Moses Fawole — AI & Full-Stack Developer",
    description: "Thoughtful software. Useful AI. Explore selected projects, demos, and source code.",
    url: "https://mosesfawole.vercel.app",
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
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
