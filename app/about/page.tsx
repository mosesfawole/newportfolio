import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import ContactStrip from "@/components/home/ContactStrip";
import Footer from "@/components/ui/Footer";
import PageIntro from "@/components/ui/PageIntro";
import Reveal from "@/components/ui/Reveal";
import { Code2, Sparkles, Fingerprint } from "lucide-react";
export const metadata = { title: "About — Moses Fawole", description: "AI & Full-Stack Developer based in Lagos." };
export default function AboutPage() {
 return <main id="main-content"><PageIntro label="A little about me" title="A builder’s curiosity." accent="A designer’s eye." description="I’m Moses, an AI & Full-Stack Developer in Lagos. I like turning a messy problem into something clear, considered, and usable."/>
 <section className="site-container about-story"><Reveal className="profile-panel"><div className="monogram" aria-hidden="true">mf<span>.</span></div><div><p className="eyebrow">Moses Fawole</p><h2>Frontend roots.<br />Full-stack range.</h2><p>Lagos, Nigeria<br />Open to roles & collaborations</p></div></Reveal><Reveal className="story-copy"><p>I started with frontend development: translating an idea into an interface someone can understand. That attention to the experience still shapes how I build.</p><p>Today, my work spans React and Next.js interfaces, Node.js backends, AI application workflows, and automation. I use model APIs where they help with a specific task, alongside ordinary code that validates the result.</p><p>Recent projects explore independent checks for AI-generated code, buyer-approved shopping, and evidence for agent payments. I use AI-assisted development and keep the project’s actual capabilities visible.</p></Reveal></section>
 <section className="site-container principles"><Reveal><Code2 size={25}/><h2>Build the whole flow</h2><p>Connect the interface, application logic, and the details that make a product work.</p></Reveal><Reveal><Sparkles size={25}/><h2>Give AI a useful job</h2><p>Start with the user’s task. Choose the model integration after the problem is clear.</p></Reveal><Reveal><Fingerprint size={25}/><h2>Make results inspectable</h2><p>Keep checks, approvals, and evidence close to the action they support.</p></Reveal></section>
 <Skills/><Timeline/><ContactStrip/><Footer/></main>;
}
