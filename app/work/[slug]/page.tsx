import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";
import ProjectPreview from "@/components/work/ProjectPreview";
import { projects } from "@/data/Projects";
interface Props { params: Promise<{ slug: string }> }
export function generateStaticParams(){return projects.map(project=>({slug:project.id}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const project=projects.find(p=>p.id===slug);return project?{title:project.title+" — Moses Fawole",description:project.description}:{}}
export default async function ProjectPage({params}:Props){
 const {slug}=await params; const project=projects.find(p=>p.id===slug);if(!project)notFound();
 const next=projects[(projects.findIndex(p=>p.id===slug)+1)%projects.length];
 return <main id="main-content"><section className="site-container project-intro"><Reveal><Link href="/work" className="back-link">Back to all work</Link><p className="eyebrow">{project.type} · {project.year}</p><h1>{project.title}</h1><div className="project-intro-bottom"><p>{project.description}</p><div className="project-actions">{project.live&&<a href={project.live} target="_blank" rel="noopener noreferrer" className="primary-link">Open live project</a>}{project.demo&&<a href={project.demo} target="_blank" rel="noopener noreferrer" className="primary-link">Watch demo</a>}{project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer" className="secondary-link">Source code</a>}</div></div><div className="tech-pills">{project.stack.map(item=><span key={item}>{item}</span>)}</div></Reveal></section>
 <section className="site-container project-body"><Reveal className="detail-preview"><ProjectPreview project={project} large/></Reveal>{project.problem&&<div className="case-study">{[["The problem",project.problem],["What I built",project.approach],["Evidence",project.evidence],["Current scope",project.scope]].map(([heading,copy])=>copy&&<Reveal key={heading}><section><h2>{heading}</h2><p>{copy}</p></section></Reveal>)}</div>}
 {project.image&&<Reveal className="original-capture"><div className="section-heading"><h2>From the project</h2><a href={project.image.src} target="_blank" rel="noopener noreferrer" className="secondary-link">View full-size screenshot</a></div><a href={project.image.src} target="_blank" rel="noopener noreferrer" className="original-image-link" aria-label={"Open full-size screenshot of "+project.title}><Image src={project.image.src} alt={project.image.alt} width={1600} height={1000} quality={100} sizes="(max-width: 1200px) 100vw, 1152px" className="original-image" /></a></Reveal>}
 <Reveal className="next-project"><p className="eyebrow">Keep exploring</p><Link href={"/work/"+next.id}>{next.title}</Link><Link href="/work" className="secondary-link">Browse the project shelf</Link></Reveal></section><Footer/></main>;
}
