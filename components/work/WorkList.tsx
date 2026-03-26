"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/Projects";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const experience = [
  {
    id: "paramount",
    title: "Paramount Students",
    role: "Frontend Developer",
    year: "2023 – Present",
    location: "Istanbul, Turkey (Remote)",
    type: "experience",
    description:
      "Built and maintained web applications using React, TypeScript and Next.js. Reduced page load time by 30% through code splitting and lazy loading. Collaborated with design team to implement pixel-perfect UIs from Figma prototypes.",
    stack: ["React", "TypeScript", "Next.js", "Redux"],
    link: "www.github.com/mosesfawole/paramount-students",
  },
  {
    id: "kipclean-exp",
    title: "KipClean",
    role: "Freelance Frontend Developer",
    year: "2024",
    location: "Lagos, Nigeria",
    type: "experience",
    description:
      "Designed and developed a full landing page for a professional cleaning services company. Delivered a mobile-first responsive experience with smooth animations. Managed the full project lifecycle independently from requirements to deployment.",
    stack: ["React", "Vite", "Tailwind CSS"],
    link: "https://kipclean-v1.vercel.app/",
  },
  {
    id: "zuri",
    title: "14G x Zuri Training",
    role: "Frontend Development Intern",
    year: "2022",
    location: "Lagos, Nigeria",
    type: "experience",
    description:
      "Completed an intensive frontend development programme covering HTML, CSS, JavaScript and modern frameworks. Delivered hands-on projects reinforcing responsive design, component architecture and Git-based workflows.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Git"],
    link: "https://training.zuri.team/",
  },
];

type Item =
  | (typeof experience)[0]
  | ((typeof projects)[0] & {
      type: string;
      role?: string;
      year: string;
      location?: string;
      description: string;
    });

export default function WorkList() {
  const [openId, setOpenId] = useState<string | null>(null);

  const allItems = [
    ...projects.map((p) => ({
      ...p,
      type: "project",
      role: p.type,
      location: undefined,
    })),
    ...experience,
  ];

  const projectItems = allItems.filter(
    (i) =>
      i.type === "project" ||
      i.type === "Freelance" ||
      i.type === "Personal Project",
  );
  const expItems = allItems.filter((i) => i.type === "experience");

  const renderList = (items: typeof allItems, label: string) => (
    <div className="mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-6 px-6 md:px-12">
        {label}
      </p>
      <div className="divide-y divide-border dark:divide-border-dark border-t border-b border-border dark:border-border-dark">
        {items.map((item, i) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left px-6 md:px-12 py-6 flex items-center justify-between group hover:bg-surface dark:hover:bg-surface-dark transition-colors"
              >
                <div className="flex items-center gap-6 md:gap-12 flex-1 min-w-0">
                  <span className="text-xs text-muted font-body shrink-0 hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-medium text-ink dark:text-cream leading-tight"
                      style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted font-body mt-1">
                      {item.role} · {item.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <div className="hidden md:flex gap-2">
                    {item.stack?.slice(0, 2).map((s: string) => (
                      <span
                        key={s}
                        className="text-[10px] tracking-wider uppercase text-muted border border-border dark:border-border-dark px-2 py-1 font-body"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border border-border dark:border-border-dark text-muted group-hover:text-ink dark:group-hover:text-cream transition-colors">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-12 pb-8 pt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Description */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-sm font-body font-light text-muted leading-relaxed">
                          {item.description}
                        </p>
                        {item.location && (
                          <p className="text-xs text-muted font-body tracking-wide">
                            📍 {item.location}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.stack?.map((s: string) => (
                            <span
                              key={s}
                              className="text-[11px] tracking-wider uppercase text-muted border border-border dark:border-border-dark px-2 py-1 font-body"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-3">
                        {"live" in item && item.live && (
                          <Link
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-widest uppercase font-body text-ink dark:text-cream border-b border-ink dark:border-cream pb-0.5 hover:opacity-60 transition-opacity w-fit"
                          >
                            Live ↗
                          </Link>
                        )}
                        {"github" in item && item.github && (
                          <Link
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-widest uppercase font-body text-muted hover:text-ink dark:hover:text-cream transition-colors w-fit"
                          >
                            Code ↗
                          </Link>
                        )}
                        {"link" in item && item.link && !("github" in item) && (
                          <Link
                            href={item.link as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-widest uppercase font-body text-ink dark:text-cream border-b border-ink dark:border-cream pb-0.5 hover:opacity-60 transition-opacity w-fit"
                          >
                            Visit ↗
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto pb-24">
      {renderList(projectItems, "Projects")}
      {renderList(expItems, "Experience")}
    </section>
  );
}
