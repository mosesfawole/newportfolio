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
  const [dark, setDark] = useState(true); //

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // No saved preference OR saved as dark → always dark
      setDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
