import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Icons */}
        <div className="absolute top-1/3 left-20 animate-float opacity-20">
          <Brain className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-1/2 right-32 animate-float opacity-20" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-12 h-12 text-secondary" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-20" style={{ animationDelay: "2s" }}>
          <Zap className="w-14 h-14 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Department of Computer Science
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-primary-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              CSE (AML)
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Innovating the Future with{" "}
            <span className="text-secondary font-semibold">Artificial Intelligence</span>
            {" "}& Machine Learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Register for AI Verse 4.0
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="#events">
              <Button variant="glass" size="lg" className="text-primary-foreground/90 border-primary-foreground/20">
                Explore Past Events
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Participants" },
              { value: "4", label: "Major Events" },
              { value: "50+", label: "Workshops" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
