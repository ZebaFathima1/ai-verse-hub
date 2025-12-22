import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Event {
  id: number;
  title: string;
  year: string;
  description: string;
  highlights: string[];
  participants: string;
  image: string;
}

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
              <ScrollReveal
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.15}
                className={cn(
                  "ml-16 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                <motion.div
                  className="bg-card rounded-2xl shadow-elevated overflow-hidden group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
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
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
