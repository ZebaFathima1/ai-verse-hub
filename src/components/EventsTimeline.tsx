import { motion } from "framer-motion";
import { Users, Sparkles, ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCard from "@/components/animations/AnimatedCard";
import TiltCard from "@/components/animations/TiltCard";

interface Event {
  id: number;
  title: string;
  year: string;
  description: string;
  highlights: string[];
  participants: string;
  image: string;
}

// Upcoming event data
const upcomingEvent = {
  id: 0,
  title: "AI Verse 4.0",
  year: "2025",
  date: "March 15-16, 2025",
  description: "The next frontier of Artificial Intelligence! Join us for AI Verse 4.0 featuring cutting-edge workshops on LLMs, Agentic AI, and the latest breakthroughs in machine learning.",
  highlights: ["LLM Workshop", "Agentic AI Lab", "Industry Experts", "Networking Sessions"],
  participants: "500+",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
};

const events: Event[] = [
  {
    id: 1,
    title: "Data Stargaze",
    year: "2021",
    description: "Our flagship event that marked the beginning of an incredible journey. Data Stargaze brought together data enthusiasts, industry experts, and aspiring data scientists for an immersive learning experience.",
    highlights: ["Data Science Workshops", "Industry Expert Talks", "Hackathon", "Career Guidance Sessions"],
    participants: "150+",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "AI Verse 2.0",
    year: "2022",
    description: "Building on our success, AI Verse 2.0 expanded the horizon with cutting-edge AI demonstrations, hands-on ML workshops, and networking opportunities with industry leaders.",
    highlights: ["AI Project Showcase", "ML Bootcamp", "Panel Discussions", "Startup Pitches"],
    participants: "250+",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "AI Verse 3.0",
    year: "2023",
    description: "Our biggest event yet! AI Verse 3.0 featured groundbreaking sessions on Generative AI, Computer Vision, and NLP, attracting participants from across the nation.",
    highlights: ["GenAI Workshop", "Computer Vision Lab", "NLP Masterclass", "Industry Partnerships"],
    participants: "400+",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
];

const cardVariants = ["flip", "scale", "rotate"] as const;

const EventsTimeline = () => {
  return (
    <section id="events" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Our Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Past Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of innovation, learning, and community building through our flagship events.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {events.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "relative flex items-start gap-8 mb-16 last:mb-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-glow z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
              />

              {/* Content Card */}
              <AnimatedCard
                variant={cardVariants[index % cardVariants.length]}
                index={index}
                className={cn(
                  "ml-16 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                <div className="bg-card rounded-2xl shadow-elevated overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <motion.span
                        className="px-3 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {event.year}
                      </motion.span>
                      <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                        <Users className="w-4 h-4" />
                        {event.participants}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-3 gradient-text">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Highlights with staggered animation */}
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "hsl(var(--primary) / 0.1)",
                            color: "hsl(var(--primary))",
                          }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}

          {/* AI Verse 4.0 - Upcoming Event (Right Side) */}
          <div className="relative flex items-start gap-8 mb-16 md:flex-row-reverse">
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-glow z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {/* Pulsing ring for upcoming */}
              <motion.div
                className="absolute inset-0 rounded-full gradient-bg"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Content Card */}
            <AnimatedCard
              variant="scale"
              index={3}
              className="ml-16 md:ml-0 md:w-1/2 md:pl-12"
            >
              <TiltCard tiltAmount={6} glare>
                <div className="bg-card rounded-2xl shadow-elevated overflow-hidden group relative">
                  {/* Upcoming Badge */}
                  <motion.div
                    className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3" />
                    </motion.div>
                    Upcoming Event
                  </motion.div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={upcomingEvent.image}
                      alt={upcomingEvent.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <motion.span
                        className="px-3 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {upcomingEvent.year}
                      </motion.span>
                      <div className="flex items-center gap-1 text-primary-foreground/80 text-sm bg-foreground/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <Users className="w-4 h-4" />
                        {upcomingEvent.participants}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Rocket className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-display font-bold gradient-text">
                        {upcomingEvent.title}
                      </h3>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{upcomingEvent.date}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {upcomingEvent.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {upcomingEvent.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "hsl(var(--primary) / 0.1)",
                            color: "hsl(var(--primary))",
                          }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>

                    {/* Register Link */}
                    <Link to="/register">
                      <motion.button
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gradient-bg text-primary-foreground font-semibold text-sm"
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register Now
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                  />
                </div>
              </TiltCard>
            </AnimatedCard>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {events.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "relative flex items-start gap-8 mb-16 last:mb-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-glow z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
              />

              {/* Content Card */}
              <AnimatedCard
                variant={cardVariants[index % cardVariants.length]}
                index={index}
                className={cn(
                  "ml-16 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                <div className="bg-card rounded-2xl shadow-elevated overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <motion.span
                        className="px-3 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {event.year}
                      </motion.span>
                      <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                        <Users className="w-4 h-4" />
                        {event.participants}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-3 gradient-text">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Highlights with staggered animation */}
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "hsl(var(--primary) / 0.1)",
                            color: "hsl(var(--primary))",
                          }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
