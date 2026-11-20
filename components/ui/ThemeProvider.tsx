"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext=createContext({dark:false,toggle:()=>{}});
export function ThemeProvider({children}:{children:React.ReactNode}){
 const [dark,setDark]=useState(false);
 useEffect(()=>{
  let preferred=window.matchMedia("(prefers-color-scheme: dark)").matches;
  try{const saved=localStorage.getItem("theme");if(saved)preferred=saved==="dark";}catch{}
  document.documentElement.classList.toggle("dark",preferred);
  document.documentElement.style.colorScheme=preferred?"dark":"light";
  setDark(preferred);
 },[]);
 function toggle(){const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);document.documentElement.style.colorScheme=next?"dark":"light";try{localStorage.setItem("theme",next?"dark":"light")}catch{}}
 return <ThemeContext.Provider value={{dark,toggle}}>{children}</ThemeContext.Provider>;
}
export const useTheme=()=>useContext(ThemeContext);
