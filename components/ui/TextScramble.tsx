"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScramble({ text, className }: { text: string, className?: string }) {
  const ref = useRef(null);
  // 'once: true' guarantees it only triggers one time
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (isInView) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Controls the speed (higher denominator = slower)
      }, 30);

      // Cleanup function to stop memory leaks
      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}