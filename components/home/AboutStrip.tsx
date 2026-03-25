"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function AboutStrip() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 border-t border-border dark:border-border-dark"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-6">
            About
          </p>
          <h2
            className="font-display font-medium text-ink dark:text-cream leading-tight mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.02em",
            }}
          >
            Frontend engineer,
            <br />
            <em>detail obsessed.</em>
          </h2>
          <Link
            href="/about"
            className="text-xs tracking-widest uppercase font-body text-ink dark:text-cream border-b border-ink dark:border-cream pb-0.5 hover:opacity-60 transition-opacity"
          >
            Read More →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="font-body font-light text-muted leading-relaxed">
            Based in Lagos, Nigeria. I build production-grade web applications
            with a sharp eye for design and a strong grip on the full stack.
          </p>
          <p className="font-body font-light text-muted leading-relaxed">
            Currently working with React, Next.js, TypeScript and Three.js.
            Comfortable taking a product from zero to deployed — alone or in a
            team.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Three.js",
              "Supabase",
              "Framer Motion",
            ].map((s) => (
              <span
                key={s}
                className="text-[11px] tracking-wider uppercase text-muted border border-border dark:border-border-dark px-2 py-1 font-body"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
