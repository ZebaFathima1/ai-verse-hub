import { motion } from "framer-motion";
import { Cpu, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/#events" },
    { label: "AI Verse 4.0", href: "/#upcoming" },
    { label: "Team", href: "/#team" },
    { label: "Register", href: "/register" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <ScrollReveal direction="up" className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div>
                <span className="font-display font-bold text-xl text-background">
                  CSE (AIML)
                </span>
                <p className="text-xs text-background/60">
                  Vaagdevi College of Engineering & Technology
                </p>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              Department of Computer Science & Engineering (Artificial Intelligence & Machine Learning). 
              Pioneering the future of technology through innovation, research, and hands-on learning.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hoverable"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-secondary transition-colors hoverable"
                    >
                      <motion.span whileHover={{ x: 5 }} className="inline-block">
                        {link.label}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="text-background/70 hover:text-secondary transition-colors hoverable"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  )}
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
              >
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Department of CSE (AI & ML)<br />
                  Vaagdevi College of Engineering & Technology
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:cse.aiml@university.edu" className="text-background/70 hover:text-secondary transition-colors hoverable">
                  cse.aiml@university.edu
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">+91 98765 43210</span>
              </motion.li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-background/50 text-sm text-center md:text-left">
            © {currentYear} CSE (AI & ML) Department, VCET. All rights reserved.
          </p>
          <p className="text-background/50 text-sm text-center md:text-right">
            Vaagdevi College of Engineering & Technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
