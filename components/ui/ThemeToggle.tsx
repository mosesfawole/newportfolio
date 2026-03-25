"use client";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-surface dark:hover:bg-surface-dark"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun size={15} className="text-cream" />
      ) : (
        <Moon size={15} className="text-ink" />
      )}
    </button>
  );
}
