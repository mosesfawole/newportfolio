"use client";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group shrink-0 w-[82vw] md:w-[48vw] lg:w-[38vw] border border-border dark:border-border-dark p-5 md:p-6 flex flex-col justify-between min-h-[500px]"
    >
      <div>
        {project.image && (
          <div className="relative mb-6 aspect-[16/10] overflow-hidden border border-border bg-surface dark:border-border-dark dark:bg-surface-dark">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 82vw, (max-width: 1024px) 48vw, 38vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex items-start justify-between mb-6">
          <span className="text-xs text-muted font-body tracking-widest uppercase">
            {project.type} · {project.year}
          </span>
          <div className="flex gap-3">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wider uppercase font-body text-muted hover:text-ink dark:hover:text-cream transition-colors"
              >
                Live ↗
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wider uppercase font-body text-muted hover:text-ink dark:hover:text-cream transition-colors"
              >
                Code ↗
              </Link>
            )}
          </div>
        </div>

        <h3 className="font-display font-medium text-ink dark:text-cream mb-4 leading-tight text-[clamp(28px,3vw,40px)] tracking-[-0.01em]">
          {project.title}
        </h3>

        <p className="text-sm font-body font-light text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] tracking-wider uppercase text-muted border border-border dark:border-border-dark px-2 py-1 font-body"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
