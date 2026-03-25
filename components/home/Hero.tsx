"use client";
import { useEffect, useState } from "react";
import { useScramble } from "@/hooks/useScramble";
import { motion } from "framer-motion";
import Link from "next/link";

const roles = [
  "Frontend Engineer",
  "Full-Stack Developer",
  "3D Web Developer",
  "UI/UX Focused Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const scrambled = useScramble(roles[roleIndex], trigger);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTrigger(true);
      }, 100);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main headline */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display font-medium leading-none text-ink dark:text-cream text-[clamp(52px,9vw,120px)] tracking-[-0.02em]"
          >
            I build things
            <br />
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35,
            }}
            className="font-display italic font-medium leading-none text-ink dark:text-cream text-[clamp(52px,9vw,120px)] tracking-[-0.02em]"
          >
            people <em>actually</em> use.
          </motion.h1>
        </div>

        {/* Scramble role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10"
        >
          <p className="font-body font-light text-muted tracking-[0.25em] uppercase text-[clamp(11px,1.5vw,13px)]">
            {scrambled}
          </p>
        </motion.div>

        {/* Description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="font-body font-light text-muted leading-relaxed max-w-md text-[clamp(14px,1.5vw,16px)]">
            I build things people actually use — fast, beautiful and functional.
            Based in Lagos, working worldwide.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <Link
              href="/work"
              className="text-xs tracking-widest uppercase font-body text-ink dark:text-cream border-b border-ink dark:border-cream pb-0.5 hover:opacity-60 transition-opacity"
            >
              View Work →
            </Link>

            <Link
              href="/contact"
              className="text-xs tracking-widest uppercase font-body text-muted hover:text-ink dark:hover:text-cream transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/work"
            className="px-6 py-2.5 bg-cream dark:bg-ink text-ink dark:text-cream text-xs tracking-widest uppercase font-body"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="px-6 py-2.5 border border-border dark:border-border-dark text-xs tracking-widest uppercase font-body text-ink dark:text-cream"
          >
            Download CV
          </a>
        </div>

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-border dark:border-border-dark"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted font-body tracking-wide">
            Available for work
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-transparent to-border dark:to-border-dark"
          />
        </motion.div>
      </div>
    </section>
  );
}
