import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/Footer";
import { projects } from "@/data/Projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  return project
    ? {
        title: `${project.title} — Moses Fawole`,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) notFound();

  return (
    <main id="main-content">
      <section className="px-6 pb-24 pt-36 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-16 inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-muted hover:text-ink dark:hover:text-cream"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Back to work
          </Link>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <p className="mb-5 font-body text-xs uppercase tracking-[0.3em] text-muted">
                {project.type} · {project.year}
              </p>
              <h1 className="max-w-4xl font-display text-[clamp(48px,9vw,120px)] font-medium leading-none tracking-[-0.02em] text-ink dark:text-cream">
                {project.title}
              </h1>
            </div>

            <div className="space-y-6">
              <p className="font-body text-sm font-light leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-border px-2 py-1 font-body text-[11px] uppercase tracking-wider text-muted dark:border-border-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-ink dark:text-cream"
                  >
                    Live project <ExternalLink size={13} aria-hidden="true" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-muted hover:text-ink dark:hover:text-cream"
                  >
                    Source code <ExternalLink size={13} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {project.image && (
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-border bg-surface dark:border-border-dark dark:bg-surface-dark">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}