import { motion } from "framer-motion";

interface GlowingOrbsProps {
  className?: string;
}

const GlowingOrbs = ({ className = "" }: GlowingOrbsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary Orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(221 83% 53% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-10%", "30%", "-10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Orb */}
      <motion.div
        className="absolute right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(160 84% 39% / 0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["30%", "-10%", "30%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent Orb */}
      <motion.div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(172 66% 50% / 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: ["0%", "-40%", "0%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GlowingOrbs;
