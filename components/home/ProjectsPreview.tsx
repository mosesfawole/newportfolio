import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/Projects";
const selectedIds = ["releaseroom", "clearcart", "near-replay-lab", "homeland", "baroque", "hireboard"];

export default function ProjectsPreview() {
  const selected = projects.filter(project => selectedIds.includes(project.id)).sort((a,b) => selectedIds.indexOf(a.id) - selectedIds.indexOf(b.id));
  return <section id="selected-work" className="px-6 pb-24 md:px-12 md:pb-32 scroll-mt-24"><div className="mx-auto max-w-6xl">
    <div className="section-heading"><h2>Selected work <span>2026</span></h2><Link href="/work" className="secondary-link">Browse all projects</Link></div>
    <div className="project-grid">{selected.map(project=><article key={project.id} className="project-tile">
      <Link href={"/work/"+project.id} className="project-image-link" aria-label={"Explore "+project.title}>{project.image ? <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-top" /> : <div className="project-type-cover"><span>{project.type}</span><strong>{project.title}</strong></div>}</Link>
      <div className="project-meta"><p>{project.type}</p><p>{project.year}</p></div>
      <h3><Link href={"/work/"+project.id}>{project.title}</Link></h3><p className="project-summary">{project.description}</p><p className="project-tools">{project.stack.slice(0,3).join(" / ")}</p>
    </article>)}</div>
  </div></section>;
}
