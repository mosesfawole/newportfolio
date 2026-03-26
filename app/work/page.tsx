import WorkList from "@/components/work/WorkList";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Work — Moses Fawole",
};

export default function WorkPage() {
  return (
    <main>
      <section className="px-6 md:px-12 pt-36 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-4">
            Selected Work
          </p>
          <h1
            className="font-display font-medium text-ink dark:text-cream leading-tight mb-4"
            style={{
              fontSize: "clamp(40px, 7vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Projects &<br />
            <em>Experience</em>
          </h1>
        </div>
      </section>
      <WorkList />
      <Footer />
    </main>
  );
}
