import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const prevPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const dx = e.clientX - prevPosition.current.x;
      const dy = e.clientY - prevPosition.current.y;
      
      // Only update rotation if there's significant movement
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 135;
        setRotation(angle);
      }
      
      prevPosition.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Arrow cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: rotation,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          rotate: { type: "spring", stiffness: 300, damping: 20 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
        style={{ originX: 0, originY: 0 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path
            d="M4 4L12 20L14.5 13L21 10.5L4 4Z"
            fill={isHovering ? "hsl(var(--primary))" : "white"}
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      
      {/* Trailing ring - only visible on hover */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary/40 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CustomCursor;
