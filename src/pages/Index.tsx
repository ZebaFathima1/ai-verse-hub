import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsTimeline from "@/components/EventsTimeline";
import UpcomingEvent from "@/components/UpcomingEvent";
import EventGallery from "@/components/EventGallery";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/animations/PageTransition";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>CSE (AIML) - Artificial Intelligence & Machine Learning Department</title>
        <meta 
          name="description" 
          content="Welcome to CSE (AIML) Department - Innovating the future with Artificial Intelligence and Machine Learning. Register for AI Verse 4.0, our flagship event." 
        />
        <meta name="keywords" content="CSE, AIML, Artificial Intelligence, Machine Learning, AI Verse, College Events, Tech Events" />
      </Helmet>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <PageTransition>
          <div className="min-h-screen">
            <Navbar />
            <main>
              <HeroSection />
              <EventsTimeline />
              <UpcomingEvent />
              <EventGallery />
              <TeamSection />
              <FAQSection />
            </main>
            <Footer />
          </div>
        </PageTransition>
      )}
    </>
  );
};

export default Index;
