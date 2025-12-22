import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Sparkles, ArrowRight, Rocket, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrbs from "@/components/animations/GlowingOrbs";
import FloatingParticles from "@/components/animations/FloatingParticles";

const UpcomingEvent = () => {
  const eventDetails = {
    title: "AI Verse 4.0",
    tagline: "The Next Frontier of Artificial Intelligence",
    date: "March 15-16, 2025",
    venue: "CSE Department Auditorium",
    time: "9:00 AM - 6:00 PM",
    highlights: [
      { icon: Rocket, title: "AI Innovation Lab", description: "Hands-on experience with latest AI tools" },
      { icon: Zap, title: "Tech Talks", description: "Industry experts sharing insights" },
      { icon: Star, title: "Hackathon", description: "24-hour coding challenge with prizes" },
    ],
  };

  return (
    <section id="upcoming" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <GlowingOrbs />
        <FloatingParticles count={15} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(221 83% 53% / 0.3)",
                    "0 0 40px hsl(221 83% 53% / 0.5)",
                    "0 0 20px hsl(221 83% 53% / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-secondary" />
                </motion.div>
                <span className="text-sm font-bold text-primary-foreground">Upcoming Event</span>
              </motion.span>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <motion.h2
                className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-4"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto]">
                  {eventDetails.title}
                </span>
              </motion.h2>
              <p className="text-xl text-primary-foreground/70 max-w-xl mx-auto">
                {eventDetails.tagline}
              </p>
            </div>
          </ScrollReveal>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Calendar, label: "Date", value: eventDetails.date },
              { icon: Clock, label: "Time", value: eventDetails.time },
              { icon: MapPin, label: "Venue", value: eventDetails.venue },
            ].map((info, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  className="glass-card rounded-2xl p-6 text-center group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-semibold text-primary-foreground mb-1">{info.label}</h3>
                  <p className="text-primary-foreground/70">{info.value}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {eventDetails.highlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                <motion.div
                  className="glass-card rounded-2xl p-8 group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <highlight.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-primary-foreground/60">{highlight.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <Link to="/register">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hero" size="xl" className="group relative overflow-hidden">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    />
                    Register Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <motion.p
                className="mt-4 text-primary-foreground/50 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Limited seats available. Secure your spot today!
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
