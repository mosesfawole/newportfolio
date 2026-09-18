"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/Projects";

export default function ProjectsPreview() {
  const { ref, inView } = useInView();
  const featured = projects.filter((p) => p.featured);

  return (
    <section ref={ref} className="py-12 md:py-24 px-6 md:px-12">
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
            All Projects -&gt;
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
                href={`/work/${project.id}`}
                className="group grid gap-5 py-8 transition-opacity hover:opacity-75 md:grid-cols-[minmax(0,1fr)_220px_auto] md:items-center"
              >
                <div className="flex items-start gap-6">
                  <span className="text-xs text-muted font-body mt-1 shrink-0 min-w-[32px]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-medium text-ink dark:text-cream mb-2 text-[clamp(22px,3vw,32px)] tracking-[-0.01em]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted font-body font-light max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                {project.image && (
                  <div className="relative ml-10 aspect-[16/10] overflow-hidden border border-border bg-surface dark:border-border-dark dark:bg-surface-dark md:ml-0">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 768px) 70vw, 220px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
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
