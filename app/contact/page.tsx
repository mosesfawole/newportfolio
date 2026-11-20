"use client";
import { useState, useEffect, useRef } from "react";
import { Mail, Code2, Copy, Check, Globe2 } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/ui/Footer";
const email="mosesfawoleh@gmail.com";
export default function ContactPage(){
 const [copied,setCopied]=useState(false); const timer=useRef<ReturnType<typeof setTimeout> | null>(null);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
 async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),2500)}catch{window.location.href="mailto:"+email}}
 return <main id="main-content"><PageIntro label="Let’s connect" title="Good things start" accent="with a conversation." description="Have a product to build, an AI workflow to untangle, or a role that sounds like a fit? I’d like to hear about it."/>
 <section className="site-container contact-grid"><Reveal className="contact-primary"><Mail size={30}/><p className="eyebrow">Email me</p><a href={"mailto:"+email} className="contact-email">{email}</a><p>The best place to start. Tell me what you’re working on and where I can help.</p><button type="button" onClick={copyEmail} className="copy-button">{copied?<Check size={17}/>:<Copy size={17}/>}<span aria-live="polite">{copied?"Email copied":"Copy email address"}</span></button></Reveal>
 <div className="contact-side"><Reveal className="contact-card"><Code2 size={25}/><h2>See how I build</h2><p>Code, project notes, and implementation details.</p><a href="https://github.com/mosesfawole" target="_blank" rel="noopener noreferrer" className="secondary-link">Visit my GitHub</a></Reveal><Reveal className="contact-card"><Globe2 size={25}/><h2>Based in Lagos</h2><p>Open to remote roles and collaborations across time zones.</p><span className="contact-status">AI & Full-Stack Developer</span></Reveal></div></section><Footer/></main>;
}
