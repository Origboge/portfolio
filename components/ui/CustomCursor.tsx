"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Use MotionValues instead of State to prevent re-renders (Fixes the lag)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for the cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      // Update motion values directly (high performance)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over links, buttons, or specific classes
      setIsHovering(!!target.closest("a, button, .cursor-hover"));
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        // Center the cursor
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        width: isHovering ? 60 : 12,
        height: isHovering ? 60 : 12,
        // FIX: Use HEX code for white (#ffffff) instead of the name "white"
        backgroundColor: isHovering ? "#ffffff" : "#f97316",
        opacity: isHovering ? 0.2 : 1,
      }}
      transition={{
        // Separate transition settings for size/color vs movement
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
}