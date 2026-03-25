"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    year: "2025",
    title: "Paramount Students",
    role: "Frontend Developer",
    detail:
      "Building and maintaining web applications serving students across Istanbul and beyond.",
  },
  {
    year: "2024",
    title: "KipClean",
    role: "Freelance Frontend Developer",
    detail:
      "Designed and built a full landing page for a cleaning services company, managing the project end to end.",
  },
  {
    year: "2022",
    title: "14G x Zuri Training",
    role: "Frontend Development Intern",
    detail:
      "Completed an intensive programme covering HTML, CSS, JavaScript, React and Git-based collaboration.",
  },
];

export default function Timeline() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-12 border-t border-border dark:border-border-dark"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-12"
        >
          Experience
        </motion.p>

        <div className="divide-y divide-border dark:divide-border-dark">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <p className="text-xs text-muted font-body tracking-widest">
                {item.year}
              </p>
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display font-medium text-ink dark:text-cream text-lg">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted font-body">
                    — {item.role}
                  </span>
                </div>
                <p className="text-sm font-body font-light text-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
