import AboutHero from "@/components/about/AboutHero";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import ContactStrip from "@/components/home/ContactStrip";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "About — Moses Fawole",
  description: "AI & Full-Stack Developer based in Lagos, building AI workflows and web products.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <section className="py-20 px-6 md:px-12 border-t border-border dark:border-border-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-body font-light text-muted leading-relaxed">
            I&apos;m Moses, an AI & Full-Stack Developer based in Lagos, Nigeria.
            I started with frontend development and now build across the stack,
            from interactive websites to AI-assisted shopping and agent workflows.
          </p>
          <p className="font-body font-light text-muted leading-relaxed">
            I use React, Next.js and TypeScript for product interfaces, Node.js
            and databases for application behavior, and model APIs where they
            help with a specific task. Recent projects combine AI with independent
            validation, human approval, and inspectable payment evidence.
          </p>
        </div>
      </section>
      <Skills />
      <Timeline />
      <ContactStrip />
      <Footer />
    </main>
  );
}
