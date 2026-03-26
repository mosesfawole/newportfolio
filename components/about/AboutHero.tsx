"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-[80vh] flex items-end px-6 md:px-12 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-6"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-medium text-ink dark:text-cream leading-tight"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            letterSpacing: "-0.02em",
            maxWidth: "800px",
          }}
        >
          Building the web,
          <br />
          <em>one pixel at a time.</em>
        </motion.h1>
      </div>
    </section>
  );
}
