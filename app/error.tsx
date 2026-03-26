"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center p-12 text-center bg-cream dark:bg-ink transition-colors duration-300">
      <div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink dark:text-cream mb-4">
          Something went wrong
        </h1>
        <p className="text-muted dark:text-border-dark mb-4">
          Sorry, an unexpected error occurred. Please try refreshing the page.
        </p>
        <p className="text-xs text-muted dark:text-border-dark mb-8">
          {error.message}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full font-medium text-ink bg-surface dark:bg-surface-dark dark:text-cream hover:opacity-80 transition-opacity"
          >
            Retry
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-medium text-cream bg-ink hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
