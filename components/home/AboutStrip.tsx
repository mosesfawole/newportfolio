import Link from "next/link";
export default function AboutStrip() {
  return <section className="about-strip px-6 py-20 md:px-12 md:py-28"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-20">
    <div><p className="eyebrow">How I work</p><h2 className="section-title">From the interface<br /><em>to the evidence.</em></h2></div>
    <div className="about-copy"><p>My background is in frontend development. Today, I work across the stack to build AI-assisted products, automation, and interactive web experiences.</p><p>I care about the details people see and the behavior they rely on: readable interfaces, validated inputs, explicit approvals, and results we can inspect.</p><Link href="/about" className="secondary-link">More about me</Link></div>
  </div></section>;
}
