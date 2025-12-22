import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton = ({ children, className = "", onClick }: MagneticButtonProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="relative"
        whileHover={{
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
