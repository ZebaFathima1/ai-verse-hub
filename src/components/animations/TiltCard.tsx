import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  tiltAmount?: number;
}

const TiltCard = ({ 
  children, 
  className = "", 
  glare = true,
  tiltAmount = 15 
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 300,
    damping: 30,
  });

  const glareX = useTransform(x, [0, 1], ["-50%", "150%"]);
  const glareY = useTransform(y, [0, 1], ["-50%", "150%"]);
  const glareOpacity = useTransform(
    [x, y],
    ([latestX, latestY]) => {
      const xVal = latestX as number;
      const yVal = latestY as number;
      const distance = Math.sqrt(Math.pow(xVal - 0.5, 2) + Math.pow(yVal - 0.5, 2));
      return Math.min(distance * 0.8, 0.4);
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        
        {/* Glare Effect */}
        {glare && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="absolute w-[200%] h-[200%]"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 50%)",
                x: glareX,
                y: glareY,
                opacity: glareOpacity,
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
