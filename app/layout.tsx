import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";

const playfair = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay.ttf", weight: "400 700", style: "normal" },
    { path: "./fonts/PlayfairDisplay-Italic.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--font-playfair", display: "swap",
});
const heading = localFont({ src: "./fonts/Manrope.ttf", variable: "--font-heading", weight: "400 700", display: "swap" });

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}` }} />
      </head>
      <body className={`${playfair.variable} ${heading.variable}`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
