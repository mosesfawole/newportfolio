import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-12 text-center bg-cream dark:bg-ink transition-colors duration-300">
      <div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink dark:text-cream mb-4">
          404
        </h1>
        <p className="text-muted dark:text-border-dark mb-8">
          Oops! The page you are looking for does not exist. Try going back
          home.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full font-medium text-ink bg-surface dark:bg-surface-dark dark:text-cream hover:opacity-80 transition-opacity"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
