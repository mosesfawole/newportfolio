"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

// const getInitialTheme = () => {
//   if (typeof window === "undefined") {
//     return false;
//   }

//   const saved = localStorage.getItem("theme");
//   return saved === "dark";
// };

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = savedTheme ? savedTheme === "dark" : true;

    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    if (!savedTheme && !prefersDark) {
      // if user has no stored preference but prefers light, keep dark default only until they toggle.
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDark(true);
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggle = () => {
    setDark((current) => {
      const next = !current;
      if (next) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
