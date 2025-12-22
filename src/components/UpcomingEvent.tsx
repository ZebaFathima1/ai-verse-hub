import { Calendar, MapPin, Clock, Sparkles, ArrowRight, Rocket, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-glow">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-primary-foreground">Upcoming Event</span>
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {eventDetails.title}
              </span>
            </h2>
            <p className="text-xl text-primary-foreground/70 max-w-xl mx-auto">
              {eventDetails.tagline}
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                <Calendar className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Date</h3>
              <p className="text-primary-foreground/70">{eventDetails.date}</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Time</h3>
              <p className="text-primary-foreground/70">{eventDetails.time}</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Venue</h3>
              <p className="text-primary-foreground/70">{eventDetails.venue}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {eventDetails.highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <highlight.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground/60">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Register Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-primary-foreground/50 text-sm">
              Limited seats available. Secure your spot today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
