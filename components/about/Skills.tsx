"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "3D & Animation",
    skills: ["Three.js", "React Three Fiber", "@react-three/drei", "GSAP"],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "NextAuth",
      "Prisma",
    ],
  },
  {
    label: "Tooling",
    skills: ["Git", "GitHub", "Vercel", "Figma", "Vite", "Docker (familiar)"],
  },
];

export default function Skills() {
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
          Skills
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-xs tracking-widest uppercase text-muted font-body mb-4">
                {group.label}
              </p>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <p
                    key={skill}
                    className="text-sm font-body font-light text-ink dark:text-cream"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
