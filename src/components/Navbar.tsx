import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/#events", label: "EVENTS" },
    { href: "/#upcoming", label: "AI VERSE 4.0" },
    { href: "/#gallery", label: "GALLERY" },
    { href: "/#team", label: "TEAM" },
    { href: "/#faq", label: "FAQS" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group hoverable shrink-0">
            <motion.div
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-xs font-bold text-center leading-tight">
                <span className="text-foreground">AIML</span>
              </div>
            </motion.div>
            <div className="flex flex-col hidden sm:block">
              <span className="font-display font-bold text-sm leading-tight text-foreground">
                CSE (AIML)
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight uppercase tracking-wider">
                Department of AI & ML
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Rounded Border Container */}
          <motion.div 
            className={cn(
              "hidden lg:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300",
              isScrolled
                ? "bg-card/90 backdrop-blur-xl border-border/50"
                : "bg-card/50 backdrop-blur-sm border-foreground/20"
            )}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-5 py-2 text-xs font-medium tracking-wider transition-all rounded-full",
                  location.pathname === link.href && location.hash === ""
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                )}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <div className="hidden lg:block shrink-0">
            <Link to="/register">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="default" 
                  className="hoverable rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all text-xs tracking-wider px-6"
                >
                  REGISTER
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-foreground hoverable border border-foreground/20 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 rounded-2xl border border-foreground/20 bg-card/95 backdrop-blur-xl overflow-hidden"
            >
              <motion.div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                  >
                    REGISTER
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
