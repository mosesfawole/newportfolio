"use client";
import { useState } from "react";
import { projects } from "@/data/Projects";
import ProjectTile from "./ProjectTile";
const categories = ["All work", "AI & automation", "Web products", "Experiments"] as const;
type Category = typeof categories[number];
const ai = new Set(["releaseroom", "clearcart", "mousa", "claude-referral-monitor"]);
const projectOrder = ["releaseroom", "clearcart", "near-replay-lab", "homeland", "baroque", "hireboard", "teletext-venue-bulletin", "claude-referral-monitor", "mousa", "pricehunt", "cryptoview", "kipclean"];
const experiments = new Set(["near-replay-lab", "teletext-venue-bulletin", "baroque"]);
export default function WorkList() {
  const [category,setCategory] = useState<Category>("All work");
  const visible = projects.filter(p=> category === "All work" || (category === "AI & automation" ? ai.has(p.id) : category === "Experiments" ? experiments.has(p.id) : !ai.has(p.id) && !experiments.has(p.id))).sort((a,b)=>projectOrder.indexOf(a.id)-projectOrder.indexOf(b.id));
  return <section className="site-container work-collection"><div className="work-toolbar"><div className="filter-tabs" role="group" aria-label="Filter projects">{categories.map(item=><button type="button" key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div><p aria-live="polite">{visible.length} projects</p></div><div className="project-grid" key={category}>{visible.map(project=><ProjectTile key={project.id} project={project}/>)}</div><p className="archive-note">Project pages distinguish prototypes, sandbox integrations, and recorded evidence.</p></section>;
}
