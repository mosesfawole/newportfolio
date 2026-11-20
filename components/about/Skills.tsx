import Reveal from "@/components/ui/Reveal";
import { PanelsTopLeft, Sparkles, Database, Wrench } from "lucide-react";
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
    label: "AI & Workflows",
    skills: ["Model API integration", "Structured outputs", "Agent workflows", "Human approval gates", "Codex", "Claude API", "Gemini API"],
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
    skills: ["Git & GitHub", "Vercel", "Automated checks", "Figma", "Three.js", "React Three Fiber"],
  },
];


const icons=[PanelsTopLeft,Sparkles,Database,Wrench];
export default function Skills(){return <section className="skills-section"><div className="site-container"><Reveal className="section-heading"><h2>Tools of the trade</h2><span className="eyebrow">Chosen for the task</span></Reveal><div className="skill-grid">{skillGroups.map((group,i)=>{const Icon=icons[i];return <Reveal key={group.label} className="skill-card"><Icon size={25}/><h3>{group.label}</h3><ul>{group.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></Reveal>})}</div></div></section>;}
