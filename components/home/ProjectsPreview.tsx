"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const { ref, inView } = useInView();
  const featured = projects.filter((p) => p.featured);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-body">
            Selected Work
          </p>
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase font-body text-muted hover:text-ink dark:hover:text-cream transition-colors"
          >
            All Projects →
          </Link>
        </motion.div>

        {/* Project list */}
        <div className="divide-y divide-border dark:divide-border-dark">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                href={`/work`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 hover:opacity-60 transition-opacity"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-xs text-muted font-body mt-1 shrink-0"
                    style={{ minWidth: "32px" }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-display font-medium text-ink dark:text-cream mb-2"
                      style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted font-body font-light max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:shrink-0 pl-10 md:pl-0">
                  {project.stack.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-[11px] tracking-wider uppercase text-muted border border-border dark:border-border-dark px-2 py-1 font-body"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
