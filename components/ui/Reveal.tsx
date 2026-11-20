"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-30px" });
  return <div ref={ref} className={`reveal ${className}`} data-revealed={visible}>{children}</div>;
}
