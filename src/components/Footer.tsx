import { Cpu, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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
    { label: "Register", href: "/register" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-background">
                  CSE (AML)
                </span>
                <p className="text-xs text-background/60">
                  Artificial Intelligence & Machine Learning
                </p>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              Pioneering the future of technology through innovation, research, and hands-on learning. 
              Join us in shaping tomorrow's AI landscape.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Department of CSE (AML)<br />
                  University Campus
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:cse.aml@university.edu" className="text-background/70 hover:text-secondary transition-colors">
                  cse.aml@university.edu
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} CSE (AML) Department. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Designed with ❤️ for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
