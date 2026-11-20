import Reveal from "@/components/ui/Reveal";
const items = [
  {
    year: "2026",
    title: "Independent projects",
    role: "AI & Full-Stack Developer",
    detail: "Building AI application workflows, payment verification tools, and local-first prototypes. Selected work includes ReleaseRoom, ClearCart, and NEAR Replay Lab.",
  },
  {
    year: "2025",
    title: "Paramount Students",
    role: "Frontend Developer",
    detail:
      "Building and maintaining web applications serving students across Istanbul and beyond.",
  },
  {
    year: "2024",
    title: "KipClean",
    role: "Freelance Frontend Developer",
    detail:
      "Designed and built a full landing page for a cleaning services company, managing the project end to end.",
  },
  {
    year: "2022",
    title: "14G x Zuri Training",
    role: "Frontend Development Intern",
    detail:
      "Completed an intensive programme covering HTML, CSS, JavaScript, React and Git-based collaboration.",
  },
];


export default function Timeline(){return <section className="site-container journey"><Reveal className="section-heading"><h2>The journey</h2><span className="eyebrow">Experience & independent work</span></Reveal><div className="journey-list">{items.map(item=><Reveal key={item.title} className="journey-item"><p className="journey-year">{item.year}</p><div><p className="eyebrow">{item.role}</p><h3>{item.title}</h3><p>{item.detail}</p></div></Reveal>)}</div></section>;}
