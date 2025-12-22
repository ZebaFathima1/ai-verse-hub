import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  Users, 
  Sparkles,
  Mic,
  Code,
  Brain,
  Award,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";

const eventSchedule = [
  {
    day: "Day 1 - March 15, 2025",
    events: [
      { time: "09:00 AM", title: "Registration & Welcome", icon: Users },
      { time: "10:00 AM", title: "Inaugural Ceremony", icon: Sparkles },
      { time: "11:00 AM", title: "Keynote: Future of AI", icon: Mic },
      { time: "01:00 PM", title: "Lunch Break", icon: Clock },
      { time: "02:00 PM", title: "Workshop: Prompt Engineering", icon: Brain },
      { time: "04:00 PM", title: "Hackathon Kickoff", icon: Code },
      { time: "06:00 PM", title: "Day 1 Wrap-up", icon: Star },
    ],
  },
  {
    day: "Day 2 - March 16, 2025",
    events: [
      { time: "09:00 AM", title: "Hackathon Continues", icon: Code },
      { time: "12:00 PM", title: "Project Submissions", icon: Award },
      { time: "01:00 PM", title: "Lunch Break", icon: Clock },
      { time: "02:00 PM", title: "Panel Discussion: AI Ethics", icon: Users },
      { time: "04:00 PM", title: "Final Presentations", icon: Mic },
      { time: "05:30 PM", title: "Prize Distribution", icon: Trophy },
      { time: "06:30 PM", title: "Closing Ceremony", icon: Sparkles },
    ],
  },
];

const prizes = [
  {
    position: "1st",
    amount: "₹25,000",
    label: "Winner",
    color: "from-yellow-400 to-amber-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    position: "2nd",
    amount: "₹15,000",
    label: "Runner Up",
    color: "from-gray-300 to-gray-500",
    bgColor: "bg-gray-400/10",
    borderColor: "border-gray-400/30",
  },
  {
    position: "3rd",
    amount: "₹10,000",
    label: "Second Runner Up",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-600/10",
    borderColor: "border-amber-600/30",
  },
];

const highlights = [
  { icon: Users, label: "500+ Participants", description: "Expected attendees" },
  { icon: Trophy, label: "₹50,000+", description: "Total Prize Pool" },
  { icon: Mic, label: "10+ Speakers", description: "Industry experts" },
  { icon: Code, label: "24-Hour Hackathon", description: "Build innovative AI projects" },
];

const EventDetails = () => {
  return (
    <>
      <Helmet>
        <title>AI Verse 4.0 - Event Details | CSE (AIML)</title>
        <meta 
          name="description" 
          content="AI Verse 4.0 - The Next Frontier of Artificial Intelligence. March 15-16, 2025. Workshops, hackathons, expert talks, and prizes worth ₹50,000+." 
        />
      </Helmet>

      <PageTransition>
        <div className="min-h-screen bg-background">
          <Navbar />
          
          <main className="pt-24 pb-16">
            <div className="container mx-auto px-4">
              {/* Back Link */}
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Timeline
              </Link>

              {/* Hero Section */}
              <ScrollReveal>
                <div className="text-center mb-12">
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Upcoming Event
                  </motion.span>
                  
                  <motion.h1 
                    className="text-4xl md:text-6xl font-display font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="gradient-text">AI Verse 4.0</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-muted-foreground mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    The Next Frontier of Artificial Intelligence
                  </motion.p>

                  {/* Event Info */}
                  <motion.div 
                    className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>March 15-16, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>MLRITM Campus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                  </motion.div>

                  {/* Countdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-sm text-muted-foreground mb-4">Event starts in</p>
                    <CountdownTimer targetDate={new Date("2025-03-15T09:00:00")} />
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <h3 className="font-bold text-lg text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Event Schedule */}
              <ScrollReveal>
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
                    <span className="gradient-text">Event Schedule</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {eventSchedule.map((day, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        className="bg-card rounded-2xl p-6 border border-border"
                        initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + dayIndex * 0.1 }}
                      >
                        <h3 className="text-xl font-bold text-primary mb-6">{day.day}</h3>
                        <div className="space-y-4">
                          {day.events.map((event, eventIndex) => (
                            <motion.div
                              key={eventIndex}
                              className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + eventIndex * 0.05 }}
                            >
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <event.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-foreground">{event.title}</p>
                                <p className="text-sm text-muted-foreground">{event.time}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Prize Pool */}
              <ScrollReveal>
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
                    <span className="gradient-text">Prize Pool</span>
                  </h2>
                  <p className="text-center text-muted-foreground mb-10">
                    Compete for exciting cash prizes and recognition
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {prizes.map((prize, index) => (
                      <motion.div
                        key={index}
                        className={`relative rounded-2xl p-8 text-center border ${prize.borderColor} ${prize.bgColor} overflow-hidden`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.15 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                      >
                        {/* Trophy Icon */}
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center`}>
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Position */}
                        <div className={`text-4xl font-display font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-2`}>
                          {prize.position}
                        </div>
                        
                        {/* Amount */}
                        <div className="text-3xl font-bold text-foreground mb-2">
                          {prize.amount}
                        </div>
                        
                        {/* Label */}
                        <div className="text-muted-foreground">
                          {prize.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Prizes */}
                  <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-muted-foreground">
                      <Star className="w-4 h-4 inline-block text-primary mr-2" />
                      Additional prizes for Best Innovation, Best UI/UX, and Special Mentions
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Registration CTA */}
              <ScrollReveal>
                <motion.div 
                  className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Ready to Join <span className="gradient-text">AI Verse 4.0</span>?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Don't miss this opportunity to learn, build, and compete with the best minds in AI.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="bg-card rounded-xl px-6 py-3 border border-border">
                      <p className="text-sm text-muted-foreground">Registration Fee</p>
                      <p className="text-2xl font-display font-bold gradient-text">₹499</p>
                    </div>
                    
                    <Link to="/register">
                      <Button variant="gradient" size="xl" className="group">
                        Register Now
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </main>

          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default EventDetails;
