import Link from "next/link";
import type { Project } from "@/types";
import Reveal from "@/components/ui/Reveal";
import ProjectPreview from "./ProjectPreview";

export default function ProjectTile({ project }: { project: Project }) {
  return <Reveal className="project-tile"><article>
    <Link href={`/work/${project.id}`} className="project-visual-link" aria-label={`Explore ${project.title}`}><ProjectPreview project={project} /><span className="preview-open">Explore project</span></Link>
    <div className="project-meta"><p>{project.type}</p><p>{project.year}</p></div>
    <h3><Link href={`/work/${project.id}`}>{project.title}</Link></h3>
    <p className="project-summary">{project.description}</p>
    <div className="project-bottom"><p className="project-tools">{project.stack.slice(0, 3).join(" / ")}</p><Link href={`/work/${project.id}`} className="project-detail-link">Details</Link></div>
  </article></Reveal>;
}
