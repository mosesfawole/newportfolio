import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted font-body tracking-wide">
          © 2026 Moses Fawole
        </p>
        <div className="flex items-center gap-6">
          {[
            { href: "https://github.com/mosesfawole", label: "GitHub" },
            { href: "mailto:mosesfawoleh@gmail.com", label: "Mail" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-muted hover:text-ink dark:hover:text-cream transition-colors font-body"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
