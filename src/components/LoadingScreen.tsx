import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Cpu, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onLoadingComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const letters = "AIML".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center gradient-hero overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(221 83% 53% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center shadow-glow"
            animate={{
              boxShadow: [
                "0 0 30px hsl(221 83% 53% / 0.4)",
                "0 0 60px hsl(221 83% 53% / 0.6)",
                "0 0 30px hsl(221 83% 53% / 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-10 h-10 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Letters */}
        <div className="flex justify-center gap-3 mb-4">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-6xl md:text-8xl font-display font-bold"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.4 + index * 0.15,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              style={{
                background: "linear-gradient(135deg, hsl(221 83% 53%), hsl(160 84% 39%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-primary-foreground/70 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Artificial Intelligence & Machine Learning
          </motion.span>
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-bg rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className="text-primary-foreground/50 text-sm mt-3 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            Loading Experience...
          </motion.p>
        </div>

        {/* Circular Loading Ring */}
        <motion.div
          className="absolute -inset-32 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              strokeDasharray="565"
              initial={{ strokeDashoffset: 565 }}
              animate={{ strokeDashoffset: 0, rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(221 83% 53%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
