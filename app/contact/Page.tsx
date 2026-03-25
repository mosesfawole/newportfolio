"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mosesfawoleh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <section className="min-h-[80vh] flex items-center px-6 md:px-12 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-8"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-medium text-ink dark:text-cream leading-tight mb-16"
            style={{
              fontSize: "clamp(40px, 7vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s build
            <br />
            <em>something great.</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <button onClick={copyEmail} className="text-left group">
              <p className="text-xs tracking-widest uppercase text-muted font-body mb-2">
                Email
              </p>
              <p className="font-display font-medium text-ink dark:text-cream text-2xl group-hover:opacity-60 transition-opacity">
                {copied ? "Copied!" : "mosesfawoleh@gmail.com"}
              </p>
            </button>

            <div className="hidden md:block w-px h-12 bg-border dark:bg-border-dark" />

            <div>
              <p className="text-xs tracking-widest uppercase text-muted font-body mb-2">
                GitHub
              </p>

              <Link
                href="https://github.com/mosesfawole"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-medium text-ink dark:text-cream text-2xl hover:opacity-60 transition-opacity"
              >
                mosesfawole ↗
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
