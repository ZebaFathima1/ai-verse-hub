import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Zap, Cpu, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import FloatingParticles from "@/components/animations/FloatingParticles";
import GlowingOrbs from "@/components/animations/GlowingOrbs";
import TiltCard from "@/components/animations/TiltCard";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: "15%", y: "25%" },
    { Icon: Cpu, delay: 1, x: "80%", y: "30%" },
    { Icon: Bot, delay: 2, x: "10%", y: "60%" },
    { Icon: Zap, delay: 1.5, x: "85%", y: "65%" },
    { Icon: Sparkles, delay: 0.5, x: "20%", y: "80%" },
  ];

  const stats = [
    { value: "500+", label: "Participants" },
    { value: "4", label: "Major Events" },
    { value: "50+", label: "Workshops" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background */}
      <GlowingOrbs />
      <FloatingParticles count={30} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.15, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 0.5 },
            scale: { delay: delay + 0.5, duration: 0.5, type: "spring" },
            y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8 cursor-default hoverable"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary-foreground/90">
              Department of AIML
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-primary-foreground">
              <TextReveal delay={0.5}>Welcome to</TextReveal>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                CSE (AIML)
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Innovating the Future with{" "}
            <motion.span 
              className="text-secondary font-semibold inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Artificial Intelligence
            </motion.span>
            {" "}& Machine Learning
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/register">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  Register for AI Verse 4.0
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
            <a href="#events">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="glass" size="lg" className="text-primary-foreground/90 border-primary-foreground/20">
                  Explore Past Events
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Stats Cards with 3D Tilt */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15, type: "spring" }}
              >
                <TiltCard tiltAmount={12} className="h-full">
                  <div className="glass-card rounded-2xl p-4 md:p-6 text-center h-full">
                    <motion.div
                      className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-1"
                      animate={{ 
                        textShadow: [
                          "0 0 10px hsl(221 83% 53% / 0.3)",
                          "0 0 20px hsl(221 83% 53% / 0.5)",
                          "0 0 10px hsl(221 83% 53% / 0.3)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-primary-foreground/50">{stat.label}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary-foreground/50"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
