import AboutHero from "@/components/about/AboutHero";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import ContactStrip from "@/components/home/ContactStrip";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "About — Moses Fawole",
  description: "Frontend Engineer",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <section className="py-20 px-6 md:px-12 border-t border-border dark:border-border-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-body font-light text-muted leading-relaxed">
            I&apos;m a frontend engineer from Lagos, Nigeria. I specialise in
            building fast, accessible and visually sharp web products — from
            real-time dashboards to full-stack applications with AI integration.
          </p>
          <p className="font-body font-light text-muted leading-relaxed">
            My work spans React and Next.js on the frontend, Three.js for 3D
            experiences, and Supabase and Node.js on the backend. I care deeply
            about the gap between design and implementation and spend a lot of
            time closing it.
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
