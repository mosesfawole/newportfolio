"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function ContactStrip() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 border-t border-border dark:border-border-dark text-center"
    >
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-8"
        >
          Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-medium text-ink dark:text-cream leading-tight mb-10"
          style={{
            fontSize: "clamp(36px, 7vw, 80px)",
            letterSpacing: "-0.02em",
          }}
        >
          Have a project
          <br />
          <em>in mind?</em>
        </motion.h2>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-block font-body text-xs tracking-widest uppercase text-ink dark:text-cream border-b border-ink dark:border-cream pb-0.5 hover:opacity-60 transition-opacity"
        >
          Get in Touch →
        </motion.a>
      </div>
    </section>
  );
}
