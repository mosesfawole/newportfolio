import Link from "next/link";
export default function Hero() {
  return <section className="portfolio-hero px-6 md:px-12"><div className="mx-auto max-w-6xl">
    <div className="hero-intro"><p className="eyebrow">Moses Fawole · Lagos, Nigeria</p><p className="availability">Open to roles & collaborations</p></div>
    <h1 className="hero-title">Thoughtful software.<br /><em>Useful AI.</em></h1>
    <div className="hero-bottom"><div><p className="hero-role">AI & Full-Stack Developer</p><p className="hero-description">I build web products and AI workflows, with clear interfaces and checks on what happens behind them.</p></div>
    <div className="hero-actions"><Link href="#selected-work" className="primary-link">Explore selected work</Link><Link href="/contact" className="secondary-link">Let’s talk</Link></div></div>
  </div></section>;
}
