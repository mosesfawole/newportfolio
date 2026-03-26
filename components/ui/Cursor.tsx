"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const frame = useRef<number>(0);
  const activeScale = useRef(1);
  const isEnabled = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    isEnabled.current = !window.matchMedia("(pointer: coarse)").matches;
    if (
      !isEnabled.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px) scale(${activeScale.current})`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    const onPointerOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest(
        "a, button, input, textarea, select, [role='button']",
      ) as HTMLElement | null;
      if (!target) return;

      activeScale.current = 1.8;
      if (ringRef.current) ringRef.current.style.opacity = "0.4";
    };

    const onPointerOut = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest(
        "a, button, input, textarea, select, [role='button']",
      ) as HTMLElement | null;
      if (!target) return;

      activeScale.current = 1;
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onPointerOver, { passive: true });
    window.addEventListener("mouseout", onPointerOut, { passive: true });

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onPointerOver);
      window.removeEventListener("mouseout", onPointerOut);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-cream pointer-events-none"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-cream pointer-events-none"
        style={{ willChange: "transform", transition: "opacity 0.2s ease" }}
      />
    </>
  );
}
