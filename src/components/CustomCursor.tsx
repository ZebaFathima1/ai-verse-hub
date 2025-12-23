import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [clickRipples, setClickRipples] = useState<ClickRipple[]>([]);
  const prevPosition = useRef({ x: 0, y: 0 });
  const trailId = useRef(0);
  const rippleId = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const dx = e.clientX - prevPosition.current.x;
      const dy = e.clientY - prevPosition.current.y;
      
      // Only update rotation if there's significant movement
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 135;
        setRotation(angle);
        
        // Add trail dot
        trailId.current += 1;
        setTrail(prev => [
          ...prev.slice(-8),
          { id: trailId.current, x: e.clientX, y: e.clientY }
        ]);
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

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      rippleId.current += 1;
      setClickRipples(prev => [
        ...prev,
        { id: rippleId.current, x: e.clientX, y: e.clientY }
      ]);
      
      // Remove ripple after animation
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

  // Clear old trail dots
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail effect */}
      <AnimatePresence>
        {trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9996]"
            initial={{ 
              x: dot.x - 4, 
              y: dot.y - 4, 
              opacity: 0.6,
              scale: 1,
              width: 8,
              height: 8,
              backgroundColor: "hsl(var(--primary))"
            }}
            animate={{ 
              opacity: 0,
              scale: 0.5,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              opacity: (index + 1) / trail.length * 0.5,
            }}
          />
        ))}
      </AnimatePresence>

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

      {/* Arrow cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: rotation,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          rotate: { type: "spring", stiffness: 300, damping: 20 },
          scale: { type: "spring", stiffness: 400, damping: 15 },
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
            fill={isClicking ? "hsl(var(--secondary))" : isHovering ? "hsl(var(--primary))" : "white"}
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      
      {/* Trailing ring - visible on hover */}
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
