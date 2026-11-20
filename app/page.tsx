import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import AboutStrip from "@/components/home/AboutStrip";
import ContactStrip from "@/components/home/ContactStrip";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="relative">
      <Hero />
      <ProjectsPreview />
      <AboutStrip />
      <ContactStrip />
      <Footer />
    </main>
  );
}
