"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface Line {
  text: string;
  italic?: boolean;
  breakAfter?: boolean;
}

interface Props {
  lines: Line[];
  className?: string;
  style?: React.CSSProperties;
}

export default function LetterReveal({ lines, className = "", style }: Props) {
  const { ref, inView } = useInView(0.2);
  const reducedMotion = useReducedMotion();
  const label = lines.map((line) => line.text).join(" ");

  return (
    <div ref={ref}>
      <motion.h1
        aria-label={label}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {},
        }}
        className={className}
        style={style}
      >
        <span className="sr-only">{label}</span>
        <span aria-hidden="true">
          {lines.map((line, lineIndex) => (
            <span
              key={`${line.text}-${lineIndex}`}
              className={line.italic ? "italic" : undefined}
            >
              {Array.from(line.text).map((character, characterIndex) => (
                <motion.span
                  key={`${character}-${characterIndex}`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={
                    inView || reducedMotion
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -18 }
                  }
                  transition={{
                    duration: reducedMotion ? 0 : 0.35,
                    delay: reducedMotion
                      ? 0
                      : (lineIndex * line.text.length + characterIndex) * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {character === " " ? "\u00a0" : character}
                </motion.span>
              ))}
              {line.breakAfter && <br />}
            </span>
          ))}
        </span>
      </motion.h1>
    </div>
  );
}