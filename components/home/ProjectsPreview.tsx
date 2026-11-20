import Link from "next/link";
import { projects } from "@/data/Projects";
import ProjectTile from "@/components/work/ProjectTile";
import Reveal from "@/components/ui/Reveal";
const selectedIds = ["releaseroom", "clearcart", "near-replay-lab", "homeland", "baroque", "hireboard"];
export default function ProjectsPreview() {
  const selected = projects.filter(p=>selectedIds.includes(p.id)).sort((a,b)=>selectedIds.indexOf(a.id)-selectedIds.indexOf(b.id));
  return <section id="selected-work" className="site-container selected-section"><Reveal className="section-heading"><h2>Selected work <span>2026</span></h2><Link href="/work" className="secondary-link">Browse all projects</Link></Reveal><div className="project-grid">{selected.map(project=><ProjectTile key={project.id} project={project}/>)}</div></section>;
}
