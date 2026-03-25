import HorizontalScroll from "@/components/work/HorizontalScroll";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Work — Moses Fawole",
  description: "Selected projects by Moses Fawole.",
};

export default function WorkPage() {
  return (
    <main>
      <div className="px-6 md:px-12 pt-36 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-4">
            Selected Work
          </p>
          <h1 className="font-display font-medium text-ink dark:text-cream leading-tight text-[clamp(40px,7vw,88px)] tracking-[-0.02em]">
            Projects
          </h1>
          <p className="text-sm font-body font-light text-muted mt-4">
            Scroll down to browse →
          </p>
        </div>
      </div>
      <HorizontalScroll />
      <Footer />
    </main>
  );
}
