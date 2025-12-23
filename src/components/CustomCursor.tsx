import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [clickRipples, setClickRipples] = useState<ClickRipple[]>([]);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);
  const rippleId = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      setTrailPositions(prev => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        return newPositions.slice(-6); // Keep last 6 positions
      });
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

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      rippleId.current += 1;
      setClickRipples(prev => [
        ...prev,
        { id: rippleId.current, x: e.clientX, y: e.clientY }
      ]);
      
      setTimeout(() => {
        setClickRipples(prev => prev.slice(1));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail effect - smooth dots */}
      {trailPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 rounded-full bg-primary pointer-events-none z-[9996]"
          style={{
            x: pos.x - 3,
            y: pos.y - 3,
            width: 6,
            height: 6,
            opacity: ((index + 1) / trailPositions.length) * 0.3,
            scale: ((index + 1) / trailPositions.length) * 0.8,
          }}
        />
      ))}

      {/* Click ripple effect */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed top-0 left-0 rounded-full border-2 border-primary pointer-events-none z-[9997]"
            initial={{ 
              x: ripple.x - 10, 
              y: ripple.y - 10, 
              width: 20,
              height: 20,
              opacity: 1,
              scale: 1,
            }}
            animate={{ 
              scale: 3,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Main arrow cursor - smooth movement */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.85 : isHovering ? 1.1 : 1,
        }}
        transition={{
          x: { type: "tween", duration: 0.05, ease: "linear" },
          y: { type: "tween", duration: 0.05, ease: "linear" },
          scale: { type: "tween", duration: 0.15, ease: "easeOut" },
        }}
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
            fill={isClicking ? "hsl(var(--secondary))" : isHovering ? "hsl(var(--primary))" : "white"}
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      
      {/* Hover ring - smooth */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 0.5 : 0,
        }}
        transition={{
          x: { type: "tween", duration: 0.1, ease: "linear" },
          y: { type: "tween", duration: 0.1, ease: "linear" },
          scale: { type: "tween", duration: 0.2, ease: "easeOut" },
          opacity: { type: "tween", duration: 0.2, ease: "easeOut" },
        }}
      />
    </>
  );
};

export default CustomCursor;
